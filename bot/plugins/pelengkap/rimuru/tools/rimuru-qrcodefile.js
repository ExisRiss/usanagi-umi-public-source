/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/qrcodefile.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "qrcodefile", "category": "tools", "aliasMap": {"rimuru-tools-qrcodefile": "qrcodefile", "rimuru-qrcodefile": "qrcodefile", "rimuru-qrfile": "qrfile", "rimuru-fileqr": "fileqr", "rimuru-filetoqr": "filetoqr", "rimuru-qruguu": "qruguu", "qrcodefile": "qrcodefile", "qrfile": "qrfile", "fileqr": "fileqr", "filetoqr": "filetoqr", "qruguu": "qruguu"}, "description": "Mengupload media/file ke Uguu.se dan membuat QR Code berisi URL file tersebut", "usage": ".qrcodefile (kirim dengan caption atau reply media/file/viewonce/dokumen)", "example": ".qrcodefile", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/qrcodefile.js", metadata, m, extra)
handler.help = ["rimuru-tools-qrcodefile (kirim dengan caption atau reply media/file/viewonce/dokumen)"]
handler.command = ["rimuru-tools-qrcodefile", "rimuru-qrcodefile", "rimuru-qrfile", "rimuru-fileqr", "rimuru-filetoqr", "rimuru-qruguu", "qrcodefile", "qrfile", "fileqr", "filetoqr", "qruguu"]
handler.tags = ["tools"]
handler.description = "Mengupload media/file ke Uguu.se dan membuat QR Code berisi URL file tersebut"
handler.importSource = "rimuru"
handler.importConfig = {"name": "qrcodefile", "alias": ["qrfile", "fileqr", "filetoqr", "qruguu"], "category": "tools", "description": "Mengupload media/file ke Uguu.se dan membuat QR Code berisi URL file tersebut", "usage": ".qrcodefile (kirim dengan caption atau reply media/file/viewonce/dokumen)", "example": ".qrcodefile", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-qrcodefile": "qrcodefile", "rimuru-qrcodefile": "qrcodefile", "rimuru-qrfile": "qrfile", "rimuru-fileqr": "fileqr", "rimuru-filetoqr": "filetoqr", "rimuru-qruguu": "qruguu", "qrcodefile": "qrcodefile", "qrfile": "qrfile", "fileqr": "fileqr", "filetoqr": "filetoqr", "qruguu": "qruguu"}
export default handler
