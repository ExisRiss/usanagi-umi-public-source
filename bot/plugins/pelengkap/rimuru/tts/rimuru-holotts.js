/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tts/holotts.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "holotts", "category": "tts", "aliasMap": {"rimuru-tts-holotts": "holotts", "rimuru-holotts": "holotts", "rimuru-hololive": "hololive", "rimuru-hololivetts": "hololivetts", "rimuru-vnholo": "vnholo", "holotts": "holotts", "hololive": "hololive", "hololivetts": "hololivetts", "vnholo": "vnholo"}, "description": "TTS suara karakter Hololive via RVC Hugging Face", "usage": ".holotts <karakter>|<teks>", "example": ".holotts roboco|Hello Rimuru!", "cooldown": 15, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tts/holotts.js", metadata, m, extra)
handler.help = ["rimuru-tts-holotts <karakter>|<teks>"]
handler.command = ["rimuru-tts-holotts", "rimuru-holotts", "rimuru-hololive", "rimuru-hololivetts", "rimuru-vnholo", "holotts", "hololive", "hololivetts", "vnholo"]
handler.tags = ["tts"]
handler.description = "TTS suara karakter Hololive via RVC Hugging Face"
handler.importSource = "rimuru"
handler.importConfig = {"name": "holotts", "alias": ["hololive", "hololivetts", "vnholo"], "category": "tts", "description": "TTS suara karakter Hololive via RVC Hugging Face", "usage": ".holotts <karakter>|<teks>", "example": ".holotts roboco|Hello Rimuru!", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 15, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tts-holotts": "holotts", "rimuru-holotts": "holotts", "rimuru-hololive": "hololive", "rimuru-hololivetts": "hololivetts", "rimuru-vnholo": "vnholo", "holotts": "holotts", "hololive": "hololive", "hololivetts": "hololivetts", "vnholo": "vnholo"}
export default handler
