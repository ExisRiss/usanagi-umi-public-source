/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/fakebca.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakebca", "category": "maker", "aliasMap": {"rimuru-maker-fakebca": "fakebca", "rimuru-fakebca": "fakebca", "rimuru-fbca": "fbca", "rimuru-bca": "bca", "fakebca": "fakebca", "fbca": "fbca", "bca": "bca"}, "description": "Buat tampilan saldo Fake BCA menggunakan Canvas", "usage": ".fakebca NAMA|NO_REK|SALDO", "example": ".fakebca RIN IMUP|111 - 222 - 3333|1,000,000", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/fakebca.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakebca NAMA|NO_REK|SALDO"]
handler.command = ["rimuru-maker-fakebca", "rimuru-fakebca", "rimuru-fbca", "rimuru-bca", "fakebca", "fbca", "bca"]
handler.tags = ["maker"]
handler.description = "Buat tampilan saldo Fake BCA menggunakan Canvas"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakebca", "alias": ["fbca", "bca"], "category": "maker", "description": "Buat tampilan saldo Fake BCA menggunakan Canvas", "usage": ".fakebca NAMA|NO_REK|SALDO", "example": ".fakebca RIN IMUP|111 - 222 - 3333|1,000,000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-maker-fakebca": "fakebca", "rimuru-fakebca": "fakebca", "rimuru-fbca": "fbca", "rimuru-bca": "bca", "fakebca": "fakebca", "fbca": "fbca", "bca": "bca"}
export default handler
