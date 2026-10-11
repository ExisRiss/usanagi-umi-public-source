/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekgacha.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekgacha", "category": "cek", "aliasMap": {"rimuru-cek-cekgacha": "cekgacha", "rimuru-cekgacha": "cekgacha", "rimuru-luck": "luck", "luck": "luck"}, "description": "Cek hoki gacha kamu", "usage": ".cekgacha <nama>", "example": ".cekgacha Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekgacha.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekgacha <nama>"]
handler.command = ["rimuru-cek-cekgacha", "rimuru-cekgacha", "rimuru-luck", "luck"]
handler.tags = ["cek"]
handler.description = "Cek hoki gacha kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekgacha", "alias": ["gacha", "luck"], "category": "cek", "description": "Cek hoki gacha kamu", "usage": ".cekgacha <nama>", "example": ".cekgacha Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekgacha": "cekgacha", "rimuru-cekgacha": "cekgacha", "rimuru-luck": "luck", "luck": "luck"}
export default handler
