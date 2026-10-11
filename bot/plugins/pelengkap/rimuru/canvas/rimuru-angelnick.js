/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/angelnick.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "angelnick", "category": "canvas", "aliasMap": {"rimuru-canvas-angelnick": "angelnick", "rimuru-angelnick": "angelnick", "angelnick": "angelnick"}, "description": "Bikin card angel nick dari fotomu", "usage": ".angelnick <teks> (reply/kirim foto)", "example": ".angelnick Fauzan", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/angelnick.js", metadata, m, extra)
handler.help = ["rimuru-canvas-angelnick <teks> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-angelnick", "rimuru-angelnick", "angelnick"]
handler.tags = ["canvas"]
handler.description = "Bikin card angel nick dari fotomu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "angelnick", "alias": [], "category": "canvas", "description": "Bikin card angel nick dari fotomu", "usage": ".angelnick <teks> (reply/kirim foto)", "example": ".angelnick Fauzan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-angelnick": "angelnick", "rimuru-angelnick": "angelnick", "angelnick": "angelnick"}
export default handler
