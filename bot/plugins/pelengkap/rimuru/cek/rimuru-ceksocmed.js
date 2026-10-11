/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/ceksocmed.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ceksocmed", "category": "cek", "aliasMap": {"rimuru-cek-ceksocmed": "ceksocmed", "rimuru-ceksocmed": "ceksocmed", "rimuru-sosmed": "sosmed", "rimuru-medsos": "medsos", "sosmed": "sosmed", "medsos": "medsos"}, "description": "Cek tingkat kecanduan sosmed", "usage": ".ceksocmed <nama>", "example": ".ceksocmed Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/ceksocmed.js", metadata, m, extra)
handler.help = ["rimuru-cek-ceksocmed <nama>"]
handler.command = ["rimuru-cek-ceksocmed", "rimuru-ceksocmed", "rimuru-sosmed", "rimuru-medsos", "sosmed", "medsos"]
handler.tags = ["cek"]
handler.description = "Cek tingkat kecanduan sosmed"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ceksocmed", "alias": ["sosmed", "medsos"], "category": "cek", "description": "Cek tingkat kecanduan sosmed", "usage": ".ceksocmed <nama>", "example": ".ceksocmed Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-ceksocmed": "ceksocmed", "rimuru-ceksocmed": "ceksocmed", "rimuru-sosmed": "sosmed", "rimuru-medsos": "medsos", "sosmed": "sosmed", "medsos": "medsos"}
export default handler
