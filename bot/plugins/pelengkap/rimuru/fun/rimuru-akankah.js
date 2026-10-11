/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/akankah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "akankah", "category": "fun", "aliasMap": {"rimuru-fun-akankah": "akankah", "rimuru-akankah": "akankah", "rimuru-akan": "akan", "rimuru-will": "will", "will": "will"}, "description": "Tanya bot akankah sesuatu terjadi", "usage": ".akankah <pertanyaan>", "example": ".akankah aku sukses?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/akankah.js", metadata, m, extra)
handler.help = ["rimuru-fun-akankah <pertanyaan>"]
handler.command = ["rimuru-fun-akankah", "rimuru-akankah", "rimuru-akan", "rimuru-will", "will"]
handler.tags = ["fun"]
handler.description = "Tanya bot akankah sesuatu terjadi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "akankah", "alias": ["akan", "will"], "category": "fun", "description": "Tanya bot akankah sesuatu terjadi", "usage": ".akankah <pertanyaan>", "example": ".akankah aku sukses?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-akankah": "akankah", "rimuru-akankah": "akankah", "rimuru-akan": "akan", "rimuru-will": "will", "will": "will"}
export default handler
