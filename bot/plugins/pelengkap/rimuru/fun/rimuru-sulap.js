/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/sulap.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "sulap", "category": "fun", "aliasMap": {"rimuru-fun-sulap": "sulap", "rimuru-sulap": "sulap", "rimuru-magic": "magic", "rimuru-magictrick": "magictrick", "magictrick": "magictrick"}, "description": "Pertunjukan sulap - kick member secara dramatis", "usage": ".sulap", "example": ".sulap", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/sulap.js", metadata, m, extra)
handler.help = ["rimuru-fun-sulap"]
handler.command = ["rimuru-fun-sulap", "rimuru-sulap", "rimuru-magic", "rimuru-magictrick", "magictrick"]
handler.tags = ["fun"]
handler.description = "Pertunjukan sulap - kick member secara dramatis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "sulap", "alias": ["magic", "magictrick"], "category": "fun", "description": "Pertunjukan sulap - kick member secara dramatis", "usage": ".sulap", "example": ".sulap", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-sulap": "sulap", "rimuru-sulap": "sulap", "rimuru-magic": "magic", "rimuru-magictrick": "magictrick", "magictrick": "magictrick"}
export default handler
