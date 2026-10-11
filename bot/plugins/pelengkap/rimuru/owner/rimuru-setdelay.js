/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/setdelay.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setdelay", "category": "owner", "aliasMap": {"rimuru-owner-setdelay": "setdelay", "rimuru-setdelay": "setdelay", "rimuru-delay": "delay", "rimuru-setdelaybot": "setdelaybot", "rimuru-botdelay": "botdelay", "setdelay": "setdelay", "delay": "delay", "setdelaybot": "setdelaybot", "botdelay": "botdelay"}, "description": "Mengatur delay respon bot (cooldown global)", "usage": ".setdelay <detik>", "example": ".setdelay 3", "cooldown": 5}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/setdelay.js", metadata, m, extra)
handler.help = ["rimuru-owner-setdelay <detik>"]
handler.command = ["rimuru-owner-setdelay", "rimuru-setdelay", "rimuru-delay", "rimuru-setdelaybot", "rimuru-botdelay", "setdelay", "delay", "setdelaybot", "botdelay"]
handler.tags = ["owner"]
handler.description = "Mengatur delay respon bot (cooldown global)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setdelay", "alias": ["delay", "setdelaybot", "botdelay"], "category": "owner", "description": "Mengatur delay respon bot (cooldown global)", "usage": ".setdelay <detik>", "example": ".setdelay 3", "isOwner": true, "cooldown": 5, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-setdelay": "setdelay", "rimuru-setdelay": "setdelay", "rimuru-delay": "delay", "rimuru-setdelaybot": "setdelaybot", "rimuru-botdelay": "botdelay", "setdelay": "setdelay", "delay": "delay", "setdelaybot": "setdelaybot", "botdelay": "botdelay"}
export default handler
