/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/fakesw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakesw", "category": "tools", "aliasMap": {"rimuru-tools-fakesw": "fakesw", "rimuru-fakesw": "fakesw", "rimuru-fsw": "fsw", "rimuru-swfake": "swfake", "fakesw": "fakesw", "fsw": "fsw", "swfake": "swfake"}, "description": "Generate gambar Fake Status WhatsApp", "usage": ".fakesw sw|views|caption (Reply Gambar)", "example": ".fakesw My Contact|1250|Lagi santai nih (dengan reply gambar)", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/fakesw.js", metadata, m, extra)
handler.help = ["rimuru-tools-fakesw sw|views|caption (Reply Gambar)"]
handler.command = ["rimuru-tools-fakesw", "rimuru-fakesw", "rimuru-fsw", "rimuru-swfake", "fakesw", "fsw", "swfake"]
handler.tags = ["tools"]
handler.description = "Generate gambar Fake Status WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakesw", "alias": ["fsw", "swfake"], "category": "tools", "description": "Generate gambar Fake Status WhatsApp", "usage": ".fakesw sw|views|caption (Reply Gambar)", "example": ".fakesw My Contact|1250|Lagi santai nih (dengan reply gambar)", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-fakesw": "fakesw", "rimuru-fakesw": "fakesw", "rimuru-fsw": "fsw", "rimuru-swfake": "swfake", "fakesw": "fakesw", "fsw": "fsw", "swfake": "swfake"}
export default handler
