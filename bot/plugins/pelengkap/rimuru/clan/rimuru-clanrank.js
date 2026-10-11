/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanrank.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanrank", "category": "clan", "aliasMap": {"rimuru-clan-clanrank": "clanrank", "rimuru-clanrank": "clanrank", "rimuru-rankclan": "rankclan", "rimuru-peringkatclan": "peringkatclan", "clanrank": "clanrank", "rankclan": "rankclan", "peringkatclan": "peringkatclan"}, "description": "Lihat peringkat clan kamu", "usage": ".clanrank", "example": ".clanrank", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanrank.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanrank"]
handler.command = ["rimuru-clan-clanrank", "rimuru-clanrank", "rimuru-rankclan", "rimuru-peringkatclan", "clanrank", "rankclan", "peringkatclan"]
handler.tags = ["clan"]
handler.description = "Lihat peringkat clan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanrank", "alias": ["rankclan", "peringkatclan"], "category": "clan", "description": "Lihat peringkat clan kamu", "usage": ".clanrank", "example": ".clanrank", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanrank": "clanrank", "rimuru-clanrank": "clanrank", "rimuru-rankclan": "rankclan", "rimuru-peringkatclan": "peringkatclan", "clanrank": "clanrank", "rankclan": "rankclan", "peringkatclan": "peringkatclan"}
export default handler
