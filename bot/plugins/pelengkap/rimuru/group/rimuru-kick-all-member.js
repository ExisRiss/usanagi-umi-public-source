/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/kick-all-member.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kickall", "category": "group", "aliasMap": {"rimuru-group-kickall": "kickall", "rimuru-kickall": "kickall", "rimuru-kicksemua": "kicksemua", "rimuru-cleargrup": "cleargrup", "kickall": "kickall", "kicksemua": "kicksemua", "cleargrup": "cleargrup"}, "description": "Kick semua member (non-admin)", "usage": ".kickall member", "example": ".kickall member", "cooldown": 10}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/kick-all-member.js", metadata, m, extra)
handler.help = ["rimuru-group-kickall member"]
handler.command = ["rimuru-group-kickall", "rimuru-kickall", "rimuru-kicksemua", "rimuru-cleargrup", "kickall", "kicksemua", "cleargrup"]
handler.tags = ["group"]
handler.description = "Kick semua member (non-admin)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kickall", "alias": ["kicksemua", "cleargrup"], "category": "group", "description": "Kick semua member (non-admin)", "usage": ".kickall member", "example": ".kickall member", "isGroup": true, "isAdmin": true, "isBotAdmin": true, "cooldown": 10, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-kickall": "kickall", "rimuru-kickall": "kickall", "rimuru-kicksemua": "kicksemua", "rimuru-cleargrup": "cleargrup", "kickall": "kickall", "kicksemua": "kicksemua", "cleargrup": "cleargrup"}
export default handler
