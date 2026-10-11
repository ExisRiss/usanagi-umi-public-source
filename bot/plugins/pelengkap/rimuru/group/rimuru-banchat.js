/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/banchat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "banchat", "category": "group", "aliasMap": {"rimuru-group-banchat": "banchat", "rimuru-banchat": "banchat", "rimuru-bangroup": "bangroup", "rimuru-bangrup": "bangrup", "rimuru-unbanchat": "unbanchat", "rimuru-unbangroup": "unbangroup"}, "description": "Ban grup dari penggunaan bot (hanya owner yang bisa akses)", "usage": ".banchat", "example": ".banchat", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/banchat.js", metadata, m, extra)
handler.help = ["rimuru-group-banchat"]
handler.command = ["rimuru-group-banchat", "rimuru-banchat", "rimuru-bangroup", "rimuru-bangrup", "rimuru-unbanchat", "rimuru-unbangroup"]
handler.tags = ["group"]
handler.description = "Ban grup dari penggunaan bot (hanya owner yang bisa akses)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "banchat", "alias": ["bangroup", "bangrup", "unbanchat", "unbangroup"], "category": "group", "description": "Ban grup dari penggunaan bot (hanya owner yang bisa akses)", "usage": ".banchat", "example": ".banchat", "isOwner": true, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-banchat": "banchat", "rimuru-banchat": "banchat", "rimuru-bangroup": "bangroup", "rimuru-bangrup": "bangrup", "rimuru-unbanchat": "unbanchat", "rimuru-unbangroup": "unbangroup"}
export default handler
