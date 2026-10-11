/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/dimana.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dimana", "category": "fun", "aliasMap": {"rimuru-fun-dimana": "dimana", "rimuru-dimana": "dimana", "rimuru-where": "where", "rimuru-mana": "mana"}, "description": "Tanya bot dimana sesuatu", "usage": ".dimana <pertanyaan>", "example": ".dimana jodohku berada?", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/dimana.js", metadata, m, extra)
handler.help = ["rimuru-fun-dimana <pertanyaan>"]
handler.command = ["rimuru-fun-dimana", "rimuru-dimana", "rimuru-where", "rimuru-mana"]
handler.tags = ["fun"]
handler.description = "Tanya bot dimana sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dimana", "alias": ["where", "mana"], "category": "fun", "description": "Tanya bot dimana sesuatu", "usage": ".dimana <pertanyaan>", "example": ".dimana jodohku berada?", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-dimana": "dimana", "rimuru-dimana": "dimana", "rimuru-where": "where", "rimuru-mana": "mana"}
export default handler
