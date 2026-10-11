/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/readmore.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "readmore", "category": "tools", "aliasMap": {"rimuru-tools-readmore": "readmore", "rimuru-readmore": "readmore", "rimuru-selengkapnya": "selengkapnya", "rimuru-spoiler": "spoiler"}, "description": "Membuat teks baca selengkapnya (spoiler)", "usage": ".readmore <text_awal>|<text_akhir>", "example": ".readmore Hai|Ini adalah pesan rahasia", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/readmore.js", metadata, m, extra)
handler.help = ["rimuru-tools-readmore <text_awal>|<text_akhir>"]
handler.command = ["rimuru-tools-readmore", "rimuru-readmore", "rimuru-selengkapnya", "rimuru-spoiler"]
handler.tags = ["tools"]
handler.description = "Membuat teks baca selengkapnya (spoiler)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "readmore", "alias": ["selengkapnya", "spoiler"], "category": "tools", "description": "Membuat teks baca selengkapnya (spoiler)", "usage": ".readmore <text_awal>|<text_akhir>", "example": ".readmore Hai|Ini adalah pesan rahasia", "isGroup": false, "isBotAdmin": false, "isAdmin": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-readmore": "readmore", "rimuru-readmore": "readmore", "rimuru-selengkapnya": "selengkapnya", "rimuru-spoiler": "spoiler"}
export default handler
