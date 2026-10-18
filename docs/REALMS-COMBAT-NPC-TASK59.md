# Task59 — combat dan percakapan NPC Realms

Tanggal: 18 Oktober 2026. Baseline: `1f4a70a` (Task58).

## Bug yang direproduksi sebelum perbaikan

Tes browser dengan klik nyata pada source yang hash-nya sama dengan produksi:

- Klik kepala/badan Elder Rowan tidak membuka percakapan: hitbox lama hanya menghitung jarak dari kaki.
- Klik Moss Slime hanya berjalan mendekat. Tombol Attack masih disabled sampai pemain menekan Interaksi secara terpisah.
- Dalam encounter, HP tetap 100 setelah empat detik tanpa input: monster hanya membalas aksi attack, tidak mempunyai jadwal serangan sendiri.
- Tes lanjutan menemukan kartu quest menangkap klik boss/portal, dan cooldown antar-encounter dapat menggagalkan satu klik menuju encounter dungeon berikutnya.

## Perubahan

### Backend authoritative

- Konstanta bersama: attack pemain 550 ms, serangan monster 2.200 ms, encounter range 15, NPC range 13, hostile aggro range 6, respawn/grace 2.500 ms.
- `advance(accountId)` berjalan dalam transaksi SQLite dan gate RPG existing. State/action/SSE terautentikasi memanggilnya; deadline serangan disimpan bersama HP, enemyTurns, event dan revision.
- Dua tab atau service instance tidak menggandakan satu serangan. Maksimal satu overdue hit per update; tidak ada burst damage karena offline lama. Saat tidak ada koneksi/request, tidak ada background loop yang menghukum pemain offline.
- Attack pemain tidak lagi menimbulkan counterattack instan; monster memiliki cadence tersendiri. Defeat menghentikan encounter dan mengembalikan pemain ke desa, healer dapat menghidupkan kembali.
- Encounter lama mendapat grace timer; encounter rusak dibersihkan tanpa hadiah. Monster dengan nama property prototype juga ditolak.
- Movement dapat memicu hostile aggro kecil, selain slime pasif. Region, quest boss, urutan dungeon, respawn dan safe capital tetap diperiksa server.
- `talk` memvalidasi NPC, region, jarak dan tidak sedang combat. Delapan NPC memakai teks/service yang ditentukan server. Tidak menerima koordinat/damage/timer palsu.
- Progres, receipt idempotency, currency RPG-only, trusted linking, privacy dan atomic store existing dipertahankan. Tidak ada migrasi ulang data.

### Browser

- Hitbox kepala/badan/label berdasarkan piksel. Target yang bertumpuk menawarkan pilihan, termasuk sentinel dan tangga crypt.
- Klik/tap NPC berjalan mendekat lalu berbicara; panel layanan lama tetap dipakai untuk quest, toko, healer, pet dan kerajaan.
- Klik monster berjalan dalam jarak interaksi, memulai encounter lalu menyerang. Attack/Skill dapat memulai encounter tanpa langkah Interaksi tambahan.
- Tombol **Target sekitar** membantu layar sentuh. D-pad dan keyboard tetap tersedia.
- Antrean aksi diserialkan; revision/server time menolak state lama. Cooldown mengacu pada jam server, dan klik encounter berikutnya menunggu sisa grace alih-alih gagal diam-diam.
- Membatalkan/mengganti rute tidak meneruskan tujuan lama. Berjalan berhenti pada jarak interaksi, tidak harus menabrak kaki NPC atau boss di atas portal.
- Pemilihan monster lain tidak diam-diam menyerang monster yang salah saat combat aktif.
- Kartu ringkasan quest tidak menghalangi klik world; tautan jurnal eksplisit dan aktivasi keyboard tetap bekerja.
- Efek/toast damage monster mengikuti event server. Tidak ada damage frontend-authoritative.
- Cache app/style: `20261018-play59`. Art dan stack tidak diganti.

## Verifikasi

**374 tes otomatis PASS**, tanpa fail/skip:

| Kelompok | PASS |
| --- | ---: |
| Unit/helper, AFK, preview, metadata, cleanup | 103 |
| Dispatcher, AutoAI, AFK, routing/similarity | 141 |
| Realms, login/proxy, unified RPG (24 tes combat/NPC baru) | 120 |
| Transport website | 10 |

Acorn ES2020: catalog, service, HTTP, dan app semuanya PASS.

**23 pemeriksaan browser PASS**, memakai klik/tap asli pada server preview dengan SQLite terisolasi, bukan injeksi `action()`/`planWalk()` atau seeded progression:

- Desktop/mobile login dan character creation.
- Klik kepala NPC, jalan jauh lalu percakapan, summon, beli/equip.
- Klik monster dan attack pertama; dua tab menerima HP/cadence server yang sama.
- Tiga kemenangan quest dan hadiah, healer, portal capital dan percakapan kerajaan.
- Pilihan portal/boss bertumpuk; dungeon, dua guard, phased boss, peti dan reload persistence.
- Target chooser mobile, D-pad, Attack-to-engage, damage monster saat idle, escape.
- Tidak ada overflow horizontal pada 320/390/768/1440 px; nol browser runtime error.

Suite: `standalone/realms/tests/browser-interactions.mjs`. Hanya boleh diarahkan ke preview: script memeriksa `meta.preview === true` sebelum membuat akun.

Contoh menjalankan:

```sh
# Dari standalone/realms; gunakan data uji sendiri, bukan DB produksi.
REALMS_MODE=preview REALMS_DATA_DIR=/path/to/isolated-qa PORT=4173 node --loader ./loader.mjs server.mjs
# Terminal lain, dari root repo:
REALMS_TEST_OUTPUT=/path/to/qa-output node standalone/realms/tests/browser-interactions.mjs
node --loader ./bot/tests/realms-sqlite-loader.mjs --test bot/tests/realms-combat-npc.test.mjs
```

## Deploy dan batas verifikasi

- Enam source produksi diunduh dan dibandingkan sebelum edit. Guarded code-only deploy memeriksa seluruh 62 target untuk live drift, mengunggah enam file berubah, membaca ulang hash, lalu restart bot yang melayani/proxy Realms. Tidak mengunggah preview server, SQLite QA, auth, config atau snapshot website lama.
- **62/62 SHA produksi cocok**. App/CSS yang tersaji melalui `game.gwenna.my.id` juga sama dengan file lokal; HTML memakai cache version baru.
- Empat endpoint health 200 JSON. Meta produksi menunjukkan combat constants baru dan `preview:false`; anonymous state tetap 401.
- Browser produksi mobile membuka login dengan source baru, nol JS error. Tidak membuat akun QA di produksi dan tidak melakukan gameplay atas akun pengguna.
- Sembilan Jadibot terhubung, 2.039 plugin; main OFF, autoread OFF, tanpa pairing main. Buffer log 181 chunk saat verifikasi: nol runtime/import/readonly/identity/cleaner/preview/AFK failure.
- Gameplay end-to-end diuji di lingkungan terisolasi dengan backend nyata. Login akun produksi milik pengguna dan penerimaan WhatsApp fisik **belum diuji**. Ini bukan klaim seluruh backlog master MMORPG telah selesai.
- Progres, credential dan sesi tidak direset/dirotasi. Kebijakan cleanup sesi offline 15 menit tetap berlaku.

Evidence lokal: `/home/user/deploy-check/task59/` (baseline, TAP, browser-final, manifest readback, public browser dan health). Raw log/credential tetap privat di `.secrets`, tidak masuk repository.
