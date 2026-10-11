/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/game/mortal_kombat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mortalkombat", "category": "game", "aliasMap": {"rimuru-game-mortalkombat": "mortalkombat", "rimuru-mortalkombat": "mortalkombat", "rimuru-mortal": "mortal", "rimuru-mk": "mk", "mortalkombat": "mortalkombat", "mortal": "mortal", "mk": "mk"}, "description": "Mortal Kombat mini - fight 1 vs 1!", "usage": "", "example": ".mk", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/game/mortal_kombat.js", metadata, m, extra)
handler.help = ["rimuru-game-mortalkombat"]
handler.command = ["rimuru-game-mortalkombat", "rimuru-mortalkombat", "rimuru-mortal", "rimuru-mk", "mortalkombat", "mortal", "mk"]
handler.tags = ["game"]
handler.description = "Mortal Kombat mini - fight 1 vs 1!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mortalkombat", "alias": ["mortal", "mk"], "category": "game", "description": "Mortal Kombat mini - fight 1 vs 1!", "usage": "", "example": ".mk", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-game-mortalkombat": "mortalkombat", "rimuru-mortalkombat": "mortalkombat", "rimuru-mortal": "mortal", "rimuru-mk": "mk", "mortalkombat": "mortalkombat", "mortal": "mortal", "mk": "mk"}
export default handler
