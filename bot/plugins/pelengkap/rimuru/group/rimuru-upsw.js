/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/upsw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "upsw", "category": "group", "aliasMap": {"rimuru-group-upsw": "upsw", "rimuru-upsw": "upsw", "rimuru-upstory": "upstory", "rimuru-storygc": "storygc", "upsw": "upsw", "upstory": "upstory", "storygc": "storygc"}, "description": "Upload story untuk grup (border hijau)", "usage": ".upsw <teks> / reply media", "example": ".upsw Halo semua", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/upsw.js", metadata, m, extra)
handler.help = ["rimuru-group-upsw <teks> / reply media"]
handler.command = ["rimuru-group-upsw", "rimuru-upsw", "rimuru-upstory", "rimuru-storygc", "upsw", "upstory", "storygc"]
handler.tags = ["group"]
handler.description = "Upload story untuk grup (border hijau)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "upsw", "alias": ["upstory", "storygc"], "category": "group", "description": "Upload story untuk grup (border hijau)", "usage": ".upsw <teks> / reply media", "example": ".upsw Halo semua", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-upsw": "upsw", "rimuru-upsw": "upsw", "rimuru-upstory": "upstory", "rimuru-storygc": "storygc", "upsw": "upsw", "upstory": "upstory", "storygc": "storygc"}
export default handler
