/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceklapar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceklapar", "category": "cek", "aliasMap": {"rimuru-cek-ceklapar": "ceklapar", "rimuru-ceklapar": "ceklapar", "rimuru-lapar": "lapar", "rimuru-hungry": "hungry", "hungry": "hungry"}, "description": "Cek tingkat kelaparan kamu", "usage": ".ceklapar <nama>", "example": ".ceklapar Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceklapar.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceklapar <nama>"]
handler.command = ["rimuru-cek-ceklapar", "rimuru-ceklapar", "rimuru-lapar", "rimuru-hungry", "hungry"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kelaparan kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceklapar", "alias": ["lapar", "hungry"], "category": "cek", "description": "Cek tingkat kelaparan kamu", "usage": ".ceklapar <nama>", "example": ".ceklapar Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceklapar": "ceklapar", "rimuru-ceklapar": "ceklapar", "rimuru-lapar": "lapar", "rimuru-hungry": "hungry", "hungry": "hungry"}
export default handler
