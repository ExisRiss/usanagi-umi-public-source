/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/botmode.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "botmode", "category": "owner", "aliasMap": {"rimuru-owner-botmode": "botmode"}, "description": "Mengatur mode bot (md/cpanel/store/pushkontak/all)", "usage": ".botmode <mode>", "example": ".botmode store", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/botmode.js", metadata, m, extra)
handler.help = ["rimuru-owner-botmode <mode>"]
handler.command = ["rimuru-owner-botmode"]
handler.tags = ["owner"]
handler.description = "Mengatur mode bot (md/cpanel/store/pushkontak/all)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "botmode", "alias": ["setmode", "mode"], "category": "owner", "description": "Mengatur mode bot (md/cpanel/store/pushkontak/all)", "usage": ".botmode <mode>", "example": ".botmode store", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-botmode": "botmode"}
export default handler
