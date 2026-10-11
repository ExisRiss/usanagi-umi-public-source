/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekpintar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekpintar", "category": "cek", "aliasMap": {"rimuru-cek-cekpintar": "cekpintar", "rimuru-cekpintar": "cekpintar", "rimuru-pintar": "pintar", "rimuru-iq": "iq", "rimuru-smart": "smart", "smart": "smart"}, "description": "Cek seberapa pintar kamu", "usage": ".cekpintar <nama>", "example": ".cekpintar Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekpintar.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekpintar <nama>"]
handler.command = ["rimuru-cek-cekpintar", "rimuru-cekpintar", "rimuru-pintar", "rimuru-iq", "rimuru-smart", "smart"]
handler.tags = ["cek"]
handler.description = "Cek seberapa pintar kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekpintar", "alias": ["pintar", "iq", "smart"], "category": "cek", "description": "Cek seberapa pintar kamu", "usage": ".cekpintar <nama>", "example": ".cekpintar Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekpintar": "cekpintar", "rimuru-cekpintar": "cekpintar", "rimuru-pintar": "pintar", "rimuru-iq": "iq", "rimuru-smart": "smart", "smart": "smart"}
export default handler
