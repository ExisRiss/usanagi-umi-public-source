/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/unreg.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "unreg", "category": "user", "aliasMap": {"rimuru-user-unreg": "unreg", "rimuru-unreg": "unreg", "rimuru-unregister": "unregister", "rimuru-hapusdaftar": "hapusdaftar", "unregister": "unregister", "hapusdaftar": "hapusdaftar"}, "description": "Hapus data pendaftaran kamu dari bot", "usage": ".unreg", "example": ".unreg", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/unreg.js", metadata, m, extra)
handler.help = ["rimuru-user-unreg"]
handler.command = ["rimuru-user-unreg", "rimuru-unreg", "rimuru-unregister", "rimuru-hapusdaftar", "unregister", "hapusdaftar"]
handler.tags = ["user"]
handler.description = "Hapus data pendaftaran kamu dari bot"
handler.importSource = "rimuru"
handler.importConfig = {"name": "unreg", "alias": ["unregister", "hapusdaftar"], "category": "user", "description": "Hapus data pendaftaran kamu dari bot", "usage": ".unreg", "example": ".unreg", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-unreg": "unreg", "rimuru-unreg": "unreg", "rimuru-unregister": "unregister", "rimuru-hapusdaftar": "hapusdaftar", "unregister": "unregister", "hapusdaftar": "hapusdaftar"}
export default handler
