# Panduan Deploy — Usanagi Umi
### Website → Vercel · Bot → VPS / Pterodactyl

Panduan ini mengikuti kondisi repo saat ini. Semua perintah bisa langsung dijalankan.
Isi setiap nilai yang bertanda `«...»` dengan data milikmu.

> **Aturan pokoknya:** website tidak pernah bicara langsung ke bot. Website bicara ke
> **origin HTTPS** (`https://api.domainmu.com`) yang diteruskan nginx ke port internal bot.
> Port internal bot (2144/3854) **tidak boleh** terbuka ke internet.

```
Browser → Vercel (website + /api/*) → https://api.domainmu.com → nginx → bot API 127.0.0.1:3854
```

---

## 0. Ringkasan tugas

| # | Tugas | Di mana | Perkiraan waktu |
|---|---|---|---|
| 1 | Siapkan VPS: Node, ffmpeg, nginx, firewall | VPS | 15 menit |
| 2 | Pasang bot + isi `config.js` + pairing WhatsApp | VPS | 20 menit |
| 3 | Domain + TLS + reverse proxy untuk bot API | VPS | 15 menit |
| 4 | Jalankan bot sebagai service (PM2 / systemd / Pterodactyl) | VPS | 10 menit |
| 5 | Setup Supabase (jalankan SQL platform) | Supabase | 10 menit |
| 6 | Buat Gist `umi-server-config.json` | GitHub | 5 menit |
| 7 | Deploy website + isi env | Vercel | 15 menit |
| 8 | Verifikasi ujung ke ujung | keduanya | 10 menit |

---

## 1. Persiapan VPS

Minimum yang realistis: **2 vCPU, 2 GB RAM, 20 GB disk** (bot memuat ratusan plugin
dan sesekali memproses gambar/video). Ubuntu 22.04/24.04 diasumsikan.

```bash
# Node.js 20 LTS (bot butuh >= 20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs ffmpeg nginx git

node -v      # harus v20.x atau lebih baru
ffmpeg -version | head -1

# Buat user khusus, jangan jalankan bot sebagai root
sudo adduser --system --group --home /opt/usanagi-umi usanagi
sudo mkdir -p /var/log/usanagi-umi
sudo chown usanagi:usanagi /var/log/usanagi-umi
```

Ambil kode:

```bash
sudo -u usanagi git clone https://github.com/ExisRiss/usanagi-umi-public-source.git /opt/usanagi-umi
cd /opt/usanagi-umi
sudo -u usanagi bash -c 'cd bot && npm ci --omit=dev --no-audit --no-fund'
```

---

## 2. Konfigurasi bot

```bash
cd /opt/usanagi-umi/bot
sudo -u usanagi cp config.example.js config.js
sudo -u usanagi nano config.js
```

Yang **wajib** diisi:

| Field | Isi |
|---|---|
| `global.owner` | `[['62812xxxxxxx', 'Namamu', true]]` |
| `global.namebot` | Nama bot yang tampil di menu |
| `global.mainBot.defaultPrefix` | Prefix perintah, mis. `/` |
| `global.jadibotPlatform.apiPort` | Port API internal, mis. `3854` |
| `global.jadibotPlatform.supabaseUrl` | `https://xxxx.supabase.co` |
| `global.jadibotPlatform.supabaseAnonKey` | anon/public key Supabase |
| `global.jadibotPlatform.ownerEmails` | Email yang boleh masuk sebagai Owner |
| `global.jadibotPlatform.lockedOwnerNumber` | Nomor owner yang tidak bisa diubah dari website |

Yang **opsional**: `global.usanagiAI.*` (Groq/Gemini/OpenRouter), `global.links.*`,
`global.ownerInfo.*`, `global.scriptUrl`.

Cek kesiapan dengan preflight bawaan repo:

```bash
sudo -u usanagi node /opt/usanagi-umi/deploy/scripts/preflight.mjs --bot
```

Preflight akan **gagal** selama masih ada placeholder — itu memang tujuannya.
Setelah semua lulus, lanjut ke pairing.

### Pairing WhatsApp

```bash
cd /opt/usanagi-umi/bot
sudo -u usanagi PAIRING_NUMBER=62812xxxxxxx node main.js
```

Masukkan kode 8 digit di WhatsApp → **Perangkat Tertaut** → **Tautkan dengan nomor telepon**.
Setelah tersambung, hentikan proses (Ctrl+C). Folder `sessions/` sekarang terisi.

> `sessions/` = kunci akun WhatsApp-mu. Sudah masuk `.gitignore`. Jangan pernah
> di-commit, jangan kirim lewat chat, dan backup dalam bentuk terenkripsi.

---

## 3. Domain + TLS + reverse proxy

Arahkan subdomain ke IP VPS:

```
api.domainmu.com   A   «IP_VPS»
```

Buka file berikut dan ganti `api.domainmu.com` + port sesuai `config.js`:

```bash
sudo cp /opt/usanagi-umi/deploy/nginx/umi-bot-api.conf /etc/nginx/sites-available/umi-bot-api
sudo nano /etc/nginx/sites-available/umi-bot-api
sudo ln -s /etc/nginx/sites-available/umi-bot-api /etc/nginx/sites-enabled/

sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d api.domainmu.com

sudo nginx -t && sudo systemctl reload nginx
```

Setelah TLS aktif, kunci port internal dari internet:

```bash
sudo bash /opt/usanagi-umi/deploy/scripts/firewall-ufw.sh
# Sesuaikan API_PORT bila kamu memakai port lain:
# sudo API_PORT=3854 API_PORT_ALT=2144 bash deploy/scripts/firewall-ufw.sh
```

Uji:

```bash
# Dari mesin lain — harus "filtered" / timeout
nmap -Pn -p 3854 «IP_VPS»

# Harus mengembalikan JSON dari bot
curl -s https://api.domainmu.com/api/health
```

> `/api/health` baru hidup setelah bot berjalan (langkah 4).

---

## 4. Menjalankan bot sebagai service

Pilih **satu** cara sesuai tempatmu.

### A. PM2 (VPS biasa)

```bash
sudo npm i -g pm2
cd /opt/usanagi-umi
sudo -u usanagi pm2 start deploy/bot/ecosystem.config.cjs
sudo -u usanagi pm2 save
sudo -u usanagi pm2 startup systemd -u usanagi --hp /opt/usanagi-umi   # jalankan perintah yang dicetak
```

Sesuaikan `cwd` di `ecosystem.config.cjs` bila bukan `/opt/usanagi-umi/bot`.

### B. systemd (tanpa PM2)

```bash
sudo cp /opt/usanagi-umi/deploy/bot/usanagi-umi.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now usanagi-umi
sudo journalctl -u usanagi-umi -f
```

### C. Pterodactyl

1. Unggah isi repo ke server panel (isi `bot/` sebagai server root, atau seluruh repo
   dengan `BOT_DIR` diarahkan ke `bot/`).
2. Di egg → **Startup Command**, set:

   ```
   bash start-pterodactyl.sh
   ```

3. Pastikan alokasi port panel sama dengan `apiPort` bila ingin seragam, lalu buka
   port itu hanya ke reverse proxy — bukan ke publik.
4. Jangan pakai PM2 di dalam Pterodactyl: panel sudah mengelola prosesnya.

### Update aman di kemudian hari

```bash
cd /opt/usanagi-umi
sudo -u usanagi SERVICE_KIND=pm2 bash deploy/bot/update.sh
```

Script ini: backup → tarik kode → `npm ci` → preflight → jalankan tes → restart.
Kalau tes gagal, bot **tidak** direstart.

---

## 5. Supabase

1. Buat project Supabase baru.
2. Buka **SQL Editor**, jalankan seluruh isi `website/supabase-platform.sql`.
3. Catat tiga nilai dari **Project Settings → API**:
   - Project URL → `SUPABASE_URL`
   - `anon` public key → dipakai bot (`supabaseAnonKey`) dan website
   - `service_role` key → **hanya** di env server website, tidak pernah ke browser

---

## 6. Gist konfigurasi dinamis

Website mengambil alamat bot dari Gist, jadi kalau IP/origin bot berubah kamu tidak
perlu redeploy Vercel.

1. Buat Gist **publik** dengan satu file bernama `umi-server-config.json`
   (salin struktur dari `website/umi-server-config.example.json`):

   ```json
   {
     "schemaVersion": 1,
     "version": "2026-10-14T00:00:00Z",
     "refreshSeconds": 60,
     "botApiOrigin": "https://api.domainmu.com"
   }
   ```

2. Ambil **raw URL**-nya (`https://gist.githubusercontent.com/.../raw/umi-server-config.json`).

> Isi Gist hanya boleh berupa alamat. **Jangan** taruh token, nomor WhatsApp,
> pairing code, atau kredensial apa pun di sana — Gist itu publik.

---

## 7. Deploy website ke Vercel

```bash
npm i -g vercel
cd /opt/usanagi-umi     # atau di laptopmu

export UMI_CONFIG_GIST_URL='https://gist.githubusercontent.com/.../raw/umi-server-config.json'
export UMI_API_ORIGIN='https://api.domainmu.com'
export BACKUP_CRON_SECRET="$(openssl rand -hex 32)"
export BOT_BACKUP_EXPORT_SECRET="$(openssl rand -hex 32)"
# opsional: export BLOB_READ_WRITE_TOKEN='...'  SUPABASE_URL='...'  SUPABASE_SERVICE_ROLE_KEY='...'

bash deploy/scripts/vercel-deploy.sh
```

Script itu melakukan `vercel link` → mengunggah env ke production/preview/development →
`vercel --prod` → memanggil `/api/health`.

Alternatif manual lewat dashboard Vercel:

- **Root Directory**: `website`
- **Framework Preset**: Other
- **Environment Variables**: daftar di atas, untuk Production + Preview + Development

| Variable | Wajib | Fungsi |
|---|---|---|
| `UMI_CONFIG_GIST_URL` | ya | Alamat bot API dibaca dinamis dari Gist |
| `UMI_API_ORIGIN` | fallback | Dipakai bila tanpa Gist |
| `BACKUP_CRON_SECRET`, `BOT_BACKUP_EXPORT_SECRET` | untuk backup | Kunci backup terjadwal |
| `BLOB_READ_WRITE_TOKEN` | untuk backup | Simpan arsip backup |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | ya | Auth & data platform (server-side saja) |

---

## 8. Verifikasi ujung ke ujung

```bash
# 1. Bot API langsung (dari dalam VPS)
curl -s http://127.0.0.1:3854/api/health

# 2. Bot API lewat TLS
curl -s https://api.domainmu.com/api/health

# 3. Website bisa meneruskan
curl -s https://«domain-website»/api/health
```

Semua langkah ini harus mengembalikan JSON dengan `ok: true`.
Terakhir, buka website → login dengan email `ownerEmails` → halaman **Connect**
untuk memasang Jadibot.

---

## 9. Perawatan rutin

```bash
# Backup harian (config + sesi + database), simpan 14 arsip terakhir
sudo -u usanagi bash /opt/usanagi-umi/deploy/bot/backup.sh

# Update
sudo -u usanagi SERVICE_KIND=pm2 bash /opt/usanagi-umi/deploy/bot/update.sh

# Lihat log
sudo -u usanagi pm2 logs usanagi-umi            # PM2
sudo journalctl -u usanagi-umi -f               # systemd
```

Pasang backup sebagai cron harian:

```bash
sudo -u usanagi crontab -e
# 0 3 * * * bash /opt/usanagi-umi/deploy/bot/backup.sh >> /var/log/usanagi-umi/backup.log 2>&1
```

---

## 10. Pemecahan masalah

| Gejala | Penyebab paling sering | Solusi |
|---|---|---|
| `/api/health` website mengembalikan error | `botApiOrigin` salah / bot mati | Cek `curl https://api.domainmu.com/api/health` di VPS |
| Login website berhasil tapi dashboard kosong | `SUPABASE_SERVICE_ROLE_KEY` belum diisi | Isi di env Vercel, lalu redeploy |
| Jadibot tidak mau connect | `supabaseUrl`/`supabaseAnonKey` di `config.js` beda project | Samakan dengan yang dipakai website |
| Bot logout sendiri berulang | `sessions/` rusak / dipakai dua proses | Pastikan hanya 1 proses, pairing ulang bila perlu |
| Port 3854 terlihat dari internet | firewall belum aktif | Jalankan `deploy/scripts/firewall-ufw.sh` lalu uji dengan `nmap` |
| Deploy Vercel gagal "No Output Directory" | Root Directory belum diset | Set Root Directory = `website` |

---

## Lampiran — isi `deploy/`

```
deploy/
├── bot/
│   ├── ecosystem.config.cjs     # PM2 untuk VPS biasa
│   ├── usanagi-umi.service      # systemd (alternatif PM2)
│   ├── start-pterodactyl.sh     # Startup Command untuk egg Pterodactyl
│   ├── update.sh                # update aman: backup → tes → restart
│   └── backup.sh                # arsip config + sesi + database
├── nginx/
│   └── umi-bot-api.conf         # reverse proxy HTTPS + rate limit
└── scripts/
    ├── preflight.mjs            # cek kesiapan bot & website sebelum live
    ├── firewall-ufw.sh          # kunci port API internal dari publik
    └── vercel-deploy.sh         # link + set env + deploy + verifikasi
```
