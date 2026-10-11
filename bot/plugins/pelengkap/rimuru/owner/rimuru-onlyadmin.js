/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/onlyadmin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "onlyadmin", "category": "owner", "aliasMap": {"rimuru-owner-onlyadmin": "onlyadmin", "rimuru-onlyadmin": "onlyadmin", "rimuru-selfadmin": "selfadmin", "rimuru-publicadmin": "publicadmin", "rimuru-adminonly": "adminonly", "onlyadmin": "onlyadmin", "selfadmin": "selfadmin", "publicadmin": "publicadmin"}, "description": "Hanya admin grup yang bisa akses command bot", "usage": ".onlyadmin on/off", "example": ".onlyadmin on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/onlyadmin.js", metadata, m, extra)
handler.help = ["rimuru-owner-onlyadmin on/off"]
handler.command = ["rimuru-owner-onlyadmin", "rimuru-onlyadmin", "rimuru-selfadmin", "rimuru-publicadmin", "rimuru-adminonly", "onlyadmin", "selfadmin", "publicadmin"]
handler.tags = ["owner"]
handler.description = "Hanya admin grup yang bisa akses command bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "onlyadmin", "alias": ["selfadmin", "publicadmin", "adminonly"], "category": "owner", "description": "Hanya admin grup yang bisa akses command bot", "usage": ".onlyadmin on/off", "example": ".onlyadmin on", "isOwner": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-onlyadmin": "onlyadmin", "rimuru-onlyadmin": "onlyadmin", "rimuru-selfadmin": "selfadmin", "rimuru-publicadmin": "publicadmin", "rimuru-adminonly": "adminonly", "onlyadmin": "onlyadmin", "selfadmin": "selfadmin", "publicadmin": "publicadmin"}
export default handler
