# Task50 — keputusan owner, backup, dan audit penyatuan RPG

Tanggal: 18 Oktober 2026. **Penyatuan RPG belum selesai.**

## Keputusan aktif
- Kerjakan layanan WA/web dan konsolidasi RPG; owner tidak punya backup lama tambahan.
- Gabungkan hanya uang game `money + balance + koin` menjadi `koin`, rasio 1:1, setelah backup dan deduplikasi identitas.
- Wallet rupiah, top-up, trading, bank/aset lain tidak masuk konversi ini.
- **Bot utama OFF, tidak perlu pairing. Autoread OFF.** Nomor/keys existing tidak dihapus atau dirotasi. Instruksi pairing pada catatan Task49 bersifat historis dan sudah diganti keputusan ini.

## Hasil live
- Pengaturan OFF diterapkan lewat owner relay dan diverifikasi lagi sesudah deploy/restart.
- API, game dan metadata Realms HTTP200. Log runtime sesudah restart mencatat satu jadibot berhasil terhubung. Ini bukan pengujian seluruh command dari HP.
- Tambahan runtime: GET `/api/owner-console/rpg-unification`, wajib tiket owner-console existing. Hanya mengembalikan agregat; tidak menampilkan JID, record asli atau saldo per pengguna. Tanpa tiket/tiket audience lain mendapat401.
- Endpoint ini **audit-only**: `currencyConversionApplied=false`, `legacySpendAdapterEnabled=false`, `progressUnificationComplete=false`. Tidak menjalankan rehearsal atau konversi live.
- Dua file bot diperbarui dengan preflight drift, backup kode, SHA256 readback dan restart bot. Game/website tidak ditimpa; sesi/data produksi tidak diunggah ulang.

## Audit snapshot konsisten dan rehearsal
Snapshot diambil setelah writer berhenti, lalu service langsung dinyalakan kembali. Bukan snapshot dari ZIP source lama.

| Hasil | Record |
|---|---:|
| Total record legacy | 558 |
| PN personal | 235 |
| LID | 205 |
| Newsletter | 118 |
| Layak untuk rehearsal currency | 205 |
| Ditahan: LID belum terverifikasi | 205 |
| Ditahan: duplikasi PN ambigu | 30 |
| Dikecualikan: newsletter | 118 |

Angka ini **record, bukan jumlah orang unik**. Tiga puluh record tersebut ditahan karena duplikasi, **bukan saldo invalid**. Total kredit yang layak pada snapshot adalah0. Tidak menebak saldo historis yang tidak tersedia.

SQLite snapshot integrity `ok`; terdapat0baris `rpg_users` dan0akun Realms pada snapshot. Ini bukan bukti progres RPG lama telah dipulihkan.

Tool `tools/audit-rpg-unification.mjs` membuka SQLite input readonly, membuat salinan baru di direktori privat `.secrets`, lalu mencoba transaksi pada salinan itu saja. Hasil:205impor staging,0kredit; replay0impor/0kredit; integrity `ok`; JSON asal tidak berubah; **0write konversi produksi**. Record sumber lengkap disimpan hanya dalam staging privat. EXP/item/pet tidak diberi nilai migrasi tebakan.

Pengaman: PN/LID ambigu ditahan; duplikasi yang salah satu nilainya invalid tetap tidak boleh lolos; alias baru atas identitas yang punya receipt tidak dikredit ulang; overflow/nilai negatif/noninteger ditolak; perubahan sumber/canonical membatalkan seluruh transaksi.

## Backup dan retensi sesi
- Snapshot awal memuat2`creds.json`, satu registered. Ini sesi baru yang tersedia setelah Task49, bukan recovery seluruh sesi lama.
- 838 file dari satu sesi aktif disalin ke `sessions-backup/<active-session>` pada server bot. Semua SHA256 dibandingkan lewat download arsip readback; cocok. Sesi live tidak ditimpa.
- Lokasi ini dikelola cleaner existing: sesi putus>=15menit beserta backup per-sesinya dihapus. Tes terisolasi membuktikan penghapusan auth+backup expired, pelestarian sesi online, dan tidak menghapus auth bot utama.
- Arsip auth sementara di server dihapus. Tiga arsip auth lokal juga dihapus setelah backup terkelola terverifikasi, agar tidak tertinggal salinan sesi yang luput dari retensi. **Tidak ada backup auth offsite baru**; salinan sesi ini masih satu server.
- Backup non-auth18file (konfigurasi, credential panel, JSON, SQLite dan state yang tersedia) tersimpan terenkripsi pada BlobPRIVATE `private-migrations/task50/runtime-data-20261018.enc` (41155bytes ciphertext). Download/decrypt byte-roundtrip lulus; key existing tetap. Byte SQLite/JSON sama dengan snapshot konsisten awal.
- Backup lokal non-auth: `/home/user/.secrets/task50/pre-unify-data-no-auth.tar.gz`. Restore vault ke lokasi privat baru; jangan auto-extract/menimpa state live atau menganggap metadata sesi sebagai auth.

## Verifikasi
- 11 tes baru: planner/receipt/rollback/privacy dan retensi backup, semuanyaPASS.
- 46 tes integrasi/regresi Realms/migrasi/proxy/native/wallet dengan loader fixture, semuanyaPASS. Percobaan awal tanpa loader fixture gagal5tes; invocation diperbaiki, bukan menghapus assertion.
- 15 pemeriksaan livePASS: health, auth/CSRF, mainOFF, guard wallet/trading, audit owner dan privacy.25target source readback/preflight.
- Bukti sanitasi: `deploy-check/task50/` di workspace. Plan detail, data, log mentah dan credential hanya `.secrets`; tidak di-commit.

## Belum selesai / syarat aktivasi berikutnya
1. Penyatuan identitas PN/LID berdasarkan bukti tepercaya, tanpa menggabungkan akun berdasar nomor yang diketik atau kemiripan nama.
2. Jalur baca/tulis command RPG lama dan web harus menuju authority yang sama, atomic/idempotent. Jangan mengimpor saldo satu arah sementara command lama tetap membelanjakan saldo JSON terpisah.
3. Aturan dan implementasi EXP/level, inventory, pet serta transfer lintas pemain; cegah loop level-up dan stale-save/lost update.
4. Acceptance gameplay dengan login sah serta command WhatsApp fisik. Belum diuji dalam Task50.
5. Ledger wallet/trading/order lama dan Groq key tetap tidak tersedia. Guard503tetap aktif; tidak membuat saldo/histori pengganti. Backup tambahan tidak ada menurut owner.

Task50 baru menuntaskan keputusan operasional, backup, audit dan rehearsal. **Bukan release penyatuan seluruh RPG atau klaim MMORPG production-ready.**
