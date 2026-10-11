/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/fakenotifwa.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakenotifwa", "category": "maker", "aliasMap": {"rimuru-maker-fakenotifwa": "fakenotifwa", "rimuru-fakenotifwa": "fakenotifwa", "rimuru-fakenotif": "fakenotif", "rimuru-notifwa": "notifwa", "fakenotifwa": "fakenotifwa", "fakenotif": "fakenotif", "notifwa": "notifwa"}, "description": "Membuat gambar tampilan fake notifikasi WhatsApp iOS via AlwaysCodex API", "usage": ".fakenotifwa nama|pesan|jam|tanggal (atau reply gambar untuk PP)", "example": ".fakenotifwa ZennzXD 💫|Haii sayangg udah makan belumm? 🥺|6.39|Senin, 6 Maret", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/fakenotifwa.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakenotifwa nama|pesan|jam|tanggal (atau reply gambar untuk PP)"]
handler.command = ["rimuru-maker-fakenotifwa", "rimuru-fakenotifwa", "rimuru-fakenotif", "rimuru-notifwa", "fakenotifwa", "fakenotif", "notifwa"]
handler.tags = ["maker"]
handler.description = "Membuat gambar tampilan fake notifikasi WhatsApp iOS via AlwaysCodex API"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakenotifwa", "alias": ["fakenotif", "notifwa"], "category": "maker", "description": "Membuat gambar tampilan fake notifikasi WhatsApp iOS via AlwaysCodex API", "usage": ".fakenotifwa nama|pesan|jam|tanggal (atau reply gambar untuk PP)", "example": ".fakenotifwa ZennzXD 💫|Haii sayangg udah makan belumm? 🥺|6.39|Senin, 6 Maret", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-fakenotifwa": "fakenotifwa", "rimuru-fakenotifwa": "fakenotifwa", "rimuru-fakenotif": "fakenotif", "rimuru-notifwa": "notifwa", "fakenotifwa": "fakenotifwa", "fakenotif": "fakenotif", "notifwa": "notifwa"}
export default handler
