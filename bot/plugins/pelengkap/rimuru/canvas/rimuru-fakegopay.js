/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakegopay.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakegopay", "category": "canvas", "aliasMap": {"rimuru-canvas-fakegopay": "fakegopay", "rimuru-fakegopay": "fakegopay", "fakegopay": "fakegopay"}, "description": "Membuat canvas fake gopay", "usage": ".fakegopay <saldo>|<coin>|<terpakai>|<bulan>", "example": ".fakegopay 100000|500|20000|Januari", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakegopay.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakegopay <saldo>|<coin>|<terpakai>|<bulan>"]
handler.command = ["rimuru-canvas-fakegopay", "rimuru-fakegopay", "fakegopay"]
handler.tags = ["canvas"]
handler.description = "Membuat canvas fake gopay"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakegopay", "alias": ["fakegopay"], "category": "canvas", "description": "Membuat canvas fake gopay", "usage": ".fakegopay <saldo>|<coin>|<terpakai>|<bulan>", "example": ".fakegopay 100000|500|20000|Januari", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakegopay": "fakegopay", "rimuru-fakegopay": "fakegopay", "fakegopay": "fakegopay"}
export default handler
