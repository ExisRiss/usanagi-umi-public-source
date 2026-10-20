# STATUS DEPLOY

## Task 69 — Sistem Backup & Restore 10 Menit (2026-10-19)

| Item | Status |
|---|---|
| Scheduler 10 menit di proses bot | **LIVE** — slot 11:40:05Z & seterusnya, catch-up setelah restart |
| Arsip tar.gz + manifest + checksum | **LIVE** — 3,9 MB/snapshot, verified |
| Enkripsi AES-256-GCM | **LIVE** — `BACKUP_ENCRYPTION_KEY` di `.secrets/task69-backup.env` |
| Retensi 144 / 7 / 4 / 3 | **LIVE** — plus hapus salinan eksternal saat kedaluwarsa |
| Salinan eksternal (Vercel Blob privat) | **LIVE** — mode hourly, unggah + HEAD verify (sha256 unduhan identik) |
| REST API `/api/backup-system/*` | **LIVE** — 22 endpoint, `x-backup-secret`, unggah arsip `.enc` terverifikasi |
| Dashboard `/backup` | **LIVE** — Vercel `dpl_8mdPWqRVMV7aeW3M1xs2WGLUWQp5`, login owner via Supabase |
| Restore + konfirmasi 2 langkah | **LIVE** — dry-run produksi 3/3 checksum cocok |
| Bot Telegram | **BLOCKED** — `TELEGRAM_BOT_TOKEN` belum diisi |
| Tes otomatis | **51 lulus / 0 gagal** (termasuk unggah arsip polos & terenkripsi) |
| Commit | `699d728` (lihat git log) |

Kredensial: `.secrets/task69-backup.env` (chmod 600, tidak di-commit).
Docs: `docs/BACKUP-SYSTEM.md`, `docs/BACKUP-RESTORE.md`, `docs/BACKUP-API.md`, `docs/BACKUP-TELEGRAM.md`.

## Task 68 — Akses penuh owner Jadibot + kudeta (2026-10-19)

| Item | Status |
|---|---|
| `.sitagrup` / `.kudeta` ditolak untuk owner Jadibot | **DIPERBAIKI** — gate `rowner` tidak mengenal owner sesi |
| Owner Jadibot akses penuh fitur bot | **SELESAI** — `lib/owner-policy.js` + gate baru di `handler.js` |
| Fitur website (boost saham) & data lintas akun | **TETAP DIKUNCI** untuk owner Jadibot (pesan "fitur website/platform") |
| Penanda eksplisit | `platformOnly` di boost/jadibotconfig/self, `jadibotOwner` di sitagrup |
| Test | `bot/tests/owner-policy.test.mjs` — 8 pass / 0 fail |
| Verifikasi live | `node verify-owner.mjs` di server: sitagrup BOLEH, boost DITOLAK |
| sha256 live | policy `74b9cdf7f946` · handler `9b3260b1709e` · boost `ca6927f5cf23` · jadibotconfig `69e854a04bb5` · self `52379b737dbc` · sitagrup `9a3c58ef4078` |

## Task 67 — Pairing ditolak "nomor sudah dimiliki akun lain" (2026-10-19)

| Item | Status |
|---|---|
| Registry `data/jadibot-platform.json` mengunci nomor yang sesinya sudah mati (logout 401) | **DIPERBAIKI** — nomor mati boleh diambil alih, sesi lama dibuang |
| Cache registry tidak pernah reload (`if (database) return database`) | **DIPERBAIKI** — cache mengikuti mtime berkas |
| Nomor bot utama bisa dipakai sebagai jadibot (saling tendang 401) | **DIPERBAIKI** — hanya owner, tanpa `startSubBot` (`MAIN_BOT_NUMBER`) |
| Pesan 409 | sekarang menyebut email tersamar + `code: NUMBER_OWNED`, dan dicatat di log |
| Pairing gagal setelah ambil alih | kepemilikan dikembalikan otomatis |
| Nomor `6285792965374` | **tidak ada** di registry → bebas, user bisa pairing ulang |
| Bukti | `live-patch/2026-10-19-pairing/`, `/home/user/LAPORAN-TASK67.md` |
| sha256 live | api `5b08a68d2d8a` · state `aaf28996a710` |

## Task 66 — ENOSPC bot + .playvideo gagal (2026-10-19)

**Metode:** patch langsung ke berkas live (repo snapshot lebih lama dari produksi) + restart bot `d178bf71`.

| Item | Status |
|---|---|
| `ENOSPC: no space left on device` di `.ping`/`.menu` | **DIPERBAIKI** — `/tmp` tmpfs 100 MB terisi 98 MB sisa unduhan; sekarang 3% |
| `.playvideo` "semua sumber gagal" | **DIPERBAIKI** — video 60 MB + audio 38 MB ditulis ke `/tmp` 100 MB, audio gagal di tengah jalan lalu berkas tertinggal; sekarang pakai disk 32 GB + selalu dibersihkan |
| Sisa berkas unduhan | **DIPERBAIKI** — folder kerja per unduhan + `finally` selalu hapus + sweeper tiap 10 menit |
| Temp proses | `TMPDIR` → `/home/container/tmp` (disk 32 GB), bukan tmpfs |
| Bukti | `live-patch/2026-10-19-enospc/`, `/home/user/LAPORAN-TASK66.md` |
| sha256 live | boot `fd6ec611c22e` · awang-ytdlp `e31783bd894c` · YouTube `b1a0fc2a4e26` · usanagi-play `797c898d598d` |

## Task 64b — 45 saham IDX asli (2026-10-19)

**Commit:** `b9b940c`

| Item | Status |
|---|---|
| Nama & kode saham jadi emiten IDX asli | **SELESAI + TERDEPLOY** (game `186425d1`, bot `d178bf71`) |
| Jumlah emiten | **10 → 45** (BBCA, BBRI, BMRI, BBNI, BRIS, ARTO, TLKM, EXCL, ISAT, TOWR, MTEL, ADRO, PTBA, ITMG, MEDC, PGAS, AKRA, ESSA, ICBP, INDF, UNVR, HMSP, GGRM, AMRT, CPIN, ANTM, MDKA, TINS, INCO, SMGR, INTP, WIKA, PTPP, ASII, GOTO, EMTK, BUKA, KLBF, SIDO, BSDE, CTRA, ACES, MAPI, SCMA, TPIA) |
| Harga acuan | harga IDX ÷ 2.000 (BBCA ≈ $AS 5, GOTO ≈ $AS 0,06) supaya tetap terjangkau saldo $AS |
| Sinkron di semua tampilan | web `/trading`, offline, kartu WhatsApp, tombol boost (default BBCA) |
| Simbol lama (UMI, TRD, DANA, …) | hilang total (`fiktif tersisa: []`) |

Bukti: `/home/user/deploy-check/task64b/verify.txt`.


## Task 64 — Top up $AS pakai koin RPG + Limit ON/OFF (2026-10-19)

**Commit:** `5c92dbc` → `a4ebe03` → `ac9da69` → `66e60ff` (branch `main`).

| Item | Status |
|---|---|
| Top up trading pakai koin RPG (tanpa DANA) | **SELESAI + TERDEPLOY** (bot `d178bf71`, game `186425d1`) |
| Bug `default_limit -1` tetap kehabisan limit | **DIPERBAIKI** (akar: `userData.limit ??=`, akun lama menyimpan angka) |
| Tombol Limit ON/OFF di website | **SELESAI + LIVE** (`limit_enabled`, tersimpan per session) |
| Website Vercel | `dpl_HPTx69xbFc8tAJo6DA4BynC7bW2d` READY |
| Kunci trading Task63 | **DIBUKA** (`UMI_TRADING_RECOVERY_REQUIRED=false`, 0 akun & tidak ada data hilang) |
| Kurs | **10 koin = $AS 1** (20–5.000/transaksi, 20.000/hari) |

Bukti live: `/home/user/deploy-check/task64/verify.txt`. Detail: `/home/user/LAPORAN-TASK64.md`.

**Sisa langkah owner:** kirim `.trading login <token>` sekali dari WhatsApp agar nomor tertaut;
sesudah itu tombol “TUKAR KOIN SEKARANG” di `https://game.gwenna.my.id/trading` berfungsi.


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
- sha256 server = repo **5/5 SAMA**: game.js 122.851 B, game.html 116.862 B,
  empire.js 43.540 B, empire-ui.js 65.614 B, empire.html 31.046 B.
- Poles akhir: titik pemenggalan untuk nama panjang (Tanjung/Senayan/Kwitang/Cawang),
  dan di HP header room Empire tidak lagi `sticky` supaya tidak menutupi baris petak atas.
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
## Task 41 — Perbaiki routing menu/command dan crash allmenu (2026-10-18)

### Laporan dan bukti akar masalah
- User: "tampilin allmenu" dibalas menu error; "buka menu" menjadi open create.
- Log produksi menunjukkan crash asli `[allmenu] TypeError: Cannot use 'in' operator to search for 'customPrefix' in <!DOCTYPE html>`, di `_system/_allmenu.js:522`. Registry berisi template HTML game selain function plugin. Filter lama menerima string HTML lalu memakai operator `in` pada string.
- Search AI memberi boost pada `buka/open` tanpa memeriksa objek menu/grup/peti. RPG `open` bisa menang. Katalog Usanagi hanya mengekspos nama namespace, bukan alias polos yang juga diterima handler.
- Prompt lama menyuruh memilih fitur terdekat saat ragu dan mengklaim hasil sebelum eksekusi. Jalur lokal melewati pemeriksaan izin per-plugin dan terblokir budget Groq meski tanpa panggilan API.

### Perubahan
- `_system/_allmenu.js`: hanya function plugin aktif masuk renderer; HTML/string/null/angka di registry diabaikan. Template dan tampilan menu tetap dipertahankan.
- `auto-ai.js`: alias polos + namespace yang valid, target plugin pasti, pencarian berdasarkan objek dan usage. `buka menu` tidak diberi boost grup/RPG.
- Menu/allmenu dan room yang jelas dirutekan lokal, argumen kosong sesuai kontrak. Permintaan ambigu ditanyakan; quote bertuliskan "buka menu" bukan permintaan membuka menu.
- Pemilihan hasil model harus exact alias + id plugin dari kandidat. Fallback fuzzy/suffix untuk eksekusi dihapus. Tidak boleh membuat command baru atau menukar fitur diam-diam.
- Izin/nonaktif dicek pada jalur lokal maupun model. Router lokal berjalan sebelum guard kuota, sehingga menu tidak tergantung sisa token Groq.
- Penghapusan semua args bila pesan menyebut room dihapus: `empire join ABC123` tetap membawa ID asli, bukan membuat room baru.
- Rangkaian yang jelas (`tutup grup lalu buka 5 detik kemudian`) direncanakan lokal, dua langkah tetap ada. Perencana tidak mengaku sukses sebelum plugin dijalankan.
- Prompt dipadatkan dan menjelaskan tujuan/objek, perbedaan perintah vs pertanyaan/negasi/isi teks, usage, izin, serta kewajiban bertanya saat ambigu. Gaya santai tetap ada.

### Pengujian
- `node --test bot/tests/auto-ai.test.mjs bot/tests/intent-routing.test.mjs`: **47/47 lulus**.
- Suite baru memakai metadata plugin nyata termasuk menu, allmenu, RPG open, grup, Empire dan bratvid2. Kasus negatif: unknown alias, plugin mismatch, menu nonaktif, non-admin, pertanyaan, negasi, isi quote, dan budget habis.
- Handler allmenu aktual dieksekusi dengan transport WhatsApp/media tiruan, registry berisi HTML/string/null/angka: berhasil menghasilkan caption menu dengan prefix `!`, tanpa exception. Ini bukan bukti penerimaan pesan oleh HP.
- Probe Groq nyata dengan metadata aktual: permintaan menu lengkap memilih allmenu; quote teks "buka menu" memilih quote dan mempertahankan teks. Probe juga menemukan model bisa menghilangkan langkah buka pada rangkaian; setelah router rangkaian ditambahkan, tutup@0 + buka@5000 memakai 0 panggilan model.
- Frasa "bisa tampilkan pilihan menunya?" sempat hanya dibalas teks oleh model; dimasukkan ke routing menu lokal dan tes regresi, sekarang menu dengan 0 panggilan.
- Suite native-dispatch lama belum dapat dijalankan di sandbox ini: dependency better-sqlite3 tidak terpasang. Tidak mengklaim e2e pengiriman WhatsApp; tetap perlu user mencoba di grup nyata.

### Deploy
- Unduh dan bandingkan file produksi dengan HEAD sebelum perubahan/deploy: sama. Hanya tiga file runtime diubah; session, key, aset, website, dan pengaturan autoread tidak disentuh.
- Upload 204: `/lib/auto-ai.js` **24.868 B**, SHA-256 awal `06da43c272bc037c`;
  `/lib/auto-ai-prompt.js` **2.449 B**, `55317e4d244fcbca`;
  `/plugins/_system/_allmenu.js` **21.649 B**, `f756a20f8d49d569`.
- Ketiga file diunduh kembali: byte identik. Restart panel API 204.

- Verifikasi startup: `Successfully Loaded 2052 Plugins`, 0 baris error di log yang diperiksa. Commit/push: `a53c34b`. Konfirmasi di WhatsApp masih menunggu uji user.

## Task 42 — Bratvid2 wajib menghasilkan stiker, bukan video (2026-10-18)

### Laporan / akar masalah
User meminta hasil bratvid2 berupa stiker. Perbaikan adapter impor sebelumnya sudah menyediakan sendVideoAsSticker, tetapi alias utama `bratvid2`/`brat2` ditangani `plugins/maker/brat2.js` yang masih mengirim payload `{video, gifPlayback, caption}` (atau `{image}`), bukan `{sticker}`.

### Perubahan
- Ubah satu file runtime: `plugins/maker/brat2.js`.
- Hasil API dideteksi format binernya lewat file-type, dikonversi dengan writeExif dari lib/exif.js menjadi WebP dan diberi metadata pack/author.
- MP4 maupun GIF dikonversi ke stiker animasi. Respons gambar menjadi stiker gambar. Jalur fallback tetap menghasilkan stiker, tidak mengirim video/foto.
- Validasi RIFF/WEBP sebelum kirim; isAnimated mengikuti flag VP8X hasil konversi. Payload hanya `{sticker}` plus isAnimated jika animasi, tetap quote pesan user.
- Konversi gagal → laporkan gagal membuat stiker, bukan mengganti output ke video.
- Deskripsi command diperjelas sebagai stiker animasi. API utama tetap `https://apiii-xrina.my.id/maker/bratvid2?text=...`; tidak ada key/session/branding yang dirotasi atau dihapus.

### Verifikasi
- Re-sync repo ke HEAD a53c34b. Sebelum edit, unduh brat2.js dan exif.js live dan bandingkan dengan HEAD: sama. Snapshot tracked lama disimpan di deploy-check/task42/snapshot-tracked.patch.
- Dependency produksi file-type, fluent-ffmpeg, node-webpmux, axios, fs-extra sudah tersedia.
- Jalankan handler aktual dengan API bratvid2 asli untuk teks "ayam", transport sendMessage ditangkap (tidak mengirim pesan ke pengguna): hasil `{success:true}`; satu payload `{sticker,isAnimated:true}`; WebP 76.440 byte; parser node-webpmux membaca ukuran 320×320, **42 frame**, animasi dan EXIF valid. Tidak ada field video/image/document.
- 9 tes khusus konversi/transport: MP4, octet-stream, PNG, GIF, fallback GIF→MP4→WebP, output konversi invalid, ffmpeg gagal, input kosong/prefix aktif, dan transport gagal. Semua memakai konversi ffmpeg asli, HTTP dan WA dimock.
- Gabungan regresi AI/menu/stiker: **56/56 lulus**. Hasil disimpan di deploy-check/task42/tests.tap.
- Pengiriman dan tampilan stiker di aplikasi WhatsApp user belum dikonfirmasi; uji real API dan format payload bukan klaim end-to-end ke HP.

### Deploy
- Cek ulang live belum berubah sebelum upload.
- Upload `/plugins/maker/brat2.js` HTTP 204, **8.997 byte**, SHA-256 awal `ded832e36402d33d`.
- Unduh ulang: byte identik dengan lokal. Restart via panel API: HTTP 204.

- Startup: `Successfully Loaded 2052 Plugins`, 0 baris error di log yang diperiksa. Commit/push: `9ccff80`. Tampilan stiker di WhatsApp masih perlu konfirmasi user.

## Task 43 — Papan ular tangga chat bergaya vintage (2026-10-18)

### Pilihan user / cakupan
- User tidak suka papan sebelumnya dan meminta tampilan lebih seperti papan asli.
- Klarifikasi: user memilih **langsung di chat** dan **klasik vintage**. Room web/utweb, aset trading, dan game lain tidak diubah.

### Perubahan
- Rombak `plugins/game/ular-tangga-wa-html.js` menjadi edisi nostalgia: kertas bertekstur (SVG data URI), warna cetak pudar, judul serif, bingkai kayu, label mulai/akhir, dan 100 petak bernomor zigzag.
- 7 ular digambar sebagai badan melengkung meruncing, kepala, mata, lidah, dan sisik; bukan garis putus-putus. Warna hijau/terakota/oker dengan outline tinta.
- 8 tangga bergambar dua batang kayu, anak tangga, detail garis kayu; posisi awal/akhir persis mengikuti aturan lama.
- Pion merah/hijau berbentuk pion kayu dengan bayangan, muat dalam petaknya bahkan saat dua pion berada bersama. Dadu fisik dengan titik 1–6 dan animasi kocok.
- Gerakan pada ular/tangga mengikuti jalur SVG, bukan menelusuri semua petak angka yang dilewati; aturan tujuan tetap sama.
- Mode bot / 2 pemain satu HP, suara, reset konfirmasi, kemenangan tepat 100, dan progres `umi_ular_v1` dipertahankan. Tidak ada aset/CDN jaringan baru.
- Preview mandiri identik dengan HTML produksi: `/home/user/ular-tangga-vintage.html`.

### Pengujian
- Chromium/Playwright, 14 tes: viewport 320/390/430/768px tanpa overflow; 100 nomor unik; 7 ular + 8 tangga; seluruh endpoint SVG sesuai nomor petak; dua pion tetap di dalam papan.
- Interaksi aktual: lempar, pergantian pemain, tangga 4→14, ular 36→6, penyimpanan/reload, tepat 100/overshoot, reset setelah menang, giliran bot, mode dan mute.
- Diuji juga dalam iframe sandbox allow-scripts tanpa localStorage yang dapat diakses; render dan kontrol dasar tetap jalan tanpa jaringan.
- Total regresi AI/menu + papan: **61/61 lulus**. Screenshot mobile diperiksa secara visual.
- Ini uji browser dan deploy, bukan konfirmasi bahwa pesan rich HTML baru sudah terlihat di HP user.

### Deploy
- Sinkron repo dari GitHub HEAD `9ccff80` (snapshot tracked lama disimpan sebelum reset). Unduh dua file ular live sebelum perubahan: sesuai HEAD.
- Hanya satu file runtime diupload: `/plugins/game/ular-tangga-wa-html.js`, **29.501 byte**, SHA-256 awal **48c37c2da1b4cf0e**.
- Upload 204; unduh ulang identik; restart melalui panel API 204. File pengirim game dan semua session/key tidak diubah.
- Pesan rich HTML lama tidak berubah otomatis; panggil `ular` / `ularpapan` lagi dengan prefix aktif untuk mendapatkan papan baru.

- Startup: 2052 plugin termuat, 0 baris error pada log yang diperiksa. Commit/push: `089c27a`.

## Task 44 — Kartu rich HTML informasi + optimasi lag ular tangga (2026-10-18)

### Permintaan dan cakupan
User meminta saham, portofolio, info bot, info grup, dan fitur terkait tampil sebagai rich HTML dalam pesan WhatsApp; ular tangga terasa lag.
Diterapkan untuk saham/pasar/harga, portofolio/trading, peringkat trader, bukti beli/jual saham, infobot/statusbot/runtime/alive, serta groupinfo/infogrup/infogroup/grupinfo. Bukan klaim konversi semua 2.052 plugin.

### Rich HTML
- Modul baru `lib/rich-info-cards.js`: renderer HTML mandiri dengan CSS ringan, details yang bisa dibuka, snapshot timestamp, kartu metrik, posisi, alokasi aset, dan instruksi perintah sesuai prefix aktif.
- Memakai pengirim rich message yang sama dengan game (`awang-rich-forward.js`), bukan hanya mengirim file HTML/link web. Jika relay gagal, fallback teks yang menyebut kegagalannya secara jujur; tidak mengklaim pasti ter-render di semua versi WhatsApp.
- `.saham` tanpa argumen kini menampilkan pasar, seperti `.pasar`/`.harga`/`.marketas`. `.portofolio`/`.trading` mengambil ringkasan akun token melalui `/api/trading/me`. Token/credential tidak dimasukkan dalam HTML atau JS klien.
- Menjaga instruksi login sebelumnya: token tidak ada/invalid → tutorial login, bukan diam-diam memakai akun WA berbeda. Transaksi tetap endpoint server asli dan hanya setelah command eksplisit; HTML kartu tidak mengeksekusi order.
- Kartu pasar/account adalah snapshot saat command diproses, bukan live ticker atau simulasi angka lokal. Pembaruan dengan mengirim ulang command. Snapshot tidak memuat fetch/polling/skrip berat.
- Peringkat dan bukti transaksi juga rich HTML; receipt hanya setelah server mengonfirmasi transaksi. Tidak mengubah saldo riil akun saat pengujian, harga mesin pasar, PUMP_ENABLED, boost emiten, game trading offline, atau aset trading lama.
- Infobot menampilkan sesi aktif (utama/jadibot), mode, uptime proses, prefix, jumlah function command, Auto-AI dan autoread. Menghapus fake ping 0ms dan download thumbnail eksternal yang tidak perlu.
- Infogrup hanya dari grup pemanggil, mengambil metadata grup itu; anggota/admin, tanggal dibuat, pengaturan dan deskripsi. Tidak menaruh token, undangan, atau daftar nomor anggota di kartu. Semua teks dinamis di-escape untuk mencegah HTML/script injection.

### Lag ular tangga
- Papan vintage tetap terlihat sama, tetapi ilustrasi statis di-raster sekali ke WebP 996×996 (95.654 byte) dan ditanam langsung dalam HTML. Menghapus feTurbulence/mix-blend/filter/backdrop blur serta ratusan node path yang terus dicat ulang.
- Pion bergerak memakai translate3d, bukan animasi left/top. Ukuran papan dicache melalui ResizeObserver; animasi tidak membaca layout/SVG geometry setiap frame.
- Rute ular/tangga memakai titik prakomputasi; pembaruan animasi maksimum sekitar 30fps, animasi perpindahan 900ms. Tidak ada loop render idle; confetti dikurangi.
- Mencegah timer giliran bot ganda dan memperbaiki progres yang dimuat saat giliran bot agar tidak macet. Aturan/map/progres v1, suara dan mode 2 pemain dipertahankan.
- Ukuran HTML naik karena gambar ditanam (~152 KB), sebagai tradeoff untuk mengurangi kerja render/CPU saat bermain dan tetap offline.

### Pengujian
- **79/79 tes lulus**: regresi AI/menu, 17 tes rich info/transport/data, 15 tes browser ular. Tes transport mendekode payload richResponse dan memeriksa HTML, endpoint dan token; tidak mengirim pesan uji ke grup user.
- Data pasar live dibaca dari API `/api/trading/market`: HTTP 200, 10 emiten. Tidak mengeksekusi perdagangan real untuk tes; transaksi dalam suite dimock.
- 12 pemeriksaan kartu Chromium pada 320/390/768px tanpa overflow; details bisa dibuka. Preview memakai harga pasar snapshot live dan data contoh yang jelas ditandai untuk portfolio/bot/grup.
- Profil browser dengan CPU throttling 4×, gerak ular 36→6: node DOM **753→283**, layout **74→11**, waktu layout **47,7→12,7ms**, total task terukur **794,2→390,4ms** (~51% turun). Ini hasil sandbox, bukan jaminan performa setiap HP/WhatsApp.
- `ular-tangga-ringan.html` adalah preview game terbaru. `preview-rich-whatsapp.html` berisi preview 4 kartu, data contoh ditandai. Tampilan aktual rich message dan kelancaran di HP user masih perlu konfirmasi.

### Deploy
- Sync repo ke HEAD 089c27a, simpan snapshot tracked lama. Unduh file produksi sebelum edit dan cocokkan: sama; cek ulang sebelum upload agar tidak menimpa perubahan live.
- Lima file runtime diupload dan diunduh ulang, seluruh byte sama:
  - `/lib/rich-info-cards.js` 12.599 B `de4a0b72f4a0942b`
  - `/plugins/game/trading-umi.js` 22.566 B `361bccb918330db1`
  - `/plugins/info/info-runtime.js` 1.874 B `d2d2d96ba839fffc`
  - `/plugins/group/usanagi-groupinfo.js` 1.275 B `11c4bfa4b41a48e8`
  - `/plugins/game/ular-tangga-wa-html.js` 152.093 B `3da315e5017ae390`
- Restart panel API 204; `Successfully Loaded 2052 Plugins`; 0 baris error pada log startup yang diperiksa.
- Sesi, backup, key/token, autoread dan website produksi tidak diubah. Pesan game/kartu lama tidak diperbarui otomatis; kirim perintah ulang untuk menerima versi terbaru.

- Commit/push: `c7ab631`. Uji penerimaan rich HTML dan kelancaran di HP user masih menunggu konfirmasi.

## Task 45 — Similarity hanya fallback setelah command/Auto-AI (2026-10-18)

### Laporan dan akar masalah
User mengonfirmasi rich HTML Portofolio sudah terkirim, tetapi mendapat pesan tambahan `Mungkin maksud kamu /portofolio` 90%. Hook `before` similarity berjalan sebelum command, membaca teks asli `Portofolio` tetapi memakai kecocokan prefix dari dispatch hasil AI `/portofolio`. Pemotongan satu karakter menghasilkan `ortofolio`, lalu saran dikirim sebelum jawaban rich.

### Perbaikan
- Memindahkan similarity dari `before` ke callback `unknownCommand`, dipanggil dispatcher paling akhir setelah hooks, command dan balasan AI. Bukan sekadar menghapus teks saran.
- Jika AI sudah menangani pesan, command telah dikenali (termasuk ditolak izin/gagal), atau bot sudah/pending membalas, fallback tidak berjalan.
- Modul baru `lib/command-response.js` melacak sendMessage, relayMessage (termasuk rich HTML), conn.reply dan m.reply menggunakan AsyncLocalStorage. Flag terpisah per permintaan/socket/chat; aman untuk pesan bersamaan dan bot utama/Jadibot. Reaksi, edit, delete, metadata serta pesan ke chat/socket lain tidak dihitung sebagai jawaban. Send gagal tidak ditandai terkirim.
- Saran tetap tersedia untuk typo pada command dengan prefix aktif yang benar-benar tidak dikenal dan belum dijawab. Mengurai hanya token command, mendukung prefix multi-karakter, argumen, huruf besar, regex alias serta plugin disabled/custom scope.
- Helper serializer lama `lib/message-response.js` tetap identik dengan HEAD/live: nama tracker dipisahkan setelah review menemukan benturan nama. Tidak mengubah parser tombol/list/native flow.

### Pengujian
- **112/112 tes lulus**: Auto-AI, intent routing, native dispatcher, rich info, serta suite baru similarity/response tracking. Tes mereproduksi bare `Portofolio` melalui Auto-AI, mengirim lewat sender rich asli lalu mendekode payload HTML: tepat satu pesan pada bot utama dan Jadibot.
- Menguji command valid dengan argumen/case, typo genuine, obrolan tanpa prefix, jawaban AI, penolakan permission, command tanpa output, balasan before/all hook, relay rich, reaksi, gagal kirim, pending send, concurrency satu chat/socket dan beberapa socket.
- Transport, model dan database dalam tes dimock; tidak mengirim tes ke WhatsApp user atau mengeksekusi perdagangan.
- Syntax check runtime dan git diff --check lulus. Test loader ditambah stub scheduler sibling access helper agar tidak memuat SQLite native yang tidak diperlukan.

### Deploy
- Membandingkan ulang handler dan similarity live dengan backup sebelum upload: identik. Helper baru dipastikan tidak ada melalui directory listing (endpoint contents panel mengembalikan 500 untuk file absen).
- Tiga file runtime diupload, helper lebih dulu, seluruh byte diverifikasi dari download ulang:
  - `/lib/command-response.js` 3.157 B `583614c1bf0971064`
  - `/handler.js` 52.629 B `92f199750fac4a036`
  - `/plugins/_system/_didyoumen.js` 2.756 B `1192d57ea46376cc`
- Restart melalui panel API: 204. Console sesudah restart: `Successfully Loaded 2052 Plugins`, tidak ditemukan error import/syntax/load plugin pada pemeriksaan startup.
- Key/token, sessions dan backup, autoread, website, aset trading/game tidak diubah. Verifikasi pesan WhatsApp nyata pascadeploy masih perlu retry user; hasil tes bukan klaim sudah diuji dari HP user.

- Task45 commit/push: `41fd8cb` — deploy 3 file terverifikasi, 112 tes lulus.

## Task 46 — Eclipse Realms: shared RPG vertical slice (2026-10-18)

### Status jujur
**Implementasi lokal & QA selesai untuk vertical slice; DEPLOY TERBLOKIR API PANEL HTTP 500. Keseluruhan MMORPG belum selesai / belum production-ready.** Tidak ada file produksi Task46 yang ditulis, tidak ada restart produksi, dan `/realms` live masih 404. Bot/game lama `/api/health` dan `/health` tetap 200.

### Audit & keputusan
- Workspace kembali ke snapshot lama HEAD 0d76f6a. Simpan patch tracked di `deploy-check/task46/snapshot.patch`, fetch/reset ke remote terbaru **41fd8cb** sebelum membuat perubahan Task46. Tidak menghapus perubahan Task46.
- Audit statis 313 file command RPG (inventaris lengkap `docs/REALMS-COMMAND-AUDIT.md`). Ditemukan RPG JSON (`money`/`balance`) dan Usanagi RPG SQLite (`rpg_users`, `koin`, inventory/pet/quest). Website memakai SQLite yang sama, bukan DB progres baru; JSON lama dipertahankan tanpa merge saldo/identitas sembarangan.
- Stack dipertahankan: bot Node ES modules + better-sqlite3 WAL, API HTTP bot, game server HTTP/SSE dan companion/tunnel existing. Supabase/dashboard/store/auto order tidak diganti.
- Download live baseline handler, platform API, RPG DB/lock dan game.js. Semua cocok kecuali game.js memiliki hardening token bot yang belum ada di HEAD; fix live tersebut dipertahankan. Panel lalu mulai gagal sebelum baseline scheduler/shop bisa diunduh; manifest wajib mencocokkan baseline 41fd8cb untuk dua file itu saat panel pulih.

### Implementasi nyata
- `lib/realms`: shared service, additive SQLite schema, secure code/session auth, gameplay transaction/idempotency receipts, privacy DTOs, chat/presence dan HTTP/SSE routes.
- Login kode sekali pakai lewat private WhatsApp; 5 menit, hash tersimpan; sesi cookie HttpOnly/SameSite=Strict/Secure pada host publik, expiry/logout/revoke. Nomor tidak diminta sebagai bukti kepemilikan, tidak dikirim ke client, dan tidak menjadi public ID.
- Desa & hutan playable, NPC, collision/pathfinding server-authoritative, empat class, combat turn-based, loot/EXP/level, quest tiga slime dengan klaim sekali, inventory/shop/equipment/potion/healer.
- Pet summon: peluang server 40/30/20/8/2%, token gameplay, kompatibel tipe/field pet lama, active/collection/history, mengikuti karakter, membantu combat dan mendapat EXP/hunger.
- SSE presence/movement, global/local chat, pagination, block/report, leaderboard dengan UUID/nama game. HTML chat berupa text node; nomor-like text disaring sebelum storage; chat tidak di-forward otomatis ke WA.
- Original generated artwork dikompres ke WebP **244.598 B**; karakter/monster/pet digambar Canvas sendiri, bukan pemain palsu/statistik mock. Kontrol HP/desktop, minimap, audio opsional, reduced motion.
- Plugin `realms` memakai service yang sama untuk login/status/movement/quest/combat/shop/summon/revoke; semua instruksi bot memakai prefix aktif.
- Shared reentrant gate pada native dispatcher dan Auto-AI scheduler mencegah stale legacy read→await→overwrite menimpa aksi web. Perbaiki quantity negatif pada Usanagi shop. Bukan klaim audit tuntas semua command ekonomi lama.
- Backup konsisten SQLite `VACUUM INTO pre-realms-v1.sqlite` chmod 600 sebelum migrasi pertama; migrasi hanya menambah tabel. Backup/session/key produksi tidak disentuh dalam task ini karena belum deploy.

### QA dijalankan
- **31/31** tes Realms memakai SQLite nyata dan adapter RPG lama: auth/replay/expiry/revoke, data bersama, actual legacy shop handler, quest/EXP, currency concurrency, rollback, schema/prototype input, combat/skill, pets, privacy/chat scopes, real HTTP/SSE, serta backup+migration preserves legacy bytes.
- **112/112** regresi existing lulus: Auto-AI, intent, native dispatcher, rich info dan similarity Task45.
- **14** pemeriksaan browser lulus dengan dua akun/konteks terpisah: login/karakter, genuine multiplayer presence/chat, XSS text & phone redaction, movement, UI attack, 3 pertarungan, quest reward, summon, shop, reload/reconnect, 320/390/768/1440px, touch D-pad, panel HP. 0 page errors/HTTP5xx dalam run final.
- Tes awal terlalu cepat membuka encounter baru: server cooldown benar-benar menolak. Perbaiki pacing tes, tidak melonggarkan rule.
- Targeted `node --check` dan `git diff --check` lulus. Tidak mengklaim full repo lint, load test, pengujian semua plugin, atau tes HP WhatsApp nyata.
- Artefak: `deploy-check/task46/{realms-tests.tap,regression-tests.tap,browser-result.json,browser-test.log,*-desktop.png,game-mobile.png,live-health.json}`. Data dan kode QA bersifat sintetis; kode hanya di `.secrets` chmod600.

### Deploy — belum berhasil
- `tools/deploy-realms.mjs` + manifest 15 file: preflight sumber live, verifikasi path baru, hash readback, upload helper/aset lebih dulu, rollback file kode saat partial failure, restart via panel hanya setelah semua file terverifikasi.
- Jalankan preflight read-only dan percobaan auto-deploy nyata: keduanya berhenti pada **Panel resources HTTP 500; no production writes performed**.
- `/api/client`, resources, listing dan contents juga HTTP500 `UnexpectedValueException`; kedua credential existing untuk host panel yang sama dicoba, tidak dirotasi. Jangan bypass policy shell owner untuk menulis file.
- Endpoint bot/game lama tetap HTTP200; `/realms` HTTP404. Tidak mematikan bot yang sehat saat API pengelolaan sedang gagal.
- Tindak lanjut: saat panel pulih jalankan guarded deploy (jangan overwrite snapshot lama), verify byte/restart/startup/HTTP, lalu tes private WA login → aksi web → realms status dari akun user.

### Batasan dan pekerjaan selanjutnya
- Belum live, belum real-phone acceptance. PN/LID atau saldo RPG JSON tidak otomatis digabung ke SQLite.
- Royal Capital/kerajaan lanjutan, party manusia, dungeon co-op terisolasi, guild/roles/chat, whisper/friends, player trading/crafting, full tutorial/quest campaign, skill trees/element, advanced pet UI dan owner admin moderation belum selesai.
- Gate masih single-process; load/distributed tests, audit ekonomi legacy menyeluruh, retention ledger dan admin review workflow belum selesai.
- Laporan teknis/setup/env/deploy/rollback: `docs/ECLIPSE-REALMS.md`. Ini vertical slice berfungsi, bukan klaim memenuhi seluruh master prompt.

- Task46 source commit/push: `0d65cd1`; formatting follow-up recorded in repository. Production remains Task45; deployment blocked by panel HTTP500.

## Task 47 — dunia baru, preview Arena & paket VPS (2026-10-18)

### Deploy aktual dan batasannya
- Pemilik menjelaskan VPS lama down, penggantian Senin/Selasa; memilih preview Arena terisolasi. Tidak mengulang probe panel500 atau menulis/restart produksi.
- Proses `Eclipse Realms — Mainkan versi tes` berjalan di port4173/0.0.0.0 dengan persistent SQLite terpisah, `REALMS_MODE=preview`. Tombol guest tidak perlu WhatsApp; tidak ada guest route pada handler produksi. Preview tidak memuat env/token produksi.
- Gunakan kartu Live Preview Arena. Tes akses HTTPS mentah dari browser luar konteks Arena mendapat403 `Missing traffic access token` dari gateway E2B; jangan menyebut URL mentah sebagai publik tanpa akses platform. Game/UI/API lokal lulus, akses melalui UI Arena dari perangkat pemilik belum dikonfirmasi.
- Source website sidebar/hero dan lobi game sudah menautkan MMORPG; website produksi belum dideploy ulang. Domain game permanen menunggu VPS baru. Preview bukan hosting permanen, data guest bukan data produksi.

### Implementasi
- Greenleaf (desa+hutan), Royal Capital safe zone beserta merchant/healer/petkeeper/Captain Edrin; quest dua wolf dengan klaim satu kali.
- Portal antar region memeriksa posisi/jarak/combat di server. Atlas menampilkan tiga region. Aset kerajaan/dungeon original baru, dikompres WebP.
- Hollow Crypt dungeon **solo** tersimpan: dua encounter berurutan + phased boss, reward chest1000gold/500EXP/1token satu kali, cooldown10menit, resume dan death/flee. Instance-scoped presence/local chat; global chat tetap lintas region.
- Service shared SQLite, reward authoritative/idempotent, gate legacy, trusted production login/privacy tetap dipertahankan. Party/guild/co-op manusia, friends/whisper/trading/admin belum selesai; bukan klaim full MMORPG/production-ready.

### QA aktual
- 40/40 backend+SQLite migration; 116/116 regresi Auto-AI/intent/native/rich-info/similarity.
- 16/16 browser gameplay checks; dijalankan lagi dari script portable dalam repo dengan hasil sama, 0 page errors. Dua guest nyata, gear, perjalanan, quest via combat sungguhan, dungeon/boss/chest, reload, cross-region chat, touch dan320/390/768/1440px.
- Screenshot kerajaan/dungeon desktop dan desa mobile diperiksa visual. Preview health, POST-only, CSRF origin dan body limit lulus. Capture private runtime diuji dengan fixture: safety confirmation, inclusion SQLite/manifest,0600 dan no-overwrite lulus.
- Docker build/systemd di VPS baru, physical WhatsApp acceptance, proxy produksi dan load besar belum diuji. Portabilitas source tidak sama dengan keberhasilan deploy produksi.

### Paket & keamanan migrasi
- Full source mencakup bot, website, db-mirror, standalone, aset dan package-lock; exclude secret/session/runtime DB/node_modules. `README-START-HERE-TASK47.md` dan `docs/VPS-MIGRATION-TASK47.md` menjadi petunjuk utama.
- Docker/Caddy preview, systemd companion full stack, template env nonsecret, layout preparation no-overwrite dan capture privat disediakan. Service produksi menolak start sebelum config+SQLite dipulihkan; tidak menyamarkan kehilangan data sebagai DB kosong.
- Manifest targeted deploy kini18file + reviewed source hashes; baseline produksi lama tetap, bukan installer fresh VPS. Website memiliki lifecycle serverless sendiri.
- Backup Blob terbaru17Oktober2026~19:00UTC diunduh **privat**: Jadibot10file/8bot-config/**0creds.json**; bot ada legacy database.json, **tidak ada SQLite RPG/WA auth**. Arsip `.secrets/vps-migration/`, tidak masuk release. Pemulihan penuh auth+SQLite belum dapat dilakukan tanpa disk/snapshot privat VPS lama; jika auth hilang harus pairing ulang. Jadibot expired>=15menit beserta backup tetap tidak boleh dihidupkan dari arsip.
- Permission direktori `.secrets`0700 dan file0600 dipulihkan. Secret scan menemukan satu nilai credential existing dalam catatan lama `PINDAH-SESI.md`; nilai disensor dari source/release, **tidak merotasi key** dan tidak rewrite history. History lama mungkin masih memuat nilai; jangan menganggap redaksi working tree menghapus paparan historis.
- Seluruh pekerjaan Task47 dicatat di sini dan STATUS workspace. Git/source release dan checksum dibuat setelah review akhir; tidak memasukkan token ke log/laporan.

### Verifikasi release Task47
- ZIP kandidat 3968 file source diperiksa CRC dan SHA256 tiap file. Ekstraksi bersih + npm ci terpisah + startup server preview + health/client/guest serta header cookie Secure/HttpOnly/Strict lulus. Tidak memakai node_modules workspace untuk smoke test release.
- Smoke test awal mendeteksi staging parsial belum menyertakan package type dan awang-lock; staging diperbaiki, Docker COPY juga dilengkapi, run final lulus. Docker engine/build tetap belum diuji.
- Scan exact22nilai private + pola token/private-key/JWT privileged lulus tanpa temuan setelah redaksi catatan lama. Tidak menghapus history atau merotasi kredensial.
- Source ZIP final: `Umi-Eclipse-Realms-Task47-Source.zip`, manifest per-file di dalam ZIP dan checksum terpisah; panduan utama `README-START-HERE-TASK47.md`.

- Task47 commit/push berhasil: **7567d7a** ke origin/main. ZIP final3968sourcefile, 40875019bytes; SHA256 `af0abb319efb49208da300206a2edcaabdc16ebd901e861244c1b1067f921288`. File panduan terpisah: `Panduan-VPS-Eclipse-Realms.md`.

## Task 48 — deploy produksi + gabungkan seluruh RPG (2026-10-18, berlangsung)
- Pemilik menyatakan VPS/bot lama kembali hidup dan memilih keduanya: deploy shared Realms + konsolidasi semua RPG lama.
- Workspace kembali ke snapshot0d76f6a; simpan patch dan untracked privat `.secrets/task48/`, pulihkan origin/fetch/reset7567d7a sebelum perubahan Task48. Tidak merotasi key; permission secret dipulihkan.
- Audit pertama: panel resources200 (starting), game health200, API health200; Realms404. Enam baseline produksi dan tiga helper SQLite/RPG cocok source/hash acuan. Unduh JSON/config/source audit privat, tidak mempublikasikan nomor/token.
- Legacy JSON553record termasuk118newsletter,232PN,203LID; money nonzero2record, balance/koin field tidak ada; exp nonzero370, level semuanya0. Jangan menganggap semuanya553pemain unik, atau menjumlahkan aliasPN/LID. Wallet/topup dan trading bukan sasaran konversi RPG. SQLite produksi belum berhasil diambil/diperiksa.
- Install dependency dan40/40backend+migrasi Realms lulus lagi.
- Preflight targeted deploy berhenti sebelum writes: TLS ECONNRESET/unexpectedEOF panel. CurlIPv4HTTP1.1 juga gagal. Recheck publik kemudianHTTP530 (setelah tadinya200). **Belum ada upload produksi, power command, restore, migrasi data atau perubahan sesi.** Backup konsisten belum bisa dieksekusi; jangan mengklaim auth/SQLite sudah aman.
- Penggabungan currency/level/item lintas format memerlukan kebijakan eksplisit dan validasi alias terpercaya; bukan penjumlahan mentah. Sumber source Realms Task47 tetap siap, produksi belum terpasang.

## Task 49 — pindah ke panel baru, bot/game dua server (2026-10-18)

### Konteks dan keputusan
- Task48 sempat mendapat panel/API200, tetapi preflight berikutnya putus TLS dan publik530 sebelum write/power. Pemilik kemudian memberi panel baru dan memilih bot+game terpisah.
- Workspace lagi kembali ke0d76f6a; simpan patch privat, fetch/reset7567d7a sebelum edit Task49. Key panel baru disimpan0600, tidak dicetak/di-commit atau dirotasi. API list mengonfirmasi kedua target kosong: serverjadibotVip(d178bf71,2176) dan servergameVip(186425d1,4470), nodeLONDON.

### Deploy yang benar-benar dilakukan
- Node22 dipilih lewat API panel, source baru3750file bot/90file game diunggah+ekstrak, runtime privat terpisah, cloudflared2026.10.1 diverifikasi digest release. Readback kode/data penting lulus. Arsip upload dihapus sesudah ekstrak; source/runtime terpasang, tidak menimpa server berisi data.
- Bootstrap role menjalankan bot/API atau game serta named tunnel masing-masing. Tunnel umi-api-gwenna dan umi-games-gwenna dipakai dengan credential existing/config, **bukan --token**; tunnel alzriss-okta tidak dijalankan. DNSapi/umi-api pindah ke tunnel bot; game tetap tunnel game dengan port4470. Backup konfigurasi/DNS sebelumnya privat.
- Proxy Realms lintas server melalui HTTPS tetap satu authoritySQLite pada bot. Forwarded-host dipercaya hanya setelah existing sharedkey cocok constant-time+hostname allowlist; kode/cookie pengguna tetap wajib. Tidak ada guest login produksi atau impor data Arena.
- Website existing dicek: HTML live cocok byte-for-byte baseline sebelum Task47. Deploy update ke project yang sama READY (`dpl_G1Rbqwpi91S1wZtBboTUbW8LmYeE`); navigasi MMORPG live. Skip helper diperketat untuk env/.vercel/.secrets, bukan overwrite snapshot tua.

### Perbaikan saat startup
- Native SQLite sempat menyebabkan state/login500. npm panel memblokir lifecycle, sementara pemeriksaan lama cuma require() yang tidak memuat binding lazy. Probe boot sekarang membuka SQLite memory+SELECT1+close; binary diunduh lewat prebuild dan berfungsi. Canvas juga diperiksa dengan createCanvas. Final state/login invalid401, bukan500.
- 2051plugin termuat, tidak ditemukan error syntax/import plugin pada log startup final. Main bot enabled, nomor pairing existing diatur; status **unregistered/unpaired**, bukan connected. Autoread OFF terverifikasi. Perlu pairing fisik user; belum mengklaim semua command teruji dari HP.
- Panel resources masih melabeli kedua container `starting`, tetapi proses services-started dan HTTPSbot/game200. Jangan mengganti bukti ini dengan klaim daemon running.

### Data yang tersedia dan yang tidak
- Backup Blob terbaru18Oktober05:00UTC diunduh privat. Legacy database.json553record dipulihkan; money/balance/EXP/level/bank/gold/diamond existing0perubahan setelah startup. Record termasuk alias/channel; bukan553orang unik.
- Auth WA lama, SQLiteRPG lama, trading accounts, wallet/order ledger dan privateGroqkey tidak tersedia di backup/workspace. Tidak merekayasa sesi connected, akun11.000, saldo0 atau histori. SQLite runtime baru bukan pemulihan progres lama; banner pemulihan tampil di Realms.
- Trading account/login/mutasi503maintenance, market200; save trading juga dinonaktifkan sementara. File state kosong buatan startup awal dihapus setelah diverifikasi0akun/user/session/deposit/login-code. Wallet read/write dikunci503 di core agar tidak membentuk dompet baru seolah data lama kosong. Boost02.00 tetapfalse; aset trading tidak diubah.
- Metadata jadibot tanpaauth tidak diaktifkan kembali. Sesi expired>=15menit tidak direstore. Supabase/cloud existing tetap, tidak direset. Store/merchant runtime yang tidak tersimpan juga tidak diklaim pulih.
- Penggabungan semua RPG lama **belum selesai**: kebijakan currency sebelumnya dilewati; tidak menjumlahkan money/balance/koin atau aliasPN/LID tanpa aturan/proof. Wallet/topup/trading bukan sumber konversi RPG.

### Backup dan deploy berikutnya
- Bundle18file konfigurasi+key panel baru+legacyJSON terenkripsi AES256GCM/HKDF ke BlobPRIVATE `private-migrations/task49/runtime-20261018.enc`;59009bytes. Download/decrypt/byte-roundtrip lulus, tidak rotasi key. Ini bukan backup auth/SQLite/trading/wallet lama; **tidak otomatis memperbarui auth setelah pairing**.
- Tool private-recovery-vault restore menolak overwrite dan tidak langsung mengekstrak ke produksi. Menyediakan jalan mengambil kembali key/config bila snapshot workspace kehilangan berkas baru tanpa meminta user mengulang key.
- `tools/deploy-split-realms.mjs` + manifest24kode/aset: temukan ID lewat APIlist, preflightdrift, backupkodeprivat, readbackSHA256, rollbackwriteparsial, restart role berubah. Preflight24file terhadap kedua server lulus. Helper single-server lama dipagari opt-in, jangan digunakan untuk topology baru.

### QA akhir
- 46tes Realms/migrasi/proxy/native/wallet +116regresi lulus.
- 10browser checks pada hostproduksiHTTPS lulus,0pageerrors; logininvalid,metadata3region,landingdesktop/mobile390,nooverflow,lobi dan navigasi website, recoveryguard. Screenshotdesktop diperiksa visual. **Bukan tes gameplay loginvalid/WA fisik**; tidak membuat akun sintetis produksi.
- 10pemeriksaanHTTPakhir lulus: bot/game/meta200, state/logininvalid/guest401, CSRF403, trading/wallet503maintenance, market200. Ownerrelay200 danautoreadfalse.
- Artefak `deploy-check/task49/`; log/rawconfig/data hanya `.secrets/task49/`. Panduan pemulihan dan batasan lengkap: `docs/PANEL-MIGRATION-TASK49.md`.

- Task49 commit/push sukses: **801814f**, origin/main. Layanan publik tervalidasi; statusWA terakhirunpaired,autoreadOFF. Crypto recovery bundle terverifikasi; tidak mengklaim pemulihan seluruh data.

## Task50 — keputusan baru, main OFF, backup dan audit RPG (2026-10-18)

- Owner memilih semua pekerjaan, tidak ada backup lama tambahan, konversi **RPG-only money+balance+koin→koin1:1**, main bot **OFF/tidak pairing**. Wallet/topup/trading dikecualikan. Nomor/keys tidak dirotasi; autoread OFF. Keputusan ini menggantikan pairing main dan currency belum-disetujui pada catatan lama.
- Workspace sempat kembali ke0d76f6a: patch privat disimpan, fetch/reset baseline801814f. Credential panel dipulihkan dari vault existing tanpa meminta ulang atau memulihkan konfigurasi main-enabled lama.
- Owner relay POSTmainOFF200 dan verifikasi akhir setelah restart: enabled/connected/registered/autoreadfalse. API/game/meta200; log restart jadibot menunjukkan satu sesi berhasil terhubung. Bukan acceptance seluruh command WA fisik.
- Snapshot privat konsisten: writer dihentikan via panel/WSoffline, archive diunduh, temporaryremote dihapus, service dinyalakan lagi.558record=235PN+205LID+118newsletter; SQLite integrityok,0RPGrows/0Realmsaccounts;2creds/1registered baru tersedia setelah Task49, bukan recovery auth lama.
- Planner+CLI readonly/staging-only:205eligible,235held(205LID belum diverifikasi+30record duplikatPN),118excluded. **30duplikat bukan invalid currency.** Total credit eligible0; staging205impor, replay0, integrityok, JSONasal unchanged,0write konversi produksi. Alias invalid tetap menahan duplikat valid; alias baru atas receipt canonical tidak bisa dikredit lagi; drift rollback atomic. Detail hanya privat.
- Deploy otomatis dua file bot: endpoint owner-only GET `/api/owner-console/rpg-unification` + planner.25target preflight/readbackSHA256, kode sebelumnya dibackup, restartbot204. Endpoint hanya agregat audit; tidak memanggil fungsi rehearsal. Tanpa tiket/wrongaudience401; currencyConversionApplied/legacySpendAdapterEnabled/progressUnificationCompletefalse. Game/website/data/sesi live tidak ditimpa.
- Backup sesi aktif838file ke `sessions-backup/<active-session>`; download-readback seluruhSHA256 cocok. Lokasi mengikuti cleaner disconnect>=15menit. Tidak mengaktifkan sesi expired atau merestore auth di atas live. Ini backup **satu server, bukan offsite auth**. Temporaryremote dihapus;3arsip auth lokal dihapus sesudah backup terkelola dan backup non-auth terverifikasi, mencegah salinan auth tanpa retensi.
- Backup non-auth18file ke BlobPRIVATE `private-migrations/task50/runtime-data-20261018.enc`,41155bytes ciphertext; roundtrip dekripsi sama byte. SQLite/JSON cocok snapshot awal; local `.secrets/task50/pre-unify-data-no-auth.tar.gz`. Tidak berisi auth WA. Keys existing tetap. Restore tidak otomatis extract/overwrite.
- QA:11tes baruPASS(planner/receipts/privacy/retensi);46regresiPASS dengan fixtureloader;15checks livePASS. Invocation awal46tes tanpa loader gagal5, diperbaiki dengan loader yang memang diperlukan. Artefak sanitized `deploy-check/task50`; rawconfig/plan/logdata tetap `.secrets`.
- Belum selesai: adapter transaksi legacy→SQLite, verifikasi/deduplikasi PN/LID, penyatuan EXP/level/items/pet, gameplay login sah/WA fisik. **Tidak mengaktifkan migrasi satu arah yang menyisakan saldo legacy independen.** Ledgerwallet/trading/order dan Groq tetap tidak tersedia;503guard dipertahankan, tidak membuat saldo pengganti.
- Detail: `docs/RPG-UNIFICATION-TASK50.md`; README diperbarui agar tidak menyuruh pairing main lagi. Task50 ini **bukan klaim penyatuan RPG selesai**.

- Final safety Task50:3983file source/22nilai private diperiksa,0temuan; node_modules symlink dilepas sebelum staging. Final25target preflight/readback lulus tanpa restart tambahan.

- Source Task50 dipublikasikan ke origin/main: `77dcd6411d891f9d6f643719b012b0f16ba42e7b` (9file). Working tree bersih. Deploy runtime read-only sudah dilakukan dan diverifikasi; penyatuan live tetap belum aktif.

## Task51 — Groq aktif dan unified RPG terverifikasi LIVE (2026-10-18)

- Permintaan owner melanjutkan semua pekerjaan dan memakai key Groq yang diberikan. Key disimpan privat600, diatur lewat owner-agent/settings dan `.env.groq`, readback cocok; completion Groq nyata200. Planner nyata berhasil menjawab percakapan dan memilih `menu` dengan pesan sintetis. Tidak mengirim pesan WA QA atau mengklaim acceptance fisik.
- Main bot tetap OFF, registered/connected/autoreadfalse, tanpa pairing; nomor existing tidak dihapus. Satu jadibot reconnect dari sesi existing setelah tiap restart yang diverifikasi. API/game/meta200. Wallet/trading read/mutasi503, market200; boost02.00 tidak diaktifkan. Tidak ada key dirotasi.
- Implementasi bridge SQLite authoritative untuk native/legacy/imported dan Realms: money/balance/koin alias tunggal, EXP/level/inventory/pet, cooldown persisten, identity canonical pada context native, leaderboard dedup. Snapshot sumber dan receipt disimpan; JSON kompatibilitas hanya marker untuk data RPG, bukan saldo kedua.
- Unit-of-work/gate/CAS menyatukan pemain, guild dan job; invalid/serialization failure yang ditangkap plugin tetap membatalkan staged changes. Source drift, nested mutation, replacement/prototype/property definition, stale native saves, held identity, late alias highwater dan pet multiplicity/review diuji. Fase di-flush sebelum outbound; bukan janji rollback side effect jaringan sepanjang seluruh command.
- Reward warnet/berdagang durable sebelum outbound, worker settlement restart/exactly-once diuji. Notifikasi tetap best-effort, bisa terkirim ulang jika crash tepat sebelum marker notifikasi; hadiah tidak digandakan. MainOFF bukan fallback pengiriman.
- Rehearsal final dari salinan privat snapshot SEBELUM migrasi produksi:235source→220canonical,38.451EXP,1profilberpet,0kredit,205LID ditahan,0reviewpet. Replay/restart0, integrityok, sumber tidak berubah, productionWrites0 pada rehearsal. Dua pemetaan tepercaya yang tersedia tidak menyelesaikan205LID lama.
- Deploy benar-benar dilakukan:40target manifest dibandingkan dengan live;19source runtime baru/berubah dikirim dependency-first sebelum importer/main, backupkodeprivat dan SHA256 readback. Approval privat `RPG_ONLY_1_TO_1`600 mengaktifkan migrasi pada startup, otomatis snapshot SQLiteVACUUMINTO+JSON sebelumnya. Hardening lanjutan dideploy otomatis lagi. Tidak mengunggah database/sesi/website snapshot lama.
- LIVE owner aggregate:stage=live-unified,canonical220,source235,alias235,held205,pendingPetReview0,currencyConversionApplied/legacySpendAdapterEnabled/verifiedProgressUnifiedtrue,progressUnificationCompletefalse. Konflik sumber baru tidak mematikan canonical sah. Tidak menggunakan nomor diketik atau servicekey sebagai bukti linking.
- Snapshot POSTowner-only fixed-function/rate-limited di bawah gate: sebelum0RPGrow, sesudah220row/235receipt/38.451EXP/koin0/1profilberpet; integritykeduaSQLok, JSON235marker/205heldLID. Endpoint menolak anonymous401 dan tidak menerima path/SQL/kode. Rawdata/log hanya `.secrets/task51`.
- Delapan file non-session sebelum/sesudah+config ke BlobPRIVATE `private-migrations/task51/runtime-unified-20261018.enc`,101584bytes ciphertext; decrypt/byte-roundtrip lulus. Tidak berisi auth WA. Backup sesi terkelola Task50 tetap mengikuti cleanup disconnect≥15menit; tidak menambah salinan auth abadi.
- Restart produksi sesudah aktivasi dan hardening:import0/kredit0,canonical220/held205 tetap, API aktif dan jadibot terhubung. Final tepat40sourceSHA cocok live. Jangan rollback kode legacy-only atau restore SQLite/JSON stale di atas progres baru; penghapusan approval tidak menonaktifkan marker authority yang sudah aktif.
- QA akhir:94backend+143regresi=237PASS;19checks livePASS;2plannerGroq nyataPASS. Backend mencakup boot backup, transaksi/replay/guild/job/identity/pet/serialization; regresi AutoAI/native/imported/intents/bratvid2/rich-info/similarity/vintage. Kegagalan awal broad regression akibat dependency lokal, diperbaiki dengan dependency test-only/Chromium/ffmpeg, bukan dianggap kegagalan produksi. Tidak ada perubahan package manifest/lock untuk instalasi test-only.
- Dokumentasi:README, `docs/RPG-UNIFICATION-TASK51.md`, penanda historis Task50, keduaSTATUS. Runtimeflag/backupdi-ignore. Artefak sanitized `deploy-check/task51/`, keys dan data di `.secrets`.
- Batas nyata:205LID belum terbukti, wallet/order/trading historis tidak tersedia, acceptance login sah/WhatsApp fisik dan seluruh fitur sosial/admin/multiplayer master MMORPG belum selesai. **Tidak mengklaim seluruh master prompt selesai.**

- Final safety Task51:3989file source/24nilai private diperiksa,0temuan; symlink dependency dilepas sebelum publikasi. Final40sourceSHA live cocok setelah hardening.

## Task52 — website backend502, CSP/scope dan metadata grup diperbaiki (2026-10-18)

- User melaporkan backend Umi tidak merespons dan meminta perbaikan website/tunnel/API/Jadibot. Workspace kembali ke0d76f6a; patch privat dipreservasi, origin difetch/reset ke publishedf47f4a4. Credential panel diambil dari vault existing; tidak restore data lama ke produksi.
- Reproduksi live: kedua website `/api/health`502, API HTTPS langsung200. Vercel masih memakai alokasi HTTP server lama. EnvironmentUMI_API_ORIGIN diarahkan keHTTPSAPIaktif; semua credential lain tetap. Probe Python awal403 tidak dijadikan bukti outage; Node/browser dan jalur Vercel diperiksa terpisah.
- HTML/app.js sebelum perubahan cocok tepat dengan baseline live. Diperbaiki scope helper kontrol main/autoread yang berada di luar IIFE; script Google/hero dan32styleinline dipindahkan menjadi aset eksternal agar lolos CSP tanpa melonggarkan policy. Struktur/desain/aset existing dipertahankan. Cache-busting versi20261018-backend52.
- Transport API bersama: deadline health8detik/relay45detik/browser65detik, body timeout tercakup, redirect credential ditolak, payload HTML/kosong abnormal menjadi error terstruktur, POST tidak diretry. Auth/503financialguard dipertahankan. Wallet read gagal menampilkan—, bukanRp0, dengan top-up disabled dan notice persisten.
- Helper deploywebsite memverifikasi productionHTTPSorigin+health sebelum upload dan website→backend setelahREADY. URL dasar Unified API/security menunjuk website sekarang. Deploymentdpl_CWwy2w2yAja5v8jKG46rNJTyZXUb READY; kedua domain dan hash aset live diverifikasi.
- Audit88feedback:16belumresolved, tidak ada yang baru sejakTask51 pada saat pengambilan. Ditangani9incident gettermentionedJid/ENOSPC (sourcefixliveexisting atau storageprobehostpengganti),4ratelimit menjadi monitoring setelah cache/backoff dideploy;3manual tidak ditutup paksa. Update metadata CAS, originalfeedback/audit tetap; snapshot awal privat.
- Perbaikan tambahan bot: group metadata per-socket dipakai handler+outbound Baileys, single-flight, TTL30detik, backoff60detik, invalidasi anggota/grup/koneksi, defensivecopy dan boundedcache. Handler participant mendukungstring/object dan tidak memicuTypeError sekunder saat metadata gagal. Tidak mengarang anggota/admin atau membagi cache antarbot.
- Tiga runtimefile bot dideploy code-only dengan backup/preflight/readback dan restartpanel;43targetsource akhir cocokSHA256. API/game/tunnel tetap sehat; ingressAPI2176/game4470 diperiksa. Tidak mengganti tunnel credentials, tidak menjalankan alzriss-okta --token. MainOFF/autoreadOFF/tanpapairing tetap; satujadibot reconnect. Bufferlogpasca-restart:0SyntaxError/TypeError/importerror/ENOSPC. Uji storagewrite/readback/delete berhasil, tidak menghapus auth/data.
- QA:19unit baru+1regresiTriPayPASS;36browser desktop/mobile fixturePASS;33checksHTTP livePASS;12browserlivePASS dengan0page/CSPerrors. OAuthentry200→provider302Google tanpa login akun. Ownerfixture bukan acceptance loginowner nyata atauWAfisik; tidak mengirim perintah/pairing QA.
- Progres RPG tidak direset:220canonical,source/alias236,heldLID204,pendingPetReview0 pada pemeriksaan akhir. Tambahan satu linking muncul dari runtime dibandingTask51, bukan dipaksakan agent. Groq configured/enabled tetap. Wallet/trading historis tetaprecovery503, market200; bukan saldo/histori pengganti.
- Snapshot terbaru SQL/JSON di bawah gate:integrityok,220canonical/236source. Delapanfile non-session data+config ke BlobPRIVATE private-migrations/task52/runtime-current-20261018.enc,73575byte ciphertext;decrypt/byte-roundtrip lulus. Tidak ada authWA di arsip, tidak merotasi key; cleanup disconnect≥15menit tetap.
- Detail docs/WEBSITE-BACKEND-TASK52.md; artefak sanitizeddeploy-check/task52, semua rawlog/feedback/env/backup hanya.secrets/task52. Tidak mengklaim nolerror selamanya, seluruhMMORPG selesai, atau seluruhaksiWA teruji. Manual ownershipguard tidak dibypass.

- Final safety Task52:3996file source/24nilai private diperiksa,0temuan. Source runtime43/43 dan aset website di kedua domain cocok; credential/data privat tidak dipublikasikan.


## Task53 — hotfix Jadibot tidak merespons (2026-10-18)

- Produksi membuktikan before-hook gagal di wrapper RPG: assignment `reply` readonly. Socket connected bukan bukti handler berjalan; tes Task51/52 memakai helper mutable dan melewatkan bentuk descriptor sebenarnya. Bug ini berasal dari update sebelumnya, bukan konfigurasi pengguna.
- Wrapper descriptor-safe + relayMessage dideploy otomatis; preserve immutable own helpers, shadow inherited readonly methods, flush-before-send dan wrap-once. Source SHA6b5b9eb581bd5b53337d080c365ec723a977002025429b97eb9885d2f4b31184.
- Pemeriksaan sesudah restart menemukan blocker kedua: repair main.js menulis EXP/currency/cooldown pada held identity, ditolak409 dan menyebabkan boot loop/API502. Guard tidak dibuka; repair legacy progression dilewati ketika unified authority aktif. Deploy kedua code-only/restart terkontrol, SHA0642a28fac6bb9613c9bd1b1eca17d83775dd7a5ae6735259600c5b5837d83fc. Kedua source live diunduh ulang dan hash cocok.
- Credential panel dipulihkan dari vault existing setelah workspace reversion; patch lama dipreservasi privat. Tidak restore database/config/sesi stale, tidak merotasi key, tidak redeploy website/game. MainOFF/autoreadOFF/tanpapairing, retensi sesi disconnect>=15menit dan financial guard dipertahankan.
- Sesudah deploy kedua API/website bridge/game HTTP200JSON. Owner-agent: dua jadibot terhubung,2039plugin,uptime139detik. RPG aktif,profil241/source278/alias281/held202 pada salah satu pemeriksaan; progres terus bergerak, bukan rollback. Groq configured tetap.
- Log pertama sesudah deploy pertama HTML502→JSON parse gagal; buffer lama sempat dihitung lagi dan TIDAK dipakai sebagai bukti pasca-fix. Fetch diperbaiki validasi HTTP/content-type/schema; buffer baru dipisahkan. Buffer setelah deploy kedua:0readonly/identityboot/runtimeerror pada pemeriksaan, pesan masuk terlihat. Raw pesan/key/pairing/log hanya privat600.
- QA77PASS:41unified+36handler/native/similarity. Tambahan4descriptor regressions, actual repair main.js terhadap realSQLite held/canonical proxies, actual handler before→command→readonlyreply memakai socketjadibot. Transport/serializer handler masihmock, **belum acceptance balasan WhatsApp fisik**. Tidak mengirim command QA ke pengguna atau mengklaim keseluruhan bot/MMORPG selesai.
- Dokumentasi docs/JADIBOT-RESPONSE-TASK53.md/README; evidence sanitized deploy-check/task53. Uji penerimaan pengguna: kirim {prefix}menu dengan prefix aktif. Status koneksi/HTTP200 tidak dijadikan pengganti tes balasan.

- Monitoring berikutnya menemukan6error held identity dari handler260/finalizer944, **bukan boot crash** (uptime210detik,3jadibot). Perbaikan diperluas ke message defaults, finalizer, dan actual database initializer: tidak menulis default RPG saat authority aktif, tetapi limit/registration/non-RPG tetap bekerja. Regresi held-LID actual handler dibuat dahulu dan terbuktiFAIL sebelum patch, laluPASS; mutasi RPG held tetap ditolak.
- Deploy ketiga otomatis code-only melalui44target preflight/readback, bot restart diterima; handlerSHA995c93d73b5bc27fa27a7bc0061dbcd8c05ecdeae811d410c4793096e62a32ee, databaseinitializerSHAcb3ab113fe3ab9290b3f9c446e412a67d77cb4c7ac065d805c5dc5eb80479f1b. QA final78PASS=41+37. Tidak mengubah financialguard atau menyatakan held identity terverifikasi.

- Verifikasi final deploy ketiga:44/44sourceSHA live cocok;4health API/duawebsite/game200JSON. Buffer114chunk baru mencatat16chat/4command,0readonly/identity/runtime/error-message. Dua jadibot connected,2039plugin,uptime59detik; RPG245canonical/289source/292alias/199held. Ini bukti command masuk handler lagi, bukan acceptance balasan di HP. MainOFF/autoreadOFF/tanpapairing tetap.

- Final safety Task53:3998file source/23nilai privat diperiksa,0temuan; dependency symlink tidak dipublikasikan.78tesPASS,44readbackSHA cocok.


## Task54 — login MMORPG dari token Jadibot dan self-AutoAI !! (2026-10-18)

- User mengklarifikasi: login MMORPG memakai akun bot dan token dari website Jadibot, bukan mengganti login dashboard. Workspace kembali0d76f6a; patch dipreservasi privat, origin/credential helper dipulihkan dan baseline33596f8 difetch/reset. Panel.env saja diekstrak dari vault existing; tidak memulihkan DB/config/sesi lama.
- Akar silent private login: gate premium mengembalikan return sebelum plugin Realms. Handler kini menyelesaikan prefix aktif lebih awal, memberi pengecualian sempit login/link/status/putus untuk private/group-only/new user. Self-mode/blacklist/plugin-disabled dan premium gameplay lain tetap berlaku. Actual handler+Realms+SQLite regression mengeluarkan kode; group hanya instruksi private.
- Login token MMORPG: server memverifikasi token Profil melalui HTTPS endpoint platform tetap, mengambil subject hasil verifikasi, kemudian memakai mapping canonical WA yang dibuktikan kode sekali pakai. Pertama kali token+kode, berikutnya token saja. Tabel realm_web_links additive; raw token tidak disimpan. Invalid/banned/outage failclosed; origin/CSRF/ratelimit/HttpOnly cookie tetap. Tidak membuat profil RPG terpisah untuk website.
- Link/konsumsi kode/sesi atomic; konflik mapping ditolak tanpa consume kode. putus mencabut semua sesi/kode/link, bukan progres. Tidak mengandalkan owner role, nomor ketik atau API servicekey untuk bukti identitas. UI login desktop/mobile mempunyai pilihan kodeWA atau tokenJadibot, instruksi prefix, dan pembersihan fieldtoken; tautan Profil/MMORPG existing website tetap.
- Self-AutoAI khusus Jadibot: fromMe+awalanliteral!!+isi, bukan pesan sendiri biasa. Prefixaktif!/!! tidak mematikan jalur. Contohbuka menu→native dispatcher dan developer→AlzRiss, keduanya tanpa Groq call. Mention/replypengguna lain dipertahankan; dangerous/permission/disabledAI tetap. Incomingdedup+bounded outbound-ID per-socket/TTL menahanecho; skippedselfrequest tidak jatuh ke command parser.
- Tes menemukan tambahan pertumbuhan response/RPG wrapper per pesan (identity stable=false). Marker original-wrapper memperbaikinya;100pesanregresi menjaga fungsi wrapper tetap sama. Deploy code-only pertama untuk fiturnya, kedua untuk hardening ini;49target preflight/upload/readback, restartbot diterima. Tidak restartgame/website atau pairingmain.
- QA198PASS=96backend+102handler/AI/native/similarity/intent.8browserfixture desktop1440/mobile390PASS,0pageerror; actualSQLiteHTTP dan account-ID sama pada WA/link/token-only, verifier fixture. Tidak dianggap acceptance WAfisik/akunprovider nyata. Kegagalan tes awal replay karena clonefixture mewarisi replyreadonly lalu memakai text hasil rewrite diperbaiki agar mewakili serializer baru, bukan diklaim errorproduksi.
- Detail docs/REALMS-LOGIN-SELF-AI-TASK54.md, README. Artefak sanitizeddeploy-check/task54; rawlog/credential/patch/recovery hanya.secrets. MainOFF/autoreadOFF/key/sesi/progres/financialguard dipertahankan. Verifikasi live akhir menyusul di bawah.

- Verifikasi live akhir:49/49sourceSHA cocok;4healthAPI/duawebsite/game200JSON +10checksUI/aset/invalidcode401/invalidtoken401/CSRF403 lulus diAPIlangsung danproxygame. Verifikasi invalidtoken melewati verifierplatform nyata; bukan login sukses menggunakan token pengguna. Browserlive desktop/mobile6checksPASS,0pageerror, tanpa login akun. JS Realms diberi cacheversion20261018-login54 melalui uploadHTML guarded/readback tanpa restart tambahan; tes close-dialog menunggu eventclose sebelum menilai fieldtoken kosong.
- Runtime setelah restart:2jadibot tersambung,2039plugin,mainOFF/autoreadOFF/tanpapairing. Bufferbaru pada pemeriksaan108detik:11chat/3command,0readonly/identity/runtime/error-message; tidak ada bukti command Realms/self!! spesifik di buffer itu, sehingga acceptanceWAfisik tetapfalse. RPG246canonical/299source/305alias/191held pada pemeriksaan, tidak direset. Tidak mengklaim seluruhMMORPG/masterprompt selesai.

- Final recheck memakai URL JavaScript berversi yang benar-benar dimuat HTML (unversioned edgecache sempat memberi aset lama):49SHA/14livechecksPASS. Uptime332detik,37chat/6command,0readonly/identity/runtime/error-message;2jadibot. Tidak menganggap hasil cachelama atau tes dialog sebelum eventclose sebagai acceptancefinal.

- Final safety Task54:4004file source/23nilai privat diperiksa,0temuan. Dependency symlink dilepas sebelum publikasi; rawdata/log/token tidak dipublikasikan.


## Task55 — AFK tidak berakhir saat pengguna mengirim pesan (2026-10-18)

- Workspace kembali0d76f6a/2377dirty; patch disimpan privat, origin/helper dipulihkan, baselinef1b8ed7 difetch/reset. Credentialpanel saja diekstrak dari vault existing; tidak restoreDB/config/sesi stale. Ownerbuffer awal900chunk tidak memuat AFK atau runtimeerror, sehingga diagnosis dari source+reproduksi handler, bukan klaim menemukan incident spesifik dalam buffer.
- Akar implementasi: legacy users.afk, native Map awang-afk, dan imported global.afkStorage terpisah. Main/Jadibot hanya menjalankan hooklegacy; imported checkAfk tidak dipanggil compatibilitydispatcher, router native bukan jalur ini. Privateprefix/premium gate mendahului hook.
- Satu state afkStateV1 dalam JSON existing; seluruh setter/getter/clear untuklegacy/native/impor diarahkan ke service bersama. Legacy persistedrecords dimigrasikan sebelumprofilmerge; flaglama dinonaktifkan setelahstatusdisalin, bukanresetstatusmassal. Map impor dipindahkan jika masihada dalamproses; statevolatile yang hilang akibat restart lama tidak direkonstruksi.
- Maintenance AFK sebelum commandgate: pesanbaru menghapus status tepatpengirim/aliastepercaya, persistsebelumnotif. Tidak menebak PN dariangkaLID atau menggabungduaPNkonflik. Notifpakaisocketjadibot yang benar; selfmode tetapbolehdiam. Failedsend tidak mengembalikanAFK. AFKsetulang dikecualikan, prefixaktif dihormati.
- Mention/quote/statusreturn membaca state sama; dedup hook/ID dan boundedtargets. Foto/audio/stiker/dokumen tanpa caption dideteksi; history/protocol/reaction/status/echo tidak dianggapkembali, timestamp lama tidak menghapusAFKbaru. Hooklegacy menjadiadapteridempoten, nofreeconn/noNumberprototype.
- QA236PASS=25AFKunit+13actualhandler/SQLite+102dispatcher/AutoAI+96backend/Realms. Actual commandalias8jenis→chat→tag tidakmenyisakanAFK. Regresi mencakup private nonpremium/unregistered/groupOnly, aliasverified/unverified/conflict, media, reAFK, JSONrestart, sendfailure/concurrency. Serializer/transportWA masihmock; physicalacceptancebelum.
-5existingAFKsource didownload dan cocok baseline sebelumdeploy. Manifest55targetguardedpreflight/upload/readback; restartbot diterima. Updatecode-only7runtimefile, tidakdeploygame/website atau uploaduserdata/auth. MainOFF/autoreadOFF/keys/sesi/progresRPG/financialguard dipertahankan. Detaildocs/AFK-RETURN-TASK55.md danREADME; evidence sanitizeddeploy-check/task55, rawlog/patch/recovery.secrets. Verifikasi akhir menyusul.

- Verifikasi akhir:55/55sourceSHA live cocok;4healthAPI/duawebsite/game200JSON.5jadibot terhubung setelahrestart,mainOFF/autoreadOFF/tanpapairing. Uptime109detik,buffer536chunk:91chat/2command,0readonly/identity/runtimeerror/AFKnotificationfailure/AFKpersistencefailure. Belum ada AFKreturnnotice pada buffer itu, jadi physicalAFKacceptance tidak diklaim.

- Read-only persistenceprobe:afkStateV1 benar-benar tersimpan dalam databaseJSONlive (0active saatprobe),0moduleimporterror; probe tidakmenulis userdata. Final safety Task55:4008file source/23nilai privat,0temuan; dependency symlink tidak dipublikasikan.


## Task56 — slash tambahan di depan balasan bot dan AutoAI (2026-10-18)

- Workspace kembali ke snapshot lama; diff disimpan privat sebelum fetch/reset ke d7c90a0. Panel credential saja dipulihkan dari vault existing, bukan database/config/session lama. Source live simple/prefix-rewrite/auto-ai/jadibot/translator dan plugin preview diunduh; SHA cocok baseline.
- Akar terkonfirmasi lewat source dan reproduksi: `_system/_allfake.js` menyisipkan URL + `/` + 500 U+2063 + dua newline sebelum setiap plain-text reply. URL kosong menyisakan slash. Parser prefix command, response tracker, translator dan planner AI tidak perlu diubah.
- Perbaikan sempit satu runtime file: body memakai content.text apa adanya; payload fields/mention/contextInfo tetap dipertahankan. Tidak strip slash global, tidak menghilangkan command/URL/path yang sah, tidak mengubah key/prompt/config. Preview metadata tetap terpisah. Restart memastikan socket lama tidak memakai wrapper terdahulu.
- Reproduksi sebelum fix:12/13previewtes gagal. Sesudah fix:259PASS=13previewunit+25AFKunit+125dispatcher/AutoAI/AFK (termasuk10previewactualdispatcher)+96backend. Actual handler/planner/preview hook/SQLite dipakai; transportWA/serializer/providerrespons fixture, bukan acceptance perangkat pengguna. !!developer, !!menu, balasan command dengan prefix / ! !!, dan jawaban percakapan provider fixture teruji.
- Guarded code-only deploy:56targetpreflight/readback, hanya `_allfake.js` diunggah; restartbot diterima. Tidak redeploy game/website atau menimpa auth/userdata. Task55 AFK, RPG authority dan guard finansial tetap utuh. Detail docs/REPLY-PREVIEW-TASK56.md; evidence sanitizeddeploy-check/task56, rawlog/patch/vault hanya.secrets.
- Verifikasi akhir:56/56SHA live cocok,4healthAPI/website/game200JSON.5Jadibot tersambung,2039plugin, mainOFF/autoreadOFF/tanpapairing. Uptime39detik,138chunk/26chat/0command;0readonly/identity/runtime/preview/import/error-message/AFKnotification/AFKpersistenceerror. Buffer tidak membuktikan penerimaan balasan baru pada perangkat WhatsApp; physicalacceptance tetapfalse.

- Final safety Task56:4011trackedfile/23nilai privat diperiksa,0temuan; gitdiffcheck PASS, dependency symlink dilepas sebelum publikasi.


## Task57 — baca dan perbaiki error di Feedback website (2026-10-18)

- Workspace kembali snapshot0d76f6a; patch dipreservasi privat sebelum fetch/reset baseline dc8e98c. Origin/helper dipulihkan; hanya panel.env diekstrak dari vault, tidak restore database/config/sesi. Semua credential lokal diberi permission600. Live7sourceexisting diunduh dan SHA cocok baseline sebelum edit.
- Audit seluruh88feedback:81resolved,4monitoringbot (2kejadianmenu/AFKrate-overlimit dikirim kepada2penerima),3manualopen (konflikpairing, lambat, nonteknis). Latest04:52UTC, bukan klaim error baru setelahTask56.900chunklogawal tidak memuat runtime/readonly/rate-limit/ENOSPC/previewerror. Rawdata tetap.secrets.
- Reproduksi riwayat500grup menghasilkan500query metadata. store.chats.set tidak lagi queryeager; sesudahfix0query. Cache/dedup/on-demandpermission tetap, timeout8detik dan backoff pendek ketika timeout; late result tidak mengisi cache. Tidak mengaranganggota/admin atau memakai izin kedaluwarsa untuk memaksa kirim. Rate-limit WhatsApp eksternal tetap mungkin.
- Reproduksi cleaner lama menghapusauthfolder tetapi meninggalkan website reservation dan backupwebsite. Auditlive11registry/7folder/4orphan. API+cleaner kini berbagi registry; setelah15menitoffline bersihkan folderauth, folderbackup, arsiptarlokal, backupwebsite, dan reservation. Orphan tanpa waktudisconnect mendapat15menitgrace, bukan releasepaksa. Sesiaktif/akunlain/main dilindungi. Guardownershiptidakdilonggarkan; lockremoval, failedshutdown/backup/write menahanreservationdanretry, pathvalidation, corruptregistryfailclosed.
- AutoAI composing/paused tidak lagi ditunggu sehingga presencehang tidak menahanreply. Jeda buatan maksimal800ms/nolketikaautoTypingOFF; bukan totalwaktuGroq/jaringan. Delaylangkahcommandyangeksplisittetap. RegressionTask55AFK/Task56noslash dipertahankan.
- QA298PASS=29cache/history/presence/registry/cleaner(20baru+9regresi)+38AFK/previewunit+125dispatcher/AutoAI/AFK+96backend/Realms/unified+10websitetransport. Realfilesystem/tar/SQLite; WAserializer/transport/providerfixture, bukan perangkatpengguna. Cleanerunitmencakupaktif/offline/orphan,grace,reconnect,useractivity,concurrencylock,failure,pathtraversal,corruptJSON,main/otherbackup preservation.
- Guardedcode-onlydeploy59target preflight/upload/readback;7runtimefileberubah;restartbotditerima. Tidakredeploywebsite/game, tidakuploadDBatauconfig/authlama, keytidakdirotasi. Cleanupkedaluwarsa berjalan sesuaikebijakan15menit, bukan resetuserdata manual.
- Verifikasiproduksi59/59SHA,4health200JSON;7Jadibot/2039plugin,mainOFF/autoreadOFF/tanpapairingmain. Uptime34detik,288chunk/32chat/0command;0readonly/identity/runtime/rate-limit/cleaner/preview/import/error-message/AFKnotification/persistenceerror. PhysicalWhatsApp/pairingacceptancefalse.
- Probe read-only memverifikasi4orphanregistrypunya disconnectedSincepersisten, TTL900000ms, ownershiptetapditahanselamagrace. Registry11masihutuhsaatprobe; tidakmengklaim penghapusanproduksi/pairingpenggunasudahterjadi. Satuentrycleanertambahanbukanreservationwebsite dipisahkan darihitunganorphan, bukan dianggappemilikanyanghilang.
- FeedbackditulisCASmetadata+readback:6teknismonitoringdengancatatanperbaikan/batasverifikasi,1nonteknisditutupsetelahtriage,81resolvedlama tidakdiubah. Hasil82resolved/6monitoring/0open,7catatanTask57tersimpan,0driftskip. Tidakmenghapusriwayat; resolutionlama disimpan pada history.
- Detaildocs/FEEDBACK-AUDIT-TASK57.md,README; evidence sanitizeddeploy-check/task57, laporan/log/credential privat.secrets/task57. Final safety dicatat berikut.

- Final safety Task57:4016trackedfile/24nilai privat diperiksa,0temuan; gitdiffcheck PASS. Dependency symlink dilepas sebelum publikasi.


## Task58 — /amfind timeout pada tautan TikTok (2026-10-18)

- Workspace kembali snapshot0d76f6a; patch dipreservasi privat sebelum fetch/reset baseline4a32f86. Origin/helper dipulihkan; hanya panel.env diekstrak dari vault, tidakrestoreDB/config/sesi. Pluginamfindlive didownload danSHA cocokbaseline sebelumedit.
- Akar: pluginmengandalkansatuendpointbintangapi/api/amfind denganAxios timeout30detik, tanpa fallback, lalu mengirim rawerror. Tautanpendekpengguna resolve301kevideopublik; endpointamfindlama tidakmerespons pada probe16/18detik baikURLpendekmaupuncanonical, homepage200. Bukan sekadarslashterakhir.
- Jalurpublikalternatifterbukti: metadatavideo/komentarTikWM dan halaman/APIpublikTikTokterbaca; presetnyata ada dibalasankreator. KanalWhatsAppkreatoruntukXML dipisahkan, tidakdiklaimfileXMLlangsung. Tidakmenggunakan login/cookie/bypassakun.
- Helperbaruvalidasihost/path/port/protocol/credentials, Markdown/short/canonicalnormalization danredirectallowlist; responseIDmismatchditolak, numericvideoIDtetapstring. Pencariancaption/comment/reply, prioritaskanthreadpreset/kreator, attributionauthorID, tautanpenggunalainbertandabelumterverifikasi. Responsebodydibatasi, tanpa downloadberkas/thumbnailtambahan.
- Providerteramati1request/detik; antrean1,2detik, satukaliretryrate-limit,2activejob, in-flightdedup, cachepositif5menit/64key. Budget24detik/request5,5detik/max4halaman/10thread. Gagal/parsial tidakdisamarkanmenjadipresettidakada; tidaknegativecache. Reaksitidakmenahanreply. Aliasamfind/amfinder danprefixaktif tetap.
- QA337PASS=103unit/helper/regresi+128actualdispatcher/AutoAI/AFK+96backend/Realms+10transportwebsite;39tesbaru(36helper/plugin+3actualdispatcher). HTML/provider/WAfixture;SQLite/filesystemregresi nyata. ParserAcornterpisahES2020PASSuntukhelperdanplugin. Test-sourceportablemenggunakannativesyntaxcheck,tidakmenambahdependencyruntime.
- Lookupnyatadariworkspace3.139ms:49komentar+3balasan,halamanpertama,foundpresetkreator. VarianMarkdown/slashsamahasil. Setelahdeploy, diagnostikread-onlydiserverproduksi viaownerrelayterautentikasi: URLslash3.143ms, tanpaSlash2.993ms, keduanyafoundURLyangsama/sourceReply/isAuthortrue; pluginmenghasilkansatubalasandengansemualink. WAtransportmock; physicalWhatsAppacceptancefalse. Tidakmengirimpesanuji kegruppengguna atau mengubahdataakun/game/sesi; auditoperasionalrelaytetapberjalan.
- Guardedcode-onlydeploy62targetpreflight/readback;2filefitur+1diagnostikdiunggah, restartbotditerima. Tidakredeploywebsite/gameataurestoredata/config/auth;keytidakdirotasi. Task55AFK/Task56noslash/Task57cleaner/RPGguarddipertahankan.
- Verifikasi62/62SHAlive,4health200JSON;8Jadibot/2039plugin, mainOFF/autoreadOFF/tanpapairingmain. Uptime34detik,175chunk/32chat/3command;0readonly/identity/runtime/import/preview/metadata-rate/cleaner/error-message/AFKnotification/persistenceerror. BukanbuktideliveryWhatsAppfisik.
- Detaildocs/AMFIND-TIMEOUT-TASK58.md,README; sanitizedevidencedeploy-check/task58, rawprovider/log/credentialhanya.secrets/task58. TidakmerubahstatusFeedbackhistorisyangtidakterkait.

- Final safety Task58:4021trackedfile/23nilai privat diperiksa,0temuan; gitdiffcheck PASS. Dependency symlink dilepas sebelum publikasi.

## Task59 — website RPG: Attack, monster idle dan NPC (2026-10-18)

- Snapshot dipulihkan ke baseline Task58 1f4a70a setelah patch dipreservasi privat; tidak restore runtime/data produksi. Enam file game live diunduh, seluruh SHA cocok sebelum edit. Credential tetap privat600, tidak dirotasi.
- Reproduksi Playwright actual UI sebelum fix: klik kepala/badan Elder gagal; klik slime hanya berjalan, Attack disabled sebelum Interaksi; idle encounter empat detik HP100 tidak berubah. Penyebab: feet-only hitbox, encounter activation terpisah dan monster hanya counterattack.
- Server: COMBAT bersama (player550ms/enemy2200ms/range15/NPC13/aggro6/respawn2500ms); advance dalam transaksi/gate/unified store menyimpan deadline, damage, enemyTurns/event/revision. Maksimal satu overdue hit, tanpa offline burst; multitab/multiservice dedup. Death/revive, legacy/corrupt encounter, respawn/quest/region/dungeon gates tetap authoritative. NPC talk tervalidasi server, delapan percakapan/layanan, tidak percaya koordinat/damage client. Progress/receipt/idempotency/login existing dipertahankan.
- Client: antrean aksi, reject stale state, server-clock cooldown, pixel hitbox kepala/badan/label, walk-then-talk/attack/travel, Attack-to-engage, Target sekitar dan chooser overlap. D-pad/cancel/re-target tidak meneruskan rute lama. Combat target mismatch ditolak; efek damage mengikuti server.
- Tes browser lanjutan menemukan kartu quest menutupi boss/portal dan grace antar-encounter membuat klik dungeon gagal. Ringkasan quest kini pass-through kecuali link jurnal; berjalan berhenti dalam interaction range, bukan menabrak portal/boss; klik menunggu sisa cooldown. Quest/shop/heal/pet/capital/dungeon tetap berfungsi. Art/stack tidak diganti; cache app/style20261018-play59.
- Dependency/fixture QA diperbaiki: temporary native-module symlink, proxy mock advance, fixture respawn2500ms. Test UI diperbaiki untuk menunggu efek attack async dan memakai label Klaim hadiah nyata; kegagalan awal tidak dihitung PASS. Tidak inject action/planWalk atau seed progression pada suite UI.
- Final QA374PASS=103unit+141dispatcher/AutoAI/AFK/routing+120backend/Realms/unified (24baru)+10website transport. ES2020 Acorn empat source PASS.23actual UI checks PASS desktop/mobile: NPC, summon/shop/equip, quest3kills/reward, healer, two-tab idle damage, overlap portal/boss, dungeon guards/phasedboss/peti/reload, D-pad/Attack/escape, empatviewport tanpaoverflow,0JSerror. SQLite QA terisolasi; bukan akun produksi.
- Guarded code-only deploy62target preflight/readback, enam runtimefile berubah, bot restart diterima. Tidak upload previewserver/QA database/auth/config/snapshot lama atau reset progres/sesi. Game proxy menyajikan source bot yang baru; tidak perlu deploy website Vercel/replace art.
- Verifikasi produksi62/62SHA cocok, app/CSS public juga cocok, HTMLplay59, meta combatbaru/previewfalse, anonymousstate401. Empathealth200JSON;9Jadibot/2039plugin, mainOFF/autoreadOFF/tanpapairingmain. Uptime37detik,181chunk/29chat/1command;0runtime/import/readonly/identity/metadata-rate/cleaner/preview/error-message/AFKnotification/persistenceerror.
- Browser produksi mobile membuka login baru,0JSerror; tidak buat akun QA atau main menggunakan akun pengguna. Gameplay authenticated produksi/physicalWhatsApp acceptance belum diuji. Tidak mengklaim seluruh masterMMORPG selesai. Detail docs/REALMS-COMBAT-NPC-TASK59.md dan README; evidence deploy-check/task59, rawlog/credential .secrets/task59. Safety/publication dicatat berikut.

- Final safety Task59:4024trackedfile/23nilai privat diperiksa,0temuan; gitdiffcheck PASS. Temporary dependency symlink dilepas sebelum publikasi.

## Task60 — AutoAI tiap Sessions, .menu 406, .me avatar404 (2026-10-18)

- Workspace kembali snapshot0d76f6a; trackedpatch/untracked dipreservasi privat sebelum fetch/reset Task59 167a9f3. Origin/helper dipulihkan. Hanya panel.env diekstrak dari vault existing; tidak restore DB/config/auth stale atau rotasi key. Delapan source bot baseline SHA cocok, boot juga cocok; empat publicfile website cocok sebelum deploy.
- AutoAI per-sesi: bot-config.json load/sanitize/save menyimpan values.autoAI.enabled, legacyON/explicitOFF tetap. DTOsettings/sessionlist memakai profile terpilih. APIstrictboolean/ownership; toggle-only berlaku langsung tanpa restart, fieldlain/sesi lain/main tidak diubah. GlobalemergencyOFF tetap. OFF memblokir pemicu baru mention/reply/own!!; explicitcommand tetap; tidak membatalkan aksi terkirim/jadwal terdahulu.
- UI: tombol ON/OFF tiapkartuSessions dan checkboxSettings. Serverconfirmation sebelumstatusberubah; requestgeneration/sessionID+disabledform mencegahrespons sesiA terlambat menimpa B/salahsave. Backupresponse guard sama. Cache20261018-session60, tampilan/art/stackexisting tidak diganti.
- .menu: stack berhenti assertSessions→encryptquery sebelumdelivery. Source Baileys terpasang membuang PN/device tanpa LIDmapping; seluruhPNunmapped→emptykeyIQ. Reproduksi fungsi aktual menghasilkan406 pada transportfixture empty-IQ rejection. IsiIQ/mappingincidenthistoris tidak tersedia, jadi tidak mengklaim observasi langsung kondisi itu pada pesan pelapor.
- Bootexact/idempotentcompat patch sebelumimportBaileys mempertahankan PN/device asli bila mappingabsen, memakai verifiedpair sesuaiPN, deduptarget/noemptyIQ; Signalvalidation/keyinjectionnormal. Tidak menebakLID/hapusauth/bypasscrypto/mengulangpesan/mengubahrichmenu menjadierror. Unknownsourceshape tidakdioverwrite danlogreview. Fullsource dependency sesudahrestart cocokhasilpatchlokal.
- .me: hapus fallback URLplaceholder404. HelperfetchavatarHTTPSWhatsApp bounded6,5s/2MiB/redirectreject/mime+signature. Foto private/missing/404/timeout→profiltextlengkap; valid→buffer+caption. Satusend, transportfailuretetaperror tanpa duplicatefallback. Prefix/mention/progression tetap.
- QA419PASS=146unit/helper/config/photo/compat/boot+143actualdispatcher/AutoAI/AFK/routing+120backend/Realms/unified+10websitetransport/CSP.43featuretesbaru plus2existingbootregressiontambahan. AcornES2020config/helper/plugin/bootPASS (allowhashbang/TLAboot); existingAPINode22/ES2022PASS; patcheddependency nodecheckPASS. Fixturekindskip/cacheversion expectation diperbaiki setelah gagal awal, bukan menghitungfail sebagaiPASS.
-15actualbrowserchecks PASSdesktop/mobile: loginfixture/cards/AOFFtanpaB/reloaddisk/failureUI/selectedsettings/lateAresponse/saveBprefix+AI/nolJSerror. Actualsettings/configfilesystem diisolasi; auth/WA/providerfixture, bukanakunproduksi.
- Guardedcode-only66targetpreflight/upload/readback,6runtimesourceberubah; restartbotditerima, dependency patch applied exact. Tidak uploaduserdata/sesi/database. Websitepreflightpertama menolakHTMLhealth saatrestart (belumcreatedeploy), setelahhealthpulihVercel dpl_3onBuR3XjHxoRL9Cbn3JubdDnJCk READY, keduawebsitepublicapphash/cache60cocok.
- Produksi66/66SHA+patcheddependencycocok/4health200JSON/9Jadibot2039plugin/mainOFF/autoreadOFF/tanpapairingmain. Uptime68detik,301chunk/63chat/2command;0runtime/import/readonly/identity/metadata-rate/cleaner/preview/error-message/AFKnotification/persistencefailure;0not-acceptable/URLplaceholder dalam buffer. Bukanbuktideliverycommandpelapor.
- Browsermobilekeduawebsiteproduksi loginUIcache60/0JSerror; anonymousGET+POSTsettings401. TidakbuatakunQA/toggleakunpengguna di produksi. Task59Realmsplay59/metadata/auth/sourcepublik tetapcocok. Retensisessionoffline15menit/progres/keys/financialguards dipertahankan.
- Dokumentasidocs/SESSION-AUTOAI-MENU-PROFILE-TASK60.md+README; evidence deploy-check/task60, rawlog/dependency/credentialhanya.secrets/task60. Authenticatedproductiontoggle/physicalWhatsAppacceptance belumdiklaim. Safety/publikasi menyusul.

- Final safety Task60:4032trackedfile/23nilai privat diperiksa,0temuan; gitdiffcheck PASS. Temporary dependency symlink dilepas sebelum publikasi.

## Task61 — AutoAI lebih natural sebagai teman ngobrol (2026-10-18)

- Workspace kembali0d76f6a/2377dirty; trackedpatch/untracked dipreservasi privat sebelum fetch/reset Task60 7ecc870. Hanya panel.env diekstrak dari vault existing dan Groqconfigexisting didownloadprivat; tidakrestoreDB/auth/configstale/rotasikey. EmpatsourceAI/handlerlive SHA cocokbaseline.
- Diagnosis: planner hanya melihat pesanbaru+kutipan300karakter, tanpa kontekspercakapan. Semua pesan membawa routingfitur; fallbackkosong meminta namacommand. Prompt lama sudah menyebut santai tetapi belum punya aturan mendengarkan/kontinuitas konkret. Ini bukan fine-tuning/bobotbaru/datasettrainingpengguna.
- Voiceprompt lebih spesifik: ikutigayapengguna, singkatkecualidimintarinci, emojitidakwajib, dengarkan sebelumsolusi, palingbanyaksatupertanyaanrelevan, jangan menutupsemuapesandenganpertanyaan/fitur, jujurAI tanpa identitasmanusia/relasieksklusif. Bedakanfaktapengguna dan dugaanAI; sensitivity/safety tetap.
- Localchat-only gate untukcurhat/pertanyaan/basabasiberkeyakinantinggi: kandidatkosong/satucall/tanpasearchkedua, commandmodeldiblokir. Permintaantindakaneksplisittetaprealrouting/prefix/permissions/nativehandler/schedule, tidakmengklaimhasilsebelumeksekusi. Cooldownlebihnetral; providerbudget/fallback/trigger/dedup tetap.
- RAMcontextper(scope,chat,sender):128thread/fourpairs/800charperbagian/history2400char,TTL20menitsejakcommit/sweep60detik+onaccess. Tidakmembaca seluruhhistoryWA/menulisDBbackupkonteks. Polakey/Bearer/labeledpassword/token/OTPdisamarkan. Tidakmenebak PN=LID. Hanyajalurkirimyangresolvedsuccess dicatat; bukanbuktipenerimaan/readreceiptHP.
- Lupakanobrolan lewatmention/reply atauown!!, tidakpakaiGroq/tidaktertahancooldown. MenghapusRAMsendiri,bukanpesanWA. Auditlanjutanmenemukanraceketikaforget saatprovidermasihpending: ticketkini dibuatsebelumcall, lateanswer tidakmenyalakanmemoriulang; responseketikatypingpause jugadibatalkan. Aksiyangsudahterkirimtidakditarikulang.
- QA451PASS=177unit/helper/conversation+144actualdispatcher/AutoAI/AFK/routing+120backend/Realms/unified+10websitetransport.32tesbaru(31memory/privacy/curhat/delivery/forgetrace+1actualhandlercontinuity). WA/providerfixture padaunit; SQLite/filesystemnyata. ES2020empatmodulAI PASS setelahnumericseparator dinormalisasi(nilaisama); handlerexistingES2022/Node22PASS.
- LiveGroqevalpesansintetis: baseline tidakmengingatpresentasibesok, pernahfallbackmenanyakancommand; versi baru menyebutpresentasibesok padafollow-up danterimakasih tanpaaksi. Tigasampelakhir459/301/368ms,prompt850/903/934tokens. BukanSLA/fine-tuning/deliveryHP; tonekadangmasihbertanyatambahan, tidakdiklaimsempurna. Tidakmengirimpesanuji kekontak/gruppengguna.
- Guardedcode-only67target,5runtimefileupdate; follow-up3fileuntukforgetrace/restartkedua. Final67/67SHAcocok/4health200JSON/9Jadibot2039plugin/mainOFF/autoreadOFF/tanpapairingmain. Uptime22detik,122chunk/17chat/0command;0runtime/import/readonly/identity/metadata-rate/cleaner/preview/error-message/AFKnotification/persistencefailure. PhysicalWhatsAppacceptancefalse.
- Task60toggleper-session/sourcewebsession60/vendorpatchhash/avatarfix tetap; Task59Realmsplay59/metadata/auth/publicfilescocok. Tidakdeployulangwebsite/game atau uploaddata/auth, tidakresetprogres/keys/financialguards/retensisession15menit.
- Docs/AUTOAI-CONVERSATION-TASK61.md+README; evidence deploy-check/task61, credential/rawlog .secrets/task61. Catat batasmemori/trigger dan bukanpelatihanulangmodel. Safety/publikasi menyusul.

- Final safety Task61:4035trackedfile/24nilai privat diperiksa,0temuan; gitdiffcheck PASS. Temporary dependency symlink dilepas sebelum publikasi.

## Task70 — Ekosistem multi-app: panel live, bot Telegram menunggu token (2026-10-19)

- Kode Task70 (backend `lib/platform/*`, adapter Telegram, REST `/api/platform-system`, gateway web `api/ecosystem.js`, panel `/platform`) sudah di-commit `4b647e5` + `a520d2a` di `origin/main`.
- Produksi bot (panel `ikyyxbeyy-panel.voltxyz.my.id`, server `d178bf71` serverjadibotVip): 18 file `lib/platform/**` diunggah, `/main.js` dipatch (`startPlatform()`, `stopPlatform()` pada SIGTERM/SIGINT), `/lib/jadibot-platform-api.js` dipatch (route `/api/platform-system` sebelum route lain), dan `/.platform.env` dibuat (chmod ketat) berisi `PLATFORM_SECRET_KEY`, `PLATFORM_API_SECRET`, `PLATFORM_MEDIA_SIGNING_KEY`, `PLATFORM_PUBLIC_BASE_URL`, `PLATFORM_WEB_URL`, `TELEGRAM_MODE`, `TELEGRAM_BOT_LABEL`. Nilai rahasia tidak ditulis di laporan ini.
- Restart panel 204. Log boot Node v22.23.3: better-sqlite3 + canvas tersedia, `[boot] menyerahkan ke main.js`, lalu `[PLATFORM] TELEGRAM_BOT_TOKEN belum diisi — adapter Telegram tidak dijalankan.` Artinya modul platform termuat, migrasi skema jalan, hanya token bot yang belum ada.
- Bukti REST hidup: `GET https://api.gwenna.my.id/api/platform-system/health` → 200 `{"ok":true,"schema":2,"secretKey":true,"telegramTokenConfigured":false}`; tanpa `x-platform-secret` → 401; `POST /bootstrap` dengan secret → 200 berisi `userId`, `role`, `permissions`.
- Website dideploy produksi: `/platform` → 200 HTML panel; `/api/ecosystem/session` tanpa bearer → 401 JSON (gateway menolak sebelum menyentuh bot). Env Vercel `PLATFORM_API_SECRET` disamakan dengan nilai server.
- Panel diuji dengan jsdom (mock transport, data contoh realistis): 19 pemeriksaan lulus, 0 error JS. Bukan uji login produksi.
- Token Telegram asli sudah dipasang di `/.platform.env` (nilai tidak pernah dicetak ke log/chat ini) dan panel di-restart. Log: `[TELEGRAM] @AlzRiss_bot polling aktif (bot main).`
- Bukti pemrosesan nyata dari database produksi: `telegram_bots` berisi bot `main` (@AlzRiss_bot, status online, token tersimpan sebagai ciphertext `v1:`), `telegram_updates` berisi 8 update tertunda yang langsung diproses, `platform_meta.telegram_offset:main` tersimpan (711926245), dan `platform_users` mendapat pengguna Telegram baru `pu_8831fa2ffb4003f0` dari identitas `8932455242`.
- `TELEGRAM_OWNER_IDS` diisi ID pemilik sehingga perintah pengelola terbuka untuknya. `TELEGRAM_ADMIN_IDS` sengaja TIDAK diisi: sistem backup memakai nama itu untuk menjalankan poller Telegram sendiri, dan dua poller pada satu token akan saling berebut update.
- Belum terverifikasi: balasan perintah di chat (butuh pengguna mengirim /start), aksi daya server ke panel hosting, login owner di panel web.
- Catatan: satu pengguna uji `web:smoke-0001` dibuat lewat `/bootstrap` saat verifikasi REST; tidak punya identitas/WhatsApp, aman dihapus manual bila perlu.

### Perbaikan: tombol menu Telegram "Aksi tidak tersedia" (2026-10-19)

- Penyebab: `menuKeyboard()` membuat callback dengan aksi `menu.status`, `menu.profile`, `menu.saham`, dst., sementara router hanya mendaftarkan `menu.nav`. Token valid, tetapi `callbackActions.get(action)` kosong sehingga setiap tombol dibalas "Aksi tidak tersedia".
- Perbaikan: semua tombol menu memakai `menu.nav` + payload `{ view }`; navigasi menu boleh ditekan ulang (tanpa efek samping, tetap terikat pemilik dan TTL 10 menit) dan token menu lama yang sudah `used_at` juga diterima; tombol lama berskema `menu.<view>` diarahkan ke handler yang sama. Aksi berdampak (trade, stop jadibot, start/stop/restart server) tetap sekali pakai. Callback tanpa handler kini dicatat `telegram.callback.unhandled`.
- Tes: 77 platform (4 tes menu baru) + 51 backup + 8 gateway. Dua file (`telegram/commands.js`, `telegram/router.js`) diunggah ke server produksi, restart 204, log `[TELEGRAM] @AlzRiss_bot polling aktif (bot main).`
- Catatan: tombol pada pesan /menu yang dikirim >10 menit lalu akan dibalas "kedaluwarsa"; kirim /menu baru.

## Task70 lanjutan — owner ganda, to-URL permanen, fitur baru, arsip Telegram (2026-10-19)

- Akses penuh: `TELEGRAM_OWNER_IDS=8932455242,7872304892` di `/.platform.env` server. `resolveContext` sekarang menaikkan role tersimpan bila env memberi role lebih tinggi (`outranks`), jadi akun lama ikut menjadi owner pada pesan berikutnya tanpa migrasi manual. `TELEGRAM_ADMIN_IDS` tetap kosong agar sistem backup tidak menjalankan poller kedua.
- To-URL permanen: `platform_media.expires_at` NULL, tautan bertanda tangan memakai `e=0` (tanpa kedaluwarsa), `pruneExpired` hanya menghapus media bertanggal. Tombol "Hapus berkas" di balasan upload, plus `/files` untuk daftar + hapus. API `POST /media/:id/link` default permanen; `?permanent=0` untuk mode 7 hari.
- Fitur baru Telegram: `/files`, `/health`, `/admin chats`. Panel web: tab **RPG** (profil + papan peringkat dari mesin yang sama) dan **Saham** (data dari service yang sama), badge "permanen" pada media.
- Skema database naik ke **v3** (`platform_chats`) untuk mencatat grup/chat yang dilihat bot; `GET /api/platform-system/chats` (owner/developer) mengembalikan daftarnya. Verifikasi produksi: `health` → `schema:3`.
- Tes: **85 platform** (8 tes baru: media permanen, prune, role env, chat) + 51 backup + 8 gateway = **144 lulus**. Panel diuji jsdom (RPG/Saham/media) 0 error JS.
- Deploy: 19 file `lib/platform/**` + `chats.js` diunggah, `.platform.env` diperbarui, restart 204, log `[TELEGRAM] @AlzRiss_bot polling aktif (bot main)`. Website produksi dideploy ulang (`/platform` 200, `assets/platform.js` memuat loader RPG & Saham).
- Arsip workspace: `umi-source-20261019-1546.tar.gz` (37 MB) dikirim ke chat pribadi owner lewat `sendDocument` — diterima Telegram, `file_size 38599773`, `file_id` tercatat. Arsip grup "BackUp" menunggu `chat_id`: bot harus ditambahkan ke grup dan mengirim satu pesan di sana agar `platform_chats` mencatatnya.
- Workspace dibersihkan (~200 MB artefak lama: `restore/`, `asset-src/`, `deploy-check/`, `nuclei-templates/`, `image-search/`, `live*/`, `monitor-bot/`, `_asset_preview/`, preview HTML). Repo kerja dan `.secrets` sengaja dipertahankan karena masih dipakai; seluruh source sudah ada di GitHub + arsip Telegram.

### Arsip workspace ke grup Telegram BackUp (2026-10-19)

- Grup "BackUp" sudah terdeteksi bot: `chat_id -1004393450575`, tipe `supergroup`, judul `BackUp` (tercatat di `platform_chats`, skema v3). Bot punya izin `can_send_documents`.
- Arsip pertama terkirim: `umi-workspace-20261019-155755.tar.gz` — **44 131 471 byte**, `message_id 22`, `file_id BQACAgUAAyEGAAMBBd68TwADFmrWPgxIhb2wgIql3eGGICgVubLgAAItJgACrMaxVjvsE2SEY6BvPQQ`.
- Isi arsip: 4 899 entri (seluruh workspace: repo, docs, laporan, `.secrets`), tanpa `.git` dan `node_modules`. Kredensial ikut karena grup privat (owner + bot) dan tujuannya agar sesi berikutnya bisa lanjut tanpa kehilangan akses; gunakan `--no-secrets` bila tidak diinginkan.
- Alat permanen: `tools/push-workspace-backup.mjs`. Perintah: `node tools/push-workspace-backup.mjs` (default kirim ke BackUp, retensi lokal 3 arsip, `manifest.json` dicatat). Opsi `--no-secrets`, `--chat`, `--root`.
- ID owner `8932455242` sudah berstatus **owner** di `platform_users` (role dari `TELEGRAM_OWNER_IDS` naik otomatis). `7872304892` akan menjadi owner pada pesan pertamanya.
- Kredensial panel bot disimpan di `.secrets/panel-bot.env` (600) agar tidak perlu diminta ulang saat workspace reset.

## Task70 batch 5 — panel dari bot, RPG tanpa WhatsApp, game, paritas plugin, banner video (2026-10-20)

- **Panel hosting bisa diatur dari bot** (`/panel`): `set url https://panel.domain.tld`, `set ptlc ptlc_…`, `set ptla ptla_…`, `set server d178bf71`, `test`, `hapus`, `web`. Hanya owner/developer (`server.panel.manage`). Kredensial disimpan **terenkripsi AES-256-GCM** di `platform_meta` (`panel.url|client_key|application_key|server_id`); yang ditampilkan hanya `mask()` (`ptlc***…abcd`). Pesan yang memuat kunci **dihapus** dari chat tepat setelah diproses.
- Slot server 1 otomatis dibuat dengan `credential_ref = PANEL_MANAGED` setelah url + ptlc + server id lengkap, sehingga mesin slot/audit/allowlist aksi/panel web yang sudah ada langsung memakainya — tidak ada jalur kedua. `resolveCredential()` membuka kunci terkelola saat dipakai; `isConfigured()` menolak slot bila kunci tidak bisa dibuka.
- **RPG Telegram tanpa WhatsApp**: `rpgJidFor()` memakai nomor WA bila sudah tertaut, kalau belum memakai nomor platform semu `999` + 10 digit ID Telegram (13 digit, stabil, tidak mungkin bentrok dengan nomor WA asli). `ensureProfile()` membuat baris `rpg_users` di engine yang sama (`transaksi + idempotensi`), profil dibuat otomatis saat `/rpg` pertama kali.
- **Game di Telegram**: `/rpg kerja` (koin + EXP, cooldown 30 menit, hadiah dihitung di dalam transaksi engine), `/rpg tebak` (tombol 1–4, hadiah 150 koin + 60 EXP, sekali per ronde lewat `rpg_unified_commands`), `/rpg harian`, `/rpg top`. Saham memakai nomor platform yang sama (auto-register `bot/register` → `code-login`), jadi pengguna Telegram juga bisa transaksi tanpa menautkan WhatsApp.
- **Paritas fitur WhatsApp → Telegram**: `telegram/plugin-bridge.js` menjalankan `global.plugins` yang sama dengan `m`/`conn` bergaya Baileys yang pengirimannya diterjemahkan ke Telegram (teks WA markdown → HTML Telegram, media URL/buffer → `sendPhoto/Video/Document`, timeout 45 detik, error WA-only dijelaskan jujur). Perintah `/baru` di router platform dicoba ke plugin dulu; `.menu` dan `/menu` sama-sama diterima; `/fitur` menampilkan jumlah plugin & perintah yang bisa dipakai. Plugin bertanda `owner` tetap dijaga RBAC database. Router tetap memenangkan nama perintah yang sudah dimiliki platform (mis. `/panel`, `/rpg`).
- **Banner video saat menu**: `telegram/banner.js` mengunduh sekali dari `PLATFORM_BANNER_URL` ke `data/platform/banner/menu.mp4` (maks 45 MB, hanya `video/*`), mengunggahnya lewat multipart, lalu menyimpan `file_id` di `platform_meta` supaya `/menu` berikutnya tidak mengunggah ulang. Bila gagal, menu tetap tampil sebagai teks (tidak pernah gagal diam).
- **Verifikasi nyata**: `upload()` multipart diuji ke Bot API asli — video 4 524 336 byte diterima (`message_id 29`, `1280×720`, 11 detik, `file_id` diperoleh), lalu pesan uji dihapus. `getMyCommands` di bot produksi menampilkan `fitur` dan deskripsi `/panel` baru → membuktikan kode yang berjalan adalah versi ini. Health `{"ok":true,"schema":3}`.
- **Deploy**: 10 file `lib/platform/**` + `telegram/{banner,plugin-bridge}.js` ditulis lewat panel API (endpoint `files/write` panel ini menerima **raw body**, bukan multipart — sebelumnya multipart membuat berkas kosong), tiap file dibaca ulang dan dibandingkan **identik**. `.platform.env` ditambah `PLATFORM_BANNER_URL`. Restart 204.
- **Tes**: **105 platform** (20 tes baru di `tests/platform/batch5.test.mjs`: panel simpan/masker/validasi/test/hapus, identitas RPG Telegram, kerja & hadiah idempoten, banner cache + unduh, bridge plugin & format, router `.menu`) + 51 backup + 8 gateway.
- **Belum terbukti / batas jujur**: (a) balasan chat Telegram untuk `/panel set`, `/rpg kerja`, `/fitur` belum diuji dari akun Telegram sungguhan — yang terbukti adalah kode terpasang + registry perintah produksi; (b) banner baru benar-benar terkirim saat `/menu` pertama dipanggil pengguna (unduhan+unggah sekali); (c) plugin yang butuh socket WhatsApp (admin grup, stiker WA, button native, mention) tetap tidak jalan di Telegram dan dilaporkan sebagai error, bukan tombol palsu.

### Verifikasi tambahan batch 5

- **Panel diuji ke panel hosting sungguhan** (bukan mock): `savePanelConfig()` + `testPanel()` dari modul yang sama dengan `/panel test` → `{"ok":true,"status":200,"latencyMs":488,"username":"serverjadibot","admin":false}`. Nilai yang tampil hanya `ptlc************************vF6M`.
- **Banner sudah ada di server**: `POST files/write` dengan **body biner** (`application/octet-stream`) menulis `/data/platform/banner/menu.mp4` sebesar **4 524 336 byte**; diunduh kembali lewat signed URL dan dibandingkan — **SHA-256 identik** (`8475d6875387b9cc…`). Jadi `/menu` pertama tidak perlu mengunduh dari URL (fallback `PLATFORM_BANNER_URL` tetap ada).
- **Gate plugin**: `handler.owner` → owner/developer, `handler.admin` → admin ke atas, `handler.premium` → ditolak jujur (belum ada langganan tercatat di platform). Semua keputusan memakai `ctx.role` dari database.

## Task70 batch 6 — menu kategori (game/fun/maker/stiker/grup/owner/…), RPG hub, saham diperbaiki (2026-10-20)

**Keluhan user:** "fiturnya dikit, RPG cuma profil, saham cuma kasih URL website, mana menu group/maker/stiker/owner/game/fun".

**Akar masalah saham (ditemukan, bukan tebakan):**
1. `stock.market()` membaca `stocks[].symbol`, sedangkan API UMI TRADE membalas `{ symbols: [{ sym, price, changePct, … }] }`. Hasilnya daftar kosong → pesan tinggal berisi baris "Sumber: https://game.gwenna.my.id" (inilah "saham kasih URL").
2. `lib/webgame.json` **tidak ada di server**, jadi token game hilang → portofolio/transaksi mustahil. Sudah dipasang (`{baseUrl, token, enabled}`, mode 600, di luar git).

**Perbaikan:**
- `stock.js`: menerima bentuk baru & lama (`symbols`/`stocks`, `sym`/`symbol`, `changePct`/`changePercent`, `prevClose`), leaderboard membaca `richest[]`, ada `high/low/sector`.
- `/saham` sekarang menampilkan sesi pasar + 12 emiten paling bergerak dengan harga & persen nyata; `/saham <KODE>` detail emiten; `/saham me` portofolio + posisi; `/saham top` peringkat; `/saham beli|jual KODE LOT` dengan tombol konfirmasi. Bila API gagal, pesan error asli ditampilkan (tidak ada angka karangan).
- `lib/platform/telegram/catalog.js` (baru): katalog dari `global.plugins` — sumber yang sama dengan bot WhatsApp. Mendukung plugin berupa `{handler}` **dan** fungsi handler langsung (penyebab katalog sempat terbaca 0), melewati plugin `disabled`, mengambil `help/tags/limit/owner/admin/premium`, dan menyusun kategori + halaman 12 perintah.
- Menu Telegram: `/menu` (tombol kategori), `/menu game|rpg|fun|maker|stiker|grup|owner|alat|ai|…`, `/allmenu`, `/cari <kata>`, `/fitur` (ringkasan + per kategori). Tombol kategori memakai `menu.nav` payload `cat:<id>:<halaman>` dan `cmd:<perintah>:<arg>`.
- `/rpg` sekarang **hub**: ringkasan profil + tombol (profil/inventori/harian/peringkat/semua game) + daftar game yang benar-benar ada. `/rpg <game>` menjalankan plugin RPG WhatsApp lewat jembatan (mis. `/rpg mancing`).
- `plugin-bridge.js`: `conn` shim jauh lebih lengkap (`sendMessage/sendFile/relayMessage/sendSticker/waUploadToServer/getName/groupMetadata`), semua bentuk isi Baileys diterjemahkan (teks, caption+media, react, poll, tombol native), `m.sender` = JID mesin RPG bersama, `m.isGroup` mengikuti chat Telegram, `setMessageReaction` ditambahkan ke klien.
- `unified-store.js`: bug produksi WhatsApp "Transaksi RPG telah ditutup." (409) — penulisan yang terjadi setelah konteks transaksi ditutup (tugas async sisa perintah sebelumnya) sekarang dijalankan di luar transaksi, bukan dilempar sebagai error ke pengguna.

**Verifikasi nyata (dijalankan di server, bukan mock):**
- `/health` produksi: `catalog: { plugins: 2031, categories: 25 }`.
- Uji perintah dengan 2051 plugin termuat: `/menu game` → "115 perintah · halaman 1/10"; `/menu stiker` 33 (3 halaman); `/menu maker` 81 (7 halaman); `/cari sticker` 20 hasil; `/allmenu` semua kategori.
- Kategori terhitung: game 115, rpg 299, fun 185, maker 81, sticker 33, tools 226, group 152, owner 162, ai 106, downloader 34, search 90, anime 53, … (total 2031).
- `/rpg` hub render normal; `/rpg mancing` **benar-benar bermain**: "Kamu mendapat: Nila · Reward 121 koin · Balance 121 koin" — memakai plugin & data RPG yang sama dengan WhatsApp.
- `/saham` produksi: 45 emiten, KLBF +32.93%, PTBA +29.51%, ITMG −24.07%, sesi "Pasar normal 24 jam (WITA)"; `/saham top` menampilkan 10 trader teratas dari API.
- Tes: **108 platform** (2 tes katalog baru: plugin berupa fungsi & plugin disabled) + 51 backup + 8 gateway.

**Catatan deploy (penting):** API key panel `ikyyxbeyy-panel` sekarang **ditolak 401** (dirotasi). Deploy batch ini memakai kanal owner-agent relay (HMAC ticket, aud `owner-agent`) dengan unggah gzip+hex per potongan dan verifikasi SHA-256 per berkas. Alat panel baru: `tools/panel-api.mjs` (dokumentasi: `files/write` panel ini menerima **raw body**, multipart menghasilkan berkas kosong). Beri `ptlc_…` yang baru bila ingin deploy lewat panel lagi.

**Batas jujur:** fitur yang butuh socket WhatsApp (admin/anggota grup, stiker WA asli, button native, quoted) tetap tidak bisa dan dijawab sebagai error jelas; plugin `premium` ditolak karena belum ada langganan tercatat di platform; jumlah perintah mengikuti plugin yang termuat (bisa berubah bila plugin ditambah/dinonaktifkan).

## Task70 batch 7 — fitur Telegram yang tadinya mati, brat jalan, ganti halaman mengedit pesan (2026-10-20)

**Keluhan user:** "benerin fitur yang gabisa di telegram, buat brat berfungsi, dan setiap ganti halaman bot harus ganti halaman di pesan itu, bukan bikin pesan baru".

**Akar masalah (dicek di kode, bukan tebakan):**
1. `conn.sendSticker` di jembatan Telegram belum ada sama sekali → plugin `brat` (dan 33 plugin stiker/maker lain) gagal di Telegram. Setelah ditambahkan pun masih salah: API brat membalas **PNG** (`content-type: image/png`, 61 767 byte), sedangkan Telegram hanya menerima **WEBP** untuk `sendSticker`.
2. `m.quoted` selalu kosong karena `reply_to_message` tidak pernah dibaca → plugin "reply gambar" (qc, sticker, tourl, dll.) menolak dengan "Reply gambar / sticker".
3. `groupMetadata` hanya stub (daftar anggota kosong) → plugin grup yang memeriksa admin/anggota berhenti lebih awal.
4. Tombol halaman memanggil `ctx.send` → tiap klik kirim pesan baru, pesan lama menumpuk.
5. Foto/video dengan caption perintah (`/sticker`, `/tourl`, `/bratvid`) diabaikan router karena hanya `message.text` yang diparse.

**Perbaikan:**
- `client.js`: `sendStickerFile` (multipart `sendSticker`), `callMultipart`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserProfilePhotos`, `banChatMember`, `unbanChatMember`, `promoteChatMember`, `restrictChatMember`.
- `plugin-bridge.js`:
  - `sendSticker` menerima Buffer: WEBP/GIF → stiker; PNG/JPEG → dikonversi **webp 512px** via `sharp` (dependensi bot) lalu dikirim sebagai stiker; bila konversi gagal → foto; selain itu dokumen. URL/`{url}` juga didukung.
  - `sendAlbum` (kirim berurutan, isi tetap).
  - `groupMetadata`: admin nyata dari `getChatAdministrators` + jumlah anggota `getChatMemberCount` (JID semu `999<id>@s.whatsapp.net`, `creator` → `superadmin`).
  - `groupParticipantsUpdate`: remove (ban+unban), promote, demote; `add` ditolak jujur (Bot API tidak bisa menambahkan orang lain).
  - `groupSettingUpdate`: dijawab jujur bahwa mode "hanya admin" tidak tersedia untuk bot Telegram.
  - `profilePictureUrl`: `getUserProfilePhotos` → unduh → simpan media bertanda tangan → URL (cache 10 menit).
  - `m.quoted` dibangun dari `reply_to_message` (teks/caption + foto/video/stiker/dokumen/audio) dan `quoted.download()` memakai `getFile` sungguhan.
- `router.js`: caption diparse sebagai perintah; `handleFreeText` melewati media bercaption.
- `poller.js`: context membawa `callbackMessageId`, `chatTitle`, `chatType`, `rawMessage`.
- `commands.js`: `sendCategory` + `withEditInPlace` — semua navigasi menu (`cat:`, `status`, `profile`, `allmenu`, `help`, dll.) mengedit **pesan yang tombolnya ditekan**; kalau edit gagal (pesan dihapus/terlalu lama) barulah kirim pesan baru. Balasan tambahan (mis. hasil perintah) tetap pesan normal.

**Verifikasi nyata (server produksi, grup BackUp, pesan uji dihapus lagi):**
- `brat`: plugin dijalankan lewat jembatan → `{handled:true, plugin:'maker/brat.js'}` dan pesan yang terkirim **benar-benar stiker** (`sticker.file_id` ada). Jalur buffer langsung: 61 767 byte PNG → 200 OK, `sticker` terisi.
- Ganti halaman: `/menu` (1 pesan) → tekan tombol **status** → `sends+0, edits+1`; tekan **allmenu** → `sends+0, edits+2`. Halaman kategori: kirim halaman 1 (id 41) lalu minta halaman 2 → `{edited:true, page:2, pesanBaru:0, idSama:true}`.
- `m.quoted`: balasan ke stiker → `mtype=stickerMessage`, `isMedia=true`, `download()` = 61 767 byte (sama dengan berkas asli).
- Metadata grup: `getChatAdministrators` 2 admin, `getChatMemberCount` 3 anggota.
- Tes: **123 platform** (108 lama + 15 baru di `tests/platform/batch7.test.mjs`) — 123 pass / 0 fail. Dua bug ikut ketemu & dibetulkan oleh tes: `quoted.msg` getter-only yang bikin crash saat ada reply, dan `sendSticker` yang mengirim PNG sebagai foto.

**Batas jujur:**
- `sendSticker` butuh `sharp` untuk konversi PNG/JPEG; di server terpasang, kalau di mesin lain tidak ada maka hasilnya foto (fitur tetap jalan, hanya bukan stiker).
- Menambahkan orang lain ke grup (`participantsUpdate: add`) dan mode "hanya admin" tetap tidak bisa lewat Bot API — dijawab jujur, bukan pura-pura berhasil.
- Plugin yang memang khusus WhatsApp (socket, pairing, button native) tetap ditolak dengan pesan jelas.

**Lanjutan batch 7 (setelah uji live pertama):** dua hal lagi yang ketemu saat verifikasi:
1. Menu (`/start`, `/menu`) mengirim **banner video dengan tombol menempel** di pesan yang sama. Pesan video tidak punya teks, jadi `editMessageText` selalu gagal → navigasi tetap membuat pesan baru. Sekarang banner dikirim **tanpa tombol** (caption singkat) dan pesan **teks menu** yang memegang tombol, sehingga yang diedit selalu pesan teks.
2. Untuk menu lama yang sudah terlanjur berupa video+tombol, `renderInPlace` mencoba `editMessageText` → gagal karena tidak ada teks → **`editMessageCaption`** (bila teks ≤1024) → baru kirim pesan baru.

Verifikasi live ulang (server, grup BackUp, pesan dihapus): `/start` → **2 pesan** (video id 44 tanpa tombol, teks menu id 45 dengan tombol); tekan tombol **status** → `sends+0, edits+1`; tekan kategori **game halaman 2** → `sends+0, edits+1`. Tes: **125 platform** (17 di `batch7.test.mjs`), 0 gagal.

## Task70 batch 8 — menu dipadatkan: satu fitur = satu entri, opsi + deskripsi (2026-10-20)

**Permintaan user:** "fiturnya kasih ringkas aja, kalau emang bratvid2 gausah, umi-stiker hapus aja biar lebih ringkas, tapi kalau ada fitur yang sama kasih opsi ke user + deskripsi setiap opsi".

**Yang dilakukan (tanpa menghapus satu plugin pun):**
- `lib/platform/telegram/features.js` (baru): `FEATURE_GROUPS` (10 keluarga fitur: brat, stiker dari gambar, paket stiker, unduh, musik, AI tanya-jawab, AI gambar, pesan palsu, logo, anime) berisi daftar opsi + catatan deskripsi per opsi; `HIDDEN_COMMANDS` (varian yang membingungkan: `bratvid2`, `brat2`, `bratanya`, `bratpick`, `bratgreen`, `bratgura`, `kannabrat`, `bratcewek`, `bratextra`, `bratwhite`, salinan `stikerwa`, perintah uji `tes/bot/ping`); `HIDDEN_CATEGORIES` (`umi-extra`, `pelengkap`, `data`, `notif`, `_system`).
- `catalog.js`: item punya penanda `hidden`. Item tersembunyi **tidak** muncul di menu/kategori/pencarian, tetapi **tetap terdaftar** di `byCommand` sehingga masih bisa dipanggil dengan mengetik perintahnya — tidak ada fitur yang dimatikan. Varian dalam satu keluarga fitur hanya menampilkan perintah utama.
- `catalog.js`: `functions()` mengelompokkan fitur (satu perintah hanya muncul di satu grup, jadi `/spotify` tidak dobel), `findFunction()` mencari grup dari id/perintah.
- `commands.js`: `sendFunction()` — satu halaman per keluarga fitur, tiap opsi **bernomor + deskripsi** dan tombol `/perintah`; `sendOption()` — kartu satu perintah (cara pakai, deskripsi, tombol ▶️ Jalankan + ↩️ Semua opsi). Keduanya memakai `renderInPlace` sehingga mengganti halaman **mengedit pesan yang sama**.
- Menu utama sekarang menaruh **8 tombol fitur populer** di atas dan hanya **6 kategori** (sebelumnya 10), supaya tidak penuh.

**Verifikasi nyata di server (2 051 plugin termuat):**
- Katalog: **1 686 item / 21 kategori** (sebelumnya 1 691/25) karena varian + `umi-extra`/`pelengkap` disembunyikan.
- `functions()`: **10 grup / 77 opsi**, contoh: brat → `/brat` (hitam-putih biasa), `/bratvid` (versi bergerak), `/cewekbrat` (gaya karakter perempuan); unduh → 16 opsi (fb, ig, tiktok, ytmp4, ytmp3, aio, …); AI gambar → 7 opsi.
- Tidak ada opsi dobel (dicek otomatis), `/brat`, `/bratvid`, `/stiker`, `/play`, `/fb`, `/aiimg`, `/qc` semuanya ada di menu; `bratvid2`/`bratanya` tetap bisa dipanggil tapi tidak tampil; kategori `umi-extra` tidak tampil.
- Live di grup BackUp: `/menu` → tekan **fitur brat** → `sends+0 edits+1`; kartu opsi **bratvid** → `sends+0 edits+1`; **halaman 2 unduh** → `sends+0 edits+1`; **fitur stiker** → `sends+0 edits+1`. Total 4 klik, 0 pesan baru.
- Health setelah restart: `catalog {plugins: 1686, categories: 21}`.
- Tes: **135 platform** (10 tes baru di `tests/platform/batch8.test.mjs`), 0 gagal.

**Catatan:** perintah yang disembunyikan tetap hidup (`/bratvid2` bisa diketik). Kalau nanti ingin benar-benar menghapus plugin, cukup hapus berkasnya — tetapi batch ini sengaja tidak menghapus agar tidak ada fitur yang hilang.

## Task70 batch 9 — fitur khusus WhatsApp dihapus dari Telegram (tetap hidup di WA & jadibot) (2026-10-20)

**Permintaan user:** "fitur yang ga support di telegram seperti game catur yang rich HTML khusus WA sama fitur lain hapus aja di bot telegram, tapi pertahanin di bot whatsapp jadibot".

**Akar masalah:** 36 plugin mengirim `richResponseMessage`/`botForwardedMessage` — pesan HTML/JS interaktif yang dirender aplikasi WhatsApp (papan catur, tetris, snake, dino, tetris, slots, dll.). Bot API Telegram tidak punya jenis pesan ini; jembatan hanya bisa mengirim teks placeholder `(pesan ini tidak bisa ditampilkan di Telegram)`. Jadi fiturnya tampil di menu tetapi pasti gagal dipakai. Penyebab lain: plugin pairing/sesi WhatsApp (`requestPairingCode`, `useMultiFileAuthState`).

**Perbaikan (tanpa menyentuh satu pun berkas plugin):**
- `lib/platform/telegram/wa-only.js` (baru): mendeteksi fitur mustahil dari isi berkas plugin (statis, tanpa menjalankan kode): `richResponseMessage|botForwardedMessage` → "memakai pesan rich HTML interaktif WhatsApp"; `requestPairingCode|useMultiFileAuthState|waitForConnectionUpdate` → "butuh pairing/sesi WhatsApp". Hasil di-cache per berkas (mtime+size). Kalau berkas tidak ditemukan → dianggap **didukung** (lebih baik fitur tampil daripada hilang karena gagal baca).
- `catalog.js`: item mendapat `waOnly` + `waReason`; item waOnly **tidak** masuk menu/kategori/pencarian, tetapi tetap terdaftar di `byCommand` agar bisa dijawab jelas. Urutan build diubah dua tahap: plugin yang didukung Telegram diproses lebih dulu, jadi kalau dua plugin memakai nama yang sama (mis. `/brat` versi WA-only vs versi biasa) yang menang adalah yang benar-benar bisa jalan. Nama utama juga kini menang atas alias (`/stiker` → plugin yang memang bernama `stiker`).
- `plugin-bridge.js`: perintah waOnly dijawab `⛔ /catur khusus WhatsApp… Buka dari bot WhatsApp atau jadibot WA` dan **handler tidak dijalankan**; dicatat ke audit sebagai `telegram.plugin.wa_only`.
- `commands.js`: kartu opsi (`opt:<perintah>`) untuk perintah waOnly menampilkan penjelasan yang sama, bukan tombol ▶️ Jalankan yang pasti gagal.

**Verifikasi nyata (server, 2 051 plugin termuat):**
- Katalog Telegram: **1 649 item / 21 kategori** (sebelum 1 686) — 33 plugin WA-only dikeluarkan dari menu: game 110 → **86**, info 43 → **40**, download 28 → **27**, search 87 → **86**, owner 161 → **159**.
- `/catur` di Telegram: ditolak dengan pesan jelas; handler tidak dijalankan. `/menu game` **tidak** memuat `catur`/`tetris`, tetapi `akinator` (yang didukung) tetap ada.
- Perintah yang tetap harus jalan dicek ulang: `/brat` → `maker/brat.js`, `/stiker` → `sticker/usanagi-sticker.js`, `/qc` → `maker/qc.js`, `/tourl` → `tools/tools-tourl.js` (semua **tidak** terkena filter).
- Bot WhatsApp & jadibot **tidak tersentuh**: tidak ada berkas `plugins/**` yang diubah, dan `handler.js`/`lib/jadibot.js` tidak memakai katalog Telegram (dicek: tidak ada referensi `platform/telegram` di jalur WA/jadibot). Jadi `/catur` tetap berjalan seperti biasa dari WhatsApp dan jadibot.
- Health setelah restart: `catalog {plugins: 1649, categories: 21}`.
- Tes: **142 platform** (7 tes baru di `tests/platform/batch9.test.mjs`), 0 gagal.

**Batas jujur:** deteksi berbasis isi berkas, bukan uji coba live per plugin. Kalau ada plugin yang memakai rich HTML lewat helper lain (bukan string `richResponseMessage`), plugin itu belum ikut tersaring — tinggal tambahkan polanya. Sebaliknya, plugin yang menyentuh API WA tetapi masih bisa menghasilkan teks (mis. `sendInteractive` → daftar teks) sengaja **tidak** dihapus.

## Task70 batch 10 — deteksi lebih ketat + kategori dummy "Khusus WhatsApp" (2026-10-20)

**Permintaan user:** "bikin lah biar engga masuk dan bikin dummy fitur".

**Apa yang diperbaiki:**
1. **Deteksi lebih ketat (fitur WA-only benar-benar tidak masuk).**
   - `wa-only.js` sekarang juga memeriksa **import relatif** (maks 2 tingkat), jadi plugin yang memakai helper rich lewat berkas lain ikut tertangkap. Ditambah pola helper internal `awang-table` dan `awang-rich-forward` yang selalu membungkus isi jadi papan/tabel rich HTML.
   - Pengecualian tepat: helper `usanagi-ai-rich` **tidak** dilarang karena plugin pemakainya punya fallback teks (`/deepseek`, `/grok`, `/ai`). Jembatan Telegram sekarang **melempar error** untuk pesan rich, sehingga fallback teks itulah yang terkirim — bukti: `/deepseek` tetap tersedia di Telegram.
   - Urutan pendaftaran nama diubah jadi 4 lapis: nama utama plugin yang didukung → alias plugin didukung → nama utama plugin WA-only → aliasnya. Efek nyata: `/ig` kembali memakai `download/usanagi-instagram.js` (dulu sempat "ketukar" ke plugin WA-only yang memakai `ig` sebagai nama utama).
   - Hasil di server: **52 plugin WA-only** (dari 33) — game 33, info 3, main 3, misc 2, music 2, download 2, downloader 1, owner 2, group 1, premium 1, tools 1, ai 1.
2. **Dummy fitur: kategori "🔒 Khusus WhatsApp".**
   - Bukan plugin palsu: halaman khusus yang **mendaftar semua fitur yang cuma bisa jalan di WhatsApp** lengkap dengan nama + keterangan, dibagi 5 halaman, masing-masing dengan kalimat "buka bot WhatsApp atau jadibot WA milikmu".
   - Tombolnya ada di menu utama: `🔒 Khusus WhatsApp (52)`. Bisa juga lewat `/menu wa-only` (alias: `waonly`, `whatsapp`).
   - Halaman ini ikut aturan edit-in-place: ganti halaman mengedit pesan yang sama.
3. **Tombol/list/carousel WhatsApp diturunkan jadi teks bernomor** di `relayMessage` (bukan JSON mentah) supaya plugin berbasis `MessageBuilder` tetap terbaca di Telegram.

**Perintah penting yang dicek ulang di server:** `/brat` OK, `/stiker` OK, `/play` OK, `/fb` OK, `/ig` **OK**, `/tiktok` OK, `/aiimg` OK, `/gemini` OK, `/deepseek` OK, `/tourl` OK, `/qc` OK, `/totalfitur` OK. Yang jadi khusus WhatsApp antara lain: `/catur`, `/chess`, `/tetris`, `/play2`, `/ttv4`, `/mypet`, `/blockblast`, `/dino`, `/flappy`, `/geometrydash`, `/minesweeper`, `/slot`, `/statusbot`.

**Verifikasi live (grup BackUp, pesan dihapus):**
- Menu: baris `🔒 Khusus WhatsApp (52)` muncul.
- Tekan tombolnya → `sends+0 edits+1`, isi `🔒 KHUSUS WHATSAPP · 52 fitur · halaman 1/5` + penjelasan cara pakai. Halaman 2 → `edits+1`, halaman 5/5 → `edits+1` (tidak ada pesan baru).
- `/catur` → ditolak jelas (`⛔ /catur khusus WhatsApp…`), handler tidak dijalankan.
- Health setelah restart: `catalog {plugins: 1634, categories: 22}` (22 karena kategori dummy ikut dihitung).
- Tes: **153 platform** (11 tes baru di `tests/platform/batch10.test.mjs`), 0 gagal.

**Batas jujur:** kategori "Khusus WhatsApp" ikut terhitung di `/health` sebagai satu kategori (22), padahal isinya bukan plugin. Deteksi tetap berbasis isi berkas + import relatif; plugin yang membangun rich message secara dinamis (string dirakit runtime) belum tentu tertangkap — kalau ketemu, tambahkan polanya.

## Task70 batch 11 — Auto-AI memakai Gemini asli (2026-10-20)

**Permintaan user:** "auto ai nya buat realistis pake apikey gemini yang pernah ku kasih".

**Apa yang dibuat:**
1. **`lib/gemini-client.js` (baru)** — klien Gemini resmi untuk Auto-AI.
   - Endpoint `POST {GEMINI_API_BASE}/models/{model}:generateContent`, kunci dikirim lewat header **`x-goog-api-key`** (tidak pernah di URL), teks error dilewatkan `redactProviderSecrets`.
   - Model baku **`gemini-3.5-flash`**, cadangan `gemini-3.6-flash` → `gemini-3.1-flash-lite`. Ini hasil uji langsung ke API: `gemini-2.5-flash` sudah ditolak untuk pengguna baru ("no longer available to new users"), sedangkan 3.7/3.8 sedang 503 "high demand".
   - `thinkingConfig.thinkingBudget = 0` untuk model 2.5/3.x: tanpa itu jawaban pendek kehabisan token karena dipakai "berpikir" (uji: 308 token & `finishReason MAX_TOKENS` vs 21 token & `STOP`).
   - Kunci dibaca dari `options.apiKey` → `GEMINI_API_KEY`/`GOOGLE_API_KEY` → berkas `.env.gemini` (mode 600) → `global.umiAutoAI`/`global.usanagiAI`.
2. **`lib/auto-ai.js`** — `aiProviderState()` + `askAutoAiModel()`: **Gemini dulu → Groq bila Gemini gagal → 503 kalau keduanya tidak ada**. Anggaran token dihitung per penyedia (Gemini TPM 250 000). Bila tidak ada kunci sama sekali, Auto-AI tetap nonaktif dengan pesan yang sama seperti sebelumnya.
3. **`plugins/owner/umi-aikey.js` (baru)** — kelola kunci tanpa restart: `/aikey status`, `/aikey set <KUNCI>` (menolak kalau dikirim di grup, kunci disamarkan di balasan, pesan asal dihapus bila bisa), `/aikey test` (panggilan Gemini sungguhan + latensi + jumlah token), `/aikey hapus`.

**Verifikasi nyata di server (`/home/container`):**
- Kunci user dipasang di `/home/container/.env.gemini` (mode **600**) lewat `persistGeminiRuntimeConfig`; bukan di repo, bukan di log.
- `chatGemini` dari server: model `gemini-3.5-flash`, **1 074 ms**, 26 token, jawaban "Halo".
- `planAutoAI` (jalur Auto-AI sebenarnya) dengan kunci yang sama: `kind: answer`, provider `gemini`, **1 462 ms**, jawaban "Halo! Lagi siap nemenin kamu ngobrol nih. Kamu sendiri gimana hari ini? …"; percakapan yang mengarah ke fitur menghasilkan `kind: command`. **Tidak ada** baris `[AUTO-AI] Gemini gagal` di `server.log`.
- Restart: **2 052 plugin** termuat (naik 1 dari 2 051 karena `/aikey`), bot siap, `[TELEGRAM] @AlzRiss_bot polling aktif (bot main)`, relay health `{ok:true, uptime …}`.
- Tes: **178 tes platform** (20 baru: `tests/platform/batch11.test.mjs` + `batch11-aikey.test.mjs`) dan **13 tes Auto-AI** — semua lulus.

**Batas jujur:**
- Kunci Gemini yang lama **tidak ditemukan** di workspace, di `.secrets`, maupun di server; karena itu kunci yang dipakai adalah kunci yang dikirim ulang user di chat. Nilainya tidak ditulis di dokumen ini.
- Bukti "Gemini asli" diambil dengan memanggil kode yang sama dari server (`node`), bukan dengan mengirim pesan WhatsApp sungguhan — pesan WA butuh nomor pengirim nyata. Jalur kode yang dieksekusi identik (`chatGemini` → `askAutoAiModel` → `planAutoAI`).
- Anggaran token Gemini dicatat per proses (bukan persisten); setelah restart hitungan mulai dari nol lagi.
- Kalau kunci dicabut/limit, Auto-AI otomatis turun ke Groq; kalau Groq juga tidak ada, pengguna menerima 503 "Auto-AI belum dikonfigurasi oleh owner."

### Batch 11 — kunci Gemini diganti (2026-10-20, tanpa restart)

User mengirim ulang kunci Gemini yang mau dipakai. Yang dilakukan:

- Kunci baru ditulis ke `/home/container/.env.gemini` lewat `persistGeminiRuntimeConfig` (mode **600**), menggantikan kunci sebelumnya. Nilai kunci **tidak** ditulis di dokumen ini dan tidak masuk repo.
- Verifikasi kecocokan tanpa membocorkan isi: `sha256(kunci)` 16 karakter pertama yang dihitung di server **sama** dengan yang dihitung lokal (`a2061c52c50c9f1b`, panjang 53 karakter).
- **Tidak perlu restart.** Proses bot yang sama (PID 9069, uptime ±11 menit) langsung memakai kunci baru karena `gemini-client` membaca ulang berkas setiap 15 detik.
- Bukti panggilan nyata setelah penggantian: `chatGemini` → `gemini-3.5-flash`, **1 002 ms**, 27 token, balasan "Halo."; `planAutoAI` (jalur Auto-AI) → `kind: answer`, provider **gemini**, **1 613 ms**, jawaban "Halo! Aku lagi di sini, siap nemenin kamu ngobrol. …". Log tidak memuat `Gemini gagal`, jadi tidak ada fallback ke Groq.
- Kunci lama otomatis tidak dipakai lagi karena berkas `.env.gemini` ditimpa (bukan ditambahkan). Kunci baru juga disimpan di `/home/user/.secrets/task62-gemini.env` (mode 600) di workspace, di luar repo.

## Workspace diringankan — source pindah ke arsip Telegram (2026-10-20)

**Permintaan user:** workspace penuh; taruh yang dibutuhkan di grup Telegram BackUp, ambil lagi kalau perlu — terutama source code Umi yang berat.

**Yang berubah:**
- Folder `usanagi-umi-public-source/` (**98 MB**) dan `backup-umi/` (**127 MB**) dihapus dari workspace. Sisa workspace: **±1,5 MB** (dari 188 MB).
- Source code tetap aman di **3 tempat**: GitHub `87503c0`, server produksi `/home/container`, dan arsip Telegram.
- Alat baru di `restore/`:
  - `push-snapshot.mjs` — mengarsipkan workspace dan mengirim ke grup BackUp. Arsip dipecah **≤ 18 MB per bagian** karena Bot API Telegram menolak mengunduh berkas > 20 MB ("file is too big") — ini batas nyata yang ditemukan saat uji, bukan asumsi.
  - `restore-latest.mjs` — mengunduh semua bagian, menyambung, **mencocokkan sha256** dengan manifest, memeriksa entri tidak aman (`/…`, `..`, symlink keluar), baru mengekstrak. Bisa `--only <path>` untuk mengambil satu berkas/folder saja.
  - `manifest.json` — daftar snapshot (`full` = dengan source, `light` = tanpa source) beserta `file_id` per bagian dan sha256 arsip utuh.

**Snapshot yang tersedia sekarang:**
| Snapshot | Isi | Ukuran | Bagian |
|---|---|---|---|
| `full` | source + `.secrets` + docs + banner | 42,1 MB | 3 (`part01`–`part03`) |
| `light` (default) | tanpa source (source dari GitHub/`full`) | 0,8 MB | 1 |

**Uji yang sudah dilakukan:**
- `--snapshot full --only …/umi-aikey.js --extract` → 3 bagian terunduh, sha256 cocok (`0f751a24…`), berkas 7 250 byte terekstrak.
- `--snapshot light --only STATUS-DEPLOY.md --extract` → sha256 cocok (`e78d540f…`), 75 entri, berkas 157 579 byte terekstrak.
- Pesan arsip lama (44 MB yang tidak bisa diunduh bot) dan bagian versi lama sudah dihapus dari grup.

**Batas jujur:** arsip > 20 MB **tidak bisa** diunduh lewat bot; itu sebabnya dipecah. Kalau butuh satu berkas dengan cepat, `--only` tetap mengunduh seluruh bagian dulu (42 MB) sebelum mengekstrak satu berkas — belum ada pembagian per-blok.

## /terabox diperbaiki — API resmi TeraBox, bukan situs mati (2026-10-20)

**Laporan user:** `/terabox <link>` selalu gagal:
`Fitur tidak selesai dalam 45 detik` → `Error downloading from TeraBox: Request failed with status code 500`.

**Akar masalah (bukan tebakan):** plugin lama (`plugins/downloader/downloader-terabox.js`)
mengandalkan situs pihak ketiga **terabxdownloader.org** (scrape `wp-admin/admin-ajax.php`
+ nonce). Situs itu sekarang tidak melayani permintaan → HTTP 500, jadi setiap link gagal,
termasuk link yang valid. Link yang dikirim user (`…/wap/share/filelist?surl=…`) juga tidak
pernah diparse khusus — yang dikirim mentah ke situs mati itu.

**Apa yang diganti:**
1. **`lib/terabox.js` (baru)** — klien API resmi TeraBox, mengikuti alur yang dipakai halaman
   share TeraBox sendiri:
   - `GET /sharing/link?surl=<surl>` → cookie sesi anonim (`browserid`, `csrfToken`, `TSID`).
   - `GET /api/shorturlinfo?…&shorturl=1<surl>` → judul, `shareid`, `uk`, `sign`, `timestamp`, isi root.
   - `GET /share/list?dir=…&root=0&sign=…&timestamp=…&shareid=…&uk=…` → isi subfolder (rekursif, maks 3 level).
   - `GET /share/download?fid_list=[fs_id]&sign=…` → link unduhan (**wajib cookie akun**).
   - Parse semua bentuk link: `/s/1xxxx`, `/wap/share/filelist?surl=`, `/sharing/link?surl=`, surl polos.
   - `shorturl` dinormalkan ke bentuk berawalan **1** (tanpa itu API menjawab `errno 2`).
   - 10 mirror dicoba berurutan (terabox.app, terabox.com, 1024tera.com, nephobox, teraboxlink, …).
2. **`plugins/downloader/downloader-terabox.js` ditulis ulang** — tidak lagi menyentuh situs pihak ketiga;
   menampilkan daftar file + ukuran, bisa pilih nomor file (`/terabox <link> 2`), mengirim media hanya
   kalau di bawah batas platform (Telegram 45 MB).
3. **`plugins/owner/umi-tbcookie.js` (baru)** — owner mengatur cookie akun TeraBox tanpa restart:
   `/tbcookie status | set ndus=… | test <link> | hapus`. Cookie disimpan di `.env.terabox` mode **600**,
   ditolak kalau dikirim di grup, dan tidak pernah dipantulkan utuh.
4. **`lib/platform/index.js`** — start bot Telegram sekarang **dicoba ulang 3×** (jeda 0/3/8 s). Tanpa ini,
   satu kali `getMe` timeout saat boot membuat bot Telegram mati sampai restart berikutnya.

**Fakta yang diuji langsung ke API TeraBox (20 Okt 2026):**
| Uji | Hasil |
|---|---|
| `shorturl` tanpa awalan `1` | `errno 400210 need verify_v2` |
| `shorturl=1<surl>` tanpa cookie halaman | `errno 400210` |
| `shorturl=1<surl>` setelah ambil cookie halaman | `errno 0` + data |
| Langkah 1–3 (baca isi) tanpa login | **jalan** |
| `/share/download` tanpa cookie akun | `errno 400310 need verify_v2` — dan di browser pun tombol Download memunculkan modal Login |
| Situs pihak ketiga `terabxdownloader.org` | mati (HTTP 500) — itulah penyebab error yang dilaporkan |

**Verifikasi di server produksi (`/home/container`):**
- `resolveTeraBoxShare` dengan link user: **2 896 ms**, `errno 0`, judul `Nenxiaotu Cosplay Cartethiya`,
  1 folder, 1 file `join telegram @senseiaja.mp4` **388 MB**.
- Dry-run perintah `/terabox` (kode asli, jaringan asli): **2 843 ms**, balasan berisi daftar file +
  penjelasan bahwa link unduhan butuh akun. Tidak ada lagi timeout 45 detik.
- Restart: **2 053 plugin** termuat, `errno` plugin bersih; `[TELEGRAM] @AlzRiss_bot polling aktif (bot main)`
  (percobaan 1 timeout, percobaan 2 berhasil — retry bekerja).
- Tes: **194 tes platform** (16 baru di `tests/platform/batch12-terabox.test.mjs`), 0 gagal.

**Batas jujur:**
- **Membaca** isi link sekarang berfungsi penuh tanpa akun. **Mengunduh** file tetap butuh cookie akun
  TeraBox — itu keputusan TeraBox, bukan bug kita: tanpa cookie, API mereka menolak memberi `dlink`
  dan situs resminya sendiri memunculkan Login saat tombol Download ditekan.
- Jalur unduhan (cookie → `dlink` → kirim media) sudah diimplementasikan dan diuji dengan respons tiruan
  (termasuk kasus cookie kedaluwarsa `errno 400310`), tetapi **belum** diuji dengan akun TeraBox nyata
  karena belum ada cookie yang tersedia saat pengerjaan.
- File 388 MB contoh ini juga di atas batas kirim Telegram (45 MB), jadi yang dikirim tetap pesan teks +
  daftar file, bukan medianya.

## Task73 — Nomor bot utama bebas, hubungkan bot Telegram ↔ bot WhatsApp, pusat error (2026-10-20)

- **Nomor bot utama bebas, khusus owner.** Endpoint baru `GET /api/platform-system/main-bot` dan `POST /api/platform-system/main-bot/number` memakai izin baru `mainbot.manage` (hanya `owner`). Nomor dinormalkan (`08…`/`8…` → `62…`), disimpan ke `.main-bot.env` mode 600 lewat `global.applyMainPairingNumber`, lalu pairing dipicu **di bot utama** (`setMainBotEnabled(true)` / `reloadHandler`). Nomor yang sedang dipakai sesi jadibot akun lain ditolak `409 NUMBER_IN_USE` (dua socket dengan kredensial sama saling menendang) kecuali `force:true`. Nomor tidak pernah dikirim utuh: hanya `6287***432`. `mainBotStatus()` sekarang diekspor dari `lib/jadibot-platform-api.js` agar console owner dan website memakai satu bentuk data.
- **Kode pairing di website.** `main.js` menyimpan kode pairing terakhir **di memori** (`global.lastPairingCode`, kedaluwarsa 10 menit, dihapus saat perangkat tertaut) sehingga halaman Bot Utama bisa menampilkannya tanpa membuka konsol panel. Tidak ditulis ke berkas/log.
- **Hubungkan bot Telegram ke bot WhatsApp pengguna.** Migrasi aditif `telegram_bots.wa_number` + `wa_linked_at`. `POST /api/platform-system/telegram/bots/:id/link` hanya menerima nomor yang benar-benar milik akun itu (`sessionsForUser`), atau nomor bot utama bila pelakunya owner (`mainbot.manage`); selain itu `403 NOT_OWNER`. `GET /telegram/bots` sekarang sadar-kepemilikan: owner/developer melihat semua (`scoped:'all'`), pengguna lain hanya bot miliknya (`scoped:'own'`) plus daftar sesi WhatsApp miliknya. Izin baru `telegram.own` untuk semua peran; `telegram.manage`/`telegram.status` tidak berubah. Bot ber-scope `platform` tidak bisa diaktifkan pengguna biasa (403). Tautan bersifat fungsional: `plugin-bridge` menjalankan plugin di dalam `runWithBotConnection(socket WA milik pengguna)` bila sesinya hidup, dan kolom `waOnline` menunjukkan status nyata sesi itu.
- **Pusat error (`lib/error-hub.js`).** Setiap error sistem → (1) `data/errors/YYYY-MM-DD.jsonl` mode 600, retensi 14 hari; (2) pesan Telegram ke `TELEGRAM_OWNER_IDS` + `TELEGRAM_ADMIN_IDS` + `UMI_ERROR_TELEGRAM_CHAT`; (3) laporan Feedback website (perilaku lama tetap). Dedupe 10 menit per tanda tangan error, kuota 30/jam, kredensial diredaksi (token bot, `gsk_`, `ndus`, JWT, AIza…). Filter lama dipertahankan: pesan untuk pengguna dan gangguan koneksi sesaat tidak dilaporkan (kecuali `force`). Dipasang di `handler.js` (plugin), `telegram/router.js` (perintah), `telegram/poller.js` (update + 401 token dicabut), `telegram/plugin-bridge.js`, dan kegagalan 5xx `platform/api.js`. Hook `unhandledRejection`/`uncaughtException` dipasang di `main.js` saat boot.
- **Baca log.** Perintah `/errors [jumlah|uji|hapus]` di WhatsApp dan Telegram (owner/developer), endpoint `GET /api/platform-system/errors` (owner/developer), dan `GET /api/owner-console/errors` (relay agen).
- **Konfigurasi server:** `.platform.env` ditambah `UMI_ERROR_TELEGRAM_CHAT=-1004393450575` (grup BackUp). `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_OWNER_IDS` sudah ada.
- **Verifikasi nyata di produksi (bukan mock):** bot boot **PID 33804**, `🧯 Pusat error aktif`, `Successfully Loaded 2054 Plugins` (+1 plugin baru), `@AlzRiss_bot polling aktif (bot main)`. Uji jalur notifikasi dari kode yang sama: `HASIL {"logged":true,"notified":2,"count":1}` — grup BackUp **200 ok message_id 70**, owner `8932455242` **200**, owner `7872304892` **400 chat not found** (belum pernah `/start` bot; grup tetap menerima). Smoke endpoint produksi: `GET /main-bot` owner **200** (`pairing_number_masked 6287***432`, `runtimeReady:true`), `GET /errors` **200**, `GET /telegram/bots` owner **200** (`scoped:all`), pengguna biasa `GET /main-bot` **403** dan `/telegram/bots` **200** `scoped:own` dengan `sessions:[]`.
- **Tes:** `tests/platform/batch13.test.mjs` **15/15** (RBAC izin baru, normalisasi+penyimpanan nomor 600, tolak nomor sesi akun lain, scoping bot, link hanya nomor sendiri, migrasi aditif, filter error, redaksi, jsonl 600, kirim ke mock Telegram + dedupe, tanpa token tetap aman, hook sekali, endpoint `/errors`). Suite `tests/platform/` penuh **209/209** (sebelumnya 194; rbac diperbarui agar `telegram.own` tercatat eksplisit dan tetap menolak `telegram.manage`/`mainbot.manage` untuk pengguna biasa).
- **Deploy:** backend lewat relay owner-agent (unggah base64+gzip per potongan, verifikasi SHA-256 tiap berkas; `node --check` 14 berkas OK). Website `node tools/deploy-website.mjs` → `dpl_2SzKurMPhqjyKjpkVWkdB5tKJBft` **READY** di `https://alzriss-comunity.vercel.app`; live `/platform` memuat nav Bot Utama, `/assets/platform.js` memuat `waLinkCell`/`main-bot`, `/api/ecosystem?path=main-bot` menjawab **401** (rute terdaftar, bukan 404).
- **Batas jujur:** pairing bot utama **tidak dijalankan** pada uji ini (nomor sudah tersimpan tapi `registered:false`; menjalankannya akan memutus/menautkan ulang WhatsApp produksi tanpa izin). Pembuktian pairing end-to-end menunggu perintah owner. Error plugin nyata tidak dipicu paksa di produksi (hanya diuji di suite); kanal notifikasinya sudah dibuktikan hidup. Owner `7872304892` perlu `/start` @AlzRiss_bot agar menerima DM.
