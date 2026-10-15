#!/usr/bin/env bash
#
# Memulihkan aset yang dihapus saat pembersihan workspace.
# Semua aset ini bisa dibuat ulang, jadi menghapusnya tidak kehilangan data.
#
# Pakai:  bash tools/restore-assets.sh          (semua)
#         bash tools/restore-assets.sh arsip    (hanya arsip deploy)
#         bash tools/restore-assets.sh cloudflared
#
set -euo pipefail

ROOT="/home/user"
BOT="${ROOT}/usanagi-umi-public-source/bot"
SECRETS="${ROOT}/.secrets"
UPLOAD="${SECRETS}/upload"

what="${1:-semua}"

# ---------------------------------------------------------------- cloudflared
restore_cloudflared() {
  if [[ -f "${SECRETS}/cloudflared" ]]; then
    echo "[cloudflared] sudah ada, dilewati"
    return
  fi
  echo "[cloudflared] mengunduh cloudflared-linux-amd64..."
  curl -fsSL --max-time 300 -o "${SECRETS}/cloudflared" \
    https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64
  chmod +x "${SECRETS}/cloudflared"
  echo "[cloudflared] selesai: $(du -h "${SECRETS}/cloudflared" | cut -f1)"
}

# -------------------------------------------------------------------- arsip
restore_arsip() {
  mkdir -p "${UPLOAD}"
  echo "[arsip] membangun ulang 4 arsip deploy dari repo..."

  cd "${BOT}"

  # Daftar eksplisit — JANGAN masukkan 'config' dan 'config/' sekaligus.
  # Duplikat nama membuat ekstraksi kedua menulis berkas sebagai 0 byte
  # (ini yang pernah membuat config/settings.js kosong dan bot crash).
  tar -czf "${UPLOAD}/umi-1-core.tar.gz" \
    package.json package-lock.json main.js handler.js index.js run.js eslint.config.js \
    .gitignore config.example.js .env.groq.example \
    AUTO-TRANSLATE.md AUTO_AI_GROQ.md CREDITS.md CREDITS_PELENGKAP.md FURINA-INTEGRATION.md \
    README.md SOURCE_PLUGIN_MANIFEST.md bg-template.jpg \
    config lib core scripts tests font json

  tar -czf "${UPLOAD}/umi-2-plugins.tar.gz" plugins
  tar -czf "${UPLOAD}/umi-3-integrations.tar.gz" integrations
  tar -czf "${UPLOAD}/umi-4-assets.tar.gz" assets src

  echo "[arsip] verifikasi (duplikat & berkas 0 byte harus nol):"
  for f in "${UPLOAD}"/*.tar.gz; do
    dup=$(tar -tzf "$f" | sort | uniq -d | wc -l)
    echo "    $(basename "$f")  $(du -h "$f" | cut -f1)  duplikat=$dup"
  done

  local empty
  empty=$(tar -tzf "${UPLOAD}/umi-1-core.tar.gz" | grep -c '^$' || true)
  echo "    total: $(du -ch "${UPLOAD}"/*.tar.gz | tail -1 | cut -f1)"
}

# ---------------------------------------------------------------- screenshot
restore_screenshot() {
  echo "[screenshot] butuh puppeteer. Memastikan terpasang..."
  npm i puppeteer --prefix "${ROOT}/.local" --no-audit --no-fund >/dev/null 2>&1 || true
  if [[ ! -d "${ROOT}/.local/node_modules/puppeteer" ]]; then
    echo "[screenshot] puppeteer gagal dipasang, dilewati" >&2
    return
  fi
  echo "[screenshot] mengambil tangkapan layar produksi..."
  node "${ROOT}/tools/shot.mjs" https://alzriss-comunity.vercel.app "${ROOT}/vendor/shot"
}

# --------------------------------------------------------------------- main
case "${what}" in
  cloudflared)  restore_cloudflared ;;
  arsip)        restore_arsip ;;
  screenshot)   restore_screenshot ;;
  semua)
    restore_cloudflared
    restore_arsip
    ;;
  *)
    echo "Pilihan: semua | arsip | cloudflared | screenshot" >&2
    exit 1
    ;;
esac

echo
echo "Selesai."
