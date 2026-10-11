/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/tqto2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tqto2", "category": "main", "aliasMap": {"rimuru-main-tqto2": "tqto2", "rimuru-tqto2": "tqto2", "rimuru-thanksto2": "thanksto2", "rimuru-credits2": "credits2", "rimuru-kredit2": "kredit2", "tqto2": "tqto2", "thanksto2": "thanksto2", "credits2": "credits2", "kredit2": "kredit2"}, "description": "Menampilkan daftar kontributor bot", "usage": ".tqto2", "example": ".tqto2", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/tqto2.js", metadata, m, extra)
handler.help = ["rimuru-main-tqto2"]
handler.command = ["rimuru-main-tqto2", "rimuru-tqto2", "rimuru-thanksto2", "rimuru-credits2", "rimuru-kredit2", "tqto2", "thanksto2", "credits2", "kredit2"]
handler.tags = ["main"]
handler.description = "Menampilkan daftar kontributor bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tqto2", "alias": ["thanksto2", "credits2", "kredit2"], "category": "main", "description": "Menampilkan daftar kontributor bot", "usage": ".tqto2", "example": ".tqto2", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-main-tqto2": "tqto2", "rimuru-tqto2": "tqto2", "rimuru-thanksto2": "thanksto2", "rimuru-credits2": "credits2", "rimuru-kredit2": "kredit2", "tqto2": "tqto2", "thanksto2": "thanksto2", "credits2": "credits2", "kredit2": "kredit2"}
export default handler
