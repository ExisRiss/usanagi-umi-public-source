/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/nambalban.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nambalban", "category": "rpg", "aliasMap": {"rimuru-rpg-nambalban": "nambalban", "rimuru-nambalban": "nambalban", "rimuru-tambal": "tambal", "rimuru-bengkel": "bengkel"}, "description": "Buka jasa tambal ban, awas ban meledak!", "usage": ".nambalban", "example": ".nambalban", "cooldown": 150, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/nambalban.js", metadata, m, extra)
handler.help = ["rimuru-rpg-nambalban"]
handler.command = ["rimuru-rpg-nambalban", "rimuru-nambalban", "rimuru-tambal", "rimuru-bengkel"]
handler.tags = ["rpg"]
handler.description = "Buka jasa tambal ban, awas ban meledak!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nambalban", "alias": ["tambal", "bengkel"], "category": "rpg", "description": "Buka jasa tambal ban, awas ban meledak!", "usage": ".nambalban", "example": ".nambalban", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 150, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-nambalban": "nambalban", "rimuru-nambalban": "nambalban", "rimuru-tambal": "tambal", "rimuru-bengkel": "bengkel"}
export default handler
