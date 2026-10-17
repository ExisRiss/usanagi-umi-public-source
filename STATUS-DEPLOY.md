# STATUS DEPLOY

**Log lengkap:** [repo `STATUS-DEPLOY.md`](./usanagi-umi-public-source/STATUS-DEPLOY.md)

Terakhir diperbarui: **2026-10-17 17.10 WITA**

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

## Task 17 — Sesi jadibot mati >15 menit dihapus otomatis + backup-nya (2026-10-17 12.45 WITA)

**Permintaan.** "Kalo Sessions udah disconnect selama 15 menit hapus aja Sessions nya sama hapus juga backup nya."

**Modul baru `bot/lib/jadibot-session-cleaner.js`.**
- Memeriksa `sessions/jadibot/<nomor>` tiap **60 detik**. Sesi yang tidak tersambung
  **15 menit** berturut-turut dihapus, berikut `sessions-backup/<nomor>`, lalu
  `sessions-backup.tar.gz` dibangun ulang (hanya kalau ada yang dihapus).
- Hitungan **disimpan di `data/jadibot-session-cleaner.json`** supaya restart container tidak
  mengulang dari nol.
- Reconnect otomatis **tidak** mereset hitungan (kalau direset, sesi reconnect-loop tidak akan
  pernah dibersihkan). Hitungan hanya direset saat pengguna benar-benar meminta
  (`.jadibot`/pairing/restart) atau saat sesi berhasil tersambung.
- Sebelum folder dihapus, hook di `jadibot.js` mematikan timer reconnect + watchdog dan menutup
  socket supaya tidak ada percobaan menyambung ke sesi yang sudah dibuang.
- Sesi bot utama (`sessions/creds.json`) tidak pernah disentuh — pembersih hanya melihat
  `sessions/jadibot`.
- Jeda bisa diatur lewat env `JADIBOT_SESSION_TTL_MS` (default 15 menit).

**Hook di `bot/lib/jadibot.js`.** `noteSessionOnline` saat `connection === 'open'`;
`noteSessionOffline` saat `close` dan saat watchdog melepas socket; `noteSessionActivity` di
`startSubBot`/`startSubBotForApi`/`restartSubBot`; `forgetSession` saat logout/stop (sekaligus
hapus folder backup). `bot/main.js` memanggil `startJadibotSessionCleaner()` setelah
`installAutoBackup()`.

**Uji lokal (`/tmp/cleaner-test`), 8/8 lolos:** sesi tersambung tetap ada; putus 20 menit dihapus
+ backup-nya; putus 5 menit dibiarkan; sesi reconnect-loop 30 menit tetap dihapus; sesi bot utama
utuh; hook pelepasan socket terpanggil. Uji juga menangkap bug: sapuan yang jalan sebelum
`startJadibotSessionCleaner()` tidak memuat state dari disk → diperbaiki (`state.loaded`).

**Bukti di produksi.**
- `[JADIBOT-CLEANER] Aktif — sesi yang putus 15 menit dihapus beserta backup-nya.`
- Sesi zombie `6282343823200` (reconnect-loop sejak sehari sebelumnya) dihapus:
  `[JADIBOT-CLEANER] 6282343823200 putus 20 menit — session dihapus + backup dihapus`.
  Folder sesi jadibot **6 → 5**, folder `sessions-backup` **3 → 2**, arsip tar dibangun ulang
  (04:29), entri state ikut terbuang.
- Deploy: `jadibot.js` (30.736 B), `jadibot-session-cleaner.js` (baru), `main.js` (43.489 B),
  semuanya dengan backup `.bak` di `/backup/`; restart 204; `/api/health` 200, 2.044 plugin termuat.

**Tambahan pada auto-backup.** `runFullBackup()` sekarang melewati percobaan saat socket WhatsApp
belum terbuka (`global.stopped !== 'open'` dan `ws.readyState !== 1`) → alasan `connection-not-open`.
Sebelumnya setiap percobaan menulis ratusan MB lalu gagal "Connection Closed". Diuji lokal:
koneksi tertutup → dilewati, koneksi terbuka → jalan (1 bagian). Setelah deploy tidak ada lagi
`[AUTO-BACKUP] Error: Connection Closed`.

**Bukti sapuan otomatis (tanpa intervensi) pada 04:43 UTC.** Tiga sesi yang tetap tidak tersambung
sejak 04:28 dihapus sendiri setelah 16 menit:
`6281774172084` (session), `6281935568221` (session + backup), `6283878775317` (session + backup).
Hasil akhir: **2 sesi jadibot tersisa** (keduanya online), **0 folder backup**, disk tetap 31 GB lega,
state hanya berisi 2 sesi online. Nomor-nomor itu perlu pairing ulang kalau masih dipakai.

**Catatan.** Saat pemeriksaan, `.main-bot.env` berisi `MAIN_BOT_ENABLED=true` +
`MAIN_BOT_PAIRING_NUMBER=<nomor>` — diisi lewat halaman Bot Utama (bukan dari sisi kami), jadi
dibiarkan apa adanya. Tiga sesi lain (`…2084`, `…8221`, `…5317`) masih offline dan akan ikut
dibersihkan pada sapuan 15 menit berikutnya kalau tidak kunjung tersambung.

## Task 18 — Hapus nama "rimuru" & prefix mengikuti setelan owner/user (2026-10-17 13.35 WITA)

**Permintaan.** (1) "Kenapa masih ada fitur awalan rimuru? Ganti jadi umi. Aku mau semua fitur di
apply." (2) "Bot ketika nampilin menu atau ada pesan command ganti dengan {prefix} jangan pakai
default `.' aku mau kau ganti jadi settingan owner atau user. Di bot jadibot juga apply."

### A. Rename rimuru → umi
- `bot/plugins/pelengkap/rimuru/` → **`bot/plugins/pelengkap/umi/`** (1.088 berkas wrapper,
  `rimuru-*.js` → `umi-*.js`).
- `bot/integrations/rimuru/` → **`bot/integrations/umi/`** (1.188 berkas sumber).
- Semua alias/`help`/`importSource`/`importAliasMap` di wrapper: `rimuru-xyz` → `umi-xyz`,
  `importSource: "umi"`, `runImportedFeature("umi", …)`. Nama khusus ikut dirapikan:
  `rimuru-ai` → `umi-ai`, `rimurubanana(2)` → `banana(2)`, `rimuru-large` → `umi-large`.
- `bot/integrations/umi/config.js`: `createVendorConfig('umi')`.
- `bot/handler.js`: prefiks namespace untuk AI-plan `(?:umi|ourin|usanagi)-`.
- `bot/lib/vercel-backup-export.js`: regex ikut `integrations/(?:umi|ourin)/config.js`.
- **Bukti:** 1.088/1.088 wrapper berhasil di-resolve ke berkas integrasi yang ada (0 path hilang),
  `node --check` semua valid, dan bot memuat **2.044 plugin** (sama seperti sebelumnya).
  Contoh hasil: `handler.help = ["umi-religi-zikir <pagi/petang/sholat>"]`, komando
  `umi-zikir`, `umi-ai`, `banana2`, dst.
- Kredit penulis asli tetap dihormati: tautan/atribusi di `CREDITS.md` dan teks sumber integrasi
  tidak diubah — hanya nama fitur/alias yang diganti.

### B. Prefix {prefix} mengikuti setelan
- Modul baru **`bot/core/awang-prefix-text.js`**: `normalizeCommandText()` mengubah contoh
  `.zikir pagi` → `{prefix}zikir pagi`, `renderCommandText()` mengganti `{prefix}` dengan prefix
  aktif, plus `storedDefaultPrefix()`/`saveDefaultPrefix()` untuk setelan owner
  (`data/prefix-settings.json`, mode 600).
- **`bot/lib/prefix-rewrite.js`** (baru) menambal pesan keluar di lapisan pengiriman:
  setiap teks/keterangan yang keluar dicek dan **hanya token yang benar-benar nama perintah
  terdaftar** yang diganti prefix-nya. Angka desimal (`0.5`), domain (`example.com`), dan versi
  (`v1.4.0`) tidak ikut berubah (ada unit test).
- `bot/lib/simple.js`: `sendMessage` memanggil `rewriteOutgoingContent()` dengan prefix aktif chat
  → berlaku untuk **bot utama dan semua jadibot** (jadibot punya namespace `jadibot:<nomor>:`).
- `bot/main.js`: prefix default tersimpan diterapkan sebelum koneksi dibuat, dan semua plugin
  dinormalkan (`normalizePluginText`) saat dimuat.
- `bot/core/awang-status.js` + `bot/plugins/info/main-menu.js`: menu membuang placeholder lalu
  menempel prefix aktif → tidak pernah muncul `{prefix}menu` atau `..menu`.
- `bot/plugins/owner/usanagi-setprefix.js` ditulis ulang:
  * `setprefix` → lihat prefix aktif
  * `setprefix <p>` → prefix chat ini (owner / admin grup / chat pribadi)
  * `setprefix default` → kembali ke default
  * `setprefix global <p>` → **[owner]** default semua chat (bot utama: `data/prefix-settings.json`;
    jadibot: config sesi jadibot itu sendiri) + `syncMainPrefix` ke SQLite + reset cache.
- Default bot utama sebelumnya masih `/` dari `config.js` padahal semua contoh memakai `.` →
  sekarang default tersimpan **`.`** (`data/prefix-settings.json`), dan owner bisa menggantinya
  kapan saja lewat `setprefix global <p>` tanpa edit file/restart.

**Deploy.** Paket `task18.tar.gz` (3,3 MB, 2.377 entri) diunggah + diekstrak lewat panel, folder
lama `plugins/pelengkap/rimuru` & `integrations/rimuru` dihapus, restart 204. Backup berkas inti
sebelum deploy: `./backup/pre-task18.tar.gz` (497 KB). Log: `Successfully Loaded 2044 Plugins`,
`⚙️ Bot utama: AKTIF`, `/api/health` 200 v1.4.0.

**Cara pakai untuk owner.** `.setprefix global !` → semua chat memakai `!menu`; `.setprefix global .`
untuk kembali. Pengguna bisa mengganti prefix chatnya sendiri (chat pribadi) atau admin grup.

## Task 19 — Fix bratvid2, hapus boost trading 02.00, trading main di WhatsApp (2026-10-17 13.55 WITA)

**1. `bratvid2` — akar masalah ketemu: domain API di server masih versi lama.**
`/bratvid2` ditangani `bot/plugins/maker/brat2.js` (regex `^(bratvid2|brat2)$`). Berkas di server
memakai `https://apiii-xrina.vercel.app` yang sudah **mati** (404 `DEPLOYMENT_NOT_FOUND`), sedangkan
repo memakai `https://apiii-xrina.my.id`. Itu sebab pesan `❌ Gagal membuat bratvid2. [object Object]`
(pesan galatnya sendiri tidak informatif karena error non-`Error` di-string mentah).

- `bot/plugins/maker/brat2.js`:
  * `describeError()` baru — tidak pernah lagi menghasilkan `[object Object]` (tangani string,
    `Error`, objek JSON, circular).
  * `apiError()` + `pickMessage()` — ambil pesan dari bentuk JSON apa pun (string/objek/array).
  * `fetchBinary` ke provider utama **dicoba 2x** (jeda 1,5 s) karena API kadang sibuk.
  * Pesan gagal sekarang menyebut alasan + saran `${prefix}bratvid`.
  * `BASE` = `https://apiii-xrina.my.id`, `PRIMARY_PATH` = `/maker/bratvid2`.
- `bot/integrations/umi/plugins/sticker/bratvid2.js` (wrapper `bratv2`/`umi-bratvid2`) dipindah dari
  `api-faa.my.id/faa/bratvid` ke `apiii-xrina.my.id/maker/bratvid2`, unduh via axios → buffer
  (bukan URL) supaya `sendVideoAsSticker` tidak timeout.
- Uji di server: `brat2` → `{"success":true}`, video **98.295 byte `video/mp4`**; integrasi umi →
  stiker **113.547 byte**.

**2. Trading offline: boost/sesi 02.00 dihapus.**
- `db-mirror/trading-offline.html` & `db-mirror/assets/trading-offline.bot.html`: fungsi `pump()`
  dihapus, harga murni `base * (1 + trend + swing + micro)`, `session()` selalu
  `{active:false, boostPct:0, label:'Pasar normal'}`, kartu "SESI" → "PASAR · NORMAL 24 JAM",
  banner & komentar dibersihkan.
- Mesin pasar online `db-mirror/game.js`: `PUMP_ENABLED = false` → `pumpFactor()` selalu 1 dan
  `sessionInfo()` selalu "Pasar normal 24 jam" (kode lama disimpan, mudah dinyalakan lagi).
  `db-mirror/trading.html`: banner sesi diganti "Pasar normal 24 jam — tanpa sesi boost 02.00".
  `/health` game kini `"session":"Pasar normal 24 jam"`.

**3. Trading bisa dimainkan langsung di WhatsApp (rich HTML).**
- `bot/plugins/game/trading-wa-html.js` — game HTML **mandiri** (tanpa aset/internet, 10 emiten,
  tick 3 detik, beli/jual, portofolio, avg & P/L, reset, localStorage `umi-wa-trade-v1`).
  `confirm()` tidak dipakai (tidak selalu ada di penampil rich) → reset pakai ketuk dua kali.
- `bot/lib/awang-rich-forward.js` — `kirimForwardSigned()` dipisah dari `game-sonic.js` supaya bisa
  dipakai bersama (payload `GenAIUnifiedResponse` + `richResponseMessage` + SIG/CERT1/CERT2).
- `bot/plugins/game/trading-wa.js` — perintah `tradingwa`, `tradewa`, `mainas`, `sahamwa`.
- `bot/plugins/game/trading-umi.js`:
  * `.tradingoffline` **sekarang membuka game di chat** (rich HTML, jalur sama dengan `game-sonic`).
  * `.tradingoffline file` tetap mengirim berkas `UMI-TRADE-OFFLINE.html`.
  * Kartu akun & daftar pasar tidak lagi menampilkan "boost sesi", teks caption bebas boost.
- Teks bantuan di kartu akun/pasar memakai prefix aktif (`accountCard(..., prefix)`).
- Uji di server: `.tradingoffline` → `relayMessage` payload 19.296 char; `.tradingoffline file` →
  dokumen 34.857 byte. Uji DOM (jsdom): beli 3 lot → kas 995,95 & aset tetap 1.000,00; jual balik →
  kas 1.000,00; reset dua ketuk berfungsi; **0 galat JS**.

**3b. Tambahan (revisi owner): grafik naik-turun + info saham.**
- `bot/plugins/game/trading-wa-html.js` (WA, 22.720 char):
  * **strip TRAFFIC** di atas: berapa emiten naik vs turun (bar hijau/merah) + total volume 5 menit.
  * **grafik candlestick** 20 menit (1 batang = 1 menit) + **bar volume** di bawahnya, warna
    hijau/merah sesuai arah, plus label harga tertinggi/terendah 20 menit.
  * **panel INFO SAHAM** 10 baris: harga, perubahan 24j, tertinggi 24j, terendah 24j,
    volume 24j, volume 5 menit, kapitalisasi, PER estimasi, sektor, sentimen
    (NAIK KUAT/NAIK/SIDEWAYS/TURUN/TURUN KUAT).
  * data emiten ditambah: `sektor`, `shares` (miliar lot), `vol` (lot/hari), `per`.
  * `dayStats()` (288 sampel / 24 jam), `vol5min()`, `candles()`.
  * uji jsdom: 20 candle + 20 bar volume, 10 baris info terisi, ganti emiten, beli/jual → 0 galat.
- Versi berkas offline (`db-mirror/trading-offline.html` & `assets/trading-offline.bot.html`):
  kartu **Info saham** (harga, perubahan 24j, H/L 24j asli via `dayRange()`, volume 24j, volume
  per menit, volume 5 mnt, kapitalisasi, PER, sektor, sentimen) + volume menit/5 menit di kartu
  trading. Keduanya diunggah ke `/game/…` dan situs sudah menyajikan versi baru
  (`Info saham` terbaca dari `game.gwenna.my.id`).
- Relay rich WA sekarang 31.896 char base64 (`.tradingoffline`).

**4. Lain-lain**
- `bot/lib/prefix-rewrite.js`: `rewriteOutgoingContent()` hanya menyentuh plain object —
  Buffer/stream dilewatkan apa adanya (pengaman saat `sendMessage(jid, buffer)`).
- Backup berkas server sebelum ditimpa: `/backup/task19-*.js`, `/backup/task19-*.html`.
- Skrip uji sementara (`test-task19.mjs`, `test-toff.mjs`, `test-umi-brat.mjs`, `/probe-brat.mjs`)
  dihapus dari root server.
- Log pasca-deploy: `Successfully Loaded 2046 Plugins`, `⚙️ Bot utama: AKTIF`,
  `Bot siap digunakan!`, jadibot 4 sesi `berhasil terhubung`, `/api/health` 200, game `/health` 200.

## Task 20 — Boost satu emiten (TRD) naik terus 5 menit di website trading (2026-10-17 14.40 WITA)

**Permintaan owner:** "boost saham TRD di website game trading, naik terus 5 menit aja".

**Mesin pasar `db-mirror/game.js`:**
- `boostFactor(sym, ms)` + `boostWindow()` — jendela boost **per emiten**, disimpan di
  `tradingDB.market.boost = {symbol, start, end, rate, cap, decayMin, note, by}`.
  Selama jendela: harga naik terus `rate` per menit (default **+2%/menit**, batas +30–40%),
  sesudah jendela **mendarat perlahan** (`decayMin`, default 15 menit) supaya tidak ada jurang harga.
- `pumpFactor(tick, sym)` sekarang menerima simbol → pump harian tetap mati (`PUMP_ENABLED=false`),
  boost emiten tetap jalan.
- `priceAt()` meneruskan `sym`; `quoteOf()` menambah field `boostPct` per emiten.
- `sessionInfo()` melaporkan boost: `{active, boostPct, until, symbol, label:'BOOST TRD · naik terus'}`
  dan `'BOOST TRD · mendarat'` saat fase decay. `/health` ikut menampilkan label itu.
- Endpoint `POST /api/trading/session/config` (header `X-UMI-Game-Token`):
  * `{symbol:'TRD', minutes:5, rate:0.02, decayMin:15}` → boost satu emiten
  * `{minutes, rate, cap}` → pump semua emiten (lama)
  * `{off:true}` → matikan pump **dan** boost
  * `GET` → lihat pump/boost/session yang sedang jalan.

**Website `db-mirror/trading.html`:**
- Banner hijau saat boost: `🔥 BOOST TRD — harga naik terus sampai HH.MM WITA (saat ini +x%)`;
  fase mendarat pakai banner kuning.
- Daftar saham menampilkan badge `🔥 BOOST +x%` di sebelah nama emiten yang di-boost.

**Bot — plugin baru `bot/plugins/owner/usanagi-boost.js`** (owner only):
- `.boost TRD 5` · `.boost TRD 5 4` (rate 4%/menit) · `.boosttrd 5` (singkat)
- `.boostinfo` — status boost + sisa waktu
- `.booststop` — matikan pump & boost
- Token dibaca dari `lib/webgame.json` → env → `game-token.txt`; host dicoba
  `127.0.0.1:3900` dulu lalu `game.gwenna.my.id`.

**Deploy & bukti**
- `game.js`, `trading.html`, `usanagi-boost.js` diunggah; restart; `Successfully Loaded 2047 Plugins`.
- Uji langsung di server: `POST .../session/config {symbol:'TRD',minutes:5}` → HTTP 200,
  lalu market: `TRD 0.41 / boostPct 0.79%` → `0.42 / 2.29%` → `0.43 / 3.79%` (naik terus ±2%/menit),
  `session: "BOOST TRD · naik terus"`, `/health` ikut berubah.
- Uji plugin bot (tanpa WhatsApp): `.boosttrd 5` → aktif (rate +2%/menit, selesai 14.42 WITA),
  `.boostinfo` jalan, simbol salah ditolak.
- Backup berkas lama: `/backup/task20-game.js`, `/backup/task20-trading.html`.
- Skrip uji sementara (`test-boost.mjs`, `boost-trigger.mjs`) dihapus dari root server.

## Task 21 — Atur saldo $AS akun trading dari bot (2026-10-17 13.50 WITA)

**Permintaan owner:** naikkan saldo akun **AlzRiss** sampai **$AS 11.000**.

**Mesin game `db-mirror/game.js`:**
- `findTradingAccount(query)` — cari akun dari **id**, **nomor WA**, atau **username**
  (tidak peka huruf besar-kecil, boleh potongan nama ≥3 huruf).
- `GET /api/trading/admin/accounts` (header `X-UMI-Game-Token`) — daftar semua akun:
  username, nomor, saldo, equity, total aset, jumlah emiten.
- `POST /api/trading/admin/balance` — `{account, amount, mode:'set'|'add', note}`.
  Saldo diubah, entri `adjust` ditambahkan ke riwayat akun, lalu `saveTradingDB()`.
  Menolak saldo negatif dan jumlah tidak valid.

**Bot — plugin `bot/plugins/owner/usanagi-saldoas.js`** (owner only) — ⚠️ **sudah DIHAPUS di Task 22**,
sekarang saldo diatur dari halaman owner di website:
- `.setas AlzRiss 11000` / `.setas AlzRiss 11.000` → saldo jadi $AS 11.000
- `.addas AlzRiss 500` → tambah $AS 500
- `.listas` → daftar semua akun trading + saldo
- Parser angka menerima `11000`, `11.000`, dan `11,000` (semua = 11000), serta `1,5` = 1,5.

**Hasil:**
- Saldo akun **AlzRiss** (`web:4b269d68f83c98a6`): **$AS 4.840,62 → $AS 11.000,00**
  (total aset juga $AS 11.000,00 karena belum ada posisi saham).
- Tersimpan di `game/trading-data.json`; riwayat akun mencatat `adjust +6.159,38`
  ("permintaan owner: saldo jadi $AS 11.000").
- Papan peringkat: **rank 1 AlzRiss $AS 11.000**, disusul clara & 6287813709432 ($AS 110).
- Uji plugin di server: `.listas` (5 akun) dan `.setas AlzRiss 11.000` berjalan.
- Deploy: restart → `Successfully Loaded 2048 Plugins`, hash server ↔ repo SAMA.
  Backup game.js sebelumnya: `/backup/task21-game.js`.

## Task 22 — Halaman owner saldo $AS di website, perintah bot dihapus (2026-10-17 15.40 WITA)

**Permintaan owner:** "Hapus aja ganti tambahin endpoint owner di website game."

**Yang dihapus:**
- Plugin `bot/plugins/owner/usanagi-saldoas.js` (`.setas`, `.addas`, `.listas`) — dibuang dari repo
  **dan** dari server. Folder `bot/plugins/owner/` sekarang hanya berisi plugin lain
  (`usanagi-boost.js`, `usanagi-setprefix.js`, dll.).
- Endpoint lama `/api/trading/admin/*` di `db-mirror/game.js` (hanya menerima token bot
  `X-UMI-Game-Token`) — dihapus total. Kalau masih dipanggil, balasannya `404 Endpoint tidak ditemukan`.

**Endpoint baru (dipakai halaman website, bukan bot):**
- `GET /api/trading/owner/accounts?token=…` (atau header `X-UMI-Owner-Token`)
  → `{ok, total, accounts:[{id, username, number, source, balance, equity, netWorth, positions}]}`
  diurutkan dari total aset terbesar.
- `POST /api/trading/owner/balance`
  body `{token, account, amount, mode:'set'|'add', note}`
  → `{ok, mode, before, balance, equity, netWorth, account}`.
  `mode:'set'` = jadikan saldo segini, `mode:'add'` = tambah. Riwayat akun tetap dicatat
  sebagai entri `adjust`. Menolak jumlah negatif / tidak valid (400).
- `verifyOwnerToken()` — token dicek ke `VERIFY_URL` (verify-token platform), hasil di-cache
  60 detik per token, dan **wajib** `user.owner === true` atau role `owner`.
  Tanpa token → `401 Token diperlukan`; token salah → `401 Token tidak valid`;
  token user biasa → `403 Halaman ini khusus owner`.
- `findTradingAccount()` — cari akun dari id persis, nomor WA (≥8 digit), username persis,
  lalu potongan username ≥3 huruf.

**Halaman `db-mirror/trading.html` (`/trading`):**
- Tab baru **Owner** (`#navOwner`) di tabbar — hanya muncul kalau sesi login `user.owner`.
- Section `#page-owner`: input akun + jumlah, tombol **SET SALDO** / **TAMBAH**, tombol
  **Muat ulang**, chip akun cepat, dan tabel semua akun (username, nomor, saldo, total aset).
  Klik baris akun → langsung mengisi kolom akun.
- Logout / sesi user biasa → tab Owner disembunyikan.

**Hasil uji:**
- `GET /api/trading/owner/accounts` tanpa token → **401**, token ngawur → **401**,
  token user non-owner → **403** (harness `fetch` tiruan ke verify-token),
  token owner → **200** `{ok:true,total:0,accounts:[]}` (DB lokal kosong; server punya 5 akun).
- `POST /api/trading/owner/balance` tanpa token → **401**.
- `GET /api/trading/admin/accounts` (endpoint bot lama) → **404**.
- Halaman publik `https://game.gwenna.my.id/trading` → **200, 75.518 B**, memuat
  `#page-owner`, `#navOwner`, `ownerAdjust` (9 kemunculan penanda owner).
- Saldo AlzRiss **tetap $AS 11.000** — tidak ada operasi saldo di Task 22 selain uji baca.
- Deploy: backup `/backup/task22-game.js` & `/backup/task22-trading.html` → upload →
  restart → `Successfully Loaded 2047 Plugins`, `Bot utama: AKTIF`, `Bot siap digunakan!`.
- sha256 server ↔ repo **SAMA** setelah verifikasi ulang: `game.js 4fe54429df78…`,
  `trading.html 05973706b51f…` (versi halaman owner).

## Task 23 — Ganti semua aset game jadi foto realistis (2026-10-17 16.35 WITA)

**Permintaan owner:** "Buat lagi assets game di website ganti semua assets foto logo dll jelek
banget aku mau kayak asli dan ada papan ada orang. Kecuali trading soal nya udah bagus."

**Aset baru di `db-mirror/assets/` (semua foto realistis, ada papan & orang):**

| Berkas | Isi | Ukuran |
|---|---|---|
| `hero-meja.jpg` | 4 orang tertawa main board game di meja kayu (banner lobi) | 214.442 B |
| `kartu-uno.jpg` | kipas kartu warna di meja felt hijau + tangan pemain | 69.039 B |
| `papan-catur.jpg` | papan catur kayu, pion ukir, dua tangan pemain | 63.892 B |
| `papan-monopoli.jpg` | papan properti + rumah mini + uang mainan + tangan | 104.613 B |
| `papan-ular-tangga.jpg` | papan ular tangga warna + pion + tangan anak | 103.126 B |
| `werewolf.jpg` | 5 orang main kartu rahasia di ruangan remang lilin | 81.333 B |
| `logo-umi-games.png` | emblem 3D emas huruf **U** + dadu (256px) | 70.306 B |
| `game-icon-32/192/512.png` | ikon aplikasi dari emblem yang sama | 1,9 KB / 40,6 KB / 288,9 KB |
| `apple-touch-games.png` | ikon iOS 180px | 35.856 B |
| `og-umi-games.jpg` | kartu pratinjau tautan 1200×630 (foto meja + judul) | 127.961 B |
| `manifest-games.webmanifest` | PWA khusus game (`start_url: /`) | 797 B |

**Perubahan `db-mirror/game.html`:**
- `head`: favicon/ikon pakai `game-icon-32/192`, `apple-touch-games.png`,
  manifest `manifest-games.webmanifest`, `og:image` → `og-umi-games.jpg` (1200×630).
- Logo brand header: SVG lama → `logo-umi-games.png` (emblem emas).
- Foto suasana baru di lobi: `<figure class="hero-banner">` + caption
  "Meja sungguhan, teman sungguhan." (tinggi 320px, gradient gelap di bawah).
- Banner foto per room: `<figure class="room-banner" id="rmBanner">` — otomatis terisi
  gambar game yang dimainkan (`rmBannerImg.src = info.img`).
- 6 kartu game: `img` diganti ke `.jpg` baru; tinggi thumbnail 120px → 148px.
- Responsif: banner jadi 210px (lobi) / 150px (room) di layar < 720px.

**Yang TIDAK diubah:** seluruh halaman & aset **trading** (icon.svg, coin.svg, trophy.svg,
apple-touch-icon.png, og-umi-trade.png, manifest trading) — sesuai permintaan owner.

**Deploy & hasil uji:**
- Backup halaman lama: `/backup/task23-game.html` (55.434 B).
- Upload 13 aset + `game.html` lewat `tools/ptero.mjs` — semua `OK`. Tidak perlu restart
  (berkas statis dibaca dari disk tiap request).
- Cek publik: 13 URL `/assets/...` → **200** dengan MIME benar (`image/jpeg`, `image/png`,
  `application/manifest+json`); halaman `/` → **200, 57.692 B**, memuat `hero-meja.jpg`,
  `og-umi-games.jpg`, dan `manifest-games`.
- Pratinjau offline semua aset: `/home/user/preview-umi-games.html` (gambar ditanam base64).
- Sumber resolusi penuh hasil generate: `/home/user/asset-src/` (PNG 1408×768 & 1024×1024).

## Task 24 — Foto kartu & papan diganti foto asli dari internet (2026-10-17 17.05 WITA)

**Permintaan owner:** "Buat foto kartu nya dan catur dll. Aku gamau simpel kalo bisa cari foto
kartu uno di internet trus download habis pasang di website."

Jadi semua gambar papan/kartu yang sebelumnya hasil render AI diganti **foto stok asli**
yang diunduh dari internet, lalu dipotong & dikompres untuk web.

| Berkas (di `db-mirror/assets/`) | Sumber | Lisensi | Ukuran |
|---|---|---|---|
| `kartu-uno.jpg` | Pexels #9068959 (kartu UNO dipegang 2 pemain) | Pexels License | 58.195 B |
| `papan-catur.jpg` | Unsplash `JiBwGmtfKdc` (bidak catur hitam di papan) | Unsplash License | 24.111 B |
| `papan-monopoli.jpg` | Pexels #776654 (papan properti + pion + dadu) | Pexels License | 47.697 B |
| `papan-ular-tangga.jpg` | Wikimedia Commons oleh **Meghmollar2017** | **CC BY-SA 4.0** | 106.016 B |
| `werewolf.jpg` | Pexels #8763161 (4 orang main kartu, lampu warna) | Pexels License | 50.828 B |
| `hero-meja.jpg` (banner lobi) | Pexels #8111296 (3 orang main board game di meja) | Pexels License | 112.741 B |
| `og-umi-games.jpg` | banner di atas + overlay judul | — | 71.398 B |

- Semua dipotong ke **880×400** (kartu game) & **1400×764** (banner), JPEG q86 progressive.
- Kredit & lisensi ditulis di `db-mirror/assets/KREDIT-FOTO.md` (wajib untuk yang CC BY-SA).
- File sumber resolusi penuh disimpan di `/home/user/asset-src/stock/` (tidak di-deploy).
- Logo emblem (render AI) **tidak diganti** karena itu logo brand, bukan foto.

**Deploy & verifikasi:**
- Backup foto versi AI: `/backup/task24-*.jpg` (7 berkas).
- Upload 7 foto + `KREDIT-FOTO.md` → semua `OK`. Tanpa restart (statis).
- Cek publik `https://game.gwenna.my.id/assets/...` → **200**, sha256 server ↔ repo **SAMA**
  untuk ketujuh berkas (sempat terbaca versi lama karena edge cache, setelah diulang cocok).
- Pratinjau offline baru: `/home/user/preview-umi-games.html` (1,09 MB, gambar base64).

## Task 25 — Aset di dalam meja game: bidak catur, kartu UNO, pion, dadu, ikon, kartu Werewolf (2026-10-17 18.10 WITA)

**Koreksi owner:** yang dimaksud "assets game" bukan foto suasana, tapi **isi mejanya** —
pion, papan, bidak catur (raja/ratu/kuda/…), dan Werewolf. Foto suasana dari Task 24 tetap dipakai
sebagai banner.

**Aset baru di `db-mirror/assets/pieces/`:**

| Folder | Isi | Asal |
|---|---|---|
| `chess/` | 12 PNG bidak **k, q, r, b, n, p** versi putih & hitam (160px) | set **cburnett** Wikimedia, CC BY-SA 3.0 |
| `kayu-terang.jpg`, `kayu-gelap.jpg` | tekstur papan catur | render sendiri |
| `pawn/` | `pawn-1..12.png` — pion 12 warna | render sendiri, diwarnai ulang |
| `dice/dice-5.png` | dadu | render sendiri |
| `ikon/` | rumah, kereta, kesempatan (?), listrik | render sendiri |
| `ww/` | kartu peran Werewolf, Peramal, Dokter, Warga | Werewolf & Peramal render sendiri; Dokter = lukisan Gerard Dou (PD), Warga = Bruegel *The Peasant Dance* (PD) |

**Perubahan `db-mirror/game.html`:**
- **Catur**: papan sekarang tekstur kayu (petak gelap/terang) dan bidaknya PNG —
  raja, ratu, benteng, uskup, kuda, pion, putih & hitam. CSS papan diperbaiki jadi
  `grid-template-rows: repeat(8,1fr)` + `aspect-ratio:1` (sebelumnya petak baris 1 & 8 lebih tinggi
  dan bidak bisa terpotong); bidak `position:absolute` supaya selalu pas di tengah petak.
- **UNO**: kartu digambar seperti kartu asli — bingkai putih, badan warna, oval putih miring,
  label besar (`7`, `+2`, `⊘` untuk skip, `⇄` reverse, `WILD`), nama warna kecil di bawah.
  Kartu wild pakai 4 warna sudut + oval gelap.
- **Pion**: emoji 🔴🔵🟢 diganti gambar pion 3D (12 warna) — dipakai di ular tangga & monopoli,
  ukuran besar di ringkasan posisi.
- **Dadu**: tombol "Lempar dadu" pakai gambar dadu.
- **Monopoli**: tiap petak diberi ikon (rumah = properti, kereta = MULAI, ? = kesempatan,
  lampu = pajak).
- **Werewolf**: peran rahasia, hasil terawangan, dan daftar peran semua pemain kini memakai
  **kartu bergambar** (`.rolecard`).

**Perubahan `db-mirror/game.js`:**
- Route aset sekarang menerima subfolder: `/assets/pieces/chess/k-w.png` (dulu hanya 1 tingkat).

**Perubahan `tools/deploy-game.mjs`:**
- Unggah `assets/` jadi **rekursif** — subfolder `pieces/...` otomatis dibuat & diisi.

**Hasil uji (Playwright headless ke situs publik):**
- `chess`: 64 petak, **32 bidak**, semuanya `naturalWidth > 0`, papan 520×520 petak 65×65 rata.
- `uno`: 8 kartu dirender, `pwn/dice/tic/rolecard` muncul di masing-masing meja.
- Uji langsung buat room tiap game → semua 200, tanpa error konsol.
- Aset `pieces/*` di server → **200** dengan MIME benar (png/jpeg).
- Backup sebelum deploy: `/backup/task25-game.js` (108.638 B), `/backup/task25-game.html` (57.692 B).
- Pratinjau offline: `/home/user/preview-umi-assets.game.html` (2,06 MB, gambar base64).

## Task 26 — Papan monopoli bergambar, audio + animasi, notifikasi room ke WhatsApp (2026-10-17 19.25 WITA)

**Permintaan owner:** "Buat lagi assets nya dan tambahin audio serta buat papan monopoli nya mirip asli pake
gambar. Dan buat juga agar ketika room ga di pake selama 10 menit bot ngirim notifikasi ke user yang buat
room di WA kalo di group tag orang nya kalo di private kirim aja pesan nya. Notif room, notif room di tutup,
dan info lain. Buat juga agar setiap game punya animasi."

### 1. Aset baru
- `assets/pieces/ikon/penjara.png`, `parkir.png`, `pajak.png` (render 3D) — melengkapi ikon petak.
- `assets/pieces/tekstur-papan.jpg` — tekstur kertas krem papan monopoli.

### 2. Papan monopoli mirip asli
- `MONO_TILES` disusun ulang: 16 petak mengelilingi papan, **sudut di posisi asli**
  (0 MULAI kanan-bawah, 4 PENJARA kiri-bawah, 8 PARKIR BEBAS kiri-atas, 12 MASUK PENJARA kanan-atas).
- CSS `.monoboard` baru: grid 5×5, latar kayu gelap, tiap `.mo-tile` pakai tekstur kertas,
  **pita warna** khas monopoli, ikon 3D, harga, dan pion pemain yang melompat saat jalan.
- Tengah papan: panel "UMI GAMES · MONOPOLI" miring + 3 ikon.
- Legenda pemain di bawah papan + garis tepi warna pemilik petak.

### 3. Audio (WebAudio, tanpa berkas)
- Objek `SFX` di `game.html`: `click, move, card, dice, hop, capture, win, howl, bell, noise, tone`.
- Tombol 🔊/🔇 di header, status disimpan di `localStorage` (`umi-sfx`).
- Bunyi dipasang di semua game: kartu UNO, langkah catur, dadu ular tangga & monopoli, howl Werewolf, menang.

### 4. Animasi
- CSS: `popIn, hop, slideIn, shake, glowPulse, fadeUp, diceRoll, confFall, wolfFlash`.
- Dadu 3D CSS (`.dice`) berputar saat dilempar; pion melompat; kartu UNO pop; bidak catur meluncur.
- Werewolf: layar menggelap saat malam, kilau terang saat siang.
- Menang: hujan konfeti + nada kemenangan.

### 5. Notifikasi room ke WhatsApp
- `game.js`: tiap room menyimpan `origin {chat, sender, isGroup, number}` dari plugin bot.
- Antrean `notifyQueue` + `GET /api/notify/pending` (Bearer token game, tanpa token 401):
  - `join` — ada pemain baru duduk.
  - `idle` — room nganggur **10 menit** (default), teks menyebut sisa waktu 10 menit.
  - `closed` — room ditutup otomatis pada menit ke-20 (bisa diatur `UMI_IDLE_WARN_MS`, `UMI_IDLE_CLOSE_MS`).
- `bot/lib/game-room-notifier.js` — panen tiap **25 detik** lewat `global.conn`:
  - **Grup** → kirim ke grup dengan awalan `@nomor` + `mentions` (benar-benar nge-tag pembuat room).
  - **Privat/web** → DM ke nomor pembuat room.
- `bot/main.js`: `startGameRoomNotifier()` dipanggil saat boot.
- `bot/plugins/game/game-webmultiplayer.js`: ikut mengirim `origin` saat membuat room dari WhatsApp.

### Uji
- Lokal: idle terpicu, lalu `closed` terkirim, dan notifier memanggil `conn.sendMessage` ke grup dengan
  `mentions: ['628111…@s.whatsapp.net']`.
- Server: `GET /api/notify/pending` → **401** tanpa token, **200** dengan token; notifikasi `join` terkirim.
- Playwright ke situs live: monopoli 16 petak (semua ikon termuat), dadu 3D, Werewolf flash malam,
  UNO 8 kartu, tanpa error konsol; `AudioContext` membuat 16 node saat dadu dilempar (bunyi nyata),
  tombol 🔊 ↔ 🔇 tersimpan di localStorage.
- Deploy: backup `/backup/task26-*`, restart → `Successfully Loaded 2047 Plugins`,
  `[room-notify] aktif — cek notifikasi room game tiap 25 detik`.
- Pratinjau: `/home/user/preview-umi-games-task26.html` (3,1 MB, screenshot live + papan contoh).

## Task 27 — Property Empire 40 petak + papan Ular Tangga bergambar (2026-10-17 17.10 WITA)

**Dua permintaan user:** (A) papan ular tangga lama jelek → wajib ada gambar ular & tangga,
(B) monopoli diganti game papan properti lengkap 40 petak sesuai **PROMPT MASTER**.

### A. Papan Ular Tangga baru (`db-mirror/game.html`)

- `renderSnakes` ditulis ulang: papan **SVG 1000×1000** (bukan grid div + emoji).
- 100 kotak bernomor zig-zag, kotak awal tangga hijau (`▲22`), kepala ular merah (`▼7`),
  kotak 100 bertrofi.
- **7 tangga** digambar dua rel + anak tangga bergradasi kayu (`3→22, 8→31, 20→38, 36→44, 51→67, 71→91, 80→100`).
- **8 ular** digambar kurva bezier berbadan tebal: kepala + mata + lidah bercabang, motif sisik
  (112 titik dihitung dari `getPointAtLength`), `17→7, 32→10, 48→26, 62→19, 79→42, 88→55, 97→66, 99→78`.
- Pion asli `/assets/pieces/pawn/pawn-N.png` (56×75) + badge nomor, transisi `transform .32s`,
  cincin berkedip di pion yang dapat giliran.
- Legenda (7 tangga / 8 ular), chip pemain + posisi, tombol lempar dadu tetap.

### B. Property Empire (`/empire`)

Berkas baru, tanpa bundler (modul ES asli, tetap vanilla Node + HTML):

| Berkas | Isi |
|---|---|
| `db-mirror/empire.js` (43,5 KB) | mesin murni: papan 40, grup warna, sewa, gadai, bangunan, lelang, trade, kartu, bot, simpan/muat |
| `db-mirror/empire.html` (30,2 KB) | papan 11×11 + panel pemain/aksi/log + 10 modal |
| `db-mirror/empire-ui.js` (65,5 KB) | render, animasi, alur giliran, bot loop, pan/zoom |
| `db-mirror/empire.test.mjs` | 20 uji Node (`node --test`) |

- **40 petak** nama Jakarta asli: MULAI, Tanah Abang…SCBD; 4 sudut, 4 stasiun, 2 utilitas,
  2 pajak, 3 kesempatan, 3 dana komunitas (tiap dek 16 kartu berefek nyata).
- Uang terpusat: `pay/receive/charge/payDebt/bankrupt`; transaksi gagal tidak mengubah saldo.
- Bangun **merata** per kelompok, maks 4 rumah → hotel, batas bank (32 rumah/12 hotel),
  jual bangunan setengah harga, gadai (tanpa sewa) & tebus 110%.
- **Lelang** berjalan termasuk bot (`startAuction/auctionBid/auctionPass`), **tukar** dengan
  validasi (tidak menciptakan uang, properti harus milik pengirim, bangunan harus dijual).
- **Bot 4 gaya** (Pemula/Seimbang/Agresif/Ekonomis) — dadu baru diambil saat gilirannya,
  tidak pernah mengintip; `botStep` menangani giliran, beli, lelang, utang, trade, bangun.
- UI: papan kayu + tekstur, ikon SVG tiap jenis petak, band warna, rumah hijau/hotel merah,
  gadai bergaris, dadu 3D beranimasi, kartu flip, confetti, WebAudio + tombol mute,
  modal beli/lelang/kelola/tukar/kartu/utang/statistik/tutorial/setelan, pan & zoom.
- Simpan otomatis `localStorage umi-empire-save-v1` + tombol lanjutkan/mulai ulang (konfirmasi);
  tidak ada API key/token di halaman.
- Route baru `GET /empire`, `/empire/engine.js`, `/empire/ui.js`; kartu sorotan di lobi `/`.

**Hasil uji:**

- `node --test db-mirror/empire.test.mjs` → **20/20 lulus** (papan 40, gaji, beli, lelang,
  sewa properti/stasiun/utilitas, gadai, kartu, penjara, dadu kembar, rumah merata, hotel,
  tukar, bangkrut, bot main sampai selesai, simpan/muat, saldo tak negatif).
- Playwright lokal: satu permainan penuh sampai **game over** (608 aksi, 0 error konsol);
  lelang bot + manusia (bot tawar 120 → panel lelang → manusia 264 → selesai, SCBD jadi milik bot);
  kelola 4 rumah/petak → hotel → gadai (overlay garis) → tukar +Rp400 diterima (kas 2000→1600,
  800→1200, kepemilikan pindah); simpan → reload → lanjutkan (saldo & giliran utuh).
- Live `game.gwenna.my.id`: `/empire` 200, `/empire/ui.js` 200, `/empire/engine.js` 200,
  `/health` **v2.1.0**; dadu [1,2] → pion ke petak 3 → modal “Beli Stasiun Gambir?”.
- Live ular tangga: `svg 1 · ular 8 · tangga 7 · sisik 112`; main sampai selesai (bot menang,
  posisi [44,58,100], status `finished`, 0 error).
- sha256 server ↔ repo untuk `game.js, game.html, empire.js, empire-ui.js, empire.html`: **sama**.
- Commit **`7511d84`** (7 berkas, +5798/−296) sudah di-push ke `main`.

### C. Penyempurnaan sesudah laporan pertama (v2.1.1, 2026-10-17 17.35 WITA)

- **Pion Ular Tangga di kotak START** sekarang tampil (sebelumnya `if (!p) return` menyembunyikan
  pion yang masih di posisi 0) — commit `373a5f1`.
- **Label petak Empire** dirapikan: `overflow-wrap:normal` (tak lagi pecah kata), kolom kiri/kanan
  font `×.86`, ikon petak biasa dibatasi **15 px** (dulu `flex:1` mendorong teks keluar),
  ikon sudut **22 px**, label KESEMPATAN/DANA KOMUNITAS `×.8`, PAJAK `×.88`.
- **Pion lebih kecil** 3,5% → **2,9%** papan supaya tidak menutupi nama petak.
- **Header HP**: brand ringkas (`<560px` hanya logo), chip giliran & tombol 30–34 px,
  `.board.compact` → font 6,1 px, ikon 10 px, harga disembunyikan; `@media` dipindah ke luar
  blok 760 px (sempat tidak berlaku karena bersarang).
- **Statistik game over**: baris “Bangunan berdiri” kini `X rumah · Y hotel` (dulu hanya hotel).
- Hook uji `window.__empire` ditambah `set state` dan `afterAction()` (tanpa data sensitif).

**Hasil uji v2.1.1:**

- `node --test db-mirror/empire.test.mjs` → **20/20**; `node --check` 3 berkas JS bersih.
- Playwright lokal (2 pemain, cepat): permainan **selesai** di giliran ke-24 → modal
  “Permainan Selesai · Bot Umi menang · kekayaan Rp2.002 vs Rp1.693 · 17 petak terjual”, 0 error.
- Lelang paksa petak 1: “Beli Tanah Abang?” → **Lewati / Lelang** → panel **🔨 Lelang**,
  bot tawar 18 → manusia 43 → bot 53 (semua tercatat di log).
- Kelola aset: 3 petak satu kelompok → tombol **+ Rumah** aktif; 5 klik → rumah **2/2/1**
  (merata), kas 2000 → 1750; tombol berubah **+ Hotel** saat 4 rumah.
- Tukar: 4 properti bisa diberikan, 1 diminta; Kirim Tawaran → modal “Menunggu jawaban” →
  bot menjawab, modal tertutup, 0 error.
- Kartu: `afterAction()` → modal flip “Kamu mengambil kartu ❓ KESEMPATAN” dengan efek nyata.
- Simpan otomatis ada; reload → tombol **Lanjutkan** memulihkan kas & giliran.
- HP 390×844: papan **350 px** utuh (tanpa scroll horizontal), modal kelola 358×225–660 px
  di dalam viewport, header tidak meluber.
- Live **v2.1.1**: `/empire` 200 (40 tile, 2 pion), `/empire/ui.js` 200 65.614 B,
  `/empire/engine.js` 200 43.540 B, `/` 200 91.135 B; room ular tangga live → SVG 1 · ular 8 · tangga 7.
- sha256 server ↔ repo: `game.js 7fbbd873`, `game.html 27b07eaf`, `empire.js f51a3e47`,
  `empire-ui.js 310391ea`, `empire.html 1e79ec90` — **semua sama**.
- Commit **`5a2d894`** di-push ke `main` (setelah `373a5f1`).

### D. Papan Ular Tangga v2 — warna & pion (2026-10-17 17.48 WITA)

- Kotak 100 sekarang **berwarna** (8 warna pastel bergilir per baris), bingkai putih tipis di dalam
  tiap kotak, nomor tebal `22px`, label `▲22` / `▼7` diberi garis putih (`paint-order:stroke`)
  supaya terbaca di atas warna apa pun. Kotak 1 hijau muda, kotak 100 emas + trofi.
- **Pion**: latar gelap pada `assets/pieces/pawn/pawn-1..12.png` dihapus dengan flood-fill
  (backup di `/tmp/pawn-backup`), jadi pion tampil sebagai bidak transparan di atas kotak —
  bukan kotak foto. Ukuran 46×92 (rasio asli 1:2) + bayangan elips + badge nomor.
- Terverifikasi: `100 kotak · 8 ular · 7 tangga · 3 pion`, 0 error; live
  `https://game.gwenna.my.id` room ular tangga menampilkan papan baru (screenshot
  `/tmp/live-snakes2.png`, lokal `/tmp/snk-new.png`).
- Deploy ulang + restart; `/health` **v2.1.1**, `/empire` 200, `/empire/ui.js` 200 65.614 B,
  `/empire/engine.js` 200 43.540 B.


## Task 28 — Property Empire masuk room: bot WhatsApp + multiplayer online (2026-10-17 18.13 WITA)

Permintaan lanjutan: *"Buat agar ke hubung sama bot dan dapat di main kan multiplayer"*.
Property Empire (engine 40 petak yang sebelumnya lokal di `/empire`) sekarang hidup di
sistem room `game.js` yang sama dengan UNO/Catur/Ular Tangga/Werewolf.

### 1. Lapisan room untuk engine Empire (`db-mirror/game.js`)
- `GAMES.empire` → label **Property Empire**, emoji 🏙️, min 2 / max 6, `cmd: 'empire'`
  → rute otomatis `GET /empire/<roomId>` (halaman room) tanpa mengganggu `/empire` (mode lokal).
- `STARTERS.empire = empireStart` — satu kursi = satu pemain; kursi bot dapat gaya AI
  `balanced/aggressive/conservative/beginner` bergilir. `maxTurns: 0` (main sampai selesai).
- `ACTIONS.empire = empireAction` — aksi dari klien: `roll`, `jailpay`, `jailcard`, `buy`,
  `decline`, `bid`, `pass`, `debtpay`, `debtbankrupt`, `trade`, `tradeResp`, `end`,
  `build`, `sellhouse`, `mortgage`, `unmortgage`. Setiap aksi divalidasi per kursi
  (bukan giliranmu, bukan lelangmu, saldo kurang, dsb) dan pesan errornya dikirim balik ke UI.
- `currentTurnSeat` + `scheduleAI` punya cabang `empire`: `empireCurrentSeat()` tahu bahwa
  giliran bisa pindah ke lawan saat **lelang**, **bayar utang**, atau **menunggu jawaban tukar** —
  bukan hanya `state.turn`. Bot berjalan otomatis tiap 900 ms lewat `EMP.botStep()`.
- `empireFinish()` menutup room (`status: finished`) + mengumumkan pemenang & kekayaan akhir.
- `publicState` mengirim state tersanitasi: 40 petak (nama/tipe/grup/harga/sewa), holdings,
  kas + posisi + status penjara tiap pemain, dadu, pending, lelang, trade, kartu terakhir,
  bank rumah/hotel, dan 40 baris log terakhir.
- Bot WhatsApp: `bot/plugins/game/game-webmultiplayer.js` dapat entri
  `empire: { id: 'empire', label: 'Property Empire', emoji: '🎩' }` → `.empire`, `.empire join <id>`,
  `.empire <id>` (verifikasi + kode masuk) dan `.webgame room <id>` sudah berlaku.

### 2. Papan & UI multiplayer (`db-mirror/game.html`)
- Papan **11×11 CSS grid**: ring luar 40 petak, 4 sudut, tengah 9×9 berisi merek + dadu +
  gaya giliran + sisa bank. Pita warna per kelompok, strip pemilik, penanda `GADAI`,
  titik rumah / segitiga hotel.
- Pion: PNG transparan 90×180 yang sama dengan Ular Tangga, ukuran 36% petak, ikut posisi
  pemain; di kotak MULAI pion ikut tampil (sebelumnya tersembunyi karena `pos === 0`).
- Ruang baca nama di layar sempit: peta titik pemenggalan (`empName()` + soft hyphen) untuk
  nama panjang, `hyphens:manual`, ukuran font `clamp()`; nama >9 huruf otomatis lebih kecil.
- Klik petak → kartu info (harga, sewa dasar, biaya rumah, pemilik, petak ke berapa).
- Panel **Kelola** (bangun/jual rumah, gadai/tebus) dan **Tukar** (pilih properti dua sisi +
  uang) langsung memakai validasi engine, jadi tidak ada aksi ilegal yang lolos.
- Kartu Kesempatan/Dana Komunitas tampil sebagai pengumuman dengan tombol tutup.
- Layout room: `body.empire-room` membuat kolom room jadi satu (papan lebar sampai 880 px),
  Meja/Chat pindah ke bawah; di HP papan full-bleed 378 px (petak ±34 px) + tap untuk detail.
- Papan mode lokal `/empire` tetap utuh dan sekarang punya tombol **🌐 Online** ke lobi.

### 3. Bukti uji
- `node --test db-mirror/empire.test.mjs` → **20/20 lulus** (papan 40 petak, gaji START, beli,
  tolak→lelang, sewa prop/kereta/utilitas, gadai tanpa sewa, pajak, 2 dek kartu, masuk penjara,
  keluar penjara, dadu kembar, bangun merata, hotel, gadai/tebus, tukar, bangkrut, bot main
  sampai selesai, simpan/muat, saldo tak minus).
- Simulasi room lokal lewat HTTP: 4 pemain (1 manusia + 3 bot) → **51 giliran**, aksi
  `roll/buy/end/bid/pass` semua diterima, log sewa & gaji berjalan, tanpa error.
- Uji dua peramban (2 manusia + 2 bot) di lokal: 40 petak di layar A & B, 4 pion, 2 dadu,
  beli properti, giliran berpindah ke B, chat B sampai ke A, klik petak memunculkan info,
  papan HP 378×378, **0 page error**.
- Uji UI satu manusia vs 3 bot sampai selesai: 66 giliran, 77 jendela modal ditangani,
  menang + papan peringkat tampil, 0 error.
- **Live** `https://game.gwenna.my.id` (setelah deploy + restart):
  `/health` **v2.2.0** `games: [uno,unoflip,chess,snakes,monopoly,empire,werewolf]`,
  `/empire` 200 31.046 B, `/empire/engine.js` 200 43.540 B, `/empire/ui.js` 200 65.614 B,
  beranda memuat "Property Empire".
  Uji dua peramban di domain produksi (room `empire/<id>`): 2 kursi manusia, mulai 4 pemain,
  40 petak, 4 pion, 2 dadu, beli properti, giliran B, chat masuk, 0 error.
- sha256 server = repo **5/5 SAMA**: game.js 122.851 B, game.html 116.712 B,
  empire.js 43.540 B, empire-ui.js 65.614 B, empire.html 31.046 B.
- Plugin bot terunggah dan diverifikasi langsung dari panel: `game-webmultiplayer.js` 8.357 B
  memuat `empire: { id: 'empire'`. Container di-restart setelah unggahan.

### 4. Berkas yang berubah
- `db-mirror/game.js` — impor `empire.js`, GAMES/STARTERS/ACTIONS, `empireStart/empireAction/
  empireBotStep/empireCurrentSeat/empireFinish`, cabang `publicState`, `EMPIRE_TILES`.
- `db-mirror/game.html` — CSS papan Empire (±190 baris), `renderEmpire()`, `empName()`,
  entri `GAME_INFO.empire`, kelas `body.empire-room`, regex tautan room + `empire`.
- `db-mirror/empire.html` — tombol **🌐 Online** di topbar.
- `bot/plugins/game/game-webmultiplayer.js` — perintah `.empire` + komentar "Tujuh meja".

### 5. Catatan
- `/empire` (tanpa id) tetap halaman **mode lokal** dengan UI premium lama; room online ada di
  `/empire/<id>` dan dibuat dari lobi, dari bot (`.empire`), atau tombol Online.
- Verifikasi WhatsApp untuk room Empire mengikuti aturan room lain: room dari bot wajib
  verifikasi, room dari website mengikuti `UMI_GAME_OPEN_JOIN` (sekarang bebas masuk).
- Belum ada batas waktu per giliran; kalau pemain hilang di tengah permainan, room menunggu
  (bisa ditutup host / dibiarkan gugur oleh pembersihan room otomatis).


## Pending

- Feedback auto-report sudah jalan (jalur bot→website diuji 201), brat.js sudah di-fix
- Payment gateway (TriPay) belum dikonfigurasi (saat ini manual DANA)
- ACC Top Up **sudah terbukti jalan** dari akun owner (2 permintaan Rp1.000.000 di-approve 20:29Z)
- **Perlu 1x klik nyata dari akun owner**: tombol Auto Read & Bot Utama di halaman Bot Utama
- Uji end-to-end WhatsApp: kirim `.daftar` dan `@verify` → akun trading otomatis muncul di
  papan peringkat (harness lokal sudah lolos, belum dari WA asli)
- ~~Harness plugin `bot/plugins/game/trading-umi.js`~~ **selesai Task 19**: `.tradingoffline` (rich HTML)
  dan `.tradingoffline file` diuji langsung di server
- Trading versi WhatsApp masih memakai saldo localStorage terpisah dari akun web (sengaja, biar
  jalan tanpa internet) — kalau mau disatukan, perlu endpoint game yang bisa dipanggil rich HTML
- Boost emiten hanya berlaku di game online (website & bot). Game WA/offline menghitung harga
  sendiri di HP, jadi tidak ikut ter-boost
- Plugin lama `bot/plugins/game/trading1.js` (37.464 B) masih menunggu keputusan: hapus atau
  pindahkan ke arsip supaya tidak dobel dengan `trading-umi.js`
- ~~Jadibot `6282343823200` reconnect loop~~ **selesai**: sesi + backup dihapus otomatis (Task 17)
- Sesi jadibot yang putus >15 menit kini dihapus otomatis (termasuk backup). Kalau ingin ambang
  lebih longgar, setel env `JADIBOT_SESSION_TTL_MS` (mis. 3600000 = 1 jam)
- Auto-backup WA masih gagal kirim (`Connection Closed`) → putuskan: matikan fitur ini (backup
  sudah rutin lewat Vercel) atau batasi hanya kalau ada koneksi WhatsApp yang sehat