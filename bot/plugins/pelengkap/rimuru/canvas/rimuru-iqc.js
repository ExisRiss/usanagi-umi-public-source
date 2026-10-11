/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/iqc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "iqc", "category": "canvas", "aliasMap": {"rimuru-canvas-iqc": "iqc", "rimuru-iqc": "iqc", "rimuru-qc2": "qc2", "qc2": "qc2"}, "description": "Membuat Fake Quote iOS style secara instan.", "usage": ".iqc [text/reply]", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/iqc.js", metadata, m, extra)
handler.help = ["rimuru-canvas-iqc [text/reply]"]
handler.command = ["rimuru-canvas-iqc", "rimuru-iqc", "rimuru-qc2", "qc2"]
handler.tags = ["canvas"]
handler.description = "Membuat Fake Quote iOS style secara instan."
handler.importSource = "rimuru"
handler.importConfig = {"name": "iqc", "alias": ["qc2"], "category": "canvas", "description": "Membuat Fake Quote iOS style secara instan.", "usage": ".iqc [text/reply]", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-iqc": "iqc", "rimuru-iqc": "iqc", "rimuru-qc2": "qc2", "qc2": "qc2"}
export default handler
