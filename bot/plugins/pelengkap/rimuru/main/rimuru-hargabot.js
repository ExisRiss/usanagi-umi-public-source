/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/hargabot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hargabot", "category": "main", "aliasMap": {"rimuru-main-hargabot": "hargabot", "rimuru-hargabot": "hargabot", "rimuru-sethargabot": "sethargabot", "hargabot": "hargabot", "sethargabot": "sethargabot"}, "description": "Menampilkan dan mengatur daftar harga sewa bot", "usage": ".hargabot / .sethargabot <teks>", "example": ".sethargabot 1 Hari = 1k", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/hargabot.js", metadata, m, extra)
handler.help = ["rimuru-main-hargabot / .sethargabot <teks>"]
handler.command = ["rimuru-main-hargabot", "rimuru-hargabot", "rimuru-sethargabot", "hargabot", "sethargabot"]
handler.tags = ["main"]
handler.description = "Menampilkan dan mengatur daftar harga sewa bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hargabot", "alias": ["sethargabot"], "category": "main", "description": "Menampilkan dan mengatur daftar harga sewa bot", "usage": ".hargabot / .sethargabot <teks>", "example": ".sethargabot 1 Hari = 1k", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-hargabot": "hargabot", "rimuru-hargabot": "hargabot", "rimuru-sethargabot": "sethargabot", "hargabot": "hargabot", "sethargabot": "sethargabot"}
export default handler
