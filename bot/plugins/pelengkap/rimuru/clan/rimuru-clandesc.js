/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clandesc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clandesc", "category": "clan", "aliasMap": {"rimuru-clan-clandesc": "clandesc", "rimuru-clandesc": "clandesc", "rimuru-editdesc": "editdesc", "rimuru-clandescription": "clandescription", "clandesc": "clandesc", "editdesc": "editdesc", "clandescription": "clandescription"}, "description": "Edit deskripsi clan", "usage": ".clandesc <deskripsi>", "example": ".clandesc Clan pejuang sejati", "cooldown": 15, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clandesc.js", metadata, m, extra)
handler.help = ["rimuru-clan-clandesc <deskripsi>"]
handler.command = ["rimuru-clan-clandesc", "rimuru-clandesc", "rimuru-editdesc", "rimuru-clandescription", "clandesc", "editdesc", "clandescription"]
handler.tags = ["clan"]
handler.description = "Edit deskripsi clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clandesc", "alias": ["editdesc", "clandescription"], "category": "clan", "description": "Edit deskripsi clan", "usage": ".clandesc <deskripsi>", "example": ".clandesc Clan pejuang sejati", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clandesc": "clandesc", "rimuru-clandesc": "clandesc", "rimuru-editdesc": "editdesc", "rimuru-clandescription": "clandescription", "clandesc": "clandesc", "editdesc": "editdesc", "clandescription": "clandescription"}
export default handler
