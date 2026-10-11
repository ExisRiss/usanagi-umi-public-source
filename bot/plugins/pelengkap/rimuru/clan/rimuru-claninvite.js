/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/claninvite.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "claninvite", "category": "clan", "aliasMap": {"rimuru-clan-claninvite": "claninvite", "rimuru-claninvite": "claninvite", "rimuru-inviteclan": "inviteclan", "claninvite": "claninvite", "inviteclan": "inviteclan"}, "description": "Invite & langsung tambahkan user ke clan", "usage": ".claninvite @user", "example": ".claninvite @user", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/claninvite.js", metadata, m, extra)
handler.help = ["rimuru-clan-claninvite @user"]
handler.command = ["rimuru-clan-claninvite", "rimuru-claninvite", "rimuru-inviteclan", "claninvite", "inviteclan"]
handler.tags = ["clan"]
handler.description = "Invite & langsung tambahkan user ke clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "claninvite", "alias": ["inviteclan"], "category": "clan", "description": "Invite & langsung tambahkan user ke clan", "usage": ".claninvite @user", "example": ".claninvite @user", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-claninvite": "claninvite", "rimuru-claninvite": "claninvite", "rimuru-inviteclan": "inviteclan", "claninvite": "claninvite", "inviteclan": "inviteclan"}
export default handler
