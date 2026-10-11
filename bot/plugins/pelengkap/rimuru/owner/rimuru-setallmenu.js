/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setallmenu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setallmenu", "category": "owner", "aliasMap": {"rimuru-owner-setallmenu": "setallmenu", "rimuru-setallmenu": "setallmenu", "rimuru-allmenuvariant": "allmenuvariant", "rimuru-allmenustyle": "allmenustyle", "setallmenu": "setallmenu", "allmenuvariant": "allmenuvariant", "allmenustyle": "allmenustyle"}, "description": "Mengatur variant tampilan allmenu", "usage": ".setallmenu <v1-v9>", "example": ".setallmenu v2", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setallmenu.js", metadata, m, extra)
handler.help = ["rimuru-owner-setallmenu <v1-v9>"]
handler.command = ["rimuru-owner-setallmenu", "rimuru-setallmenu", "rimuru-allmenuvariant", "rimuru-allmenustyle", "setallmenu", "allmenuvariant", "allmenustyle"]
handler.tags = ["owner"]
handler.description = "Mengatur variant tampilan allmenu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setallmenu", "alias": ["allmenuvariant", "allmenustyle"], "category": "owner", "description": "Mengatur variant tampilan allmenu", "usage": ".setallmenu <v1-v9>", "example": ".setallmenu v2", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setallmenu": "setallmenu", "rimuru-setallmenu": "setallmenu", "rimuru-allmenuvariant": "allmenuvariant", "rimuru-allmenustyle": "allmenustyle", "setallmenu": "setallmenu", "allmenuvariant": "allmenuvariant", "allmenustyle": "allmenustyle"}
export default handler
