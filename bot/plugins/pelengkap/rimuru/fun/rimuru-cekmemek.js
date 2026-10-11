/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekmemek.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekmemek", "category": "fun", "aliasMap": {"rimuru-fun-cekmemek": "cekmemek", "rimuru-cekmemek": "cekmemek", "rimuru-cekmmk": "cekmmk", "cekmemek": "cekmemek", "cekmmk": "cekmmk"}, "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "cooldown": 3, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekmemek.js", metadata, m, extra)
handler.help = ["rimuru-fun-cekmemek"]
handler.command = ["rimuru-fun-cekmemek", "rimuru-cekmemek", "rimuru-cekmmk", "cekmemek", "cekmmk"]
handler.tags = ["fun"]
handler.description = "Imported from Rimuru MD V4.6"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekmemek", "alias": ["cekmmk"], "category": "fun", "description": "Imported from Rimuru MD V4.6", "usage": "", "example": "", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-cekmemek": "cekmemek", "rimuru-cekmemek": "cekmemek", "rimuru-cekmmk": "cekmmk", "cekmemek": "cekmemek", "cekmmk": "cekmmk"}
export default handler
