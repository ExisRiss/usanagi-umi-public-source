# LAPORAN TASK 67 — "Nomor ini sudah dimiliki akun lain" padahal belum tertaut

## Laporan
User tidak bisa pairing di website. Muncul pesan **"Nomor ini sudah dimiliki akun lain"**, padahal nomornya belum tertaut ke akun mana pun. Nomor bot: `6285792965374`.

## Temuan
1. **Registry menyimpan pemilik lama walau sesinya sudah mati.**
   Log bot menunjukkan siklus ini untuk nomor tersebut:
   ```
   [JADIBOT] Restore session 6285…
   [JADIBOT] 6285… berhasil terhubung
   [JADIBOT] 6285… disconnected (401)
   [JADIBOT] 6285… logout, session dihapus
   ```
   Setelah `logout` 401, folder sesi dihapus tetapi baris registry `data/jadibot-platform.json` bisa tertinggal sampai pembersih otomatis (15 menit) jalan. Selama itu setiap pairing ditolak **409**.

2. **Cache registry tidak pernah kedaluwarsa.**
   `lib/jadibot-platform-state.js` memakai `if (database) return database` selamanya. Kalau berkas diubah proses lain (tools/restore/pembersih), API tetap memakai salinan lama → pemilik "hantu".

3. **Nomor bot utama bisa dipakai sebagai jadibot.**
   Tidak ada penjagaan; dua socket dengan kredensial sama saling menendang → `disconnected (401)` dan sesi utama berisiko terhapus (persis log di atas).

## Perbaikan (deploy langsung ke bot `d178bf71`)
| Berkas | Perubahan |
|---|---|
| `lib/jadibot-platform-state.js` | cache mengikuti `mtime` berkas; berubah di disk = langsung dibaca ulang |
| `lib/jadibot-platform-api.js` | (a) nomor dengan sesi **mati** (tidak ada subbot aktif & `creds.registered` bukan true) boleh diambil alih + sesi lama dibuang; (b) kalau pairing gagal, kepemilikan dikembalikan; (c) 409 hanya kalau sesi masih hidup, pesannya menyertakan email tersamar + `code: NUMBER_OWNED`; (d) nomor bot utama hanya bisa ditautkan owner tanpa `startSubBot` (`code: MAIN_BOT_NUMBER`); (e) `statusFor()` nomor bot utama mengikuti status bot utama |

sha256 live:
- `jadibot-platform-api.js` = `5b08a68d2d8a…`
- `jadibot-platform-state.js` = `aaf28996a710…`

## Bukti uji (end-to-end, bukan mock)
1. Dibuat user uji non-owner (`isOwner:false`) lewat Supabase admin.
2. Registry diberi entri "hantu" `6281111111111` milik `ghost-legacy-user`.
3. `POST /api/session/pairing` dengan nomor itu → **bukan 409**; baris registry berpindah ke user uji (ambil alih nomor mati bekerja).
4. WhatsApp menolak nomor uji (`bad-request`) → sesuai desain, **kepemilikan dikembalikan** ke `ghost-legacy-user`.
5. Semua artefak uji dibersihkan: registry kembali **12 sesi**, folder sesi uji dihapus, user uji Supabase dihapus.

## Status nomor `6285792965374`
Saat ini **tidak ada** di registry (`sessions`/`backups`) dan tidak punya folder sesi → **bebas**. Blocker 409 sudah hilang; silakan minta user pairing ulang.

Kalau masih muncul, catat jam kejadiannya: sekarang setiap penolakan ditulis ke log server
(`[JADIBOT-API] tolak pairing 6285****374: milik …`) dan ke `platform.log.jsonl` sesi, jadi pemilik lama bisa langsung dilacak.

## Catatan
- Ambil alih hanya terjadi kalau sesi benar-benar mati; sesi yang masih terhubung tetap ditolak (anti-rebutan).
- Sesi lama yang diambil alih dihapus supaya pairing mulai bersih; verifikasi tetap di WhatsApp (kode pairing harus dimasukkan dari nomor itu).
