/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanboss.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanboss", "category": "clan", "aliasMap": {"rimuru-clan-clanboss": "clanboss", "rimuru-clanboss": "clanboss", "rimuru-bossclan": "bossclan", "rimuru-clanraidboss": "clanraidboss", "clanboss": "clanboss", "bossclan": "bossclan", "clanraidboss": "clanraidboss"}, "description": "Fight boss clan untuk dapet XP dan reward", "usage": ".clanboss", "example": ".clanboss", "cooldown": 300, "energi": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanboss.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanboss"]
handler.command = ["rimuru-clan-clanboss", "rimuru-clanboss", "rimuru-bossclan", "rimuru-clanraidboss", "clanboss", "bossclan", "clanraidboss"]
handler.tags = ["clan"]
handler.description = "Fight boss clan untuk dapet XP dan reward"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanboss", "alias": ["bossclan", "clanraidboss"], "category": "clan", "description": "Fight boss clan untuk dapet XP dan reward", "usage": ".clanboss", "example": ".clanboss", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 300, "energi": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-clan-clanboss": "clanboss", "rimuru-clanboss": "clanboss", "rimuru-bossclan": "bossclan", "rimuru-clanraidboss": "clanraidboss", "clanboss": "clanboss", "bossclan": "bossclan", "clanraidboss": "clanraidboss"}
export default handler
