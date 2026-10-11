/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/woodcut.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "woodcut", "category": "rpg", "aliasMap": {"rimuru-rpg-woodcut": "woodcut", "rimuru-woodcut": "woodcut", "rimuru-chop": "chop", "rimuru-nebang": "nebang", "rimuru-kayu": "kayu"}, "description": "Menebang pohon untuk mendapatkan kayu", "usage": ".woodcut", "example": ".woodcut", "cooldown": 60, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/woodcut.js", metadata, m, extra)
handler.help = ["rimuru-rpg-woodcut"]
handler.command = ["rimuru-rpg-woodcut", "rimuru-woodcut", "rimuru-chop", "rimuru-nebang", "rimuru-kayu"]
handler.tags = ["rpg"]
handler.description = "Menebang pohon untuk mendapatkan kayu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "woodcut", "alias": ["chop", "nebang", "kayu"], "category": "rpg", "description": "Menebang pohon untuk mendapatkan kayu", "usage": ".woodcut", "example": ".woodcut", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-woodcut": "woodcut", "rimuru-woodcut": "woodcut", "rimuru-chop": "chop", "rimuru-nebang": "nebang", "rimuru-kayu": "kayu"}
export default handler
