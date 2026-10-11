/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/gachabini.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gachabini", "category": "fun", "aliasMap": {"rimuru-fun-gachabini": "gachabini", "rimuru-gachabini": "gachabini", "gachabini": "gachabini"}, "description": "Gacha bini waifu random 300+ karakter", "usage": ".gachabini"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/gachabini.js", metadata, m, extra)
handler.help = ["rimuru-fun-gachabini"]
handler.command = ["rimuru-fun-gachabini", "rimuru-gachabini", "gachabini"]
handler.tags = ["fun"]
handler.description = "Gacha bini waifu random 300+ karakter"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gachabini", "category": "fun", "description": "Gacha bini waifu random 300+ karakter", "usage": ".gachabini", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-gachabini": "gachabini", "rimuru-gachabini": "gachabini", "gachabini": "gachabini"}
export default handler
