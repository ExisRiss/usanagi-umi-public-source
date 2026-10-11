/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakeidcard.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeidcard", "category": "canvas", "aliasMap": {"rimuru-canvas-fakeidcard": "fakeidcard", "rimuru-fakeidcard": "fakeidcard", "rimuru-idcardfake": "idcardfake", "rimuru-faketanda": "faketanda", "fakeidcard": "fakeidcard", "idcardfake": "idcardfake", "faketanda": "faketanda"}, "description": "Bikin fake ID Card (buat konten/gaguan doang)", "usage": ".fakeidcard <nama> | <jabatan>", "example": ".fakeidcard Rimuru | CEO", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakeidcard.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakeidcard <nama> | <jabatan>"]
handler.command = ["rimuru-canvas-fakeidcard", "rimuru-fakeidcard", "rimuru-idcardfake", "rimuru-faketanda", "fakeidcard", "idcardfake", "faketanda"]
handler.tags = ["canvas"]
handler.description = "Bikin fake ID Card (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeidcard", "alias": ["idcardfake", "faketanda", "faketanda pengenal"], "category": "canvas", "description": "Bikin fake ID Card (buat konten/gaguan doang)", "usage": ".fakeidcard <nama> | <jabatan>", "example": ".fakeidcard Rimuru | CEO", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakeidcard": "fakeidcard", "rimuru-fakeidcard": "fakeidcard", "rimuru-idcardfake": "idcardfake", "rimuru-faketanda": "faketanda", "fakeidcard": "fakeidcard", "idcardfake": "idcardfake", "faketanda": "faketanda"}
export default handler
