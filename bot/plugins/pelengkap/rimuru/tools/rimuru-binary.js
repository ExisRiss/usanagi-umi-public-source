/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/binary.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "biner", "category": "tools", "aliasMap": {"rimuru-tools-biner": "biner", "rimuru-biner": "biner", "rimuru-texttobin": "texttobin", "rimuru-teks2bin": "teks2bin", "rimuru-encodebiner": "encodebiner", "biner": "biner", "texttobin": "texttobin", "teks2bin": "teks2bin", "encodebiner": "encodebiner"}, "description": "Mengubah teks menjadi kode binary", "usage": ".biner <teks>", "example": ".biner Hello", "cooldown": 2, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/binary.js", metadata, m, extra)
handler.help = ["rimuru-tools-biner <teks>"]
handler.command = ["rimuru-tools-biner", "rimuru-biner", "rimuru-texttobin", "rimuru-teks2bin", "rimuru-encodebiner", "biner", "texttobin", "teks2bin", "encodebiner"]
handler.tags = ["tools"]
handler.description = "Mengubah teks menjadi kode binary"
handler.importSource = "rimuru"
handler.importConfig = {"name": "biner", "alias": ["texttobin", "teks2bin", "encodebiner"], "category": "tools", "description": "Mengubah teks menjadi kode binary", "usage": ".biner <teks>", "example": ".biner Hello", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 2, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-biner": "biner", "rimuru-biner": "biner", "rimuru-texttobin": "texttobin", "rimuru-teks2bin": "teks2bin", "rimuru-encodebiner": "encodebiner", "biner": "biner", "texttobin": "texttobin", "teks2bin": "teks2bin", "encodebiner": "encodebiner"}
export default handler
