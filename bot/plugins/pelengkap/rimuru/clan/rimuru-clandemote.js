/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clandemote.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clandemote", "category": "clan", "aliasMap": {"rimuru-clan-clandemote": "clandemote", "rimuru-clandemote": "clandemote", "rimuru-demoteclan": "demoteclan", "rimuru-removerole": "removerole", "clandemote": "clandemote", "demoteclan": "demoteclan", "removerole": "removerole"}, "description": "Turunkan jabatan member", "usage": ".clandemote @user", "example": ".clandemote @user", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clandemote.js", metadata, m, extra)
handler.help = ["rimuru-clan-clandemote @user"]
handler.command = ["rimuru-clan-clandemote", "rimuru-clandemote", "rimuru-demoteclan", "rimuru-removerole", "clandemote", "demoteclan", "removerole"]
handler.tags = ["clan"]
handler.description = "Turunkan jabatan member"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clandemote", "alias": ["demoteclan", "removerole"], "category": "clan", "description": "Turunkan jabatan member", "usage": ".clandemote @user", "example": ".clandemote @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clandemote": "clandemote", "rimuru-clandemote": "clandemote", "rimuru-demoteclan": "demoteclan", "rimuru-removerole": "removerole", "clandemote": "clandemote", "demoteclan": "demoteclan", "removerole": "removerole"}
export default handler
