/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/sticker/bratextra.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bratextra", "category": "sticker", "aliasMap": {"rimuru-sticker-bratextra": "bratextra", "rimuru-bratextra": "bratextra", "rimuru-bratanime": "bratanime", "rimuru-bratbahlil": "bratbahlil", "rimuru-brathd": "brathd", "rimuru-bratpatrick": "bratpatrick", "rimuru-bratsquidward": "bratsquidward", "rimuru-bratwhite": "bratwhite", "rimuru-bratchika": "bratchika", "rimuru-bratkobato": "bratkobato", "rimuru-bratmenhera": "bratmenhera", "rimuru-bratnezuko": "bratnezuko", "rimuru-bratqiqi": "bratqiqi", "rimuru-bratruromiya": "bratruromiya", "rimuru-bratumaru": "bratumaru", "bratextra": "bratextra", "bratanime": "bratanime", "brathd": "brathd", "bratpatrick": "bratpatrick", "bratsquidward": "bratsquidward", "bratwhite": "bratwhite", "bratchika": "bratchika", "bratkobato": "bratkobato", "bratmenhera": "bratmenhera", "bratnezuko": "bratnezuko", "bratqiqi": "bratqiqi", "bratruromiya": "bratruromiya", "bratumaru": "bratumaru"}, "description": "Bikin brat versi custom", "usage": ".bratanime <teks>", "example": ".bratanime Halo", "cooldown": 5, "energi": 2}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/sticker/bratextra.js", metadata, m, extra)
handler.help = ["rimuru-sticker-bratextra <teks>"]
handler.command = ["rimuru-sticker-bratextra", "rimuru-bratextra", "rimuru-bratanime", "rimuru-bratbahlil", "rimuru-brathd", "rimuru-bratpatrick", "rimuru-bratsquidward", "rimuru-bratwhite", "rimuru-bratchika", "rimuru-bratkobato", "rimuru-bratmenhera", "rimuru-bratnezuko", "rimuru-bratqiqi", "rimuru-bratruromiya", "rimuru-bratumaru", "bratextra", "bratanime", "brathd", "bratpatrick", "bratsquidward", "bratwhite", "bratchika", "bratkobato", "bratmenhera", "bratnezuko", "bratqiqi", "bratruromiya", "bratumaru"]
handler.tags = ["sticker"]
handler.description = "Bikin brat versi custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bratextra", "alias": ["bratanime", "bratbahlil", "brathd", "bratpatrick", "bratsquidward", "bratwhite", "bratchika", "bratkobato", "bratmenhera", "bratnezuko", "bratqiqi", "bratruromiya", "bratumaru"], "category": "sticker", "description": "Bikin brat versi custom", "usage": ".bratanime <teks>", "example": ".bratanime Halo", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 2, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-sticker-bratextra": "bratextra", "rimuru-bratextra": "bratextra", "rimuru-bratanime": "bratanime", "rimuru-bratbahlil": "bratbahlil", "rimuru-brathd": "brathd", "rimuru-bratpatrick": "bratpatrick", "rimuru-bratsquidward": "bratsquidward", "rimuru-bratwhite": "bratwhite", "rimuru-bratchika": "bratchika", "rimuru-bratkobato": "bratkobato", "rimuru-bratmenhera": "bratmenhera", "rimuru-bratnezuko": "bratnezuko", "rimuru-bratqiqi": "bratqiqi", "rimuru-bratruromiya": "bratruromiya", "rimuru-bratumaru": "bratumaru", "bratextra": "bratextra", "bratanime": "bratanime", "brathd": "brathd", "bratpatrick": "bratpatrick", "bratsquidward": "bratsquidward", "bratwhite": "bratwhite", "bratchika": "bratchika", "bratkobato": "bratkobato", "bratmenhera": "bratmenhera", "bratnezuko": "bratnezuko", "bratqiqi": "bratqiqi", "bratruromiya": "bratruromiya", "bratumaru": "bratumaru"}
export default handler
