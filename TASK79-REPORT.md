# TASK79 — Pisah Halaman Bot Utama: Setting / Pairing / Console

**Tanggal:** 2026-10-20 (UTC) · 21:4x WITA
**Repo:** `ExisRiss/usanagi-umi-public-source`
**Commit:** `7b8c95d` (halaman + gate role), `f1c22fc` (cooldown lintas halaman)
**Deploy:** `dpl_BASZykBRBbqwLTmbEpuYH4AzhAMw` → https://alzriss-comunity.vercel.app
**Aset:** `assets/app.js?v=20261020-botpages1` (`window.__UMI_JS_VER='20261020-botpages1'`)

---

## 1. Permintaan owner

> "Pisahin tambahin halaman setting bot utama (khusus akun dengan role owner ke atas kayak partner dan developer), halaman pairing bot utama (khusus role owner ke atas), halaman console bot utama (role owner ke atas), halaman bot utama hapus aja ganti dengan 3 itu."

Hasilnya:

| Sebelum | Sesudah |
|---|---|
| 1 menu **Bot Utama** (`#main-console`) berisi terminal + pairing + toggle + hapus sesi/config dalam satu halaman | **3 menu terpisah** (halaman lama dihapus): **Setting Bot Utama**, **Pairing Bot Utama**, **Console Bot Utama** |

Urutan nav sekarang (owner & partner):

```
… Panel → Top Up → Shop → ACC Top Up → Upload ZIP → Pairing → Profil → Settings → Chat → Plugin → Console
→ Setting Bot Utama → Pairing Bot Utama → Console Bot Utama
→ Owner → MMORPG → AI Agent → AI Owner → Keluar (paling bawah)
```

### Keputusan role

Role yang diizinkan: **`partner`, `owner`, `developer`**.

- Owner secara eksplisit menyebut "owner ke atas kayak partner dan developer", jadi ketiganya dimasukkan.
- Role `admin` dan `user` **tidak** mendapat akses.
- Halaman owner lain (Owner panel, Upload ZIP, ACC Top Up, AI Owner, AI Agent mode owner) **tetap owner-only** — tidak ikut dibuka.
- Gating dilakukan **di server** (`website/api/platform.js` → `requireMainBot`) dan **di UI** (`hasMainBotAccess()`), jadi menyembunyikan menu saja tidak cukup.

---

## 2. Isi tiap halaman

### Setting Bot Utama (`#main-settings`)
- Ringkasan status: koneksi, nomor pairing ter-mask, socket, prompt console, runtime.
- Toggle **AKTIFKAN/MATIKAN BOT UTAMA** (langsung berlaku, tanpa restart).
- Toggle **AUTO READ** (centang biru) + penjelasan.
- Pintasan ke halaman Pairing.
- **RESET CONFIG BOT UTAMA** (hapus `.main-bot.env`, kosongkan nomor, aktifkan bot) dengan penjelasan efeknya.

### Pairing Bot Utama (`#main-pairing`)
- Form nomor (`SIMPAN & MINTA CODE`).
- Kotak kode besar `#mainBotPairCode` (format `XXXX-XXXX`) + `SALIN CODE` + `MINTA CODE LAGI`.
- Catatan status/error dari server (bahasa Indonesia), termasuk saran `HAPUS SESI` bila sesi rusak.
- **HAPUS SESI BOT UTAMA** (hapus `sessions/creds.json` + sesi di memori; sesi jadibot tidak tersentuh).
- Langkah pasang bot utama (WhatsApp → Perangkat tertaut → kode).

### Console Bot Utama (`#main-console`)
- Status koneksi + `REFRESH STATUS` + `BERSIHKAN LAYAR`.
- Terminal log mentah (`#mainConsoleLogs`, polling 1,5 dtk).
- Form kirim input prompt console (tidak disimpan di audit/backup).
- Catatan bahwa kode pairing ada di halaman Pairing, bukan di log.

---

## 3. Perubahan per berkas

| Berkas | Perubahan |
|---|---|
| `website/api/platform.js` | Tambah `MAIN_BOT_ROLES = {partner, owner, developer}` + `requireMainBot(profile)`. 10 route `main-console/*` (status, logs, input, pairing-number, pairing-request, main-session, main-config, autoread GET/POST, main-bot) memakai `requireMainBot`; sisanya tetap `requireOwner`. +18/−10 baris. |
| `website/index.html` & `website/public/index.html` | Nav "Bot Utama" diganti 3 link `data-mainbot` (ikon gear / link / terminal). Section `main-consolePage` lama dipecah menjadi `main-settingsPage` + `main-pairingPage` + `main-consolePage` (console saja). Semua ID lama dipertahankan. Versi `app.js` dinaikkan ke `20261020-botpages1`. Kedua berkas identik (sync-public Vercel juga menyalin `index.html` → `public/index.html`). |
| `website/public/assets/app.js` | `MAIN_BOT_ROLES`, `hasMainBotAccess()`, route guard + judul 3 halaman, `openMainSettings()`, `openMainPairing()`, `loadMainConsole()` menulis ke dua kotak status, `setPairingNote()`, visibilitas `[data-mainbot]` di `applyIdentity()` **dan** `setView()`, fallback `data.status.pairing_code`, `pairCooldownUntil`. +25/−19 baris. |

Diffstat total: **4 berkas, +161 / −35**.

---

## 4. Bukti live (bukan mock)

### 4.1 Deploy

- Vercel: `dpl_BASZykBRBbqwLTmbEpuYH4AzhAMw` — **READY**, production alias `https://alzriss-comunity.vercel.app`.
- HTML live memuat `main-settingsPage`, `main-pairingPage`, `main-consolePage`; JS live `__UMI_JS_VER='20261020-botpages1'` dan `pairCooldownUntil`.
- Catatan: scope `TeamTwCNMEAL8AoOA0whO30gFU4S` dari handoff Task78 **sudah tidak ada**; tim aktif `exisriss-projects` (dipakai untuk deploy).

### 4.2 Matriks role (API live, akun uji sementara)

| Role | `GET /api/platform/main-console/status` | `GET /api/platform/agent/status` (owner-only) |
|---|---|---|
| `user` | **403** `Hanya owner, partner, dan developer yang diizinkan.` | — |
| `partner` | **200** (status asli bot) | **403** `Hanya owner platform yang diizinkan.` |
| `developer` | **200** + `logs` **200** | — |
| `owner` | **200** | **200** |

Akun uji `task79check.<ts>@alzriss.com` dibuat lewat Supabase Admin, di-set `user → partner → developer`, lalu **dihapus** (profil `[]`, auth `user_not_found`). Tidak ada akun sintetis yang tertinggal.

### 4.3 UI live (Playwright)

- **Owner `AlzRiss`** (`owner + developer`): nav lengkap, 3 halaman tampil, "Keluar" paling bawah.
  - Setting: `BELUM TERPASANG | Bot utama: AKTIF · Nomor: 6282******396 · Socket: siap · Runtime 2622 dtk`; tombol toggle `MATIKAN BOT UTAMA` + chip `AKTIF`; auto read `AKTIF`.
  - Pairing: `pairing_error` asli **"Koneksi WhatsApp terputus saat pairing. Tekan HAPUS SESI BOT UTAMA, lalu MINTA CODE LAGI."** — ditampilkan apa adanya.
  - Console: **192.981 karakter** log mentah termuat; 0 error konsol.
- **Partner** (akun uji): 3 menu terlihat, 4 menu owner **hidden**, akses paksa `#owner` dialihkan ke Dashboard.
- **Developer** (akun uji): 3 menu terlihat, halaman Setting memuat status asli.
- **User** (uji lokal + API live): 3 menu hidden, `#main-settings` dialihkan ke Dashboard, API **403**.
- Mobile 390px: halaman Pairing tampil tanpa overflow.

Screenshot:
`shots/task79-live-main-settings.png`, `task79-live-main-pairing.png`, `task79-live-main-console.png`,
`task79-live-nav-bottom.png`, `task79-live-partner-*.png`, `task79-live-developer-settings.png`,
`task79-live-mobile-pairing.png`, `task79-local-*.png`.

---

## 5. Bug sampingan yang ikut diperbaiki

1. **Menu owner bisa terlihat oleh semua akun login.** `applyIdentity()` menyembunyikan `[data-owner]`, tetapi `setView()` kemudian menghapus `hidden` dari semua `[data-private]` (menu owner juga punya atribut itu). Sekarang `setView()` menghitung ulang visibilitas `[data-owner]` dan `[data-mainbot]` setiap navigasi.
2. **Kode pairing bisa kosong setelah submit.** Respons POST dengan `status` tetapi tanpa `pairing_code` di level atas dulu menimpa kode dari `data.status` dengan string kosong. Sekarang fallback ke `data.status.pairing_code` (3 tempat: submit, hapus sesi, reset config).
3. **Cooldown "MINTA CODE LAGI" hilang saat pindah halaman.** Karena halaman kini terpisah dan `stopTimers()` berjalan tiap navigasi, sisa cooldown disimpan di `state.pairCooldownUntil` dan dipulihkan oleh `openMainPairing()`.
4. **Status halaman Setting/Console.** `loadMainConsole()` dulu hanya menulis ke `#mainConsoleStatus`; sekarang juga `#mainSettingsStatus`, dan semua akses elemen pairing null-safe (`setPairingNote`).

---

## 6. Batas jujur & risiko

1. **Bot utama belum tertaut saat verifikasi.** Server mengembalikan `pairing_error` asli `Koneksi WhatsApp terputus saat pairing…`; `socket_ready` sempat `false` lalu `true`. Kode pairing **sengaja tidak diminta ulang** selama Task79 agar tidak menambah rate-limit WhatsApp. Halaman Pairing menampilkan error yang sama, bukan mengarang "berhasil".
2. **Tidak ada akun partner-only/developer-only permanen** di database (akun partner yang ada juga owner), jadi uji gating partner/developer memakai akun uji sementara yang sudah dihapus. Yang menentukan akses tetap server, bukan UI.
3. **Console bisa berat** karena menampilkan log mentah (192 KB saat uji). Browser memotong buffer 700 KB; server tetap menyimpan buffer sendiri.
4. **Perubahan bot runtime:** tidak ada. Task79 murni website (UI + API gate). Route bot tetap memverifikasi tiket HMAC seperti Task78.
5. **Deploy Vercel tidak auto dari Git** (belum `vercel git connect`); deploy dilakukan manual lewat CLI. Scope tim yang benar `exisriss-projects`.

---

## 7. Cara pakai

1. Login website dengan akun ber-role **owner / partner / developer**.
2. Buka menu **Setting Bot Utama** → pastikan bot **AKTIF**, atur **Auto Read**.
3. Buka **Pairing Bot Utama** → masukkan nomor (format `62…`, tanpa `+`) → **SIMPAN & MINTA CODE**.
4. Masukkan kode `XXXX-XXXX` di WhatsApp → **Perangkat tertaut** → **Tautkan dengan nomor telepon**. Kode hidup ±60 detik; kalau habis tekan **MINTA CODE LAGI**.
5. Kalau muncul `Connection Failure` / sesi logout → **HAPUS SESI BOT UTAMA** lalu **MINTA CODE LAGI**.
6. Butuh log mentah / input prompt → **Console Bot Utama** (log yang sama dengan panel, tanpa perlu buka Pterodactyl).

---

## 8. Status akhir

- [x] Tiga halaman terpisah, halaman Bot Utama lama dihapus dari nav.
- [x] Gate role server: user 403, partner/developer/owner 200; route owner lain tetap 403 untuk partner.
- [x] Nav urut, "Keluar" paling bawah.
- [x] Deploy production + alias.
- [x] Uji UI live owner/partner/developer + mobile, 0 error konsol.
- [x] `STATUS-DEPLOY.md` diperbarui.
- [x] Akun uji sementara dibersihkan.
- [ ] Pairing bot utama sampai tertaut — **tertahan kondisi WhatsApp/sesi**, bukan UI (lihat §6.1).
