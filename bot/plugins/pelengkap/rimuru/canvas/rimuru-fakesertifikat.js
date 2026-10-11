/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakesertifikat.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakesertifikat", "category": "canvas", "aliasMap": {"rimuru-canvas-fakesertifikat": "fakesertifikat", "rimuru-fakesertifikat": "fakesertifikat", "rimuru-sertifikatfake": "sertifikatfake", "rimuru-fakecert": "fakecert", "fakesertifikat": "fakesertifikat", "sertifikatfake": "sertifikatfake", "fakecert": "fakecert"}, "description": "Bikin fake sertifikat penghargaan (buat konten/gaguan doang)", "usage": ".fakesertifikat <nama> | <penghargaan>", "example": ".fakesertifikat Rimuru | Best Darling Award", "cooldown": 8, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakesertifikat.js", metadata, m, extra)
handler.help = ["rimuru-canvas-fakesertifikat <nama> | <penghargaan>"]
handler.command = ["rimuru-canvas-fakesertifikat", "rimuru-fakesertifikat", "rimuru-sertifikatfake", "rimuru-fakecert", "fakesertifikat", "sertifikatfake", "fakecert"]
handler.tags = ["canvas"]
handler.description = "Bikin fake sertifikat penghargaan (buat konten/gaguan doang)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakesertifikat", "alias": ["sertifikatfake", "fakecert"], "category": "canvas", "description": "Bikin fake sertifikat penghargaan (buat konten/gaguan doang)", "usage": ".fakesertifikat <nama> | <penghargaan>", "example": ".fakesertifikat Rimuru | Best Darling Award", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 8, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-fakesertifikat": "fakesertifikat", "rimuru-fakesertifikat": "fakesertifikat", "rimuru-sertifikatfake": "sertifikatfake", "rimuru-fakecert": "fakecert", "fakesertifikat": "fakesertifikat", "sertifikatfake": "sertifikatfake", "fakecert": "fakecert"}
export default handler
