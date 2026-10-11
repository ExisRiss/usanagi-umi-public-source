/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/quotephoto.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "quotephoto", "category": "maker", "aliasMap": {"rimuru-maker-quotephoto": "quotephoto", "rimuru-quotephoto": "quotephoto", "rimuru-qphoto": "qphoto", "rimuru-quotepic": "quotepic", "rimuru-katatutur": "katatutur", "rimuru-picturequote": "picturequote", "quotephoto": "quotephoto", "qphoto": "qphoto", "quotepic": "quotepic", "katatutur": "katatutur", "picturequote": "picturequote"}, "description": "Buat gambar kata-kata quote estetik di atas kertas", "usage": ".quotephoto teks|author", "example": ".quotephoto Jangan ragu untuk memulai hal baru|Geto", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/quotephoto.js", metadata, m, extra)
handler.help = ["rimuru-maker-quotephoto teks|author"]
handler.command = ["rimuru-maker-quotephoto", "rimuru-quotephoto", "rimuru-qphoto", "rimuru-quotepic", "rimuru-katatutur", "rimuru-picturequote", "quotephoto", "qphoto", "quotepic", "katatutur", "picturequote"]
handler.tags = ["maker"]
handler.description = "Buat gambar kata-kata quote estetik di atas kertas"
handler.importSource = "rimuru"
handler.importConfig = {"name": "quotephoto", "alias": ["qphoto", "quotepic", "katatutur", "picturequote"], "category": "maker", "description": "Buat gambar kata-kata quote estetik di atas kertas", "usage": ".quotephoto teks|author", "example": ".quotephoto Jangan ragu untuk memulai hal baru|Geto", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-quotephoto": "quotephoto", "rimuru-quotephoto": "quotephoto", "rimuru-qphoto": "qphoto", "rimuru-quotepic": "quotepic", "rimuru-katatutur": "katatutur", "rimuru-picturequote": "picturequote", "quotephoto": "quotephoto", "qphoto": "qphoto", "quotepic": "quotepic", "katatutur": "katatutur", "picturequote": "picturequote"}
export default handler
