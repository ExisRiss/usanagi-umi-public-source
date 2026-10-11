/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakenikah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakenikah", "category": "canvas", "aliasMap": {"rimuru-canvas-fakenikah": "fakenikah", "rimuru-fakenikah": "fakenikah", "rimuru-nikahfake": "nikahfake", "rimuru-fakemarriage": "fakemarriage", "fakenikah": "fakenikah", "nikahfake": "nikahfake", "fakemarriage": "fakemarriage"}, "description": "Bikin fake sertifikat nikah (buat konten/gaguan doang)", "usage": ".fakenikah <nama1> | <nama2>", "example": ".fakenikah Rimuru | Darling", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakenikah.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakenikah <nama1> | <nama2>"]
handler.command = ["rimuru-canvas-fakenikah", "rimuru-fakenikah", "rimuru-nikahfake", "rimuru-fakemarriage", "fakenikah", "nikahfake", "fakemarriage"]
handler.tags = ["canvas"]
handler.description = "Bikin fake sertifikat nikah (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakenikah", "alias": ["nikahfake", "fakemarriage"], "category": "canvas", "description": "Bikin fake sertifikat nikah (buat konten/gaguan doang)", "usage": ".fakenikah <nama1> | <nama2>", "example": ".fakenikah Rimuru | Darling", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakenikah": "fakenikah", "rimuru-fakenikah": "fakenikah", "rimuru-nikahfake": "nikahfake", "rimuru-fakemarriage": "fakemarriage", "fakenikah": "fakenikah", "nikahfake": "nikahfake", "fakemarriage": "fakemarriage"}
export default handler
