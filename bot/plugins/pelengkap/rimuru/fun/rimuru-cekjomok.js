/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekjomok.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jomok", "category": "fun", "aliasMap": {"rimuru-fun-jomok": "jomok", "rimuru-jomok": "jomok", "jomok": "jomok"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekjomok.js", metadata, m, extra)
handler.help = ["rimuru-fun-jomok"]
handler.command = ["rimuru-fun-jomok", "rimuru-jomok", "jomok"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jomok", "alias": [], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-jomok": "jomok", "rimuru-jomok": "jomok", "jomok": "jomok"}
export default handler
