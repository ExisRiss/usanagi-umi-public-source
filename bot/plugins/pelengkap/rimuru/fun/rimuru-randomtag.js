/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/randomtag.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "randomtag", "category": "group", "aliasMap": {"rimuru-group-randomtag": "randomtag", "rimuru-randomtag": "randomtag", "rimuru-rtag": "rtag", "randomtag": "randomtag", "rtag": "rtag"}, "description": "Tag member random di group", "usage": ".randomtag", "example": ".randomtag", "cooldown": 10, "energi": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/randomtag.js", metadata, m, extra)
handler.help = ["rimuru-group-randomtag"]
handler.command = ["rimuru-group-randomtag", "rimuru-randomtag", "rimuru-rtag", "randomtag", "rtag"]
handler.tags = ["group"]
handler.description = "Tag member random di group"
handler.importSource = "rimuru"
handler.importConfig = {"name": "randomtag", "alias": ["rtag"], "category": "group", "description": "Tag member random di group", "usage": ".randomtag", "example": ".randomtag", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-group-randomtag": "randomtag", "rimuru-randomtag": "randomtag", "rimuru-rtag": "rtag", "randomtag": "randomtag", "rtag": "rtag"}
export default handler
