/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/facedetector.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "facedetector", "category": "tools", "aliasMap": {"rimuru-tools-facedetector": "facedetector", "rimuru-facedetector": "facedetector", "rimuru-facedetect": "facedetect", "rimuru-detectface": "detectface", "rimuru-deteksiwajah": "deteksiwajah", "facedetector": "facedetector", "facedetect": "facedetect", "detectface": "detectface", "deteksiwajah": "deteksiwajah"}, "description": "Mendeteksi wajah pada gambar", "usage": ".facedetector (reply gambar)", "example": ".facedetector", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/facedetector.js", metadata, m, extra)
handler.help = ["rimuru-tools-facedetector (reply gambar)"]
handler.command = ["rimuru-tools-facedetector", "rimuru-facedetector", "rimuru-facedetect", "rimuru-detectface", "rimuru-deteksiwajah", "facedetector", "facedetect", "detectface", "deteksiwajah"]
handler.tags = ["tools"]
handler.description = "Mendeteksi wajah pada gambar"
handler.importSource = "rimuru"
handler.importConfig = {"name": "facedetector", "alias": ["facedetect", "detectface", "deteksiwajah"], "category": "tools", "description": "Mendeteksi wajah pada gambar", "usage": ".facedetector (reply gambar)", "example": ".facedetector", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-facedetector": "facedetector", "rimuru-facedetector": "facedetector", "rimuru-facedetect": "facedetect", "rimuru-detectface": "detectface", "rimuru-deteksiwajah": "deteksiwajah", "facedetector": "facedetector", "facedetect": "facedetect", "detectface": "detectface", "deteksiwajah": "deteksiwajah"}
export default handler
