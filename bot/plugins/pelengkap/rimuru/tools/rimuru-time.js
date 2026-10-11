/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/time.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "time", "category": "tools", "aliasMap": {"rimuru-tools-time": "time", "rimuru-time": "time", "rimuru-waktu": "waktu", "time": "time", "waktu": "waktu"}, "description": "Menampilkan waktu berdasarkan negara", "usage": ".time <negara>", "example": ".time Indonesia", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/time.js", metadata, m, extra)
handler.help = ["rimuru-tools-time <negara>"]
handler.command = ["rimuru-tools-time", "rimuru-time", "rimuru-waktu", "time", "waktu"]
handler.tags = ["tools"]
handler.description = "Menampilkan waktu berdasarkan negara"
handler.importSource = "rimuru"
handler.importConfig = {"name": "time", "alias": ["waktu"], "category": "tools", "description": "Menampilkan waktu berdasarkan negara", "usage": ".time <negara>", "example": ".time Indonesia", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-time": "time", "rimuru-time": "time", "rimuru-waktu": "waktu", "time": "time", "waktu": "waktu"}
export default handler
