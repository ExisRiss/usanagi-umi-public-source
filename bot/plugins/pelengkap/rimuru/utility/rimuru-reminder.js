/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/utility/reminder.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "remind", "category": "utility", "aliasMap": {"rimuru-utility-remind": "remind", "rimuru-remind": "remind", "rimuru-reminder": "reminder", "rimuru-ingatkan": "ingatkan", "remind": "remind", "reminder": "reminder", "ingatkan": "ingatkan"}, "description": "Membuat pengingat otomatis dengan durasi waktu tertentu", "usage": ".remind <waktu> <pesan>", "example": ".remind 30m Meeting dengan klien", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/utility/reminder.js", metadata, m, extra)
handler.help = ["rimuru-utility-remind <waktu> <pesan>"]
handler.command = ["rimuru-utility-remind", "rimuru-remind", "rimuru-reminder", "rimuru-ingatkan", "remind", "reminder", "ingatkan"]
handler.tags = ["utility"]
handler.description = "Membuat pengingat otomatis dengan durasi waktu tertentu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "remind", "alias": ["reminder", "ingatkan"], "category": "utility", "description": "Membuat pengingat otomatis dengan durasi waktu tertentu", "usage": ".remind <waktu> <pesan>", "example": ".remind 30m Meeting dengan klien", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-utility-remind": "remind", "rimuru-remind": "remind", "rimuru-reminder": "reminder", "rimuru-ingatkan": "ingatkan", "remind": "remind", "reminder": "reminder", "ingatkan": "ingatkan"}
export default handler
