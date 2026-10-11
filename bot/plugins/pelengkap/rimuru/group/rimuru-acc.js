/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/acc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "acc", "category": "group", "aliasMap": {"rimuru-group-acc": "acc", "rimuru-acc": "acc", "rimuru-accall": "accall", "rimuru-joinrequest": "joinrequest", "rimuru-reqjoin": "reqjoin", "acc": "acc", "accall": "accall", "joinrequest": "joinrequest", "reqjoin": "reqjoin"}, "description": "Kelola permintaan masuk grup (accept/reject)", "usage": ".acc <list|approve|reject> [all|nomor]", "example": ".acc approve all", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/acc.js", metadata, m, extra)
handler.help = ["rimuru-group-acc <list|approve|reject> [all|nomor]"]
handler.command = ["rimuru-group-acc", "rimuru-acc", "rimuru-accall", "rimuru-joinrequest", "rimuru-reqjoin", "acc", "accall", "joinrequest", "reqjoin"]
handler.tags = ["group"]
handler.description = "Kelola permintaan masuk grup (accept/reject)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "acc", "alias": ["accall", "joinrequest", "reqjoin"], "category": "group", "description": "Kelola permintaan masuk grup (accept/reject)", "usage": ".acc <list|approve|reject> [all|nomor]", "example": ".acc approve all", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-acc": "acc", "rimuru-acc": "acc", "rimuru-accall": "accall", "rimuru-joinrequest": "joinrequest", "rimuru-reqjoin": "reqjoin", "acc": "acc", "accall": "accall", "joinrequest": "joinrequest", "reqjoin": "reqjoin"}
export default handler
