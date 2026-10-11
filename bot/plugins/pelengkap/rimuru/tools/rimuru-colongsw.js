/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/colongsw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "colongsw", "category": "tools", "aliasMap": {"rimuru-tools-colongsw": "colongsw", "rimuru-colongsw": "colongsw", "rimuru-ambilsw": "ambilsw", "colongsw": "colongsw", "ambilsw": "ambilsw"}, "description": "Ambil SW khusus yang mention grup", "usage": ".colongsw (reply sw mention)", "example": ".colongsw", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/colongsw.js", metadata, m, extra)
handler.help = ["rimuru-tools-colongsw (reply sw mention)"]
handler.command = ["rimuru-tools-colongsw", "rimuru-colongsw", "rimuru-ambilsw", "colongsw", "ambilsw"]
handler.tags = ["tools"]
handler.description = "Ambil SW khusus yang mention grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "colongsw", "alias": ["ambilsw"], "category": "tools", "description": "Ambil SW khusus yang mention grup", "usage": ".colongsw (reply sw mention)", "example": ".colongsw", "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-colongsw": "colongsw", "rimuru-colongsw": "colongsw", "rimuru-ambilsw": "ambilsw", "colongsw": "colongsw", "ambilsw": "ambilsw"}
export default handler
