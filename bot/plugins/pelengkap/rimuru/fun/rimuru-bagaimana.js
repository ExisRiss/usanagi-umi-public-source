/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/bagaimana.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bagaimana", "category": "fun", "aliasMap": {"rimuru-fun-bagaimana": "bagaimana", "rimuru-bagaimana": "bagaimana", "rimuru-gimana": "gimana", "rimuru-how": "how"}, "description": "Tanya bot bagaimana sesuatu", "usage": ".bagaimana <pertanyaan>", "example": ".bagaimana cara jadi sukses?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/bagaimana.js", metadata, m, extra)
handler.help = ["rimuru-fun-bagaimana <pertanyaan>"]
handler.command = ["rimuru-fun-bagaimana", "rimuru-bagaimana", "rimuru-gimana", "rimuru-how"]
handler.tags = ["fun"]
handler.description = "Tanya bot bagaimana sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bagaimana", "alias": ["gimana", "how"], "category": "fun", "description": "Tanya bot bagaimana sesuatu", "usage": ".bagaimana <pertanyaan>", "example": ".bagaimana cara jadi sukses?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-bagaimana": "bagaimana", "rimuru-bagaimana": "bagaimana", "rimuru-gimana": "gimana", "rimuru-how": "how"}
export default handler
