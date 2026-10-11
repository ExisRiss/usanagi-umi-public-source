/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/myip.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "myip", "category": "tools", "aliasMap": {"rimuru-tools-myip": "myip", "rimuru-myip": "myip", "rimuru-botip": "botip", "rimuru-publicip": "publicip", "myip": "myip", "botip": "botip", "publicip": "publicip"}, "description": "Cek IP publik server bot", "usage": ".myip", "example": ".myip", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/myip.js", metadata, m, extra)
handler.help = ["rimuru-tools-myip"]
handler.command = ["rimuru-tools-myip", "rimuru-myip", "rimuru-botip", "rimuru-publicip", "myip", "botip", "publicip"]
handler.tags = ["tools"]
handler.description = "Cek IP publik server bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "myip", "alias": ["botip", "publicip"], "category": "tools", "description": "Cek IP publik server bot", "usage": ".myip", "example": ".myip", "isOwner": true, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-myip": "myip", "rimuru-myip": "myip", "rimuru-botip": "botip", "rimuru-publicip": "publicip", "myip": "myip", "botip": "botip", "publicip": "publicip"}
export default handler
