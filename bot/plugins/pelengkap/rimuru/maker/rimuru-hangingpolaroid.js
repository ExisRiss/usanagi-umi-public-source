/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/hangingpolaroid.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hangingpolaroid", "category": "maker", "aliasMap": {"rimuru-maker-hangingpolaroid": "hangingpolaroid", "rimuru-hangingpolaroid": "hangingpolaroid", "rimuru-polaroid2": "polaroid2", "rimuru-pola": "pola", "rimuru-bingkai": "bingkai", "rimuru-frame": "frame", "hangingpolaroid": "hangingpolaroid", "polaroid2": "polaroid2", "pola": "pola", "bingkai": "bingkai", "frame": "frame"}, "description": "Membuat foto bingkai Polaroid gantung yang otomatis menyesuaikan ukuran foto asli (Responsive pure SVG)", "usage": ".pola (Kirim/Reply Foto)", "example": ".pola"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/hangingpolaroid.js", metadata, m, extra)
handler.help = ["rimuru-maker-hangingpolaroid (Kirim/Reply Foto)"]
handler.command = ["rimuru-maker-hangingpolaroid", "rimuru-hangingpolaroid", "rimuru-polaroid2", "rimuru-pola", "rimuru-bingkai", "rimuru-frame", "hangingpolaroid", "polaroid2", "pola", "bingkai", "frame"]
handler.tags = ["maker"]
handler.description = "Membuat foto bingkai Polaroid gantung yang otomatis menyesuaikan ukuran foto asli (Responsive pure SVG)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hangingpolaroid", "alias": ["polaroid2", "pola", "bingkai", "frame"], "category": "maker", "description": "Membuat foto bingkai Polaroid gantung yang otomatis menyesuaikan ukuran foto asli (Responsive pure SVG)", "usage": ".pola (Kirim/Reply Foto)", "example": ".pola", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-hangingpolaroid": "hangingpolaroid", "rimuru-hangingpolaroid": "hangingpolaroid", "rimuru-polaroid2": "polaroid2", "rimuru-pola": "pola", "rimuru-bingkai": "bingkai", "rimuru-frame": "frame", "hangingpolaroid": "hangingpolaroid", "polaroid2": "polaroid2", "pola": "pola", "bingkai": "bingkai", "frame": "frame"}
export default handler
