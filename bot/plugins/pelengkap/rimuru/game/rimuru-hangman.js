/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/hangman.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hangman", "category": "game", "aliasMap": {"rimuru-game-hangman": "hangman", "rimuru-hangman": "hangman", "rimuru-tebakkata2": "tebakkata2", "tebakkata2": "tebakkata2"}, "description": "Tebak kata (huruf per huruf)", "usage": ".hangman", "example": ".hangman", "cooldown": 30, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/hangman.js", metadata, m, extra)
handler.help = ["rimuru-game-hangman"]
handler.command = ["rimuru-game-hangman", "rimuru-hangman", "rimuru-tebakkata2", "tebakkata2"]
handler.tags = ["game"]
handler.description = "Tebak kata (huruf per huruf)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hangman", "alias": ["tebakkata2", "hangman"], "category": "game", "description": "Tebak kata (huruf per huruf)", "usage": ".hangman", "example": ".hangman", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 30, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-game-hangman": "hangman", "rimuru-hangman": "hangman", "rimuru-tebakkata2": "tebakkata2", "tebakkata2": "tebakkata2"}
export default handler
