# Migrasi dua server — Task49 · 18 Oktober 2026

## Hasil aktual, bukan klaim pemulihan lengkap

Panel baru: `https://ikyyxbeyy-panel.voltxyz.my.id`. Kedua server dikonfirmasi kosong sebelum upload. Pemilik memilih pemisahan bot dan game. Source terbaru berasal dari commit7567d7a, bukan source dalam arsip backup lama.

| Peran | Server | Port | Tugas |
|---|---|---:|---|
| Bot | serverjadibotVip | 2176 | Bot utama/jadibot, API, satu authority SQLite RPG |
| Game | servergameVip | 4470 | Lobi/game/trading UI, proxy Realms ke bot |
| Website existing | Project alzriss-comunity | HTTPS | Website + API serverless + Supabase tetap dipertahankan |

Keduanya memakai image Node22. API dan game menjawab200, Realms metadata200/state tanpa login401, website produksi telah dideploy READY. **Status daemon panel masih `starting` pada pemeriksaan terakhir**, meskipun HTTP/layanan sudah aktif; jangan menggantinya dengan klaim API resources sudah `running`.

- Game: https://game.gwenna.my.id
- RPG: https://game.gwenna.my.id/realms
- Website: https://alzriss-comunity.vercel.app
- API: https://api.gwenna.my.id/api/health

### Batas pemulihan data

| Komponen | Bukti / keadaan |
|---|---|
| Legacy database.json | Backup Blob18Oktober05:00UTC dipulihkan;553record, bukan553pemain unik. Nilai money/balance/EXP/level/bank/gold/diamond existing diperiksa,0perubahan. |
| Auth WhatsApp lama | Tidak ada creds.json dalam backup yang tersedia. Bot baru unregistered/pairing, bukan connected. Perlu pairing ulang dari pemilik. |
| SQLite RPG lama | Tidak ada dalam backup. Runtime baru membuat SQLite baru untuk layanan; **bukan pemulihan progres lama**. Banner pemulihan tampil pada Realms. |
| Trading | Tidak ditemukan snapshot akun yang valid. UI/market bisa diakses, tetapi login/akun/transaksi503maintenance. Tidak membuat akun pengganti atau mengisi saldo yang ditebak. |
| Wallet/top-up/order ledger | Tidak ditemukan ledger lama. Pembacaan dan penulisan dompet dikunci503, bukan ditampilkan sebagai saldo0. |
| Groq | Private.env.groq/key tidak tersedia dalam backup/workspace. Auto-AI tidak boleh dinyatakan pulih. Tidak mengganti dengan key lain. |
| Supabase/Vercel | Tetap project dan data cloud existing; bukan database yang dihapus/dibuat ulang. |
| Jadibot | Metadata/config backup bukan bukti login. Tidak menghidupkan metadata lama sebagai sesi connected. Sesi expired>=15menit tidak direstore. |
| Semua RPG lama | **Belum dikonsolidasikan.** Tidak ada persetujuan kurs money/balance/koin; pilihan dilewati ketika pemilik mengirim panel baru. PN/LID belum dijumlahkan, wallet/trading tidak dikonversi ke RPG. |

Akses fisik WhatsApp dan login valid → gameplay → status WA **belum diuji**. Pengujian browser live mencakup jalur publik dan penolakan login invalid, bukan menciptakan akun palsu di produksi. Dungeon tetap solo, bukan co-op/guild manusia.

## Arsitektur lintas server

Browser mengakses `/realms` pada origin game. `db-mirror/realms-proxy.js` hanya menghubungi origin backend yang dikonfigurasi server (`https://api.gwenna.my.id`), bukan URL dari pengguna. Cookie tetap milik origin game.

Relay menggunakan key game existing di header server-to-server. Bot mempercayai forwarded-host **hanya jika** key cocok constant-time dan hostname sesuai allowlist. Kode login/cookie pengguna tetap wajib; relay bukan cara login dengan API key. Cookie HttpOnly/SameSiteStrict/Secure, CSRF check dan SSE dipertahankan. Secret tidak dikirim dalam respons/browser.

Tidak ada database RPG di server game. Semua aksi Realms/command Usanagi memakai service SQLite pada server bot. Database guest Arena tidak diimpor.

### Tunnel dan DNS

- Bot memakai named tunnel existing `umi-api-gwenna`; api/umi-api domain diarahkan ke tunnel ini, originlocalhost2176.
- Game memakai named tunnel existing `umi-games-gwenna`, originlocalhost4470.
- Credential tunnel existing dipertahankan; tidak dirotasi. Semua proses memakai `--config ... run`, **bukan `--token`**. Tunnel alzriss-okta tidak dijalankan.
- Domain jadibot-alzriss tetap milik website/serverless; bukan dialihkan sembarangan ke port bot.
- Konfigurasi/DNS sebelum perubahan disimpan privat untuk rollback. TLS verification tidak dimatikan.

## Bootstrap dan perbaikan native

`deploy/panel/role-start.mjs` dipasang sebagai `/scripts/role-start.mjs` pada kedua server. CMD_RUN masing-masing `node scripts/role-start.mjs bot` dan `node scripts/role-start.mjs game`.

Bootstrap memuat env privat, memastikan dependency bot sesuai lockfile, menjalankan tunnel+layanan dan menulis log lokal privat. Binary cloudflared2026.10.1 diverifikasi terhadap digest release sebelum upload.

Masalah nyata saat instalasi: npm panel memblokir lifecycle native. `require('better-sqlite3')` tampak sukses karena binding baru dimuat saat konstruktor dipanggil; akibatnya endpoint state sempat500. `bot/scripts/boot.js` diperbaiki agar benar-benar membuka SQLite memory, menjalankan query lalu close. Prebuild native kemudian terpasang; state menjadi401 yang benar untuk pengunjung tanpa login. Canvas juga diverifikasi lewat pembuatan canvas nyata.

2051plugin termuat pada startup yang diperiksa; tidak ditemukan error import/syntax plugin dalam log startup final. Ini bukan pengujian semua command dari HP. Autoread dikonfirmasi OFF, pairing number tetap nomor bot utama yang sebelumnya ditentukan pemilik.

## Guard pemulihan — jangan dimatikan sembarangan

File `.deployment.env` pada bot:
- `UMI_REALMS_PUBLIC_HOST=game.gwenna.my.id`
- `UMI_WALLET_RECOVERY_REQUIRED=true`
- `UMI_REALMS_RECOVERY_NOTICE=...` menjelaskan pemulihan progres belum lengkap.

Pada game:
- `UMI_REALMS_BOT_ORIGIN=https://api.gwenna.my.id`
- `UMI_REALMS_PUBLIC_HOST=game.gwenna.my.id`
- `UMI_TRADING_RECOVERY_REQUIRED=true`

Trading guard menolak semua rute akun/transaksi, hanya GETmarket/candles/session publik yang diizinkan. Save trading juga dihentikan selama recovery. File trading kosong yang sempat dibuat startup awal dihapus **setelah dipastikan0akun/user/session/deposit/login-code**, bukan menghapus saldo lama. Wallet guard berjalan di inti read/write sehingga bukan hanya menyembunyikan tombol UI. Boost harian tetap `PUMP_ENABLED=false`; aset trading tidak diubah.

Buka guard hanya setelah ledger/data asli dipulihkan dan direkonsiliasi. Jangan seed akun/saldo11.000 dari ingatan, jangan menganggap JSON kosong sebagai backup valid, dan jangan mengubah token pelanggan.

## Update berikutnya

Gunakan `tools/deploy-split-realms.mjs`, bukan helper single-server lama:

```sh
PTERO_ENV_FILE=/home/user/.secrets/current-panel.env node tools/deploy-split-realms.mjs --check
# Setelah sourceSha256 direview dan beforeSha256 cocok baseline live:
PTERO_ENV_FILE=/home/user/.secrets/current-panel.env node tools/deploy-split-realms.mjs
```

Manifest `tools/split-realms-manifest.json` berisi24targetkode/aset lintas kedua role. ID server ditemukan dari API list berdasarkan nama; tool memeriksa drift seluruh rencana sebelum write, backup kode privat, readback hash, rollback write parsial dan hanya restart role yang berubah. **Tidak mengunggah DB, sessions atau env.** Preflight24file terhadap produksi telah lulus.

Website menggunakan `tools/deploy-website.mjs`. Skip rule diperketat supaya env/.vercel/.secrets tidak ikut upload. HTML live sebelum deploy cocok byte-for-byte dengan source sebelum tautan Realms; deployment hanya menambahkan perubahan terbaru, bukan menimpa snapshot website tua.

## Backup privat yang benar-benar dibuat

Bundle konfigurasi runtime yang tersedia, credential panel baru dan legacy JSON disimpan sebagai **AES-256-GCM + HKDF**, access private di Blob:

`private-migrations/task49/runtime-20261018.enc`

Upload → download → decrypt → byte comparison lulus. Ini **bukan backup auth WhatsApp lama, SQLite lama, atau akun trading/wallet**. Tidak ada credential baru yang dirotasi; enkripsi memakai secret backup existing, dengan salt/nonce baru. Secret dan token Blob harus tetap privat.

Jika snapshot workspace kehilangan file baru, pulihkan tanpa meminta ulang key:

```sh
npm ci --prefix website
node tools/private-recovery-vault.mjs restore \
  /home/user/.secrets/task49-recovered.tar.gz \
  private-migrations/task49/runtime-20261018.enc
```

Tool memakai `.secrets/shared-secrets.env` (BOT_BACKUP_EXPORT_SECRET) dan `.secrets/blob-token.env`; `UMI_PRIVATE_DIR` dapat mengganti direktorinya. Output0600, menolak overwrite, **tidak otomatis mengekstrak/restore produksi**. Ekstrak hanya ke staging privat kosong; ambil panel.env/konfigurasi yang diperlukan. Jangan menimpa progres baru dengan legacy JSON arsip tanpa perbandingan.

Setelah pairing ulang atau progres baru berjalan, masih perlu backup privat **baru** yang benar-benar mencakup auth terdaftar dan SQLite konsisten. Bundle Task49 tidak diperbarui otomatis setelah pairing. Gunakan capture stopped-writer pada `deploy/vps/capture-private-runtime.py`, cek retention jadibot, lalu simpan terenkripsi. Jangan mengandalkan exporter safe-operational sebagai backup penuh auth/SQLite.

## QA dan pekerjaan tersisa

- 40backend/migrasi Realms,116regresi bot,6tes tambahan(proxy/native/wallet) lulus.
- 10browser checks pada host produksi HTTPS lulus,0runtime errors; desktop dan mobile390px. Tidak ada akun sintetis produksi dibuat.
- Health bot/game200, metadata Realms200; state/login invalid401, CSRF invalid403, guest endpoint tidak menyediakan guest login produksi.
- Trading/account503 dan market200; legacy553record diverifikasi tanpa perubahan nilai ekonomi/EXP existing.
- Website deployment READY, navigasi MMORPG terlihat live. Main WA belum registered/connected pada verifikasi terakhir.

Tersisa: pairing utama/jadibot, restore disk/private backup lama jika masih bisa diselamatkan, pemulihan SQLite/ledger/config merchant/Groq, keputusan serta migrasi semua RPG lama dengan deduplikasi identitas terpercaya, dan acceptance WhatsApp nyata. Migrasi source/service aktif **tidak sama dengan** seluruh data historis sudah pulih.
