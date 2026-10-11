/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/fakechat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakechat", "category": "fun", "aliasMap": {"rimuru-fun-fakechat": "fakechat", "rimuru-fakechat": "fakechat", "rimuru-fc": "fc", "rimuru-fakemsg": "fakemsg"}, "description": "Generate fake WhatsApp chat", "usage": ".fakechat @user | pesan", "example": ".fakechat @user | Kamu ganteng banget!", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/fakechat.js", metadata, m, extra)
handler.help = ["rimuru-fun-fakechat @user | pesan"]
handler.command = ["rimuru-fun-fakechat", "rimuru-fakechat", "rimuru-fc", "rimuru-fakemsg"]
handler.tags = ["fun"]
handler.description = "Generate fake WhatsApp chat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakechat", "alias": ["fc", "fakemsg"], "category": "fun", "description": "Generate fake WhatsApp chat", "usage": ".fakechat @user | pesan", "example": ".fakechat @user | Kamu ganteng banget!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-fakechat": "fakechat", "rimuru-fakechat": "fakechat", "rimuru-fc": "fc", "rimuru-fakemsg": "fakemsg"}
export default handler
