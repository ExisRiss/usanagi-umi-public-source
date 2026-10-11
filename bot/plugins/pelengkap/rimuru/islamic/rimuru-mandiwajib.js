/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/mandiwajib.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "mandiwajib", "category": "religi", "aliasMap": {"rimuru-religi-mandiwajib": "mandiwajib", "rimuru-mandiwajib": "mandiwajib", "rimuru-caramandiwajib": "caramandiwajib", "rimuru-mandi-wajib": "mandi-wajib", "mandiwajib": "mandiwajib", "caramandiwajib": "caramandiwajib", "mandi-wajib": "mandi-wajib"}, "description": "Panduan cara mandi wajib beserta doa", "usage": ".mandiwajib", "example": ".mandiwajib", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/mandiwajib.js", metadata, m, extra)
handler.help = ["rimuru-religi-mandiwajib"]
handler.command = ["rimuru-religi-mandiwajib", "rimuru-mandiwajib", "rimuru-caramandiwajib", "rimuru-mandi-wajib", "mandiwajib", "caramandiwajib", "mandi-wajib"]
handler.tags = ["religi"]
handler.description = "Panduan cara mandi wajib beserta doa"
handler.importSource = "rimuru"
handler.importConfig = {"name": "mandiwajib", "alias": ["caramandiwajib", "mandiwajib", "mandi-wajib"], "category": "religi", "description": "Panduan cara mandi wajib beserta doa", "usage": ".mandiwajib", "example": ".mandiwajib", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-mandiwajib": "mandiwajib", "rimuru-mandiwajib": "mandiwajib", "rimuru-caramandiwajib": "caramandiwajib", "rimuru-mandi-wajib": "mandi-wajib", "mandiwajib": "mandiwajib", "caramandiwajib": "caramandiwajib", "mandi-wajib": "mandi-wajib"}
export default handler
