/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeatm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeatm", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeatm": "fakeatm", "rimuru-fakeatm": "fakeatm", "rimuru-atmfake": "atmfake", "rimuru-kartuatm": "kartuatm", "rimuru-fakecardatm": "fakecardatm", "fakeatm": "fakeatm", "atmfake": "atmfake", "kartuatm": "kartuatm", "fakecardatm": "fakecardatm"}, "description": "Bikin fake kartu ATM (buat konten/gaguan doang)", "usage": ".fakeatm <nama> | <bank>", "example": ".fakeatm Rimuru | BCA", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeatm.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeatm <nama> | <bank>"]
handler.command = ["rimuru-canvas-fakeatm", "rimuru-fakeatm", "rimuru-atmfake", "rimuru-kartuatm", "rimuru-fakecardatm", "fakeatm", "atmfake", "kartuatm", "fakecardatm"]
handler.tags = ["canvas"]
handler.description = "Bikin fake kartu ATM (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeatm", "alias": ["atmfake", "kartuatm", "fakecardatm"], "category": "canvas", "description": "Bikin fake kartu ATM (buat konten/gaguan doang)", "usage": ".fakeatm <nama> | <bank>", "example": ".fakeatm Rimuru | BCA", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeatm": "fakeatm", "rimuru-fakeatm": "fakeatm", "rimuru-atmfake": "atmfake", "rimuru-kartuatm": "kartuatm", "rimuru-fakecardatm": "fakecardatm", "fakeatm": "fakeatm", "atmfake": "atmfake", "kartuatm": "kartuatm", "fakecardatm": "fakecardatm"}
export default handler
