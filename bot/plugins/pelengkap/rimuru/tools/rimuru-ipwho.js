/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/ipwho.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ipwho", "category": "tools", "aliasMap": {"rimuru-tools-ipwho": "ipwho", "rimuru-ipwho": "ipwho", "rimuru-ip": "ip", "rimuru-iplookup": "iplookup", "rimuru-ipinfo": "ipinfo", "ipwho": "ipwho", "ip": "ip", "iplookup": "iplookup", "ipinfo": "ipinfo"}, "description": "Lookup informasi IP address", "usage": ".ipwho <ip>", "example": ".ipwho 8.8.8.8", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/ipwho.js", metadata, m, extra)
handler.help = ["rimuru-tools-ipwho <ip>"]
handler.command = ["rimuru-tools-ipwho", "rimuru-ipwho", "rimuru-ip", "rimuru-iplookup", "rimuru-ipinfo", "ipwho", "ip", "iplookup", "ipinfo"]
handler.tags = ["tools"]
handler.description = "Lookup informasi IP address"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ipwho", "alias": ["ip", "iplookup", "ipinfo"], "category": "tools", "description": "Lookup informasi IP address", "usage": ".ipwho <ip>", "example": ".ipwho 8.8.8.8", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-ipwho": "ipwho", "rimuru-ipwho": "ipwho", "rimuru-ip": "ip", "rimuru-iplookup": "iplookup", "rimuru-ipinfo": "ipinfo", "ipwho": "ipwho", "ip": "ip", "iplookup": "iplookup", "ipinfo": "ipinfo"}
export default handler
