/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/delantilink.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delantilink", "category": "group", "aliasMap": {"rimuru-group-delantilink": "delantilink", "rimuru-delantilink": "delantilink", "rimuru-delalink": "delalink", "rimuru-delblocklink": "delblocklink", "rimuru-remantilink": "remantilink", "delantilink": "delantilink", "delalink": "delalink", "delblocklink": "delblocklink", "remantilink": "remantilink"}, "description": "Menghapus link dari daftar antilink", "usage": ".delantilink <domain/pattern>", "example": ".delantilink tiktok.com", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/delantilink.js", metadata, m, extra)
handler.help = ["rimuru-group-delantilink <domain/pattern>"]
handler.command = ["rimuru-group-delantilink", "rimuru-delantilink", "rimuru-delalink", "rimuru-delblocklink", "rimuru-remantilink", "delantilink", "delalink", "delblocklink", "remantilink"]
handler.tags = ["group"]
handler.description = "Menghapus link dari daftar antilink"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delantilink", "alias": ["delalink", "delblocklink", "remantilink"], "category": "group", "description": "Menghapus link dari daftar antilink", "usage": ".delantilink <domain/pattern>", "example": ".delantilink tiktok.com", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-delantilink": "delantilink", "rimuru-delantilink": "delantilink", "rimuru-delalink": "delalink", "rimuru-delblocklink": "delblocklink", "rimuru-remantilink": "remantilink", "delantilink": "delantilink", "delalink": "delalink", "delblocklink": "delblocklink", "remantilink": "remantilink"}
export default handler
