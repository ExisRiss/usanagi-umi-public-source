/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/phisingataubukan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "phisingataubukan", "category": "tools", "aliasMap": {"rimuru-tools-phisingataubukan": "phisingataubukan", "rimuru-phisingataubukan": "phisingataubukan", "rimuru-cekphising": "cekphising", "rimuru-checkphishing": "checkphishing", "rimuru-webphishing": "webphishing", "phisingataubukan": "phisingataubukan", "cekphising": "cekphising", "checkphishing": "checkphishing", "webphishing": "webphishing"}, "description": "Cek apakah sebuah link URL merupakan web phising/berbahaya atau aman.", "usage": ".phisingataubukan <url>", "example": ".phisingataubukan https://google.com", "cooldown": 10, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/phisingataubukan.js", metadata, m, extra)
handler.help = ["rimuru-tools-phisingataubukan <url>"]
handler.command = ["rimuru-tools-phisingataubukan", "rimuru-phisingataubukan", "rimuru-cekphising", "rimuru-checkphishing", "rimuru-webphishing", "phisingataubukan", "cekphising", "checkphishing", "webphishing"]
handler.tags = ["tools"]
handler.description = "Cek apakah sebuah link URL merupakan web phising/berbahaya atau aman."
handler.importSource = "rimuru"
handler.importConfig = {"name": "phisingataubukan", "alias": ["cekphising", "checkphishing", "webphishing"], "category": "tools", "description": "Cek apakah sebuah link URL merupakan web phising/berbahaya atau aman.", "usage": ".phisingataubukan <url>", "example": ".phisingataubukan https://google.com", "cooldown": 10, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-phisingataubukan": "phisingataubukan", "rimuru-phisingataubukan": "phisingataubukan", "rimuru-cekphising": "cekphising", "rimuru-checkphishing": "checkphishing", "rimuru-webphishing": "webphishing", "phisingataubukan": "phisingataubukan", "cekphising": "cekphising", "checkphishing": "checkphishing", "webphishing": "webphishing"}
export default handler
