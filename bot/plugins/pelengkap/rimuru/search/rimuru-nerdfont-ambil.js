/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/nerdfont-ambil.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "nerdfont-ambil", "category": "search", "aliasMap": {"rimuru-search-nerdfont-ambil": "nerdfont-ambil", "rimuru-nerdfont-ambil": "nerdfont-ambil", "rimuru-dafont-ambil": "dafont-ambil", "rimuru-fontambil": "fontambil", "nerdfont-ambil": "nerdfont-ambil", "dafont-ambil": "dafont-ambil", "fontambil": "fontambil"}, "description": "Cari font di DaFont", "usage": ".nerdfont-ambil <query>", "example": ".nerdfont-ambil Coolvetica", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/nerdfont-ambil.js", metadata, m, extra)
handler.help = ["rimuru-search-nerdfont-ambil <query>"]
handler.command = ["rimuru-search-nerdfont-ambil", "rimuru-nerdfont-ambil", "rimuru-dafont-ambil", "rimuru-fontambil", "nerdfont-ambil", "dafont-ambil", "fontambil"]
handler.tags = ["search"]
handler.description = "Cari font di DaFont"
handler.importSource = "rimuru"
handler.importConfig = {"name": "nerdfont-ambil", "alias": ["dafont-ambil", "fontambil"], "category": "search", "description": "Cari font di DaFont", "usage": ".nerdfont-ambil <query>", "example": ".nerdfont-ambil Coolvetica", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-nerdfont-ambil": "nerdfont-ambil", "rimuru-nerdfont-ambil": "nerdfont-ambil", "rimuru-dafont-ambil": "dafont-ambil", "rimuru-fontambil": "fontambil", "nerdfont-ambil": "nerdfont-ambil", "dafont-ambil": "dafont-ambil", "fontambil": "fontambil"}
export default handler
