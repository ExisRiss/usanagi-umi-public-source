/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addgacha.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addgacha", "category": "owner", "aliasMap": {"rimuru-owner-addgacha": "addgacha", "rimuru-addgacha": "addgacha", "rimuru-add-gacha": "add-gacha", "rimuru-tambahgacha": "tambahgacha", "rimuru-adddarling": "adddarling", "addgacha": "addgacha", "add-gacha": "add-gacha", "tambahgacha": "tambahgacha", "adddarling": "adddarling"}, "description": "Tambah karakter ke database gacha darling", "usage": ".add-gacha Nama Karakter | https://url.mp4", "example": ".add-gacha Rimuru | https://example.com/video.mp4", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addgacha.js", metadata, m, extra)
handler.help = ["rimuru-owner-addgacha Nama Karakter | https://url.mp4"]
handler.command = ["rimuru-owner-addgacha", "rimuru-addgacha", "rimuru-add-gacha", "rimuru-tambahgacha", "rimuru-adddarling", "addgacha", "add-gacha", "tambahgacha", "adddarling"]
handler.tags = ["owner"]
handler.description = "Tambah karakter ke database gacha darling"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addgacha", "alias": ["add-gacha", "tambahgacha", "adddarling"], "category": "owner", "description": "Tambah karakter ke database gacha darling", "usage": ".add-gacha Nama Karakter | https://url.mp4", "example": ".add-gacha Rimuru | https://example.com/video.mp4", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addgacha": "addgacha", "rimuru-addgacha": "addgacha", "rimuru-add-gacha": "add-gacha", "rimuru-tambahgacha": "tambahgacha", "rimuru-adddarling": "adddarling", "addgacha": "addgacha", "add-gacha": "add-gacha", "tambahgacha": "tambahgacha", "adddarling": "adddarling"}
export default handler
