/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/pet.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "pet", "category": "rpg", "aliasMap": {"rimuru-rpg-pet": "pet", "rimuru-pet": "pet", "rimuru-mypet": "mypet", "rimuru-hewanku": "hewanku", "rimuru-peliharaan": "peliharaan"}, "description": "Kelola pet/hewan peliharaan", "usage": ".pet <feed/train/status>", "example": ".pet status", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/pet.js", metadata, m, extra)
handler.help = ["rimuru-rpg-pet <feed/train/status>"]
handler.command = ["rimuru-rpg-pet", "rimuru-pet", "rimuru-mypet", "rimuru-hewanku", "rimuru-peliharaan"]
handler.tags = ["rpg"]
handler.description = "Kelola pet/hewan peliharaan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "pet", "alias": ["mypet", "hewanku", "peliharaan"], "category": "rpg", "description": "Kelola pet/hewan peliharaan", "usage": ".pet <feed/train/status>", "example": ".pet status", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-pet": "pet", "rimuru-pet": "pet", "rimuru-mypet": "mypet", "rimuru-hewanku": "hewanku", "rimuru-peliharaan": "peliharaan"}
export default handler
