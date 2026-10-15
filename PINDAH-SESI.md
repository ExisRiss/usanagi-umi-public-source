# PROMPT PINDAH SESI — PROJECT USANAGI UMI (AlzRiss)

Kamu melanjutkan pekerjaan dari sesi sebelumnya. Semua status di bawah ini SUDAH terverifikasi hidup per 16 Oktober 2026. Jangan mengulang pekerjaan yang sudah selesai. Bahasa komunikasi: Bahasa Indonesia santai. Pemilik project: AlzRiss (pemilik sah source code ini).

## ARSITEKTUR
- Bot WhatsApp (Baileys, ESM Node) jalan di Pterodactyl; website di Vercel; domain `gwenna.my.id` lewat Cloudflare Tunnel.
- Website jadibot: https://jadibot-alzriss.gwenna.my.id
- Portofolio: https://alzriss.gwenna.my.id
- API bot: https://api.gwenna.my.id (tunnel `umi-api-gwenna` -> bot port 3854)
- Game web: https://game.gwenna.my.id (BELUM dipulihkan, lihat "BELUM SELESAI")

## PANEL & TOKEN (RAHASIA — jangan commit ke repo, simpan hanya di /home/user/.secrets/ chmod 600)

### 1) Panel pelanggan / Auto Order — panel2
- URL: https://panel2.ikyhost.cloud
- Application API (PLTA): ptla_[AMBIL-DARI-.secrets]
  (pemilik juga pernah mengirim varian tanpa B terakhir: ...PLCPSB — yang terpasang & terbukti jalan di bot adalah yang di atas; kalau 401 coba varian satunya)
- Client API (PLTC): ptlc_[AMBIL-DARI-.secrets]
- Akun PLTC: `alzz` id 20, ADMIN (client key-nya bisa mengakses server user lain — dipakai halaman Panel di website)
- File lokal: /home/user/.secrets/panel2-credentials.env dan panel2-keys-backup.txt
- Provisioning bot: Nest 5 (Bot Hosting), Egg 15 `kaizenmfh`, Location 1 (Indonesia), docker `ghcr.io/parkervcp/yolks:nodejs_24`, startup bawaan egg 15, environment CMD_RUN=`npm start`. Egg ini MEWAJIBKAN docker_image + startup + CMD_RUN saat create server (pernah 422).
- Katalog (semua aktif): panel-1gb..panel-10gb = Rp1.000 x GB (RAM/disk GBx1024 MB, CPU 30%/GB+10), panel-unlimited Rp11.000 (32768 MB/400%/51200 MB).
- Alur: top up DANA manual -> owner ACC -> saldo -> beli -> server otomatis dibuat; gagal = saldo auto-refund.
- Bot menyimpan PLTA/PLTC terenkripsi; install/ubah lewat API owner-panel (tiket HMAC): pakai tools/set-panel-autoorder.mjs, tools/configure-panel2.mjs.

### 2) Panel beyy BARU (rumah bot sekarang) — beyy.ikynebula.my.id
- URL: https://beyy.ikynebula.my.id (Pterodactyl "BeyyXIkyy", akun `aaaaaaaaa` id 15, TIDAK admin)
- Client API key: ptlc_[AMBIL-DARI-.secrets]
  (kunci pertama ptlc_[AMBIL-DARI-.secrets] juga valid)
- File: /home/user/.secrets/beyy-new-panel-credentials.env (berisi PTERO_SERVER_ID)
- 3 server:
  - `bf133872` servergameVip = BOT (allocation 192.241.149.63:3753) — HIDUP
  - `83595f4b` aaaaaaaaaVip = MIRROR/games (allocation 192.241.149.63:3348) — masih KOSONG, belum dipulihkan
  - `852f853e` serverapaajaVip = cadangan — kosong, biarkan mati
- Tool: tools/ptero.mjs dengan env PTERO_ENV_FILE=/home/user/.secrets/beyy-new-panel-credentials.env (perintah: list, ls, upload, decompress, delete, var, power, console, watch). Upload file besar pakai tools/ptero-upload.sh (signed URL Wings).

### 3) Panel MATI — jangan dipakai
- panel5.ikyhost.cloud (NXDOMAIN)
- beyy.ikyhost.cloud node lama 167.99.67.212 (sekarat; mirror lama + tunnel alzriss-okta mati dari sini)

## BOT (server bf133872)
- Dijalankan: CMD_RUN=`npm run tunnel-start` (menjalankan cloudflared token tunnel umi-api-gwenna + `node scripts/boot.js`), 2.037 plugin, JADIBOT-API di 0.0.0.0:3854.
- Bot utama: 6282343823200, MAIN_BOT_ENABLED=true — status pairing terakhir: MENUNGGU pairing (kode berganti terus; ambil kode terbaru dari log konsol: `node tools/console-logs.mjs --grep "PAIRING CODE"`). Kalau user bilang "kode baru", ambilkan dari sana.
- Semua sesi jadibot lama WAJIB pairing ulang (kredensial sesi memang tidak ikut backup — by design).
- Perbaikan terakhir di lib/panel-autoorder.js -> ensurePanelAccount(): adopsi akun panel2 lama bila "email has already been taken", lalu reset password via PLTA (sudah terpasang & bot sehat, health 200).
- Backup bot (Vercel Blob, tiap jam) TIDAK memuat: config.js, .env*, sessions/, node_modules/, data/, DAN scripts/ config/ assets/ font/ json/. Restore wajib menyalin dirs itu dari workspace + .secrets/upload/ (config.js + *.env) + binary cloudflared. Arsip lokal: /home/user/restore/bot-latest.tar.gz + bot-missing-dirs.tar.gz.
- .secrets/upload/.main-bot.env LOKAL BISA BASI — file produksi ditulis langsung ke server (enabled=true + 6282343823200).
- Plugin server menolak `||=`/`??=` (maks ES2020) — `node --check` lokal tidak menangkap ini.
- log bot: tools/console-logs.mjs (relay HMAC dari .secrets/upload/.owner-console-relay.env).

## WEBSITE (Vercel)
- Project: alzriss-comunity `prj_UPjBvflOYP8ureG3cCxHHQKxOb0s`, team `team_TwCNMEAL8AoOA0whO30gFU4S`
- VERCEL_TOKEN: [AMBIL-DARI-.secrets/usanagi-credentials.env]
- Deploy: `cd /home/user && node tools/deploy-website.mjs` (token dibaca dari .secrets/usanagi-credentials.env)
- Portofolio: project alzriss-portofolio `prj_orhrVhUgLgZcLWo06a3cGC27QUdi`, deploy tools/deploy-portfolio.mjs
- Source: /home/user/usanagi-umi-public-source/website (index.html -> scripts/sync-public.mjs -> public/index.html; aset di public/assets/)
- Versi aset saat ini: app.css?v=20261016-pages4, app.js?v=20261016-lg14 (ada penjaga versi `__UMI_JS_VER` di app.js + auto-reload di index.html)
- Env Vercel penting: PANEL2_URL, PANEL2_PLTC (untuk api/panel.js), UMI_CONSOLE_RELAY_SECRET=[AMBIL-DARI-.secrets]
- Halaman: Dashboard, Saldo (#wallet: statistik+ledger), Top Up (#topup: form+QR DANA+riwayat), Shop (#shop: paket/produk/order), ACC Top Up (#acctopup: owner-only, persetujuan top up manual), Panel (#panel: konsol/files/startup server pembeli via api/panel.js), Pairing, Settings, Chat, Plugin, Console, Owner, AI Agent.
- File api/: proxy.js (ke bot), panel.js (proxy Client API panel2), unified.js, platform.js, backup-cron.js, tripay-callback.js.
- Cadangan sumber: /home/user/backups/website-restore-20261016.tar.gz
- Uji UI: tools/shot-*.mjs (Puppeteer; sesi palsu localStorage `umi_studio_session_v2` + intercept API).

## CLOUDFLARE
- Zone gwenna.my.id: 749ac07d6dba0c78a4913d3d08491b66 | Account: 036f8ab78b289954794f71ada514e225
- CLOUDFLARE_TOKEN: [AMBIL-DARI-.secrets/usanagi-credentials.env]
- Tunnel umi-api-gwenna: 72975e9b-ef53-45fd-ab28-84c4a78e6447 (dari bot bf133872; api.gwenna.my.id + umi-api.gwenna.my.id -> localhost:3854; token tunnel di .secrets/upload/.tunnel.env: CLOUDFLARE_TUNNEL_TOKEN=[AMBIL-DARI-.secrets]
- Tunnel alzriss-okta: 88438bb0-2a14-4e71-a85c-94ebe2dc494f (wildcard *.gwenna.my.id; DULU dari mirror lama, SEKARANG MATI — ingress incl. game.gwenna.my.id -> localhost:3900)
- JANGAN menjalankan cloudflared modern mode --token murni untuk alzriss-okta (menimpa ingress remote -> 503). Gunakan config lokal + tunnel-creds, atau atur remote-config via API dulu.
- Token CF tidak bisa Workers/Pages/cache-purge (9109/10000) — jangan dicoba berulang.

## SUPABASE
- Project: tlcvkksfgdyeiypzcwdj — kunci di /home/user/.secrets/sb-keys.json: [{"api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsY3Zra3NmZ2R5ZWl5cHpjd2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NDQ4MzgsImV4cCI6MjEwNzAyMDgzOH0.lHbfnsBQxsbntq9XfOQAysNnbw5shJYqbuH8TiC1vXg", "id": "anon", "type": "legacy", "prefix": "lHbfn", "name": "anon", "description": "Legacy anon API key", "hash": "W2oz0EDVPvJtEA9kX8wyrvS5nxAR3et0BXctrylMn90"}, {"api_key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsY3Zra3NmZ2R5ZWl5cHpjd2RqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MTQ0NDgzOCwiZXhwIjoyMTA3MDIwODM4fQ.htYMuK_UYhhIZVTgxgCvxnZUD

## STATUS TERAKHIR (16 Okt 2026)
SELESAI & LIVE: bot hidup di panel baru; Panel Auto Order panel2 aktif (11 paket); halaman Saldo/Top Up/Shop/ACC Top Up terpisah; halaman Panel (konsol/files/startup); QR DANA anti-kepotong; liquid glass dua situs; wallet mobile fix.
BELUM SELESAI:
1. Pairing bot utama 6282343823200 (user memasukkan kode dari tools/console-logs.mjs).
2. Pulihkan server mirror bf133872->83595f4b: deploy /home/user/usanagi-umi-public-source/db-mirror/ (server.js+game.js+game.html) + tunnel alzriss-okta + game server port 3900 -> game.gwenna.my.id hidup lagi; buat token game baru + perbarui lib/webgame.json di bot + plugin bot/plugins/game/game-webmultiplayer.js (file plugin ini hilang dari workspace, perlu ditulis ulang dari API game.js).
3. Semua kunci yang pernah dikirim lewat chat (panel2, beyy) idealnya di-rotate.

## ATURAN KERJA PENTING (dari pengalaman pahit)
- WORKSPACE SNAPSHOT SERING ME-REVERT file lokal (app.js/app.css/kredensial hilang berulang kali). Setelah deploy WAJIB unduh ulang aset live & bandingkan marker; jangan deploy dari lokal tanpa cek. Tulis berkas rahasia lewat variabel shell (python heredoc pernah membuat nilai tersimpan sebagai placeholder [SECURITY_DATA]).
- Edit file satu per satu lalu grep-verifikasi; jangan edit paralel pada file sama.
- Jangan unduh/jalankan script bot bajakan pihak ketiga; fitur dibuat clean-room.
- Jangan timpa production website dengan zip snapshot lama. Restyle CSS saja, jangan ubah id/class/JS behaviour.
- Kredensial hanya di /home/user/.secrets (chmod 600), tidak pernah di repo.
- Log pekerjaan: /home/user/STATUS-DEPLOY.md — lanjutkan mencatat di sana.
