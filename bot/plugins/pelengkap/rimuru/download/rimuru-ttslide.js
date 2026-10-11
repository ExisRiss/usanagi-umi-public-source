/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/ttslide.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ttslide", "category": "download", "aliasMap": {"rimuru-download-ttslide": "ttslide", "rimuru-ttslide": "ttslide", "rimuru-tiktokslide": "tiktokslide", "ttslide": "ttslide", "tiktokslide": "tiktokslide"}, "description": "Mengambil semua gambar dari TikTok photo/slideshow", "usage": ".ttslide <url>", "example": ".ttslide https://vt.tiktok.com/xxxx/", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/ttslide.js", metadata, m, extra)
handler.help = ["rimuru-download-ttslide <url>"]
handler.command = ["rimuru-download-ttslide", "rimuru-ttslide", "rimuru-tiktokslide", "ttslide", "tiktokslide"]
handler.tags = ["download"]
handler.description = "Mengambil semua gambar dari TikTok photo/slideshow"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ttslide", "alias": ["tiktokslide"], "category": "download", "description": "Mengambil semua gambar dari TikTok photo/slideshow", "usage": ".ttslide <url>", "example": ".ttslide https://vt.tiktok.com/xxxx/", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-ttslide": "ttslide", "rimuru-ttslide": "ttslide", "rimuru-tiktokslide": "tiktokslide", "ttslide": "ttslide", "tiktokslide": "tiktokslide"}
export default handler
