/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/pacarsertifikat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pacarsertifikat", "category": "canvas", "aliasMap": {"rimuru-canvas-pacarsertifikat": "pacarsertifikat", "rimuru-pacarsertifikat": "pacarsertifikat", "rimuru-sertifikatpacar": "sertifikatpacar", "rimuru-certpacar": "certpacar", "rimuru-pacarcert": "pacarcert", "pacarsertifikat": "pacarsertifikat", "sertifikatpacar": "sertifikatpacar", "certpacar": "certpacar", "pacarcert": "pacarcert"}, "description": "Membuat sertifikat pacar", "usage": ".pacarsertifikat <nama1> <nama2>", "example": ".pacarsertifikat Budi Ani", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/pacarsertifikat.js", metadata, m, extra)
handler.help = ["rimuru-canvas-pacarsertifikat <nama1> <nama2>"]
handler.command = ["rimuru-canvas-pacarsertifikat", "rimuru-pacarsertifikat", "rimuru-sertifikatpacar", "rimuru-certpacar", "rimuru-pacarcert", "pacarsertifikat", "sertifikatpacar", "certpacar", "pacarcert"]
handler.tags = ["canvas"]
handler.description = "Membuat sertifikat pacar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pacarsertifikat", "alias": ["sertifikatpacar", "certpacar", "pacarcert"], "category": "canvas", "description": "Membuat sertifikat pacar", "usage": ".pacarsertifikat <nama1> <nama2>", "example": ".pacarsertifikat Budi Ani", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-pacarsertifikat": "pacarsertifikat", "rimuru-pacarsertifikat": "pacarsertifikat", "rimuru-sertifikatpacar": "sertifikatpacar", "rimuru-certpacar": "certpacar", "rimuru-pacarcert": "pacarcert", "pacarsertifikat": "pacarsertifikat", "sertifikatpacar": "sertifikatpacar", "certpacar": "certpacar", "pacarcert": "pacarcert"}
export default handler
