/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/boss.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "boss", "category": "rpg", "aliasMap": {"rimuru-rpg-boss": "boss", "rimuru-boss": "boss", "rimuru-raidboss": "raidboss", "rimuru-bigboss": "bigboss"}, "description": "Lawan boss untuk hadiah besar", "usage": ".boss", "example": ".boss", "cooldown": 600, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/boss.js", metadata, m, extra)
handler.help = ["rimuru-rpg-boss"]
handler.command = ["rimuru-rpg-boss", "rimuru-boss", "rimuru-raidboss", "rimuru-bigboss"]
handler.tags = ["rpg"]
handler.description = "Lawan boss untuk hadiah besar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "boss", "alias": ["raidboss", "bigboss"], "category": "rpg", "description": "Lawan boss untuk hadiah besar", "usage": ".boss", "example": ".boss", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 600, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-boss": "boss", "rimuru-boss": "boss", "rimuru-raidboss": "raidboss", "rimuru-bigboss": "bigboss"}
export default handler
