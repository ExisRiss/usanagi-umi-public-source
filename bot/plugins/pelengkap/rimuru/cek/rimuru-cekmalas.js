/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekmalas.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekmalas", "category": "cek", "aliasMap": {"rimuru-cek-cekmalas": "cekmalas", "rimuru-cekmalas": "cekmalas", "rimuru-malas": "malas", "rimuru-lazy": "lazy", "lazy": "lazy"}, "description": "Cek seberapa malas kamu", "usage": ".cekmalas <nama>", "example": ".cekmalas Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekmalas.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekmalas <nama>"]
handler.command = ["rimuru-cek-cekmalas", "rimuru-cekmalas", "rimuru-malas", "rimuru-lazy", "lazy"]
handler.tags = ["cek"]
handler.description = "Cek seberapa malas kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekmalas", "alias": ["malas", "lazy"], "category": "cek", "description": "Cek seberapa malas kamu", "usage": ".cekmalas <nama>", "example": ".cekmalas Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekmalas": "cekmalas", "rimuru-cekmalas": "cekmalas", "rimuru-malas": "malas", "rimuru-lazy": "lazy", "lazy": "lazy"}
export default handler
