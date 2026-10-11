/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/exp.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "exp", "category": "user", "aliasMap": {"rimuru-user-exp": "exp", "rimuru-cekexp": "cekexp", "rimuru-myexp": "myexp", "rimuru-xp": "xp", "cekexp": "cekexp", "myexp": "myexp", "xp": "xp"}, "description": "Cek exp user", "usage": ".exp [@user]", "example": ".exp", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/exp.js", metadata, m, extra)
handler.help = ["rimuru-user-exp [@user]"]
handler.command = ["rimuru-user-exp", "rimuru-cekexp", "rimuru-myexp", "rimuru-xp", "cekexp", "myexp", "xp"]
handler.tags = ["user"]
handler.description = "Cek exp user"
handler.importSource = "rimuru"
handler.importConfig = {"name": "exp", "alias": ["cekexp", "myexp", "xp"], "category": "user", "description": "Cek exp user", "usage": ".exp [@user]", "example": ".exp", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-exp": "exp", "rimuru-cekexp": "cekexp", "rimuru-myexp": "myexp", "rimuru-xp": "xp", "cekexp": "cekexp", "myexp": "myexp", "xp": "xp"}
export default handler
