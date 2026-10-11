/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/getpaste.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getpaste", "category": "tools", "aliasMap": {"rimuru-tools-getpaste": "getpaste", "rimuru-getpaste": "getpaste", "rimuru-getpb": "getpb", "getpaste": "getpaste", "pastebin": "pastebin", "getpb": "getpb"}, "description": "Ambil konten dari Pastebin", "usage": ".getpaste <link pastebin>", "example": ".getpaste https://pastebin.com/Gu8RZaqv", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/getpaste.js", metadata, m, extra)
handler.help = ["rimuru-tools-getpaste <link pastebin>"]
handler.command = ["rimuru-tools-getpaste", "rimuru-getpaste", "rimuru-getpb", "getpaste", "pastebin", "getpb"]
handler.tags = ["tools"]
handler.description = "Ambil konten dari Pastebin"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getpaste", "alias": ["pastebin", "getpb"], "category": "tools", "description": "Ambil konten dari Pastebin", "usage": ".getpaste <link pastebin>", "example": ".getpaste https://pastebin.com/Gu8RZaqv", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-getpaste": "getpaste", "rimuru-getpaste": "getpaste", "rimuru-getpb": "getpb", "getpaste": "getpaste", "pastebin": "pastebin", "getpb": "getpb"}
export default handler
