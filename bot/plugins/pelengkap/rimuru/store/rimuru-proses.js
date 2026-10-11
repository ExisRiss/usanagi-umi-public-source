/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/store/proses.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "proses", "category": "store", "aliasMap": {"rimuru-store-proses": "proses", "rimuru-proses": "proses", "rimuru-prs": "prs", "rimuru-process": "process", "proses": "proses", "prs": "prs", "process": "process"}, "description": "Mulai proses transaksi dengan buyer", "usage": ".prs", "example": ".prs", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/store/proses.js", metadata, m, extra)
handler.help = ["rimuru-store-proses"]
handler.command = ["rimuru-store-proses", "rimuru-proses", "rimuru-prs", "rimuru-process", "proses", "prs", "process"]
handler.tags = ["store"]
handler.description = "Mulai proses transaksi dengan buyer"
handler.importSource = "rimuru"
handler.importConfig = {"name": "proses", "alias": ["prs", "process"], "category": "store", "description": "Mulai proses transaksi dengan buyer", "usage": ".prs", "example": ".prs", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-store-proses": "proses", "rimuru-proses": "proses", "rimuru-prs": "prs", "rimuru-process": "process", "proses": "proses", "prs": "prs", "process": "process"}
export default handler
