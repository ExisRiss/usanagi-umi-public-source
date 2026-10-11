/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/hargapanel.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hargapanel", "category": "main", "aliasMap": {"rimuru-main-hargapanel": "hargapanel", "rimuru-hargapanel": "hargapanel", "rimuru-sethargapanel": "sethargapanel", "hargapanel": "hargapanel", "sethargapanel": "sethargapanel"}, "description": "Menampilkan dan mengatur daftar harga sewa/beli panel", "usage": ".hargapanel / .sethargapanel <teks>", "example": ".sethargapanel RAM 1GB = 1k", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/hargapanel.js", metadata, m, extra)
handler.help = ["rimuru-main-hargapanel / .sethargapanel <teks>"]
handler.command = ["rimuru-main-hargapanel", "rimuru-hargapanel", "rimuru-sethargapanel", "hargapanel", "sethargapanel"]
handler.tags = ["main"]
handler.description = "Menampilkan dan mengatur daftar harga sewa/beli panel"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hargapanel", "alias": ["sethargapanel"], "category": "main", "description": "Menampilkan dan mengatur daftar harga sewa/beli panel", "usage": ".hargapanel / .sethargapanel <teks>", "example": ".sethargapanel RAM 1GB = 1k", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-main-hargapanel": "hargapanel", "rimuru-hargapanel": "hargapanel", "rimuru-sethargapanel": "sethargapanel", "hargapanel": "hargapanel", "sethargapanel": "sethargapanel"}
export default handler
