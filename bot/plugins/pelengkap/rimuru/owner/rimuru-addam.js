/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addam.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addam", "category": "owner", "aliasMap": {"rimuru-owner-addam": "addam", "rimuru-addam": "addam", "rimuru-addamrole": "addamrole", "rimuru-setam": "setam", "addam": "addam", "addamrole": "addamrole", "setam": "setam"}, "description": "Tambah role Alight Motion (member/reseller/premium/partner/owner)", "usage": ".addam <role> <@tag|reply|628xxx>", "example": ".addam partner 6283xxx", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addam.js", metadata, m, extra)
handler.help = ["rimuru-owner-addam <role> <@tag|reply|628xxx>"]
handler.command = ["rimuru-owner-addam", "rimuru-addam", "rimuru-addamrole", "rimuru-setam", "addam", "addamrole", "setam"]
handler.tags = ["owner"]
handler.description = "Tambah role Alight Motion (member/reseller/premium/partner/owner)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addam", "alias": ["addamrole", "setam"], "category": "owner", "description": "Tambah role Alight Motion (member/reseller/premium/partner/owner)", "usage": ".addam <role> <@tag|reply|628xxx>", "example": ".addam partner 6283xxx", "isOwner": false, "isPremium": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addam": "addam", "rimuru-addam": "addam", "rimuru-addamrole": "addamrole", "rimuru-setam": "setam", "addam": "addam", "addamrole": "addamrole", "setam": "setam"}
export default handler
