/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/ulartangga.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ulartangga", "category": "game", "aliasMap": {"rimuru-game-ulartangga": "ulartangga", "rimuru-ulartangga": "ulartangga", "rimuru-ut": "ut", "rimuru-snakeladder": "snakeladder", "rimuru-sl": "sl", "ulartangga": "ulartangga", "ut": "ut", "snakeladder": "snakeladder", "sl": "sl"}, "description": "Main ular tangga bersama player lain dengan visual board", "usage": ".ulartangga <create|join|start|info|exit|delete>", "example": ".ulartangga create", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/ulartangga.js", metadata, m, extra)
handler.help = ["rimuru-game-ulartangga <create|join|start|info|exit|delete>"]
handler.command = ["rimuru-game-ulartangga", "rimuru-ulartangga", "rimuru-ut", "rimuru-snakeladder", "rimuru-sl", "ulartangga", "ut", "snakeladder", "sl"]
handler.tags = ["game"]
handler.description = "Main ular tangga bersama player lain dengan visual board"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ulartangga", "alias": ["ut", "snakeladder", "sl"], "category": "game", "description": "Main ular tangga bersama player lain dengan visual board", "usage": ".ulartangga <create|join|start|info|exit|delete>", "example": ".ulartangga create", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-ulartangga": "ulartangga", "rimuru-ulartangga": "ulartangga", "rimuru-ut": "ut", "rimuru-snakeladder": "snakeladder", "rimuru-sl": "sl", "ulartangga": "ulartangga", "ut": "ut", "snakeladder": "snakeladder", "sl": "sl"}
export default handler
