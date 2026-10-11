/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/main/test.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "test", "category": "test", "aliasMap": {"rimuru-test-test": "test", "rimuru-test": "test"}, "description": "Test Poll Menu Interaktif", "usage": ".poll", "example": ".poll", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/main/test.js", metadata, m, extra)
handler.help = ["rimuru-test-test"]
handler.command = ["rimuru-test-test", "rimuru-test"]
handler.tags = ["test"]
handler.description = "Test Poll Menu Interaktif"
handler.importSource = "rimuru"
handler.importConfig = {"name": "test", "alias": ["poll"], "category": "test", "description": "Test Poll Menu Interaktif", "usage": ".poll", "example": ".poll", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-test-test": "test", "rimuru-test": "test"}
export default handler
