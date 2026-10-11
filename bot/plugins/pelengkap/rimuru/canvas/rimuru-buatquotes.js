/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/buatquotes.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "buatquotes", "category": "canvas", "aliasMap": {"rimuru-canvas-buatquotes": "buatquotes", "rimuru-buatquotes": "buatquotes", "rimuru-bq": "bq", "rimuru-quoteanime": "quoteanime", "rimuru-animequote": "animequote", "buatquotes": "buatquotes", "bq": "bq", "animequote": "animequote"}, "description": "Membuat gambar quote bertema anime secara custom.", "usage": ".buatquotes [id background] | <teks> | [nama pembuat]", "example": ".buatquotes 2 | Tetaplah hidup walaupun tidak berguna | Maman", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/buatquotes.js", metadata, m, extra)
handler.help = ["rimuru-canvas-buatquotes [id background] | <teks> | [nama pembuat]"]
handler.command = ["rimuru-canvas-buatquotes", "rimuru-buatquotes", "rimuru-bq", "rimuru-quoteanime", "rimuru-animequote", "buatquotes", "bq", "animequote"]
handler.tags = ["canvas"]
handler.description = "Membuat gambar quote bertema anime secara custom."
handler.importSource = "rimuru"
handler.importConfig = {"name": "buatquotes", "alias": ["bq", "quoteanime", "animequote"], "category": "canvas", "description": "Membuat gambar quote bertema anime secara custom.", "usage": ".buatquotes [id background] | <teks> | [nama pembuat]", "example": ".buatquotes 2 | Tetaplah hidup walaupun tidak berguna | Maman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-buatquotes": "buatquotes", "rimuru-buatquotes": "buatquotes", "rimuru-bq": "bq", "rimuru-quoteanime": "quoteanime", "rimuru-animequote": "animequote", "buatquotes": "buatquotes", "bq": "bq", "animequote": "animequote"}
export default handler
