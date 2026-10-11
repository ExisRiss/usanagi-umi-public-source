/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/fakegroup.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakegroup", "category": "maker", "aliasMap": {"rimuru-maker-fakegroup": "fakegroup", "rimuru-fakegroup": "fakegroup", "rimuru-fgc": "fgc", "fakegroup": "fakegroup", "fgc": "fgc"}, "description": "Membuat fake tampilan grup WhatsApp", "usage": ".fakegroup <url|title|member|time>", "example": ".fakegroup https://img.jpg|Zero Squad|256 members|12:30", "cooldown": 5, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/fakegroup.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakegroup <url|title|member|time>"]
handler.command = ["rimuru-maker-fakegroup", "rimuru-fakegroup", "rimuru-fgc", "fakegroup", "fgc"]
handler.tags = ["maker"]
handler.description = "Membuat fake tampilan grup WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakegroup", "alias": ["fgc"], "category": "maker", "description": "Membuat fake tampilan grup WhatsApp", "usage": ".fakegroup <url|title|member|time>", "example": ".fakegroup https://img.jpg|Zero Squad|256 members|12:30", "cooldown": 5, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-fakegroup": "fakegroup", "rimuru-fakegroup": "fakegroup", "rimuru-fgc": "fgc", "fakegroup": "fakegroup", "fgc": "fgc"}
export default handler
