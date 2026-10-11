/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetwarn.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetwarn", "category": "group", "aliasMap": {"rimuru-group-resetwarn": "resetwarn", "rimuru-resetwarn": "resetwarn", "rimuru-clearwarn": "clearwarn", "rimuru-hapuswarn": "hapuswarn", "rimuru-delwarn": "delwarn", "resetwarn": "resetwarn", "clearwarn": "clearwarn", "hapuswarn": "hapuswarn", "delwarn": "delwarn"}, "description": "Reset warning member", "usage": ".resetwarn @user", "example": ".resetwarn @user", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetwarn.js", metadata, m, extra)
handler.help = ["rimuru-group-resetwarn @user"]
handler.command = ["rimuru-group-resetwarn", "rimuru-resetwarn", "rimuru-clearwarn", "rimuru-hapuswarn", "rimuru-delwarn", "resetwarn", "clearwarn", "hapuswarn", "delwarn"]
handler.tags = ["group"]
handler.description = "Reset warning member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetwarn", "alias": ["clearwarn", "hapuswarn", "delwarn"], "category": "group", "description": "Reset warning member", "usage": ".resetwarn @user", "example": ".resetwarn @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetwarn": "resetwarn", "rimuru-resetwarn": "resetwarn", "rimuru-clearwarn": "clearwarn", "rimuru-hapuswarn": "hapuswarn", "rimuru-delwarn": "delwarn", "resetwarn": "resetwarn", "clearwarn": "clearwarn", "hapuswarn": "hapuswarn", "delwarn": "delwarn"}
export default handler
