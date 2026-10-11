/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakedj.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakedj", "category": "canvas", "aliasMap": {"rimuru-canvas-fakedj": "fakedj", "rimuru-fakedj": "fakedj", "rimuru-djfake": "djfake", "fakedj": "fakedj", "djfake": "djfake"}, "description": "Membuat gambar fake DJ dari teks", "usage": ".fakedj <teks>", "example": ".fakedj nama pengirim", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakedj.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakedj <teks>"]
handler.command = ["rimuru-canvas-fakedj", "rimuru-fakedj", "rimuru-djfake", "fakedj", "djfake"]
handler.tags = ["canvas"]
handler.description = "Membuat gambar fake DJ dari teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakedj", "alias": ["djfake"], "category": "canvas", "description": "Membuat gambar fake DJ dari teks", "usage": ".fakedj <teks>", "example": ".fakedj nama pengirim", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakedj": "fakedj", "rimuru-fakedj": "fakedj", "rimuru-djfake": "djfake", "fakedj": "fakedj", "djfake": "djfake"}
export default handler
