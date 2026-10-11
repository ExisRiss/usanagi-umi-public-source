/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/welcomeall.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "welcomeall", "category": "owner", "aliasMap": {"rimuru-owner-welcomeall": "welcomeall", "rimuru-welcomeall": "welcomeall", "rimuru-wcall": "wcall", "rimuru-globalwelcome": "globalwelcome", "welcomeall": "welcomeall", "wcall": "wcall", "globalwelcome": "globalwelcome"}, "description": "Aktifkan/nonaktifkan welcome di semua grup", "usage": ".welcomeall <on/off>", "example": ".welcomeall on", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/welcomeall.js", metadata, m, extra)
handler.help = ["rimuru-owner-welcomeall <on/off>"]
handler.command = ["rimuru-owner-welcomeall", "rimuru-welcomeall", "rimuru-wcall", "rimuru-globalwelcome", "welcomeall", "wcall", "globalwelcome"]
handler.tags = ["owner"]
handler.description = "Aktifkan/nonaktifkan welcome di semua grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "welcomeall", "alias": ["wcall", "globalwelcome"], "category": "owner", "description": "Aktifkan/nonaktifkan welcome di semua grup", "usage": ".welcomeall <on/off>", "example": ".welcomeall on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-welcomeall": "welcomeall", "rimuru-welcomeall": "welcomeall", "rimuru-wcall": "wcall", "rimuru-globalwelcome": "globalwelcome", "welcomeall": "welcomeall", "wcall": "wcall", "globalwelcome": "globalwelcome"}
export default handler
