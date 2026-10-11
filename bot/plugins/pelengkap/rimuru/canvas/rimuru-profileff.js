/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/profileff.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "profileff", "category": "canvas", "aliasMap": {"rimuru-canvas-profileff": "profileff", "rimuru-profileff": "profileff", "rimuru-profilff": "profilff", "rimuru-pff": "pff", "profileff": "profileff", "profilff": "profilff", "pff": "pff"}, "description": "Buat gambar profil FF keren", "usage": ".profileff <nama> | <guild> | <bg_index>", "example": ".profileff Fauzan | Rimuru | 1", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/profileff.js", metadata, m, extra)
handler.help = ["rimuru-canvas-profileff <nama> | <guild> | <bg_index>"]
handler.command = ["rimuru-canvas-profileff", "rimuru-profileff", "rimuru-profilff", "rimuru-pff", "profileff", "profilff", "pff"]
handler.tags = ["canvas"]
handler.description = "Buat gambar profil FF keren"
handler.importSource = "rimuru"
handler.importConfig = {"name": "profileff", "alias": ["profilff", "pff"], "category": "canvas", "description": "Buat gambar profil FF keren", "usage": ".profileff <nama> | <guild> | <bg_index>", "example": ".profileff Fauzan | Rimuru | 1", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-profileff": "profileff", "rimuru-profileff": "profileff", "rimuru-profilff": "profilff", "rimuru-pff": "pff", "profileff": "profileff", "profilff": "profilff", "pff": "pff"}
export default handler
