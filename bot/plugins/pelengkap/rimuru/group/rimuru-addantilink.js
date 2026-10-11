/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/addantilink.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addantilink", "category": "group", "aliasMap": {"rimuru-group-addantilink": "addantilink", "rimuru-addantilink": "addantilink", "rimuru-addalink": "addalink", "rimuru-addblocklink": "addblocklink", "addantilink": "addantilink", "addalink": "addalink", "addblocklink": "addblocklink"}, "description": "Menambah link ke daftar antilink", "usage": ".addantilink <domain/pattern>", "example": ".addantilink tiktok.com", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/addantilink.js", metadata, m, extra)
handler.help = ["rimuru-group-addantilink <domain/pattern>"]
handler.command = ["rimuru-group-addantilink", "rimuru-addantilink", "rimuru-addalink", "rimuru-addblocklink", "addantilink", "addalink", "addblocklink"]
handler.tags = ["group"]
handler.description = "Menambah link ke daftar antilink"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addantilink", "alias": ["addalink", "addblocklink"], "category": "group", "description": "Menambah link ke daftar antilink", "usage": ".addantilink <domain/pattern>", "example": ".addantilink tiktok.com", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-addantilink": "addantilink", "rimuru-addantilink": "addantilink", "rimuru-addalink": "addalink", "rimuru-addblocklink": "addblocklink", "addantilink": "addantilink", "addalink": "addalink", "addblocklink": "addblocklink"}
export default handler
