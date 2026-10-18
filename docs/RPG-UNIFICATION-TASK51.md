# Task51 — AutoAI Groq dan authority RPG live

18 Oktober 2026. **Bridge untuk identitas terverifikasi sudah aktif di produksi. Seluruh proyek MMORPG belum dinyatakan selesai.** Catatan ini menggantikan status audit-only Task50, bukan menghapus riwayat audit tersebut.

## Hasil yang terverifikasi

| Pemeriksaan | Hasil |
|---|---|
| AutoAI | Groq aktif, model `openai/gpt-oss-120b`; key hanya konfigurasi privat |
| Groq nyata | Completion HTTP200; planner percakapan dan pemilihan `menu` berhasil dalam konteks pesan sintetis |
| Main bot | OFF, tidak terdaftar/connected, tanpa pairing; autoread OFF |
| Jadibot | Satu sesi berhasil reconnect dari auth existing setelah restart |
| Layanan | Bot API, game dan metadata HTTP200 |
| Source RPG | 235 catatan PN → 220 profil canonical; 235 alias terverifikasi |
| Progres tersedia | 38.451 EXP kumulatif; satu profil memiliki pet |
| Konversi | RPG-only `money + balance + koin` → `koin` 1:1; kredit aktual 0, bukan saldo pengganti |
| Ditahan | 205 catatan LID belum memiliki pemetaan tepercaya; 0 konflik pet menunggu review pada snapshot live |
| Dikecualikan | 118 newsletter; wallet rupiah, top-up dan trading bukan sumber konversi |
| Restart nyata | Import ulang 0, kredit ulang 0; authority tetap 220 profil |
| QA | 94 backend + 143 regresi = 237 tes PASS; 19 pemeriksaan live PASS; 40 readback source SHA256 cocok |

Jumlah catatan/alias bukan jumlah orang. Dua pemetaan PN/LID dari cache autentikasi tersedia, tetapi tidak menyelesaikan 205 LID historis tersebut. Nomor yang diketik, service key, atau kemiripan profil tidak digunakan sebagai bukti identitas.

## Implementasi

- `rpg_users` menjadi authority bersama native RPG, adapter legacy/imported dan Realms web. JSON kompatibilitas menyimpan marker dan profil non-RPG, bukan salinan saldo kedua.
- Alias PN/device dinormalisasi. LID hanya terikat melalui pemetaan tepercaya. Context native menggunakan sender/target canonical, termasuk keanggotaan guild; getter pesan diadaptasi dengan `Object.defineProperty` pada pesan, bukan assignment getter.
- EXP/item awal digabung konservatif berdasarkan nilai tertinggi. Sumber terlambat hanya menambah selisih highwater historis, sehingga progres baru dan item yang telah dipakai tidak di-reset. Level diturunkan dari EXP kumulatif dengan `floor(EXP / 10000) + 1`.
- Pet tidak dideduplikasi hanya berdasarkan isi identik. Koleksi saat ini tidak direka ulang dari alias terlambat; perbedaan diberi penanda review. Health awal yang rendah tidak dinaikkan oleh default.
- Unit-of-work memadukan row pemain, guild dan job dengan compare-and-swap, receipt pesan/fase, validasi dan transaksi SQLite. Validasi/serialisasi yang ditangkap plugin tetap membatalkan perubahan tertunda. Penulisan sesudah context ditutup ditolak. Batas fase berada sebelum outbound; bukan klaim setiap side effect eksternal satu command dapat di-rollback.
- Reward warnet/berdagang disimpan sebagai job durable sebelum outbound; settlement setelah restart diuji exactly-once. Notifikasi bersifat best-effort: crash antara pengiriman dan penandaan bisa menggandakan notifikasi, bukan hadiah. Worker tidak memakai main bot yang dimatikan sebagai fallback.
- Cooldown imported persisten dan leaderboard menggunakan profil canonical. Replacement/prototype/property-definition bypass dibatasi. Konflik alias baru menahan sumber baru tanpa memblokir canonical yang sudah sah.
- Endpoint owner agregat mengembalikan `stage=live-unified`, `currencyConversionApplied=true`, `legacySpendAdapterEnabled=true`, `verifiedProgressUnified=true`, tetapi **`progressUnificationComplete=false`** selama masih ada identitas ditahan atau review pet.
- Status AutoAI owner hanya menampilkan provider/model/configured/enabled, bukan key. Endpoint status/backup tanpa tiket mendapat401.

## Deploy dan backup

1. Source live dibandingkan ulang dengan manifest; backup kode privat dan readback SHA256. Modul dependency dikirim sebelum importer/main. Tidak ada upload database, sesi, atau snapshot website tua.
2. Approval privat `.rpg-unification.enabled` berisi `RPG_ONLY_1_TO_1`, permission600. Startup membuat snapshot SQLite `VACUUM INTO` dan JSON sebelum konversi. Setelah aktif, marker SQLite tetap mengaktifkan bridge meskipun file approval hilang.
3. Endpoint **POST** `/api/owner-console/rpg-backup` menggunakan tiket owner-console existing, gate RPG, tujuan direktori tetap, file600 dan rate limit. Snapshot live diambil tanpa menghentikan layanan. Endpoint tidak menerima path, SQL atau kode dari pemanggil.
4. Snapshot sebelum dan sesudah migrasi diperiksa: SQLite integrity `ok`; sebelum0 canonical, sesudah220 canonical/235 receipt/38.451 EXP/koin0. JSON sesudah berisi235 marker dan205 LID ditahan.
5. Delapan berkas non-session, termasuk snapshot sebelum/sesudah dan konfigurasi runtime privat, dienkripsi AES256-GCM/HKDF ke Blob PRIVATE `private-migrations/task51/runtime-unified-20261018.enc`: 101584 byte ciphertext, download/decrypt byte-roundtrip cocok. Tidak ada credential yang dirotasi.
6. Backup auth jadibot terkelola Task50 tetap di server dan mengikuti cleaner disconnect≥15menit. Arsip Task51 **tidak berisi auth WhatsApp**; jangan membuat salinan auth offsite tanpa retensi.
7. Hardening final dideploy otomatis dan restart kembali diverifikasi: import0/kredit0, API aktif, jadibot reconnect. Pemeriksaan akhir mencocokkan tepat40 hash source live, bukan hanya menerima hash baseline.

**Jangan melakukan rollback ke kode legacy-only setelah aktivasi.** Menghapus approval tidak mematikan authority. Jangan restore SQLite/JSON lama di atas progres live atau menjalankan ulang bootstrap empty-root. Jika ada masalah, pertahankan fail-closed, ambil snapshot konsisten terbaru dan lakukan perbaikan maju. Backup bukan izin untuk menimpa progres sesudah snapshot.

## Bukti dan batasan

Artefak lokal sanitized: `deploy-check/task51/{backend-final.tap,regression-final3.tap,auto-ai-live.json,rehearsal-release.json,final-health.json,live-backup.json,restart-final.json,readback-final.json,vault.json}`. Data asli, log mentah, keys dan backup hanya di `.secrets/task51` atau lokasi runtime privat; tidak disertakan dalam repo publik.

- Rehearsal final menggunakan salinan SQLite **sebelum migrasi produksi**, bukan database rehearsal yang sudah dimutasi: import235, replay/restart0, source tidak berubah, integrityok.
- Tes backend mencakup shared currency, transfer atomic/idempotent, caught-validation/serialization rollback, source drift, inventory highwater, pet multiplicity/review, trusted identity, root/nested stats, cooldown, guild rollback, job durable, boot snapshot dan wallet guard.
- Regresi mencakup AutoAI/settings, dispatcher native, imported compatibility, intent routing, bratvid2 stiker, rich-info, similarity, papan ular vintage.
- Tes planner Groq menggunakan provider nyata tetapi pesan sintetis; bukan acceptance dari WhatsApp fisik. Tidak dibuat akun palsu produksi atau bypass login untuk mengklaim gameplay web sudah diterima.
- Wallet/order/trading lama tidak tersedia. Mutasi/account read tetap503, market200, boost harian02.00 tetap dilarang. Tidak mengarang saldo atau histori.
- 205 LID, acceptance gameplay login sah/WA fisik, dan kelengkapan seluruh fitur sosial/admin/multiplayer dalam master MMORPG belum dinyatakan selesai. Bridge progres bukan bukti seluruh master prompt telah dipenuhi.
