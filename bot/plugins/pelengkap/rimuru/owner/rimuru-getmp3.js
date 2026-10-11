/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/getmp3.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "getmp3", "category": "owner", "aliasMap": {"rimuru-owner-getmp3": "getmp3", "rimuru-getmp3": "getmp3", "rimuru-getaudio": "getaudio", "rimuru-ambilmp3": "ambilmp3", "rimuru-ambilaudio": "ambilaudio", "getmp3": "getmp3", "getaudio": "getaudio", "ambilmp3": "ambilmp3", "ambilaudio": "ambilaudio"}, "description": "Ambil file MP3/Audio dari folder assets/audio", "usage": ".getmp3 <nama_file.mp3>", "example": ".getmp3 zerotwo.mp3", "cooldown": 3, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/getmp3.js", metadata, m, extra)
handler.help = ["rimuru-owner-getmp3 <nama_file.mp3>"]
handler.command = ["rimuru-owner-getmp3", "rimuru-getmp3", "rimuru-getaudio", "rimuru-ambilmp3", "rimuru-ambilaudio", "getmp3", "getaudio", "ambilmp3", "ambilaudio"]
handler.tags = ["owner"]
handler.description = "Ambil file MP3/Audio dari folder assets/audio"
handler.importSource = "rimuru"
handler.importConfig = {"name": "getmp3", "alias": ["getaudio", "ambilmp3", "ambilaudio"], "category": "owner", "description": "Ambil file MP3/Audio dari folder assets/audio", "usage": ".getmp3 <nama_file.mp3>", "example": ".getmp3 zerotwo.mp3", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 3, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-getmp3": "getmp3", "rimuru-getmp3": "getmp3", "rimuru-getaudio": "getaudio", "rimuru-ambilmp3": "ambilmp3", "rimuru-ambilaudio": "ambilaudio", "getmp3": "getmp3", "getaudio": "getaudio", "ambilmp3": "ambilmp3", "ambilaudio": "ambilaudio"}
export default handler
