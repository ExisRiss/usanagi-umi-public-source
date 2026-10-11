/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setmenu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setmenu", "category": "owner", "aliasMap": {"rimuru-owner-setmenu": "setmenu", "rimuru-setmenu": "setmenu", "rimuru-menuvariant": "menuvariant", "rimuru-menustyle": "menustyle", "menuvariant": "menuvariant", "menustyle": "menustyle"}, "description": "Mengatur variant tampilan menu", "usage": ".setmenu <v1-v9>", "example": ".setmenu v8", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setmenu.js", metadata, m, extra)
handler.help = ["rimuru-owner-setmenu <v1-v9>"]
handler.command = ["rimuru-owner-setmenu", "rimuru-setmenu", "rimuru-menuvariant", "rimuru-menustyle", "menuvariant", "menustyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan menu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setmenu", "alias": ["menuvariant", "menustyle"], "category": "owner", "description": "Mengatur variant tampilan menu", "usage": ".setmenu <v1-v9>", "example": ".setmenu v8", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setmenu": "setmenu", "rimuru-setmenu": "setmenu", "rimuru-menuvariant": "menuvariant", "rimuru-menustyle": "menustyle", "menuvariant": "menuvariant", "menustyle": "menustyle"}
export default handler
