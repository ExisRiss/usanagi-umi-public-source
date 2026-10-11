/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekrezeki.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekrezeki", "category": "cek", "aliasMap": {"rimuru-cek-cekrezeki": "cekrezeki", "rimuru-cekrezeki": "cekrezeki", "rimuru-rezeki": "rezeki", "rimuru-fortune": "fortune"}, "description": "Cek tingkat rezeki kamu hari ini", "usage": ".cekrezeki <nama>", "example": ".cekrezeki Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekrezeki.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekrezeki <nama>"]
handler.command = ["rimuru-cek-cekrezeki", "rimuru-cekrezeki", "rimuru-rezeki", "rimuru-fortune"]
handler.tags = ["cek"]
handler.description = "Cek tingkat rezeki kamu hari ini"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekrezeki", "alias": ["rezeki", "fortune"], "category": "cek", "description": "Cek tingkat rezeki kamu hari ini", "usage": ".cekrezeki <nama>", "example": ".cekrezeki Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekrezeki": "cekrezeki", "rimuru-cekrezeki": "cekrezeki", "rimuru-rezeki": "rezeki", "rimuru-fortune": "fortune"}
export default handler
