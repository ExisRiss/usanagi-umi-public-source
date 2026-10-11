/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/subs4unlock.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "subs4unlock", "category": "tools", "aliasMap": {"rimuru-tools-subs4unlock": "subs4unlock", "rimuru-subs4unlock": "subs4unlock", "rimuru-sub4unlock": "sub4unlock", "rimuru-bypasssub": "bypasssub", "rimuru-unlocksub": "unlocksub", "subs4unlock": "subs4unlock", "sub4unlock": "sub4unlock", "bypasssub": "bypasssub", "unlocksub": "unlocksub"}, "description": "Melakukan bypass link subs4unlock secara otomatis", "usage": ".subs4unlock <link>", "example": ".subs4unlock https://subs4unlock.id/VjeQWY", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/subs4unlock.js", metadata, m, extra)
handler.help = ["rimuru-tools-subs4unlock <link>"]
handler.command = ["rimuru-tools-subs4unlock", "rimuru-subs4unlock", "rimuru-sub4unlock", "rimuru-bypasssub", "rimuru-unlocksub", "subs4unlock", "sub4unlock", "bypasssub", "unlocksub"]
handler.tags = ["tools"]
handler.description = "Melakukan bypass link subs4unlock secara otomatis"
handler.importSource = "rimuru"
handler.importConfig = {"name": "subs4unlock", "alias": ["sub4unlock", "bypasssub", "unlocksub"], "category": "tools", "description": "Melakukan bypass link subs4unlock secara otomatis", "usage": ".subs4unlock <link>", "example": ".subs4unlock https://subs4unlock.id/VjeQWY", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-subs4unlock": "subs4unlock", "rimuru-subs4unlock": "subs4unlock", "rimuru-sub4unlock": "sub4unlock", "rimuru-bypasssub": "bypasssub", "rimuru-unlocksub": "unlocksub", "subs4unlock": "subs4unlock", "sub4unlock": "sub4unlock", "bypasssub": "bypasssub", "unlocksub": "unlocksub"}
export default handler
