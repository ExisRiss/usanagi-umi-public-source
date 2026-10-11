/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/rulesgrup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rulesgrup", "category": "group", "aliasMap": {"rimuru-group-rulesgrup": "rulesgrup", "rimuru-rulesgrup": "rulesgrup", "rimuru-grouprules": "grouprules", "rimuru-aturangrup": "aturangrup", "rimuru-grules": "grules", "rulesgrup": "rulesgrup", "grouprules": "grouprules", "aturangrup": "aturangrup", "grules": "grules"}, "description": "Menampilkan rules dan aturan grup secara lengkap", "usage": ".rulesgrup", "example": ".rulesgrup", "cooldown": 10, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/rulesgrup.js", metadata, m, extra)
handler.help = ["rimuru-group-rulesgrup"]
handler.command = ["rimuru-group-rulesgrup", "rimuru-rulesgrup", "rimuru-grouprules", "rimuru-aturangrup", "rimuru-grules", "rulesgrup", "grouprules", "aturangrup", "grules"]
handler.tags = ["group"]
handler.description = "Menampilkan rules dan aturan grup secara lengkap"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rulesgrup", "alias": ["grouprules", "aturangrup", "grules"], "category": "group", "description": "Menampilkan rules dan aturan grup secara lengkap", "usage": ".rulesgrup", "example": ".rulesgrup", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 10, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-rulesgrup": "rulesgrup", "rimuru-rulesgrup": "rulesgrup", "rimuru-grouprules": "grouprules", "rimuru-aturangrup": "aturangrup", "rimuru-grules": "grules", "rulesgrup": "rulesgrup", "grouprules": "grouprules", "aturangrup": "aturangrup", "grules": "grules"}
export default handler
