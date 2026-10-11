/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/spongebob.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "spongebob", "category": "canvas", "aliasMap": {"rimuru-canvas-spongebob": "spongebob", "rimuru-spongebob": "spongebob", "spongebob": "spongebob"}, "description": "Buat meme SpongeBob", "usage": ".spongebob <teks>", "example": ".spongebob Wahai kerang ajaib", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/spongebob.js", metadata, m, extra)
handler.help = ["rimuru-canvas-spongebob <teks>"]
handler.command = ["rimuru-canvas-spongebob", "rimuru-spongebob", "spongebob"]
handler.tags = ["canvas"]
handler.description = "Buat meme SpongeBob"
handler.importSource = "rimuru"
handler.importConfig = {"name": "spongebob", "alias": ["spongebob"], "category": "canvas", "description": "Buat meme SpongeBob", "usage": ".spongebob <teks>", "example": ".spongebob Wahai kerang ajaib", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-canvas-spongebob": "spongebob", "rimuru-spongebob": "spongebob", "spongebob": "spongebob"}
export default handler
