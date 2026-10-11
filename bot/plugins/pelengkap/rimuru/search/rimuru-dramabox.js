/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/dramabox.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dramabox", "category": "search", "aliasMap": {"rimuru-search-dramabox": "dramabox", "rimuru-dramabox": "dramabox", "rimuru-drama": "drama", "rimuru-dramasearch": "dramasearch", "dramabox": "dramabox", "drama": "drama", "dramasearch": "dramasearch"}, "description": "Cari drama di DramaBox", "usage": ".dramabox <query>", "example": ".dramabox billionaire", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/dramabox.js", metadata, m, extra)
handler.help = ["rimuru-search-dramabox <query>"]
handler.command = ["rimuru-search-dramabox", "rimuru-dramabox", "rimuru-drama", "rimuru-dramasearch", "dramabox", "drama", "dramasearch"]
handler.tags = ["search"]
handler.description = "Cari drama di DramaBox"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dramabox", "alias": ["drama", "dramasearch"], "category": "search", "description": "Cari drama di DramaBox", "usage": ".dramabox <query>", "example": ".dramabox billionaire", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-dramabox": "dramabox", "rimuru-dramabox": "dramabox", "rimuru-drama": "drama", "rimuru-dramasearch": "dramasearch", "dramabox": "dramabox", "drama": "drama", "dramasearch": "dramasearch"}
export default handler
