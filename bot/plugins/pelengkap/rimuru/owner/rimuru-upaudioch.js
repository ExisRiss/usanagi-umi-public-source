/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/upaudioch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "upaudioch", "category": "owner", "aliasMap": {"rimuru-owner-upaudioch": "upaudioch", "rimuru-upaudioch": "upaudioch", "rimuru-tovnsaluran": "tovnsaluran", "rimuru-uploadaudioch": "uploadaudioch", "rimuru-upaudiosaluran": "upaudiosaluran", "upaudioch": "upaudioch", "tovnsaluran": "tovnsaluran", "uploadaudioch": "uploadaudioch", "upaudiosaluran": "upaudiosaluran"}, "description": "Upload audio ke saluran (channel) WhatsApp", "usage": ".upaudioch (reply audio) <teks>", "example": ".upaudioch Pesan dari owner", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/upaudioch.js", metadata, m, extra)
handler.help = ["rimuru-owner-upaudioch (reply audio) <teks>"]
handler.command = ["rimuru-owner-upaudioch", "rimuru-upaudioch", "rimuru-tovnsaluran", "rimuru-uploadaudioch", "rimuru-upaudiosaluran", "upaudioch", "tovnsaluran", "uploadaudioch", "upaudiosaluran"]
handler.tags = ["owner"]
handler.description = "Upload audio ke saluran (channel) WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "upaudioch", "alias": ["tovnsaluran", "uploadaudioch", "upaudiosaluran"], "category": "owner", "description": "Upload audio ke saluran (channel) WhatsApp", "usage": ".upaudioch (reply audio) <teks>", "example": ".upaudioch Pesan dari owner", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-upaudioch": "upaudioch", "rimuru-upaudioch": "upaudioch", "rimuru-tovnsaluran": "tovnsaluran", "rimuru-uploadaudioch": "uploadaudioch", "rimuru-upaudiosaluran": "upaudiosaluran", "upaudioch": "upaudioch", "tovnsaluran": "tovnsaluran", "uploadaudioch": "uploadaudioch", "upaudiosaluran": "upaudiosaluran"}
export default handler
