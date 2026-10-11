/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/cek/cekkece.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "cekkece", "category": "cek", "aliasMap": {"rimuru-cek-cekkece": "cekkece", "rimuru-cekkece": "cekkece", "rimuru-kece": "kece", "rimuru-cool": "cool", "cool": "cool"}, "description": "Cek seberapa kece kamu", "usage": ".cekkece <nama>", "example": ".cekkece Budi", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/cek/cekkece.js", metadata, m, extra)
handler.help = ["rimuru-cek-cekkece <nama>"]
handler.command = ["rimuru-cek-cekkece", "rimuru-cekkece", "rimuru-kece", "rimuru-cool", "cool"]
handler.tags = ["cek"]
handler.description = "Cek seberapa kece kamu"
handler.importSource = "rimuru"
handler.importConfig = {"name": "cekkece", "alias": ["kece", "cool"], "category": "cek", "description": "Cek seberapa kece kamu", "usage": ".cekkece <nama>", "example": ".cekkece Budi", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-cek-cekkece": "cekkece", "rimuru-cekkece": "cekkece", "rimuru-kece": "kece", "rimuru-cool": "cool", "cool": "cool"}
export default handler
