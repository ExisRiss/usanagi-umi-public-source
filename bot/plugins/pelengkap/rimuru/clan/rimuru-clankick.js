/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clankick.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clankick", "category": "clan", "aliasMap": {"rimuru-clan-clankick": "clankick", "rimuru-clankick": "clankick", "rimuru-kickclan": "kickclan", "clankick": "clankick", "kickclan": "kickclan"}, "description": "Kick member dari clan (leader only)", "usage": ".clankick @user", "example": ".clankick @user", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clankick.js", metadata, m, extra)
handler.help = ["rimuru-clan-clankick @user"]
handler.command = ["rimuru-clan-clankick", "rimuru-clankick", "rimuru-kickclan", "clankick", "kickclan"]
handler.tags = ["clan"]
handler.description = "Kick member dari clan (leader only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clankick", "alias": ["kickclan"], "category": "clan", "description": "Kick member dari clan (leader only)", "usage": ".clankick @user", "example": ".clankick @user", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clankick": "clankick", "rimuru-clankick": "clankick", "rimuru-kickclan": "kickclan", "clankick": "clankick", "kickclan": "kickclan"}
export default handler
