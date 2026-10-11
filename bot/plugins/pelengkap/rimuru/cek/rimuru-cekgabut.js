/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekgabut.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekgabut", "category": "cek", "aliasMap": {"rimuru-cek-cekgabut": "cekgabut", "rimuru-cekgabut": "cekgabut", "rimuru-gabut": "gabut", "rimuru-bored": "bored", "bored": "bored"}, "description": "Cek tingkat keGabutan kamu", "usage": ".cekgabut <nama>", "example": ".cekgabut Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekgabut.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekgabut <nama>"]
handler.command = ["rimuru-cek-cekgabut", "rimuru-cekgabut", "rimuru-gabut", "rimuru-bored", "bored"]
handler.tags = ["cek"]
handler.description = "Cek tingkat keGabutan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekgabut", "alias": ["gabut", "bored"], "category": "cek", "description": "Cek tingkat keGabutan kamu", "usage": ".cekgabut <nama>", "example": ".cekgabut Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekgabut": "cekgabut", "rimuru-cekgabut": "cekgabut", "rimuru-gabut": "gabut", "rimuru-bored": "bored", "bored": "bored"}
export default handler
