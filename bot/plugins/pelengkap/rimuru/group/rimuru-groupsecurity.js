/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/group/groupsecurity.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "groupsecurity", "category": "group", "aliasMap": {"rimuru-group-groupsecurity": "groupsecurity", "rimuru-groupsecurity": "groupsecurity", "rimuru-grupsecurity": "grupsecurity", "rimuru-groupsec": "groupsec", "rimuru-grupsec": "grupsec", "rimuru-securitygrup": "securitygrup", "groupsecurity": "groupsecurity", "grupsecurity": "grupsecurity", "groupsec": "groupsec", "grupsec": "grupsec", "securitygrup": "securitygrup"}, "description": "Preset keamanan grup ketat untuk berbagai proteksi Rimuru", "usage": ".groupsecurity <on/off/status>", "example": ".groupsecurity on", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/group/groupsecurity.js", metadata, m, extra)
handler.help = ["rimuru-group-groupsecurity <on/off/status>"]
handler.command = ["rimuru-group-groupsecurity", "rimuru-groupsecurity", "rimuru-grupsecurity", "rimuru-groupsec", "rimuru-grupsec", "rimuru-securitygrup", "groupsecurity", "grupsecurity", "groupsec", "grupsec", "securitygrup"]
handler.tags = ["group"]
handler.description = "Preset keamanan grup ketat untuk berbagai proteksi Rimuru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "groupsecurity", "alias": ["grupsecurity", "groupsec", "grupsec", "securitygrup"], "category": "group", "description": "Preset keamanan grup ketat untuk berbagai proteksi Rimuru", "usage": ".groupsecurity <on/off/status>", "example": ".groupsecurity on", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "isAdmin": true, "isBotAdmin": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-group-groupsecurity": "groupsecurity", "rimuru-groupsecurity": "groupsecurity", "rimuru-grupsecurity": "grupsecurity", "rimuru-groupsec": "groupsec", "rimuru-grupsec": "grupsec", "rimuru-securitygrup": "securitygrup", "groupsecurity": "groupsecurity", "grupsecurity": "grupsecurity", "groupsec": "groupsec", "grupsec": "grupsec", "securitygrup": "securitygrup"}
export default handler
