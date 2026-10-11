/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekgamer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekgamer", "category": "cek", "aliasMap": {"rimuru-cek-cekgamer": "cekgamer", "rimuru-cekgamer": "cekgamer", "rimuru-gamer": "gamer", "rimuru-pro": "pro"}, "description": "Cek seberapa pro gamer kamu", "usage": ".cekgamer <nama>", "example": ".cekgamer Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekgamer.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekgamer <nama>"]
handler.command = ["rimuru-cek-cekgamer", "rimuru-cekgamer", "rimuru-gamer", "rimuru-pro"]
handler.tags = ["cek"]
handler.description = "Cek seberapa pro gamer kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekgamer", "alias": ["gamer", "pro"], "category": "cek", "description": "Cek seberapa pro gamer kamu", "usage": ".cekgamer <nama>", "example": ".cekgamer Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekgamer": "cekgamer", "rimuru-cekgamer": "cekgamer", "rimuru-gamer": "gamer", "rimuru-pro": "pro"}
export default handler
