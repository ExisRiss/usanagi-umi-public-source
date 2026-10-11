/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/wwsorcerer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wwsorcerer", "category": "game", "aliasMap": {"rimuru-game-wwsorcerer": "wwsorcerer", "rimuru-wwsorcerer": "wwsorcerer", "rimuru-sorcerer": "sorcerer", "rimuru-wws": "wws", "wwsorcerer": "wwsorcerer", "sorcerer": "sorcerer", "wws": "wws"}, "description": "Sorcerer night action - Check if target is Seer", "usage": ".wwsorcerer <nomor>", "example": ".wwsorcerer 3", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/wwsorcerer.js", metadata, m, extra)
handler.help = ["rimuru-game-wwsorcerer <nomor>"]
handler.command = ["rimuru-game-wwsorcerer", "rimuru-wwsorcerer", "rimuru-sorcerer", "rimuru-wws", "wwsorcerer", "sorcerer", "wws"]
handler.tags = ["game"]
handler.description = "Sorcerer night action - Check if target is Seer"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wwsorcerer", "alias": ["sorcerer", "wws"], "category": "game", "description": "Sorcerer night action - Check if target is Seer", "usage": ".wwsorcerer <nomor>", "example": ".wwsorcerer 3", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-wwsorcerer": "wwsorcerer", "rimuru-wwsorcerer": "wwsorcerer", "rimuru-sorcerer": "sorcerer", "rimuru-wws": "wws", "wwsorcerer": "wwsorcerer", "sorcerer": "sorcerer", "wws": "wws"}
export default handler
