/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/challenge.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "challenge", "category": "rpg", "aliasMap": {"rimuru-rpg-challenge": "challenge", "rimuru-challenge": "challenge", "rimuru-dailychallenge": "dailychallenge", "rimuru-tantangan": "tantangan"}, "description": "Daily challenge untuk hadiah spesial", "usage": ".challenge", "example": ".challenge", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/challenge.js", metadata, m, extra)
handler.help = ["rimuru-rpg-challenge"]
handler.command = ["rimuru-rpg-challenge", "rimuru-challenge", "rimuru-dailychallenge", "rimuru-tantangan"]
handler.tags = ["rpg"]
handler.description = "Daily challenge untuk hadiah spesial"
handler.importSource = "rimuru"
handler.importConfig = {"name": "challenge", "alias": ["daily", "dailychallenge", "tantangan"], "category": "rpg", "description": "Daily challenge untuk hadiah spesial", "usage": ".challenge", "example": ".challenge", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-challenge": "challenge", "rimuru-challenge": "challenge", "rimuru-dailychallenge": "dailychallenge", "rimuru-tantangan": "tantangan"}
export default handler
