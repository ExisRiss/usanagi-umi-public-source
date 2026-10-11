/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/jam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "timeis", "category": "tools", "aliasMap": {"rimuru-tools-timeis": "timeis", "rimuru-timeis": "timeis", "rimuru-waktujakarta": "waktujakarta", "timeis": "timeis", "waktujakarta": "waktujakarta"}, "description": "Cek waktu Jakarta dari time.is", "usage": ".timeis", "example": ".timeis", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/jam.js", metadata, m, extra)
handler.help = ["rimuru-tools-timeis"]
handler.command = ["rimuru-tools-timeis", "rimuru-timeis", "rimuru-waktujakarta", "timeis", "waktujakarta"]
handler.tags = ["tools"]
handler.description = "Cek waktu Jakarta dari time.is"
handler.importSource = "rimuru"
handler.importConfig = {"name": "timeis", "alias": ["waktujakarta"], "category": "tools", "description": "Cek waktu Jakarta dari time.is", "usage": ".timeis", "example": ".timeis", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-timeis": "timeis", "rimuru-timeis": "timeis", "rimuru-waktujakarta": "waktujakarta", "timeis": "timeis", "waktujakarta": "waktujakarta"}
export default handler
