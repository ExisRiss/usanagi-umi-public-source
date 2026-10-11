/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/merchant.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "merchant", "category": "rpg", "aliasMap": {"rimuru-rpg-merchant": "merchant", "rimuru-merchant": "merchant", "rimuru-npc": "npc", "rimuru-tokoku": "tokoku", "tokoku": "tokoku"}, "description": "Jual beli item ke NPC merchant", "usage": ".merchant <buy/sell> <item> <qty>", "example": ".merchant buy potion 5", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/merchant.js", metadata, m, extra)
handler.help = ["rimuru-rpg-merchant <buy/sell> <item> <qty>"]
handler.command = ["rimuru-rpg-merchant", "rimuru-merchant", "rimuru-npc", "rimuru-tokoku", "tokoku"]
handler.tags = ["rpg"]
handler.description = "Jual beli item ke NPC merchant"
handler.importSource = "rimuru"
handler.importConfig = {"name": "merchant", "alias": ["npc", "toko", "tokoku"], "category": "rpg", "description": "Jual beli item ke NPC merchant", "usage": ".merchant <buy/sell> <item> <qty>", "example": ".merchant buy potion 5", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-merchant": "merchant", "rimuru-merchant": "merchant", "rimuru-npc": "npc", "rimuru-tokoku": "tokoku", "tokoku": "tokoku"}
export default handler
