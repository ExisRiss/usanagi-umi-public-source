/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakedev2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakedev2", "category": "canvas", "aliasMap": {"rimuru-canvas-fakedev2": "fakedev2", "rimuru-fakedev2": "fakedev2", "fakedev2": "fakedev2"}, "description": "Bikin gambar fakedev 2 dari fotomu", "usage": ".fakedev2 <teks> (reply/kirim foto)", "example": ".fakedev2 developer", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakedev2.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakedev2 <teks> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-fakedev2", "rimuru-fakedev2", "fakedev2"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar fakedev 2 dari fotomu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakedev2", "alias": [], "category": "canvas", "description": "Bikin gambar fakedev 2 dari fotomu", "usage": ".fakedev2 <teks> (reply/kirim foto)", "example": ".fakedev2 developer", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakedev2": "fakedev2", "rimuru-fakedev2": "fakedev2", "fakedev2": "fakedev2"}
export default handler
