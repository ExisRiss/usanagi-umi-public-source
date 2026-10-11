/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/playsoundcloud.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "playsoundcloud", "category": "search", "aliasMap": {"rimuru-search-playsoundcloud": "playsoundcloud", "rimuru-playsoundcloud": "playsoundcloud", "rimuru-playsc": "playsc", "playsoundcloud": "playsoundcloud", "playsc": "playsc"}, "description": "Cari dan download lagu dari SoundCloud", "usage": ".playsc judul", "example": ".playsc Only We Know", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/playsoundcloud.js", metadata, m, extra)
handler.help = ["rimuru-search-playsoundcloud judul"]
handler.command = ["rimuru-search-playsoundcloud", "rimuru-playsoundcloud", "rimuru-playsc", "playsoundcloud", "playsc"]
handler.tags = ["search"]
handler.description = "Cari dan download lagu dari SoundCloud"
handler.importSource = "rimuru"
handler.importConfig = {"name": "playsoundcloud", "alias": ["playsc"], "category": "search", "description": "Cari dan download lagu dari SoundCloud", "usage": ".playsc judul", "example": ".playsc Only We Know", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-playsoundcloud": "playsoundcloud", "rimuru-playsoundcloud": "playsoundcloud", "rimuru-playsc": "playsc", "playsoundcloud": "playsoundcloud", "playsc": "playsc"}
export default handler
