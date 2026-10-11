/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekganteng.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekganteng", "category": "cek", "aliasMap": {"rimuru-cek-cekganteng": "cekganteng", "rimuru-cekganteng": "cekganteng", "rimuru-ganteng": "ganteng", "rimuru-handsome": "handsome", "handsome": "handsome"}, "description": "Cek seberapa ganteng kamu", "usage": ".cekganteng <nama>", "example": ".cekganteng Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekganteng.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekganteng <nama>"]
handler.command = ["rimuru-cek-cekganteng", "rimuru-cekganteng", "rimuru-ganteng", "rimuru-handsome", "handsome"]
handler.tags = ["cek"]
handler.description = "Cek seberapa ganteng kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekganteng", "alias": ["ganteng", "handsome"], "category": "cek", "description": "Cek seberapa ganteng kamu", "usage": ".cekganteng <nama>", "example": ".cekganteng Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekganteng": "cekganteng", "rimuru-cekganteng": "cekganteng", "rimuru-ganteng": "ganteng", "rimuru-handsome": "handsome", "handsome": "handsome"}
export default handler
