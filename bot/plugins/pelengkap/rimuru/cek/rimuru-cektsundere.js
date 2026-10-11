/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cektsundere.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cektsundere", "category": "cek", "aliasMap": {"rimuru-cek-cektsundere": "cektsundere", "rimuru-cektsundere": "cektsundere", "rimuru-tsundere": "tsundere"}, "description": "Cek tingkat tsundere kamu", "usage": ".cektsundere <nama>", "example": ".cektsundere Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cektsundere.js", metadata, m, extra)
handler.help = ["rimuru-cek-cektsundere <nama>"]
handler.command = ["rimuru-cek-cektsundere", "rimuru-cektsundere", "rimuru-tsundere"]
handler.tags = ["cek"]
handler.description = "Cek tingkat tsundere kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cektsundere", "alias": ["tsundere"], "category": "cek", "description": "Cek tingkat tsundere kamu", "usage": ".cektsundere <nama>", "example": ".cektsundere Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cektsundere": "cektsundere", "rimuru-cektsundere": "cektsundere", "rimuru-tsundere": "tsundere"}
export default handler
