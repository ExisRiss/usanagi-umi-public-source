/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addscraper.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addscraper", "category": "owner", "aliasMap": {"rimuru-owner-addscraper": "addscraper", "rimuru-addscraper": "addscraper", "rimuru-newscraper": "newscraper", "rimuru-createscraper": "createscraper", "rimuru-tambahscraper": "tambahscraper", "addscraper": "addscraper", "newscraper": "newscraper", "createscraper": "createscraper", "tambahscraper": "tambahscraper"}, "description": "Menambahkan scraper baru ke src/scraper/ (Owner only)", "usage": ".addscraper <nama>", "example": ".addscraper konchan\n\nReply pesan yang berisi kode scraper", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addscraper.js", metadata, m, extra)
handler.help = ["rimuru-owner-addscraper <nama>"]
handler.command = ["rimuru-owner-addscraper", "rimuru-addscraper", "rimuru-newscraper", "rimuru-createscraper", "rimuru-tambahscraper", "addscraper", "newscraper", "createscraper", "tambahscraper"]
handler.tags = ["owner"]
handler.description = "Menambahkan scraper baru ke src/scraper/ (Owner only)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addscraper", "alias": ["addscraper", "newscraper", "createscraper", "tambahscraper"], "category": "owner", "description": "Menambahkan scraper baru ke src/scraper/ (Owner only)", "usage": ".addscraper <nama>", "example": ".addscraper konchan\n\nReply pesan yang berisi kode scraper", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": true, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = true
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addscraper": "addscraper", "rimuru-addscraper": "addscraper", "rimuru-newscraper": "newscraper", "rimuru-createscraper": "createscraper", "rimuru-tambahscraper": "tambahscraper", "addscraper": "addscraper", "newscraper": "newscraper", "createscraper": "createscraper", "tambahscraper": "tambahscraper"}
export default handler
