/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clancreate.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clancreate", "category": "clan", "aliasMap": {"rimuru-clan-clancreate": "clancreate", "rimuru-clancreate": "clancreate", "rimuru-createclan": "createclan", "rimuru-guildcreate": "guildcreate", "clancreate": "clancreate", "createclan": "createclan", "guildcreate": "guildcreate"}, "description": "Buat clan baru", "usage": ".clancreate <nama>", "example": ".clancreate DragonSlayer", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clancreate.js", metadata, m, extra)
handler.help = ["rimuru-clan-clancreate <nama>"]
handler.command = ["rimuru-clan-clancreate", "rimuru-clancreate", "rimuru-createclan", "rimuru-guildcreate", "clancreate", "createclan", "guildcreate"]
handler.tags = ["clan"]
handler.description = "Buat clan baru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clancreate", "alias": ["createclan", "guildcreate"], "category": "clan", "description": "Buat clan baru", "usage": ".clancreate <nama>", "example": ".clancreate DragonSlayer", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clancreate": "clancreate", "rimuru-clancreate": "clancreate", "rimuru-createclan": "createclan", "rimuru-guildcreate": "guildcreate", "clancreate": "clancreate", "createclan": "createclan", "guildcreate": "guildcreate"}
export default handler
