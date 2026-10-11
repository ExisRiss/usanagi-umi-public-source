/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/antivirtex.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "antivirtex", "category": "group", "aliasMap": {"rimuru-group-antivirtex": "antivirtex", "rimuru-antivirtex": "antivirtex", "rimuru-antivirtexgc": "antivirtexgc", "rimuru-antivtxt": "antivtxt", "rimuru-antitxtv": "antitxtv", "antivirtexgc": "antivirtexgc", "antivtxt": "antivtxt", "antitxtv": "antitxtv"}, "description": "Hapus otomatis pesan yang mengandung karakter aneh/virtex di grup", "usage": ".antivirtex on/off", "example": ".antivirtex on", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/antivirtex.js", metadata, m, extra)
handler.help = ["rimuru-group-antivirtex on/off"]
handler.command = ["rimuru-group-antivirtex", "rimuru-antivirtex", "rimuru-antivirtexgc", "rimuru-antivtxt", "rimuru-antitxtv", "antivirtexgc", "antivtxt", "antitxtv"]
handler.tags = ["group"]
handler.description = "Hapus otomatis pesan yang mengandung karakter aneh/virtex di grup"
handler.importSource = "rimuru"
handler.importConfig = {"name": "antivirtex", "alias": ["antivirtexgc", "antivtxt", "antitxtv"], "category": "group", "description": "Hapus otomatis pesan yang mengandung karakter aneh/virtex di grup", "usage": ".antivirtex on/off", "example": ".antivirtex on", "isAdmin": true, "isGroup": true, "cooldown": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-antivirtex": "antivirtex", "rimuru-antivirtex": "antivirtex", "rimuru-antivirtexgc": "antivirtexgc", "rimuru-antivtxt": "antivtxt", "rimuru-antitxtv": "antitxtv", "antivirtexgc": "antivirtexgc", "antivtxt": "antivtxt", "antitxtv": "antitxtv"}
export default handler
