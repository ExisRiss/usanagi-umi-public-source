/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/igstory.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "igstory", "category": "canvas", "aliasMap": {"rimuru-canvas-igstory": "igstory", "rimuru-igstorypost": "igstorypost", "igstorypost": "igstorypost"}, "description": "Membuat gambar simulasi post Instagram Story dari foto profil dan gambarmu.", "usage": ".igstory [kirim/reply gambar]", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/igstory.js", metadata, m, extra)
handler.help = ["rimuru-canvas-igstory [kirim/reply gambar]"]
handler.command = ["rimuru-canvas-igstory", "rimuru-igstorypost", "igstorypost"]
handler.tags = ["canvas"]
handler.description = "Membuat gambar simulasi post Instagram Story dari foto profil dan gambarmu."
handler.importSource = "rimuru"
handler.importConfig = {"name": "igstory", "alias": ["igstorypost"], "category": "canvas", "description": "Membuat gambar simulasi post Instagram Story dari foto profil dan gambarmu.", "usage": ".igstory [kirim/reply gambar]", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-igstory": "igstory", "rimuru-igstorypost": "igstorypost", "igstorypost": "igstorypost"}
export default handler
