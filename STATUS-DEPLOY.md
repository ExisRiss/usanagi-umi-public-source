# STATUS DEPLOY

**Log lengkap:** [repo `STATUS-DEPLOY.md`](./usanagi-umi-public-source/STATUS-DEPLOY.md)

Terakhir diperbarui: **2026-10-17 11.30 WITA**

## Done

1. ✅ **Jadibot server → panel baru** (beyypanel.serverprivv.my.id, server `b3f9c8df`, port 3366)
2. ✅ **Server lama → monitoring** (ayamlahVip `1fabdac4`, port 3480)
3. ✅ **Backup sessions** — 3 session (6281935568221, 6282343823200, 6283878775317)
4. ✅ **Website bugs** — Google login, profile, game, auto-deploy
5. ✅ **Auto-deploy** — post-commit hook → server + Vercel
6. ✅ **Bratvid/brat2 API** → `apiii-xrina.my.id` (commit `21538b5`)
7. ✅ **Sessions real-time fix** — stats endpoint queries bot `/api/stats` (commit `5f3096f`)
8. ✅ **Brat.js fix** → `apiii-xrina.my.id` + buffer approach (commit `26edd9e`)
9. ✅ **Store panel2 configured!**
   - Panel: `https://panel2.ikyhost.cloud/` → connection OK (pterodactyl ✅, bridge ✅)
   - Payment: manual DANA (approval required)
   - Packages: 1GB (5rb), 2GB (10rb), 4GB (20rb), 8GB (35rb)
   - `.owner-console-relay.env` uploaded to bot server (was missing!)
   - Vercel env: PANEL2_URL, PANEL2_PLTC, PANEL2_PLTA set

### Fix bug mental profil (routing + Google OAuth) — commit `ad587a4`
- **Akar masalah:** `onAuthStateChange` / `getSession()` TIDAK ADA di app.js → sesi Google login tidak pernah disimpan (`persistSession:false`). Setiap load dianggap belum login → klik Profil → halaman auth → login → dashboard.
- **Fix 1:** `captureSupabaseSession()` + `onAuthStateChange` → sesi Supabase disimpan ke localStorage `umi_studio_session_v2`.
- **Fix 2:** `rememberRoute()` / `consumeRoute()` → halaman tujuan disimpan sebelum redirect ke auth, dipulihkan setelah login (form, register, Google).
- **Fix 3:** guard versi index.html cek `20261016-lg14` vs app.js `20261016-fix1` → halaman paksa reload tiap 1.5s. Versi disamakan (`20261016-profile2`) + guard tidak loop kalau versi kosong.
- **Fix 4:** page toggle null-safe (`if(node) node.classList.toggle(...)`).
- **Fix 5 (sebelumnya):** `platform/me` kirim `created_at` + `api_token`; loadProfile hydrate identity; token asli + persist; avatar + display name.
- Verifikasi live: `jadibot-alzriss.gwenna.my.id` — `__UMI_JS_VER='20261016-profile2'`, `consumeRoute`/`rememberRoute`/`umi_return_to`/`profileAvatar` semua ada.

10. ✅ **Bug mental profil** — fix real API token display, avatar, joined date, fresh identity (commit `bdf0c75`)

### Fix game web + token trading (17 Okt 2026) — commit `16ee83a`
**Keluhan:** "aku udah masukin token di website umi game malah gabisa"

**Akar masalah (3 lapis, semuanya diperbaiki):**
1. **Endpoint verifikasi tidak pernah ada.** Game memanggil `http://167.99.67.212:3480/api/verify` — IP node lama yang sudah MATI, dan route `/api/verify` memang tidak pernah diimplementasikan di mana pun (dicek di repo + file server).
2. **Server game + tunnel mati.** `game.gwenna.my.id` balas 530 (tunnel `umi-games-gwenna` status down, 0 koneksi). Server game ada di node `167.99.67.212` yang sudah tidak dipakai.
3. **Halaman `/trading` error 500** — `trading.html` tidak ada di repo.
4. **Bug di `locked`:** di platform ini `locked=true` berarti **akun ROOT OWNER** (`platform.js`: `const locked = user.email === FIXED_OWNER`), bukan akun terkunci. Cek awal saya menolak token owner karena salah tafsir → dibetulkan jadi hanya menolak `banned`.

**Perbaikan:**
- **Website:** endpoint publik `POST /api/platform/verify-token` — validasi `platform_profiles.api_token` di Supabase, balas `{ok,user:{username,roles,owner}}`.
- **game.js:** `VERIFY_URL` bisa diatur (env `UMI_VERIFY_URL`), default ke endpoint platform; username/roles diteruskan ke halaman trading.
- **trading.html (baru):** login token, saldo, pasar bergerak, portofolio, redeem, riwayat.
- **companion.js:** menyalakan game (port 3900) + `cloudflared` tunnel + bot dalam satu container. `CMD_RUN` container = `node scripts/companion.js`.
- **tunnel-games.yml:** `game → 127.0.0.1:3900`, `api`+`umi-api → 127.0.0.1:3366`. Pakai `127.0.0.1`, BUKAN `localhost` (cloudflared resolve IPv6, service listen IPv4 → 502).
- **Config tunnel remote ditulis ulang** via API Cloudflare (`config_src: cloudflare` — cloudflared mengabaikan config lokal!). Isi remote sekarang sama dengan lokal.
- **tools/deploy-game.mjs:** deploy berulang (unggah → pindah ke subfolder → restart).

**Status infrastruktur sekarang:**
| Bagian | Alamat | Status |
|---|---|---|
| Game web | `https://game.gwenna.my.id` | ✅ 200 |
| Halaman trading | `https://game.gwenna.my.id/trading` | ✅ 200 |
| API bot | `http://167.99.193.164:3366` | ✅ 200 |
| API bot via tunnel | `https://api.gwenna.my.id` | ✅ 200 (bonus: sebelumnya mati) |
| Bot WhatsApp | 6 session, 3 online | ✅ |

**Bukti tes:** login token asli → `{"ok":true,"user":{"username":"AlzRiss","owner":true},"balance":110}`; token palsu → 401; redeem `UMI2024` → +50; bikin room UNO → `roomId HjGQa2cNSg`, halaman room 200.

## Redesign UMI TRADE ala platform saham + fix bug beli (17 Okt 2026)

**Masalah yang dilaporkan user:** di halaman trading `$AS`, pembelian hanya bisa amount 10;
input 20 atau 16 gagal walau saldo cukup. UI lama masih berupa "dashboard" biasa, bukan
tampilan pasar saham. Halaman saldo & profil (top up / redeem) belum ada.

**Akar masalah bug beli (diverifikasi):** harga & amount divalidasi di jalur lama
(`POST /api/trading/trade`) dengan harga yang dikirim klien dan hanya satu simbol `$AS`.
Setelah pasar multi-saham dipasang, permintaan amount 20/16 ke saham nyata bernilai lebih
besar dari saldo (`20 × $26,53 = $530` vs saldo `$152`) sehingga wajar ditolak, tetapi
pesan galatnya tidak menjelaskan apa pun. Perbaikan:
- Harga **selalu dihitung server** (`priceAt()`), klien hanya mengirim `symbol/side/amount`.
- `amount` bebas (desimal pun boleh), tanpa daftar tetap; batas hanya saldo/posisi.
- Galat spesifik: `INSUFFICIENT` menyertakan `need`, `balance`, dan `maxAmount` sehingga UI
  bisa langsung menawarkan jumlah maksimal yang bisa dibeli.
- Skala harga dasar diset `$AS 0,40–3,20` agar ekonomi tetap sama (saldo awal 100, bonus 10):
  `UMI 1,24 · JDB 2,05 · WAG 0,86 · PNL 1,62 · GME 0,54 · DAN 3,10 · SRV 0,94 · BOT 1,78 · TRD 0,42 · HBG 1,10`.

**Market engine baru (di `db-mirror/game.js`):**
- 10 saham, harga = derau halus deterministik per tick 3 detik → pasar sama untuk semua klien
  tanpa perlu menyimpan riwayat (`priceAt(sym, tick)`).
- Endpoint: `GET /api/trading/market` (kuotasi + sparkline 2 jam + volume 15 menit),
  `/candles?symbol=&tf=1m|5m|15m|1h`, `/traffic?ticks=` (tekanan beli vs jual per saham),
  `/feed?symbol=` (transaksi terakhir + order book + spread), `/codes`,
  `GET /api/trading/stream` (SSE, push kuotasi + traffic tiap tick), dan
  `POST /api/trading/credit` (internal bot, idempoten per referensi, menerima nilai negatif).

**UI baru (`db-mirror/trading.html`, 60,7 KB):** 5 tab ala aplikasi sekuritas —
**Pasar** (ticker berjalan, kartu ringkasan, filter naik/turun/volume/punyaku, sparkline),
**Trading** (candlestick + volume + crosshair, 4 timeframe, order buy/sell dengan 25/50/75/MAKS,
order book, feed transaksi), **Traffic** (tabel tekanan beli↔jual real-time + aliran transaksi),
**Saldo** (kas, nilai saham, P/L, kepemilikan, riwayat, tombol jual cepat), dan
**Profil** (identitas, saldo Rp, top up Rp→$AS, redeem kode, tautan token akun).
Istilah memakai bahasa pasar: kuotasi, lot, spread, order book, volume, P/L, gainer/loser.

**Top up Rp → $AS (baru, menyambung wallet bot):** `POST /api/platform/game-topup` (website)
→ relay tiket HMAC `owner-panel` → `POST /api/platform/wallet-convert` (bot)
→ `debitWallet` saldo Rp (idempoten, 409 kalau kurang) → kredit `$AS` di game; kalau kredit
game gagal, Rp otomatis dikembalikan (entri `REFUND`). Kurs `Rp1.000 = $AS 10`, min Rp5.000,
maks Rp200.000. Bot memakai `UMI_GAME_TOKEN` + `UMI_GAME_INTERNAL_URL` (dipasang
`scripts/companion.js` dari `game-token.txt`).

**Modul baru:** `bot/lib/wallet-core.js` (inti dompet: `readWalletFile`, `writeWalletFile`,
`walletSnapshot`, `creditWallet`, `debitWallet`) — satu sumber data
`data/panel-autoorder/wallet-ledger.json` yang dipakai `panel-autoorder.js`,
`jadibot-platform-api.js`, dan integrasi game. Tambahan route owner
`POST /api/owner-panel/wallet-adjust` untuk koreksi saldo dengan catatan audit.

**Alat deploy:** `tools/deploy-bot.mjs` (unggah `lib/wallet-core.js`, `lib/panel-autoorder.js`,
`lib/jadibot-platform-api.js`, `scripts/companion.js` + backup otomatis ke `/backup/…`),
`tools/shot-trade.mjs` (uji UI headless). Deploy website: `tools/deploy-website.mjs`.

**Bukti tes live:**
- Beli **20 lot UMI** → `ok`, saldo turun tepat `$AS 25,80`; beli **16 lot JDB** → `ok`; beli **10** dan **7,5** (desimal) → `ok`.
- Saldo kurang → `400 INSUFFICIENT` + `maxAmount` (bukan gagal senyap); jual tanpa posisi → `NO_POSITION`.
- UI (jsdom, tanpa galat JS): login token → pasar 10 saham, 4 statistik, 10 baris traffic,
  order 17 lot dari form berhasil lalu dijual balik; profil memuat 4 kode redeem; nominal Rp25.000 → pratinjau `$AS 250`.
- `POST /api/platform/game-topup` `{action:"status"}` → `{ok:true,walletBalance:0,rate:10,…}`;
  konversi uji Rp10.000 → `$AS 100` (Rp terpotong, `$AS` bertambah) lalu dikembalikan.
- Lobi game punya tombol **📈 $AS TRADE** ke `/trading`.

**Catatan:** selama pengujian, akun `AlzRiss` sempat dipakai untuk uji beli/jual dan konversi;
semua posisi uji sudah ditutup dan sisa Rp hasil uji ditarik kembali (saldo Rp 0), lalu diberi
kompensasi `$AS 100` agar tunai tidak negatif. Riwayat transaksi memuat jejak uji tersebut.

## Task 14 — Aset/logo, integrasi trading ↔ bot, leaderboard, /tradingoffline (2026-10-17 02.00 WITA)

**Aset & identitas visual (asli, dibuat dari repo).** `tools/make-assets.mjs` (ikon/logo SVG+PNG,
manifest PWA, gambar OG 1200×630) dan `tools/make-art.mjs` (5 banner SVG 480×160: kartu UNO,
papan catur, ular tangga, monopoli, werewolf) — semuanya digambar sendiri, tanpa aset pihak ketiga.
Diverifikasi visual dengan `@resvg/resvg-js` (ImageMagick di sandbox salah render gradien/`<defs>`,
jadi tidak dipakai sebagai acuan). Semua dipasang di halaman lewat rute game:
`/assets/<nama>`, `/favicon.ico|svg`, `/apple-touch-icon.png`, `/icon-192|512.png`, `/og.png`,
`/manifest.webmanifest`. `game.html` + `trading.html` kini memakai logo/ikon yang sama
(sebelumnya menunjuk berkas `.png` yang sudah tidak ada di server → logo rusak/404).

**Akun trading dengan identitas WhatsApp.** `wa:<nomor>` vs `web:<hash token>`; username akun =
nomor WhatsApp. Auto-provision: `bot/lib/trading-provision.js` dipanggil dari
`plugins/economy/xp-register.js` (perintah `.daftar`) dan `plugins/_system/@verify.js`, jadi begitu
user terdaftar lewat **bot utama atau jadibot**, akun `$AS`-nya langsung dibuat (saldo awal 100 +
bonus harian 10) dan barisnya ikut muncul di caption pendaftaran. Kalau server game sedang mati,
pendaftaran tetap sukses dan akun dibuat menyusul saat `.trading` dikirim.

**Kendali dari WhatsApp.** Plugin `bot/plugins/game/trading-umi.js`:
`.trading [token|off]` (ringkasan akun; kalau diisi token akun website → tampil status akun itu,
token disimpan per nomor), `.tradingkaya` / `.tradingmiskin` / `.peringkat kaya|miskin`,
`.pasar`, `.belisaham <kode> <lot>`, `.jualsaham`, `.redeem <kode>`,
`.tradinglogin` (kode 6 digit + tautan), `.tradingoffline` (kirim berkas game offline).
Nama perintah diberi akhiran `trading/saham` supaya tidak bentrok dengan plugin lama
(`kaya`, `miskin`, `beli`, `jual`, `market` sudah dipakai plugin lain — handler memilih plugin
pertama yang cocok, jadi bentrok = fitur saling menutup).

**`/tradingoffline`.** `db-mirror/trading-offline.html` = game trading mandiri: 10 saham, tick
3 detik, candlestick canvas, order beli/jual, portofolio, redeem, bonus harian, semua data di
**localStorage** (jalan tanpa internet). `tools/make-offline.mjs` membundelnya jadi satu berkas
(aset jadi data URI) → `assets/trading-offline.bot.html` (35 KB) yang dikirim bot sebagai dokumen
`UMI-TRADE-OFFLINE.html`. Tersedia juga di web: `/trading-offline` (versi biasa) dan
`/trading-offline.bot.html` (versi bundel). Diuji jsdom: beli 5 lot → kas turun, jual balik, redeem
`TRADING` +25, tanpa galat JS.

**Papan peringkat.** `GET /api/trading/leaderboard` → `{total, richest[12], poorest[12]}`
(nilai aset, bukan hanya kas). Tampil di tab **Peringkat** halaman trading, kartu ringkas di lobi
game (`/`), dan lewat perintah bot.

**Setelan bot utama di website.** Tombol **Bot Utama ON/OFF** (sudah ada) + tombol baru
**Auto Read ON/OFF** di halaman Bot Utama: `POST /api/platform/main-console/autoread`
(owner-only, rute Vercel) → relay tiket HMAC → `POST /api/owner-console/autoread` (bot)
→ menulis `global.db.data.settings[<jid sesi>].autoread` + `db.write()`; efeknya langsung
(handler membacanya tiap pesan) tanpa restart. Helper-nya diuji unit (4 skenario lolos).

**Deploy & verifikasi live (2026-10-17 02.10 WITA).**
- `tools/deploy-game.mjs` diperluas: kini ikut mengunggah `trading-offline.html` + seluruh
  `db-mirror/assets/*` → `/game/assets/` (20 berkas).
- Bukti live: `/health` `2.0.0`, `/` 55.434 B (kartu status pasar + papan peringkat di lobi),
  `/trading` 70.191 B, `/trading-offline.html` 29.201 B, `/trading-offline.bot.html` 35.279 B,
  aset `200` (`logo-umi-games.svg`, `kartu-uno.svg`, `papan-catur.svg`, `werewolf.svg`, manifest,
  `og.png`, `favicon.ico`), `/api/trading/session` + `/api/trading/leaderboard` `200`.
- Bot: `/api/health` `200 v1.4.0`, `2044 plugin` termuat tanpa galat; token game di dalam
  container dipasang ulang `scripts/companion.js` dari `game-token.txt` (`[game] token bot siap`).
- Website READY; halaman memuat tombol `toggleAutoread` + `app.js` versi `20261016-autoread1`.
- Uji lokal berulang di :3902 (data produksi disalin): migrasi 2 akun lama, register WA,
  login kode 6 digit, trade, dan papan peringkat.

**Catatan & tindak lanjut.**
- Sesi naik **harian 00.00–02.00 WITA**: naik `+0,20%/menit` sampai batas `+25%` dari harga dasar
  (`PUMP_SESSION_RATE` / `PUMP_SESSION_CAP` di `db-mirror/game.js`), lalu diturunkan perlahan
  selama 6 jam (`PUMP_DECAY_MIN=360`, selesai 06.00) supaya tidak ada jurang harga. Label di
  halaman trading + `/api/trading/session` memakai jam **WITA** dan menyebut sesi berikutnya.
  Karena deploy selesai 02.10 WITA, jendela malam ini baru saja lewat; berikutnya mulai 00.00.
  Sesi tambahan (mis. perpanjang sampai 02.00 besok) bisa disetel lewat
  `POST /api/trading/session/config` `{minutes, rate, cap, note}` atau dibatikan dengan `{off:true}`.
- Verifikasi tombol Auto Read/Bot Utama perlu sesi login Supabase owner (dari sandbox tidak ada),
  jadi bagian HTTP relay-nya diverifikasi struktural + unit test helper; coba klik sekali di
  halaman Bot Utama.
- Berkas uji lokal (`db-mirror/trading-data.json`, `db-mirror/game-token.txt`) sudah masuk
  `.gitignore` dan tidak ikut ke server produksi (data produksi tetap 2 akun asli).

## Task 15 — "akun owner tidak sah" saat ACC Top Up (2026-10-17 04.40 WITA)

**Gejala.** Klik **ACC Top Up** di website jadibot ditolak bot dengan *"Akses owner tidak sah."*
(HTTP 401). Aksi owner lain di website ikut kena: kontrol bot utama, panel auto-order, AI agent.

**Akar masalah.** Berkas `.owner-console-relay.env` di root server bot berisi **amplop terenkripsi
Vercel** (1.168 karakter, awalan `eyJ2` → `{"v":"v2",…}`), bukan rahasia aslinya. Tiket HMAC yang
ditandatangani website (`process.env.UMI_CONSOLE_RELAY_SECRET`) karena itu tidak pernah cocok di
`bot/lib/jadibot-platform-api.js` (`verifyOwnerRelayTicket` baris 96–125) → semua rute
`/api/owner-*` balas 401. Amplop itu bisa masuk karena
`GET /v9/projects/<proj>/env?decrypt=true` mengembalikan amplop untuk **semua** kunci, bukan plaintext.

**Perbaikan (relay).**
- Nilai plaintext diambil lewat `npx vercel env pull` (butuh `.vercel/project.json`: project
  `prj_UPjBvflOYP8ureG3cCxHHQKxOb0s`, team `team_TwCNMEAL8AoOA0whO30gFU4S`) → disimpan di
  `/home/user/.secrets/shared-secrets.env` (chmod 600, 4 kunci 64-hex). Nilai sah:
  awalan `8f388b64`, sha256-12 `833a71c385e5`.
- `tools/make-deploy-env.mjs` diberi komentar anti-amplop; `config.js` & `.tunnel.env` dibuat
  opsional → menghasilkan 4 berkas `.secrets/upload/*.env`.
- Diunggah ke server `b3f9c8df` (fingerprint sha256-12 identik) lalu `ptero.mjs power restart` (204).
- Verifikasi dari sandbox dengan tiket HMAC bentuk asli: `owner-console/status` **200**,
  `owner-panel/status` **200**, `owner-panel/manual-topups` **200** (menampilkan top up asli
  `tu_mvb595vb_2c6f25c7297f5111` Rp1.000.000), `owner-agent/status` **200**; tiket kedaluwarsa
  dan tanda tangan palsu tetap **401**.
- Profil owner dicek: `AlzRiss` (`akunindo2011264@gmail.com`) `roles=['owner','developer']`,
  `locked=true` — jadi bukan soal role.

**Bonus yang ikut dibetulkan: ekspor backup bot 503 & `/api/cron/backup` 502.**
`CMD_RUN=node scripts/companion.js` ternyata tidak memuat `.backup-export.env` / `.error-report.env`
(hanya `npm run tunnel-start` yang memuat), jadi bot balas 503 "Layanan ekspor backup belum
dikonfigurasi." `db-mirror/companion.js` ditambah `ENV_FILES` + `loadDotEnv()` (chmod 600, tidak
menimpa env asli, disebar ke proses anak bot & game). Setelah restart:
- `POST https://api.gwenna.my.id/api/internal/backup/export` **200** — bot 13.102.212 B / 3.543 berkas,
  jadibot 1.761 B (uji, langsung dibersihkan).
- `POST /api/cron/backup` **200** — generasi `hourly_20261016202653276_6cf41ad0bacde514`:
  website 1.401.065 B, bot 13.102.205 B, jadibot 1.765 B.
- Log bot: `[VERCEL-BACKUP-SCHEDULER] Backup berikutnya dijadwalkan …` (bukan "Tidak aktif"),
  `⚙️ Bot utama: NONAKTIF` dari website, 0 jejak pairing (perintah "pairing off" dipatuhi).
- Jalur laporan error diuji: `POST /api/platform/feedback/bot` **201** (`deliveredTo: 1`) memakai
  rahasia dari `.error-report.env`; baris uji di `platform_audit_logs` (id 165) langsung dihapus.
- `UMI_MIRROR_URL` dihapus dari env Vercel (host mirror `159.223.57.221:2844` sudah mati / HTTP 000)
  supaya backup tidak menggantung menunggu mirror.

**Bukti akhir (klik nyata dari akun owner).** Dua permintaan top up yang tertunda diproses pemilik
lewat website dan **berhasil** — tidak ada lagi pesan "akun owner tidak sah":
- `tu_mvb595vb_2c6f25c7297f5111` Rp1.000.000 → `PAID` 2026-10-16T20:29:05Z
- `tu_mvba676h_67f3718cf797c3df` Rp1.000.000 → `PAID` 2026-10-16T20:29:08Z
- keduanya dicatat `approvedBy: owner:3b193ec9-6eab-4b59-bbeb-b6f4f0b0fa6d` (auth_id owner)
  dan masuk ledger `TOPUP_MANUAL` "Top up DANA manual disetujui owner"; saldo akun jadi Rp1.990.000.
- Rantai tiket: browser owner → `website/api/platform.js` (HMAC `UMI_CONSOLE_RELAY_SECRET`) → bot
  → `.owner-console-relay.env` yang sudah berisi rahasia asli → **diterima**. Selesai.

**Catatan.** Verifikasi tombol Auto Read & Bot Utama masih perlu sekali klik nyata (sandbox tidak
punya sesi Supabase) — namun tiket yang dikirim website bentuknya identik dengan tiket uji yang
sudah lolos 200. Metadata git lokal juga diperbaiki: `.git/config` hilang karena pemulihan snapshot,
remote `origin` dipasang ulang, HEAD diselaraskan ke `3fe84f2` (berkas kerja tidak diubah).

## Task 16 — Halaman Bot Utama error & pairing jadibot "ENOSPC" (2026-10-17 11.30 WITA)

**Gejala.** (1) Buka halaman Bot Utama di website → "Layanan platform sedang bermasalah."
(2) Mau pairing jadibot → "Pairing gagal: ENOSPC: no space left on device, write."

**Satu akar: disk container 100% penuh.** `df -h` di server `b3f9c8df`:
`/dev/vda1 49G 49G 0 100% /home/container`. Karena itu semua tulis gagal:
`.main-bot.env` terpotong jadi **0 byte** (03:09) dan `.database.json.tmp` **0 byte** (03:11) —
database gagal disimpan → bot balas 500 → `website/api/platform.js:1019` menerjemahkan 5xx jadi
"Layanan platform sedang bermasalah." Sesi WhatsApp juga tak bisa menulis creds → ENOSPC saat pairing.

**Penyebab disk habis.** `bot/lib/auto-backup.js` (backup harian ke WhatsApp owner) punya dua bug:
1. **Folder `data/auto-backups` ikut dibackup ke dalam backup itu sendiri** (tidak ada daftar
   exclude default) → ukuran berlipat tiap percobaan: 29 → 48 → 87 → 162 → 311 → 610 bagian.
2. Saat pengiriman WA gagal (`Connection Closed` — jadibot yang dipakai sebagai conn sedang mati),
   pecahan ZIP **tidak dihapus** dan dicoba ulang tiap **15 menit** → 1.474 berkas / **31 GB**
   menumpuk (23 generasi; 16 di antaranya 0 byte).

**Tindakan.**
- Hapus semua generasi auto-backup kecuali satu set utuh terbaru yang belum memuat dirinya sendiri
  (`usanagi-full-backup-20261017-0434`, 29 bagian, 430 MB, 0 berkas rusak) → **disk bebas 31 GB**
  (18G terpakai / 49G). Panel API yang tadinya balas 500 langsung normal kembali.
- Pulihkan `.main-bot.env` = `MAIN_BOT_ENABLED=false` (23 byte, 600) lewat `tools/ptero.mjs upload`.
- Patch `bot/lib/auto-backup.js`:
  * `DEFAULT_EXCLUDES` = `data/auto-backups`, `data/vercel-backup-exports`, `node_modules`, `.npm`,
    `.git`, `tmp`, `bot-deploy.tar.gz`, `cloudflared`; plus penjagaan langsung di `collectFiles()`
    agar folder output tidak pernah masuk.
  * `pruneBackups()` kini per **generasi**: hapus generasi kedaluwarsa, generasi berisi bagian
    0 byte (percobaan gagal), berkas bernama aneh, dan kelebihan `keepGenerations` (default 2).
  * `maxParts` (default 60) — batal dengan pesan jelas kalau backup butuh lebih banyak bagian.
  * `minFreeBytes` (default 3 GB) — tidak mulai backup kalau ruang disk tipis.
  * Saat gagal, semua pecahan yang sudah dibuat **dihapus**; jeda percobaan ulang 15 menit → **6 jam**.
- `tools/deploy-bot.mjs`: tambah `bot/lib/auto-backup.js` → `/lib/auto-backup.js` ke daftar deploy.
- Uji lokal (`/tmp/ab-test`): hanya berkas sumber yang masuk ZIP (node_modules/tmp/folder backup
  dikecualikan), generasi lama & 0-byte terhapus, pengaman disk bekerja (menolak saat sisa < batas).
- Deploy: backup lama `auto-backup.js.2026-10-17T03-15-09-885Z.bak`, unggah 15.119 B, restart 204.
  Setelah restart: `/api/health` 200 (v1.4.0), game `/health` 200, log
  `[AUTO-BACKUP] Aktif setiap hari pukul 00:00 Asia/Makassar`, 2.044 plugin termuat,
  `owner-console/status` 200 (`pairing_unavailable:false`, nomor pairing terbaca, autoread:true).

**Sisa catatan.**
- Pengiriman backup ke WhatsApp masih gagal karena `conn` yang dipakai (jadibot `6282343823200`)
  selalu `disconnected`. Bug lama menjadikannya bencana disk; sekarang percobaan gagal dibersihkan
  dan dijeda 6 jam. Backup yang benar-benar jalan tetap lewat `/api/cron/backup` (Vercel, per jam,
  200 OK: website + bot 13,1 MB + jadibot).
- Jadibot `6282343823200` masih reconnect loop → perlu pairing ulang dari perangkat (sesi lama
  rusak/ter-logout). Setelah disk lega, pairing ulang seharusnya tidak lagi ENOSPC.

## Pending

- Feedback auto-report sudah jalan (jalur bot→website diuji 201), brat.js sudah di-fix
- Payment gateway (TriPay) belum dikonfigurasi (saat ini manual DANA)
- ACC Top Up **sudah terbukti jalan** dari akun owner (2 permintaan Rp1.000.000 di-approve 20:29Z)
- **Perlu 1x klik nyata dari akun owner**: tombol Auto Read & Bot Utama di halaman Bot Utama
- Uji end-to-end WhatsApp: kirim `.daftar` dan `@verify` → akun trading otomatis muncul di
  papan peringkat (harness lokal sudah lolos, belum dari WA asli)
- Harness plugin `bot/plugins/game/trading-umi.js` (unit/integration test) belum ditulis
- Plugin lama `bot/plugins/game/trading1.js` (37.464 B) masih menunggu keputusan: hapus atau
  pindahkan ke arsip supaya tidak dobel dengan `trading-umi.js`
- Jadibot `6282343823200` masih reconnect loop → pairing ulang dari perangkat (sesi lama rusak)
- Auto-backup WA masih gagal kirim (`Connection Closed`) → putuskan: matikan fitur ini (backup
  sudah rutin lewat Vercel) atau batasi hanya kalau ada koneksi WhatsApp yang sehat