/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/upch2.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "upch2", "category": "tools", "aliasMap": {"rimuru-tools-upch2": "upch2", "rimuru-upch2": "upch2", "rimuru-setchid2": "setchid2", "rimuru-addchid2": "addchid2", "rimuru-getchid2": "getchid2", "upch2": "upch2", "setchid2": "setchid2", "addchid2": "addchid2", "getchid2": "getchid2"}, "description": "Varian broadcast ke channel dari Tensura.", "usage": ".upch2 <teks>", "example": ".upch2 <teks>", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/upch2.js", metadata, m, extra)
handler.help = ["rimuru-tools-upch2 <teks>"]
handler.command = ["rimuru-tools-upch2", "rimuru-upch2", "rimuru-setchid2", "rimuru-addchid2", "rimuru-getchid2", "upch2", "setchid2", "addchid2", "getchid2"]
handler.tags = ["tools"]
handler.description = "Varian broadcast ke channel dari Tensura."
handler.importSource = "rimuru"
handler.importConfig = {"name": "upch2", "alias": ["setchid2", "addchid2", "getchid2"], "category": "tools", "description": "Varian broadcast ke channel dari Tensura.", "usage": ".upch2 <teks>", "example": ".upch2 <teks>", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-upch2": "upch2", "rimuru-upch2": "upch2", "rimuru-setchid2": "setchid2", "rimuru-addchid2": "addchid2", "rimuru-getchid2": "getchid2", "upch2": "upch2", "setchid2": "setchid2", "addchid2": "addchid2", "getchid2": "getchid2"}
export default handler
