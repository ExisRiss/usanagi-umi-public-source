/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/apakah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "apakah", "category": "fun", "aliasMap": {"rimuru-fun-apakah": "apakah", "rimuru-apakah": "apakah", "rimuru-apa": "apa"}, "description": "Tanya bot apakah sesuatu", "usage": ".apakah <pertanyaan>", "example": ".apakah aku bisa kaya?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/apakah.js", metadata, m, extra)
handler.help = ["rimuru-fun-apakah <pertanyaan>"]
handler.command = ["rimuru-fun-apakah", "rimuru-apakah", "rimuru-apa"]
handler.tags = ["fun"]
handler.description = "Tanya bot apakah sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "apakah", "alias": ["apa"], "category": "fun", "description": "Tanya bot apakah sesuatu", "usage": ".apakah <pertanyaan>", "example": ".apakah aku bisa kaya?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-apakah": "apakah", "rimuru-apakah": "apakah", "rimuru-apa": "apa"}
export default handler
