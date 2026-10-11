/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/info/livescore.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "livescore", "category": "info", "aliasMap": {"rimuru-info-livescore": "livescore", "rimuru-livescore": "livescore", "rimuru-skorbola": "skorbola", "rimuru-livebola": "livebola", "rimuru-skor": "skor", "livescore": "livescore", "skorbola": "skorbola", "livebola": "livebola", "skor": "skor"}, "description": "Menampilkan live score pertandingan sepak bola dari Goal.com", "usage": ".livescore", "example": ".livescore", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/info/livescore.js", metadata, m, extra)
handler.help = ["rimuru-info-livescore"]
handler.command = ["rimuru-info-livescore", "rimuru-livescore", "rimuru-skorbola", "rimuru-livebola", "rimuru-skor", "livescore", "skorbola", "livebola", "skor"]
handler.tags = ["info"]
handler.description = "Menampilkan live score pertandingan sepak bola dari Goal.com"
handler.importSource = "rimuru"
handler.importConfig = {"name": "livescore", "alias": ["skorbola", "livebola", "skor"], "category": "info", "description": "Menampilkan live score pertandingan sepak bola dari Goal.com", "usage": ".livescore", "example": ".livescore", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-info-livescore": "livescore", "rimuru-livescore": "livescore", "rimuru-skorbola": "skorbola", "rimuru-livebola": "livebola", "rimuru-skor": "skor", "livescore": "livescore", "skorbola": "skorbola", "livebola": "livebola", "skor": "skor"}
export default handler
