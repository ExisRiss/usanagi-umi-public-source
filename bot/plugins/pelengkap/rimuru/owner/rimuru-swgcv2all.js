/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/swgcv2all.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "swgcv2all", "category": "owner", "aliasMap": {"rimuru-owner-swgcv2all": "swgcv2all", "rimuru-swgcv2all": "swgcv2all", "rimuru-statusgrupv2all": "statusgrupv2all", "swgcv2all": "swgcv2all", "statusgrupv2all": "statusgrupv2all"}, "description": "Post Group Status V2 ke SEMUA grup", "usage": ".swgcv2all <teks> atau reply media", "example": ".swgcv2all Halo semua grup!", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/swgcv2all.js", metadata, m, extra)
handler.help = ["rimuru-owner-swgcv2all <teks> atau reply media"]
handler.command = ["rimuru-owner-swgcv2all", "rimuru-swgcv2all", "rimuru-statusgrupv2all", "swgcv2all", "statusgrupv2all"]
handler.tags = ["owner"]
handler.description = "Post Group Status V2 ke SEMUA grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "swgcv2all", "alias": ["statusgrupv2all"], "category": "owner", "description": "Post Group Status V2 ke SEMUA grup", "usage": ".swgcv2all <teks> atau reply media", "example": ".swgcv2all Halo semua grup!", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-swgcv2all": "swgcv2all", "rimuru-swgcv2all": "swgcv2all", "rimuru-statusgrupv2all": "statusgrupv2all", "swgcv2all": "swgcv2all", "statusgrupv2all": "statusgrupv2all"}
export default handler
