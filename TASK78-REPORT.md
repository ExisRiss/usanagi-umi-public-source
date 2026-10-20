# TASK78 — Laporan (pairing bot utama, hapus sesi/config, urutan menu, AI Agent Gemini)

Tanggal: 2026-10-20 (UTC) · 2026-10-21 dini hari WITA
Repo: `ExisRiss/usanagi-umi-public-source` · website: `https://alzriss-comunity.vercel.app` · bot: panel `f7811b23`

## 1. Ringkasan

Permintaan owner: *"Benerin halaman bot utama ketika minta pairing malah gak dapet code pairing, tambahin opsi hapus sesi atau config bot utama … benerin urutan halaman … AI Agent & AI Owner pakai API key Gemini."*

| Kriteria selesai | Status | Bukti |
|---|---|---|
| Tombol minta pairing menghasilkan kode **dan tampil di halaman** | ✅ | kode `FDPK-FMNF`, `V8GL-VW5J`, `5KMH-85NY` tampil di `#mainBotPairCode` (screenshot `shots/task78-02-pairing-code.png`) |
| Tombol **HAPUS SESI** & **RESET CONFIG** | ✅ | `removed:1` + `pairing_code` terbit <15 dtk; reset config → `pairing_number_set:false`, bot aktif |
| Setting bot utama (nomor, on/off, autoread) dari website | ✅ | `main_bot_enabled` & `autoread` berubah di server (dicek via `GET /api/owner-console/status` berkali-kali) |
| Urutan menu normal, "Keluar" paling bawah | ✅ | `shots/task78-03b-sidebar-bottom.png`: … Bot Utama → Owner → MMORPG → AI Agent → AI Owner → **Keluar** |
| AI Agent & AI Owner memakai Gemini (key owner) | ⚠️ kode siap, **key ditolak Google** | `provider:gemini, model:gemini-3.5-flash`, `configured:true`; tes koneksi: `Key Gemini ditolak Google (tidak valid/kedaluwarsa)` |

## 2. Akar masalah (tiga lapis, bukan satu)

1. **Sesi bot utama menyimpan kredensial *logged out*.** Socket membaca `sessions/creds.json` yang sudah ditandai logout → `Connection Failure` → Baileys membalas `loggedOut` → `connectionUpdate` **sengaja** tidak menghapus sesi (untuk diagnosis) → socket mati, `socket_ready:false`, `requestPairingCode` tidak pernah dipanggil. **Resep yang terbukti:** hapus sesi + reset creds di memori (`initAuthCreds()`), lalu minta kode; kode terbit <15 detik.
2. **Kode hanya ada di konsol.** Sebelumnya kode pairing hanya dicetak ke log panel; halaman Bot Utama mem-parse log, sehingga kalau buffer log berputar/terlambat, kotak kode tetap kosong. Sekarang kode disimpan di memori bot (`global.lastPairingCode`) dan dibagikan lewat `GET /api/owner-console/status` (`pairing_code`, `pairing_code_age_seconds`, `pairing_error`, `pairing_pending`), jadi **status server adalah sumber utama** di UI dan parser log hanya cadangan.
3. **Error teknis tampil mentah.** Pesan Baileys berbahasa Inggris (`a pairing code is already pending…`, `rate-overlimit`, `the server never answered…`) tampil apa adanya. Sekarang diterjemahkan + diberi saran tindakan (lihat §5).

## 3. Perubahan per berkas

| Berkas | Perubahan |
|---|---|
| `bot/main.js` | `global.requestMainPairing()` manual (tidak ditelan cooldown, kode lama yang masih <75 dtk dipakai ulang), `global.resetMainBotSession()` (hapus `sessions/*` + reset `initAuthCreds()`), `global.resetMainBotConfig()` (hapus `.main-bot.env`, aktifkan bot), `global.pairingPending`, `mainPairingFriendlyError()` (pesan Indonesia), socket dipantau 4× sebelum menyerah (bukan langsung gagal saat socket berganti), log `[MAIN-BOT]` |
| `bot/lib/jadibot-platform-api.js` | Route instan `pairing-request` / `main-session` / `main-config` (pairing jalan di latar belakang, relay Vercel tidak timeout), `main-config` memuat ulang handler, field `pairing_code/pairing_code_at/pairing_code_age_seconds/pairing_error/pairing_pending/session_saved` di `mainBotStatus()`, route `POST /api/owner-agent/test` |
| `bot/lib/gemini-client.js` | `isValidGeminiKey()`, `functionResponse.name` diambil dari `tool_call_id`, pesan 429 menyebut kuota + estimasi retry, `primaryError` (401 model cadangan tidak menutupi error utama), pesan khusus key ditolak (`ACCESS_TOKEN_TYPE_UNSUPPORTED`/`API_KEY_INVALID`) yang menyuruh pasang key baru |
| `bot/lib/umi-agent.js` | Provider `gemini` (default bila `.env.gemini` terisi), `agentTest()`, tool-calling lewat Gemini, `persistGeminiRuntimeConfig` |
| `website/api/platform.js` | Whitelist provider `groq|openrouter|gemini` (default **gemini**), relay `agent/test`, `main-console/pairing-request`, `main-console/main-session`, `main-console/main-config`, `request:true` saat menyimpan nomor |
| `website/index.html` + `website/public/index.html` | Nav: … Bot Utama → Owner → MMORPG → AI Agent → AI Owner → **Keluar** (paling bawah); tombol `#requestMainBotPairCode`, `#deleteMainBotSession`, `#resetMainBotConfig`; select provider Gemini pertama; tombol `#testAgentConnection` + kotak `#agentTestResult`; panduan pairing diperbarui; `app.js?v=20261020-botfix4` |
| `website/public/assets/app.js` | `applyMainPairingStatus()`, `refreshMainStatus()` (poll 4 dtk), `startMainStatusPolling()`, `requestMainBotPairCode()`, `deleteMainBotSession()`, `resetMainBotConfig()`, `testAgentConnection()`, `startPairCooldown()` (60 dtk), `mainStatusHasServer` (log hanya cadangan), kode >120 dtk ditandai kedaluwarsa, timer dibersihkan di `stopTimers`, `__UMI_JS_VER='20261020-botfix4'` |
| `STATUS-DEPLOY.md` | Bagian Task78 (tabel + bukti + batas jujur) |

Tidak diubah (sengaja): `bot/lib/auto-ai.js` dan `bot/plugins/owner/umi-aikey.js` masih mengimpor `geminiBudget`/`geminiStatus` — **jangan hapus export itu**.

## 4. Bukti live (bukan mock)

### 4.1 Status bot utama (`GET /api/owner-console/status`, tiket HMAC owner)

```
# SEBELUM perbaikan (13:33 UTC)
status: unpaired, registered:false, connected:false, socket_ready:false,
main_bot_enabled:false, pairing_unavailable:true,
pairing_code:"ZA58-F82A" (231 dtk, sudah mati), session_saved:true

# SESUDAH HAPUS SESI (13:37:31 → 13:37:36 UTC, jeda 5 detik)
13:37:31 status=unpaired socket_ready=true  pairing_code=''
13:37:36 status=pairing  socket_ready=true  pairing_code='E2GQ-GMD6' age=2s

# SESI LAIN pada pengujian berikutnya (semua terbit <20 dtk setelah HAPUS SESI)
28TZ-7G8X · 3NR6-9DBP · V8GL-VW5J · FDPK-FMNF · 5KMH-85NY
```

### 4.2 Status AI Agent/Owner (`GET /api/owner-agent/status`)

```json
{"configured":true,"provider":"gemini","model":"gemini-3.5-flash","workerActive":true,
 "health":{"pluginsLoaded":2043,"jadibotConnected":5,"memoryMb":333}}
```

### 4.3 Uji tombol di browser (Playwright, login owner `AlzRiss`)

| Aksi | Hasil di halaman | Hasil di server |
|---|---|---|
| HAPUS SESI BOT UTAMA | `#mainBotPairCode` = **5KMH-85NY**, status "Kode dibuat 17 detik lalu…" | `session_saved:true`, `pairing_code:5KMH-85NY` |
| MINTA CODE LAGI (kode masih hidup) | kode lama ditampilkan lagi, tanpa error Inggris | `pairing_code:V8GL-VW5J` (reuse <75 dtk) |
| SIMPAN & MINTA CODE (nomor `6282******396`) | nomor tersimpan, status memandu langkah WhatsApp | `pairing_number_masked:"6282******396"` |
| RESET CONFIG BOT UTAMA | kotak kode kosong, status "Belum ada nomor tersimpan", bot AKTIF | `pairing_number_set:false`, `main_bot_enabled:true` |
| Toggle BOT UTAMA (2×) | AKTIF → NONAKTIF → AKTIF | `main_bot_enabled` ikut berubah |
| Toggle AUTO READ (2×) | NONAKTIF → AKTIF → NONAKTIF | `autoread:false/true` (7 sesi) |
| TES KONEKSI AI (AI Owner) | `GAGAL — Key Gemini ditolak Google (tidak valid/kedaluwarsa)…` | route `agent/test` 200, pesan 401 diteruskan |
| Chat AI Agent "halo" | balasan berisi error yang sama (tidak mengarang jawaban) | `agentChat` → Gemini 401 |

Screenshot: `shots/task78-02-pairing-code.png` (kode tampil besar `FDPK-FMNF`), `shots/task78-03-sidebar-order.png`, `shots/task78-03b-sidebar-bottom.png` ("Keluar" paling bawah), `shots/task78-04-ai-owner.png`, `shots/task78-05-ai-agent.png`, `shots/task78-01-main-console-before.png`.

### 4.4 Deploy

- Website: `dpl_qjvebkxtk-exisriss-projects.vercel.app` → produksi `https://alzriss-comunity.vercel.app`, `assets/app.js?v=20261020-botfix5` (`__UMI_JS_VER='20261020-botfix5'`), 57 berkas terunggah, health check website→backend lulus.
  Riwayat sesi ini: `dpl_FmG6wg57…`, `dpl_4DLm54M8…`, `dpl_DT4u6wTB…`, `dpl_5WMDKCtp…`, `dpl_85j8ntajo…` (botfix4), `dpl_qjvebkxtk…` (botfix5).
- Backend: `/main.js` 53541 B, `/lib/jadibot-platform-api.js` 90047 B, `/lib/gemini-client.js` 17549 B, `/lib/umi-agent.js` 22458 B — semua diunggah lewat **upload → delete → rename** panel API, ukuran + **SHA-256 cocok**, lalu `power restart` (204). `Successfully Loaded 2043 Plugins`, `[JADIBOT-API] Aktif di 0.0.0.0:2176`.
- Commit: `31190d8` (fase 1: pairing/hapus sesi/urutan menu/Gemini) dan `988d5b6` (fase 2: kode dari status server, error Indonesia, cooldown, reload handler, pesan key Gemini). `origin/main` sudah sama.
- Tes otomatis: `node --test bot/tests/platform/` **217/217 lulus** (butuh `better-sqlite3` terpasang; itu sebabnya 16 gagal saat dependensi belum ada).

## 5. Batas jujur & sisa risiko

1. **Key Gemini owner ditolak Google (bukan salah kode).** Diuji langsung ke `generativelanguage.googleapis.com` pada 2026-10-20:
   - `x-goog-api-key` → **401** `ACCESS_TOKEN_TYPE_UNSUPPORTED`
   - `?key=` → **401** (sama)
   - `Authorization: Bearer` → **401** `API_KEY_SERVICE_BLOCKED`
   - `oauth2.googleapis.com/tokeninfo` → `invalid_token`
   - Model lain (`gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-flash`) → hasil sama; key **palsu** (kontrol) justru dijawab `400 API_KEY_INVALID`, jadi perilaku server normal.
   → AI Agent/AI Owner **sudah** dikonfigurasi ke Gemini + key owner, tetapi belum bisa membalas sampai owner memasang key Gemini baru (AI Studio). Setelah itu tidak perlu deploy: isi lewat **AI Owner → Provider Gemini → API Key → SIMPAN KONFIGURASI** (ditulis ke `.env.gemini` mode 600) atau edit `.env.gemini` di server.
2. **WhatsApp membatasi permintaan kode (`rate-overlimit`).** Setelah ±8–10 permintaan kode dalam satu jam (semua untuk pengujian), WhatsApp menolak permintaan berikutnya. UI sekarang menampilkan pesan Indonesia + cooldown 60 detik, dan pesan menyarankan jeda ±10 menit. Ini batas di sisi WhatsApp, bukan bug aplikasi — pairing tetap berhasil bila sesi dihapus lalu diminta sekali dengan jeda.
3. **Sesi bot utama belum tertaut.** Sampai owner memasukkan kode di WhatsApp, status tetap `unpaired` (`session_saved:true`, siap pairing). Bot utama tidak bisa menerima pesan sebelum tertaut.
4. **`.main-bot.env` di server adalah sumber otoritatif** (`MAIN_BOT_ENABLED=true`, nomor `6282******396`). File `.main-bot.env` di workspace masih usang (`false`) — jangan dipakai.
5. Panel API berubah perilaku: `POST /api/client/servers/:id/files/upload` kini **405**; harus `GET` dulu untuk signed URL lalu `POST` multipart ke URL Wings. Helper `tools/ptero.py` sudah disesuaikan.
6. Aset `app.js` bisa tersaji dari cache meski deploy READY → selalu naikkan `?v=` di `index.html`/`public/index.html` **dan** `__UMI_JS_VER` di `app.js`, lalu verifikasi dengan `curl`.

## 6. Cara pakai halaman Bot Utama

1. Buka `https://alzriss-comunity.vercel.app` → masuk sebagai owner → menu **Bot Utama**.
2. Pastikan saklar **BOT UTAMA: AKTIF** (tombol `MATIKAN BOT UTAMA` = sedang aktif).
3. Masukkan nomor bot format internasional tanpa `+` (contoh `6282…`) → **SIMPAN & MINTA CODE**. Halaman menyegarkan status tiap 4 detik.
4. Kotak **PAIRING CODE** menampilkan 8 karakter (`XXXX-XXXX`). Klik **SALIN CODE**. Kode hidup ±60 detik.
5. Di WhatsApp nomor tersebut: **Perangkat tertaut → Tautkan dengan nomor telepon → masukkan kode**.
6. Kalau gagal:
   - *"Koneksi WhatsApp terputus / sesi logout"* → **HAPUS SESI BOT UTAMA** lalu **MINTA CODE LAGI** (resep yang terbukti; sesi jadibot tidak terhapus).
   - *"Kode sebelumnya masih aktif"* → masukkan kode lama, atau tunggu 60 detik.
   - *"WhatsApp membatasi permintaan kode"* → tunggu ±10 menit; jangan menekan tombol berulang (tombol otomatis terkunci 60 detik setelah setiap permintaan).
   - *"Socket belum siap"* → tunggu ±15 detik lalu **MINTA CODE LAGI** (server memuat ulang socket sendiri).
7. **RESET CONFIG BOT UTAMA** menghapus `.main-bot.env` (nomor + status) dan mengaktifkan bot kembali — pakai hanya kalau ingin mulai dari nol; setelah itu masukkan nomor baru.

## 7. Sisa pekerjaan untuk owner

- [ ] Pasang **key Gemini baru** (AI Studio) lewat halaman **AI Owner**, lalu tekan **TES KONEKSI AI** sampai muncul `BERHASIL · Gemini · gemini-3.5-flash`.
- [ ] Setelah jeda rate-limit, tekan **MINTA CODE LAGI** sekali dan masukkan kode di WhatsApp agar bot utama tertaut.
- [ ] Opsional: putar (rotate) key Gemini lama yang sudah bocor di dokumen handoff.
