/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/delam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delam", "category": "owner", "aliasMap": {"rimuru-owner-delam": "delam", "rimuru-delam": "delam", "rimuru-delamrole": "delamrole", "rimuru-unam": "unam", "rimuru-removeam": "removeam", "delam": "delam", "delamrole": "delamrole", "unam": "unam", "removeam": "removeam"}, "description": "Hapus role AM (jadi free)", "usage": ".delam <@tag|reply|628xxx>", "example": ".delam 6283xxx", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/delam.js", metadata, m, extra)
handler.help = ["rimuru-owner-delam <@tag|reply|628xxx>"]
handler.command = ["rimuru-owner-delam", "rimuru-delam", "rimuru-delamrole", "rimuru-unam", "rimuru-removeam", "delam", "delamrole", "unam", "removeam"]
handler.tags = ["owner"]
handler.description = "Hapus role AM (jadi free)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delam", "alias": ["delamrole", "unam", "removeam"], "category": "owner", "description": "Hapus role AM (jadi free)", "usage": ".delam <@tag|reply|628xxx>", "example": ".delam 6283xxx", "isOwner": false, "isPremium": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-delam": "delam", "rimuru-delam": "delam", "rimuru-delamrole": "delamrole", "rimuru-unam": "unam", "rimuru-removeam": "removeam", "delam": "delam", "delamrole": "delamrole", "unam": "unam", "removeam": "removeam"}
export default handler
