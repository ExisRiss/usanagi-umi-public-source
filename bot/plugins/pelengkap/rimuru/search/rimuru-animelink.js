/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/animelink.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "animelink", "category": "search", "aliasMap": {"rimuru-search-animelink": "animelink", "rimuru-animelink": "animelink", "animelink": "animelink"}, "description": "Handler untuk link download anime", "usage": "Internal command", "example": "", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/animelink.js", metadata, m, extra)
handler.help = ["rimuru-search-animelink command"]
handler.command = ["rimuru-search-animelink", "rimuru-animelink", "animelink"]
handler.tags = ["search"]
handler.description = "Handler untuk link download anime"
handler.importSource = "rimuru"
handler.importConfig = {"name": "animelink", "alias": [], "category": "search", "description": "Handler untuk link download anime", "usage": "Internal command", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true, "isHidden": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-search-animelink": "animelink", "rimuru-animelink": "animelink", "animelink": "animelink"}
export default handler
