/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakesp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakesp", "category": "canvas", "aliasMap": {"rimuru-canvas-fakesp": "fakesp", "rimuru-fakesp": "fakesp", "rimuru-spfake": "spfake", "rimuru-suratpanggilan": "suratpanggilan", "rimuru-fakesuratpanggil": "fakesuratpanggil", "fakesp": "fakesp", "spfake": "spfake", "suratpanggilan": "suratpanggilan", "fakesuratpanggil": "fakesuratpanggil"}, "description": "Bikin fake surat panggilan (buat konten/gaguan doang)", "usage": ".fakesp <nama> | <instansi>", "example": ".fakesp Rimuru | OSIS", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakesp.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakesp <nama> | <instansi>"]
handler.command = ["rimuru-canvas-fakesp", "rimuru-fakesp", "rimuru-spfake", "rimuru-suratpanggilan", "rimuru-fakesuratpanggil", "fakesp", "spfake", "suratpanggilan", "fakesuratpanggil"]
handler.tags = ["canvas"]
handler.description = "Bikin fake surat panggilan (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakesp", "alias": ["spfake", "suratpanggilan", "fakesuratpanggil"], "category": "canvas", "description": "Bikin fake surat panggilan (buat konten/gaguan doang)", "usage": ".fakesp <nama> | <instansi>", "example": ".fakesp Rimuru | OSIS", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakesp": "fakesp", "rimuru-fakesp": "fakesp", "rimuru-spfake": "spfake", "rimuru-suratpanggilan": "suratpanggilan", "rimuru-fakesuratpanggil": "fakesuratpanggil", "fakesp": "fakesp", "spfake": "spfake", "suratpanggilan": "suratpanggilan", "fakesuratpanggil": "fakesuratpanggil"}
export default handler
