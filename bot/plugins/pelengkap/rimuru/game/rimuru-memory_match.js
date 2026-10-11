/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/memory_match.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "memorymatch", "category": "game", "aliasMap": {"rimuru-game-memorymatch": "memorymatch", "rimuru-memorymatch": "memorymatch", "rimuru-memorymatchgame": "memorymatchgame", "rimuru-mmatch": "mmatch", "memorymatch": "memorymatch", "memorymatchgame": "memorymatchgame", "mmatch": "mmatch"}, "description": "Game hafalan kartu - cocokin pasangan emoji!", "usage": "", "example": ".memory", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/memory_match.js", metadata, m, extra)
handler.help = ["rimuru-game-memorymatch"]
handler.command = ["rimuru-game-memorymatch", "rimuru-memorymatch", "rimuru-memorymatchgame", "rimuru-mmatch", "memorymatch", "memorymatchgame", "mmatch"]
handler.tags = ["game"]
handler.description = "Game hafalan kartu - cocokin pasangan emoji!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "memorymatch", "alias": ["memorymatchgame", "mmatch"], "category": "game", "description": "Game hafalan kartu - cocokin pasangan emoji!", "usage": "", "example": ".memory", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-memorymatch": "memorymatch", "rimuru-memorymatch": "memorymatch", "rimuru-memorymatchgame": "memorymatchgame", "rimuru-mmatch": "mmatch", "memorymatch": "memorymatch", "memorymatchgame": "memorymatchgame", "mmatch": "mmatch"}
export default handler
