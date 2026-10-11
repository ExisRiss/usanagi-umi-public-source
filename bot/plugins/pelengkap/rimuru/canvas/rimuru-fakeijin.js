/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeijin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeijin", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeijin": "fakeijin", "rimuru-fakeijin": "fakeijin", "rimuru-ijinfake": "ijinfake", "rimuru-suratijin": "suratijin", "rimuru-fakeizin": "fakeizin", "fakeijin": "fakeijin", "ijinfake": "ijinfake", "suratijin": "suratijin", "fakeizin": "fakeizin"}, "description": "Bikin fake surat ijin (buat konten/gaguan doang)", "usage": ".fakeijin <nama> | <alasan>", "example": ".fakeijin Rimuru | Sakit", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeijin.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeijin <nama> | <alasan>"]
handler.command = ["rimuru-canvas-fakeijin", "rimuru-fakeijin", "rimuru-ijinfake", "rimuru-suratijin", "rimuru-fakeizin", "fakeijin", "ijinfake", "suratijin", "fakeizin"]
handler.tags = ["canvas"]
handler.description = "Bikin fake surat ijin (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeijin", "alias": ["ijinfake", "suratijin", "fakeizin"], "category": "canvas", "description": "Bikin fake surat ijin (buat konten/gaguan doang)", "usage": ".fakeijin <nama> | <alasan>", "example": ".fakeijin Rimuru | Sakit", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeijin": "fakeijin", "rimuru-fakeijin": "fakeijin", "rimuru-ijinfake": "ijinfake", "rimuru-suratijin": "suratijin", "rimuru-fakeizin": "fakeizin", "fakeijin": "fakeijin", "ijinfake": "ijinfake", "suratijin": "suratijin", "fakeizin": "fakeizin"}
export default handler
