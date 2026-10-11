/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanraport.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanreport", "category": "clan", "aliasMap": {"rimuru-clan-clanreport": "clanreport", "rimuru-clanreport": "clanreport", "rimuru-reportclan": "reportclan", "rimuru-laporanclan": "laporanclan", "rimuru-aktivitasclan": "aktivitasclan", "clanreport": "clanreport", "reportclan": "reportclan", "laporanclan": "laporanclan", "aktivitasclan": "aktivitasclan"}, "description": "Lihat laporan aktivitas clan", "usage": ".clanreport", "example": ".clanreport", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanraport.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanreport"]
handler.command = ["rimuru-clan-clanreport", "rimuru-clanreport", "rimuru-reportclan", "rimuru-laporanclan", "rimuru-aktivitasclan", "clanreport", "reportclan", "laporanclan", "aktivitasclan"]
handler.tags = ["clan"]
handler.description = "Lihat laporan aktivitas clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanreport", "alias": ["reportclan", "laporanclan", "aktivitasclan"], "category": "clan", "description": "Lihat laporan aktivitas clan", "usage": ".clanreport", "example": ".clanreport", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanreport": "clanreport", "rimuru-clanreport": "clanreport", "rimuru-reportclan": "reportclan", "rimuru-laporanclan": "laporanclan", "rimuru-aktivitasclan": "aktivitasclan", "clanreport": "clanreport", "reportclan": "reportclan", "laporanclan": "laporanclan", "aktivitasclan": "aktivitasclan"}
export default handler
