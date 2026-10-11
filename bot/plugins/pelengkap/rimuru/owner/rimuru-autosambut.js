/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autosambut.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autosambut", "category": "group", "aliasMap": {"rimuru-group-autosambut": "autosambut", "rimuru-autosambut": "autosambut", "rimuru-sambutowner": "sambutowner", "autosambut": "autosambut", "sambutowner": "sambutowner"}, "description": "Mengatur fitur sambutan otomatis saat owner muncul setelah lama idle", "usage": ".autosambut on/off/delay/add/del/list", "example": ".autosambut on", "cooldown": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autosambut.js", metadata, m, extra)
handler.help = ["rimuru-group-autosambut on/off/delay/add/del/list"]
handler.command = ["rimuru-group-autosambut", "rimuru-autosambut", "rimuru-sambutowner", "autosambut", "sambutowner"]
handler.tags = ["group"]
handler.description = "Mengatur fitur sambutan otomatis saat owner muncul setelah lama idle"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autosambut", "alias": ["sambutowner"], "category": "group", "description": "Mengatur fitur sambutan otomatis saat owner muncul setelah lama idle", "usage": ".autosambut on/off/delay/add/del/list", "example": ".autosambut on", "isOwner": true, "isGroup": true, "cooldown": 3, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-autosambut": "autosambut", "rimuru-autosambut": "autosambut", "rimuru-sambutowner": "sambutowner", "autosambut": "autosambut", "sambutowner": "sambutowner"}
export default handler
