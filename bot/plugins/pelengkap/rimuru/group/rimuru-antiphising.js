/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antiphising.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antiphising", "category": "group", "aliasMap": {"rimuru-group-antiphising": "antiphising", "rimuru-antiphising": "antiphising", "rimuru-antiphishing": "antiphishing", "rimuru-antiscamlink": "antiscamlink", "rimuru-nophising": "nophising", "antiphishing": "antiphishing", "antiscamlink": "antiscamlink", "nophising": "nophising"}, "description": "Deteksi konten phising di grup", "usage": ".antiphising <on/off/metode> [kick/remove]", "example": ".antiphising on", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antiphising.js", metadata, m, extra)
handler.help = ["rimuru-group-antiphising <on/off/metode> [kick/remove]"]
handler.command = ["rimuru-group-antiphising", "rimuru-antiphising", "rimuru-antiphishing", "rimuru-antiscamlink", "rimuru-nophising", "antiphishing", "antiscamlink", "nophising"]
handler.tags = ["group"]
handler.description = "Deteksi konten phising di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antiphising", "alias": ["antiphishing", "antiscamlink", "nophising"], "category": "group", "description": "Deteksi konten phising di grup", "usage": ".antiphising <on/off/metode> [kick/remove]", "example": ".antiphising on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": true, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antiphising": "antiphising", "rimuru-antiphising": "antiphising", "rimuru-antiphishing": "antiphishing", "rimuru-antiscamlink": "antiscamlink", "rimuru-nophising": "nophising", "antiphishing": "antiphishing", "antiscamlink": "antiscamlink", "nophising": "nophising"}
export default handler
