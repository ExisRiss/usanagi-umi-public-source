/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/coba.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "coba", "category": "fun", "aliasMap": {"rimuru-fun-coba": "coba", "rimuru-coba": "coba", "rimuru-try": "try"}, "description": "Coba tanyakan sesuatu ke bot", "usage": ".coba <pertanyaan>", "example": ".coba tebak apa yang aku pikirkan", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/coba.js", metadata, m, extra)
handler.help = ["rimuru-fun-coba <pertanyaan>"]
handler.command = ["rimuru-fun-coba", "rimuru-coba", "rimuru-try"]
handler.tags = ["fun"]
handler.description = "Coba tanyakan sesuatu ke bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "coba", "alias": ["try"], "category": "fun", "description": "Coba tanyakan sesuatu ke bot", "usage": ".coba <pertanyaan>", "example": ".coba tebak apa yang aku pikirkan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-coba": "coba", "rimuru-coba": "coba", "rimuru-try": "try"}
export default handler
