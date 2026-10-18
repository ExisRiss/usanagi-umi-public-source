# Usanagi Umi — Public Source Template

This repository contains the **sanitized source template** for the Usanagi Umi WhatsApp bot and its Jadibot management website.

> **Security notice:** This is intentionally not a production backup. WhatsApp sessions, phone numbers, pairing codes, database/runtime data, Pterodactyl/GitHub/Vercel credentials, API keys, environment files, deployment archives, and owner-specific configuration have been removed or replaced with placeholders.

## AutoAI per session, menu dan profil — Task60 (18 Oktober 2026)

- Tombol **AutoAI ON/OFF** di setiap kartu Sessions dan checkbox Settings. Pengaturan tersimpan per sesi, tidak mengubah sesi lain; toggle kartu berlaku tanpa restart. Command manual tetap tersedia saat AutoAI OFF.
- Perbaiki key-query `.menu` yang membuang PN tanpa mapping LID dan bisa mengirim IQ kosong. Boot compatibility patch exact-match mempertahankan identitas/device asli, tanpa hapus auth atau blind retry pesan.
- `.me` tidak lagi memakai URL foto placeholder 404. Avatar didownload dengan batas waktu/ukuran; bila tidak tersedia, profil lengkap tetap dikirim sebagai teks.
- 419 tes +15 pemeriksaan browser desktop/mobile PASS; 66/66 SHA produksi cocok dan dua domain website menyajikan versi baru. Main/autoread OFF, sesi/progres tidak direset. Penerimaan command di perangkat WhatsApp pelapor belum diverifikasi. [Detail Task60](docs/SESSION-AUTOAI-MENU-PROFILE-TASK60.md).

## Combat dan NPC website RPG — Task59 (18 Oktober 2026)

- Klik/tap monster sekarang berjalan mendekat, memulai encounter dan menyerang. Monster punya jadwal serangan server sendiri; multi-tab tidak menggandakan damage. NPC bisa diajak bicara lewat kepala/badan/label atau tombol Target sekitar.
- Perbaiki target boss/portal bertumpuk, kartu quest penghalang klik, pergantian rute dan cooldown antar-encounter. Layanan quest, shop/equip, healer, pet, capital dan dungeon tetap memakai progres yang sama.
- 374 tes otomatis dan 23 pemeriksaan browser nyata desktop/mobile PASS. Enam runtime file di-deploy code-only; 62/62 SHA cocok, empat health endpoint sehat. Main/autoread tetap OFF; tidak reset progres/sesi.
- Gameplay diuji pada SQLite terisolasi; produksi diverifikasi source, metadata, login UI dan kesehatan, bukan bermain atas akun pengguna. [Detail Task59](docs/REALMS-COMBAT-NPC-TASK59.md).

## Amfind tanpa ketergantungan endpoint yang timeout — Task58 (18 Oktober 2026)

- `/amfind` dan `/amfinder` mencari caption, komentar, serta balasan kreator dengan fallback, validasi URL, antrean rate-limit, dedup/cache dan batas waktu. Format Markdown dan trailing slash didukung; kegagalan provider tidak disamarkan menjadi “preset tidak ada”.
- Tautan pelapor teruji dari server produksi: preset ditemukan pada balasan kreator dalam 3,143 dan 2,993 detik untuk dua varian URL. Transport WA diagnostik masih mock, bukan acceptance perangkat pelapor.
- 337 tes lulus; 62/62 SHA produksi cocok, empat health endpoint sehat, delapan Jadibot tersambung. Main/autoread tetap OFF. [Detail Task58](docs/AMFIND-TIMEOUT-TASK58.md).

## Feedback ditinjau dan diperbaiki — Task57 (18 Oktober 2026)

- Audit 88 laporan: perbaikan metadata grup yang berlebihan, reservation sesi kedaluwarsa yang mengunci pairing, dan presence yang dapat menahan AutoAI. Sesi aktif/ownership, AFK, prefix, RPG dan main/autoread OFF tetap dilindungi.
- 298 tes lulus; tujuh runtime file di-deploy code-only. 59/59 SHA cocok, empat health endpoint sehat dan tujuh Jadibot tersambung. Empat reservation orphan masuk grace period 15 menit; tidak diambil alih paksa.
- Catatan Feedback sudah diperbarui; enam laporan teknis masih monitoring karena penerimaan/pairing di perangkat pelapor belum diuji. [Detail Task57](docs/FEEDBACK-AUDIT-TASK57.md).

## Balasan tanpa slash tambahan — Task56 (18 Oktober 2026)

- Hapus URL/slash dan karakter tersembunyi yang disisipkan plugin preview di depan balasan biasa maupun AutoAI. Isi pesan dan metadata pemanggil dipertahankan; contoh command tetap mengikuti prefix aktif.
- 259 tes otomatis lulus; satu runtime plugin di-deploy code-only dan bot direstart. 56/56 SHA live cocok, empat health endpoint OK, lima Jadibot tersambung; main/autoread tetap OFF.
- Transport WA masih mock pada tes; penerimaan di perangkat pengguna tidak diklaim. [Detail Task56](docs/REPLY-PREVIEW-TASK56.md).

## AFK kembali terdeteksi — Task55 (18 Oktober 2026)

- Status AFK legacy/native/impor kini memakai satu penyimpanan persisten. Chat biasa dan media mengakhiri AFK sebelum gate command private, termasuk alias PN/LID yang tepercaya.
- Status dibersihkan sebelum notifikasi; mention setelah pengguna kembali tidak lagi membaca flag AFK lama. Re-AFK, history dan pantulan pesan bot dibedakan.
- 236 tes otomatis lulus; transport WA mock bukan acceptance perangkat pengguna. [Detail Task55](docs/AFK-RETURN-TASK55.md).

## Login MMORPG & self-AutoAI — Task54 (18 Oktober 2026)

- `{prefix}realms login` dapat dijalankan lewat chat pribadi Jadibot tanpa tertahan gate premium/gameplay. Kode tidak dikirim ke grup.
- MMORPG menerima token akun dari Profil website Jadibot: pertama kali tautkan dengan kode WhatsApp, berikutnya cukup token. Satu akun/progres; tidak ada linking berdasarkan nomor diketik.
- Pesan dari akun Jadibot sendiri hanya memicu AutoAI jika dimulai `!!`, misalnya `!!buka menu` atau `!!siapa developer lu`. Ada dedup dan penjagaan echo.
- 198 tes otomatis +8 pemeriksaan browser fixture lulus; acceptance akun produksi/WhatsApp fisik terpisah. [Detail dan cara pakai Task54](docs/REALMS-LOGIN-SELF-AI-TASK54.md).

## Hotfix respons Jadibot — Task53 (18 Oktober 2026)

- Wrapper RPG tidak lagi menulis langsung ke helper `reply` readonly; repair startup/default pesan/finalizer tidak lagi menulis progression ke identitas yang ditahan.
- Source produksi sudah diperbarui dan hash readback cocok; API sehat, dua jadibot terhubung, main/autoread tetap OFF. 78 tes regresi lulus.
- Acceptance balasan pada WhatsApp pengguna masih perlu; connected bukan bukti command berhasil. [Penyebab, pengujian dan batasan Task53](docs/JADIBOT-RESPONSE-TASK53.md).

## Perbaikan website/Jadibot — Task52 (18 Oktober 2026)

- Error backend website502 diperbaiki: routing produksi kini melalui API HTTPS aktif, bukan alokasi server lama.
- Kontrol main/autoread, script OAuth/CSP, timeout relay dan tampilan wallet saat pemulihan diperbaiki. Cache metadata grup mengurangi request berulang/rate-limit; main bot tetap OFF.
- 33 pemeriksaan HTTP dan12 pemeriksaan browser live lulus pada kedua domain; pengujian owner fixture dipisahkan dari login nyata. Tidak ada data/sesi ditimpa atau key dirotasi.
- Detail: [perbaikan, deploy, feedback dan batasan Task52](docs/WEBSITE-BACKEND-TASK52.md).

## Riwayat layanan — 18 Oktober 2026 (Task51)

- AutoAI Groq aktif memakai konfigurasi privat owner; tes provider dan planner nyata berhasil.
- Authority RPG terverifikasi sudah live: 235 catatan → 220 profil, EXP/item/pet dan koin dibaca melalui bridge SQLite bersama bot/Realms. 205 LID lama masih ditahan, bukan digabung berdasarkan tebakan.
- Bot utama **OFF, tanpa pairing**, autoread OFF; API/game aktif dan satu jadibot reconnect. Wallet/trading masih dilindungi mode pemulihan.
- 237 tes, 19 pemeriksaan live, 40 hash source live cocok; backup konsisten dan vault terenkripsi terverifikasi. Bukan klaim acceptance seluruh gameplay/WhatsApp fisik atau seluruh fitur master MMORPG.
- Baca [hasil dan batasan Task51](docs/RPG-UNIFICATION-TASK51.md) sebelum deploy/restore. Jangan menimpa database live atau rollback ke adapter legacy-only setelah aktivasi.

## Structure

- `bot/` — WhatsApp main-bot and Jadibot source.
- `website/` — Jadibot website source and Vercel API routes.

## Before running a fork

1. Install the packages declared by each project's `package.json`.
2. Copy the bot configuration example to a local, ignored production configuration file and configure **your own** owners, database/storage, API integrations, and WhatsApp session.
3. Add all required environment variables only in your deployment provider or local `.env` file. Do not commit them.
4. Deploy the website with your own authentication, Vercel project, Blob/storage, and relay-secret configuration.

Some downloads, AI providers, storage, and deployment integrations need third-party keys or services. Their placeholders are deliberately empty in this public template.

## Security rules for contributors

- Never commit `config.js`, `.env*`, sessions, pairing codes, phone numbers, runtime databases, logs, media uploads, panel tokens, GitHub tokens, or Vercel credentials.
- Use the existing example configuration files and environment-variable names instead of embedding keys in source.
- Treat any secret accidentally committed as compromised: revoke/rotate it before removing it from Git history.

## License

Copyright © 2026 Usanagi Umi contributors. All rights reserved. Public visibility does not grant permission to resell, redistribute, or operate this source as a hosted service without the copyright holder's permission.

## Update 10.1.0 — 12 Oktober 2026

- Auto-AI Groq pada mention/reply, melalui dispatcher native dengan izin, registrasi, premium dan kuota yang sama.
- Isolasi koneksi main/Jadibot dan hook moderasi tetap dijalankan.
- 1.091 handler pelengkap Umi/OURIN berhasil dimuat; 6.793 alias tambahan unik. Jumlah alias bukan jumlah fitur.
- Umi menggunakan handler kompatibilitas OURIN; fitur duplikat tidak dijumlahkan dua kali. Kredit asli tetap dipertahankan.
- Provider Groq/OpenRouter website, penyimpanan key terenkripsi, UI responsif dan perbaikan 11 syntax error template lama.
- Baca [panduan Groq](bot/AUTO_AI_GROQ.md), [kredit](bot/CREDITS_PELENGKAP.md) dan [audit lengkap](bot/FEATURE_MIGRATION_REPORT.json).
- Private config, API key, database, session WhatsApp dan state produksi **tidak ada di repo ini**. Jangan menimpa server produksi dengan template sanitasi secara wholesale.
- Verifikasi: 3.329 JS/CJS/MJS lolos syntax; 27 regresi; 7 viewport UI; 3 kasus planning Groq nyata. Seluruh API eksternal/aksi WhatsApp belum diuji satu-per-satu.
