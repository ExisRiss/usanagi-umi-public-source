/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanjoin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanjoin", "category": "clan", "aliasMap": {"rimuru-clan-clanjoin": "clanjoin", "rimuru-clanjoin": "clanjoin", "rimuru-joinclan": "joinclan", "rimuru-guildjoin": "guildjoin", "clanjoin": "clanjoin", "joinclan": "joinclan", "guildjoin": "guildjoin"}, "description": "Gabung ke clan", "usage": ".clanjoin <clan_id>", "example": ".clanjoin clan_123456", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanjoin.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanjoin <clan_id>"]
handler.command = ["rimuru-clan-clanjoin", "rimuru-clanjoin", "rimuru-joinclan", "rimuru-guildjoin", "clanjoin", "joinclan", "guildjoin"]
handler.tags = ["clan"]
handler.description = "Gabung ke clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanjoin", "alias": ["joinclan", "guildjoin"], "category": "clan", "description": "Gabung ke clan", "usage": ".clanjoin <clan_id>", "example": ".clanjoin clan_123456", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanjoin": "clanjoin", "rimuru-clanjoin": "clanjoin", "rimuru-joinclan": "joinclan", "rimuru-guildjoin": "guildjoin", "clanjoin": "clanjoin", "joinclan": "joinclan", "guildjoin": "guildjoin"}
export default handler
