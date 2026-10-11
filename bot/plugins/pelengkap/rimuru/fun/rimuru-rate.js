/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/rate.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rate", "category": "fun", "aliasMap": {"rimuru-fun-rate": "rate", "rimuru-rate": "rate", "rimuru-nilai": "nilai", "rimuru-rating": "rating"}, "description": "Minta bot memberi rating sesuatu", "usage": ".rate <sesuatu>", "example": ".rate wajahku", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/rate.js", metadata, m, extra)
handler.help = ["rimuru-fun-rate <sesuatu>"]
handler.command = ["rimuru-fun-rate", "rimuru-rate", "rimuru-nilai", "rimuru-rating"]
handler.tags = ["fun"]
handler.description = "Minta bot memberi rating sesuatu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rate", "alias": ["nilai", "rating"], "category": "fun", "description": "Minta bot memberi rating sesuatu", "usage": ".rate <sesuatu>", "example": ".rate wajahku", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-rate": "rate", "rimuru-rate": "rate", "rimuru-nilai": "nilai", "rimuru-rating": "rating"}
export default handler
