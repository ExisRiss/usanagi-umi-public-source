/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/renungan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "renungan", "category": "fun", "aliasMap": {"rimuru-fun-renungan": "renungan", "rimuru-renungan": "renungan", "rimuru-motivasi": "motivasi", "rimuru-mutiara": "mutiara", "motivasi": "motivasi", "mutiara": "mutiara"}, "description": "Random gambar renungan/motivasi", "usage": ".renungan", "example": ".renungan", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/renungan.js", metadata, m, extra)
handler.help = ["rimuru-fun-renungan"]
handler.command = ["rimuru-fun-renungan", "rimuru-renungan", "rimuru-motivasi", "rimuru-mutiara", "motivasi", "mutiara"]
handler.tags = ["fun"]
handler.description = "Random gambar renungan/motivasi"
handler.importSource = "rimuru"
handler.importConfig = {"name": "renungan", "alias": ["motivasi", "mutiara"], "category": "fun", "description": "Random gambar renungan/motivasi", "usage": ".renungan", "example": ".renungan", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-renungan": "renungan", "rimuru-renungan": "renungan", "rimuru-motivasi": "motivasi", "rimuru-mutiara": "mutiara", "motivasi": "motivasi", "mutiara": "mutiara"}
export default handler
