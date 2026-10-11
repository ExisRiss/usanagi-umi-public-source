/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakepaspor.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakepaspor", "category": "canvas", "aliasMap": {"rimuru-canvas-fakepaspor": "fakepaspor", "rimuru-fakepaspor": "fakepaspor", "rimuru-pasporfake": "pasporfake", "rimuru-fakepassport": "fakepassport", "fakepaspor": "fakepaspor", "pasporfake": "pasporfake", "fakepassport": "fakepassport"}, "description": "Bikin fake paspor (buat konten/gaguan doang)", "usage": ".fakepaspor <nama> | <umur> | <negara>", "example": ".fakepaspor Rimuru | 20 | Jepang", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakepaspor.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakepaspor <nama> | <umur> | <negara>"]
handler.command = ["rimuru-canvas-fakepaspor", "rimuru-fakepaspor", "rimuru-pasporfake", "rimuru-fakepassport", "fakepaspor", "pasporfake", "fakepassport"]
handler.tags = ["canvas"]
handler.description = "Bikin fake paspor (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakepaspor", "alias": ["pasporfake", "fakepassport"], "category": "canvas", "description": "Bikin fake paspor (buat konten/gaguan doang)", "usage": ".fakepaspor <nama> | <umur> | <negara>", "example": ".fakepaspor Rimuru | 20 | Jepang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakepaspor": "fakepaspor", "rimuru-fakepaspor": "fakepaspor", "rimuru-pasporfake": "pasporfake", "rimuru-fakepassport": "fakepassport", "fakepaspor": "fakepaspor", "pasporfake": "pasporfake", "fakepassport": "fakepassport"}
export default handler
