/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/caribug.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "caribug", "category": "tools", "aliasMap": {"rimuru-tools-caribug": "caribug", "rimuru-caribug": "caribug", "rimuru-debug": "debug", "rimuru-findbug": "findbug", "caribug": "caribug", "debug": "debug", "findbug": "findbug"}, "description": "Cari bug di kode pemrograman", "usage": ".caribug [kode] atau reply kode", "example": ".caribug function test() {}", "cooldown": 20, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/caribug.js", metadata, m, extra)
handler.help = ["rimuru-tools-caribug [kode] atau reply kode"]
handler.command = ["rimuru-tools-caribug", "rimuru-caribug", "rimuru-debug", "rimuru-findbug", "caribug", "debug", "findbug"]
handler.tags = ["tools"]
handler.description = "Cari bug di kode pemrograman"
handler.importSource = "rimuru"
handler.importConfig = {"name": "caribug", "alias": ["debug", "findbug"], "category": "tools", "description": "Cari bug di kode pemrograman", "usage": ".caribug [kode] atau reply kode", "example": ".caribug function test() {}", "cooldown": 20, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-caribug": "caribug", "rimuru-caribug": "caribug", "rimuru-debug": "debug", "rimuru-findbug": "findbug", "caribug": "caribug", "debug": "debug", "findbug": "findbug"}
export default handler
