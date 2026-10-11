/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/fetchweb.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fetchweb", "category": "tools", "aliasMap": {"rimuru-tools-fetchweb": "fetchweb", "rimuru-fetchweb": "fetchweb", "rimuru-webget": "webget", "rimuru-getweb": "getweb", "rimuru-ambilweb": "ambilweb", "rimuru-downloadweb": "downloadweb", "fetchweb": "fetchweb", "webget": "webget", "getweb": "getweb", "ambilweb": "ambilweb", "downloadweb": "downloadweb"}, "description": "Fetch dan simpan halaman web", "usage": ".fetchweb <url>", "example": ".fetchweb https://ditzzx.my.id", "cooldown": 30, "energi": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/fetchweb.js", metadata, m, extra)
handler.help = ["rimuru-tools-fetchweb <url>"]
handler.command = ["rimuru-tools-fetchweb", "rimuru-fetchweb", "rimuru-webget", "rimuru-getweb", "rimuru-ambilweb", "rimuru-downloadweb", "fetchweb", "webget", "getweb", "ambilweb", "downloadweb"]
handler.tags = ["tools"]
handler.description = "Fetch dan simpan halaman web"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fetchweb", "alias": ["webget", "getweb", "ambilweb", "downloadweb"], "category": "tools", "description": "Fetch dan simpan halaman web", "usage": ".fetchweb <url>", "example": ".fetchweb https://ditzzx.my.id", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 5, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-fetchweb": "fetchweb", "rimuru-fetchweb": "fetchweb", "rimuru-webget": "webget", "rimuru-getweb": "getweb", "rimuru-ambilweb": "ambilweb", "rimuru-downloadweb": "downloadweb", "fetchweb": "fetchweb", "webget": "webget", "getweb": "getweb", "ambilweb": "ambilweb", "downloadweb": "downloadweb"}
export default handler
