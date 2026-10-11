/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/fun/wa-canvas.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "wa-canvas", "category": "fun", "aliasMap": {"rimuru-fun-wa-canvas": "wa-canvas", "rimuru-wa-canvas": "wa-canvas", "rimuru-fakewaprofile": "fakewaprofile", "wa-canvas": "wa-canvas", "fakewaprofile": "fakewaprofile"}, "description": "Buat fake WhatsApp profile card", "usage": ".wa-canvas <nama> | <nomor> | [status]", "example": ".wa-canvas John Doe | 6281234567890 | Available", "cooldown": 15, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/fun/wa-canvas.js", metadata, m, extra)
handler.help = ["rimuru-fun-wa-canvas <nama> | <nomor> | [status]"]
handler.command = ["rimuru-fun-wa-canvas", "rimuru-wa-canvas", "rimuru-fakewaprofile", "wa-canvas", "fakewaprofile"]
handler.tags = ["fun"]
handler.description = "Buat fake WhatsApp profile card"
handler.importSource = "rimuru"
handler.importConfig = {"name": "wa-canvas", "alias": ["fakewaprofile"], "category": "fun", "description": "Buat fake WhatsApp profile card", "usage": ".wa-canvas <nama> | <nomor> | [status]", "example": ".wa-canvas John Doe | 6281234567890 | Available", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-fun-wa-canvas": "wa-canvas", "rimuru-wa-canvas": "wa-canvas", "rimuru-fakewaprofile": "fakewaprofile", "wa-canvas": "wa-canvas", "fakewaprofile": "fakewaprofile"}
export default handler
