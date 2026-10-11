/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/pac_man.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pacman", "category": "game", "aliasMap": {"rimuru-game-pacman": "pacman", "rimuru-pacman": "pacman", "rimuru-pac": "pac", "pacman": "pacman", "pac": "pac"}, "description": "Pac-Man classic - makan titik & hindari hantu!", "usage": "", "example": ".pacman", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/pac_man.js", metadata, m, extra)
handler.help = ["rimuru-game-pacman"]
handler.command = ["rimuru-game-pacman", "rimuru-pacman", "rimuru-pac", "pacman", "pac"]
handler.tags = ["game"]
handler.description = "Pac-Man classic - makan titik & hindari hantu!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pacman", "alias": ["pac"], "category": "game", "description": "Pac-Man classic - makan titik & hindari hantu!", "usage": "", "example": ".pacman", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-pacman": "pacman", "rimuru-pacman": "pacman", "rimuru-pac": "pac", "pacman": "pacman", "pac": "pac"}
export default handler
