/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/getpp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getpp", "category": "group", "aliasMap": {"rimuru-group-getpp": "getpp", "rimuru-getpp": "getpp", "rimuru-pp": "pp", "rimuru-profilepic": "profilepic", "rimuru-avatar": "avatar", "getpp": "getpp", "profilepic": "profilepic", "avatar": "avatar"}, "description": "Ambil foto profil target (mention/reply)", "usage": ".getpp @user", "example": ".getpp @628xxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/getpp.js", metadata, m, extra)
handler.help = ["rimuru-group-getpp @user"]
handler.command = ["rimuru-group-getpp", "rimuru-getpp", "rimuru-pp", "rimuru-profilepic", "rimuru-avatar", "getpp", "profilepic", "avatar"]
handler.tags = ["group"]
handler.description = "Ambil foto profil target (mention/reply)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getpp", "alias": ["pp", "profilepic", "avatar"], "category": "group", "description": "Ambil foto profil target (mention/reply)", "usage": ".getpp @user", "example": ".getpp @628xxx", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-getpp": "getpp", "rimuru-getpp": "getpp", "rimuru-pp": "pp", "rimuru-profilepic": "profilepic", "rimuru-avatar": "avatar", "getpp": "getpp", "profilepic": "profilepic", "avatar": "avatar"}
export default handler
