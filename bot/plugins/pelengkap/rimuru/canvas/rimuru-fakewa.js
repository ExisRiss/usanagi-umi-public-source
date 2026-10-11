/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakewa", "category": "canvas", "aliasMap": {"rimuru-canvas-fakewa": "fakewa", "rimuru-fakewa": "fakewa", "fakewa": "fakewa"}, "description": "Bikin profil WA palsu", "usage": ".fakewa <nama>|<nomor>|[status] (reply/kirim foto)", "example": ".fakewa Fauzan|08123456789|Sibuk", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakewa.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakewa <nama>|<nomor>|[status] (reply/kirim foto)"]
handler.command = ["rimuru-canvas-fakewa", "rimuru-fakewa", "fakewa"]
handler.tags = ["canvas"]
handler.description = "Bikin profil WA palsu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakewa", "alias": [], "category": "canvas", "description": "Bikin profil WA palsu", "usage": ".fakewa <nama>|<nomor>|[status] (reply/kirim foto)", "example": ".fakewa Fauzan|08123456789|Sibuk", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakewa": "fakewa", "rimuru-fakewa": "fakewa", "fakewa": "fakewa"}
export default handler
