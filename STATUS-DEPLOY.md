# Status Deploy — Usanagi Umi

**Diperbarui:** 14 Oktober 2026, 21:10 WITA
**Status keseluruhan:** 🟢 **BOT PINDAH KE SERVER BARU & HIDUP — website, tunnel, API tersambung**
**⚠️ Perlu tindakanmu:** pairing WhatsApp ulang + kunci Groq (lihat bagian di bawah)

---

## 🎬 Perbaikan Fitur `.ytplay` — Player Video YouTube (14 Oktober 2026)

**Gejala:** `.ytplay <judul>` / `.ytp <link>` tidak menampilkan player apa pun.

### Akar masalahnya: primitif yang salah

Pesan HTML "AI Rich" di WhatsApp hanya dirender kalau amplopnya lengkap. `play3.js`
memakai primitif bernama **`FOAHtmlPrimitiveDemoDONOTUSE`** — namanya sendiri berarti
*"primitive demo, JANGAN DIPAKAI"*. Itu primitif demo, bukan primitif HTML yang
benar-benar dirender WhatsApp.

Bukti dari repo sendiri: `GenAIaeacdsnwHtmlPrimitive` dipakai **~60 plugin** yang
berfungsi (play2, ping3, semua game, tts, dll), sedangkan `FOAHtmlPrimitiveDemoDONOTUSE`
hanya dipakai 2 berkas — salah satunya `play3.js` ini.

Empat cacat lain di amplop yang sama:

| Cacat | Seharusnya |
|---|---|
| Tanpa `messageContextInfo.botMetadata.botResponseId` | ada (id yang sama dengan `messageId`) |
| Tanpa `submessages` (judul di baris atas pesan) | ada |
| `contextInfo` tanpa `forwardingScore` + `forwardedAiBotMessageInfo.botJid` | ada |
| Opsi relay `{ additionalAttributes, edit }` | `{ messageId }` |

Bentuk yang benar sudah ada di repo: `plugins/music/play2.js` dan
`plugins/main/usanagi-ping3.js`. Amplop `play3.js` sekarang disamakan dengan keduanya.

### Cacat lain yang ikut diperbaiki
1. **Nama channel selalu kosong.** Kode memakai `info.author`, padahal SaveTube tidak
   pernah mengembalikan field itu — jadi semua video berlabel "YouTube". Sekarang nama
   channel diambil dari oEmbed resmi YouTube (tanpa API key). Terbukti: label sekarang
   "Alan Walker", bukan "YouTube".
2. **Pesan "sedang memproses" muncul sebelum input diperiksa.** Orang yang lupa menulis
   judul tetap melihat "⏳ memproses" lalu pesan contoh. Sekarang input diperiksa dulu.
3. **Tidak ada umpan balik.** Ditambahkan reaksi ⏳ → ✅/❌, sama seperti 162 plugin lain.
4. **Tidak ada jalan keluar kalau perangkat tidak mendukung pesan HTML.** Sekarang kalau
   relay gagal, bot mengirim teks biasa berisi judul, channel, durasi, dan tautan —
   perintahnya tidak digagalkan.

### Yang ternyata TIDAK rusak
Rantai teknisnya sehat, sudah dibuktikan satu per satu sebelum menyentuh kode:

| Bagian | Hasil |
|---|---|
| Pencarian YouTube (InnerTube) | ✅ 200, 249 `videoId` ditemukan |
| oEmbed | ✅ 200, judul + nama channel |
| SaveTube (pengambil link) | ✅ langsung 1,9 detik, format 360 & 720 |
| Link video benar-benar bisa diunduh | ✅ HTTP 206, `content-type: video/mp4`, magic `ftyp` |
| Server WebSocket `stream.kanara.my.id` | ✅ handshake OK, **6,34 MB video mengalir utuh** |

Yang **mati** justru resolver cadangan yang tidak dipakai `play3.js`: Piped
(`pipedapi.kavin.rocks`, `pipedapi.adminforge.de`) → 403 dan Invidious
(`inv.nadeko.net` → 403, `invidious.nerdvpn.de` → 401). Keduanya sudah tidak bisa dipakai;
kalau nanti `integrations/rimuru/.../ytplay.js` ikut diperbaiki, resolver-nya perlu diganti.

### Pengujian
| Uji | Cakupan | Hasil |
|---|---|---|
| `tools/test-ytplay.mjs` | 28 pemeriksaan: amplop pesan, isi player, fallback, link langsung | **28/28 lulus** |
| `tools/test-ytplay-browser.mjs` | 23 pemeriksaan di Chrome sungguhan: render, streaming, pemutaran, kontrol | **23/23 lulus** |

Uji browser memakai video nyata: **6,34 MB stream → blob → video berjalan di 640×360**,
waktu berjalan maju, dan semua kontrol berfungsi (putar/jeda, geser, volume, bisu,
maju/mundur 10 detik, ulang). Tangkapan layar:
`vendor/ytplay-test/player.png`.

### Deploy
`plugins/music/play3.js` 23.024 → 26.507 byte. Diunggah, md5 server =
md5 lokal (`c1e4abf3929091737f04a8f4aa91f05a`), bot di-restart, **2022 plugin dimuat
tanpa error**.

---

## ⚠️ Koreksi: sesi WhatsApp TIDAK hilang

Laporan sebelumnya menyebut sesi WhatsApp hilang bersama panel3 dan bot harus
di-pairing ulang. **Itu keliru.** Setelah bot hidup di panel5, sesi-sesinya pulih
sendiri:

```
[JADIBOT] 6281935568221 berhasil terhubung
[JADIBOT] 6283182814545 berhasil terhubung
[JADIBOT] 6283878775317 berhasil terhubung
[JADIBOT] 6285137419379 berhasil terhubung
[JADIBOT] 62882003705887 berhasil terhubung
[JADIBOT] 62882021382264 berhasil terhubung   (restore)
7 folder di /sessions/jadibot, semuanya punya creds.json
```

Bot juga sudah melayani pengguna sungguhan (log menunjukkan pemakaian fitur video
21 MB). Jadi **tidak perlu pairing ulang.**

Yang **belum berhasil ditelusuri**: jalur pemulihan sesinya. Container baru dalam
keadaan kosong saat pertama dinyalakan, tetapi sesi sudah tersambung beberapa menit
kemudian. Yang sudah dipastikan bukan penyebabnya: repo (nomor sesi tidak ada di
sumber), berkas cadangan di container (tidak ada), dan website (tidak punya kredensial
panel). Kemungkinan besar platform memulihkan sesi lewat endpoint
`/api/session/{pairing,start}` di `lib/jadibot-platform-api.js`, tetapi ini **belum
dibuktikan** — jangan dijadikan asumsi kalau pindah server lagi.

Kesimpulan praktisnya: **jangan menganggap migrasi server otomatis menghapus sesi.**
Periksa dulu lewat `tools/console-logs.mjs --grep "berhasil terhubung"` sebelum
menyuruh pengguna pairing ulang.

---

## 🧰 Catatan tooling (agar tidak mengulang kerja)

**`.secrets/upload/` dan `cloudflared` tidak ikut tersimpan antar sesi** — isinya
(24 MB arsip + 38 MB biner) melewati batas snapshot. Yang tersimpan: `.secrets/*.env`,
`bot-config.js`, `tunnel.json`, dan `usanagi-credentials.env`.

Dua skrip mengembalikannya dalam hitungan detik:

```bash
bash tools/restore-assets.sh                    # 4 arsip deploy + cloudflared
node tools/make-deploy-env.mjs                  # 5 berkas konfigurasi server
```

`tools/make-deploy-env.mjs` (baru) membangun ulang `config.js`, `.tunnel.env`,
`.main-bot.env`, `.owner-console-relay.env`, dan `.backup-export.env` dari sumber yang
benar. Khususnya: rahasia relay diambil **dari env Vercel**, bukan dari berkas lokal —
berkas lokal memuat nilai lama 64 karakter sedangkan yang berlaku 1168 karakter, dan
relay menolak tiket kalau tidak sama persis.

**Kredensial panel tersimpan di dua tempat** dan `tools/ptero.mjs` memilih lewat
`PTERO_ENV_FILE`:

```bash
node tools/ptero.mjs ls                                            # panel3 (mati)
PTERO_ENV_FILE=.secrets/panel5-credentials.env node tools/ptero.mjs ls   # panel5
```

Tool juga membaca `PTERO_SERVER_ID` dari berkas env dan **berhenti dengan pesan jelas**
kalau kosong — sebelumnya ada ID server bawaan yang di-hardcode yang membuat panel membalas
"404 resource not found" yang menyesatkan.

---

## 🚚 Pindah ke Server Baru — panel5 (14 Oktober 2026)

### Kondisi yang ditemukan
Panel lama **`panel3.ikyhost.cloud` sudah mati total**: DNS masih me-resolve
(172.232.235.163) tapi koneksi TCP timeout. Bot, tunnel, dan seluruh isi container
ikut hilang bersamanya — bukan sekadar panelnya yang tidak bisa dibuka.

| | Panel lama | Panel baru |
|---|---|---|
| URL | panel3.ikyhost.cloud | **panel5.ikyhost.cloud** |
| Server | `serverkuVip` (`d4116029`) | **`serverbackupVip` (`0024af12`)** |
| Alokasi | 172.232.235.163:3507 | 159.223.57.221:3519 |
| Docker | Node.js 23 | Node.js 23 |
| SFTP | — | node5.ikyhost.cloud:2022 |
| Status | 🔴 mati total | 🟢 **hidup** |

### Yang hilang dan tidak bisa dipulihkan
Karena container lama tidak bisa dijangkau sama sekali:

| Data | Akibat |
|---|---|
| `sessions/jadibot/6285199253218/` | **Sesi WhatsApp hilang → bot harus di-pairing ulang** |
| `database.json` | Data ekonomi/uang/trading pengguna mulai dari nol |
| `.env.groq` (kunci AI) | **Perlu kunci Groq baru** kalau ingin fitur AI menyala |
| `data/jadibot-backups/` | Arsip backup lama ada di dalam container, ikut hilang |

Backup otomatis memang sudah aktif, tapi arsipnya disimpan **di dalam container**
(`data/jadibot-backups`) dan di Vercel Blob lewat cron — yang di container tidak
tertolong. Tidak ada tabel backup di Supabase.

### Cara pindahnya (yang dijalankan)
Tidak perlu mengubah domain, DNS, atau konfigurasi tunnel — desainnya sudah benar.
`cloudflared` menyambung ulang dari IP server baru.

1. Kredensial panel5 disimpan di `/home/user/.secrets/panel5-credentials.env` (chmod 600,
   di luar repo).
2. `tools/restore-assets.sh` membangun ulang 4 arsip deploy + mengunduh `cloudflared`.
3. Berkas konfigurasi disusun dari sumber yang benar:
   - `config.js` ← `.secrets/bot-config.js` (versi produksi, bukan versi repo)
   - `.tunnel.env` ← token tunnel `umi-api-gwenna`
   - `.owner-console-relay.env` ← **diambil dari env Vercel**, bukan dari berkas lokal
     (berkas lokal memuat nilai lama 64 karakter; yang berlaku 1168 karakter)
   - `.main-bot.env` ← bot utama **NONAKTIF**
   - `.backup-export.env` ← nama variabel harus `UMI_BACKUP_EXPORT_SECRET` dan
     `UMI_BACKUP_CRON_SECRET` (dibaca dari `process.env`, bukan nama berkasnya)
4. Unggah 5 berkas konfigurasi + 4 arsip + `cloudflared` (38 MB) + `config.js` ke server.
5. Ekstrak, lalu `npm install` → **729 paket, 0 vulnerabilities**.
   Panel memblokir install script 6 paket (better-sqlite3, canvas, ffmpeg, biome,
   protobufjs, elaina-baileys) — inilah alasan `scripts/boot.js` ada, dan hasilnya
   terverifikasi: `better_sqlite3.node`, `canvas/build/Release/` (26 berkas),
   `@ffmpeg-installer/linux-x64/ffmpeg` (66 MB) semuanya terbentuk.
6. `CMD_RUN` diubah dari `npm start` → **`npm run tunnel-start`**.

### Bug tooling yang ditemukan & diperbaiki
`tools/ptero.mjs` punya **ID server bawaan yang di-hardcode** (`d4116029`, milik panel3).
Ketika berkas env panel5 dipakai tanpa `PTERO_SERVER_ID`, tool diam-diam menembak server
yang tidak ada di panel itu dan panel membalas **404 "resource not found"** — pesan yang
menyesatkan, karena masalahnya bukan path melainkan server target. Sekarang ID server
tidak lagi ditebak: kalau tidak ada di berkas env, tool berhenti dengan pesan jelas.
Tool juga menerima `PTERO_ENV_FILE` untuk berpindah panel.

Kedua berkas env diberi `PTERO_SERVER_ID` masing-masing, jadi panel3 dan panel5 bisa
dipakai bergantian tanpa saling menimpa.

### Bukti verifikasi
```
tunnel umi-api-gwenna  → 4 koneksi: sin17 · sin22 · sin08 · sin02
ingress                → api.gwenna.my.id + umi-api.gwenna.my.id → localhost:3854

GET api.gwenna.my.id/api/health              → 200 {"ok":true,"version":"1.4.0"}
GET umi-api.gwenna.my.id/api/health          → 200
GET alzriss-comunity.vercel.app/api/health   → 200
GET alzriss-comunity.vercel.app/api/v1/health→ 200 (Unified API, Supabase)
GET /api/main|me|agent/status                → 401 (benar, butuh login)

Boot:  ⚙️ Bot utama: NONAKTIF  ·  [JADIBOT-API] Aktif di 0.0.0.0:3854
       Successfully Loaded 2022 Plugins  ·  Bot siap digunakan!
       [VERCEL-BACKUP-SCHEDULER] Backup berikutnya dijadwalkan 14:00:02Z

Stabilitas: uptime 47s → 68s → 89s (naik konsisten) · memori stabil 238 MB
Plugin: plugins/game/trading1.js md5 a3d6fdece20bccce4ba82c2cd57d904f (identik dengan lokal)
Relay owner-console: tiket HMAC diterima (secret cocok dengan Vercel)
```

### Yang masih perlu kamu lakukan
1. **Pairing WhatsApp ulang** — buka website → halaman Pairing → masukkan nomor →
   masukkan kode di WhatsApp. Sesi lama tidak bisa dipulihkan.
2. **Kunci Groq** (opsional) — kalau ingin fitur AI menyala, kirim kunci Groq baru;
   nanti dipasang sebagai `.env.groq` di server.

### Kalau panel5 ini juga mati nanti
Data yang tidak akan selamat adalah sesi WhatsApp dan `database.json`. Kalau mau aman,
minta bot menulis backup ke luar container (Vercel Blob lewat cron sudah ada — pastikan
cron-nya benar-benar jalan).

---

## 🎨 Tema Liquid Glass — versi TRANSPARAN + BAYANGAN BERLAPIS

**Live:** https://alzriss-comunity.vercel.app

Permintaan: kaca yang lebih transparan dengan efek bayangan. Keduanya diperkuat
lewat token, sehingga otomatis berlaku ke seluruh permukaan (token bayangan
dipakai 15×, jadi sekali ubah pasti terasa di semua tempat).

### Transparansi

| Elemen | Sebelum | Sesudah |
|---|---|---|
| Lapisan putih kaca (atas → bawah) | 0.13 → 0.02 | **0.10 → 0.012** |
| Blur | 34px | **40px** (permukaan 18–28px) |
| Saturasi | 180% | **190%** |
| Latar panel/header/kartu | kaca saja | kaca + selubung gelap 0.34 |
| Input | 0.055 | **0.035** |

Kunci keterbacaan: alpha putih diturunkan, tapi ditambah **selubung gelap tipis**
(`--lg-scrim`, alpha 0.22–0.5) di tumpukan latar belakang. Jadi kaca terlihat
bening dan gradasi latar tetap menembus, sementara teks tetap kontras. Ini cara
Apple melakukannya — transparan di permukaan, gelap di belakang teks.

### Bayangan berlapis (4 lapis)

| Lapis | Fungsi | Contoh (lg) |
|---|---|---|
| 1. Rim light | kilau di tepi atas | `inset 0 1px 0 rgba(255,255,255,.24)` |
| 2. Contact | bayangan rapat, menempel | `0 2px 6px -2px rgba(0,0,0,.62)` |
| 3. Ambient | bayangan lebar, beri ruang | `0 46px 96px -44px rgba(0,0,0,.98)` |
| 4. Glow biru | ikat kaca ke latar | `0 30px 72px -38px rgba(10,132,255,.5)` |

Ditambah **efek mengambang**: kartu terangkat 3px saat di-hover dengan bayangan
yang juga menguat (`--lg-shadow-lift-lg`).

### Diverifikasi

```
AUDIT COMPUTED STYLE (browser sungguhan, bukan asumsi)
permukaan          blur   saturasi  lapis bayangan
Header workspace   28px   180%      5
Panel              26px   180%      5
Kartu statistik    22px   180%      5
Area pesan         -      -         1
Pil navigasi       18px   170%      1

42/42 kombinasi viewport × halaman → bersih, 0 overflow, 0 error JS
```

### Bug yang ditemukan & diperbaiki

Pass transparansi baruku menimpa latar `.btn-yellow` dan `.btn-primary`
(spesifisitas setara, aturan lebih akhir) → tombol **+ NOMOR BARU jadi gelap**.
Diperbaiki dengan `:not(.btn-primary):not(.btn-yellow)` dan varian tombol
dinyatakan ulang sesudahnya. Diverifikasi: `.btn-yellow` kembali kuning
(`rgb(36,25,10)` di atas gradasi kuning).

### Bug lain (di luar produksi)

Server preview lokalku mengembalikan `index.html` untuk **semua** permintaan
`/assets/*` — fallback-nya terlalu agresif. Bukan masalah website, tapi bisa
menyesatkan saat verifikasi; sudah diperbaiki agar hanya berlaku untuk
permintaan direktori.

---

---

## 🔐 Halaman "Bot Utama" — kenapa pairing tidak muncul, dan apa yang diperbaiki

**Diperbarui:** 14 October 2026, 15:42 WITA

### Pertanyaan: "Kenapa pas mau masukin pairing aku ga dapet notif pairing?"

Ada **tiga** penyebab terpisah, semuanya sudah diperbaiki dan diuji.

#### 1. Ketikan di console panel tidak pernah sampai ke bot

`npm run tunnel-start` menjalankan bot sebagai *job latar* dengan `&`. Pada shell
non-interaktif, job latar mendapat `/dev/null` sebagai stdin. Akibatnya readline
yang menunggu nomor langsung menerima EOF dan tertutup seketika — persis seperti
yang terlihat di console:

```
❌ Pairing belum berhasil: Prompt pairing ditutup karena koneksi sedang dibuat ulang.
```

**Perbaikan:** bot sekarang dijalankan di latar depan; cloudflared yang di latar
belakang. **Terbukti bekerja** — diuji dengan mengirim `12345` ke console:

```
📱 Masukkan nomor WhatsApp: 12345
⚠️ Nomor tidak valid. Gunakan format 628xxxxxxxxxx, lalu coba lagi.
```

#### 2. Bot tidak punya cara pairing tanpa prompt

Hanya `core/awang-koneksi.js` yang membaca `PAIRING_NUMBER`; jalur yang dipakai
bot utama (`main.js`) hanya punya prompt interaktif.

**Perbaikan:** `main.js` sekarang membaca `PAIRING_NUMBER` lebih dulu, memeriksa
apakah stdin benar-benar bisa dibaca, dan kalau tidak, berhenti dengan pesan yang
jelas alih-alih mengulang tanpa henti.

#### 3. File relay console tidak ada → seluruh halaman gagal

Halaman "Bot Utama" memanggil endpoint `platform/main-console/*` yang diteruskan
ke bot dengan tiket HMAC. Bot membaca kunci dari `.owner-console-relay.env`.
**File itu tidak pernah ada di container**, sehingga setiap permintaan gagal
dengan `503 Relay console owner belum dikonfigurasi.`

**Perbaikan:** file dibuat di container (izin 600) berisi `UMI_CONSOLE_RELAY_SECRET`
yang sama dengan yang ada di environment Vercel. Salinan disimpan di
`.secrets/console-relay-secret.txt`.

### Setting baru: bot utama ON/OFF

Sesuai permintaan, bot utama sekarang bisa dimatikan total. Saat nonaktif:

- tidak menyambung ke WhatsApp,
- tidak memunculkan prompt pairing,
- tidak ikut loop reconnect (yang sebelumnya membanjiri console dengan
  `Koconeksi terputus: QR refs attempts ended (percobaan 11, kode 408)`),

sementara **jadibot dan API platform tetap berjalan normal**.

| Berkas | Isi | Izin |
|---|---|---|
| `/home/container/.main-bot.env` | `MAIN_BOT_ENABLED` · `MAIN_BOT_PAIRING_NUMBER` | 600 |
| `/home/container/.owner-console-relay.env` | `UMI_CONSOLE_RELAY_SECRET` | 600 |

Keduanya di luar repo, tidak ikut commit, dan tidak ikut backup.

### Halaman Bot Utama (website) — sekarang berfungsi

Halaman ini sebenarnya **sudah ada** di source, tapi tidak bisa dipakai karena
masalah nomor 3 di atas. Sekarang tombol dan form-nya benar-benar hidup:

| Bagian | Fungsi |
|---|---|
| Status | Bot utama AKTIF/NONAKTIF, socket, prompt console, uptime |
| Tombol ON/OFF | Nyalakan/matikan bot utama tanpa restart panel |
| Form nomor | Simpan nomor permanen → bot langsung minta pairing code |
| Kotak kode + SALIN CODE | Menangkap `PAIRING CODE:` dari log dan menyalinnya |
| Terminal | Log mentah proses bot, bisa diketik untuk prompt lain |

Nomor disimpan permanen, jadi pairing **tidak lagi bergantung pada prompt console
yang bisa tertutup saat socket menyambung ulang** — penyebab kegagalan utama.

### Pengujian endpoint (semua lulus)

```
POST pairing-number {number:"999"}   → 400 nomor tidak valid
POST main-bot {enabled:true}          → 200 main_bot_enabled = true
POST main-bot {enabled:false}         → 200 main_bot_enabled = false
POST main-bot {enabled:"yes"}         → 400 harus boolean
GET  owner-console/status               → 200 (sebelumnya 503)
GET  owner-console/logs?cursor=0        → 200, buffer log berjalan
```

### Perbaikan tampilan

Tema liquid glass membuat `.mini` jadi pill, dan karena tombol salin ikut
meregang setinggi kotak kode, bentuknya berubah jadi bulat. Ditambahkan
`align-items: center` pada `.pair-actions`. Versi CSS dinaikkan ke
`?v=20261014-lg2` agar cache CDN tidak menyajikan berkas lama.

### Cara pakai

1. Buka **Bot Utama** di navigasi website (khusus akun owner).
2. Klik **AKTIFKAN BOT UTAMA**.
3. Masukkan nomor WhatsApp bot, tekan **SIMPAN & MINTA CODE**.
4. Kode muncul di kotak dan di terminal — tekan **SALIN CODE**.
5. WhatsApp → **Perangkat tertaut** → **Tautkan dengan nomor telepon** → tempel kode.

---

---

## 💹 Game Baru: /trading1 — Simulator Trading

**Berkas:** `bot/plugins/game/trading1.js` (1025 baris, 36,6 KB)
**Status:** terpasang & aktif di bot (`reloaded plugin 'game/trading1.js'`)

Game trading lengkap di mana **setiap pengguna punya akun sendiri**: saldo cash,
portofolio, harga rata-rata, riwayat transaksi, dan laba/rugi terpisah.

### Menyerupai trading sungguhan

| Fitur | Keterangan |
|---|---|
| Harga bergerak sendiri | Update tiap 45 detik, random walk + mean reversion |
| Spread | Harga beli & jual berbeda, seperti bursa |
| Biaya transaksi | 0,15% tiap transaksi, masuk harga rata-rata |
| Harga rata-rata | Dihitung otomatis saat beli berkali-kali |
| P/L berjalan & realisasi | Dua jenis laba/rugi, seperti portofolio nyata |
| Order limit | Tereksekusi otomatis saat harga menyentuh |
| Stop loss & take profit | Posisi dijual sendiri tanpa dipantau |
| Dana tertahan | Order beli terbuka menahan saldo |

### 8 aset dengan karakter berbeda

`UMIC` (2,2%/tick) · `GOLD` (0,4% — paling aman) · `ALZR` · `NERO` · `SAWT` ·
`SBNK` · `KOPI` · `GAME` (2,8% — paling volatil)

### 18 perintah dalam satu command

`daftar` · `market` · `cek` · `beli` · `jual` · `limit beli/jual` · `order` ·
`batal` · `portofolio` · `riwayat` · `sl` · `tp` · `setor` · `tarik` · `top` ·
`bantuan`

### Ekonomi terhubung uang bot

Setor menarik dari `user.money`, tarik mengembalikannya. Modal awal 25.000
(gratis, sekali per akun), setoran minimum 1.000, transaksi minimum 100.

### Keputusan teknis penting

**Mesin harga tanpa timer.** Tidak memakai `setInterval`. Setiap perintah
mengejar tick yang tertinggal, maksimal 240 langkah sekali jalan. Alasannya:
plugin di-reload dengan cache-buster, jadi timer akan menumpuk dan bocor.
Dengan cara ini hot reload aman dan posisi tetap utuh setelah bot restart.

**Data di `global.db.data.trading1`** sehingga ikut tersimpan oleh database bot.
Grafik dibatasi 120 titik per aset dan 25 transaksi per akun agar database tidak
menggelembung.

### Pengujian

- **49/49 lulus** pada simulasi lingkungan bot (akun, pasar, beli/jual,
  setor/tarik, portofolio, order limit, stop loss, peringkat, ketahanan).
- Ketinggalan 10 hari → tetap selesai cepat karena batas 240 langkah.
- Hot reload 3× → tidak ada akun ganda, tidak ada timer bocor.

Panduan lengkap: `PANDUAN-TRADING1.md`

---

## 🎉 Pemulihan selesai

Panel lama (panel4) mati total, kini bot berjalan di **panel3** dan seluruh rantai
koneksi sudah diverifikasi hidup.

```
Browser
   │
   ▼
https://alzriss-comunity.vercel.app          ← Vercel · tema liquid glass iOS 16
   │  /api/* diteruskan
   ▼
https://api.gwenna.my.id                     ← Cloudflare Tunnel (healthy, 4 koneksi)
   │
   ▼
127.0.0.1:3854 di container baru             ← bot API
   │
   ▼
Bot WhatsApp + 2.021 plugin
```

---

## Perpindahan panel

| | Panel lama | Panel baru |
|---|---|---|
| URL | panel4.ikyhost.cloud | **panel3.ikyhost.cloud** |
| Akun | `serverbot` | `serverku` |
| Server | `serverbotVip` (`04cb89b4`) | **`serverkuVip` (`d4116029`)** |
| IP alokasi | 165.232.172.69:3715 | **172.232.235.163:3507** |
| Docker | Node.js 23 | Node.js 23 |
| Status | 🔴 **mati total** (timeout) | 🟢 **hidup** |

Yang **tidak perlu diubah** karena desainnya sudah benar: domain, tunnel,
konfigurasi Vercel, dan database. Konektor `cloudflared` otomatis menyambung ulang
dari IP server baru — tidak ada DNS atau setting tunnel yang perlu disentuh.

---

## Bukti verifikasi

### Rantai koneksi
```
tunnel umi-api-gwenna        → status=healthy, koneksi=4
   cgk02 · sin13 · cgk02 · sin12   (semua dari 172.232.235.163)

GET https://api.gwenna.my.id/api/health       → 200  {"ok":true,...}
GET https://umi-api.gwenna.my.id/api/health   → 200  {"ok":true,...}
GET https://alzriss-comunity.vercel.app/api/health        → 200  {"ok":true,...}
GET https://alzriss-comunity.vercel.app/api/v1/health     → 200  (Unified API)
GET https://alzriss-comunity.vercel.app/api/platform/status → 401  (benar, butuh login)
```

### Bot di server baru
```
[boot] better-sqlite3: tersedia
[boot] canvas: tersedia
[boot] ffmpeg: tidak ada yang perlu diperbaiki
Config loaded
[JADIBOT-API] Aktif di 0.0.0.0:3854          ← selaras dengan ingress tunnel
Successfully Loaded 2021 Plugins
Bot siap digunakan!
🔐 MANUAL PAIRING MODE
```

### Stabilitas
```
uptime berturut-turut: 195s → 199s → 203s
memori: 310 MB · CPU: 0.5%
```
Uptime naik konsisten = proses berjalan normal, bukan crash-restart.

---

## ⚠️ Bug yang dicegah lebih awal

Arsip deploy lama dibuat **sebelum** perbaikan `boot.js`, dan punya cacat tar:
nama `config` dan `config/` sama-sama didaftarkan sehingga ekstraksi kedua
menulis `config/settings.js` jadi **0 byte** — inilah yang membuat bot crash
di panel lama.

Untuk panel baru, arsip aku bangun ulang dengan **daftar berkas eksplisit tanpa
duplikat**, lalu diverifikasi sebelum diunggah:

```
entri unik       : 194
duplikat         : 0
berkas 0 byte    : 0
config/settings.js : 1251 byte  (sesuai asli)
scripts/boot.js    : 4153 byte  (sudah termasuk)
start script       : node scripts/boot.js
```

Hasil di server baru: `settings.js` terbaca **1.2 KB** — bug tidak terulang.

---

## Ringkasan semua komponen

| Komponen | Status | Detail |
|---|---|---|
| Website Jadibot Studio | 🟢 Live | https://alzriss-comunity.vercel.app · tema liquid glass iOS 16 |
| Bot WhatsApp | 🟢 Jalan | **panel5** · `serverbackupVip` (`0024af12`) · 2.022 plugin |
| Cloudflare Tunnel | 🟢 Healthy | 4 koneksi: sin17 · sin22 · sin08 · sin02 |
| Supabase | 🟢 Siap | 39 tabel · RLS aktif · 100 profil |
| Bot API / Jadibot | 🟢 Live | `api.gwenna.my.id` → port 3854 |
| Koneksi WhatsApp | 🟢 **Terhubung** | 7 sesi jadibot aktif — tidak perlu pairing ulang |
| Fitur AI (Groq) | 🟡 Kunci belum ada | fitur AI menyala kalau kunci Groq baru dipasang |

---

## Yang tersisa

### 1. 🟡 Nomor WhatsApp — langkah terakhir menuju bot hidup penuh

Bot sudah duduk di prompt `📱 Masukkan nomor WhatsApp:`. Kirim nomornya,
aku masukkan ke konsol panel3, kamu masukkan kode 8 digit di WhatsApp.

### 2. 🟡 Nomor owner di `config.js`

Masih placeholder `628xxxxxxxxxx`. Perlu nomor asli supaya perintah owner berfungsi.

### 3. ⚪ Opsional

| Item | Kapan perlu |
|---|---|
| `UMI_PLUGIN_SIGNING_PRIVATE_KEY` | Kalau unggah plugin dari website mau dipakai |
| ~~`BLOB_READ_WRITE_TOKEN`~~ | ✅ Sudah aktif (store `alzriss-backup`, 15 Okt 2026) |
| Push perubahan ke GitHub | `boot.js`, `package.json`, `sync-public.mjs` perlu kamu tinjau |
| Tema web baru | Sudah live; kabari kalau ada bagian yang ingin disesuaikan |

---

## Catatan tentang hilangnya server lama

Server lama (`serverbotVip`) masih ada di panel4, tapi **panelnya tidak bisa
dijangkau sama sekali** (timeout). Kemungkinan besar datanya masih aman di sana —
kalau panel4 pulih, isi server lama masih bisa diambil. Yang tidak akan pulih adalah
**sesi WhatsApp**, karena sesi belum pernah dibuat (pairing belum dilakukan).
Jadi tidak ada yang hilang secara fungsional.

---

## 🔒 Keamanan — daftar token yang perlu dirotate

Semua token ini lewat chat dan harus dianggap **terekspos**:

| Token | Fungsi | Rekomendasi |
|---|---|---|
| `ptlc_[DISENSOR]...` | panel4 (mati) | revoke — sudah tidak dipakai |
| `ptlc_[DISENSOR]...` | panel3 (aktif) | rotate setelah bot paired & stabil |
| `vcp_4TXr2H5F...` | Vercel (sudah invalid) | aman |
| `vcp_3oPZrVe6...` | Vercel (aktif) | rotate setelah selesai kustomisasi |
| `sbp_fca8b263...` | Supabase Management API | rotate setelah database beres |
| `cfut_SDqetvqpp...` | Cloudflare API (Tunnel + DNS `gwenna.my.id`) | rotate setelah setup tunnel selesai |

Catatan: tunnel yang **sudah berjalan** tetap hidup tanpa API token Cloudflare —
yang dibutuhkan hanya token konektor `eyJh...` yang sudah tertanam di `.tunnel.env`
server. Jadi mencabut `cfut_...` tidak akan memutus bot.

Token asli tidak pernah masuk ke repo — hanya di `/home/user/.secrets/` (di luar repo).

---

## 🧹 Pembersihan workspace — 14 Oktober 2026

Workspace sempat **178 MB**, melewati batas snapshot (~128 MB). Setelah dibersihkan
menjadi **87 MB** — hemat **91 MB**, sisa ruang **41 MB**.

### Yang dihapus (semuanya bisa dibuat ulang)

| Item | Ukuran | Cara memulihkan |
|---|---|---|
| `vendor/shot*` (4 set screenshot) | 31 MB | `bash tools/restore-assets.sh screenshot` |
| `.secrets/cloudflared` | 39 MB | `bash tools/restore-assets.sh cloudflared` |
| `.secrets/upload/*.tar.gz` (4 arsip deploy) | 24 MB | `bash tools/restore-assets.sh arsip` |
| `bot/feature-smoke-results.json` | 190 KB | `cd bot && node scripts/feature-smoke.mjs` |
| `website/marker.txt`, `website/.env.local` | kecil | file uji sementara |
| cache & berkas `/tmp` | — | otomatis |

**Skrip pemulihan dibuat:** `tools/restore-assets.sh` — sudah diuji, membangun ulang
4 arsip deploy dalam **2,5 detik** dengan verifikasi otomatis (duplikat = 0).

### Yang TIDAK dihapus (tidak tergantikan)

| Item | Alasan |
|---|---|
| `usanagi-umi-public-source/` (83 MB) | Source code + riwayat git |
| `.secrets/usanagi-credentials.env` | Token & kredensial dari kamu |
| `.secrets/tunnel.env`, `tunnel-token.txt` | Token konektor Cloudflare |
| `.secrets/bot-config.js` | Konfigurasi bot produksi |
| `tools/` (7 skrip) | Alat deploy, audit, screenshot |
| `deploy/` | PM2, systemd, nginx, firewall, update, backup |
| `PANDUAN-DEPLOY.md`, `ROADMAP.md`, laporan | Dokumentasi |

## 🎨 Rebuild UI Website — Agent Skills (14 Oktober 2026)

Tema **Liquid Glass + iOS 16 (dark, gradasi biru)** dipertahankan; yang berubah hanya
kepatuhan pada aturan skill. Semua ID, kelas, dan perilaku JS tetap utuh.

### Skill yang dipasang (10, di `~/.agents/skills/` + `~/.claude/skills/`)
| Repo | Skill |
|---|---|
| AnxForever/stylekit-skill | `stylekit` (148 gaya visual) |
| bo-516/NiceDesign | `wish`, `wish2ai`, `wish2human`, `web-layout`, `web-color-depth`, `web-animation`, `web-interaction` |
| michaelshimeles/ui-agent-constraints | `ui-skills` |
| PyModel/cinematic-ui | `cinematic-ui` |

Catatan: `abhayjnayakk/awesome-design-md` **tidak bisa** dipasang lewat CLI (tidak ada
`SKILL.md`) — pakai file `DESIGN.md`-nya secara manual. Repo `Pythoughts-labs/cinematic-ui`
sudah pindah (301) ke `PyModel/cinematic-ui`.

CLI `skills` butuh Node ≥ 22.20; Node 20 yang ada tidak cukup, jadi Node 22.23.3 dipasang di
`~/.local/node22`.

### Audit → temuan → perbaikan (semua di `theme-liquid-glass.css`, blok 19)
| # | Temuan | Aturan | Perbaikan |
|---|---|---|---|
| 1 | `.topbar` `z-index:100`, `.toast` `z-index:1000` — angka lepas | web-layout (skala z tetap) | `--lg-z-*` 0/10/20/30/40/50/60; topbar→20, toast→50 |
| 2 | Hanya `<input>` punya outline; tombol/tautan tidak terlihat saat fokus | ui-skills + web-interaction | aturan `:focus-visible` untuk tombol, tautan, tab, `.mini`, `.icon-btn`; fokus ≠ hover |
| 3 | Angka tidak rata kolom | ui-skills (`tabular-nums`) | diterapkan ke `.stat`, `.terminal`, `.pair-code`, `th`, `td` |
| 4 | `@keyframes lg-mesh` menganimasikan `background-position` pada `.scene` layar penuh, 34 s tanpa henti | ui-skills (dilarang animasi properti cat) | animasi `.scene` dimatikan, posisi gradasi dibekukan; gerakan hidup dipindah ke `.orb` (`transform` saja) |
| 5 | `.toast`/`.topbar` menempel di tepi | ui-skills (`env(safe-area-inset-*)`) | dibungkus `max(...)` agar aman dari notch/home indicator |
| 6 | Radius kartu dalam = radius panel | web-layout (radius bersarang) | kartu dalam panel → `--lg-r-md`; tombol aksi → pill |
| 7 | Tombol nonaktif hanya dibedakan warna | web-interaction | `opacity`, `cursor`, `pointer-events` + `aria-disabled` |
| 8 | Target ketuk kecil | WCAG 2.2 | `.mini`/`.icon-btn` `min-height: 32px` |

Catatan penting soal spec StyleKit: spec resmi `liquid-glass` ternyata **neon dan light-only**
(`readiness.darkMode = "missing"`, sumber data `"fallback"`). Spec itu sendiri menyarankan
membuat token dark semantik sebelum dipakai di tema gelap — itu sudah ada di repo ini.
Bagian neon-nya (judul gradasi ungu/pink, stroke cyan 3px, glow sebagai affordance utama)
sengaja **tidak** dipakai karena bertentangan dengan brief (dark + biru) dan dilarang
ui-skills ("jangan pakai efek glow sebagai affordance utama").

### Bukti verifikasi
- Audit otomatis (Puppeteer) **12/12 lulus** — di lokal dan di produksi.
- Cek responsif **42/42 bersih** (6 halaman × 7 viewport); tidak ada overflow horizontal.
- Produksi: halaman 200 (34.387 B), CSS 200 (48.861 B), `app.js` 200 (59.735 B), API 401 (auth hidup).
- Pengaman lama tetap ada: `prefers-reduced-motion` (`.scene`/`.orb` mati, posisi beku),
  `prefers-contrast: more`, tombol SALIN CODE tetap `.pair-actions{align-items:center}`.

### Deploy
`theme-liquid-glass.css?v=20261014-lg2` → **`?v=20261014-lg3`** (cache-buster di `index.html`
lalu `node scripts/sync-public.mjs`), `vercel --prod` → **Ready**, alias
`https://alzriss-comunity.vercel.app` aktif.

## 🧊 Kaca Transparan + Sistem Bayangan (14 Oktober 2026)

Permintaan lanjutan: Liquid Glass-nya dibuat benar-benar **tembus pandang** dan
diberi **efek bayangan**. Tema, tata letak, dan seluruh perilaku JS tetap sama.

### Kenapa sebelumnya tidak terlihat transparan
Ada dua sebab, dan keduanya harus diperbaiki bersamaan:

1. **Setiap permukaan punya selubung `--lg-scrim: rgba(6,14,30,0.34)`** di atas
   latarnya. Setinggi apa pun blur-nya, lapisan ini menutupi latar sehingga kaca
   terbaca seperti kartu solid biasa.
2. **`.scene-shade`** yang menutupi seluruh layar berjalan pada `opacity: 0.5`,
   menambah tabir gelap lagi.

Akibatnya tidak ada yang bisa ditembus. Kedua lapisan itu diturunkan tajam
(scrim 0.34 → 0.10, shade 0.5 → 0.34), sehingga gradasi biru latar akhirnya
terlihat menembus kaca.

### Kenapa bayangannya tidak terasa
Bayangan gelap di atas latar biru-navy yang nyaris hitam hampir tidak kasat mata.
Di UI gelap, kedalaman yang terbaca justru berasal dari **glow berwarna** dan
**rim light** di tepi, bukan dari kegelapan. Karena itu tiap permukaan kini
memakai **4 lapis bayangan**: contact (rapat), key (sedang), ambient (jauh), dan
bounce biru (`rgba(10,132,255,…)`) yang mengikat kaca ke lingkungannya di atas
rim light dalam. Saat disorot kursor, bayangannya membesar seperti benar-benar
terangkat (`--lg-shadow-lift-*`).

### Yang berubah
| Bagian | Sebelum | Sesudah |
|---|---|---|
| `--lg-scrim` | `rgba(6,14,30,0.34)` | `0.10` |
| `--lg-scrim-soft` | `0.22` | `0.055` |
| `.scene-shade` opacity | `0.5` | `0.34` |
| Blur panel | `26px` | `40px` + `saturate(200%)` |
| Blur chip kecil | `26px` | `26px` (sengaja tetap tipis — chip kecil tidak perlu blur penuh, itu pemborosan GPU) |
| Lapis bayangan | 3–4 | 4–6 (contact + key + ambient + bounce biru + 2 rim inset) |
| Durasi transisi | 220–320ms | 180ms (aturan ui-skills ≤ 200ms) |

Kilau spekular (`--lg-sheen`) ditambahkan di lapisan atas supaya kaca terbaca
datar dan memantul, bukan seperti cipratan warna. **`backdrop-filter` tidak
pernah dianimasikan** — aturan ui-skills; nilainya statis.

### Pengaman: teks tetap harus terbaca
Kaca yang lebih bening = risiko kontras turun. Karena itu dibuat pengukur
`tools/contrast-check.mjs` yang **mengukur piksel sungguhan**, bukan menebak:
halaman dirender dua kali — sekali normal, sekali dengan teks dibuat transparan
sehingga tersisa pelat latarnya saja — lalu warna latar di belakang tiap teks
diambil dan dihitung rasio WCAG-nya.

Hasil pada **111 elemen teks di 8 halaman**:

| Halaman | Elemen | Terendah | Rata-rata |
|---|---|---|---|
| auth | 9 | 5.83:1 | 7.47:1 |
| landing | 3 | 6.69:1 | 8.89:1 |
| chat / dashboard / plugin / pairing / settings / wallet | 6–28 | 5.19:1 | 8.87–12.34:1 |

**0 gagal** (ambang WCAG AA: 4.5:1 teks kecil, 3:1 teks besar). Sebagai
pembanding, halaman landing di produksi lama rata-ratanya 6.96:1 — sekarang lebih
baik (8.89:1) walau kacanya lebih bening.

Tiga perbaikan kontras yang muncul dari pengukuran ini:
1. **`.topbar`** sebelumnya ikut memakai `--lg-scrim-strong`; waktu token itu
   dibuat lebih bening, teks "JADIBOT STUDIO" jatuh dari 2.67:1 ke **1.71:1**.
   Topbar itu *chrome*, bukan konten — diberi nilai sendiri (`rgba(5,12,26,0.62)`)
   yang tidak ikut bergeser bila token kaca diubah lagi.
2. **Label form & tab auth** memakai `--lg-text-2` di atas orb biru terang:
   4.37:1 dan 3.08:1. Label dinaikkan; tab tidak aktif diberi dasar gelap tipis
   sehingga terbaca **sekaligus** lebih jelas berbeda dari tab aktif.
3. **`.btn-primary`** berisi teks putih di atas gradasi biru terang: 3.77:1 —
   **sudah ada sebelum pekerjaan ini** (terukur identik di produksi lama). Yang
   diperdalam hanya isian tombol; `--lg-blue` tetap untuk aksen/border/glow, jadi
   identitas biru Apple tidak hilang. Sekarang **5.4:1**.

### Bukti verifikasi
| Uji | Alat | Hasil |
|---|---|---|
| Kontras teks (lokal) | `tools/contrast-check.mjs` | 111 elemen, **0 gagal** |
| Kontras teks (produksi) | idem | 111 elemen, **0 gagal** |
| Aturan UI | `tools/ui-rules-check.mjs` | **19/19 lulus** (lokal + produksi) |
| Material kaca | `tools/glass-audit.mjs` | blur 40px · saturate 200% · 6 lapis bayangan |
| Responsif | `tools/responsive-check.mjs` | **42/42 bersih**, tanpa overflow |

### Deploy
Cache-buster `?v=20261014-lg3` → **`?v=20261014-lg4`**; `sync-public.mjs`; `vercel --prod`
→ **Ready**, alias `https://alzriss-comunity.vercel.app` aktif. CSS produksi
59.597 byte, terverifikasi memuat ketiga blok baru (20 kaca transparan,
21 perbaikan kontras, 22 normalisasi durasi).

Catatan operasional: folder `.local` (berisi CLI `vercel`, `puppeteer`, dan Chrome)
**tidak ikut tersimpan** di snapshot workspace, jadi setelah sesi baru perlu
`npm i vercel puppeteer --prefix ~/.local` + `npx --prefix ~/.local puppeteer browsers install chrome`
+ pemasangan pustaka sistem Chrome (libnss3, libnspr4, libatk*, libgbm1, dll).

### Verifikasi setelah bersih

```
kredensial      : 4/4 utuh
source JS bot   : 3.311 file
website         : 43 file
config/settings : 1.251 byte (utuh, bukan 0)
boot.js         : 4.153 byte
tema            : 44.091 byte
git             : berfungsi, perubahan lokal masih bisa di-commit

PRODUKSI TIDAK TERPENGARUH
  alzriss-comunity.vercel.app/            → 200
  alzriss-comunity.vercel.app/api/health  → 200
  api.gwenna.my.id/api/health             → 200
```

---

## 🏦 Perbaikan Fitur Bank + Pelaporan Error Otomatis (14 Oktober 2026)

### Akar masalah `.bank`

`.bank` selalu mati dengan:

```
TypeError: Cannot read properties of undefined (reading 'emoticon')
```

Ada **dua sebab yang bertumpuk**:

1. **Tabrakan dispatch.** Ada dua plugin dengan perintah yang sama:
   `plugins/rpg/rpg-bank.js` (lama, `/^(bank)$/i`) dan
   `plugins/rpg/usanagi-bank.js` (modern, `/^(bank|atm)$/i`).
   `handler.js` menghentikan pencarian setelah plugin pertama yang cocok (`break`),
   dan `fs.readdirSync` memuat `rpg-bank.js` lebih dulu → versi lama selalu menang.
2. **`global.rpg` tidak pernah didefinisikan.** Versi lama memakai
   `global.rpg.emoticon`, tetapi tidak ada satu pun berkas di repo yang mengisinya.
   Jadi plugin gagal di baris pertama, sebelum satu baris pun kodenya berjalan.

Total **12 plugin** `plugins/rpg/rpg-*.js` bergantung pada `global.rpg`:
`bank`, `atm`, `quest`, `heal`, `mining`, `buy`, `dungeon`, `inventory`, `shop`,
`sell`, `cooldown`, `me` — semuanya ikut rusak.

### Perbaikan

Berkas baru `bot/lib/rpg/awang-rpg-globals.js` mengembalikan `global.rpg`
(peta `emoticon()` untuk 20 kunci yang dipakai plugin, plus cadangan `•`,
pencocokan sebagian, dan tidak peka huruf besar/kecil). Dipasang **satu kali**
di `main.js` sebelum `await filesInit()`, jadi sudah siap saat plugin dimuat.
Fungsi `installRpgGlobals()` idempoten — aman dipanggil berkali-kali.

Kenapa memulihkan global-nya, bukan mengganti nama perintah: `.bank` (versi lama)
dan `.deposit`/`.withdraw` (yang selama ini jalan) membaca `database.json` yang
**sama**. Mengganti nama perintah akan memutus alur ekonomi yang sudah dipakai
pengguna.

### Bukti

`tools/test-bank.mjs` — 20/20 lulus:

* membuktikan error aslinya nyata (tanpa perbaikan),
* `.bank` dan `.atm` kembali menampilkan saldo,
* `.deposit` dan `.withdraw` tetap memindahkan uang dengan benar,
* 12 plugin `rpg-*` bisa dimuat dan punya handler.

### Pelaporan error otomatis ke halaman Feedback

Sesuai permintaan: kalau masih ada error, bot **mengirim pesan dan mencatatnya
ke halaman Feedback website** (halaman yang sudah ada — tidak membuat halaman baru).

Alur: `handler.js` blok `catch` → `bot/lib/error-report.js` →
`POST /api/platform/feedback/bot` (website) → tabel `platform_audit_logs`
(`action: feedback.submit`) → muncul di **RIWAYAT LAPORAN** halaman Feedback
dengan chip 🤖 OTOMATIS, plus plugin, perintah, dan jumlah kejadian.

Aturan penting di sisi bot:

| Aturan | Nilai | Alasan |
|---|---|---|
| Laporan sama digabung | 10 menit | satu plugin rusak tidak membanjiri website |
| Batas laporan | 30/jam | melindungi kuota website |
| Kredensial disunting | otomatis | `gsk_`, `ptlc_`, JWT, dll. jadi `<redacted>` |
| Tidak pernah melempar | selalu | dipanggil dari blok `catch`; error asli tetap utuh |
| Pengiriman | tidak ditunggu (`.catch()`) | tidak menahan balasan ke pengguna |

Laporan dikirim ke **dua audiens**: pemilik sesi yang terdampak (dari
`data/jadibot-platform.json`) **dan** owner platform. Alasannya: halaman feedback
hanya menampilkan laporan milik pengguna yang sedang masuk, jadi satu baris audit
hanya terlihat satu orang — error plugin perlu dibaca pengguna yang terdampak
*dan* operator yang memperbaiki pluginnya. Kalau keduanya sama, tidak digandakan.

Autentikasi tidak memakai akun Supabase (bot tidak punya): memakai
rahasia bersama `UMI_ERROR_REPORT_SECRET` di header `Authorization: Bearer`.
Endpoint bisa dipakai karena `enforceSameOrigin` mengizinkan permintaan tanpa
`Origin` (pola yang sama dengan `panel-autoorder.js`).

### ⚠️ Temuan besar: rahasia dari API Vercel adalah amplop terenkripsi

Saat memasang fitur ini ketahuan bahwa
`GET /v9/projects/<proyek>/env?decrypt=true` **tidak mengembalikan nilai asli**,
melainkan amplop terenkripsi yang diawali `eyJ2` (isi setelah dibuka:
`{"v":"v2","c":"..."}`, panjang ~1168 karakter).

Akibatnya berkas env bot yang dibangun dari API itu **tidak pernah cocok** dengan
nilai di runtime Vercel → autentikasi bot ⇄ website ditolak `401`. Ini yang
memutus rantai backup dan konsol.

**Perbaikan:** keempat rahasia dirotasi ke nilai plaintext 64 heks yang dibuat
sendiri, dan disimpan di **satu sumber kebenaran** `.secrets/shared-secrets.env`:

| Vercel | Bot | Dipakai untuk |
|---|---|---|
| `BACKUP_CRON_SECRET` | `UMI_BACKUP_CRON_SECRET` | bot memicu cron backup |
| `BOT_BACKUP_EXPORT_SECRET` | `UMI_BACKUP_EXPORT_SECRET` | website mengambil arsip dari bot |
| `UMI_CONSOLE_RELAY_SECRET` | `UMI_CONSOLE_RELAY_SECRET` | konsol owner (tiket HMAC) |
| `UMI_ERROR_REPORT_SECRET` | `UMI_ERROR_REPORT_SECRET` | laporan error bot → halaman Feedback |

`tools/make-deploy-env.mjs` sekarang membaca berkas itu (bukan API Vercel),
membuat `.error-report.env`, dan **menolak** nilai yang tampak seperti amplop
terenkripsi. `npm run tunnel-start` ikut menyumber `.error-report.env`.

### Bukti verifikasi

* `tools/test-error-report.mjs` — 55/55 lulus (sisi bot + sisi website,
  termasuk 401 untuk rahasia salah, validasi isi, dan database bermasalah).
* Uji **dari dalam container produksi** lewat
  `node tools/e2e-error-report.mjs` → `{"reported":true}` → baris audit tersimpan.
* Uji live dari luar: `HTTP 201`, `deliveredTo: 2`.

### ✅ Terselesaikan: kredensial Vercel Blob (15 Oktober 2026)

Cron backup sempat gagal setelah rantai autentikasi beres, dengan error:

```
[HOURLY-BACKUP] Failed generation ... Vercel Blob: No blob credentials found.
```

Penyebabnya: project `alzriss-comunity` belum punya Blob store, sehingga
`BLOB_READ_WRITE_TOKEN` tidak ada.

Diperbaiki (dengan persetujuan pemilik akun, opsi "buatkan kalau gratis"):

* Plan tim adalah **Hobby**, jadi Blob gratis di dalam kuota
  (1 GB storage, 10 GB transfer, 2.000 operasi lanjutan/bulan) dan **tidak ada
  tagihan saat kuota terlampaui** — akses berhenti saja sampai periode berikut.
* Store `alzriss-backup` dibuat (`store_6AwKM8mu2Ao6AYhi`, **private**, region
  `sin1` — sama dengan region fungsi website), terhubung ke `alzriss-comunity`
  untuk production/preview/development; `BLOB_READ_WRITE_TOKEN` terisi otomatis.
* Deployment produksi dibuat ulang (`dpl_DGSvDAtG8D3CUF486ZKCpPKc7cx6`) agar
  fungsi membaca variabel baru.
* Verifikasi: `POST /api/cron/backup` → **HTTP 200**, generasi
  `hourly_20261015010844887_872aa5fff365901a` dengan 3 arsip
  (website 1,1 MB · bot 12,7 MB · jadibot 3,8 KB); store terisi 4 berkas
  (3 arsip + `current.json`), total 13,8 MB.

Catatan kuota: scheduler bot memicu backup **tiap jam** (24×/hari ≈ 720
generasi/bulan × ±4 operasi tulis). Itu bisa melewati 2.000 operasi lanjutan
gratis sebelum bulan berakhir; akibatnya backup berhenti sementara (bukan
tagihan). Kalau itu terjadi, turunkan frekuensi di
`bot/lib/vercel-backup-scheduler.js` atau naik ke Pro.

### Keputusan pemilik (15 Oktober 2026): nomor owner dibiarkan

`global.owner` di `config.js` server **sengaja dibiarkan placeholder**
(`628xxxxxxxxxx`) atas keputusan pemilik. Akibatnya pesan error ke WhatsApp
developer dari blok `catch` `handler.js` tidak terkirim ke siapa pun — tetapi
pengguna tetap menerima pesan error, dan setiap error plugin tercatat di
halaman Feedback website (pemilik sesi + owner platform). Untuk mengaktifkan
pesan ke developer nanti, isi `global.owner` dan
`global.ownerInfo.lockedOwnerNumber` dengan nomor asli lalu restart bot.

---

## 🐛 Perbaikan Laporan Feedback + Paket Fitur Umi (15 Oktober 2026)

Sistem pelaporan otomatis membuktikan nilainya sehari setelah dipasang: pengguna
sesi `6285137419379` memakai `.pack`, `.playstore`, `.suratcinta`, `.spotify`,
`.sell` — semuanya masuk halaman Feedback sebagai laporan otomatis dan diperbaiki
dari sana.

### Yang diperbaiki (semua sudah deploy)

| Laporan | Akar masalah | Perbaikan |
|---|---|---|
| `.pack`, `.playstore`, `.suratcinta`, `.fakeff` (semua plugin rimuru) | `lib/imported-compat.js` menugaskan `message.reply` pada objek warisan prototype `WebMessageInfo` yang read-only (`lib/simple.js` tanpa `writable`) → TypeError, SEMUA plugin impor mati | Ketiga properti dipasang via `Object.defineProperty` (`tools/test-imported-compat.mjs` 14/14) |
| `.spotify` | SpotSaver mati total (308 → 404 HTML); spotidown juga mati | Ditulis ulang: metadata resmi Spotify (oEmbed + embed) + audio dari pipeline YouTube/SaveTube yang sudah terbukti. Teruji memakai tautan persis dari laporan |
| `.sell 8 harimau` | Tabel harga tidak memuat 7 dari 12 hewan buruan + urutan argumen kaku + kesalahan pengguna dilempar sebagai error | Semua hewan bisa dijual, dua urutan argumen diterima, kesalahan pengguna dibalas biasa (tidak jadi laporan error) |
| `.playvideo/.playaudio` | `getPlayer()` (InnerTube) kena bot-check YouTube dan melempar SEBELUM pengunduh jalan; resolver SaveTube lokal plugin tidak pernah dikonfigurasi (`global.youtubeDownloader` kosong) | Metadata cadangan oEmbed + cadangan scraper bersama `lib/scrape/YouTube.js`. Video terlapor teruji terkirim (audio & video) |
| TikTok (laporan manual 11 Okt) | — | Diuji ulang: resolver tikwm hidup, unduhan berfungsi. Ditandai selesai di Feedback |
| "Bot lambat" (11 Okt) | bukan bug kode | Dibiarkan terbuka sebagai masukan performa |

21 baris laporan ditandai `resolved` di `platform_audit_logs` (termasuk catatan
perbaikan), sehingga chip status di halaman Feedback berubah jadi RESOLVED.

### Paket Fitur Umi — ditulis ulang bersih (bukan dari bot crack)

Pemilik mengirim dua tautan bot berlabel "(crack)" (LunaBotz & YNA AI) dan
meminta fiturnya ditambahkan. **Tautan itu tidak diunduh** — membypass kunci
lisensi adalah pembajakan, dan crack bot WhatsApp adalah vektor backdoor
pencuri sesi yang tidak bisa diverifikasi keamanannya. Sebagai gantinya 10
plugin **orisinal** ditulis dari nol mencakup semua kategori, brand
**Umi Usanagi AI** (`tools/test-umi-pack.mjs` 29/29, cek tabrakan terhadap
2.032 berkas plugin — nol tabrakan):

* Downloader/media: `.umigrab` (unduh tautan langsung, tolak URL privat), `.spotify` (baru)
* AI/utilitas: `.umiringkas` (ringkasan ekstraktif lokal, tanpa kunci), `.umiterjemah` (MyMemory publik), `.umisandi`, `.umiqr`
* RPG/game: `.umimisi` (misi harian → money `database.json`), `.umitebak` (tebak angka berhadiah)
* Grup: `.umipolling` (poll native), `.umigrup` (info/buka/tutup)
* Menu: `.umifitur`

### Rename → Umi Usanagi AI

`global.namebot`, `global.stickpack`, `ownerInfo.title` (di `config.js` server,
sumber `.secrets/bot-config.js`) dan fallback di `bot/config/settings.js`
diganti dari "Usanagi Umi AI" menjadi **"Umi Usanagi AI"**. Header kredit
per-berkas lama ("By AlzRiss - Usanagi Umi AI" di ±2.000 berkas) tidak diubah
massal — identitas runtime membaca dari konfigurasi di atas.

### Bot utama AKTIF — +62 823-4382-3200 (15 Oktober 2026)

Nomor `6282343823200` dijadikan bot utama atas permintaan pemilik:

* Didaftarkan lewat jalur resmi `POST /api/owner-console/pairing-number`
  (tersimpan di `.main-bot.env` container: `MAIN_BOT_ENABLED=true`,
  `MAIN_BOT_PAIRING_NUMBER=6282343823200`), bukan dengan mengedit env panel.
* Kode pairing dimasukkan pemilik dari WhatsApp (Perangkat tertaut →
  tautkan dengan nomor telepon).
* Verifikasi via `GET /api/owner-console/status`: `registered: true`,
  `connection: open`, `status: connected`. Kredensial tersimpan, jadi bot
  utama menyambung ulang otomatis setelah restart.
* Catatan: ini membalik keputusan lama "main-bot=OFF". `global.owner` di
  `config.js` tetap placeholder sesuai keputusan pemilik (15 Okt) — perintah
  owner belum mengenali siapa pun sampai nomor owner diisi.

### Paket hiburan + auto order website (15 Oktober 2026)

Sumber inspirasi fitur: tangkapan layar daftar fitur script pihak ketiga
"Xeryuu-MD" dari pemilik. ZIp TIDAK diunduh/disalin — fitur ditulis ulang
bersih (clean-room) dengan branding Umi Usanagi AI, seperti kebijakan
paket crack sebelumnya.

Sudah LIVE (bot 2.037 plugin, 0 gagal muat; website cache `lg6`):

* Keamanan grup: `.antiunadmin`/`.antikudeta` (anti-unadmin/kudeta, sudah ada
  + alias baru) dan `.anticall` DIPERBAIKI — handler panggilan di `main.js`
  dulu membaca kunci database yang tidak pernah ditulis; kini membaca status
  SQLite yang sama dengan perintahnya (`core/awang-call.js`).
* Gim (hadiah saldo bot): `.umisusun` (susun kata), `.umitebakan`
  (tebak-tebakan receh), `.umiduel @user <taruhan>` (duel koin 50/50).
* Editor: `.umifoto <efek>` (Jimp lokal: abu/blur/terang/gelap/kontras/
  negatif/sepia/cermin/putar), `.umisuara <efek>` (FFmpeg lokal: tupai/
  berat/robot/gema/bass/cepat/lambat → voice note).
* Auto order website (Wallet): `GET /api/wallet/shop`,
  `POST /api/wallet/buy-panel`, `POST /api/wallet/buy-product`,
  `GET /api/wallet/orders` (bot `lib/panel-autoorder.js`), proxy website
  diperluas, halaman Wallet punya bagian TOKO AUTO ORDER + ORDER SAYA.
  Pembayaran tetap top-up manual QRIS/DANA + persetujuan owner (sesuai
  pilihan pemilik) — saldo dari top-up itulah yang membiayai pembelian.
  Beli panel: debit saldo → akun & server Pterodactyl dibuat otomatis
  (egg/lokasi/docker/startup diatur owner) → kredensial tampil di ORDER
  SAYA; kegagalan panel = refund otomatis. Produk: `premium` (hari) dan
  `digital` (stok terkirim sekali pakai), dikelola owner sebagai JSON di
  halaman Owner → PRODUK PREMIUM & DIGITAL.

Menunggu konfigurasi owner agar auto order panel benar-benar live:
URL panel + PLTA + ID Egg/Lokasi + paket berharga > 0 & aktif (saat ini
`configured: false`, paket masih bawaan harga 0/nonaktif).

Uji: `tools/test-umi-fun.mjs` 18/18, `tools/test-autoorder.mjs` 22/22
(alur top-up manual → approve → beli panel/premium/digital + refund),
`tools/test-umi-pack.mjs` 29/29. Deploy website kini bisa tanpa CLI:
`node tools/deploy-website.mjs` (Vercel REST, token baris terakhir).

### Halaman Upload ZIP — file hosting owner (15 Oktober 2026)

Halaman baru `#files` (nav "Upload ZIP", hanya terlihat & bisa dibuka
owner; server juga menegakkan `requireOwner`):

* Upload `.zip` maks 50 MB dengan drag & drop / klik + progress bar.
  Browser mengunggah langsung ke Supabase Storage lewat URL bertanda tangan
  (`platform/files/sign-upload`), jadi tidak kena limit body serverless.
* File tersimpan privat di bucket `umi-files` (prefix `owner/`). Daftar file
  dibaca langsung dari bucket (`platform/files/list`) — tanpa tabel metadata.
* Unduh = link bertanda tangan berlaku 1 jam (`platform/files/download`);
  hapus permanen via `platform/files/delete`. Semua aksi tercatat di audit.
* Uji lapisan storage terhadap Supabase produksi: `tools/test-files-storage.mjs`
  10/10 (bucket → sign → PUT → list → download identik byte → delete).
  Website cache `lg7`.

### Tema "Umi Studio refresh" dari ZIP upload owner (15 Oktober 2026)

Pemilik mengunggah `usanagi-umi-ui-refresh.zip` (snapshot repo) lewat halaman
Upload ZIP dan meminta desainnya dipakai. Hasil bedah: penyegaran desain
ternyata murni blok CSS "Umi Studio refresh" (±90 baris override dark-glass)
yang ditambahkan di akhir `website/public/assets/app.css` versi ZIP; markup
HTML identik, jadi tidak ada struktur yang perlu diganti.

Yang diterapkan (fungsi tidak berubah sama sekali):

* `app.css` produksi = versi ZIP (blok refresh aktif, label cache
  `?v=20261015-ui-refresh`), `app.js` tetap versi kita (`lg8`) karena ZIP
  belum punya halaman Upload ZIP, TOKO AUTO ORDER, dan form produk owner.
* Tautan tema lama `theme-liquid-glass.css` dilepas dari `index.html`
  (berkasnya tetap ada di repo, tidak lagi dimuat).
* Halaman-halaman terbaru kita memakai kelas generik yang sama
  (`.panel/.list-item/.mini/.chip/.notice/.btn`), jadi otomatis ikut gaya
  refresh — terverifikasi lewat screenshot pratinjau lokal
  (`tools/shot-refresh.mjs`: landing, Upload ZIP, Saldo, mobile).
* Sempat ada bug cache: `app.js` dipanggil dengan label versi lama
  (`20261012-ai1`) sehingga browser memakai JS lama dan rute #files
  terpental ke dashboard; diperbaiki dengan menaikkan label ke `lg8`.

### Perbaikan: rute toko Wallet error ReferenceError (15 Oktober 2026)

Log server menunjukkan `[JADIBOT-API] ReferenceError: shopCatalog /
walletOrders is not defined` — suntingan impor di
`bot/lib/jadibot-platform-api.js` sempat hilang (tertulis bersamaan dengan
suntingan rute), sementara rutenya terpasang. Akibatnya permintaan data
TOKO AUTO ORDER dari website gagal di server bot. Impor dilengkapi,
diunggah, bot di-restart: 2.037 plugin, API aktif tanpa ReferenceError,
bot utama kembali `open`. Pelajaran: jangan menyunting berkas yang sama
dengan dua panggilan edit paralel.

### Cermin database di panel beyy (15 Oktober 2026)

Atas permintaan pemilik, panel `beyy.ikyhost.cloud` (server `610ca0be`
`serverbackuppVip`, alokasi `167.99.67.212:2016`) dijadikan **cermin/cadangan
berkala** (produksi tetap di tempat semula):

* Layanan baru `db-mirror/server.js` (repo: `db-mirror/`, Node tanpa
  dependensi) berjalan di server itu via `npm start`. Endpoint: `/health`,
  `POST/GET/DELETE /mirror/:kind/:generation`, `GET /mirror/list`; semua
  selain health wajib Bearer token (256-bit, di `.secrets/beyy-panel-
  credentials.env` + `service-token.txt` di container).
* Cron backup tiap jam (`website/api/backup-cron.js`) kini, setelah sukses
  menyimpan ke Vercel Blob, ikut mengirim salinan generasi yang sama ke
  cermin: `website` (snapshot kode), `website-db` (dump JSON.gz tabel
  Supabase + metadata Auth — baru, sebelumnya tidak pernah diekspor),
  `bot`, `jadibot` (sesi). Kegagalan cermin tidak menggagalkan backup utama.
* Verifikasi end-to-end (generasi `hourly_20261015034628098_...`): keempat
  arsip tiba dengan SHA-256 identik dengan manifes Blob. Retensi 48
  generasi/jenis. Var Vercel baru: `UMI_MIRROR_URL`, `UMI_MIRROR_TOKEN`.
* Kredensial panel beyy diberikan lewat chat → anggap terekspos; disimpan
  chmod 600 di luar repo. Disarankan rotasi kunci API client panel.

### Perbaikan domain gwenna.my.id — tunnel alzriss-okta hidup lagi (15 Okt 2026)

Diagnosis: hanya tunnel `umi-api-gwenna` (api.gwenna.my.id) yang sehat.
Tunnel `alzriss-okta` (88438bb0) mati total (0 konektor) → www + ±10
subdomain (wildcard, sewa-bot, alzriss-deploy-okta, reset-panel, dll)
error 1033/530. Root sempat tampil 200 dari cache edge Cloudflare.

Perbaikan (pilihan pemilik: hidupkan dari panel beyy):

* `db-mirror/server.js` kini mengawasi cloudflared untuk tunnel itu
  (binary diunduh otomatis sekali, token/kredensial di container, restart
  otomatis 10 detik). Status tunnel: healthy, 4 konektor.
* Jebakan: cloudflared modern mode token menimpa ingress Cloudflare dengan
  konfigurasi kosong (catch-all http_status:503) → konfigurasi dipulihkan
  lewat API dan dikunci sebagai konfigurasi lokal `tunnel-config.yml` +
  `tunnel-creds.json` di container.
* Hasil: www/alzriss-okta/sewa-bot/subdomain lain → 200 halaman penampung
  "Layanan Sedang Disiapkan" (port aplikasi lama dijawab placeholder;
  matikan dengan `UMI_PLACEHOLDER=off` saat aplikasi asli dipasang),
  `jadibot-by-alzriss-okta.gwenna.my.id` → website jadibot live (perlu
  `httpHostHeader`), api tetap sehat.
* `reset-panel.gwenna.my.id` masih 502 karena layanan tujuannya
  (reset.pteroq.biz.id) memang mati dari sananya.

### Domain website jadibot: jadibot-alzriss.gwenna.my.id (15 Okt 2026)

Atas permintaan pemilik, website jadibot kini memakai subdomain sendiri:

* Domain `jadibot-alzriss.gwenna.my.id` ditambahkan ke project Vercel
  `alzriss-comunity` (terverifikasi via TXT `_vercel`), DNS Cloudflare:
  CNAME `jadibot-alzriss` → `cname.vercel-dns.com` (DNS-only agar sertifikat
  dikelola Vercel). HTTPS 200, tema ui-refresh tampil, proxy API sehat.
* Pengaturan bot `siteUrl` diganti ke domain baru → URL QR DANA manual &
  callback kini `https://jadibot-alzriss.gwenna.my.id/...` (terverifikasi
  gambar QR 200 di domain baru).
* Alamat lama (alzriss-comunity.vercel.app, website-jadibot-by-alzriss,
  jadibot-by-alzriss-okta.gwenna.my.id) tetap berfungsi sebagai alias.

### Website portofolio Alzriss — alzriss.gwenna.my.id (15 Okt 2026)

Atas permintaan pemilik, dibuat website portofolio developer (sumber:
`/home/user/portfolio/`, satu berkas HTML statis + aset foto):

* Isi: hero & statistik (2.037 plugin, 24/7, backup 4 lapis, 3 server),
  4 kartu proyek (Umi Jadibot Studio, Auto Order, Alzriss & Okta Deployer,
  Cermin Database & File Hosting) lengkap dengan foto, tag teknologi, dan
  tautan hidup; keahlian; galeri; tentang; kontak (bot utama WhatsApp,
  website jadibot, domain utama). Tema mengikuti "Umi Studio refresh".
* Hosting: project Vercel baru `alzriss-portofolio`
  (prj_orhrVhUgLgZcLWo06a3cGC27QUdi), domain `alzriss.gwenna.my.id`
  terverifikasi via TXT `_vercel`, CNAME DNS-only → cname.vercel-dns.com.
  HTTPS 200 terverifikasi.

### Tema Liquid Glass diterapkan ke 2 situs (15 Okt 2026)

Atas permintaan pemilik ("Gunakan thema liquid glass kayak gini", tata
letak tetap, wallpaper menyusul dikirim pemilik):

* **Portofolio** `alzriss.gwenna.my.id` — deployment
  `dpl_Cx9BAYdxPFF1zTJLxAe5WvtcGfLk` (READY). Kartu statistik/proyek/
  galeri/tentang kini kaca buram (`backdrop-filter: blur(18px)
  saturate(160%)`, border putih transparan, radius 24, highlight inset)
  di atas wallpaper layar penuh.
* **Website Jadibot** `jadibot-alzriss.gwenna.my.id` — deployment
  `dpl_DWLss8CxaXBBEtTnf1ZXb454VY6j` (READY), `app.css?v=20261015-liquid-glass`.
  Lapisan "LIQUID GLASS" ditambahkan di akhir `app.css` (tema UI-refresh
  tidak dihapus; semua ID/class/fungsi utuh). `.scene` kini tampil juga
  di app-mode, `app-view` dibuat tembus pandang, panel/stat/topbar/
  workspace-head/tutorial-card jadi kaca buram; eyebrow dipertegas.
* **Wallpaper sementara** = satu berkas khusus per situs:
  `portfolio/assets/wallpaper.jpg` (abstrak Unsplash dari contoh pemilik)
  dan `website/public/assets/wallpaper.jpg` (salinan landing-scene).
  Saat pemilik mengirim gambar final, cukup ganti 2 berkas itu lalu
  deploy ulang — tanpa ubah CSS.
* Terverifikasi: screenshot lokal desktop+mobile (0 error) di
  `/home/user/shots-liquid/`; live kedua domain 200, wallpaper 200,
  `/api/health` 200.
* Skrip deploy portofolio kini permanen: `tools/deploy-portfolio.mjs`.

### Game multiplayer web × WhatsApp — game.gwenna.my.id (15 Okt 2026)

Atas permintaan pemilik, dibangun fitur seperti bot referensi (room web
per-meja URL acak, verifikasi WhatsApp, opsi isi bot AI bila pemain
kurang) — clean-room:

* **Server game** `db-mirror/game.js` + `game.html` (Node stdlib, realtime
  SSE) berjalan di container beyy port internal 3900, satu proses dengan
  mirror+tunnel (dapat dimatikan `UMI_GAMES=off`). Cloudflare: DNS
  wildcard sudah ada; ingress `game.gwenna.my.id → localhost:3900`
  ditambahkan paling atas di `tunnel-config.yml` + konfigurasi remote
  kini **versi 18**. Token bot di `game-token.txt` container.
* **6 game:** UNO, UNO Flip (sisi gelap/terang), Catur (aturan lengkap +
  skakmat), Ular Tangga, Monopoli ringkas 16 petak, Werewolf (peran
  rahasia, malam/siang, voting). Host memilih jumlah pemain & isi bot AI.
* **Verifikasi:** buka tautan room → kirim `/uno <id-room>` (atau
  `/catur`, `/ulartangga`, `/monopoli`, `/werewolf`) ke bot utama →
  bot membalas kode masuk 6 digit → isi di halaman room. Alternatif:
  klaim kursi dengan nomor WA di web (pending) lalu verifikasi.
  Nama dari profil WA; pengguna akun website memakai nama yang diisi.
* **Perintah bot** (plugin `bot/plugins/game/game-webmultiplayer.js`,
  konfigurasi `lib/webgame.json` di server bot — token hanya di server):
  `.uno`, `.unoflip`, `.monopoli`, `.caturweb`, `.utweb`, `.wwweb`,
  `.webgame`, `.uno join <id>` + penangkap verifikasi `/<game> <id>`.
  (Nama `.catur/.ut/.ww` polos sudah dipakai game WA lama, jadi versi
  web memakai akhiran `web`.)
* **Uji:** `tools/test-webgame.mjs` 25/25 lolos lokal & di alamat live
  (alur buat room→klaim→verifikasi→kode masuk→mulai→isi bot→aksi
  keenam game). Screenshot `shots-game/` (lobi, meja UNO, mobile).
* ⚠️ **Plugin bot BELUM terpasang**: saat akan deploy ditemukan
  `panel5.ikyhost.cloud` **NXDOMAIN** dan tunnel `umi-api-gwenna`
  down (0 konektor) — server bot produksi tampaknya hilang/mati.
  Menunggu keputusan pemilik (lihat catatan pemulihan di bawah).

### PEMULIHAN BOT — panel5 hilang, bot pindah ke server beyy baru (15 Okt 2026)

* Ditemukan saat akan memasang plugin game: `panel5.ikyhost.cloud`
  **NXDOMAIN** (panel hilang) & tunnel `umi-api-gwenna` down 0 konektor.
  Pemilik memberi panel baru: `beyy.ikyhost.cloud` server **`62b4d6d0`**
  (`servergameVip`, port 2156) — kredensial di
  `.secrets/beyy-bot-credentials.env` (+ salinan kunci dititipkan di
  `.secrets/shared-secrets.env` karena snapshot workspace berulang kali
  menghapus berkas .secrets baru).
* Bot dipulihkan dari cermin beyy generasi
  `hourly_20261015060003136_97aec887ce0d2d2d` (SHA-256 cocok): arsip bot
  12,2 MB + arsip jadibot (data platform + 11 konfigurasi sesi).
  Arsip backup secara desain TIDAK berisi kredensial sesi/config —
  dilengkapi manual dari workspace/secrets: `config.js` produksi,
  `.tunnel.env`, `.backup-export.env`, `.error-report.env`,
  `.owner-console-relay.env`, folder `scripts/`, `assets/`, `config/`,
  `font/`, `json/` (ketidakhadirannya sempat menyebabkan crash-loop
  `scripts/boot.js` lalu `config/settings.js` — sudah teratasi),
  binary `cloudflared` baru, plugin `game-webmultiplayer.js`,
  `lib/webgame.json`.
* `CMD_RUN` diatur `npm run tunnel-start`. Hasil: bot start normal,
  **2.038 plugin termuat**, `[JADIBOT-API] Aktif di 0.0.0.0:3854`,
  tunnel `umi-api-gwenna` teregistrasi lagi (api → localhost:3854),
  `https://api.gwenna.my.id/api/health` **200**.
* `.main-bot.env` dibuat ulang sesuai keputusan pemilik:
  `MAIN_BOT_ENABLED=true`, nomor pairing **6282343823200**.
  Kode pairing pertama `41XY-B9RJ` (kemungkinan sudah berganti/expired;
  minta kode baru bila perlu). 11 sesi jadibot lama menunggu pairing
  ulang oleh masing-masing penggunanya (konfigurasinya utuh); satu
  sesi baru (6283198361709) sudah terhubung lewat website.
* Panel produksi bot sekarang: **beyy server 62b4d6d0**
  (`.secrets/beyy-bot-credentials.env`). panel5 dinyatakan mati.

### Panel Auto Order dipasang ke panel2.ikyhost.cloud (15 Okt 2026)

Pemilik memberikan Application API (ptla_) + Account API (ptlc_) panel2
lewat chat (TEREKSPOS — sarankan rotate; salinan lokal hanya di
`.secrets/panel2-credentials.env`, nilai produksi terenkripsi di server bot).

* Dipasang via API owner-panel bot (`/api/owner-panel/settings`):
  panelUrl `https://panel2.ikyhost.cloud`, siteUrl diperbarui ke
  `https://jadibot-alzriss.gwenna.my.id`, PLTA+PLTC terkonfigurasi,
  mode pembayaran tetap DANA manual.
* **Tes koneksi: ok** (Pterodactyl ✓, bridge akun ✓; TriPay belum —
  memang tidak dipakai).
* Provisioning dari data panel2: **Egg 15 "kaizenmfh"** (Nest Bot
  Hosting, Node.js) + **Lokasi 1 (Indonesia)** — sudah diset.
* Sisa agar jualan live: harga paket Starter 1/2/4 GB masih Rp0 &
  nonaktif — menunggu harga dari pemilik, lalu aktifkan per paket.
* Harga paket (dari pemilik: Rp1.000/GB, Unlimited Rp11.000) dipasang
  via `/api/owner-panel/packages`: Panel 1–10 GB (Rp1.000–10.000) +
  Panel Unlimited Rp11.000 (32 GB RAM/400% CPU/50 GB disk sebagai
  batas wajar), semua **enabled**. CPU mengikuti pola bawaan
  (30%/GB + 10), disk = RAM. checkoutReady & provisioning ready.
  Katalog dapat diubah lagi dari Owner Panel website kapan saja.

### Perbaikan halaman Saldo di HP (15 Okt 2026)

Keluhan pemilik: halaman Saldo kepotong di HP. Reproduksi lokal
(390×844, katalog contoh): 3 kartu statistik sebaris teksnya terpotong
("Rp…/DAN…/ME…") dan rantai tinggi area scroll rapuh di browser HP.

Perbaikan di `app.css` (lapisan "WALLET MOBILE FIX", hanya ≤900px;
desktop tidak berubah) + naik versi `app.css?v=20261015-walletfix`:
statistik Saldo ditumpuk 1 kolom ke bawah, `.workspace` jadi flex
column dengan `.page` sebagai area scroll resmi (overflow-y auto,
-webkit-overflow-scrolling, overscroll contain, touch-action pan-y),
padding bawah safe-area. Terverifikasi screenshot lokal (statistik
terbaca penuh, scroll mencapai toko/order) & live 200, deployment
`dpl_PU4j3y4gyWbo4aFA3AgSjGFBDCW2`. Bukti: `/home/user/shots-wallet/`.

### Fix 502 beli panel + QR kepotong (15 Okt 2026)

* **502 saat beli panel** — akar masalah dari log bot: panel2 menolak
  pembuatan server (HTTP 422) karena provisioning belum lengkap.
  Diisi via `/api/owner-panel/settings`: dockerImage
  `ghcr.io/parkervcp/yolks:nodejs_24`, startup bawaan egg 15, dan
  environment `CMD_RUN=npm start` (egg "kaizenmfh" mewajibkan
  ketiganya). Dibuktikan dengan uji provisioning payload persis bot
  via PLTA: user+server uji **201 Created**, lalu dihapus bersih
  (server id 28/user dibersihkan). Dua order yang sempat gagal
  (Rp10.000 & Rp11.000) sudah auto-refund oleh sistem.
* **QR DANA kepotong** — gaya inline QR diganti kelas `.wallet-qr`
  di app.css (width 100% max 300px, height auto, kartu putih sudut
  membulat); app.js naik `?v=20261015-lg9`, app.css
  `?v=20261015-qrfix`. Terverifikasi utuh di 390/360/320px
  (`shots-wallet/wallet-qr-*.png`), deployment
  `dpl_HdEBuWkFyTp2HL9zCY5Uu1THB9wU`.

### Halaman Panel user (15 Okt 2026)

* Menu baru **Panel** (#panel) di website: pengguna mengelola server
  panel hasil pembelian tanpa membuka panel2 langsung.
  Tab: **Konsol** (websocket Pterodactyl live + kirim perintah,
  auto-refresh token), **Files** (jelajah, editor teks, unduh,
  unggah via signed URL, file/folder baru, ganti nama, ekstrak zip,
  hapus), **Startup** (startup command & docker image read-only,
  variable editable termasuk CMD_RUN). Tombol power
  Start/Restart/Stop/Kill + indikator CPU/RAM/Disk dan status.
* Arsitektur: `website/api/panel.js` (Vercel) mem-proxy Client API
  panel2 memakai env `PANEL2_PLTC` (akun admin — terbukti bisa
  mengakses server user lain; secret hanya di server, tidak ke
  browser). Kepemilikan server diverifikasi dari
  `/api/wallet/orders` di bot: identifier di luar order aktif user
  ditolak 404.
* Bukti: semua aksi client API diuji ke server uji sungguhan di
  panel2 (power/resources/websocket/file write-read-delete/startup
  variable/signed download — semua 2xx), UI diuji Puppeteer dengan
  mock (0 page error, `shots-panel/`), endpoint live menolak tanpa
  login (401). Server uji panel2 sudah dihapus. Deployment
  `dpl_2eapKkAdidnC8gzQBuw5vFH67Z8r`, aset app.css
  `?v=20261015-panel`, app.js `?v=20261015-lg10`.

### Panel beyy pindah + bot lahir lagi (16 Okt 2026)

* Panel lama (167.99.67.212) sekarat: kedua tunnel jatuh (HTTP 530 di
  website). Pemilik memindahkan ke panel BARU
  `https://beyy.ikynebula.my.id` (Pterodactyl "BeyyXIkyy", akun
  `aaaaaaaaa` id 15) — 3 server KOSONG:
  `bf133872 servergameVip` (bot), `83595f4b aaaaaaaaaVip` (mirror),
  `852f853e serverapaajaVip` (cadangan). Kredensial:
  `.secrets/beyy-new-panel-credentials.env` (PTERO_SERVER_ID=bf133872).
  Kunci pertama yang dikirim (ptlc_[DISENSOR]…) ternyata valid juga; 401
  beruntun di awal = panel baru belum stabil + berkas lokal sempat
  tersimpan sebagai placeholder tersensor (sudah diperbaiki).
* **Bot di-deploy ulang penuh ke bf133872** dari cadangan lokal:
  bot-latest.tar.gz + bot-missing-dirs.tar.gz diekstrak, scripts/
  config.js dan env diunggah, cloudflared baru, CMD_RUN=
  `npm run tunnel-start`, power start → boot bersih: 2.037 plugin,
  JADIBOT-API 3854, tunnel umi-api terdaftar,
  `https://api.gwenna.my.id/api/health` 200, bot utama AKTIF.
  Kode pairing bot utama saat boot: `3XKB-N2MF` (akan berganti;
  ambil yang terbaru dari konsol). Sesi jadibot lama wajib pairing
  ulang (kredensial tidak ikut cadangan, sesuai desain).
* **Regresi CSS terpulihkan**: deploy Panel kemarin sempat menimpa
  layer LIQUID GLASS + WALLET MOBILE FIX + QR karena app.css lokal
  ter-revert snapshot. Layer dibangun ulang di atas CSS live,
  wallpaper.jpg dipulihkan, deployment `dpl_EbGsGJgsiSwsi8ZQ52PwSkkg3kUM`
  (app.css `?v=20261016-restore`). Cadangan sumber website:
  `/home/user/backups/website-restore-20261016.tar.gz`.
* Belum: server mirror `83595f4b` masih kosong → `game.gwenna.my.id`
  dan tunnel alzriss-okta belum dipulihkan (butuh tunnel-creds baru /
  remote-config + token game baru). Server `852f853e` dibiarkan mati.

### Pisah halaman Saldo/Shop/Top Up/ACC Top Up (16 Okt 2026)

* Halaman wallet lama dipecah empat: **#wallet Saldo** (statistik +
  riwayat saldo + jalan pintas), **#topup Top Up** (form + QR/invoice
  aktif + riwayat top up), **#shop Shop** (paket panel, produk,
  ORDER SAYA), **#acctopup ACC Top Up** (khusus owner: antrean
  persetujuan top up DANA manual — dipindah dari halaman Owner;
  route dijaga role owner). Menu navigasi ditambah Top Up, Shop,
  ACC Top Up. Semua id elemen & fungsi render lama dipertahankan.
* Penting: `app.js`/`app.css` lokal sempat ter-revert snapshot lagi;
  dipulihkan dari aset live sebelum mengedit. Deployment
  `dpl_dyLkNCV4KCHWmrpi1UF4nRUFaVJe` (css `?v=20261016-pages`,
  js `?v=20261016-lg11`). Uji Puppeteer 4 halaman: 0 error
  (`shots-pages/`). Cadangan tar diperbarui.

### Kunci panel2 baru + konfigurasi bot baru dipulihkan (16 Okt 2026)

* Pemilik mengirim kunci panel2 baru (client `ptlc_[DISENSOR]…`, admin
  `ptla_…CPSBB`) — keduanya valid (client = akun admin `alzz` id 20).
  Terpasang di: bot (owner-panel settings, tes koneksi OK) dan env
  Vercel `PANEL2_URL`/`PANEL2_PLTC` (deployment
  `dpl_BztLepvH91gjtDBFkBi9axF2fHqU`). Lokal:
  `.secrets/panel2-credentials.env` + `panel2-keys-backup.txt`.
* Ternyata bot di panel beyy baru keadaannya perawan (data/ tidak
  ikut cadangan mirror): provisioning kosong & paket masih bawaan.
  Dipulihkan penuh via `tools/configure-panel2.mjs`: Egg 15 +
  Lokasi 1 + docker `yolks:nodejs_24` + startup egg + CMD_RUN,
  11 paket (1–10 GB Rp1–10rb, Unlimited Rp11.000) semua aktif,
  `provisioning.ready=true`, `checkoutReady=true`.

### Perbaikan rute mental ke dashboard (16 Okt 2026)

* Penyebab: deploy env Vercel (`dpl_BztLep…`) menimpa app.js live
  dengan versi lama (snapshot workspace me-revert lokal): daftar
  `pages` live tidak memuat panel/topup/shop/acctopup sehingga
  router melempar ke dashboard. HTML live tidak ikut revert.
* Diperbaiki dengan memulihkan sumber utuh dari
  `backups/website-restore-20261016.tar.gz`, deploy
  `dpl_E2u6ZrNrrftYzfJC48zam4sGfKBm`; terverifikasi live: pages
  memuat keempat halaman + layer CSS lengkap (panel-console,
  WALLET MOBILE FIX, wallet-qr, LIQUID GLASS).
* ATURAN BARU: setiap selesai deploy, unduh ulang aset live dan
  bandingkan dengan lokal; jangan deploy dari lokal tanpa cek
  marker lebih dulu (snapshot bisa me-revert kapan saja).

### Fix 502 beli panel — adopsi akun panel lama (16 Okt 2026)

* Error baru dari log: `The email has already been taken (422)`.
  Bot di server baru kehilangan data wallet (sesuai desain cadangan),
  sehingga mencoba membuat ulang akun panel2 yang sudah ada dari
  pembelian sebelumnya → ditolak → 502 (saldo tetap auto-refund).
* Perbaikan di `bot/lib/panel-autoorder.js` (`ensurePanelAccount`):
  bila pembuatan akun gagal karena email/username sudah dipakai,
  bot mencari akun lama via PLTA (filter email lalu username),
  mengadopsinya, dan me-reset password-nya agar kredensial yang
  disimpan untuk pembeli valid. Urutan API dibuktikan ke panel2
  (buat→422→lookup→PATCH 200→bersih). Berkas diunggah ke bot
  `bf133872`, bot di-restart: 2.037 plugin, API 3854, health 200.

---

## 🧭 Sesi Baru 16 Oktober 2026 — Workspace Kosong, Sumber Dipulihkan dari Git

### Yang terjadi

Workspace `/home/user` dibuka dalam keadaan **kosong total** — hanya ada
`uploads/PROMPT-SESI-BARU.md`. Semua yang disebut "lokal" di prompt pindah sesi
hilang: `tools/`, `.secrets/`, `usanagi-umi-public-source/`, `restore/`, `backups/`.
Penyebabnya sama seperti berulang kali sebelumnya: snapshot workspace me-revert.

**Penyelamatnya: repo git ini.** `git clone` memulihkan `bot/`, `db-mirror/`,
`tools/` (40 alat), `website/`, `portfolio/`, `deploy/`, dan log ini (1.484 baris).
Pelajaran: **repo git adalah satu-satunya cadangan yang tahan revert** — setiap
pekerjaan harus di-commit dan di-push, jangan ditinggal di workspace saja.

### Status live yang diverifikasi ulang (bukan dari catatan lama)

| Target | Hasil |
|---|---|
| `https://api.gwenna.my.id/` dan `/health` | **401** `{"error":"Silakan masuk terlebih dahulu."}` — API bot hidup di balik tunnel, butuh sesi owner. Catatan lama bilang `/health` 200; sekarang endpoint itu ikut dijaga auth |
| `https://jadibot-alzriss.gwenna.my.id/` | **200** (43.353 B), marker `app.js?v=20261016-lg14` + `app.css?v=20261016-pages4` → tidak ada drift |
| `https://alzriss.gwenna.my.id/` | **200** (14.986 B), penjaga `__UMI_JS_VER==='20261016-lg14'` ada |
| `https://game.gwenna.my.id/` | **530** — origin tak terjangkau, mirror/game masih mati |
| PLTA panel2 | **200** `/api/application/nodes` (Node 1 = node2.ikyhost.cloud, lokasi 1) |
| PLTC beyy | **200** `/api/client` (3 server terlihat) |
| `bf133872` BOT | **running** — 3.699 file, `config.js`, `scripts/boot.js`, `cloudflared` utuh |
| `83595f4b` MIRROR | **offline**, uptime 0 — masih kosong |
| `852f853e` cadangan | **offline** (sesuai rencana) |
| Vercel | **200**, project `alzriss-comunity`, deployment `dpl_6jXxKEP2wdNAT1d7B2r1QNZsaemk` READY, 17 env |

### 🔴 Drift repo-vs-server yang ditemukan (dan sudah dibereskan)

`BACKUP-MANIFEST.json` di server **basi** (generasi `hourly_20261015060003136`,
dibuat 15 Okt 06:00 UTC) sehingga tidak menampilkan perubahan setelahnya. Karena
itu dibuat alat baru **`tools/drift-scan.mjs`** yang membaca daftar file langsung
dari Client API per direktori lalu membandingkan ukuran byte dengan salinan lokal.

Hasil pemindaian pertama — repo **tertinggal dari produksi**:

| Berkas | Server | Repo lama | Keterangan |
|---|---|---|---|
| `bot/lib/panel-autoorder.js` | 48.387 B | 47.083 B | **fix adopsi akun panel (penambal 502) belum pernah di-commit** |
| `bot/handler.js` | 46.655 B | 46.654 B | beda satu titik-koma di baris import |
| `bot/lib/chat.json` | 13.293 B | 3 B | keadaan chat runtime — **sengaja tidak di-sync** |

Kalau ada yang deploy ulang dari repo sebelum sesi ini, **fix 502 beli panel akan
mundur lagi**. Kedua berkas source sudah ditarik dari server, `node --check` lolos,
dan repo kini identik dengan produksi: **3.699 file, 0 selisih kode**.

### Berkas lokal yang dibangun ulang

- `.secrets/` (700/600): `beyy-new-panel-credentials.env` (nama variabel disesuaikan
  ke yang dibaca `tools/ptero.mjs`: `PTERO_PANEL_URL` + `PTERO_CLIENT_API_KEY`),
  `panel2-credentials.env`, `usanagi-credentials.env`, `cloudflare.env`, `github.env`.
- `.secrets/upload/`: lima berkas env **diunduh langsung dari server** (bukan dari
  prompt, supaya tidak basi) — `.main-bot.env`, `.tunnel.env`,
  `.owner-console-relay.env`, `.backup-export.env`, `.error-report.env`.
- `.secrets/sb-keys.json` + `supabase.env`: kunci Supabase **lengkap** (anon 208
  karakter + service_role 219 karakter) dipulihkan dari env Vercel — salinan di
  prompt pindah sesi terpotong di tengah token service_role.
- `/home/user/tools` → symlink ke `usanagi-umi-public-source/tools` supaya perintah
  `node tools/…` dari `/home/user` tetap jalan seperti sebelumnya.
- Cadangan source: `/home/user/restore/bot-latest.tar.gz` — 24 MB, 3.862 berkas
  (tanpa `node_modules`/`sessions`), sha256 `b14b421b…4554fcf`.

### Log konsol bot (relay owner-console jalan, HTTP 200)

- `⏳ Menyiapkan pairing code…` → `Koneksi terputus: Connection Failure` →
  `❌ Pairing belum berhasil: Socket WhatsApp berubah saat pairing.`
  **Tidak ada kode pairing yang sedang tampil sekarang.** Bot akan memunculkan
  prompt lagi begitu koneksi siap; jalankan
  `node tools/console-logs.mjs --grep "PAIRING CODE"` saat siap pairing.
- `[JADIBOT-AUTH] 403 bad_jwt … token is expired` — token sesi website milik
  pengunjung sudah kedaluwarsa (normal; `lib/jadibot-platform-api.js:355`). Bukan
  kerusakan sistem, cukup login ulang di website.
- `[VERCEL-BACKUP-SCHEDULER] Backup hourly selesai` + terjadwal berikutnya →
  cron cadangan sehat.

### Masih terbuka

1. **Pairing bot utama `6282343823200`** — butuh kode terbaru dari log konsol lalu
   dimasukkan pemilik ke WhatsApp.
2. **Mirror `83595f4b` + `game.gwenna.my.id`** — sumber `db-mirror/` utuh di repo
   (`server.js`, `game.js` port 3900 di 127.0.0.1, `game.html`, `tunnel-config.yml`).
   Yang belum ada di mana pun: `plugins/game/game-webmultiplayer.js` dan
   `lib/webgame.json` — keduanya harus ditulis ulang.
3. **Rotate kunci** yang pernah lewat chat (panel2, beyy, Vercel, Cloudflare,
   Supabase, dan token GitHub yang dipakai sesi ini).

---

## 🎮 Mirror + Umi Web Games hidup kembali (16 Oktober 2026)

### Yang dikerjakan

Server mirror `83595f4b` di panel beyy (kosong, offline) diisi ulang dari repo,
server game dinaikkan, tunnel baru dibuat, dan plugin bot yang hilang ditulis
ulang. Hasil akhir: `https://game.gwenna.my.id` **200**, mirror **200**, cadangan
website mengalir lagi ke cermin.

| Berkas di container `83595f4b` | Ukuran | Status |
|---|---|---|
| `server.js` / `game.js` / `game.html` / `package.json` | 11.858 / 44.913 / 31.240 / 300 B | diunggah, HTTP 204 |
| `tunnel-config.yml` + `tunnel-creds.json` | 202 / 210 B | tunnel lokal-managed |
| `game-token.txt` | 48 karakter | **token baru** (yang lama bocor di repo publik) |
| `service-token.txt` | 64 karakter | sama dengan `UMI_MIRROR_TOKEN` Vercel, cron tak perlu diubah |

### Tunnel: kenapa bukan `alzriss-okta`

Tunnel lama `88438bb0-…` statusnya `down`, 0 konektor, `config_src: cloudflare`.
Endpoint `/cfd_tunnel/{id}/configs` **sudah tidak ada** di versi API sekarang
(GET maupun PUT → HTTP 404 tanpa body), jadi ingress remote-nya tidak bisa
dibaca apalagi diperbaiki. Ditambah catatan lama bahwa mode token murni di
tunnel itu mengosongkan ingress (semua hostname 503), tunnel lama **tidak
disentuh sama sekali**.

Sebagai gantinya dibuat tunnel **`umi-games-gwenna`**
(`6f82f294-ff18-4966-9b8e-38edd97f8359`) lewat API dengan `config_src: local`
dan `tunnel_secret` buatan sendiri — sehingga `tunnel-creds.json` bisa
direkonstruksi kapan pun dan ingress sepenuhnya di bawah kendali kita
(`game.gwenna.my.id → http://localhost:3900`, sisanya `http_status:404`).
DNS: CNAME baru `game.gwenna.my.id → 6f82f294-….cfargotunnel.com` (proxied).
Ingress lama diarsipkan sebagai `tunnel-config.alzriss-okta.yml`.

### Verifikasi (semuanya dijalankan, bukan diasumsikan)

- `http://192.241.149.63:3348/health` → **200** `umi-db-mirror`
- `https://game.gwenna.my.id/health` → **200** `umi-web-games`, 6 permainan
  (`uno`, `unoflip`, `chess`, `snakes`, `monopoly`, `werewolf`)
- `https://game.gwenna.my.id/` → **200**, 31.240 B, `<title>Umi Games — Multiplayer WhatsApp`
- `tools/test-webgame.mjs` → **25 lolos, 0 gagal** di alamat live dengan token baru
  (UNO 9, Catur 5, Ular Tangga 3, Monopoli 2, Werewolf 5, UNO Flip 1)
- Cermin: `/mirror/list` 200 dengan token, **401** tanpa token, unggah uji 201
- **Restart penuh** server `83595f4b` → mirror 200 + game 200 lagi dalam 45 detik
  (cloudflared mengunduh binernya sendiri lalu tersambung)

### Plugin bot ditulis ulang

`bot/plugins/game/game-webmultiplayer.js` (8.364 B) + `bot/lib/webgame.json`
(token, di-gitignore; contoh di `bot/lib/webgame.example.json`). Diunggah ke
`bf133872` dan **hot-reload tanpa restart**: log konsol menunjukkan
`reloaded plugin 'game/game-webmultiplayer.js'` tiga kali tanpa error.

Nama perintah sengaja berakhiran `web` untuk catur/ular tangga/werewolf karena
`catur`/`chess` dipakai `game-chess.js` + `usanagi-chess.js`, sedangkan
`ulartangga`/`ut`/`werewolf`/`ww` dipakai portingan Rimuru
(`plugins/pelengkap/rimuru/game/`). Dipetakan ke id server:
`caturweb→chess`, `utweb→snakes`, `monopoli→monopoly`, `wwweb→werewolf`.

Alat uji baru `tools/test-webmultiplayer-plugin.mjs` **memuat modul plugin yang
sebenarnya** (bukan salinan logika) lalu memanggil handler-nya dengan `conn`/`m`
tiruan terhadap server live: **15 lolos, 0 gagal** — bantuan, buat meja, join,
verifikasi kode masuk 6 digit, intip meja, monopoli, catur, plus dua jalur galat.

### Cadangan website tersambung lagi

`UMI_MIRROR_URL` di Vercel masih menunjuk node lama yang mati
(`http://167.99.67.212:2016`) → diganti `http://192.241.149.63:3348`.
Sumber website dipastikan **byte-identik dengan live** dulu (md5 `index.html`
`cb7b3e33`, `app.js` `8d6517dc`, `app.css` `ea487eee`) baru di-deploy:
`dpl_8Zav7t8sZTQNPEyjiwDEMBMCg2za` READY, marker live tetap
`app.js?v=20261016-lg14` + `app.css?v=20261016-pages4`, `index.html` live masih
identik dengan repo.

Cron dipicu manual → generasi `hourly_20261015185021524_036fdf06cde3c27a`:
`website` 1.392.371 B, `bot` 12.809.592 B, `jadibot` 1.732 B, `website-db`
31.170 B. Keempatnya **terbukti mendarat di cermin** dengan SHA-256 cocok
(`website` `f1ade276…`, `bot` `6d37a387…`).

### Yang berubah di repo

- `db-mirror/tunnel-config.yml` → tunnel baru; yang lama jadi `tunnel-config.alzriss-okta.yml`
- `db-mirror/README.md` ditulis ulang mengikuti keadaan sebenarnya
- `.gitignore` += `bot/lib/webgame.json`, `db-mirror/tunnel-creds.json`,
  `tunnel-token.txt`, `game-token.txt`, `service-token.txt`
- `tools/test-webgame.mjs` tidak lagi menyimpan token game di kode (baca dari
  `UMI_GAME_TOKEN` / `.secrets/game-token.env`)
- `bot/plugins/game/game-webmultiplayer.js`, `bot/lib/webgame.example.json`,
  `tools/test-webmultiplayer-plugin.mjs` baru

### Sisa pekerjaan

1. **Pairing bot utama `6282343823200`** — belum, menunggu pemilik memasukkan kode.
2. **Rotate kunci**: token GitHub sesi ini, token game lama `7512d0bc…` (sudah
   tidak dipakai lagi, tapi pernah terbuka di repo publik), panel2 PLTA/PLTC,
   beyy PLTC, Vercel, Cloudflare, Supabase.
3. Server `83595f4b` tidak auto-start bila node panel reboot — perlu dinyalakan
   manual dari panel kalau panel-nya reboot.

---

## 🔴 Host panel beyy MATI total (16 Oktober 2026, 02.20 UTC dicek)

### Gejala yang terukur

| Target | Hasil |
|---|---|
| `https://beyy.ikynebula.my.id/api/client` | **tidak merespons** (curl timeout 12–25 dtk, kode 000) |
| `https://api.gwenna.my.id/` (bot) | **530** — sebelumnya 401 (hidup) |
| `https://game.gwenna.my.id/health` | **530** — sebelumnya 200 |
| `http://192.241.149.63:3348/health` (mirror langsung) | **timeout** |
| `https://jadibot-alzriss.gwenna.my.id/` | 200 (Vercel, infra lain) |
| `https://alzriss.gwenna.my.id/` | 200 (Vercel) |
| `https://panel2.ikyhost.cloud/` | 200 (panel lain, pembanding) |
| `https://registry.npmjs.org/` | 200 (jaringan sandbox sehat) |

`beyy.ikynebula.my.id` resolve ke **192.241.149.63** — IP yang sama dengan node
tempat bot `bf133872` dan mirror `83595f4b` berjalan. Jadi panel, bot, dan mirror
mati bersamaan karena satu kotak yang sama.

### Kapan matinya (data dari Cloudflare, bukan dari server)

```
umi-api-gwenna     konektor=0  mati sejak 2026-10-15T22:47:28Z
umi-games-gwenna   konektor=0  mati sejak 2026-10-15T22:48:31Z
diperiksa          2026-10-16T02:19:33Z  → sudah ±3,5 jam
```

Kedua konektor putus berselisih **63 detik** — pola satu mesin mati, bukan dua
kegagalan terpisah. Pekerjaan pemulihan mirror selesai 18.52 UTC dan masih
terverifikasi 200 pada saat itu; host mati ±4 jam sesudahnya.

### Catatan metodologi

Tes `bash /dev/tcp` **tidak bisa dipercaya di sandbox ini**: port acak
(`192.241.149.63:12345`, bahkan `cloudflare.com:9999`) ikut dilaporkan "terbuka".
Semua kesimpulan konektivitas di atas memakai `curl` dengan batas waktu.

### Yang belum bisa dikerjakan (terhalang host mati)

1. **Mematikan pairing bot utama** — sudah ketemu jalurnya:
   `POST /api/owner-console/main-bot` body `{"enabled":false}` dengan tiket HMAC
   yang sama seperti log konsol (`lib/jadibot-platform-api.js:171`), tanpa perlu
   restart. Cadangan bila API bot belum hidup: tulis `.main-bot.env`
   (`MAIN_BOT_ENABLED=false`, nomor pairing dipertahankan) lewat Client API lalu
   restart.
2. **Menyalakan mirror `83595f4b`** — butuh Client API panel, yang ikut mati.

Alat baru **`tools/recover-after-outage.mjs`** mengerjakan keduanya otomatis dan
idempoten: tunggu panel hidup → nyalakan mirror bila offline → matikan pairing
(API dulu, jatuh ke tulis berkas + restart) → verifikasi mirror/game/pairing.
Dipasang sebagai pemantau tiap 60 detik. `--once` untuk satu putaran.

### Rotation kunci

Sesuai keputusan pemilik: **tidak dilakukan**, risiko diterima. Tidak ada kunci
yang dirotate pada sesi ini.

### Kejutan workspace

Symlink `/home/user/tools` **hilang** saat snapshot dipulihkan (symlink tidak ikut
tersimpan), sedangkan direktori repo, `.secrets/`, dan `restore/bot-latest.tar.gz`
(24 MB) utuh. Perbaikan: `ln -sfn /home/user/usanagi-umi-public-source/tools /home/user/tools`,
atau panggil alat dengan jalur lengkap.

---

## 🚚 Pindah ke panel2 — bot + mirror + game hidup lagi (16 Oktober 2026)

Host beyy tetap mati, jadi pemilik memberi kredensial panel2
(`panel2.ikyhost.cloud`, akun `alzz` id 20, admin) dan meminta server dibuat
bebas. Semua layanan dipindahkan ke sana.

### Server baru (nest 5 "Bot Hosting", egg 15 `kaizenmfh`, Node 1 = node2.ikyhost.cloud)

| Server | id | uuid | alokasi | RAM/disk/CPU | CMD_RUN |
|---|---|---|---|---|---|
| `umi-bot` | 59 | `c2b5fd9a` | 159.223.57.221:3330 | 3072 MB / 8192 MB / 100% | `npm run tunnel-start` |
| `umi-mirror-games` | 60 | `df6a073f` | 159.223.57.221:2844 | 1024 MB / 5120 MB / 50% | `npm start` |

Docker `ghcr.io/parkervcp/yolks:nodejs_23` (egg menyediakan 15–24; dipilih 23
agar sama dengan lingkungan yang sudah terbukti jalan di beyy). `start_on_boot`
dan `oom_disabled` dikirim `true` saat pembuatan — **tidak bisa diverifikasi
lewat API** karena panel ini hanya mengizinkan GET/HEAD/DELETE untuk
`/api/application/servers/{id}` (PATCH dan PUT → 405). Perlu dicek di UI admin.

### config.js tidak ada di mana pun — disusun ulang

`config.js` tidak ikut cadangan (dikonfirmasi: `bot.tar.gz` generasi
`hourly_20261015220003187` hanya berisi `config.example.js`), tidak ada di repo,
dan tidak pernah diunduh dari server lama. Nilai dipulihkan dari:

- `config.example.js` → bentuk `global.owner` / `global.mainBot` / `global.jadibotPlatform`
- Supabase `users` (kunci service_role) → `role=owner` = **akunindo2011264@gmail.com**
  (username `AlzRiss`); ada juga 2 `admin` (`okthaaa01@gmail.com`,
  `riskyggriskyop@gmail.com`) yang **tidak** dimasukkan ke `ownerEmails`
- default `locked_owner_number` di `public/assets/app.js` → **6287813709432**
- `.secrets/sb-keys.json` → `supabaseUrl` + `supabaseAnonKey`

Bukti berhasil: log bot `Config loaded`, `Repairing database... Repair selesai
(0 field diperbaiki)`, `[JADIBOT-API] Aktif di 0.0.0.0:3854`,
`Successfully Loaded 2038 Plugins`, `Bot siap digunakan!`

Isi cadangan yang dipakai: `database.json` (1.630.107 B), `data/jadibot-platform.json`,
`sessions/*/bot-config.json`, `lib/webgame.json` (token game-nya **cocok** dengan
yang baru). Sumber kode dari repo (terbukti identik produksi lewat drift-scan)
+ `scripts/ config/ assets/ font/ json/` yang memang hanya ada di repo.
Paket 43 MB diunggah sekali lalu `decompress` (3.708 berkas).

### Pairing bot utama DIMATIKAN (permintaan pemilik)

`.main-bot.env` → `MAIN_BOT_ENABLED=false`. Terverifikasi dua kali: log boot
`⚙️ Bot utama: NONAKTIF (diatur dari website > halaman Bot Utama)`, dan API
`POST /api/owner-console/main-bot` → `{"ok":true,"enabled":false,
"status":{"status":"unpaired","pairing_active":false}}`.
Sesi jadibot tetap mencoba pairing ulang karena `creds.json` memang tidak ikut
cadangan (by design).

### Bug yang ketemu: EACCES cloudflared

`server.log` (pencatatan baru) menunjukkan `[tunnel] gagal start: spawn
/home/container/cloudflared EACCES` — biner yang diunggah lewat Client API
**kehilangan bit eksekusi**. Di beyy tidak pernah kena karena `server.js`
mengunduh cloudflared sendiri lalu `chmod 0o755`. Diperbaiki permanen di
`db-mirror/server.js`: `ensureCloudflared()` kini selalu `chmodSync(0o755)`.
Setelah itu cloudflared mendaftar 4 koneksi (sin16/sin13/sin14/sin09).

### Alat baru & perbaikan alat

- `tools/ptero-console.mjs` — klien WebSocket Pterodactyl **tanpa dependensi**
  (Node 20 belum punya WebSocket global; `node_modules` tidak ikut snapshot).
  Menangani dua bentuk respons: `data.socket` (panel lama) dan `data.token`
  (panel baru — URL disusun dari klaim `aud` + `server_uuid` di JWT).
  Catatan: Wings di panel2 menolak upgrade dengan **403**, jadi alat ini belum
  bisa dipakai di sana; sebagai gantinya `db-mirror/server.js` kini menulis
  `server.log` yang bisa dibaca lewat Client API.
- `tools/recover-after-outage.mjs` diarahkan ke panel2. Sempat rusak karena
  perintah `sed` yang salah kutip menimpa baris `CRED` menjadi `X` — dan
  `node --check` tetap lolos karena `X` ekspresi valid. Pelajaran: syntax check
  bukan verifikasi; alatnya kini dijalankan sungguhan (`--once` → exit 0).

### Verifikasi akhir

| Target | Hasil |
|---|---|
| `https://api.gwenna.my.id/` | **401** (API bot hidup) |
| tunnel `umi-api-gwenna` | **4 konektor, healthy** |
| `https://game.gwenna.my.id/health` | **200**, 6 permainan |
| `http://159.223.57.221:2844/health` | **200** `umi-db-mirror` |
| `tools/test-webgame.mjs` | **25 lolos, 0 gagal** (live) |
| `tools/test-webmultiplayer-plugin.mjs` | **15 lolos, 0 gagal** (modul plugin asli) |
| cron backup `hourly_20261016031934676` | website 1.392.371 B, bot 13.116.169 B, jadibot 1.914 B, website-db 31.311 B — **semua mendarat di mirror baru**, SHA-256 cocok |
| website | `dpl_DqxT4Rq3iBXEpgPz7EG2juxELf8T` READY; `index.html`/`app.js`/`app.css` identik sebelum & sesudah |

`UMI_MIRROR_URL` Vercel dipindah ke `http://159.223.57.221:2844`.

### Rotation kunci

Tetap **tidak dilakukan** atas keputusan pemilik. Kunci panel2 baru disimpan di
`.secrets/panel2-credentials.env` (600).

---

## 🎮 Website game: bug diperbaiki + UI dirombak (16 Oktober 2026)

### Bug yang ditemukan (semuanya dibuktikan lewat permintaan nyata, bukan tebakan)

1. **Meja tidak bisa dimainkan sama sekali.** Room yang dibuat dari website
   memberi kursi berstatus `pending`, dan *semua* aksi dikunci untuk kursi
   pending — termasuk `start`. Bukti: `POST /api/rooms` → `verified:false`,
   lalu `start` → `403 "Kursimu belum terverifikasi WhatsApp."` Verifikasi itu
   sendiri mustahil jalan karena bot utama `connected:false` /
   `connection:close` (pairing memang diminta off).
2. **Perintah verifikasi salah untuk 3 dari 6 game.** Halaman menyuruh kirim
   `/catur`, `/ulartangga`, `/werewolf`; plugin bot hanya menerima `caturweb`,
   `utweb`, `wwweb` (akhiran `web` sengaja, karena nama polosnya sudah dipakai
   game WhatsApp lama).
3. **Prefix tidak konsisten**: lobi menulis `.uno`, halaman room menulis
   `/uno`. Prefix aktif bot adalah `/` (`config.js` → `defaultPrefix:'/'`).
4. **Werewolf macet selamanya** kalau pemain manusia berperan warga biasa (atau
   sudah mati). Pergantian malam→siang hanya dipicu dari `werewolfAction`, jadi
   tanpa aksi manusia tidak ada yang memicu `werewolfResolveNight`. Terlihat
   sebagai kegagalan uji yang kadang muncul kadang tidak — ternyata deadlock,
   bukan uji flaky.
5. **Unggahan mendarat di folder yang salah.** Berkas yang dijalankan ada di
   root container (`/game.js`, `/game.html`), bukan `/db-mirror/`. Unggahan
   pertama tidak berdampak apa pun; ketahuan karena `/health` tetap tanpa
   `openJoinDefault` dan md5 halaman tidak berubah.

### Yang diperbaiki

**Server (`db-mirror/game.js`)**
- Mode masuk bebas (`UMI_GAME_OPEN_JOIN`, default aktif): kursi dari website
  langsung terverifikasi, `claim` ikut menyesuaikan, host boleh
  menyalakan/mematikannya per meja lewat aksi `openjoin`. Room buatan bot
  **selalu** tetap wajib verifikasi.
- Deadlock werewolf: `werewolfPendingHumans` + `werewolfMaybeResolve` +
  `werewolfScheduleResolve` (jeda 2,5 detik supaya malam tidak berlalu
  sekejap). Kedua pemeriksaan lama di `werewolfAction` diganti pemanggilan ini.
- `state.waCommand` dikirim server, jadi halaman tidak menebak nama perintah.
- `game.html` dibaca ulang berdasarkan mtime → unggah halaman baru tidak perlu
  restart container.
- `/health` menambah `openJoinDefault`.

**Halaman (`db-mirror/game.html`) — ditulis ulang**
- Perintah verifikasi diambil dari `state.waCommand`, prefix konsisten `/`.
- `alert()` diganti toast; panel verifikasi tidak lagi dibangun ulang tiap
  siaran (kode yang sedang diketik tidak hilang); gulir log/chat hanya ikut ke
  bawah kalau pembaca memang di bawah; pilih warna tidak lagi merender ulang
  seluruh meja; tombol salin tautan; indikator koneksi SSE; state "room tidak
  ada" yang jelas; skeleton saat memuat; layout & tipografi mobile dirapikan.
- UI: hierarki kartu jelas, kartu game punya warna aksen per permainan, tombol
  primary/ghost, chip pemain dengan avatar, formulir berlabel dengan focus ring.

### Uji

| Suite | Hasil |
|---|---|
| `tools/test-webgame.mjs` (produksi) | **26 lolos, 0 gagal** |
| `tools/test-game-live.mjs` (produksi, main sampai selesai) | **58 lolos, 0 gagal** |
| `tools/test-game-page.mjs` (render `game.html` di jsdom) | **42 lolos, 0 gagal** |

Dua suite baru: `test-game-live.mjs` (memainkan keenam meja di server hidup,
termasuk regresi deadlock werewolf dan mode masuk bebas) dan
`test-game-page.mjs` (memuat halaman di DOM sungguhan — `node --check` tidak
menangkap error saat dijalankan, jadi halaman benar-benar dijalankan).

Selama pengerjaan, tiga asumsi ujiku sendiri juga salah dan diperbaiki: budget
giliran terlalu kecil, predikat "hari bertambah" untuk warga biasa (yang benar
fasenya yang berpindah), dan state pemain yang sudah terverifikasi dipakai untuk
menguji panel verifikasi.

Alur web end-to-end diverifikasi ulang di produksi: buat room dari web →
`verified:true` → host `start` **berhasil** → host tetap punya kursi (viewer 0)
→ monopoli dimainkan 120 langkah bersama 2 bot.

---

## 2026-10-16 — Situs unggah khusus pemilik (`upload-owner`)

Situs tersendiri untuk pemilik menaruh **contoh website game** sebagai bahan
yang nanti dikembangkan. Terpisah dari website jadibot supaya tidak saling
menimpa.

- Produksi: **https://upload-owner.gwenna.my.id** (proyek Vercel `upload-owner`, region `sin1`)
- Domain lama `upload.gwenna.my.id` juga masih aktif
- Sumber: `upload-owner/` — `index.html` statis tanpa build + `api/*.js` + `lib/`
- Deploy: `node tools/deploy-website.mjs --dir upload-owner --project upload-owner --no-sync`
- Kredensial: `/home/user/.secrets/upload-owner.env` (tidak di-commit)

### Kemampuan

Masuk dengan kata sandi pemilik → unggah berkas (drag-drop, progress, maks 4 MB)
atau **simpan dari URL** (server yang menarik, tidak kena batas body) → daftar
dengan pratinjau, cari, salin path, catatan, unduh, hapus. Agent membaca tanpa
kata sandi lewat `Authorization: Bearer <UMI_UPLOAD_API_TOKEN>`.

### Bug yang ditemukan dan diperbaiki

Empat di antaranya hanya muncul saat dijalankan, tidak terdeteksi `node --check`:

1. **formidable v3** menyelesaikan `parse()` dengan `[fields, files]`, bukan
   objek — destructure objek membuat setiap unggahan 500.
2. **`get()` mengembalikan `null`** saat blob belum ada, bukan melempar 404.
3. **`put()` menolak pathname yang sudah ada** tanpa `allowOverwrite: true`,
   jadi katalog tidak pernah bisa diperbarui setelah tulis pertama.
4. **Katalog tunggal yang ditimpa tidak bisa dipakai.** Diukur di store ini:

   | Pola | Baru terlihat setelah |
   |---|---|
   | blob write-once baru, dibaca isinya | ~0,6 detik |
   | blob baru muncul di `list()` | ~4,5 detik |
   | pathname lama ditimpa, dibaca lagi | **lebih dari 16 detik** |

   Akibatnya penghapusan tepat setelah unggah menjawab 404, dan dua instance
   yang menulis berbarengan saling menimpa katalog sehingga entri hilang (pernah
   terekam: store berisi 5 entri, instance mengira 2). Perbaikan pertama
   (menunggu propagasi sebelum menjawab) **tidak cukup** — uji produksi masih
   flaky 18/0, 17/1, 12/6.

   Desain diganti jadi **sidecar write-once per berkas**: `uploads/<id>/berkas`
   + `uploads/<id>/meta.json`, daftar diturunkan dari `list()`. Tidak ada
   baca-ubah-tulis, jadi tidak ada data hilang. UI menyisipkan entri baru secara
   optimis karena `list()` butuh ~4,5 detik. Setelah itu produksi stabil.

Aturan turunannya: pathname tidak pernah dipakai ulang (path bekas hapus gagal
3/3, path baru stabil 3/3), dan `uploads/_katalog.json` yang lama dibuang.

### Uji

| Suite | Hasil |
|---|---|
| `tools/test-upload-site.mjs` (handler asli + Blob asli + jsdom) | **65 lolos, 0 gagal** |
| `tools/test-upload-live.mjs` (produksi, 3× beruntun) | **18 lolos, 0 gagal** |

Suite lokal menjalankan route handler sungguhan di server Node terhadap Blob
store sungguhan, lalu memuat `index.html` di jsdom (masuk lewat formulir →
unggah → entri tampil). Suite produksi menembak `upload-owner.vercel.app` dan
membersihkan berkas ujinya sendiri — store dipakai bersama, jadi tidak ada
reset menyeluruh.

### Yang belum

`upload-owner.my.id` belum punya DNS dan token Cloudflare yang ada hanya melihat
zone `gwenna.my.id`, jadi domain itu tidak bisa dibuat atau diarahkan dari sini.
Situs tayang di `upload-owner.vercel.app`; langkah DNS diserahkan ke pemilik.

## XERYU MD Feature Extraction (2026-10-16)
User uploaded "XERYU MD V16 X AUTO ORDER" ZIP (9.8MB, 36K+ lines) via jadibot website.
Extracted key features as clean-room implementations:

### New Plugins (commit cc5a6f3)
| Plugin | Path | Description |
|--------|------|-------------|
| store-autoorder.js | bot/plugins/store/ | Digital store with stock management, auto-delivery, order tracking |
| rich-music.js | bot/plugins/music/ | YouTube search with interactive carousel cards |
| game-hub.js | bot/plugins/game/ | Interactive game menu carousel (19 games listed) |
| game-spaceshooter.js | bot/plugins/game/ | HTML5 Space Shooter arcade game (rich HTML) |
| rpg-activity.js | bot/plugins/economy/ | RPG economy: work/hunt/mine/farm/fish/rob/adventure/daily |

### Plugin Details
- **store-autoorder**: Owner creates products with price+stock, users buy with balance, auto-delivers digital items
- **rich-music**: YouTube search via yt-search, shows results as WhatsApp carousel cards, downloads via savetube CDN
- **game-hub**: Lists all 19 available games in interactive carousel format
- **game-spaceshooter**: Full HTML5 arcade shooter with touch controls, waves, scoring
- **rpg-activity**: 8 activity types with cooldowns, monsters, minerals, fish, crops, adventures, leaderboard

All plugins: ESM format, node --check clean, no ||= / ??= operators (max ES2020 compatible).
