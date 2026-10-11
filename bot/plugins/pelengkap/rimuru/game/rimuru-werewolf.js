/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/werewolf.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "werewolf", "category": "game", "aliasMap": {"rimuru-game-werewolf": "werewolf", "rimuru-werewolf": "werewolf", "rimuru-ww": "ww", "rimuru-wwgc": "wwgc", "werewolf": "werewolf", "ww": "ww", "wwgc": "wwgc"}, "description": "Main Werewolf Game bersama player lain", "usage": ".ww <create|join|start|vote|player|exit|delete>", "example": ".ww create", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/werewolf.js", metadata, m, extra)
handler.help = ["rimuru-game-werewolf <create|join|start|vote|player|exit|delete>"]
handler.command = ["rimuru-game-werewolf", "rimuru-werewolf", "rimuru-ww", "rimuru-wwgc", "werewolf", "ww", "wwgc"]
handler.tags = ["game"]
handler.description = "Main Werewolf Game bersama player lain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "werewolf", "alias": ["ww", "wwgc"], "category": "game", "description": "Main Werewolf Game bersama player lain", "usage": ".ww <create|join|start|vote|player|exit|delete>", "example": ".ww create", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-werewolf": "werewolf", "rimuru-werewolf": "werewolf", "rimuru-ww": "ww", "rimuru-wwgc": "wwgc", "werewolf": "werewolf", "ww": "ww", "wwgc": "wwgc"}
export default handler
