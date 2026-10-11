/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/mvp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mvp", "category": "canvas", "aliasMap": {"rimuru-canvas-mvp": "mvp", "rimuru-mvp": "mvp", "rimuru-sertifikatmvp": "sertifikatmvp", "mvp": "mvp", "sertifikatmvp": "sertifikatmvp"}, "description": "Buat sertifikat MVP", "usage": ".mvp <nama>", "example": ".mvp Fauzan", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/mvp.js", metadata, m, extra)
handler.help = ["rimuru-canvas-mvp <nama>"]
handler.command = ["rimuru-canvas-mvp", "rimuru-mvp", "rimuru-sertifikatmvp", "mvp", "sertifikatmvp"]
handler.tags = ["canvas"]
handler.description = "Buat sertifikat MVP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mvp", "alias": ["sertifikatmvp", "mvp"], "category": "canvas", "description": "Buat sertifikat MVP", "usage": ".mvp <nama>", "example": ".mvp Fauzan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-mvp": "mvp", "rimuru-mvp": "mvp", "rimuru-sertifikatmvp": "sertifikatmvp", "mvp": "mvp", "sertifikatmvp": "sertifikatmvp"}
export default handler
