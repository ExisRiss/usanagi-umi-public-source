/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/juarabadminton.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "juarabadminton", "category": "canvas", "aliasMap": {"rimuru-canvas-juarabadminton": "juarabadminton", "rimuru-juarabadminton": "juarabadminton", "rimuru-sertifikatbadminton": "sertifikatbadminton", "rimuru-badmintoncert": "badmintoncert", "rimuru-badminton": "badminton", "juarabadminton": "juarabadminton", "sertifikatbadminton": "sertifikatbadminton", "badmintoncert": "badmintoncert", "badminton": "badminton"}, "description": "Membuat sertifikat Juara Badminton kustom", "usage": ".juarabadminton <nama>", "example": ".juarabadminton Alex", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/juarabadminton.js", metadata, m, extra)
handler.help = ["rimuru-canvas-juarabadminton <nama>"]
handler.command = ["rimuru-canvas-juarabadminton", "rimuru-juarabadminton", "rimuru-sertifikatbadminton", "rimuru-badmintoncert", "rimuru-badminton", "juarabadminton", "sertifikatbadminton", "badmintoncert", "badminton"]
handler.tags = ["canvas"]
handler.description = "Membuat sertifikat Juara Badminton kustom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "juarabadminton", "alias": ["sertifikatbadminton", "badmintoncert", "badminton"], "category": "canvas", "description": "Membuat sertifikat Juara Badminton kustom", "usage": ".juarabadminton <nama>", "example": ".juarabadminton Alex", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-juarabadminton": "juarabadminton", "rimuru-juarabadminton": "juarabadminton", "rimuru-sertifikatbadminton": "sertifikatbadminton", "rimuru-badmintoncert": "badmintoncert", "rimuru-badminton": "badminton", "juarabadminton": "juarabadminton", "sertifikatbadminton": "sertifikatbadminton", "badmintoncert": "badmintoncert", "badminton": "badminton"}
export default handler
