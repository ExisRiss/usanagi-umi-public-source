/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakefbkomen.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakefbkomen", "category": "canvas", "aliasMap": {"rimuru-canvas-fakefbkomen": "fakefbkomen", "rimuru-fakefbkomen": "fakefbkomen", "rimuru-fbkomen": "fbkomen", "rimuru-komenfb": "komenfb", "fakefbkomen": "fakefbkomen", "fbkomen": "fbkomen", "komenfb": "komenfb"}, "description": "Bikin gambar komentar palsu facebook", "usage": ".fakefbkomen <nama>|<komentar> (reply/kirim foto)", "example": ".fakefbkomen Fauzan|Ini komentar saya", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakefbkomen.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakefbkomen <nama>|<komentar> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-fakefbkomen", "rimuru-fakefbkomen", "rimuru-fbkomen", "rimuru-komenfb", "fakefbkomen", "fbkomen", "komenfb"]
handler.tags = ["canvas"]
handler.description = "Bikin gambar komentar palsu facebook"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakefbkomen", "alias": ["fbkomen", "komenfb"], "category": "canvas", "description": "Bikin gambar komentar palsu facebook", "usage": ".fakefbkomen <nama>|<komentar> (reply/kirim foto)", "example": ".fakefbkomen Fauzan|Ini komentar saya", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakefbkomen": "fakefbkomen", "rimuru-fakefbkomen": "fakefbkomen", "rimuru-fbkomen": "fbkomen", "rimuru-komenfb": "komenfb", "fakefbkomen": "fakefbkomen", "fbkomen": "fbkomen", "komenfb": "komenfb"}
export default handler
