/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/barcode.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "barcode", "category": "tools", "aliasMap": {"rimuru-tools-barcode": "barcode", "rimuru-barcode": "barcode", "rimuru-code128": "code128", "code128": "code128"}, "description": "Membuat barcode Code-128", "usage": ".barcode <teks>", "example": ".barcode 1234567890", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/barcode.js", metadata, m, extra)
handler.help = ["rimuru-tools-barcode <teks>"]
handler.command = ["rimuru-tools-barcode", "rimuru-barcode", "rimuru-code128", "code128"]
handler.tags = ["tools"]
handler.description = "Membuat barcode Code-128"
handler.importSource = "rimuru"
handler.importConfig = {"name": "barcode", "alias": ["code128"], "category": "tools", "description": "Membuat barcode Code-128", "usage": ".barcode <teks>", "example": ".barcode 1234567890", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-barcode": "barcode", "rimuru-barcode": "barcode", "rimuru-code128": "code128", "code128": "code128"}
export default handler
