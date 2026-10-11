/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/addmp3.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "addmp3", "category": "owner", "aliasMap": {"rimuru-owner-addmp3": "addmp3", "rimuru-addmp3": "addmp3", "rimuru-addaudio": "addaudio", "rimuru-tambahmp3": "tambahmp3", "rimuru-setmp3": "setmp3", "rimuru-addmusik": "addmusik", "addmp3": "addmp3", "addaudio": "addaudio", "tambahmp3": "tambahmp3", "setmp3": "setmp3", "addmusik": "addmusik"}, "description": "Tambah file MP3/Audio ke folder assets/audio", "usage": ".addmp3 <nama_file.mp3> (reply audio)", "example": ".addmp3 zerotwo.mp3", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/addmp3.js", metadata, m, extra)
handler.help = ["rimuru-owner-addmp3 <nama_file.mp3> (reply audio)"]
handler.command = ["rimuru-owner-addmp3", "rimuru-addmp3", "rimuru-addaudio", "rimuru-tambahmp3", "rimuru-setmp3", "rimuru-addmusik", "addmp3", "addaudio", "tambahmp3", "setmp3", "addmusik"]
handler.tags = ["owner"]
handler.description = "Tambah file MP3/Audio ke folder assets/audio"
handler.importSource = "rimuru"
handler.importConfig = {"name": "addmp3", "alias": ["addaudio", "tambahmp3", "setmp3", "addmusik"], "category": "owner", "description": "Tambah file MP3/Audio ke folder assets/audio", "usage": ".addmp3 <nama_file.mp3> (reply audio)", "example": ".addmp3 zerotwo.mp3", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-addmp3": "addmp3", "rimuru-addmp3": "addmp3", "rimuru-addaudio": "addaudio", "rimuru-tambahmp3": "tambahmp3", "rimuru-setmp3": "setmp3", "rimuru-addmusik": "addmusik", "addmp3": "addmp3", "addaudio": "addaudio", "tambahmp3": "tambahmp3", "setmp3": "setmp3", "addmusik": "addmusik"}
export default handler
