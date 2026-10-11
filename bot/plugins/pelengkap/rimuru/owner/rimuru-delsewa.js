/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/delsewa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "delsewa", "category": "owner", "aliasMap": {"rimuru-owner-delsewa": "delsewa", "rimuru-delsewa": "delsewa", "rimuru-sewadel": "sewadel", "rimuru-hapussewa": "hapussewa", "rimuru-removesewa": "removesewa", "delsewa": "delsewa", "sewadel": "sewadel", "hapussewa": "hapussewa", "removesewa": "removesewa"}, "description": "Hapus grup dari whitelist sewa", "usage": ".delsewa <link/id grup>", "example": ".delsewa https://chat.whatsapp.com/xxx", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/delsewa.js", metadata, m, extra)
handler.help = ["rimuru-owner-delsewa <link/id grup>"]
handler.command = ["rimuru-owner-delsewa", "rimuru-delsewa", "rimuru-sewadel", "rimuru-hapussewa", "rimuru-removesewa", "delsewa", "sewadel", "hapussewa", "removesewa"]
handler.tags = ["owner"]
handler.description = "Hapus grup dari whitelist sewa"
handler.importSource = "rimuru"
handler.importConfig = {"name": "delsewa", "alias": ["sewadel", "hapussewa", "removesewa"], "category": "owner", "description": "Hapus grup dari whitelist sewa", "usage": ".delsewa <link/id grup>", "example": ".delsewa https://chat.whatsapp.com/xxx", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-delsewa": "delsewa", "rimuru-delsewa": "delsewa", "rimuru-sewadel": "sewadel", "rimuru-hapussewa": "hapussewa", "rimuru-removesewa": "removesewa", "delsewa": "delsewa", "sewadel": "sewadel", "hapussewa": "hapussewa", "removesewa": "removesewa"}
export default handler
