/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/scanrepo.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "scanrepo", "category": "tools", "aliasMap": {"rimuru-tools-scanrepo": "scanrepo", "rimuru-scanrepo": "scanrepo", "rimuru-scanrepodev": "scanrepodev", "scanrepo": "scanrepo", "scanrepodev": "scanrepodev"}, "description": "Scan repository GitHub untuk security risk", "usage": ".scanrepo <github-url>", "example": ".scanrepo https://github.com/owner/repo", "cooldown": 30, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/scanrepo.js", metadata, m, extra)
handler.help = ["rimuru-tools-scanrepo <github-url>"]
handler.command = ["rimuru-tools-scanrepo", "rimuru-scanrepo", "rimuru-scanrepodev", "scanrepo", "scanrepodev"]
handler.tags = ["tools"]
handler.description = "Scan repository GitHub untuk security risk"
handler.importSource = "rimuru"
handler.importConfig = {"name": "scanrepo", "alias": ["scanrepodev"], "category": "tools", "description": "Scan repository GitHub untuk security risk", "usage": ".scanrepo <github-url>", "example": ".scanrepo https://github.com/owner/repo", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-scanrepo": "scanrepo", "rimuru-scanrepo": "scanrepo", "rimuru-scanrepodev": "scanrepodev", "scanrepo": "scanrepo", "scanrepodev": "scanrepodev"}
export default handler
