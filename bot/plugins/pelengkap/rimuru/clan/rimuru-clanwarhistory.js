/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanwarhistory.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanwarhistory", "category": "clan", "aliasMap": {"rimuru-clan-clanwarhistory": "clanwarhistory", "rimuru-clanwarhistory": "clanwarhistory", "rimuru-warhistory": "warhistory", "rimuru-historywar": "historywar", "rimuru-riwayatwar": "riwayatwar", "clanwarhistory": "clanwarhistory", "warhistory": "warhistory", "historywar": "historywar", "riwayatwar": "riwayatwar"}, "description": "Lihat riwayat clan war", "usage": ".clanwarhistory", "example": ".clanwarhistory", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanwarhistory.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanwarhistory"]
handler.command = ["rimuru-clan-clanwarhistory", "rimuru-clanwarhistory", "rimuru-warhistory", "rimuru-historywar", "rimuru-riwayatwar", "clanwarhistory", "warhistory", "historywar", "riwayatwar"]
handler.tags = ["clan"]
handler.description = "Lihat riwayat clan war"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanwarhistory", "alias": ["warhistory", "historywar", "riwayatwar"], "category": "clan", "description": "Lihat riwayat clan war", "usage": ".clanwarhistory", "example": ".clanwarhistory", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanwarhistory": "clanwarhistory", "rimuru-clanwarhistory": "clanwarhistory", "rimuru-warhistory": "warhistory", "rimuru-historywar": "historywar", "rimuru-riwayatwar": "riwayatwar", "clanwarhistory": "clanwarhistory", "warhistory": "warhistory", "historywar": "historywar", "riwayatwar": "riwayatwar"}
export default handler
