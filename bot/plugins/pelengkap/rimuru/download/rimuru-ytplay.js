/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/download/ytplay.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ytplay", "category": "download", "aliasMap": {"rimuru-download-ytplay": "ytplay", "rimuru-ytplay": "ytplay", "rimuru-ytp": "ytp"}, "description": "Putar video YouTube dengan HTML AI Rich + Direct Player", "usage": ".ytplay <judul/link>", "example": ".ytplay Alan Walker Faded", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/download/ytplay.js", metadata, m, extra)
handler.help = ["rimuru-download-ytplay <judul/link>"]
handler.command = ["rimuru-download-ytplay", "rimuru-ytplay", "rimuru-ytp"]
handler.tags = ["download"]
handler.description = "Putar video YouTube dengan HTML AI Rich + Direct Player"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ytplay", "alias": ["ytp"], "category": "download", "description": "Putar video YouTube dengan HTML AI Rich + Direct Player", "usage": ".ytplay <judul/link>", "example": ".ytplay Alan Walker Faded", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-download-ytplay": "ytplay", "rimuru-ytplay": "ytplay", "rimuru-ytp": "ytp"}
export default handler
