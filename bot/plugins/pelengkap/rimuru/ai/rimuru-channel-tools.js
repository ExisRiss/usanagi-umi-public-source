/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/channel-tools.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "followch", "category": "owner", "aliasMap": {"rimuru-owner-followch": "followch", "rimuru-followch": "followch", "rimuru-unfollowch": "unfollowch", "rimuru-setnamech": "setnamech", "followch": "followch", "unfollowch": "unfollowch", "setnamech": "setnamech"}, "description": "Manajemen channel/newsletter tambahan dari Aqua", "usage": ".followch <channelJid> / .createch <nama>", "example": ".followch CHANNEL_ID", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/channel-tools.js", metadata, m, extra)
handler.help = ["rimuru-owner-followch <channelJid> / .createch <nama>"]
handler.command = ["rimuru-owner-followch", "rimuru-followch", "rimuru-unfollowch", "rimuru-setnamech", "followch", "unfollowch", "setnamech"]
handler.tags = ["owner"]
handler.description = "Manajemen channel/newsletter tambahan dari Aqua"
handler.importSource = "rimuru"
handler.importConfig = {"name": "followch", "alias": ["followch", "unfollowch", "setnamech"], "category": "owner", "description": "Manajemen channel/newsletter tambahan dari Aqua", "usage": ".followch <channelJid> / .createch <nama>", "example": ".followch CHANNEL_ID", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-followch": "followch", "rimuru-followch": "followch", "rimuru-unfollowch": "unfollowch", "rimuru-setnamech": "setnamech", "followch": "followch", "unfollowch": "unfollowch", "setnamech": "setnamech"}
export default handler
