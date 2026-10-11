/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/quotecard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quotecard", "category": "maker", "aliasMap": {"rimuru-maker-quotecard": "quotecard", "rimuru-quotecard": "quotecard", "rimuru-qcard": "qcard", "rimuru-cardquote": "cardquote", "rimuru-makerquote": "makerquote", "quotecard": "quotecard", "qcard": "qcard", "cardquote": "cardquote", "makerquote": "makerquote"}, "description": "Generate quote card dengan background gradient dan tipografi elegan", "usage": ".quotecard teks|author", "example": ".quotecard Jangan ragu menggapai bintang|@AlwaysCodex", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/quotecard.js", metadata, m, extra)
handler.help = ["rimuru-maker-quotecard teks|author"]
handler.command = ["rimuru-maker-quotecard", "rimuru-quotecard", "rimuru-qcard", "rimuru-cardquote", "rimuru-makerquote", "quotecard", "qcard", "cardquote", "makerquote"]
handler.tags = ["maker"]
handler.description = "Generate quote card dengan background gradient dan tipografi elegan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quotecard", "alias": ["qcard", "cardquote", "makerquote"], "category": "maker", "description": "Generate quote card dengan background gradient dan tipografi elegan", "usage": ".quotecard teks|author", "example": ".quotecard Jangan ragu menggapai bintang|@AlwaysCodex", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-quotecard": "quotecard", "rimuru-quotecard": "quotecard", "rimuru-qcard": "qcard", "rimuru-cardquote": "cardquote", "rimuru-makerquote": "makerquote", "quotecard": "quotecard", "qcard": "qcard", "cardquote": "cardquote", "makerquote": "makerquote"}
export default handler
