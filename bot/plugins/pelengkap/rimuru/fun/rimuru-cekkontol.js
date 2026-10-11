/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekkontol.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkontol", "category": "fun", "aliasMap": {"rimuru-fun-cekkontol": "cekkontol", "rimuru-cekkontol": "cekkontol", "rimuru-kontolcheck": "kontolcheck", "cekkontol": "cekkontol", "kontolcheck": "kontolcheck"}, "description": "Cek ukuran random (bercanda doang)", "usage": ".cekkontol <nama>", "example": ".cekkontol Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekkontol.js", metadata, m, extra)
handler.help = ["rimuru-fun-cekkontol <nama>"]
handler.command = ["rimuru-fun-cekkontol", "rimuru-cekkontol", "rimuru-kontolcheck", "cekkontol", "kontolcheck"]
handler.tags = ["fun"]
handler.description = "Cek ukuran random (bercanda doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkontol", "alias": ["kontolcheck"], "category": "fun", "description": "Cek ukuran random (bercanda doang)", "usage": ".cekkontol <nama>", "example": ".cekkontol Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-cekkontol": "cekkontol", "rimuru-cekkontol": "cekkontol", "rimuru-kontolcheck": "kontolcheck", "cekkontol": "cekkontol", "kontolcheck": "kontolcheck"}
export default handler
