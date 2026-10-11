/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/bratgura.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bratgura", "category": "sticker", "aliasMap": {"rimuru-sticker-bratgura": "bratgura", "rimuru-bratgura": "bratgura", "rimuru-bratanimegura": "bratanimegura", "rimuru-bratganime": "bratganime", "bratgura": "bratgura", "bratanimegura": "bratanimegura", "bratganime": "bratganime"}, "description": "Membuat sticker anime chibi dengan teks brat style", "usage": ".bratanime4 <text>", "example": ".bratanime4 Besok cenin", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/bratgura.js", metadata, m, extra)
handler.help = ["rimuru-sticker-bratgura <text>"]
handler.command = ["rimuru-sticker-bratgura", "rimuru-bratgura", "rimuru-bratanimegura", "rimuru-bratganime", "bratgura", "bratanimegura", "bratganime"]
handler.tags = ["sticker"]
handler.description = "Membuat sticker anime chibi dengan teks brat style"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bratgura", "alias": ["bratanimegura", "bratgura", "bratganime"], "category": "sticker", "description": "Membuat sticker anime chibi dengan teks brat style", "usage": ".bratanime4 <text>", "example": ".bratanime4 Besok cenin", "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-bratgura": "bratgura", "rimuru-bratgura": "bratgura", "rimuru-bratanimegura": "bratanimegura", "rimuru-bratganime": "bratganime", "bratgura": "bratgura", "bratanimegura": "bratanimegura", "bratganime": "bratganime"}
export default handler
