/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antispam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antispam", "category": "group", "aliasMap": {"rimuru-group-antispam": "antispam", "rimuru-antispam": "antispam", "rimuru-antispamgc": "antispamgc", "antispamgc": "antispamgc"}, "description": "Mengatur fitur perlindungan grup dari pesan spam secara brutal", "usage": ".antispam <on/off/action/delay>", "example": ".antispam on\n.antispam warning\n.antispam 2", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antispam.js", metadata, m, extra)
handler.help = ["rimuru-group-antispam <on/off/action/delay>"]
handler.command = ["rimuru-group-antispam", "rimuru-antispam", "rimuru-antispamgc", "antispamgc"]
handler.tags = ["group"]
handler.description = "Mengatur fitur perlindungan grup dari pesan spam secara brutal"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antispam", "alias": ["antispamgc"], "category": "group", "description": "Mengatur fitur perlindungan grup dari pesan spam secara brutal", "usage": ".antispam <on/off/action/delay>", "example": ".antispam on\n.antispam warning\n.antispam 2", "isOwner": false, "isPremium": false, "isGroup": true, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antispam": "antispam", "rimuru-antispam": "antispam", "rimuru-antispamgc": "antispamgc", "antispamgc": "antispamgc"}
export default handler
