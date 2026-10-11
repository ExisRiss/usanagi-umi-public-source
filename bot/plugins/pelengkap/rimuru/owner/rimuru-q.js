/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/q.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "q", "category": "tools", "aliasMap": {"rimuru-tools-q": "q", "rimuru-q": "q", "rimuru-quoted": "quoted", "q": "q", "inspect": "inspect"}, "description": "Ambil JSON message dari pesan yang direply", "usage": ".q (reply pesan)", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/q.js", metadata, m, extra)
handler.help = ["rimuru-tools-q (reply pesan)"]
handler.command = ["rimuru-tools-q", "rimuru-q", "rimuru-quoted", "q", "inspect"]
handler.tags = ["tools"]
handler.description = "Ambil JSON message dari pesan yang direply"
handler.importSource = "rimuru"
handler.importConfig = {"name": "q", "alias": ["quoted", "inspect"], "category": "tools", "description": "Ambil JSON message dari pesan yang direply", "usage": ".q (reply pesan)", "isOwner": true, "cooldown": 3, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-q": "q", "rimuru-q": "q", "rimuru-quoted": "quoted", "q": "q", "inspect": "inspect"}
export default handler
