/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/user/referal.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "referal", "category": "user", "aliasMap": {"rimuru-user-referal": "referal", "rimuru-referal": "referal", "rimuru-referral": "referral", "rimuru-refer": "refer", "rimuru-ref": "ref", "referal": "referal", "referral": "referral", "refer": "refer", "ref": "ref"}, "description": "Sistem kode referral untuk mendapatkan EXP", "usage": ".referal [kode]", "example": ".referal atau .referal ABC123XYZ", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/user/referal.js", metadata, m, extra)
handler.help = ["rimuru-user-referal [kode]"]
handler.command = ["rimuru-user-referal", "rimuru-referal", "rimuru-referral", "rimuru-refer", "rimuru-ref", "referal", "referral", "refer", "ref"]
handler.tags = ["user"]
handler.description = "Sistem kode referral untuk mendapatkan EXP"
handler.importSource = "rimuru"
handler.importConfig = {"name": "referal", "alias": ["referral", "refer", "ref"], "category": "user", "description": "Sistem kode referral untuk mendapatkan EXP", "usage": ".referal [kode]", "example": ".referal atau .referal ABC123XYZ", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-user-referal": "referal", "rimuru-referal": "referal", "rimuru-referral": "referral", "rimuru-refer": "refer", "rimuru-ref": "ref", "referal": "referal", "referral": "referral", "refer": "refer", "ref": "ref"}
export default handler
