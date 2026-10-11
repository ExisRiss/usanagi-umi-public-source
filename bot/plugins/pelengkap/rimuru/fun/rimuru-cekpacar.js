/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/cekpacar.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekpacar", "category": "fun", "aliasMap": {"rimuru-fun-cekpacar": "cekpacar", "rimuru-cekpacar": "cekpacar", "rimuru-pacar": "pacar", "rimuru-pasangan": "pasangan", "rimuru-gebetan": "gebetan", "pasangan": "pasangan", "gebetan": "gebetan"}, "description": "Cek status hubungan seseorang", "usage": ".cekpacar atau .cekpacar @tag", "example": ".cekpacar", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/cekpacar.js", metadata, m, extra)
handler.help = ["rimuru-fun-cekpacar atau .cekpacar @tag"]
handler.command = ["rimuru-fun-cekpacar", "rimuru-cekpacar", "rimuru-pacar", "rimuru-pasangan", "rimuru-gebetan", "pasangan", "gebetan"]
handler.tags = ["fun"]
handler.description = "Cek status hubungan seseorang"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekpacar", "alias": ["pacar", "pasangan", "gebetan"], "category": "fun", "description": "Cek status hubungan seseorang", "usage": ".cekpacar atau .cekpacar @tag", "example": ".cekpacar", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-fun-cekpacar": "cekpacar", "rimuru-cekpacar": "cekpacar", "rimuru-pacar": "pacar", "rimuru-pasangan": "pasangan", "rimuru-gebetan": "gebetan", "pasangan": "pasangan", "gebetan": "gebetan"}
export default handler
