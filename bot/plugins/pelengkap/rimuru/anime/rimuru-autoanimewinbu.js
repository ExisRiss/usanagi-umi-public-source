/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/autoanimewinbu.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoanimewinbu", "category": "anime", "aliasMap": {"rimuru-anime-autoanimewinbu": "autoanimewinbu", "rimuru-autoanimewinbu": "autoanimewinbu", "rimuru-aaw": "aaw", "rimuru-autoanime": "autoanime", "autoanimewinbu": "autoanimewinbu", "aaw": "aaw", "autoanime": "autoanime"}, "description": "Auto upload ongoing anime & donghua dari winbu.net (720p Pixeldrain)", "usage": ".autoanimewinbu <start|stop|status|cek|list|reset|addgrup|delgrup>", "example": ".autoanimewinbu start", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/autoanimewinbu.js", metadata, m, extra)
handler.help = ["rimuru-anime-autoanimewinbu <start|stop|status|cek|list|reset|addgrup|delgrup>"]
handler.command = ["rimuru-anime-autoanimewinbu", "rimuru-autoanimewinbu", "rimuru-aaw", "rimuru-autoanime", "autoanimewinbu", "aaw", "autoanime"]
handler.tags = ["anime"]
handler.description = "Auto upload ongoing anime & donghua dari winbu.net (720p Pixeldrain)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoanimewinbu", "alias": ["aaw", "autoanime"], "category": "anime", "description": "Auto upload ongoing anime & donghua dari winbu.net (720p Pixeldrain)", "usage": ".autoanimewinbu <start|stop|status|cek|list|reset|addgrup|delgrup>", "example": ".autoanimewinbu start", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-anime-autoanimewinbu": "autoanimewinbu", "rimuru-autoanimewinbu": "autoanimewinbu", "rimuru-aaw": "aaw", "rimuru-autoanime": "autoanime", "autoanimewinbu": "autoanimewinbu", "aaw": "aaw", "autoanime": "autoanime"}
export default handler
