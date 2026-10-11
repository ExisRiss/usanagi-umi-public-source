/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/nyapu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nyapu", "category": "rpg", "aliasMap": {"rimuru-rpg-nyapu": "nyapu", "rimuru-nyapu": "nyapu", "rimuru-cleaning": "cleaning", "rimuru-bersih": "bersih"}, "description": "Nyapu jalan, siapa tau nemu barang jatuh!", "usage": ".nyapu", "example": ".nyapu", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/nyapu.js", metadata, m, extra)
handler.help = ["rimuru-rpg-nyapu"]
handler.command = ["rimuru-rpg-nyapu", "rimuru-nyapu", "rimuru-cleaning", "rimuru-bersih"]
handler.tags = ["rpg"]
handler.description = "Nyapu jalan, siapa tau nemu barang jatuh!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nyapu", "alias": ["cleaning", "bersih"], "category": "rpg", "description": "Nyapu jalan, siapa tau nemu barang jatuh!", "usage": ".nyapu", "example": ".nyapu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-nyapu": "nyapu", "rimuru-nyapu": "nyapu", "rimuru-cleaning": "cleaning", "rimuru-bersih": "bersih"}
export default handler
