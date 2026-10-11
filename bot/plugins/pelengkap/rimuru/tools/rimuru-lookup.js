/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/lookup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "lookup", "category": "tools", "aliasMap": {"rimuru-tools-lookup": "lookup", "rimuru-lookup": "lookup", "rimuru-dnslookup": "dnslookup", "rimuru-dns": "dns", "rimuru-whois": "whois", "lookup": "lookup", "dnslookup": "dnslookup", "dns": "dns", "whois": "whois"}, "description": "DNS Lookup untuk domain", "usage": ".lookup <domain>", "example": ".lookup google.com", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/lookup.js", metadata, m, extra)
handler.help = ["rimuru-tools-lookup <domain>"]
handler.command = ["rimuru-tools-lookup", "rimuru-lookup", "rimuru-dnslookup", "rimuru-dns", "rimuru-whois", "lookup", "dnslookup", "dns", "whois"]
handler.tags = ["tools"]
handler.description = "DNS Lookup untuk domain"
handler.importSource = "rimuru"
handler.importConfig = {"name": "lookup", "alias": ["dnslookup", "dns", "whois"], "category": "tools", "description": "DNS Lookup untuk domain", "usage": ".lookup <domain>", "example": ".lookup google.com", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-lookup": "lookup", "rimuru-lookup": "lookup", "rimuru-dnslookup": "dnslookup", "rimuru-dns": "dns", "rimuru-whois": "whois", "lookup": "lookup", "dnslookup": "dnslookup", "dns": "dns", "whois": "whois"}
export default handler
