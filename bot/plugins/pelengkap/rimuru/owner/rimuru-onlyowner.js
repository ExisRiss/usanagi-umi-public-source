/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/onlyowner.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "onlyowner", "category": "owner", "aliasMap": {"rimuru-owner-onlyowner": "onlyowner", "rimuru-onlyowner": "onlyowner", "rimuru-onlyownerbot": "onlyownerbot", "rimuru-modeowner": "modeowner", "rimuru-owneronly": "owneronly", "onlyowner": "onlyowner", "onlyownerbot": "onlyownerbot", "modeowner": "modeowner", "owneronly": "owneronly"}, "description": "Atur mode hanya owner yang bisa pakai bot (owner utama + owner tambahan + creator)", "usage": ".onlyowner on/off", "example": ".onlyowner on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/onlyowner.js", metadata, m, extra)
handler.help = ["rimuru-owner-onlyowner on/off"]
handler.command = ["rimuru-owner-onlyowner", "rimuru-onlyowner", "rimuru-onlyownerbot", "rimuru-modeowner", "rimuru-owneronly", "onlyowner", "onlyownerbot", "modeowner", "owneronly"]
handler.tags = ["owner"]
handler.description = "Atur mode hanya owner yang bisa pakai bot (owner utama + owner tambahan + creator)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "onlyowner", "alias": ["onlyownerbot", "modeowner", "owneronly"], "category": "owner", "description": "Atur mode hanya owner yang bisa pakai bot (owner utama + owner tambahan + creator)", "usage": ".onlyowner on/off", "example": ".onlyowner on", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-onlyowner": "onlyowner", "rimuru-onlyowner": "onlyowner", "rimuru-onlyownerbot": "onlyownerbot", "rimuru-modeowner": "modeowner", "rimuru-owneronly": "owneronly", "onlyowner": "onlyowner", "onlyownerbot": "onlyownerbot", "modeowner": "modeowner", "owneronly": "owneronly"}
export default handler
