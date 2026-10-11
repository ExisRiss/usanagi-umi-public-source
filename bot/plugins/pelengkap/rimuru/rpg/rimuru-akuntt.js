/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/akuntt.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "akuntiktok", "category": "rpg", "aliasMap": {"rimuru-rpg-akuntiktok": "akuntiktok", "rimuru-akuntiktok": "akuntiktok", "rimuru-akuntiktokprofile": "akuntiktokprofile", "rimuru-akuntt": "akuntt", "akuntiktok": "akuntiktok", "akuntiktokprofile": "akuntiktokprofile", "akuntt": "akuntt"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/akuntt.js", metadata, m, extra)
handler.help = ["rimuru-rpg-akuntiktok"]
handler.command = ["rimuru-rpg-akuntiktok", "rimuru-akuntiktok", "rimuru-akuntiktokprofile", "rimuru-akuntt", "akuntiktok", "akuntiktokprofile", "akuntt"]
handler.tags = ["rpg"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "akuntiktok", "alias": ["akuntiktokprofile", "akuntt"], "category": "rpg", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-akuntiktok": "akuntiktok", "rimuru-akuntiktok": "akuntiktok", "rimuru-akuntiktokprofile": "akuntiktokprofile", "rimuru-akuntt": "akuntt", "akuntiktok": "akuntiktok", "akuntiktokprofile": "akuntiktokprofile", "akuntt": "akuntt"}
export default handler
