/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/berladang.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "berladang", "category": "rpg", "aliasMap": {"rimuru-rpg-berladang": "berladang", "rimuru-berladang": "berladang", "rimuru-berkebun": "berkebun"}, "description": "Berladang untuk mendapat hasil panen", "usage": ".berladang", "example": ".berladang", "cooldown": 180, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/berladang.js", metadata, m, extra)
handler.help = ["rimuru-rpg-berladang"]
handler.command = ["rimuru-rpg-berladang", "rimuru-berladang", "rimuru-berkebun"]
handler.tags = ["rpg"]
handler.description = "Berladang untuk mendapat hasil panen"
handler.importSource = "rimuru"
handler.importConfig = {"name": "berladang", "alias": ["farm", "tanam", "berkebun"], "category": "rpg", "description": "Berladang untuk mendapat hasil panen", "usage": ".berladang", "example": ".berladang", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-berladang": "berladang", "rimuru-berladang": "berladang", "rimuru-berkebun": "berkebun"}
export default handler
