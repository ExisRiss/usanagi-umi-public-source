/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/resetlinkgc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "resetlinkgc", "category": "group", "aliasMap": {"rimuru-group-resetlinkgc": "resetlinkgc", "rimuru-resetlinkgc": "resetlinkgc", "rimuru-resetlink": "resetlink", "rimuru-revokelink": "revokelink", "rimuru-newlink": "newlink", "resetlinkgc": "resetlinkgc", "resetlink": "resetlink", "revokelink": "revokelink", "newlink": "newlink"}, "description": "Reset link invite grup", "usage": ".resetlinkgc", "example": ".resetlinkgc", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/resetlinkgc.js", metadata, m, extra)
handler.help = ["rimuru-group-resetlinkgc"]
handler.command = ["rimuru-group-resetlinkgc", "rimuru-resetlinkgc", "rimuru-resetlink", "rimuru-revokelink", "rimuru-newlink", "resetlinkgc", "resetlink", "revokelink", "newlink"]
handler.tags = ["group"]
handler.description = "Reset link invite grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "resetlinkgc", "alias": ["resetlink", "revokelink", "newlink"], "category": "group", "description": "Reset link invite grup", "usage": ".resetlinkgc", "example": ".resetlinkgc", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true, "isAdmin": true, "isBotAdmin": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-resetlinkgc": "resetlinkgc", "rimuru-resetlinkgc": "resetlinkgc", "rimuru-resetlink": "resetlink", "rimuru-revokelink": "revokelink", "rimuru-newlink": "newlink", "resetlinkgc": "resetlinkgc", "resetlink": "resetlink", "revokelink": "revokelink", "newlink": "newlink"}
export default handler
