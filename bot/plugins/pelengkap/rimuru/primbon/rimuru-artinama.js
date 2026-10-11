/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/artinama.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "artinama", "category": "primbon", "aliasMap": {"rimuru-primbon-artinama": "artinama", "rimuru-artinama": "artinama", "rimuru-namameaning": "namameaning", "rimuru-artinamaku": "artinamaku", "artinama": "artinama", "namameaning": "namameaning", "artinamaku": "artinamaku"}, "description": "Cek arti nama menurut primbon", "usage": ".artinama <nama>", "example": ".artinama putu", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/artinama.js", metadata, m, extra)
handler.help = ["rimuru-primbon-artinama <nama>"]
handler.command = ["rimuru-primbon-artinama", "rimuru-artinama", "rimuru-namameaning", "rimuru-artinamaku", "artinama", "namameaning", "artinamaku"]
handler.tags = ["primbon"]
handler.description = "Cek arti nama menurut primbon"
handler.importSource = "rimuru"
handler.importConfig = {"name": "artinama", "alias": ["namameaning", "artinamaku"], "category": "primbon", "description": "Cek arti nama menurut primbon", "usage": ".artinama <nama>", "example": ".artinama putu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-artinama": "artinama", "rimuru-artinama": "artinama", "rimuru-namameaning": "namameaning", "rimuru-artinamaku": "artinamaku", "artinama": "artinama", "namameaning": "namameaning", "artinamaku": "artinamaku"}
export default handler
