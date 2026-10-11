/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/gencard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "gencard", "category": "tools", "aliasMap": {"rimuru-tools-gencard": "gencard", "rimuru-gencard": "gencard", "rimuru-ccgen": "ccgen", "rimuru-cardgen": "cardgen", "rimuru-fakecc": "fakecc", "gencard": "gencard", "ccgen": "ccgen", "cardgen": "cardgen", "fakecc": "fakecc"}, "description": "Membuat data dummy nomor kartu kredit (Visa, MasterCard, JCB, Amex)", "usage": ".gencard Tipe | Jumlah", "example": ".gencard Visa | 5", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/gencard.js", metadata, m, extra)
handler.help = ["rimuru-tools-gencard Tipe | Jumlah"]
handler.command = ["rimuru-tools-gencard", "rimuru-gencard", "rimuru-ccgen", "rimuru-cardgen", "rimuru-fakecc", "gencard", "ccgen", "cardgen", "fakecc"]
handler.tags = ["tools"]
handler.description = "Membuat data dummy nomor kartu kredit (Visa, MasterCard, JCB, Amex)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "gencard", "alias": ["ccgen", "cardgen", "fakecc"], "category": "tools", "description": "Membuat data dummy nomor kartu kredit (Visa, MasterCard, JCB, Amex)", "usage": ".gencard Tipe | Jumlah", "example": ".gencard Visa | 5", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-gencard": "gencard", "rimuru-gencard": "gencard", "rimuru-ccgen": "ccgen", "rimuru-cardgen": "cardgen", "rimuru-fakecc": "fakecc", "gencard": "gencard", "ccgen": "ccgen", "cardgen": "cardgen", "fakecc": "fakecc"}
export default handler
