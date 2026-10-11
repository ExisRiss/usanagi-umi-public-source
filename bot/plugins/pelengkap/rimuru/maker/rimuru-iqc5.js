/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/iqc5.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "iqc5", "category": "canvas", "aliasMap": {"rimuru-canvas-iqc5": "iqc5", "rimuru-iqc5": "iqc5", "rimuru-qc5": "qc5", "iqc5": "iqc5", "qc5": "qc5"}, "description": "Membuat Fake Quote iOS style tanpa API eksternal.", "usage": ".iqc5 [text/reply]", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/iqc5.js", metadata, m, extra)
handler.help = ["rimuru-canvas-iqc5 [text/reply]"]
handler.command = ["rimuru-canvas-iqc5", "rimuru-iqc5", "rimuru-qc5", "iqc5", "qc5"]
handler.tags = ["canvas"]
handler.description = "Membuat Fake Quote iOS style tanpa API eksternal."
handler.importSource = "rimuru"
handler.importConfig = {"name": "iqc5", "alias": ["qc5"], "category": "canvas", "description": "Membuat Fake Quote iOS style tanpa API eksternal.", "usage": ".iqc5 [text/reply]", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-iqc5": "iqc5", "rimuru-iqc5": "iqc5", "rimuru-qc5": "qc5", "iqc5": "iqc5", "qc5": "qc5"}
export default handler
