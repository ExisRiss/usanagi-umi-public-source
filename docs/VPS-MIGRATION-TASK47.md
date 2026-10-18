# Paket pindah VPS — Task47 · 18 Oktober 2026

> **Task49 terbaru:** server bot/game sudah dipasang pada panel baru dengan dua role; website dan endpoint produksi aktif, tetapi auth WA/SQLite RPG lama/ledger belum pulih lengkap. Lihat [PANEL-MIGRATION-TASK49.md](PANEL-MIGRATION-TASK49.md). Bagian Task46/47 di bawah bersifat historis.

## Status yang harus dibedakan

- **Arena:** proses preview sudah berjalan, guest tanpa WhatsApp, progres SQLite terisolasi. Gunakan kartu **Live Preview**, lalu **Mainkan versi tes**. Akses browser langsung tanpa konteks Arena ke URL e2b mentah menghasilkan 403 `Missing traffic access token`; ini gateway platform, bukan HTTP500 game. Pengujian browser gameplay dilakukan melalui localhost sandbox; akses pengguna melalui gateway Arena belum dikonfirmasi dari perangkat pengguna.
- **Source:** seluruh bot, game, website, aset dan lockfile ada di release. Tautan MMORPG ditambahkan ke sidebar/hero website serta lobi game.
- **Produksi:** VPS lama down menurut pemilik; tidak dicoba berulang, tidak ditulis/direstart. Website produksi belum dideploy ulang dalam Task47. Tautan permanen game.gwenna.my.id/realms baru berfungsi setelah stack baru dipasang.
- **Bukan MMORPG lengkap:** dunia bersama/presence/chat bekerja; Hollow Crypt adalah dungeon solo persisten, bukan party manusia/co-op. Guild, friend/whisper, player trade, admin dan pengujian beban besar belum selesai.

## 1. Isi release dan kebutuhan

| Folder | Isi |
|---|---|
| `bot/` | Bot utama/jadibot, plugin lama, service RPG/Realms, web client dan art original |
| `db-mirror/` | Server game/lobi/trading/Empire dan companion existing |
| `website/` | Source website + API serverless + SQL Supabase + package-lock |
| `standalone/realms/` | Preview runnable, SQLite terisolasi, package-lock dan browser QA |
| `deploy/vps/` | Docker preview, Caddy, systemd full-stack, persiapan layout, capture runtime privat |
| `docs/`, `STATUS-DEPLOY.md` | Audit, cara deploy dan batasan yang masih ada |

Source ZIP **tidak berisi** `.env` asli, config pribadi, token, database akun, auth WhatsApp, node_modules atau data guest. Dependency diinstal dari lockfile, bukan dipindah antar arsitektur. Internet ke registry npm/apt dibutuhkan. Supabase, Blob, provider API dan Vercel tetap layanan eksternal; release tidak menyalin data/cloud account mereka.

Rekomendasi awal full-stack: Ubuntu 24.04 LTS, Node **22 LTS**, 4 vCPU/8 GB RAM/SSD (perkiraan operasional, bukan hasil load test). Preview kecil dapat dicoba di 2 vCPU/2 GB. Sistem perlu `git curl ca-certificates python3 make g++ ffmpeg imagemagick fontconfig fonts-dejavu-core sqlite3`; untuk native media: `pkg-config libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev`. Node 22 harus terpasang dari distribusi resmi/installer tepercaya; jangan menganggap paket Node default OS sudah cocok. Jangan gunakan PM2 cluster/multi-worker untuk satu authority SQLite ini.

## 2. Menjalankan game dulu — tanpa bot/WA

### Tanpa Docker (sudah dijalankan di Arena)

Dari root hasil ekstrak:

```sh
npm ci --prefix standalone/realms
cd standalone/realms
REALMS_MODE=preview REALMS_DATA_DIR=./data PORT=4173 npm start
```

Buka localhost atau pasang reverse proxy HTTPS. Untuk tes remote tanpa domain, SSH port-forward `ssh -L 4173:127.0.0.1:4173 user@VPS` lalu buka `http://localhost:4173/realms`. Jangan buka port database/bot internal ke internet.

### Docker + HTTPS (konfigurasi disediakan, build Docker belum diuji di Arena)

Pasang Docker Engine + Compose plugin resmi. A record subdomain **tes** harus menuju VPS baru; port 80/443 tersedia. Simpan env di direktori privat, contoh:

```sh
mkdir -p ~/.secrets && chmod 700 ~/.secrets
cp deploy/vps/preview.env.example ~/.secrets/realms-preview.env
chmod 600 ~/.secrets/realms-preview.env
# Edit REALMS_DOMAIN di file privat di atas.
docker compose --env-file ~/.secrets/realms-preview.env -f deploy/vps/compose.yaml --profile https up -d --build
curl -fsS https://SUBDOMAIN-TES/health
```

Named volume `realms-test-data` menjaga SQLite saat container diganti. **Jangan `down -v`** jika ingin mempertahankan data. Jangan gunakan volume preview untuk produksi. Caddy meneruskan SSE tanpa buffering; guest cookie membutuhkan host publik HTTPS.

## 3. Full bot + game: baru setelah runtime privat dipulihkan

1. Ekstrak source baru ke `/srv/umi` (bukan timpa folder website produksi dari backup lama). Buat user Linux `umi`, pasang Node22/dependency OS. Pastikan `node` tersedia di `/usr/bin/node` atau sesuaikan unit systemd.
2. Dari `/srv/umi`, jalankan `node deploy/vps/prepare-full-stack.mjs`. Ini membuat `bot/game -> ../db-mirror` dan menyalin companion; **menolak menimpa** layout yang sudah ada. Semua file game source tetap versi baru; jangan menyalin source dari arsip backup lama.
3. Pulihkan **hanya runtime** dengan cara privat sesuai bagian 4: config, env/token yang sama, SQLite/JSON, account links, trading runtime, sesi WA yang memang masih layak. Jangan membuat/merotasi key baru. Jangan jalankan bot lama dan baru bersamaan memakai auth yang sama.
4. Cocokkan `global.jadibotPlatform.apiPort` di config asli dengan `UMI_REALMS_BOT_PORT`. Contoh port 3366 **bukan izin mengubah config lama sembarangan**. `GAME_PORT=3900` untuk companion. Jaga autoread OFF dan pairing bot utama sesuai setelan lama. `PUMP_ENABLED=false` tetap dipertahankan.
5. Instal dependency:

```sh
cd /srv/umi
npm ci --prefix bot --omit=dev --no-audit --no-fund
npm ci --prefix website --no-audit --no-fund
mkdir -p /home/umi/.secrets
chmod 700 /home/umi/.secrets
cp deploy/vps/runtime.env.example /home/umi/.secrets/runtime.env
chmod 600 /home/umi/.secrets/runtime.env
# Edit port jika diperlukan; simpan nilai rahasia ASLI, bukan contoh baru.
chown -R umi:umi /srv/umi /home/umi/.secrets
```

6. Unit `deploy/vps/umi-stack.service` menjalankan `scripts/companion.js` (bot + game). **Unit sengaja menolak start jika config/SQLite produksi belum dipulihkan**, agar kehilangan data tidak disamarkan sebagai akun kosong. Jika data benar-benar tidak dapat dipulihkan, minta keputusan pemilik sebelum membuat DB baru; bukan otomatis menghapus guard.
7. Setelah semua data dan port terverifikasi:

```sh
sudo cp deploy/vps/umi-stack.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now umi-stack
sudo journalctl -u umi-stack -n 100 --no-pager
```

8. Gunakan **salah satu**: Caddy host (`Caddyfile.production.example`, konfirmasi domain/port), atau Cloudflare named tunnel dengan kredensial/config lama. Jangan menjalankan tunnel `alzriss-okta` dalam mode `--token`; jangan gunakan script legacy `npm run tunnel-start`. Companion memakai named-tunnel config jika binary/file tersedia. Jangan menduplikasi dua jalur tanpa rencana DNS.
9. Firewall: buka SSH serta 80/443 jika Caddy; tutup 3366/3900/4173 dari publik. SQLite tidak punya port publik. Jangan menyalakan firewall sampai SSH benar-benar diizinkan.
10. Website/serverless **tetap di stack existing**. Deploy folder `website/` ke project existing memakai env yang sama; jangan menyalin snapshot website lama. Jangan menjalankan helper legacy yang menghapus/mengganti env tanpa membandingkan dahulu. File API serverless tidak otomatis menjadi backend dengan sekadar disajikan Nginx.

Pada Pterodactyl, layout target adalah root bot + `game/`, dependency sama, startup `node scripts/companion.js`; alokasi/domain/APIport harus diverifikasi lewat API panel baru. Unit systemd host bukan untuk dipasang di container Pterodactyl.

## 4. Audit backup — sesi tidak boleh dianggap sudah aman

Backup terbaru yang bisa diunduh dari Blob: **17 Oktober 2026 sekitar 19:00 UTC**.

- Jadibot: 10 file, 8 konfigurasi sesi, **0 `creds.json`**. Konfigurasi bukan sesi login.
- Bot: legacy `database.json` ada; **tidak ada SQLite `data/database/usanagi.sqlite` dan tidak ada auth WA**.
- Backup lokal yang lebih tua juga belum membuktikan auth tersedia. Exporter `safe-operational` sengaja mengecualikan kredensial.
- Arsip ini disimpan privat di workspace `.secrets/vps-migration/`; **tidak dimasukkan ke source ZIP/Git**. Nilai env/token existing tetap, tidak dirotasi. Belum dilakukan restore data produksi.

Artinya: **pemulihan penuh progres SQLite dan sesi WA masih bergantung pada disk/snapshot privat VPS lama**. Jika tidak ada salinan auth yang valid, pairing ulang diperlukan. Jangan restore metadata jadibot lalu mengklaim sesi connected. Jangan menggabungkan database guest untuk menutupi data yang hilang.

### Capture dari disk/server lama jika tersedia

- Jalankan kebijakan existing penghapusan jadibot disconnect >=15 menit beserta backup-nya; **jangan hidupkan lagi sesi kedaluwarsa dari arsip**. Tinjau eligibility sebelum restore, jangan blindly restore semua jadibot.
- Hentikan bot **dan game** sebelum snapshot file (SQLite WAL dan penulis JSON harus berhenti). Pastikan data belum dihapus penyedia VPS. Bila disk offline, mount read-only dan buat salinan privat untuk recovery; jangan jalankan source lama.
- Script berikut hanya membuat arsip, tidak start/restore/mengubah key:

```sh
python3 deploy/vps/capture-private-runtime.py \
  --bot-root /PATH/ROOT-BOT-LAMA \
  --output /home/umi/.secrets/runtime-private-20261018.tar.gz \
  --stopped --retention-checked
```

Flag adalah konfirmasi operator, bukan detektor otomatis semua proses. Arsip 0600, direktori 0700, tanpa menampilkan nomor/nama sesi. Mencakup data SQLite/WAL/SHM yang masih ada, JSON, auth sesi, config, env dan trading links/runtime. Arsip backup bertumpuk dikecualikan untuk tidak menghidupkan auth expired. Config/env lain di luar allowlist dan secret dashboard Vercel/Supabase harus diekspor privat terpisah. Simpan terenkripsi saat transfer/backup luar server; gunakan passphrase privat, bukan publish di chat/Git.

Restore ke direktori staging privat **kosong**, verifikasi SHA256 dari `PRIVATE-RUNTIME-MANIFEST.json`, periksa `PRAGMA integrity_check` SQLite, baru salin runtime yang valid ke source baru saat service masih stop. Pertahankan WAL/SHM sebagai satu set sampai recovery SQLite selesai. Jangan menimpa runtime baru dari arsip lama tanpa membandingkan tanggal dan persetujuan pemilik. Setelah restore, sesuaikan ownership `umi` dan permission 0600 untuk secret.

## 5. Checklist sebelum menyebut produksi berhasil

- [ ] Config/env asli dan semua lockfile terpasang; tidak ada rotasi token.
- [ ] DB SQLite valid, hitung/cek sampel progres lama; migrasi Realms membuat backup konsisten sebelum schema additive.
- [ ] Data JSON lama/trading/account links tidak di-reset; snapshot dan rollback privat tersedia.
- [ ] Auth utama/jadibot yang layak diverifikasi; sesi expired tetap dihapus, bukan direstore.
- [ ] Bot/game health 200; `/realms/api/meta` bukan 404/502; SSE tidak dibuffer proxy.
- [ ] Guest route `/realms/api/demo-login` tidak ada pada API produksi.
- [ ] Login dari private WA -> aksi web -> status WA benar-benar satu progres, termasuk summon/inventory.
- [ ] Logout/revoke, privasi nomor, hadiah idempotent dan mobile dicek di host baru.
- [ ] Website sidebar/lobi menuju `/realms`; tidak mengganti asset trading atau website dengan snapshot tua.
- [ ] Hanya setelah tes: alihkan DNS, monitor/restart lewat panel API jika memakai panel. Jangan start auth sama di dua VPS.

Rollback: stop stack baru; simpan runtime saat ini; rollback kode ke commit yang diketahui. Jangan menurunkan/menghapus tabel Realm atau memulihkan DB tua di atas progres baru tanpa analisis. Arahkan trafik balik hanya jika server lama benar-benar sehat.

## 6. QA yang benar-benar dijalankan

40/40 backend+migrasi SQLite nyata; 16/16 pemeriksaan browser gameplay di server preview (dua akun, quest, combat, portal, boss/chest, reload, chat, mobile, empat lebar viewport), 0 page errors. Screenshot desktop kerajaan/dungeon dan mobile diperiksa visual. Regresi bot dicatat di STATUS-DEPLOY. Docker build, systemd di VPS baru, login WA fisik dan gateway Arena dari perangkat pengguna **belum terverifikasi**.
