/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/islamic/puasa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "puasa", "category": "religi", "aliasMap": {"rimuru-religi-puasa": "puasa", "rimuru-puasa": "puasa", "rimuru-puasasunnah": "puasasunnah", "rimuru-puasasenin": "puasasenin", "rimuru-puasakamis": "puasakamis", "rimuru-puasadawud": "puasadawud", "puasa": "puasa", "puasasunnah": "puasasunnah", "puasasenin": "puasasenin", "puasakamis": "puasakamis", "puasadawud": "puasadawud"}, "description": "Panduan Puasa Sunnah Lengkap (Senin-Kamis, Dawud, Arafah, Asyura, dll)", "usage": ".puasa <nama puasa>", "example": ".puasa senin", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/islamic/puasa.js", metadata, m, extra)
handler.help = ["rimuru-religi-puasa <nama puasa>"]
handler.command = ["rimuru-religi-puasa", "rimuru-puasa", "rimuru-puasasunnah", "rimuru-puasasenin", "rimuru-puasakamis", "rimuru-puasadawud", "puasa", "puasasunnah", "puasasenin", "puasakamis", "puasadawud"]
handler.tags = ["religi"]
handler.description = "Panduan Puasa Sunnah Lengkap (Senin-Kamis, Dawud, Arafah, Asyura, dll)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "puasa", "alias": ["puasasunnah", "puasasenin", "puasakamis", "puasadawud"], "category": "religi", "description": "Panduan Puasa Sunnah Lengkap (Senin-Kamis, Dawud, Arafah, Asyura, dll)", "usage": ".puasa <nama puasa>", "example": ".puasa senin", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-religi-puasa": "puasa", "rimuru-puasa": "puasa", "rimuru-puasasunnah": "puasasunnah", "rimuru-puasasenin": "puasasenin", "rimuru-puasakamis": "puasakamis", "rimuru-puasadawud": "puasadawud", "puasa": "puasa", "puasasunnah": "puasasunnah", "puasasenin": "puasasenin", "puasakamis": "puasakamis", "puasadawud": "puasadawud"}
export default handler
