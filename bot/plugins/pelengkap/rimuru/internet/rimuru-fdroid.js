/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/internet/fdroid.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fdroid", "category": "internet", "aliasMap": {"rimuru-internet-fdroid": "fdroid", "rimuru-fdroid": "fdroid", "rimuru-fdroidsearch": "fdroidsearch", "rimuru-fdroiddl": "fdroiddl", "rimuru-fdroidapp": "fdroidapp", "fdroid": "fdroid", "fdroidsearch": "fdroidsearch", "fdroiddl": "fdroiddl", "fdroidapp": "fdroidapp"}, "description": "Cari dan dapatkan link download aplikasi open-source dari F-Droid", "usage": ".fdroid <nama_aplikasi>", "example": ".fdroid termux", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/internet/fdroid.js", metadata, m, extra)
handler.help = ["rimuru-internet-fdroid <nama_aplikasi>"]
handler.command = ["rimuru-internet-fdroid", "rimuru-fdroid", "rimuru-fdroidsearch", "rimuru-fdroiddl", "rimuru-fdroidapp", "fdroid", "fdroidsearch", "fdroiddl", "fdroidapp"]
handler.tags = ["internet"]
handler.description = "Cari dan dapatkan link download aplikasi open-source dari F-Droid"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fdroid", "alias": ["fdroidsearch", "fdroiddl", "fdroidapp"], "category": "internet", "description": "Cari dan dapatkan link download aplikasi open-source dari F-Droid", "usage": ".fdroid <nama_aplikasi>", "example": ".fdroid termux", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-internet-fdroid": "fdroid", "rimuru-fdroid": "fdroid", "rimuru-fdroidsearch": "fdroidsearch", "rimuru-fdroiddl": "fdroiddl", "rimuru-fdroidapp": "fdroidapp", "fdroid": "fdroid", "fdroidsearch": "fdroidsearch", "fdroiddl": "fdroiddl", "fdroidapp": "fdroidapp"}
export default handler
