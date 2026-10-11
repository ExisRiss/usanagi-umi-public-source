/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/self.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "self", "category": "owner", "aliasMap": {"rimuru-owner-self": "self", "rimuru-self": "self", "rimuru-selfmode": "selfmode", "rimuru-private-mode": "private-mode", "selfmode": "selfmode", "private-mode": "private-mode"}, "description": "Mengaktifkan mode self (hanya owner & bot yang bisa akses)", "usage": ".self", "example": ".self", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/self.js", metadata, m, extra)
handler.help = ["rimuru-owner-self"]
handler.command = ["rimuru-owner-self", "rimuru-self", "rimuru-selfmode", "rimuru-private-mode", "selfmode", "private-mode"]
handler.tags = ["owner"]
handler.description = "Mengaktifkan mode self (hanya owner & bot yang bisa akses)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "self", "alias": ["selfmode", "private-mode"], "category": "owner", "description": "Mengaktifkan mode self (hanya owner & bot yang bisa akses)", "usage": ".self", "example": ".self", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-self": "self", "rimuru-self": "self", "rimuru-selfmode": "selfmode", "rimuru-private-mode": "private-mode", "selfmode": "selfmode", "private-mode": "private-mode"}
export default handler
