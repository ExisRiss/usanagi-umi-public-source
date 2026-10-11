/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanrename.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanrename", "category": "clan", "aliasMap": {"rimuru-clan-clanrename": "clanrename", "rimuru-clanrename": "clanrename", "rimuru-renameclan": "renameclan", "rimuru-guildrename": "guildrename", "clanrename": "clanrename", "renameclan": "renameclan", "guildrename": "guildrename"}, "description": "Ganti nama clan", "usage": ".clanrename <nama baru>", "example": ".clanrename DarkPhoenix", "cooldown": 30, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanrename.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanrename <nama baru>"]
handler.command = ["rimuru-clan-clanrename", "rimuru-clanrename", "rimuru-renameclan", "rimuru-guildrename", "clanrename", "renameclan", "guildrename"]
handler.tags = ["clan"]
handler.description = "Ganti nama clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanrename", "alias": ["renameclan", "guildrename"], "category": "clan", "description": "Ganti nama clan", "usage": ".clanrename <nama baru>", "example": ".clanrename DarkPhoenix", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 30, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanrename": "clanrename", "rimuru-clanrename": "clanrename", "rimuru-renameclan": "renameclan", "rimuru-guildrename": "guildrename", "clanrename": "clanrename", "renameclan": "renameclan", "guildrename": "guildrename"}
export default handler
