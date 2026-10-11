/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/canvas/dbmeme.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dbmeme", "category": "canvas", "aliasMap": {"rimuru-canvas-dbmeme": "dbmeme", "rimuru-dbmeme": "dbmeme", "rimuru-distractedboy": "distractedboy", "rimuru-dbm": "dbm", "rimuru-memedb": "memedb", "dbmeme": "dbmeme", "distractedboy": "distractedboy", "dbm": "dbm", "memedb": "memedb"}, "description": "Membuat meme 'Distracted Boyfriend' dengan 3 teks custom", "usage": ".dbmeme <text1> | <text2> | <text3>", "example": ".dbmeme Ah tu cewe cakep | Hei kamu ngeliatin kemana | tu cowo ngeliatin gw", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/canvas/dbmeme.js", metadata, m, extra)
handler.help = ["rimuru-canvas-dbmeme <text1> | <text2> | <text3>"]
handler.command = ["rimuru-canvas-dbmeme", "rimuru-dbmeme", "rimuru-distractedboy", "rimuru-dbm", "rimuru-memedb", "dbmeme", "distractedboy", "dbm", "memedb"]
handler.tags = ["canvas"]
handler.description = "Membuat meme 'Distracted Boyfriend' dengan 3 teks custom"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dbmeme", "alias": ["distractedboy", "dbm", "memedb"], "category": "canvas", "description": "Membuat meme 'Distracted Boyfriend' dengan 3 teks custom", "usage": ".dbmeme <text1> | <text2> | <text3>", "example": ".dbmeme Ah tu cewe cakep | Hei kamu ngeliatin kemana | tu cowo ngeliatin gw", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-canvas-dbmeme": "dbmeme", "rimuru-dbmeme": "dbmeme", "rimuru-distractedboy": "distractedboy", "rimuru-dbm": "dbm", "rimuru-memedb": "memedb", "dbmeme": "dbmeme", "distractedboy": "distractedboy", "dbm": "dbm", "memedb": "memedb"}
export default handler
