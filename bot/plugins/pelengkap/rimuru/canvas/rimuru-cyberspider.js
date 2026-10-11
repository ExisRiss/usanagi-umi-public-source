/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/cyberspider.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cyberspider", "category": "canvas", "aliasMap": {"rimuru-canvas-cyberspider": "cyberspider", "rimuru-cyberspider": "cyberspider", "cyberspider": "cyberspider"}, "description": "Bikin card cyber spider dari fotomu", "usage": ".cyberspider <teks> (reply/kirim foto)", "example": ".cyberspider Cyber", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/cyberspider.js", metadata, m, extra)
handler.help = ["rimuru-canvas-cyberspider <teks> (reply/kirim foto)"]
handler.command = ["rimuru-canvas-cyberspider", "rimuru-cyberspider", "cyberspider"]
handler.tags = ["canvas"]
handler.description = "Bikin card cyber spider dari fotomu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cyberspider", "alias": [], "category": "canvas", "description": "Bikin card cyber spider dari fotomu", "usage": ".cyberspider <teks> (reply/kirim foto)", "example": ".cyberspider Cyber", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-cyberspider": "cyberspider", "rimuru-cyberspider": "cyberspider", "cyberspider": "cyberspider"}
export default handler
