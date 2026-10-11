/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/listwarn.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listwarn", "category": "group", "aliasMap": {"rimuru-group-listwarn": "listwarn", "rimuru-listwarn": "listwarn", "rimuru-warnings": "warnings", "rimuru-cekwarn": "cekwarn", "rimuru-warnlist": "warnlist", "listwarn": "listwarn", "warnings": "warnings", "cekwarn": "cekwarn", "warnlist": "warnlist"}, "description": "Melihat daftar warning member", "usage": ".listwarn atau .listwarn @user", "example": ".listwarn @user", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/listwarn.js", metadata, m, extra)
handler.help = ["rimuru-group-listwarn atau .listwarn @user"]
handler.command = ["rimuru-group-listwarn", "rimuru-listwarn", "rimuru-warnings", "rimuru-cekwarn", "rimuru-warnlist", "listwarn", "warnings", "cekwarn", "warnlist"]
handler.tags = ["group"]
handler.description = "Melihat daftar warning member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listwarn", "alias": ["warnings", "cekwarn", "warnlist"], "category": "group", "description": "Melihat daftar warning member", "usage": ".listwarn atau .listwarn @user", "example": ".listwarn @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-listwarn": "listwarn", "rimuru-listwarn": "listwarn", "rimuru-warnings": "warnings", "rimuru-cekwarn": "cekwarn", "rimuru-warnlist": "warnlist", "listwarn": "listwarn", "warnings": "warnings", "cekwarn": "cekwarn", "warnlist": "warnlist"}
export default handler
