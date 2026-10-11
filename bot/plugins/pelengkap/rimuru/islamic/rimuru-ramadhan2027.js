/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/ramadhan2027.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ramadhan2027", "category": "religi", "aliasMap": {"rimuru-religi-ramadhan2027": "ramadhan2027", "rimuru-ramadhan2027": "ramadhan2027", "rimuru-ramadan2027": "ramadan2027", "rimuru-hitungramadhan2027": "hitungramadhan2027", "ramadhan2027": "ramadhan2027", "ramadan2027": "ramadan2027", "hitungramadhan2027": "hitungramadhan2027"}, "description": "Menghitung mundur waktu menuju bulan suci Ramadhan 2027 ala Zero Two", "usage": ".ramadhan2027", "example": ".ramadhan2027"}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/ramadhan2027.js", metadata, m, extra)
handler.help = ["rimuru-religi-ramadhan2027"]
handler.command = ["rimuru-religi-ramadhan2027", "rimuru-ramadhan2027", "rimuru-ramadan2027", "rimuru-hitungramadhan2027", "ramadhan2027", "ramadan2027", "hitungramadhan2027"]
handler.tags = ["religi"]
handler.description = "Menghitung mundur waktu menuju bulan suci Ramadhan 2027 ala Zero Two"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ramadhan2027", "primaryName": "ramadhan2027", "command": "ramadhan2027", "alias": ["ramadan2027", "hitungramadhan2027"], "category": "religi", "description": "Menghitung mundur waktu menuju bulan suci Ramadhan 2027 ala Zero Two", "usage": ".ramadhan2027", "example": ".ramadhan2027", "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-ramadhan2027": "ramadhan2027", "rimuru-ramadhan2027": "ramadhan2027", "rimuru-ramadan2027": "ramadan2027", "rimuru-hitungramadhan2027": "hitungramadhan2027", "ramadhan2027": "ramadhan2027", "ramadan2027": "ramadan2027", "hitungramadhan2027": "hitungramadhan2027"}
export default handler
