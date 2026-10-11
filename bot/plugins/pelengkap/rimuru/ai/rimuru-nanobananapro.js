/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/nanobananapro.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nanobananapro", "category": "ai", "aliasMap": {"rimuru-ai-nanobananapro": "nanobananapro", "rimuru-nanobananapro": "nanobananapro", "rimuru-nanopro": "nanopro", "nanobananapro": "nanobananapro", "nanopro": "nanopro"}, "description": "Edit gambar dengan Nano Banana Pro dari source CANTARELLA", "usage": ".nanobananapro <prompt> (reply gambar)", "example": ".nanobananapro ubah jadi sketsa pensil", "cooldown": 30, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/nanobananapro.js", metadata, m, extra)
handler.help = ["rimuru-ai-nanobananapro <prompt> (reply gambar)"]
handler.command = ["rimuru-ai-nanobananapro", "rimuru-nanobananapro", "rimuru-nanopro", "nanobananapro", "nanopro"]
handler.tags = ["ai"]
handler.description = "Edit gambar dengan Nano Banana Pro dari source CANTARELLA"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nanobananapro", "alias": ["nanopro"], "category": "ai", "description": "Edit gambar dengan Nano Banana Pro dari source CANTARELLA", "usage": ".nanobananapro <prompt> (reply gambar)", "example": ".nanobananapro ubah jadi sketsa pensil", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-nanobananapro": "nanobananapro", "rimuru-nanobananapro": "nanobananapro", "rimuru-nanopro": "nanopro", "nanobananapro": "nanobananapro", "nanopro": "nanopro"}
export default handler
