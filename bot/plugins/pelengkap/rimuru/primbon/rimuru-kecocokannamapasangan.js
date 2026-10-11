/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/primbon/kecocokannamapasangan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kecocokannamapasangan", "category": "primbon", "aliasMap": {"rimuru-primbon-kecocokannamapasangan": "kecocokannamapasangan", "rimuru-kecocokannamapasangan": "kecocokannamapasangan", "rimuru-cocoknama": "cocoknama", "rimuru-matchname": "matchname", "kecocokannamapasangan": "kecocokannamapasangan", "cocoknama": "cocoknama", "matchname": "matchname"}, "description": "Cek kecocokan nama pasangan", "usage": ".kecocokannamapasangan <nama1> <nama2>", "example": ".kecocokannamapasangan putu keyla", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/primbon/kecocokannamapasangan.js", metadata, m, extra)
handler.help = ["rimuru-primbon-kecocokannamapasangan <nama1> <nama2>"]
handler.command = ["rimuru-primbon-kecocokannamapasangan", "rimuru-kecocokannamapasangan", "rimuru-cocoknama", "rimuru-matchname", "kecocokannamapasangan", "cocoknama", "matchname"]
handler.tags = ["primbon"]
handler.description = "Cek kecocokan nama pasangan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kecocokannamapasangan", "alias": ["cocoknama", "matchname"], "category": "primbon", "description": "Cek kecocokan nama pasangan", "usage": ".kecocokannamapasangan <nama1> <nama2>", "example": ".kecocokannamapasangan putu keyla", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-primbon-kecocokannamapasangan": "kecocokannamapasangan", "rimuru-kecocokannamapasangan": "kecocokannamapasangan", "rimuru-cocoknama": "cocoknama", "rimuru-matchname": "matchname", "kecocokannamapasangan": "kecocokannamapasangan", "cocoknama": "cocoknama", "matchname": "matchname"}
export default handler
