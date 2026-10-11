/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/gsmarena2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gsmarena2", "category": "tools", "aliasMap": {"rimuru-tools-gsmarena2": "gsmarena2", "rimuru-gsmarena2": "gsmarena2", "rimuru-gsmspek2": "gsmspek2", "rimuru-hpspek2": "hpspek2", "gsmarena2": "gsmarena2", "gsmspek2": "gsmspek2", "hpspek2": "hpspek2"}, "description": "Pencarian spesifikasi HP GSM Arena (varian Tensura).", "usage": ".gsmarena2 <nama hp>", "example": ".gsmarena2 <nama hp>", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/gsmarena2.js", metadata, m, extra)
handler.help = ["rimuru-tools-gsmarena2 <nama hp>"]
handler.command = ["rimuru-tools-gsmarena2", "rimuru-gsmarena2", "rimuru-gsmspek2", "rimuru-hpspek2", "gsmarena2", "gsmspek2", "hpspek2"]
handler.tags = ["tools"]
handler.description = "Pencarian spesifikasi HP GSM Arena (varian Tensura)."
handler.importSource = "rimuru"
handler.importConfig = {"name": "gsmarena2", "alias": ["gsmspek2", "hpspek2"], "category": "tools", "description": "Pencarian spesifikasi HP GSM Arena (varian Tensura).", "usage": ".gsmarena2 <nama hp>", "example": ".gsmarena2 <nama hp>", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-gsmarena2": "gsmarena2", "rimuru-gsmarena2": "gsmarena2", "rimuru-gsmspek2": "gsmspek2", "rimuru-hpspek2": "hpspek2", "gsmarena2": "gsmarena2", "gsmspek2": "gsmspek2", "hpspek2": "hpspek2"}
export default handler
