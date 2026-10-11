/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/igstoryimg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "igstoryimg", "category": "canvas", "aliasMap": {"rimuru-canvas-igstoryimg": "igstoryimg", "rimuru-igstoryimg": "igstoryimg", "rimuru-igstoryimage": "igstoryimage", "igstoryimg": "igstoryimg", "igstoryimage": "igstoryimage"}, "description": "Membuat gambar layout Instagram Story dari gambarmu.", "usage": ".igstoryimg [kirim/reply gambar]", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/igstoryimg.js", metadata, m, extra)
handler.help = ["rimuru-canvas-igstoryimg [kirim/reply gambar]"]
handler.command = ["rimuru-canvas-igstoryimg", "rimuru-igstoryimg", "rimuru-igstoryimage", "igstoryimg", "igstoryimage"]
handler.tags = ["canvas"]
handler.description = "Membuat gambar layout Instagram Story dari gambarmu."
handler.importSource = "rimuru"
handler.importConfig = {"name": "igstoryimg", "alias": ["igstory", "igstoryimage"], "category": "canvas", "description": "Membuat gambar layout Instagram Story dari gambarmu.", "usage": ".igstoryimg [kirim/reply gambar]", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-igstoryimg": "igstoryimg", "rimuru-igstoryimg": "igstoryimg", "rimuru-igstoryimage": "igstoryimage", "igstoryimg": "igstoryimg", "igstoryimage": "igstoryimage"}
export default handler
