/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekimut.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekimut", "category": "cek", "aliasMap": {"rimuru-cek-cekimut": "cekimut", "rimuru-cekimut": "cekimut", "rimuru-imut": "imut", "rimuru-cute": "cute", "cute": "cute"}, "description": "Cek seberapa imut kamu", "usage": ".cekimut <nama>", "example": ".cekimut Ani", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekimut.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekimut <nama>"]
handler.command = ["rimuru-cek-cekimut", "rimuru-cekimut", "rimuru-imut", "rimuru-cute", "cute"]
handler.tags = ["cek"]
handler.description = "Cek seberapa imut kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekimut", "alias": ["imut", "cute"], "category": "cek", "description": "Cek seberapa imut kamu", "usage": ".cekimut <nama>", "example": ".cekimut Ani", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekimut": "cekimut", "rimuru-cekimut": "cekimut", "rimuru-imut": "imut", "rimuru-cute": "cute", "cute": "cute"}
export default handler
