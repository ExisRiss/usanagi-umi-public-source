/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/color_block_puzzle.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "colorblock", "category": "game", "aliasMap": {"rimuru-game-colorblock": "colorblock", "rimuru-colorblock": "colorblock", "rimuru-colorblockpuzzle": "colorblockpuzzle", "rimuru-cbp": "cbp", "colorblock": "colorblock", "colorblockpuzzle": "colorblockpuzzle", "cbp": "cbp"}, "description": "Puzzle kotak warna - geser balok kiri/kanan, samakan warna biar hancur!", "usage": "", "example": ".colorblock", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/color_block_puzzle.js", metadata, m, extra)
handler.help = ["rimuru-game-colorblock"]
handler.command = ["rimuru-game-colorblock", "rimuru-colorblock", "rimuru-colorblockpuzzle", "rimuru-cbp", "colorblock", "colorblockpuzzle", "cbp"]
handler.tags = ["game"]
handler.description = "Puzzle kotak warna - geser balok kiri/kanan, samakan warna biar hancur!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "colorblock", "alias": ["colorblockpuzzle", "cbp"], "category": "game", "description": "Puzzle kotak warna - geser balok kiri/kanan, samakan warna biar hancur!", "usage": "", "example": ".colorblock", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-colorblock": "colorblock", "rimuru-colorblock": "colorblock", "rimuru-colorblockpuzzle": "colorblockpuzzle", "rimuru-cbp": "cbp", "colorblock": "colorblock", "colorblockpuzzle": "colorblockpuzzle", "cbp": "cbp"}
export default handler
