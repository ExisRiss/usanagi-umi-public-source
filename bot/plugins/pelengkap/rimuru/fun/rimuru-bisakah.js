/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/bisakah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bisakah", "category": "fun", "aliasMap": {"rimuru-fun-bisakah": "bisakah", "rimuru-bisakah": "bisakah", "rimuru-bisa": "bisa"}, "description": "Tanya bot bisakah sesuatu", "usage": ".bisakah <pertanyaan>", "example": ".bisakah aku lulus ujian?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/bisakah.js", metadata, m, extra)
handler.help = ["rimuru-fun-bisakah <pertanyaan>"]
handler.command = ["rimuru-fun-bisakah", "rimuru-bisakah", "rimuru-bisa"]
handler.tags = ["fun"]
handler.description = "Tanya bot bisakah sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bisakah", "alias": ["bisa"], "category": "fun", "description": "Tanya bot bisakah sesuatu", "usage": ".bisakah <pertanyaan>", "example": ".bisakah aku lulus ujian?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-bisakah": "bisakah", "rimuru-bisakah": "bisakah", "rimuru-bisa": "bisa"}
export default handler
