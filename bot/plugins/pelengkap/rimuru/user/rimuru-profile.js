/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/profile.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "profile", "category": "user", "aliasMap": {"rimuru-user-profile": "profile", "rimuru-profile": "profile", "rimuru-me": "me", "rimuru-profil": "profil", "rimuru-myprofile": "myprofile", "rimuru-my": "my", "myprofile": "myprofile"}, "description": "Melihat profil user dengan RPG stats", "usage": ".profile [@user]", "example": ".profile", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/profile.js", metadata, m, extra)
handler.help = ["rimuru-user-profile [@user]"]
handler.command = ["rimuru-user-profile", "rimuru-profile", "rimuru-me", "rimuru-profil", "rimuru-myprofile", "rimuru-my", "myprofile"]
handler.tags = ["user"]
handler.description = "Melihat profil user dengan RPG stats"
handler.importSource = "rimuru"
handler.importConfig = {"name": "profile", "alias": ["me", "profil", "myprofile", "my", "stats", "status"], "category": "user", "description": "Melihat profil user dengan RPG stats", "usage": ".profile [@user]", "example": ".profile", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-profile": "profile", "rimuru-profile": "profile", "rimuru-me": "me", "rimuru-profil": "profil", "rimuru-myprofile": "myprofile", "rimuru-my": "my", "myprofile": "myprofile"}
export default handler
