/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/anticall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "anticall", "category": "owner", "aliasMap": {"rimuru-owner-anticall": "anticall", "rimuru-anticall": "anticall", "rimuru-antitelpon": "antitelpon", "rimuru-antitelp": "antitelp", "rimuru-rejectcall": "rejectcall", "antitelpon": "antitelpon", "antitelp": "antitelp", "rejectcall": "rejectcall"}, "description": "Auto tolak panggilan masuk", "usage": ".anticall on/off", "example": ".anticall on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/anticall.js", metadata, m, extra)
handler.help = ["rimuru-owner-anticall on/off"]
handler.command = ["rimuru-owner-anticall", "rimuru-anticall", "rimuru-antitelpon", "rimuru-antitelp", "rimuru-rejectcall", "antitelpon", "antitelp", "rejectcall"]
handler.tags = ["owner"]
handler.description = "Auto tolak panggilan masuk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "anticall", "alias": ["antitelpon", "antitelp", "rejectcall"], "category": "owner", "description": "Auto tolak panggilan masuk", "usage": ".anticall on/off", "example": ".anticall on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-anticall": "anticall", "rimuru-anticall": "anticall", "rimuru-antitelpon": "antitelpon", "rimuru-antitelp": "antitelp", "rimuru-rejectcall": "rejectcall", "antitelpon": "antitelpon", "antitelp": "antitelp", "rejectcall": "rejectcall"}
export default handler
