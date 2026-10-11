/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/setbio.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "setbio", "category": "tools", "aliasMap": {"rimuru-tools-setbio": "setbio", "rimuru-setbio": "setbio", "rimuru-setbiobot": "setbiobot", "rimuru-setstatus": "setstatus", "rimuru-setabout": "setabout", "setbio": "setbio", "setbiobot": "setbiobot", "setstatus": "setstatus", "setabout": "setabout"}, "description": "Mengubah bio/status bot", "usage": ".setbio <bio baru>", "example": ".setbio Bot WhatsApp by Lucky Archz", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/setbio.js", metadata, m, extra)
handler.help = ["rimuru-tools-setbio <bio baru>"]
handler.command = ["rimuru-tools-setbio", "rimuru-setbio", "rimuru-setbiobot", "rimuru-setstatus", "rimuru-setabout", "setbio", "setbiobot", "setstatus", "setabout"]
handler.tags = ["tools"]
handler.description = "Mengubah bio/status bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "setbio", "alias": ["setbiobot", "setstatus", "setabout"], "category": "tools", "description": "Mengubah bio/status bot", "usage": ".setbio <bio baru>", "example": ".setbio Bot WhatsApp by Lucky Archz", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-setbio": "setbio", "rimuru-setbio": "setbio", "rimuru-setbiobot": "setbiobot", "rimuru-setstatus": "setstatus", "rimuru-setabout": "setabout", "setbio": "setbio", "setbiobot": "setbiobot", "setstatus": "setstatus", "setabout": "setabout"}
export default handler
