# Task61 — AutoAI lebih natural dan nyambung

18 Oktober 2026. Baseline Task60 `7ecc870`.

Ini perubahan **prompt, konteks singkat, routing dan pengujian**. Tidak melakukan fine-tuning, pelatihan ulang bobot, mengganti provider/model/key, atau menjadikan percakapan pengguna sebagai dataset pelatihan.

## Perilaku

- Gaya Indonesia santai, mengikuti gaya pengguna secukupnya. Balasan biasanya 1–4 kalimat; detail bila diminta. Tidak wajib emoji, menyapa ulang, daftar solusi, menawarkan fitur, atau pertanyaan di akhir setiap pesan.
- Saat curhat, mendengarkan dahulu. Permintaan “cuma mau didengerin” tidak berubah menjadi ceramah atau menjalankan command. AI diarahkan tidak mengarang detail/perasaan, tidak berpura-pura manusia atau menjadi teman eksklusif, dan tetap jujur soal identitas AI.
- Pertanyaan/curhat/basa-basi berkeyakinan tinggi memakai **chat-only**: tanpa kandidat fitur, tidak memperluas pencarian katalog, dan hasil command dari model diblokir secara deterministik.
- Permintaan tindakan eksplisit tetap memakai routing, prefix, permission, native dispatcher dan jadwal existing. Menu/grup/game tidak kehilangan jalur langsung; model tidak boleh mengaku tindakan berhasil hanya karena merencanakannya.
- Respons cooldown lebih netral, tanpa kalimat menyalahkan pengguna. Cooldown, provider budget, dedup, fallback model dan batas waktu tetap dipertahankan.
- Pedoman gaya bukan jaminan setiap keluaran sempurna. Model tetap dapat sesekali bertanya atau memakai ungkapan yang kurang pas; kualitas percakapan bukan seluruhnya dibuktikan tes deterministik.

## Konteks dan privasi

- Kunci konteks terdiri dari **scope sesi + chat + pengirim**. Tidak menggabungkan nomor dan LID yang belum terverifikasi. Orang lain dalam grup atau sesi lain tidak mendapat konteks tersebut.
- Hanya giliran yang memang ditujukan ke AutoAI dan jawaban percakapan yang jalur kirimnya berhasil. Bukan pembacaan seluruh riwayat WhatsApp. Resolved send bukan bukti pesan dibaca di HP.
- RAM-only: maksimal 128 thread, empat pasangan user/assistant per thread, 800 karakter tiap bagian dan maksimal 2.400 karakter riwayat yang diteruskan ke model. Kedaluwarsa setelah 20 menit sejak commit terakhir, tidak dapat dibaca sesudah expiry; pembersihan berkala satu menit dan ketika diakses. Restart menghapus seluruh konteks ini.
- Tidak membuat database, backup atau arsip percakapan baru. Pola provider key/Bearer dan rahasia berlabel seperti password/token/OTP disamarkan; bukan jaminan pendeteksian semua informasi sensitif.
- Riwayat dikirim sebagai data terbatas, bukan system instruction, bukti izin, atau bukti command sukses. Prompt membedakan ucapan pengguna dari dugaan jawaban AI.
- Dengan AutoAI aktif, kirim **“lupakan obrolan kita”** melalui mention/reply bot, atau `!!lupakan obrolan kita` dari akun Jadibot sendiri. Yang dihapus hanya konteks RAM untuk sesi/chat/pengirim tersebut, **bukan pesan WhatsApp**.
- Forget tidak memakai model dan tidak tertahan cooldown. Ticket sebelum model call mencegah response lama menghidupkan kembali konteks setelah forget/expiry/eviction. Response model yang masih menunggu serta balasan dalam jeda typing dibatalkan setelah konteks dihapus. Pesan atau tindakan yang sudah dikirim tidak dapat ditarik kembali oleh fitur ini.

## Trigger dan pengaturan

Task60 tetap berlaku: setiap sesi punya AutoAI ON/OFF sendiri. Pengguna lain memakai mention/reply; pesan dari akun Jadibot sendiri harus diawali `!!`. Tidak mengaktifkan balasan AI pada seluruh chat biasa. Owner/admin/registrasi/ban dan pembatas lain tetap dihormati. Main bot dan autoread tetap OFF.

## QA

**451 tes PASS, 0 fail/skip**:

| Kelompok | PASS |
| --- | ---: |
| Unit/helper, AFK, metadata, cleanup, session, profile, boot, conversation | 177 |
| Actual dispatcher, AutoAI, AFK, routing/similarity | 144 |
| Realms/unified/login/proxy | 120 |
| Website transport/CSP | 10 |

32 tes baru: 31 conversation/memory/privacy/race plus satu actual-handler roundtrip. Mencakup isolasi session/chat/sender, TTL/bounds/copy, redaksi, no-action curhat, command hallucination, one-call chat, successful/failed/fallback delivery, direct command, OFF/registration/ban, forget ketika model/typing masih pending, dan konteks pada panggilan berikutnya melalui handler sebenarnya. WA serializer/transport dan model pada unit/dispatcher memakai fixture; SQLite/filesystem regresi nyata.

Acorn ES2020 PASS untuk empat modul AutoAI. Numeric separators di planner dinormalisasi tanpa perubahan nilai. Handler existing lolos ES2022/Node22. Regresi Task60 toggle/manual-command/vendor patch/avatar serta Task59 RPG tetap lulus.

### Uji provider nyata

Menggunakan key Groq existing secara privat, hanya pesan sintetis, tanpa mengirim ke pengguna/grup WhatsApp. Bandingkan kode baseline dan kode baru:

1. “Aku lagi kepikiran presentasi besok. Aku cuma mau didengerin, jangan kasih solusi dulu.”
2. “Tadi aku bilang kepikiran apa?”
3. “makasih ya”

Baseline pada pengulangan terakhir meminta penjelasan ulang; pada percobaan awal malah fallback “maksudmu fitur yang mana”. Versi baru menyebut **presentasi besok** dengan benar dan membalas ucapan terima kasih tanpa menjalankan command. Sampel akhir versi baru: 459/301/368 ms dari workspace, tiga panggilan provider; prompt 850/903/934 token. Ini sampel, bukan SLA atau bukti semua topik berhasil.

Evaluasi ini mengonfirmasi kontinuitas konteks, bukan fine-tuning atau penerimaan WhatsApp fisik. Tone sesekali masih memuat pertanyaan tambahan meskipun pedoman meminta secukupnya; tidak diklaim sempurna.

## Deploy dan verifikasi

- Snapshot workspace lama dipreservasi privat sebelum pemulihan ke Task60. Empat source live dibandingkan sebelum edit, seluruhnya cocok. Credential panel/key existing dipulihkan privat, tidak dirotasi; tidak restore data/auth lama.
- Lima runtime source diperbarui lewat guarded code-only deploy. Pemeriksaan race forget berikutnya menghasilkan follow-up tiga file dan restart kedua, lalu full readback akhir.
- **67/67 SHA produksi cocok**, empat health endpoint 200 JSON. Sembilan Jadibot, 2.039 plugin; main OFF/autoread OFF/tanpa pairing main. Buffer akhir 122 chunk/17 chat/0 command: nol runtime/import/readonly/identity/cleaner/preview/AFK failure. Ini tidak membuktikan balasan percakapan telah diterima pengguna.
- Task60 dependency key-query patch tetap exact hash; website session60 dan toggle per-session tetap sesuai source. Task59 Realms play59/combat/auth/public files tetap utuh. Tidak perlu redeploy website/game untuk perubahan backend ini.
- Tidak mengubah settings user, sesi auth, progres RPG, wallet/trading, atau kebijakan cleanup offline 15 menit.

Evidence lokal: `/home/user/deploy-check/task61/` (TAP, baseline, live-model comparison, deploy/readback/health). Credential/raw log hanya `.secrets/task61`. Physical WhatsApp acceptance tetap belum diuji.
