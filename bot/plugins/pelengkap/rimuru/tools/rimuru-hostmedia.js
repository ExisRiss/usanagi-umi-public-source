/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/hostmedia.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "hostmedia", "category": "tools", "aliasMap": {"rimuru-tools-hostmedia": "hostmedia", "rimuru-hostmedia": "hostmedia", "rimuru-serverhostmedia": "serverhostmedia", "rimuru-hostmed": "hostmed", "hostmedia": "hostmedia", "serverhostmedia": "serverhostmedia", "hostmed": "hostmed"}, "description": "Nampilin daftar server host media beserta batas maksimalnya", "usage": "hostmedia", "example": "hostmedia", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/hostmedia.js", metadata, m, extra)
handler.help = ["rimuru-tools-hostmedia"]
handler.command = ["rimuru-tools-hostmedia", "rimuru-hostmedia", "rimuru-serverhostmedia", "rimuru-hostmed", "hostmedia", "serverhostmedia", "hostmed"]
handler.tags = ["tools"]
handler.description = "Nampilin daftar server host media beserta batas maksimalnya"
handler.importSource = "rimuru"
handler.importConfig = {"name": "hostmedia", "alias": ["serverhostmedia", "hostmedia", "hostmed"], "category": "tools", "description": "Nampilin daftar server host media beserta batas maksimalnya", "usage": "hostmedia", "example": "hostmedia", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-tools-hostmedia": "hostmedia", "rimuru-hostmedia": "hostmedia", "rimuru-serverhostmedia": "serverhostmedia", "rimuru-hostmed": "hostmed", "hostmedia": "hostmedia", "serverhostmedia": "serverhostmedia", "hostmed": "hostmed"}
export default handler
