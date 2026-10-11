/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/npmdl.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "npmdl", "category": "tools", "aliasMap": {"rimuru-tools-npmdl": "npmdl", "rimuru-npmdl": "npmdl", "rimuru-npmdownload": "npmdownload", "npmdl": "npmdl", "npmdownload": "npmdownload"}, "description": "Download package NPM dalam format tarball .tgz", "usage": ".npmdl <package atau URL NPM>", "example": ".npmdl axios", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/npmdl.js", metadata, m, extra)
handler.help = ["rimuru-tools-npmdl <package atau URL NPM>"]
handler.command = ["rimuru-tools-npmdl", "rimuru-npmdl", "rimuru-npmdownload", "npmdl", "npmdownload"]
handler.tags = ["tools"]
handler.description = "Download package NPM dalam format tarball .tgz"
handler.importSource = "rimuru"
handler.importConfig = {"name": "npmdl", "alias": ["npmdownload"], "category": "tools", "description": "Download package NPM dalam format tarball .tgz", "usage": ".npmdl <package atau URL NPM>", "example": ".npmdl axios", "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-npmdl": "npmdl", "rimuru-npmdl": "npmdl", "rimuru-npmdownload": "npmdownload", "npmdl": "npmdl", "npmdownload": "npmdownload"}
export default handler
