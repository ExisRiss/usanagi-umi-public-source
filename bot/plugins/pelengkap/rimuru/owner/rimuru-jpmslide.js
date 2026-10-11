/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/jpmslide.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "jpmslide", "category": "owner", "aliasMap": {"rimuru-owner-jpmslide": "jpmslide", "rimuru-jpmslide": "jpmslide", "jpmslide": "jpmslide"}, "description": "JPM carousel/slide ke semua grup yang diikuti bot", "usage": ".jpmslide", "example": ".jpmslide", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/jpmslide.js", metadata, m, extra)
handler.help = ["rimuru-owner-jpmslide"]
handler.command = ["rimuru-owner-jpmslide", "rimuru-jpmslide", "jpmslide"]
handler.tags = ["owner"]
handler.description = "JPM carousel/slide ke semua grup yang diikuti bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "jpmslide", "alias": [], "category": "owner", "description": "JPM carousel/slide ke semua grup yang diikuti bot", "usage": ".jpmslide", "example": ".jpmslide", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-jpmslide": "jpmslide", "rimuru-jpmslide": "jpmslide", "jpmslide": "jpmslide"}
export default handler
