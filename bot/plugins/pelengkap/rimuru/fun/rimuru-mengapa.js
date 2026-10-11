/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/mengapa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mengapa", "category": "fun", "aliasMap": {"rimuru-fun-mengapa": "mengapa", "rimuru-mengapa": "mengapa", "rimuru-kenapa": "kenapa", "rimuru-why": "why"}, "description": "Tanya bot mengapa sesuatu", "usage": ".mengapa <pertanyaan>", "example": ".mengapa langit biru?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/mengapa.js", metadata, m, extra)
handler.help = ["rimuru-fun-mengapa <pertanyaan>"]
handler.command = ["rimuru-fun-mengapa", "rimuru-mengapa", "rimuru-kenapa", "rimuru-why"]
handler.tags = ["fun"]
handler.description = "Tanya bot mengapa sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mengapa", "alias": ["kenapa", "why"], "category": "fun", "description": "Tanya bot mengapa sesuatu", "usage": ".mengapa <pertanyaan>", "example": ".mengapa langit biru?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-mengapa": "mengapa", "rimuru-mengapa": "mengapa", "rimuru-kenapa": "kenapa", "rimuru-why": "why"}
export default handler
