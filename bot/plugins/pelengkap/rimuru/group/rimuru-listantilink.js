/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/listantilink.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "listantilink", "category": "group", "aliasMap": {"rimuru-group-listantilink": "listantilink", "rimuru-listantilink": "listantilink", "rimuru-antilinklist": "antilinklist", "rimuru-cekantilink": "cekantilink", "listantilink": "listantilink", "antilinklist": "antilinklist", "cekantilink": "cekantilink"}, "description": "Melihat daftar link yang diblokir", "usage": ".listantilink", "example": ".listantilink", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/listantilink.js", metadata, m, extra)
handler.help = ["rimuru-group-listantilink"]
handler.command = ["rimuru-group-listantilink", "rimuru-listantilink", "rimuru-antilinklist", "rimuru-cekantilink", "listantilink", "antilinklist", "cekantilink"]
handler.tags = ["group"]
handler.description = "Melihat daftar link yang diblokir"
handler.importSource = "rimuru"
handler.importConfig = {"name": "listantilink", "alias": ["antilinklist", "cekantilink"], "category": "group", "description": "Melihat daftar link yang diblokir", "usage": ".listantilink", "example": ".listantilink", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-listantilink": "listantilink", "rimuru-listantilink": "listantilink", "rimuru-antilinklist": "antilinklist", "rimuru-cekantilink": "cekantilink", "listantilink": "listantilink", "antilinklist": "antilinklist", "cekantilink": "cekantilink"}
export default handler
