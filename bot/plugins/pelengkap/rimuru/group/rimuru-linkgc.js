/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/linkgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "linkgc", "category": "group", "aliasMap": {"rimuru-group-linkgc": "linkgc", "rimuru-linkgc": "linkgc", "rimuru-linkgrup": "linkgrup", "rimuru-getlink": "getlink", "rimuru-gclink": "gclink", "getlink": "getlink", "gclink": "gclink"}, "description": "Dapatkan link invite grup", "usage": ".linkgc", "example": ".linkgc", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/linkgc.js", metadata, m, extra)
handler.help = ["rimuru-group-linkgc"]
handler.command = ["rimuru-group-linkgc", "rimuru-linkgc", "rimuru-linkgrup", "rimuru-getlink", "rimuru-gclink", "getlink", "gclink"]
handler.tags = ["group"]
handler.description = "Dapatkan link invite grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "linkgc", "alias": ["linkgrup", "getlink", "gclink"], "category": "group", "description": "Dapatkan link invite grup", "usage": ".linkgc", "example": ".linkgc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-linkgc": "linkgc", "rimuru-linkgc": "linkgc", "rimuru-linkgrup": "linkgrup", "rimuru-getlink": "getlink", "rimuru-gclink": "gclink", "getlink": "getlink", "gclink": "gclink"}
export default handler
