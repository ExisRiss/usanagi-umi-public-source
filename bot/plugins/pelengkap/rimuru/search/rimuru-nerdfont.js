/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/nerdfont.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dafont", "category": "search", "aliasMap": {"rimuru-search-dafont": "dafont", "rimuru-nerdfont": "nerdfont", "dafont": "dafont", "nerdfont": "nerdfont", "font": "font"}, "description": "Cari font di DaFont", "usage": ".dafont <query>", "example": ".dafont Coolvetica", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/nerdfont.js", metadata, m, extra)
handler.help = ["rimuru-search-dafont <query>"]
handler.command = ["rimuru-search-dafont", "rimuru-nerdfont", "dafont", "nerdfont", "font"]
handler.tags = ["search"]
handler.description = "Cari font di DaFont"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dafont", "alias": ["nerdfont", "font"], "category": "search", "description": "Cari font di DaFont", "usage": ".dafont <query>", "example": ".dafont Coolvetica", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-dafont": "dafont", "rimuru-nerdfont": "nerdfont", "dafont": "dafont", "nerdfont": "nerdfont", "font": "font"}
export default handler
