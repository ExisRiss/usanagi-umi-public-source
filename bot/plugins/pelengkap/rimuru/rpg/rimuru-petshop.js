/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/petshop.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "petshop", "category": "rpg", "aliasMap": {"rimuru-rpg-petshop": "petshop", "rimuru-petshop": "petshop", "rimuru-tokopet": "tokopet", "rimuru-buypet": "buypet", "rimuru-belipet": "belipet"}, "description": "Beli pet dari toko", "usage": ".petshop <buy> <pet>", "example": ".petshop buy cat", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/petshop.js", metadata, m, extra)
handler.help = ["rimuru-rpg-petshop <buy> <pet>"]
handler.command = ["rimuru-rpg-petshop", "rimuru-petshop", "rimuru-tokopet", "rimuru-buypet", "rimuru-belipet"]
handler.tags = ["rpg"]
handler.description = "Beli pet dari toko"
handler.importSource = "rimuru"
handler.importConfig = {"name": "petshop", "alias": ["tokopet", "buypet", "belipet"], "category": "rpg", "description": "Beli pet dari toko", "usage": ".petshop <buy> <pet>", "example": ".petshop buy cat", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-petshop": "petshop", "rimuru-petshop": "petshop", "rimuru-tokopet": "tokopet", "rimuru-buypet": "buypet", "rimuru-belipet": "belipet"}
export default handler
