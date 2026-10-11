/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/halah.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "halah", "category": "fun", "aliasMap": {"rimuru-fun-halah": "halah", "rimuru-halah": "halah", "rimuru-hilih": "hilih", "halah": "halah", "hilih": "hilih"}, "description": "Ubah teks ke gaya Halah/Hilih", "usage": ".halah <teks> / .hilih <teks>", "example": ".halah congratulations", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/halah.js", metadata, m, extra)
handler.help = ["rimuru-fun-halah <teks> / .hilih <teks>"]
handler.command = ["rimuru-fun-halah", "rimuru-halah", "rimuru-hilih", "halah", "hilih"]
handler.tags = ["fun"]
handler.description = "Ubah teks ke gaya Halah/Hilih"
handler.importSource = "rimuru"
handler.importConfig = {"name": "halah", "alias": ["hilih"], "category": "fun", "description": "Ubah teks ke gaya Halah/Hilih", "usage": ".halah <teks> / .hilih <teks>", "example": ".halah congratulations", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-halah": "halah", "rimuru-halah": "halah", "rimuru-hilih": "hilih", "halah": "halah", "hilih": "hilih"}
export default handler
