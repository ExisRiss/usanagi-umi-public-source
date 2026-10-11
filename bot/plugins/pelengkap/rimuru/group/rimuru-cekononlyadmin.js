/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/cekononlyadmin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekonlyadmin", "category": "group", "aliasMap": {"rimuru-group-cekonlyadmin": "cekonlyadmin", "rimuru-cekonlyadmin": "cekonlyadmin", "rimuru-onlyadminstatus": "onlyadminstatus", "rimuru-statusadminonly": "statusadminonly", "cekonlyadmin": "cekonlyadmin", "onlyadminstatus": "onlyadminstatus", "statusadminonly": "statusadminonly"}, "description": "Cek status mode onlyadmin di grup", "usage": ".cekonlyadmin", "example": ".cekonlyadmin", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/cekononlyadmin.js", metadata, m, extra)
handler.help = ["rimuru-group-cekonlyadmin"]
handler.command = ["rimuru-group-cekonlyadmin", "rimuru-cekonlyadmin", "rimuru-onlyadminstatus", "rimuru-statusadminonly", "cekonlyadmin", "onlyadminstatus", "statusadminonly"]
handler.tags = ["group"]
handler.description = "Cek status mode onlyadmin di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekonlyadmin", "alias": ["onlyadminstatus", "statusadminonly"], "category": "group", "description": "Cek status mode onlyadmin di grup", "usage": ".cekonlyadmin", "example": ".cekonlyadmin", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-cekonlyadmin": "cekonlyadmin", "rimuru-cekonlyadmin": "cekonlyadmin", "rimuru-onlyadminstatus": "onlyadminstatus", "rimuru-statusadminonly": "statusadminonly", "cekonlyadmin": "cekonlyadmin", "onlyadminstatus": "onlyadminstatus", "statusadminonly": "statusadminonly"}
export default handler
