/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/dafont.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dafont", "category": "tools", "aliasMap": {"rimuru-tools-dafont": "dafont", "rimuru-daffont": "daffont", "rimuru-carifont": "carifont", "daffont": "daffont", "carifont": "carifont"}, "description": "Cari dan download font dari DaFont", "usage": ".dafont <nama font>", "example": ".dafont arial", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/dafont.js", metadata, m, extra)
handler.help = ["rimuru-tools-dafont <nama font>"]
handler.command = ["rimuru-tools-dafont", "rimuru-daffont", "rimuru-carifont", "daffont", "carifont"]
handler.tags = ["tools"]
handler.description = "Cari dan download font dari DaFont"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dafont", "alias": ["font", "daffont", "carifont"], "category": "tools", "description": "Cari dan download font dari DaFont", "usage": ".dafont <nama font>", "example": ".dafont arial", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-dafont": "dafont", "rimuru-daffont": "daffont", "rimuru-carifont": "carifont", "daffont": "daffont", "carifont": "carifont"}
export default handler
