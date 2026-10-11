/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/hitman.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bunuh", "category": "rpg", "aliasMap": {"rimuru-rpg-bunuh": "bunuh", "rimuru-bunuh": "bunuh", "rimuru-hitman": "hitman", "bunuh": "bunuh", "hitman": "hitman"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/hitman.js", metadata, m, extra)
handler.help = ["rimuru-rpg-bunuh"]
handler.command = ["rimuru-rpg-bunuh", "rimuru-bunuh", "rimuru-hitman", "bunuh", "hitman"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bunuh", "alias": ["hitman"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-bunuh": "bunuh", "rimuru-bunuh": "bunuh", "rimuru-hitman": "hitman", "bunuh": "bunuh", "hitman": "hitman"}
export default handler
