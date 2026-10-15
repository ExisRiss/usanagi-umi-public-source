# Umi DB Mirror — cermin cadangan di panel beyy

Layanan penerima backup kecil (Node.js tanpa dependensi) yang berjalan di
server Pterodactyl `serverbackuppVip` di `https://beyy.ikyhost.cloud`
(alokasi publik `167.99.67.212:2016`). Fungsinya menyimpan **salinan cermin**
dari backup produksi agar bisa dipulihkan bila server utama bermasalah.
Produksi tidak bergantung pada layanan ini.

## Yang disimpan

Setiap jam, cron backup website (Vercel) menjalankan satu "generasi" backup
dan — selain menyimpannya di Vercel Blob seperti sebelumnya — juga mengirim
salinan ke layanan ini:

| kind         | isi                                                        |
|--------------|------------------------------------------------------------|
| `website`    | snapshot tar.gz kode website                               |
| `website-db` | dump JSON.gz tabel database website (Supabase: profil, audit, katalog plugin, media, plugin API) + metadata pengguna Auth |
| `bot`        | arsip tar.gz bot (termasuk `database.json`)                |
| `jadibot`    | arsip tar.gz sesi jadibot (kredensial WhatsApp)            |

Hash SHA-256 tiap arsip disimpan sebagai berkas pendamping `.json` dan
dicocokkan otomatis oleh pengirim. Retensi: 48 generasi terbaru per jenis.

## API

Semua selain `/health` wajib header `Authorization: Bearer <token>`
(token ada di `service-token.txt` di container dan di berkas rahasia
`.secrets/beyy-panel-credentials.env` milik pemilik, di luar repo).

- `GET /health` — status + jumlah arsip per jenis
- `POST /mirror/:kind/:generation` — unggah arsip (body mentah .tar.gz/.json.gz)
- `GET /mirror/list` — daftar arsip + ukuran + SHA-256
- `GET /mirror/:kind/:generation` — unduh arsip untuk restore
- `DELETE /mirror/:kind/:generation` — hapus arsip

## Restore singkat

1. Unduh arsip yang dibutuhkan dari `/mirror/:kind/:generation`.
2. Verifikasi: `sha256sum` harus sama dengan nilai di `/mirror/list`.
3. `jadibot`/`bot`: ekstrak kembali ke direktori bot lalu restart bot.
   `website-db`: impor JSON ke tabel Supabase terkait. `website`: kode situs.

## Menjalankan ulang

Di panel: pastikan `server.js`, `package.json`, `service-token.txt` ada di
root container, variabel `CMD_RUN` = `npm start`, lalu Start. egg generik
Node.js akan memasang dependensi (tidak ada) dan menjalankan server pada
port alokasi (`SERVER_PORT`).

## Cloudflare Tunnel `alzriss-okta` (sejak 15 Okt 2026)

Proses yang sama juga mengawasi **cloudflared** untuk tunnel
`alzriss-okta` (88438bb0-…) agar domain `gwenna.my.id` dan subdomainnya
tidak lagi error 1033:

- Jalankan dari konfigurasi lokal `tunnel-config.yml` + `tunnel-creds.json`
  di container (salinan config ada di repo sebagai `tunnel-config.yml`).
  Mode token murni terbukti menimpa ingress Cloudflare dengan konfigurasi
  kosong → semua hostname 503, jadi jangan dipakai.
- Selama aplikasi deployer lama belum dipasang, port aplikasi
  (3000/3200/3300/3500/3600/3700/3800) dijawab halaman penampung
  "Layanan Sedang Disiapkan". Bila aplikasi aslinya sudah dipasang di
  port-port itu, matikan placeholder dengan mengubah perintah start
  menjadi `UMI_PLACEHOLDER=off npm start`.
- cloudflared mati → supervisor menjalankannya lagi dalam 10 detik.
