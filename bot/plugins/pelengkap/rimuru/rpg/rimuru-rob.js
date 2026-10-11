/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/rob.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rob", "category": "rpg", "aliasMap": {"rimuru-rpg-rob": "rob", "rimuru-rob": "rob", "rimuru-rampok": "rampok", "rimuru-mug": "mug"}, "description": "Rampok uang player lain (berisiko)", "usage": ".rob @user", "example": ".rob @user", "cooldown": 600, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/rob.js", metadata, m, extra)
handler.help = ["rimuru-rpg-rob @user"]
handler.command = ["rimuru-rpg-rob", "rimuru-rob", "rimuru-rampok", "rimuru-mug"]
handler.tags = ["rpg"]
handler.description = "Rampok uang player lain (berisiko)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rob", "alias": ["rampok", "mug"], "category": "rpg", "description": "Rampok uang player lain (berisiko)", "usage": ".rob @user", "example": ".rob @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 600, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-rob": "rob", "rimuru-rob": "rob", "rimuru-rampok": "rampok", "rimuru-mug": "mug"}
export default handler
