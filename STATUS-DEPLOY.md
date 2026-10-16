# STATUS DEPLOY

**Log lengkap:** [repo `STATUS-DEPLOY.md`](./usanagi-umi-public-source/STATUS-DEPLOY.md)

Terakhir diperbarui: **2026-10-16 23:00 WIB**

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

## Pending

- Feedback auto-report sudah jalan, brat.js sudah di-fix (error reports berkurang)
- Payment gateway (TriPay) belum dikonfigurasi (saat ini manual DANA)