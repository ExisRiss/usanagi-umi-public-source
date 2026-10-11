/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekngantuk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekngantuk", "category": "cek", "aliasMap": {"rimuru-cek-cekngantuk": "cekngantuk", "rimuru-cekngantuk": "cekngantuk", "rimuru-ngantuk": "ngantuk", "rimuru-sleepy": "sleepy", "sleepy": "sleepy"}, "description": "Cek tingkat ngantuk kamu", "usage": ".cekngantuk <nama>", "example": ".cekngantuk Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekngantuk.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekngantuk <nama>"]
handler.command = ["rimuru-cek-cekngantuk", "rimuru-cekngantuk", "rimuru-ngantuk", "rimuru-sleepy", "sleepy"]
handler.tags = ["cek"]
handler.description = "Cek tingkat ngantuk kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekngantuk", "alias": ["ngantuk", "sleepy"], "category": "cek", "description": "Cek tingkat ngantuk kamu", "usage": ".cekngantuk <nama>", "example": ".cekngantuk Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekngantuk": "cekngantuk", "rimuru-cekngantuk": "cekngantuk", "rimuru-ngantuk": "ngantuk", "rimuru-sleepy": "sleepy", "sleepy": "sleepy"}
export default handler
