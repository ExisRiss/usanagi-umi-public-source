/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/owner/autoreactsw.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "autoreactsw", "category": "owner", "aliasMap": {"rimuru-owner-autoreactsw": "autoreactsw", "rimuru-autoreactsw": "autoreactsw", "rimuru-autoreaksi": "autoreaksi", "rimuru-reactsw": "reactsw", "rimuru-autoreactstory": "autoreactstory", "autoreactsw": "autoreactsw", "autoreaksi": "autoreaksi", "reactsw": "reactsw", "autoreactstory": "autoreactstory"}, "description": "Auto react semua status/story WA", "usage": ".autoreactsw on/off [emoji]", "example": ".autoreactsw on 🔥", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/owner/autoreactsw.js", metadata, m, extra)
handler.help = ["rimuru-owner-autoreactsw on/off [emoji]"]
handler.command = ["rimuru-owner-autoreactsw", "rimuru-autoreactsw", "rimuru-autoreaksi", "rimuru-reactsw", "rimuru-autoreactstory", "autoreactsw", "autoreaksi", "reactsw", "autoreactstory"]
handler.tags = ["owner"]
handler.description = "Auto react semua status/story WA"
handler.importSource = "rimuru"
handler.importConfig = {"name": "autoreactsw", "alias": ["autoreaksi", "reactsw", "autoreactstory"], "category": "owner", "description": "Auto react semua status/story WA", "usage": ".autoreactsw on/off [emoji]", "example": ".autoreactsw on 🔥", "isOwner": true, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = true
handler.rowner = true
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-owner-autoreactsw": "autoreactsw", "rimuru-autoreactsw": "autoreactsw", "rimuru-autoreaksi": "autoreaksi", "rimuru-reactsw": "reactsw", "rimuru-autoreactstory": "autoreactstory", "autoreactsw": "autoreactsw", "autoreaksi": "autoreaksi", "reactsw": "reactsw", "autoreactstory": "autoreactstory"}
export default handler
