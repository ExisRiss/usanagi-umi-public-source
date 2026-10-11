/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/berburu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "berburu", "category": "rpg", "aliasMap": {"rimuru-rpg-berburu": "berburu", "rimuru-huntanimal": "huntanimal", "rimuru-buru": "buru"}, "description": "Berburu hewan untuk mendapat item", "usage": ".berburu", "example": ".berburu", "cooldown": 120, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/berburu.js", metadata, m, extra)
handler.help = ["rimuru-rpg-berburu"]
handler.command = ["rimuru-rpg-berburu", "rimuru-huntanimal", "rimuru-buru"]
handler.tags = ["rpg"]
handler.description = "Berburu hewan untuk mendapat item"
handler.importSource = "rimuru"
handler.importConfig = {"name": "berburu", "alias": ["huntanimal", "buru"], "category": "rpg", "description": "Berburu hewan untuk mendapat item", "usage": ".berburu", "example": ".berburu", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 120, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-berburu": "berburu", "rimuru-huntanimal": "huntanimal", "rimuru-buru": "buru"}
export default handler
