/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/basket.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "basket", "category": "canvas", "aliasMap": {"rimuru-canvas-basket": "basket", "rimuru-basket": "basket", "basket": "basket"}, "description": "Buat gambar basket dengan nama custom", "usage": ".basket <nama>", "example": ".basket Fauzan", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/basket.js", metadata, m, extra)
handler.help = ["rimuru-canvas-basket <nama>"]
handler.command = ["rimuru-canvas-basket", "rimuru-basket", "basket"]
handler.tags = ["canvas"]
handler.description = "Buat gambar basket dengan nama custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "basket", "alias": ["basket"], "category": "canvas", "description": "Buat gambar basket dengan nama custom", "usage": ".basket <nama>", "example": ".basket Fauzan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-basket": "basket", "rimuru-basket": "basket", "basket": "basket"}
export default handler
