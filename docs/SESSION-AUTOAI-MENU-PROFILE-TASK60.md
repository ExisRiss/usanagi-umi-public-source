# Task60 — AutoAI per sesi, menu 406, dan foto profil

18 Oktober 2026. Baseline Task59: `167a9f3`.

## Cara menggunakan

- Dashboard **Sessions**: setiap kartu mempunyai tombol **AutoAI ON · MATIKAN** atau **AutoAI OFF · AKTIFKAN**.
- **Settings → pilih session → AutoAI**: checkbox ikut disimpan oleh **SIMPAN & TERAPKAN**.
- Tombol kartu hanya mengirim `session_id` dan boolean `auto_ai`. Tidak mengubah prefix, owner, mode, sesi lain, API key, atau status bot utama. Toggle-only tidak merestart socket.
- OFF menghentikan pemicu AutoAI baru (mention, reply dan own-account `!!`); command eksplisit/manual tetap tersedia. Tidak membatalkan tugas terjadwal yang sudah diminta sebelumnya atau membatalkan aksi yang telah dikirim.
- Sesi lama mempertahankan perilaku ON, kecuali mempunyai pengaturan OFF eksplisit. Global emergency OFF tetap menjadi pengaman, bukan diubah oleh tombol sesi.

## Penyimpanan dan isolasi

`bot-config.json` masing-masing sesi menyimpan `autoAI.enabled`. Load/save, settings DTO dan session listing memakai profil sesi tersebut, bukan flag global bersama. Validasi API menolak string `"false"`, angka, null, array dan object; pengecekan ownership tetap mendahului akses config. File disimpan melalui temp+rename existing.

UI tidak mengubah status sebelum server mengonfirmasi. Form disabled ketika settings dimuat; request version dan session ID mencegah respons lambat sesi A menimpa form sesi B. Save ditolak bila form belum cocok dengan sesi terpilih. Backup response lama juga tidak menimpa sesi baru.

## `.menu`: kegagalan pengambilan kunci enkripsi

Stack pelapor berhenti pada `assertSessions → query(encrypt)`, sebelum pesan terkirim. Bukan bukti format menu yang salah.

Source dependency **yang benar-benar terpasang di produksi** diunduh dan diperiksa. Implementasinya membentuk `wireJids` hanya dari LID existing dan hasil mapping PN→LID, sehingga PN yang belum mempunyai mapping dibuang. Bila semua target PN belum terpetakan, IQ `key` dikirim tanpa `user`. Reproduksi dengan fungsi dependency tersebut menghasilkan `not-acceptable`/406 pada transport fixture yang menolak IQ kosong. Log pelapor tidak memuat isi IQ, jadi kondisi mapping pada kejadian historis itu sendiri tidak diklaim telah diamati.

Perbaikan:

- Pertahankan PN asli beserta device-nya bila tidak ada mapping LID terverifikasi; pakai LID hanya dari pair milik PN yang sama.
- Dedup target, jangan kirim IQ kosong, tetap lakukan Signal session validation dan key injection normal.
- Tidak membuat LID dari digit nomor, tidak membuang encryption/auth, tidak menghapus sesi, tidak memaksa pairing ulang.
- Tidak melakukan blind retry pesan atau menyembunyikan kegagalan transport sebagai sukses.
- Patch source dependency exact-match dan idempoten di boot, **sebelum import Baileys pertama**. Jika bentuk source berubah, tidak melakukan overwrite spekulatif; log meminta compatibility review.
- File dependency pascadeploy dibandingkan penuh dengan hasil patch lokal: cocok. Rich menu/asset/prefix tetap dipertahankan; plugin menu tidak diganti dengan error text atau menu palsu.

Penerimaan `.menu` di perangkat WhatsApp pelapor **belum diverifikasi**. Patch memperbaiki jalur yang direproduksi, bukan klaim semua kemungkinan error WhatsApp 406 telah hilang selamanya.

## `.me`: fallback foto 404

`xp-profile.js` sebelumnya memakai URL placeholder `https://i.ibb.co/profile.jpg` ketika avatar privat/tidak ada, kemudian menyerahkan URL rusak ke media uploader. Ini cocok dengan URL dalam error pelapor.

Sekarang URL avatar berasal dari WhatsApp dan didownload sebelum pengiriman:

- HTTPS domain WhatsApp saja, tanpa credentials/port aneh/redirect.
- Deadline 6,5 detik mencakup lookup dan download; maksimal 2 MiB, tipe dan signature gambar diperiksa.
- Foto privat/hilang/expired/404/timeout/bukan gambar → profil lengkap dikirim sebagai **teks**, tanpa ketergantungan URL placeholder.
- Foto valid → buffer gambar + caption profil. Identitas, EXP, level, limit, mention dan petunjuk prefix tetap ada.
- Satu send saja; error transport setelah send tidak menyebabkan retry teks yang bisa menggandakan pesan.

## QA

**419 tes PASS, 0 fail/skip**:

| Suite | PASS |
| --- | ---: |
| Unit/helper/session/transport compatibility/profile/boot | 146 |
| Actual dispatcher, AutoAI, AFK, routing/similarity | 143 |
| Realms/unified/login/proxy | 120 |
| Transport/CSP website | 10 |

43 tes fitur baru: 15 scoped settings/ownership/trigger, 10 dependency patch/key query, 16 avatar/profile, 2 actual dispatcher OFF/manual command. Dua boot regression yang sudah ada juga dijalankan. Serializer/WA transport/model tetap fixture; config filesystem dan SQLite nyata.

**15 browser checks PASS** dengan input UI asli desktop/mobile: login fixture, dua kartu sesi, toggle A tanpa mengubah B, persistence disk/reload, failed-save tidak mengubah status, pemilihan sesi, respons A terlambat tidak merusak B, save prefix+AutoAI B saja, nol runtime error. Auth/HTTP fixture menjalankan fungsi settings/config nyata pada direktori temporer, bukan akun produksi.

Acorn ES2020 PASS untuk config/helper/plugin/boot (hashbang dan top-level await boot diizinkan). API existing memakai syntax Node22/ES2022 sebelum task ini; lolos parser/runtime syntax check tanpa menambahkan logical assignment baru. Dependency hasil patch lolos `node --check`.

Tes utama:

```sh
node --test bot/tests/session-auto-ai.test.mjs bot/tests/baileys-session-compat.test.mjs bot/tests/profile-photo.test.mjs bot/tests/boot-native.test.mjs
node --loader ./bot/tests/realms-sqlite-loader.mjs --loader ./bot/tests/mock-native-loader.mjs --test bot/tests/native-dispatch.test.mjs
node website/tests/session-auto-ai-browser.mjs
```

## Deploy dan verifikasi produksi

- Workspace snapshot lama dipreservasi privat sebelum dipulihkan ke Task59. Hanya credential panel diekstrak dari vault existing; tidak restore DB/config/auth lama, tidak rotasi key.
- Delapan source bot dan empat public website baseline dibandingkan dengan produksi sebelum deploy; semuanya cocok.
- Guarded code-only deploy **66 target**, enam runtime source berubah; restart bot diterima. Boot menerapkan dependency compatibility patch tepat seperti hasil lokal. Tidak upload session/DB/player data.
- Website Vercel deployment `dpl_3onBuR3XjHxoRL9Cbn3JubdDnJCk` READY. Preflight pertama menolak saat backend masih restart; tidak membuat deployment dari backend tidak sehat. Setelah health pulih, deploy normal berhasil.
- Kedua domain website menyajikan app exact hash dan cache version `20261018-session60`. Browser produksi mobile membuka login tanpa runtime error; anonymous GET/POST settings tetap 401. Tidak mengubah settings milik pengguna untuk QA.
- **66/66 source SHA cocok**, dependency hasil patch cocok, empat health 200 JSON. Sembilan Jadibot/2.039 plugin; main OFF, autoread OFF, tanpa pairing main.
- Buffer verifikasi 301 chunk/63 chat/2 command: nol runtime/import/readonly/identity/cleaner/preview/AFK failure, nol `not-acceptable` dan URL avatar placeholder. Buffer ini bukan bukti penerimaan command pelapor di HP.
- Task59 RPG `play59`, metadata combat, auth gate dan source publik tetap cocok. Progress tidak direset; cleanup sesi offline ≥15 menit tetap dipertahankan.

Evidence lokal: `/home/user/deploy-check/task60/`; raw dependency/log/credential privat di `.secrets/task60`, tidak dipublikasikan. Full end-to-end login/toggle akun produksi dan physical WhatsApp acceptance belum diklaim.
