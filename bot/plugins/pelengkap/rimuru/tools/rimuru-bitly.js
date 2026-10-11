/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/bitly.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bitly", "category": "tools", "aliasMap": {"rimuru-tools-bitly": "bitly", "rimuru-bitly": "bitly", "rimuru-shortlink": "shortlink", "rimuru-shorturl": "shorturl", "bitly": "bitly", "shortlink": "shortlink", "shorturl": "shorturl"}, "description": "Shorten URL dengan Bitly", "usage": ".bitly <url>", "example": ".bitly https://google.com", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/bitly.js", metadata, m, extra)
handler.help = ["rimuru-tools-bitly <url>"]
handler.command = ["rimuru-tools-bitly", "rimuru-bitly", "rimuru-shortlink", "rimuru-shorturl", "bitly", "shortlink", "shorturl"]
handler.tags = ["tools"]
handler.description = "Shorten URL dengan Bitly"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bitly", "alias": ["shortlink", "shorturl"], "category": "tools", "description": "Shorten URL dengan Bitly", "usage": ".bitly <url>", "example": ".bitly https://google.com", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-bitly": "bitly", "rimuru-bitly": "bitly", "rimuru-shortlink": "shortlink", "rimuru-shorturl": "shorturl", "bitly": "bitly", "shortlink": "shortlink", "shorturl": "shorturl"}
export default handler
