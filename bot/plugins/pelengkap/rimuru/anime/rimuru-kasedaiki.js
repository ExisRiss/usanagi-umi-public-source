/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/anime/kasedaiki.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "kasedaiki", "category": "anime", "aliasMap": {"rimuru-anime-kasedaiki": "kasedaiki", "rimuru-kasedaiki": "kasedaiki", "rimuru-kasedai": "kasedai", "rimuru-aiki": "aiki", "kasedaiki": "kasedaiki", "kasedai": "kasedai", "aiki": "aiki"}, "description": "Kirim gambar random kasedaiki", "usage": ".kasedaiki", "example": ".kasedaiki", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/anime/kasedaiki.js", metadata, m, extra)
handler.help = ["rimuru-anime-kasedaiki"]
handler.command = ["rimuru-anime-kasedaiki", "rimuru-kasedaiki", "rimuru-kasedai", "rimuru-aiki", "kasedaiki", "kasedai", "aiki"]
handler.tags = ["anime"]
handler.description = "Kirim gambar random kasedaiki"
handler.importSource = "rimuru"
handler.importConfig = {"name": "kasedaiki", "alias": ["kasedai", "aiki"], "category": "anime", "description": "Kirim gambar random kasedaiki", "usage": ".kasedaiki", "example": ".kasedaiki", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-anime-kasedaiki": "kasedaiki", "rimuru-kasedaiki": "kasedaiki", "rimuru-kasedai": "kasedai", "rimuru-aiki": "aiki", "kasedaiki": "kasedaiki", "kasedai": "kasedai", "aiki": "aiki"}
export default handler
