/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/marry.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "marry", "category": "rpg", "aliasMap": {"rimuru-rpg-marry": "marry", "rimuru-marry": "marry", "rimuru-nikah": "nikah", "rimuru-wedding": "wedding"}, "description": "Menikahi player lain", "usage": ".marry @user", "example": ".marry @user", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/marry.js", metadata, m, extra)
handler.help = ["rimuru-rpg-marry @user"]
handler.command = ["rimuru-rpg-marry", "rimuru-marry", "rimuru-nikah", "rimuru-wedding"]
handler.tags = ["rpg"]
handler.description = "Menikahi player lain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "marry", "alias": ["nikah", "wedding", "propose"], "category": "rpg", "description": "Menikahi player lain", "usage": ".marry @user", "example": ".marry @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-marry": "marry", "rimuru-marry": "marry", "rimuru-nikah": "nikah", "rimuru-wedding": "wedding"}
export default handler
