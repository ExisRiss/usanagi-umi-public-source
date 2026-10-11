/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/kurir.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kurir", "category": "rpg", "aliasMap": {"rimuru-rpg-kurir": "kurir", "rimuru-kurir": "kurir", "rimuru-antar": "antar", "rimuru-paket": "paket"}, "description": "Nganter paket orang, awas anjing galak!", "usage": ".kurir", "example": ".kurir", "cooldown": 120, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/kurir.js", metadata, m, extra)
handler.help = ["rimuru-rpg-kurir"]
handler.command = ["rimuru-rpg-kurir", "rimuru-kurir", "rimuru-antar", "rimuru-paket"]
handler.tags = ["rpg"]
handler.description = "Nganter paket orang, awas anjing galak!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kurir", "alias": ["antar", "paket"], "category": "rpg", "description": "Nganter paket orang, awas anjing galak!", "usage": ".kurir", "example": ".kurir", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-kurir": "kurir", "rimuru-kurir": "kurir", "rimuru-antar": "antar", "rimuru-paket": "paket"}
export default handler
