# TASK80 — Setting Bot Utama Lengkap + Nomor Owner + Perbaikan Halaman Kepotong

**Tanggal:** 2026-10-20 (UTC) · malam WITA
**Repo:** `ExisRiss/usanagi-umi-public-source`
**Website produksi:** https://jadibot-alzriss.gwenna.my.id (juga https://alzriss-comunity.vercel.app)
**Aset:** `app.js?v=20261020-botsettings3` · `app.css?v=20261020-flow1`

---

## 1. Permintaan owner

> "Buat setting bot utama lebih lengkap dari setting bot jadibot dan bisa setting menu dll. Bisa setting apikey dll."

Lalu (putaran kedua, setelah lihat hasil live):

> "Benerin ui nya bug halaman kepotong https://jadibot-alzriss.gwenna.my.id/#main-settings. Tambahan setting di bot utama untuk setting nomer owner. Serta benerin kalo ada soalnya aku gabisa cek karna kepotong."

Dua hal yang dikerjakan:
1. **Setting bot utama lengkap** (≥ setting jadibot) + menu + API key + **nomor owner**.
2. **Bug halaman kepotong** — konten Setting Bot Utama tidak bisa di-scroll sampai bawah.

---

## 2. Akar masalah "halaman kepotong"

Bukan HTML yang salah, tapi rantai CSS shell:

```
body        { height:100dvh; overflow:hidden; display:flex }
#root       { height:calc(100dvh - 78px); overflow:hidden }
.app-view   { height:100%; display:flex; flex-direction:column }
.workspace  { flex:1; min-height:0 }
.page       { height:100%; overflow:auto }
```

Tinggi form Setting Bot Utama **±2.470 px (desktop) / ±3.570 px (HP)**, sedangkan `.page` hanya setinggi sisa viewport (489 px @1366×768, 673 px @390×844). Isinya memang bisa di-scroll *di dalam kotak*, tetapi:
- kotak scroll-nya tidak kelihatan (overlay scrollbar, tanpa border),
- di HP tinggi efektif makin kecil karena address bar,
- panel `RESET CONFIG` dan `URUTAN PAKAI` di bawah praktis tak pernah terlihat → terasa "kepotong" dan owner tidak bisa mengecek.

**Perbaikan:** halaman Setting/Pairing/Console sekarang memakai kelas `body.flow-mode` (dipasang `setView()` hanya untuk 3 route itu):

```css
body.flow-mode            { height:auto; min-height:100dvh; overflow-y:auto }
body.flow-mode #root      { height:auto !important; overflow:visible }
body.flow-mode .app-view  { height:auto; min-height:calc(100dvh - 78px); display:block }
body.flow-mode .page      { height:auto; overflow:visible }
body.flow-mode .topbar    { position:sticky; top:0 }
```

Halaman lain (dashboard, chat, console jadibot, dll.) **tidak diubah** supaya tidak ada regresi layout.

Bukti (Playwright, sesi owner asli):
- 1366×768: `body.overflowY=auto`, `window.scrollY` naik ke 5001 px, panel terakhir `bottom=710 < vh=768` → **terlihat penuh**.
- 390×844: dokumen 6.796 px, panel terakhir `bottom=786 < 844` → **terlihat penuh**.
- `#main-console` tetap punya terminal sendiri (`max-height:380px; overflow:auto`) supaya log tidak memanjangkan halaman tanpa batas.
- 0 error konsol di desktop & mobile.

Ikut dirapikan: label kecil `CONTROL ROOM` di kepala halaman tadinya `#9aaaca` di atas biru transparan (nyaris tak terbaca) → sekarang `#eef4ff` dengan latar biru tipis.

---

## 3. Setting bot utama — isi lengkap

`data/main-bot-settings.json` (mode **600**, folder `data/` di server, **tidak** masuk repo):

| Kelompok | Field | Catatan |
|---|---|---|
| Identitas | `bot_name`, **`owner_number`**, `prefix` | owner 8–15 digit, `+`/spasi dibuang; kosong = ikut `config.js` |
| Akses | `mode` (public/self), `only_group`, `registration_required`, `default_limit`, `limit_enabled` | `handler.js` kini menghormati `onlyGroup` bot utama |
| AutoAI | `auto_ai` | dibaca `lib/auto-ai.js` + `handler.js` |
| Auto Typing | `auto_typing`, `typing_min`, `typing_max`, `typing_cps` | langsung berlaku |
| Auto Translate | `auto_translate`, `translate_language` | |
| Menu | **`menu_style`** (`modern`/`default`), `menu_audio_enabled` | lewat `core/awang-menu-config.js` |
| Link | `website_url`, `channel_url`, `group_url`, **`channel_id`** | `channel_id` = `120363…@newsletter` untuk `/upch` |
| Plugin | **`disabled_plugins`** | `folder/file.js`, `plugin:…`, `command:…`; maks 500 |
| Pesan & ekonomi | `multiplier`, `wait_text`, `error_text` | |
| Premium | `premium_enabled`, `premium_plugins` | tetap terhubung Task75 |
| API key | Gemini / Groq / OpenRouter | tidak di file ini (lihat §4) |

Perbandingan dengan jadibot: seluruh kelompok di atas sudah mencakup setting jadibot yang relevan (prefix, mode, limit, plugin, links/menu) **plus** nomor owner, AutoAI/AutoTyping/AutoTranslate, pesan, multiplier, premium, dan API key.

---

## 4. API key — aman

| Provider | Disimpan di | Hapus | Validasi format |
|---|---|---|---|
| Gemini | `.env.gemini` (mode 600) | boleh | `AIza…` atau `AQ.…` |
| Groq | `.env.groq` (mode 600) | boleh | `gsk_…` |
| OpenRouter | store AI Agent (terenkripsi) | ganti dengan key baru | `sk-or-v1-…` |

- Respons server **hanya** `{configured, model, masked, file, role}`; mask `AQ.Ab8…0UNQ`.
- Nilai key tidak masuk audit log, tidak masuk database website, tidak pernah dikirim balik ke browser.
- Tes live: 3 key ngawur → 400 dengan pesan Indonesia per provider; status key tidak berubah.

---

## 5. Nomor owner — cara kerja

`mainBotSettingsView().owner_number` → `getMainBotConfig().ownerNumbers` → `getAllOwnerEntries()` di `lib/awang-cekakses.js`:

```js
const configuredMain = Array.isArray(botConfig?.ownerNumbers) ? botConfig.ownerNumbers.filter(Boolean) : []
const primary = configuredMain.length ? configuredMain : (settings.ownerNumbers || [])
```

Artinya: nomor dari web **menggantikan** daftar owner utama (bukan menambah), sementara nomor di `config.js` tetap dianggap **rownner/developer** (akses penuh tak bisa dikunci dari web). Kalau field dikosongkan, perilaku lama kembali 100%.

---

## 6. Perubahan berkas

| Berkas | Perubahan |
|---|---|
| `bot/lib/main-bot-settings.js` **(baru)** | store + validasi + terapkan ke runtime + `resetMainBotSettings` + `mainBotSettingsView` + `normalizeOwnerNumber` + `normalizeDisabledPlugins` + `setMainBotUploadChannel` (22.823 B) |
| `bot/lib/bot-config.js` | `getMainBotConfig()` merge store; `isPluginDisabled()` berlaku untuk bot utama managed (+1.469 B) |
| `bot/lib/awang-cekakses.js` | owner bot utama dari setting web menang atas `settings.ownerNumbers` |
| `bot/main.js` | muat setting saat boot + `syncMainBotSettingsProfile()` |
| `bot/handler.js` | `onlyGroup` & `public/self` bot utama dari profil managed |
| `bot/plugins/owner/self.js` | `/self` & `/public` menulis balik ke store |
| `bot/lib/gemini-client.js`, `groq-client.js` | `clearGeminiRuntimeConfig()`, `clearGroqRuntimeConfig()` |
| `bot/lib/umi-agent.js` | `agentProviderKeyMask()` (mask key OpenRouter tanpa membocorkan nilai) |
| `bot/lib/jadibot-platform-api.js` | route `GET/POST /api/owner-console/settings`, `…/settings/reset`, `…/apikey` (+161 baris) |
| `website/api/platform.js` | 4 route `main-console/settings*` & `main-console/apikey` dengan `requireMainBot` + rate limit + audit |
| `website/index.html` == `website/public/index.html` | kartu "KONFIGURASI BOT UTAMA" (27 field, termasuk Nomor Owner, Channel ID, Plugin nonaktif), kartu API KEY, reset; versi aset dinaikkan (65.385 B) |
| `website/public/assets/app.js` | `renderMainSettings`, `mainSettingsPayload`, `saveMainSettings`, `resetMainSettings`, `renderMainApiKeyStatus`, `saveMainApiKey`, `deleteMainApiKey`, `flow-mode` |
| `website/public/assets/app.css` | blok `body.flow-mode` + keterbacaan eyebrow |
| `bot/tests/main-bot-settings.test.mjs` **(baru)** | 7 tes |

---

## 7. Bukti live (bukan mock)

**Backend `f7811b23`**
- 9 berkas di-upload (signed URL + rename) → ukuran server == lokal; 3 berkas patch terakhir: `main-bot-settings.js` 22.823 B, `bot-config.js` 14.669 B, `awang-cekakses.js` 6.298 B.
- `power restart` → uptime reset, bot kembali `starting → socket siap`.
- `GET /api/owner-console/settings` → 200, `managed:true`, `prefix:"/"`, `multiplier:38`, `menu_style:"modern"`, `premium:{enabled:true,plugins:[]}`, `owner_number:""`.
- `settings-apply` nomor owner: `+62 812-3456-7890` → `6281234567890`; `123` → **400**; `""` → 200 (kembali ke `config.js`).
- `settings-apply` `disabled_plugins:["command:brat","plugin:tools/tts.js"]` → tersimpan; `[]` → mengaktifkan lagi.
- `settings-apply links.channel_id`: `bukan-id` → **400** `Channel ID harus berbentuk 120363…@newsletter atau dikosongkan.`; `""` → 200.
- `settings-apply menu_style:"fancy"` → **400** `Gaya menu harus default atau modern.`
- `settings-reset` → `managed:false` tetapi **prefix tetap `/`** (bug seed tidak kembali).
- `apikey` salah format (gemini/groq/openrouter) → **400** dengan pesan per provider.

**Website (Playwright, sesi owner asli)**
- 27 field form terisi nilai server; status 3 provider tampil (`Gemini — Terpasang: AQ.Ab8…0UNQ · SIAP`, Groq/OpenRouter `KOSONG`).
- Simpan lewat UI → toast `Setting bot utama tersimpan dan langsung berlaku.`
- Isi Nomor Owner lewat UI → `62 812 9999 0001` tersimpan, form menampilkan `6281299990001`.
- Halaman Pairing & Console tetap normal (`body.flow-mode`, status "tertaut dan terhubung" dari server, terminal 380 px dengan 17–30 ribu karakter log).
- Desktop 1366×768 & mobile 390×844: panel terakhir terlihat penuh, 0 error konsol.

**Tes otomatis**
- `node --test tests/main-bot-settings.test.mjs` → **7/7**
- `node --test tests/platform/` → **217/217**
- `auto-ai` 13/13, `self-ai` 9/9, `agent-settings` 4/4
- `tests/limit-toggle.test.mjs` gagal juga di baseline (bug lama `conn.getName` di `bot/lib/print.js:22`) — bukan regresi.

---

## 8. Batas jujur

1. **Bot utama sudah tertaut saat penutupan** (`status:connected`, `socket_ready:true`, nomor `6282******396`) dan log boot mencatat `[MAIN-BOT] Setting utama dimuat: Usanagi Umi AI · prefix /` → setting store benar-benar dipakai runtime, bukan hanya tersimpan. Yang belum diuji: balasan WhatsApp nyata ke pengguna (butuh pesan masuk dari nomor lain, tidak bisa dikirim dari sandbox).
2. **Key Gemini `AQ.…` masih ditolak Google** (batas Task78): simpan key berhasil, Auto-AI belum bisa membalas sampai key baru dipasang.
3. Nomor owner dari web **menggantikan** daftar owner utama; nomor `config.js` tetap rowner/developer.
4. Halaman lain tetap memakai layout lama (scroll internal). Hanya 3 halaman bot utama yang diubah agar tidak ada regresi di tempat lain.
5. Deploy Vercel masih manual (`vercel deploy --prod`), belum `vercel git connect`.

---

## 9. Cara pakai

1. Login website → **Setting Bot Utama** (owner/partner/developer).
2. Atur **Nama Bot**, **Nomor Owner**, **Prefix**, mode/limit, AutoAI, gaya menu, link & **Channel ID**, plugin nonaktif, pesan, multiplier, premium.
3. Tekan **SIMPAN SETTING BOT UTAMA** — langsung berlaku, tanpa restart.
4. Kartu **API KEY**: pilih penyedia → tempel key → **SIMPAN KEY**; status berubah jadi `SIAP` dengan versi mask. `HAPUS KEY` untuk Gemini/Groq.
5. **RESET SETTING (KECUALI KEY)** mengembalikan nilai bawaan (prefix aktif dipertahankan, API key & sesi WhatsApp tidak disentuh).


---

## 10. Susulan — bug "pindah halaman malah blur" + audit tools (Task80c)

### 10.1 Akar masalah blur
Drawer menu (`#mainNav`) ditutup oleh dua hal: kelas `.open` di `<nav>` **dan** `<div id="navScrim" class="nav-scrim">` (z-index 200, tabir `rgba(3,8,20,.52)` + `backdrop-filter: blur(3px)`).
Listener lama:

```js
$('mainNav').addEventListener('click', e => { if (e.target.closest('a')) $('mainNav').classList.remove('open') })
```

hanya melepas kelas di `<nav>` — **scrim tidak pernah ikut ditutup**. Akibatnya, setelah memilih menu, halaman tujuan tetap tertutup tabir blur. Paling jelas saat mengklik menu halaman yang sedang dibuka (hash tidak berubah → `hashchange` tidak jalan) dan saat memakai mouse di desktop (di HP klik scrim menutupnya, jadi kadang tidak terasa).

Perbaikan: semua jalur tutup (klik tautan, tombol ✕, klik scrim, Escape, tombol hamburger) memakai satu fungsi `toggleNav()`, dan status buka dihitung dari nav **dan** scrim.

### 10.2 Bug lain yang ditemukan tools repo
| Alat | Temuan | Perbaikan |
|---|---|---|
| `responsive-check.mjs` | 0/42 (meluber 349–374 px) | `html{overflow-x:hidden}` → 42/42 bersih |
| `contrast-check.mjs` | 10 gagal, terburuk 1.12:1 | teks gelap di permukaan terang, gradien tombol digelapkan → 0 gagal |
| `ui-rules-check.mjs` | 12 gagal | tabular-nums, `:focus-visible`, safe-area toast → 13 lulus / 6 sisa (z-index & material kaca sengaja) |
| Sapuan 22 rute | QR DANA diblokir CSP (host lama) | `sameOriginAsset()` + `img-src` di `vercel.json` → 0 error |
| `check-release-safety.py` | — | 4.205 berkas, 0 issue |

### 10.3 Deploy & bukti
- `app.js?v=20261020-navfix1` / `app.css?v=20261020-navfix1`, produksi https://jadibot-alzriss.gwenna.my.id.
- Playwright: setelah klik menu (page sama maupun beda) → `scrim.open=false`, `nav.open=false`, `body.nav-open` hilang; 0 error konsol; 22 rute `err=0`.
- Screenshot: `shots/task80c-desktop-*`, `shots/task80c-mobile-*`, `shots/task80c-*-topup-qr.png`.
