# Umi + Eclipse Realms — mulai di sini

**18 Oktober 2026 · Task47**

Paket source lengkap bot, website, game dan preview. Tidak berisi password, sesi WhatsApp, data pemain atau node_modules.

## Mau tes game sekarang?

Di Arena: buka kartu **Live Preview**, klik **Mainkan versi tes**. Data uji terpisah dari akun WhatsApp. URL e2b mentah bisa meminta token akses platform; jangan memakai API key bot untuk melewatinya.

Di komputer/VPS sendiri (Node 22):

```sh
npm ci --prefix standalone/realms
cd standalone/realms
REALMS_MODE=preview REALMS_DATA_DIR=./data PORT=4173 npm start
```

Buka `http://localhost:4173/realms`. Desa dan hutan Greenleaf, Royal Capital, serta Hollow Crypt **solo** bisa dimainkan. Ambil quest Elder Rowan, beli/equip gear, kalahkan 3 slime dan klaim quest sebelum masuk dungeon. Tombol Atlas menjelaskan lokasi/portal; WASD/klik atau D-pad di HP.

## Mau pindah semua ke VPS baru?

Baca **[docs/VPS-MIGRATION-TASK47.md](docs/VPS-MIGRATION-TASK47.md)**. Ada kebutuhan OS/Node, lockfile dependency, Docker preview, systemd bot+game, HTTPS, backup privat, restore dan checklist cutover. Website/serverless tetap memakai stack existing.

**Penting:** backup yang tersedia belum punya auth WhatsApp atau SQLite RPG produksi. Perlu disk/snapshot privat VPS lama; jika auth tidak tersedia, perlu pairing ulang. Jangan menyebut source ZIP ini sebagai backup penuh sesi/progres. Data test tidak boleh dipakai menggantikan data produksi.

QA lokal: **40 backend/migrasi + 116 regresi + 16 browser checks**, tanpa error runtime browser. Produksi VPS baru, Docker build dan WhatsApp fisik belum diverifikasi. Party/guild/co-op manusia dan sejumlah fitur master spec masih belum selesai.
