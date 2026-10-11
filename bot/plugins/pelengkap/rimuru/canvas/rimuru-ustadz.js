/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/ustadz.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ustadz", "category": "canvas", "aliasMap": {"rimuru-canvas-ustadz": "ustadz", "rimuru-ustadz": "ustadz", "rimuru-ustad": "ustad", "rimuru-quoteustadz": "quoteustadz", "rimuru-canvasustadz": "canvasustadz", "ustadz": "ustadz", "ustad": "ustad", "quoteustadz": "quoteustadz", "canvasustadz": "canvasustadz"}, "description": "Buat quote gaya ustadz", "usage": ".ustadz <text>", "example": ".ustadz Jangan lupa sholat", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/ustadz.js", metadata, m, extra)
handler.help = ["rimuru-canvas-ustadz <text>"]
handler.command = ["rimuru-canvas-ustadz", "rimuru-ustadz", "rimuru-ustad", "rimuru-quoteustadz", "rimuru-canvasustadz", "ustadz", "ustad", "quoteustadz", "canvasustadz"]
handler.tags = ["canvas"]
handler.description = "Buat quote gaya ustadz"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ustadz", "alias": ["ustad", "quoteustadz", "canvasustadz"], "category": "canvas", "description": "Buat quote gaya ustadz", "usage": ".ustadz <text>", "example": ".ustadz Jangan lupa sholat", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-ustadz": "ustadz", "rimuru-ustadz": "ustadz", "rimuru-ustad": "ustad", "rimuru-quoteustadz": "quoteustadz", "rimuru-canvasustadz": "canvasustadz", "ustadz": "ustadz", "ustad": "ustad", "quoteustadz": "quoteustadz", "canvasustadz": "canvasustadz"}
export default handler
