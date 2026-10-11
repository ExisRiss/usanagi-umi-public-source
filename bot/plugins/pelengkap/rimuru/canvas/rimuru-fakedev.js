/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakedev.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakedev", "category": "canvas", "aliasMap": {"rimuru-canvas-fakedev": "fakedev", "rimuru-fakedev": "fakedev", "fakedev": "fakedev"}, "description": "Bikin gambar fakedev dari fotomu", "usage": ".fakedev <teks> (reply/kirim foto)", "example": ".fakedev developer", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakedev.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakedev <teks> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-fakedev", "rimuru-fakedev", "fakedev"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar fakedev dari fotomu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakedev", "alias": [], "category": "canvas", "description": "Bikin gambar fakedev dari fotomu", "usage": ".fakedev <teks> (reply/kirim foto)", "example": ".fakedev developer", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakedev": "fakedev", "rimuru-fakedev": "fakedev", "fakedev": "fakedev"}
export default handler
