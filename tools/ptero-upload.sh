#!/bin/bash
# Unggah berkas ke server panel baru lewat signed URL (curl, tahan flap auth).
# Pakai: tools/ptero-upload.sh <server-id> <file-lokal> [nama-remote]
set -u
K="${PANEL2_PLTC:?set PANEL2_PLTC}"
B="https://beyy.ikynebula.my.id/api/client"
SID="$1"; FILE="$2"; NAME="${3:-$(basename "$FILE")}"
URL=""
for i in $(seq 1 10); do
  URL=$(curl -s --max-time 40 "$B/servers/$SID/files/upload" -H "Authorization: Bearer $K" -H "Accept: application/json" | python3 -c "import json,sys; print(json.load(sys.stdin).get('attributes',{}).get('url',''))" 2>/dev/null)
  [ -n "$URL" ] && break
  echo "signed-url coba $i gagal, tunggu 15s…"; sleep 15
done
[ -z "$URL" ] && { echo "GAGAL ambil signed url"; exit 1; }
curl -s --max-time 280 -o /tmp/upload-resp.txt -w "upload HTTP %{http_code} (%{size_upload} byte, %{time_total}s)\n" -X POST "$URL" -F "files=@$FILE;filename=$NAME"
head -c 200 /tmp/upload-resp.txt; echo
