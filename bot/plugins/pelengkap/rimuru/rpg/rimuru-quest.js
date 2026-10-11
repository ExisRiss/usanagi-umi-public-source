/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/quest.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quest", "category": "rpg", "aliasMap": {"rimuru-rpg-quest": "quest", "rimuru-quest": "quest", "rimuru-misi": "misi", "rimuru-mission": "mission", "rimuru-bounty": "bounty"}, "description": "Ambil quest harian untuk reward bonus", "usage": ".quest", "example": ".quest", "cooldown": 0, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/quest.js", metadata, m, extra)
handler.help = ["rimuru-rpg-quest"]
handler.command = ["rimuru-rpg-quest", "rimuru-quest", "rimuru-misi", "rimuru-mission", "rimuru-bounty"]
handler.tags = ["rpg"]
handler.description = "Ambil quest harian untuk reward bonus"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quest", "alias": ["misi", "mission", "bounty"], "category": "rpg", "description": "Ambil quest harian untuk reward bonus", "usage": ".quest", "example": ".quest", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 0, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-quest": "quest", "rimuru-quest": "quest", "rimuru-misi": "misi", "rimuru-mission": "mission", "rimuru-bounty": "bounty"}
export default handler
