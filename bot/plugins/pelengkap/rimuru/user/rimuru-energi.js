/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/energi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "energi", "category": "user", "aliasMap": {"rimuru-user-energi": "energi", "rimuru-energi": "energi", "rimuru-cekenergi": "cekenergi", "rimuru-myenergi": "myenergi", "rimuru-limit": "limit", "rimuru-ceklimit": "ceklimit", "energi": "energi", "cekenergi": "cekenergi", "myenergi": "myenergi", "ceklimit": "ceklimit"}, "description": "Cek energi user", "usage": ".energi [@user]", "example": ".energi", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/energi.js", metadata, m, extra)
handler.help = ["rimuru-user-energi [@user]"]
handler.command = ["rimuru-user-energi", "rimuru-energi", "rimuru-cekenergi", "rimuru-myenergi", "rimuru-limit", "rimuru-ceklimit", "energi", "cekenergi", "myenergi", "ceklimit"]
handler.tags = ["user"]
handler.description = "Cek energi user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "energi", "alias": ["cekenergi", "myenergi", "energy", "limit", "ceklimit"], "category": "user", "description": "Cek energi user", "usage": ".energi [@user]", "example": ".energi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-energi": "energi", "rimuru-energi": "energi", "rimuru-cekenergi": "cekenergi", "rimuru-myenergi": "myenergi", "rimuru-limit": "limit", "rimuru-ceklimit": "ceklimit", "energi": "energi", "cekenergi": "cekenergi", "myenergi": "myenergi", "ceklimit": "ceklimit"}
export default handler
