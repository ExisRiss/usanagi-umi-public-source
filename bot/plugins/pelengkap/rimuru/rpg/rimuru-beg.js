/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/beg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "beg", "category": "rpg", "aliasMap": {"rimuru-rpg-beg": "beg", "rimuru-beg": "beg"}, "description": "Mengemis untuk mendapatkan uang receh", "usage": ".beg", "example": ".beg", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/beg.js", metadata, m, extra)
handler.help = ["rimuru-rpg-beg"]
handler.command = ["rimuru-rpg-beg", "rimuru-beg"]
handler.tags = ["rpg"]
handler.description = "Mengemis untuk mendapatkan uang receh"
handler.importSource = "rimuru"
handler.importConfig = {"name": "beg", "alias": ["ngemis", "minta"], "category": "rpg", "description": "Mengemis untuk mendapatkan uang receh", "usage": ".beg", "example": ".beg", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-beg": "beg", "rimuru-beg": "beg"}
export default handler
