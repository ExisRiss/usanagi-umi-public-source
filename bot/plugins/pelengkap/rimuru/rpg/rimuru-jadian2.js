/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/jadian2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tembak2", "category": "rpg", "aliasMap": {"rimuru-rpg-tembak2": "tembak2", "rimuru-tembak2": "tembak2", "rimuru-terima2": "terima2", "rimuru-tolak2": "tolak2", "rimuru-putus2": "putus2", "rimuru-pasangan2": "pasangan2", "tembak2": "tembak2", "terima2": "terima2", "tolak2": "tolak2", "putus2": "putus2", "pasangan2": "pasangan2"}, "description": "Fitur hubungan: tembak, terima, tolak, putus, dan cek pasangan", "usage": ".tembak @tag\n.terima\n.tolak\n.putus\n.pasangan", "example": ".tembak @6281234567890", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/jadian2.js", metadata, m, extra)
handler.help = ["rimuru-rpg-tembak2 @tag\n.terima\n.tolak\n.putus\n.pasangan"]
handler.command = ["rimuru-rpg-tembak2", "rimuru-tembak2", "rimuru-terima2", "rimuru-tolak2", "rimuru-putus2", "rimuru-pasangan2", "tembak2", "terima2", "tolak2", "putus2", "pasangan2"]
handler.tags = ["rpg"]
handler.description = "Fitur hubungan: tembak, terima, tolak, putus, dan cek pasangan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tembak2", "alias": ["terima2", "tolak2", "putus2", "pasangan2"], "category": "rpg", "description": "Fitur hubungan: tembak, terima, tolak, putus, dan cek pasangan", "usage": ".tembak @tag\n.terima\n.tolak\n.putus\n.pasangan", "example": ".tembak @6281234567890", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-tembak2": "tembak2", "rimuru-tembak2": "tembak2", "rimuru-terima2": "terima2", "rimuru-tolak2": "tolak2", "rimuru-putus2": "putus2", "rimuru-pasangan2": "pasangan2", "tembak2": "tembak2", "terima2": "terima2", "tolak2": "tolak2", "putus2": "putus2", "pasangan2": "pasangan2"}
export default handler
