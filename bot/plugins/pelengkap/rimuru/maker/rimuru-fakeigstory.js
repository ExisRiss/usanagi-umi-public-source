/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/fakeigstory.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakeigstory", "category": "maker", "aliasMap": {"rimuru-maker-fakeigstory": "fakeigstory", "rimuru-fakeigstory": "fakeigstory", "rimuru-igstoryfake": "igstoryfake", "rimuru-fakeigs": "fakeigs", "fakeigstory": "fakeigstory", "igstoryfake": "igstoryfake", "fakeigs": "fakeigs"}, "description": "Membuat fake Instagram Story", "usage": ".fakeigstory <username>|<caption>|<time>", "example": ".fakeigstory zerobot|lagi gabut bjir|5 menit lalu", "cooldown": 5, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/fakeigstory.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakeigstory <username>|<caption>|<time>"]
handler.command = ["rimuru-maker-fakeigstory", "rimuru-fakeigstory", "rimuru-igstoryfake", "rimuru-fakeigs", "fakeigstory", "igstoryfake", "fakeigs"]
handler.tags = ["maker"]
handler.description = "Membuat fake Instagram Story"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakeigstory", "alias": ["igstoryfake", "fakeigs"], "category": "maker", "description": "Membuat fake Instagram Story", "usage": ".fakeigstory <username>|<caption>|<time>", "example": ".fakeigstory zerobot|lagi gabut bjir|5 menit lalu", "cooldown": 5, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-fakeigstory": "fakeigstory", "rimuru-fakeigstory": "fakeigstory", "rimuru-igstoryfake": "igstoryfake", "rimuru-fakeigs": "fakeigs", "fakeigstory": "fakeigstory", "igstoryfake": "igstoryfake", "fakeigs": "fakeigs"}
export default handler
