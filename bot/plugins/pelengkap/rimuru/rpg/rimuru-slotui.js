/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/slotui.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "slotui", "category": "rpg", "aliasMap": {"rimuru-rpg-slotui": "slotui", "rimuru-slotui": "slotui", "rimuru-slotgame": "slotgame", "rimuru-fruitbonanza": "fruitbonanza", "slotui": "slotui", "slotgame": "slotgame", "fruitbonanza": "fruitbonanza"}, "description": "Fruit Bonanza slot machine dengan UI HTML interaktif.", "usage": ".slotui", "example": ".slotui", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/slotui.js", metadata, m, extra)
handler.help = ["rimuru-rpg-slotui"]
handler.command = ["rimuru-rpg-slotui", "rimuru-slotui", "rimuru-slotgame", "rimuru-fruitbonanza", "slotui", "slotgame", "fruitbonanza"]
handler.tags = ["rpg"]
handler.description = "Fruit Bonanza slot machine dengan UI HTML interaktif."
handler.importSource = "rimuru"
handler.importConfig = {"name": "slotui", "alias": ["slotgame", "fruitbonanza"], "category": "rpg", "description": "Fruit Bonanza slot machine dengan UI HTML interaktif.", "usage": ".slotui", "example": ".slotui", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-slotui": "slotui", "rimuru-slotui": "slotui", "rimuru-slotgame": "slotgame", "rimuru-fruitbonanza": "fruitbonanza", "slotui": "slotui", "slotgame": "slotgame", "fruitbonanza": "fruitbonanza"}
export default handler
