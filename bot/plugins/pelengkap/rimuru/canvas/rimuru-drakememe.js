/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/drakememe.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "drakememe", "category": "canvas", "aliasMap": {"rimuru-canvas-drakememe": "drakememe", "rimuru-drakememe": "drakememe", "rimuru-drake": "drake", "rimuru-drakedislike": "drakedislike", "drakememe": "drakememe", "drake": "drake", "drakedislike": "drakedislike"}, "description": "Membuat meme Drake Hotline Bling dengan dua teks kustom", "usage": ".drakememe teks1|teks2", "example": ".drakememe Femboy|Tomboy", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/drakememe.js", metadata, m, extra)
handler.help = ["rimuru-canvas-drakememe teks1|teks2"]
handler.command = ["rimuru-canvas-drakememe", "rimuru-drakememe", "rimuru-drake", "rimuru-drakedislike", "drakememe", "drake", "drakedislike"]
handler.tags = ["canvas"]
handler.description = "Membuat meme Drake Hotline Bling dengan dua teks kustom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "drakememe", "alias": ["drake", "drakedislike"], "category": "canvas", "description": "Membuat meme Drake Hotline Bling dengan dua teks kustom", "usage": ".drakememe teks1|teks2", "example": ".drakememe Femboy|Tomboy", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-drakememe": "drakememe", "rimuru-drakememe": "drakememe", "rimuru-drake": "drake", "rimuru-drakedislike": "drakedislike", "drakememe": "drakememe", "drake": "drake", "drakedislike": "drakedislike"}
export default handler
