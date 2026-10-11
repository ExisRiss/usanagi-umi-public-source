/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/streamer.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "streamer", "category": "rpg", "aliasMap": {"rimuru-rpg-streamer": "streamer", "rimuru-streamer": "streamer", "rimuru-live": "live", "rimuru-vtuber": "vtuber"}, "description": "Live streaming game dapet donasi besar tapi resiko dibanned platform!", "usage": ".streamer", "example": ".streamer", "cooldown": 180, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/streamer.js", metadata, m, extra)
handler.help = ["rimuru-rpg-streamer"]
handler.command = ["rimuru-rpg-streamer", "rimuru-streamer", "rimuru-live", "rimuru-vtuber"]
handler.tags = ["rpg"]
handler.description = "Live streaming game dapet donasi besar tapi resiko dibanned platform!"
handler.importSource = "rimuru"
handler.importConfig = {"name": "streamer", "alias": ["live", "vtuber"], "category": "rpg", "description": "Live streaming game dapet donasi besar tapi resiko dibanned platform!", "usage": ".streamer", "example": ".streamer", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 180, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-streamer": "streamer", "rimuru-streamer": "streamer", "rimuru-live": "live", "rimuru-vtuber": "vtuber"}
export default handler
