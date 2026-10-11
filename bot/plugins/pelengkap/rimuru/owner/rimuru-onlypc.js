/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/onlypc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "onlypc", "category": "owner", "aliasMap": {"rimuru-owner-onlypc": "onlypc", "rimuru-onlypc": "onlypc", "rimuru-onlyprivate": "onlyprivate", "rimuru-privateonly": "privateonly", "onlyprivate": "onlyprivate", "privateonly": "privateonly"}, "description": "Toggle mode bot hanya di private chat", "usage": ".onlypc on/off", "example": ".onlypc on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/onlypc.js", metadata, m, extra)
handler.help = ["rimuru-owner-onlypc on/off"]
handler.command = ["rimuru-owner-onlypc", "rimuru-onlypc", "rimuru-onlyprivate", "rimuru-privateonly", "onlyprivate", "privateonly"]
handler.tags = ["owner"]
handler.description = "Toggle mode bot hanya di private chat"
handler.importSource = "rimuru"
handler.importConfig = {"name": "onlypc", "alias": ["onlyprivate", "privateonly"], "category": "owner", "description": "Toggle mode bot hanya di private chat", "usage": ".onlypc on/off", "example": ".onlypc on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-onlypc": "onlypc", "rimuru-onlypc": "onlypc", "rimuru-onlyprivate": "onlyprivate", "rimuru-privateonly": "privateonly", "onlyprivate": "onlyprivate", "privateonly": "privateonly"}
export default handler
