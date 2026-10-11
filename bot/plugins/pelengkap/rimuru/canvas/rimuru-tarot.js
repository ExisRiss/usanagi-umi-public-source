/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/tarot.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tarot", "category": "fun", "aliasMap": {"rimuru-fun-tarot": "tarot", "rimuru-tarot": "tarot", "rimuru-karturama": "karturama", "rimuru-tarotcard": "tarotcard", "tarotcard": "tarotcard"}, "description": "Generate kartu tarot harian lengkap dengan visual card", "usage": ".tarot [nomor/nama] [terbalik|upright]", "example": ".tarot 10 terbalik", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/tarot.js", metadata, m, extra)
handler.help = ["rimuru-fun-tarot [nomor/nama] [terbalik|upright]"]
handler.command = ["rimuru-fun-tarot", "rimuru-tarot", "rimuru-karturama", "rimuru-tarotcard", "tarotcard"]
handler.tags = ["fun"]
handler.description = "Generate kartu tarot harian lengkap dengan visual card"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tarot", "alias": ["karturama", "tarotcard"], "category": "fun", "description": "Generate kartu tarot harian lengkap dengan visual card", "usage": ".tarot [nomor/nama] [terbalik|upright]", "example": ".tarot 10 terbalik", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-tarot": "tarot", "rimuru-tarot": "tarot", "rimuru-karturama": "karturama", "rimuru-tarotcard": "tarotcard", "tarotcard": "tarotcard"}
export default handler
