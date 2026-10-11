/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/txt2qr.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "txt2qr", "category": "tools", "aliasMap": {"rimuru-tools-txt2qr": "txt2qr", "rimuru-txt2qr": "txt2qr", "rimuru-texttoqr": "texttoqr", "rimuru-qrcode": "qrcode", "rimuru-qrcreate": "qrcreate", "txt2qr": "txt2qr", "texttoqr": "texttoqr", "qrcreate": "qrcreate"}, "description": "Generate QR code dari teks", "usage": ".txt2qr <text>", "example": ".txt2qr https://google.com", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/txt2qr.js", metadata, m, extra)
handler.help = ["rimuru-tools-txt2qr <text>"]
handler.command = ["rimuru-tools-txt2qr", "rimuru-txt2qr", "rimuru-texttoqr", "rimuru-qrcode", "rimuru-qrcreate", "txt2qr", "texttoqr", "qrcreate"]
handler.tags = ["tools"]
handler.description = "Generate QR code dari teks"
handler.importSource = "rimuru"
handler.importConfig = {"name": "txt2qr", "alias": ["texttoqr", "qrcode", "qrcreate"], "category": "tools", "description": "Generate QR code dari teks", "usage": ".txt2qr <text>", "example": ".txt2qr https://google.com", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-txt2qr": "txt2qr", "rimuru-txt2qr": "txt2qr", "rimuru-texttoqr": "texttoqr", "rimuru-qrcode": "qrcode", "rimuru-qrcreate": "qrcreate", "txt2qr": "txt2qr", "texttoqr": "texttoqr", "qrcreate": "qrcreate"}
export default handler
