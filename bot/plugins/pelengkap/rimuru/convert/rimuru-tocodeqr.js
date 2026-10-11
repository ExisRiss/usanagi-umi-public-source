/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/convert/tocodeqr.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "tocodeqr", "category": "tools", "aliasMap": {"rimuru-tools-tocodeqr": "tocodeqr", "rimuru-tocodeqr": "tocodeqr", "rimuru-qrurl": "qrurl", "rimuru-linktoqr": "linktoqr", "tocodeqr": "tocodeqr", "qrurl": "qrurl", "linktoqr": "linktoqr"}, "description": "Convert link menjadi QR Code", "usage": ".tocodeqr <link>", "example": ".tocodeqr https://youtube.com", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/convert/tocodeqr.js", metadata, m, extra)
handler.help = ["rimuru-tools-tocodeqr <link>"]
handler.command = ["rimuru-tools-tocodeqr", "rimuru-tocodeqr", "rimuru-qrurl", "rimuru-linktoqr", "tocodeqr", "qrurl", "linktoqr"]
handler.tags = ["tools"]
handler.description = "Convert link menjadi QR Code"
handler.importSource = "rimuru"
handler.importConfig = {"name": "tocodeqr", "alias": ["qrurl", "linktoqr"], "category": "tools", "description": "Convert link menjadi QR Code", "usage": ".tocodeqr <link>", "example": ".tocodeqr https://youtube.com", "cooldown": 3, "energi": 0, "isOwner": false, "isGroup": false, "isPrivate": false, "isPremium": false, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-tocodeqr": "tocodeqr", "rimuru-tocodeqr": "tocodeqr", "rimuru-qrurl": "qrurl", "rimuru-linktoqr": "linktoqr", "tocodeqr": "tocodeqr", "qrurl": "qrurl", "linktoqr": "linktoqr"}
export default handler
