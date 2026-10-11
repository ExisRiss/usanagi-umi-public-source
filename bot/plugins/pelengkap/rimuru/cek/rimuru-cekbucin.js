/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekbucin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekbucin", "category": "cek", "aliasMap": {"rimuru-cek-cekbucin": "cekbucin", "rimuru-cekbucin": "cekbucin"}, "description": "Cek seberapa bucin kamu", "usage": ".cekbucin <nama>", "example": ".cekbucin Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekbucin.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekbucin <nama>"]
handler.command = ["rimuru-cek-cekbucin", "rimuru-cekbucin"]
handler.tags = ["cek"]
handler.description = "Cek seberapa bucin kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekbucin", "alias": ["bucin"], "category": "cek", "description": "Cek seberapa bucin kamu", "usage": ".cekbucin <nama>", "example": ".cekbucin Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekbucin": "cekbucin", "rimuru-cekbucin": "cekbucin"}
export default handler
