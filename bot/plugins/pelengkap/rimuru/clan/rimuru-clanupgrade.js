/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/clan/clanupgrade.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "clanupgrade", "category": "clan", "aliasMap": {"rimuru-clan-clanupgrade": "clanupgrade", "rimuru-clanupgrade": "clanupgrade", "rimuru-upgradeclan": "upgradeclan", "rimuru-levelupclan": "levelupclan", "clanupgrade": "clanupgrade", "upgradeclan": "upgradeclan", "levelupclan": "levelupclan"}, "description": "Upgrade level clan menggunakan kas clan", "usage": ".clanupgrade", "example": ".clanupgrade", "cooldown": 60, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/clan/clanupgrade.js", metadata, m, extra)
handler.help = ["rimuru-clan-clanupgrade"]
handler.command = ["rimuru-clan-clanupgrade", "rimuru-clanupgrade", "rimuru-upgradeclan", "rimuru-levelupclan", "clanupgrade", "upgradeclan", "levelupclan"]
handler.tags = ["clan"]
handler.description = "Upgrade level clan menggunakan kas clan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "clanupgrade", "alias": ["upgradeclan", "levelupclan"], "category": "clan", "description": "Upgrade level clan menggunakan kas clan", "usage": ".clanupgrade", "example": ".clanupgrade", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 60, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-clan-clanupgrade": "clanupgrade", "rimuru-clanupgrade": "clanupgrade", "rimuru-upgradeclan": "upgradeclan", "rimuru-levelupclan": "levelupclan", "clanupgrade": "clanupgrade", "upgradeclan": "upgradeclan", "levelupclan": "levelupclan"}
export default handler
