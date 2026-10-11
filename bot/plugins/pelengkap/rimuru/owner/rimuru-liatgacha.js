/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/liatgacha.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "liatgacha", "category": "owner", "aliasMap": {"rimuru-owner-liatgacha": "liatgacha", "rimuru-liatgacha": "liatgacha", "rimuru-lihat-gacha": "lihat-gacha", "rimuru-listgacha": "listgacha", "rimuru-daftargacha": "daftargacha", "rimuru-lg": "lg", "liatgacha": "liatgacha", "lihat-gacha": "lihat-gacha", "listgacha": "listgacha", "daftargacha": "daftargacha", "lg": "lg"}, "description": "Melihat semua karakter yang tersedia di database gacha", "usage": ".liat-gacha", "example": ".liat-gacha", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/liatgacha.js", metadata, m, extra)
handler.help = ["rimuru-owner-liatgacha"]
handler.command = ["rimuru-owner-liatgacha", "rimuru-liatgacha", "rimuru-lihat-gacha", "rimuru-listgacha", "rimuru-daftargacha", "rimuru-lg", "liatgacha", "lihat-gacha", "listgacha", "daftargacha", "lg"]
handler.tags = ["owner"]
handler.description = "Melihat semua karakter yang tersedia di database gacha"
handler.importSource = "rimuru"
handler.importConfig = {"name": "liatgacha", "alias": ["lihat-gacha", "listgacha", "daftargacha", "lg"], "category": "owner", "description": "Melihat semua karakter yang tersedia di database gacha", "usage": ".liat-gacha", "example": ".liat-gacha", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-liatgacha": "liatgacha", "rimuru-liatgacha": "liatgacha", "rimuru-lihat-gacha": "lihat-gacha", "rimuru-listgacha": "listgacha", "rimuru-daftargacha": "daftargacha", "rimuru-lg": "lg", "liatgacha": "liatgacha", "lihat-gacha": "lihat-gacha", "listgacha": "listgacha", "daftargacha": "daftargacha", "lg": "lg"}
export default handler
