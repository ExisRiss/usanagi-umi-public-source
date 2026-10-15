# Roadmap Pengembangan — Usanagi Umi

Arah: **website + fitur + sistem bot, dikembangkan menyeluruh**; deploy website ke
Vercel, bot ke VPS/Pterodactyl. Kredensial menyusul, jadi item yang butuh kredensial
ditandai 🔑 dan baru bisa diuji setelah nilainya tersedia.

Legenda: ✅ selesai · 🔜 berikutnya · ⏳ menunggu kredensial

---

## Fase 0 — Fondasi & audit ✅

Sudah dikerjakan di workspace ini:

- [x] Clone + audit struktur repo (3.713 file, 81 MB)
- [x] Syntax check 3.316 file JS bot → 0 error
- [x] Syntax check 7 Vercel Function → 0 error
- [x] `npm ci` bot → 731 paket
- [x] 27 tes regresi lulus (auto-AI 17, native-dispatch 7, imported-compat 3)
- [x] `feature-smoke` → 1.091/1.091 handler ter-import
- [x] `deploy/` — PM2, systemd, Pterodactyl, nginx TLS, firewall, update, backup
- [x] `deploy/scripts/preflight.mjs` — pemeriksa kesiapan bot & website
- [x] `deploy/scripts/vercel-deploy.sh` — link + env + deploy + verifikasi health
- [x] `PANDUAN-DEPLOY.md` — panduan 8 langkah ujung ke ujung
- [x] Server preview lokal website (dengan penanganan `/assets/` ala Vercel)

---

## Fase 1 — Keamanan & stabilitas 🔜

Semua item di bawah bisa dikerjakan **tanpa kredensial**.

### 1.1 Keamanan
- [ ] `apiPort` bind host bisa dikonfigurasi (`apiHost`), default `127.0.0.1` di VPS,
      tetap `0.0.0.0` khusus Pterodactyl — mengurangi paparan port internal
- [ ] Header keamanan + validasi origin pada bot API (CORS eksplisit, bukan wildcard)
- [ ] Rate limit per-token pada endpoint berat (upload plugin, chat upload)
- [ ] Uji otorisasi: pastikan setiap endpoint `/api/*` menolak tanpa token yang sah
- [ ] Bersihkan sisa `console.log` yang berpotensi memuat token/nomor

### 1.2 Kualitas kode
- [ ] Konsistenkan default prefix (`/` vs `.` vs `/^[./#!]/`) jadi satu sumber kebenaran
- [ ] ESLint bersih atau daftar pengecualian yang disengaja
- [ ] Rombak dependency usang: `sengkrep-ryna`, `fluent-ffmpeg`, `crypto-js`, `glob@10`
- [ ] Tambah `npm run check` = syntax + lint + preflight + tes, untuk dipakai CI
- [ ] Rapikan `integrations/rimuru` yang duplikat dari `ourin` (tanpa menghapus kredit)

### 1.3 Ketahanan
- [ ] Health check `/api/health` kaya status (socket WA, uptime, jumlah jadibot)
- [ ] Watchdog: deteksi socket mati tapi proses masih hidup → restart sendiri
- [ ] Batas memori & pembersihan cache media agar tidak bocor di VPS 2 GB
- [ ] Uji beban dasar: 50 permintaan paralel ke `/api/*`

**Kriteria selesai:** preflight 0 FAIL, tes lulus, `nmap` port internal = filtered,
uji otorisasi lolos semua.

---

## Fase 2 — Website Jadibot 🔜

Butuh Supabase untuk uji fungsi nyata 🔑. Yang murni tampilan bisa jalan lebih dulu.

- [ ] Audit alur pengguna: login → connect Jadibot → pairing → dashboard → settings
- [ ] Perbaikan responsif (uji 7 viewport: 360, 390, 414, 768, 1024, 1280, 1920)
- [ ] Mode gelap/terang eksplisit + hormati `prefers-color-scheme`
- [ ] Status real-time: daftar Jadibot, kondisi koneksi, umur sesi
- [ ] Halaman plugin: unggah, aktif/nonaktif, lihat error pemuatan
- [ ] Halaman log & konsol owner dengan penyaring
- [ ] Pengelolaan kunci API (buat, cabut, lihat pemakaian)
- [ ] Penanganan error yang jelas — jangan biarkan layar putih
- [ ] Aksesibilitas: fokus keyboard, label ARIA, kontras warna

**Kriteria selesai:** semua alur di atas berfungsi di produksi Vercel, tidak ada
error di konsol browser, tampil rapi di 360 px sampai 1920 px.

---

## Fase 3 — Bot: fitur & sistem 🔜

- [ ] Inventaris fitur: tandai plugin yang endpoint pihak ketiganya sudah mati
- [ ] Perbaiki/ganti plugin mati dengan sumber yang masih hidup
- [ ] Sistem ekonomi & RPG: pastikan konsisten, anti-eksploit, ada tes
- [ ] Moderasi grup: anti-link/spam/toxic lebih pintar, tanpa salah tuduh
- [ ] AI: rutekan fallback berlapis (Groq → OpenRouter → Gemini Web), kuota per-peran
- [ ] Perintah owner: audit perintah berbahaya + konfirmasi ganda
- [ ] Kualitas menu & bantuan: tidak ada perintah hilang dari daftar
- [ ] Tes regresi untuk setiap fitur baru

**Kriteria selesai:** setiap fitur yang diklaim ada benar-benar ada di menu,
lolos tes, dan tidak bisa dipakai untuk melewati batas peran.

---

## Fase 4 — Otomasi & operasional ⏳

- [ ] CI GitHub Actions: syntax + lint + tes + preflight pada setiap push
- [ ] Dependabot untuk dependency
- [ ] Pemantauan uptime + notifikasi ke WhatsApp/Discord saat bot mati
- [ ] Backup terenkripsi otomatis + uji pemulihan (restore benar-benar dicoba)
- [ ] Docker + docker-compose sebagai jalur self-host alternatif
- [ ] Catatan rilis bertahap, bukan satu lompatan besar

---

## Aturan kerja

1. **Satu perubahan = satu alasan.** Tidak mencampur perbaikan bug dengan fitur baru.
2. **Tes dulu, klaim kemudian.** Tidak ada "sudah jalan" tanpa keluaran tes.
3. **Rahasia tidak pernah masuk repo.** `config.js`, `.env*`, `sessions/`, token — semuanya.
4. **Perubahan yang menyentuh produksi selalu lewat `update.sh`** (backup → tes → restart).
5. **Kredit dipertahankan.** Port dari Rimuru/OURIN tetap mencantumkan asalnya.
