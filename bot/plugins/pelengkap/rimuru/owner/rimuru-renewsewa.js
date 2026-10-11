/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/renewsewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "renewsewa", "category": "owner", "aliasMap": {"rimuru-owner-renewsewa": "renewsewa", "rimuru-renewsewa": "renewsewa", "rimuru-perpanjangsewa": "perpanjangsewa", "rimuru-extendsewa": "extendsewa", "renewsewa": "renewsewa", "perpanjangsewa": "perpanjangsewa", "extendsewa": "extendsewa"}, "description": "Perpanjang durasi sewa grup", "usage": ".renewsewa <link/id grup> <durasi>", "example": ".renewsewa https://chat.whatsapp.com/xxx 30d", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/renewsewa.js", metadata, m, extra)
handler.help = ["rimuru-owner-renewsewa <link/id grup> <durasi>"]
handler.command = ["rimuru-owner-renewsewa", "rimuru-renewsewa", "rimuru-perpanjangsewa", "rimuru-extendsewa", "renewsewa", "perpanjangsewa", "extendsewa"]
handler.tags = ["owner"]
handler.description = "Perpanjang durasi sewa grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "renewsewa", "alias": ["perpanjangsewa", "extendsewa"], "category": "owner", "description": "Perpanjang durasi sewa grup", "usage": ".renewsewa <link/id grup> <durasi>", "example": ".renewsewa https://chat.whatsapp.com/xxx 30d", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-renewsewa": "renewsewa", "rimuru-renewsewa": "renewsewa", "rimuru-perpanjangsewa": "perpanjangsewa", "rimuru-extendsewa": "extendsewa", "renewsewa": "renewsewa", "perpanjangsewa": "perpanjangsewa", "extendsewa": "extendsewa"}
export default handler
