/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/mimpi.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mimpi", "category": "fun", "aliasMap": {"rimuru-fun-mimpi": "mimpi", "rimuru-dream": "dream", "rimuru-dreamworld": "dreamworld", "dream": "dream", "dreamworld": "dreamworld"}, "description": "Jelajahi dunia mimpimu berdasarkan nama", "usage": ".mimpi <nama>", "example": ".mimpi Keisya", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/mimpi.js", metadata, m, extra)
handler.help = ["rimuru-fun-mimpi <nama>"]
handler.command = ["rimuru-fun-mimpi", "rimuru-dream", "rimuru-dreamworld", "dream", "dreamworld"]
handler.tags = ["fun"]
handler.description = "Jelajahi dunia mimpimu berdasarkan nama"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mimpi", "alias": ["dream", "dreamworld"], "category": "fun", "description": "Jelajahi dunia mimpimu berdasarkan nama", "usage": ".mimpi <nama>", "example": ".mimpi Keisya", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-mimpi": "mimpi", "rimuru-dream": "dream", "rimuru-dreamworld": "dreamworld", "dream": "dream", "dreamworld": "dreamworld"}
export default handler
