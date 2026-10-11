/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/ramadhan.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "ramadhan", "category": "rpg", "aliasMap": {"rimuru-rpg-ramadhan": "ramadhan", "rimuru-ramadhan": "ramadhan", "rimuru-bukapuasa": "bukapuasa", "rimuru-ngabuburit": "ngabuburit", "rimuru-tadarusan": "tadarusan", "rimuru-teraweh": "teraweh", "rimuru-belitakjil": "belitakjil", "rimuru-petasan": "petasan", "rimuru-mokel": "mokel", "rimuru-bangunin": "bangunin", "rimuru-bukber": "bukber", "rimuru-kelilingsahur": "kelilingsahur", "rimuru-patrol": "patrol", "rimuru-sedekah": "sedekah", "rimuru-thr": "thr", "rimuru-wartakjil": "wartakjil", "rimuru-bukawarung": "bukawarung", "ramadhan": "ramadhan", "bukapuasa": "bukapuasa", "ngabuburit": "ngabuburit", "tadarusan": "tadarusan", "teraweh": "teraweh", "belitakjil": "belitakjil", "petasan": "petasan", "mokel": "mokel", "bangunin": "bangunin", "bukber": "bukber", "kelilingsahur": "kelilingsahur", "patrol": "patrol", "sedekah": "sedekah", "thr": "thr", "wartakjil": "wartakjil", "bukawarung": "bukawarung"}, "description": "Fitur RPG Spesial Ramadhan", "usage": ".sahur | .bukapuasa | .ngabuburit | ...", "example": ".sahur", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/ramadhan.js", metadata, m, extra)
handler.help = ["rimuru-rpg-ramadhan | .bukapuasa | .ngabuburit | ..."]
handler.command = ["rimuru-rpg-ramadhan", "rimuru-ramadhan", "rimuru-bukapuasa", "rimuru-ngabuburit", "rimuru-tadarusan", "rimuru-teraweh", "rimuru-belitakjil", "rimuru-petasan", "rimuru-mokel", "rimuru-bangunin", "rimuru-bukber", "rimuru-kelilingsahur", "rimuru-patrol", "rimuru-sedekah", "rimuru-thr", "rimuru-wartakjil", "rimuru-bukawarung", "ramadhan", "bukapuasa", "ngabuburit", "tadarusan", "teraweh", "belitakjil", "petasan", "mokel", "bangunin", "bukber", "kelilingsahur", "patrol", "sedekah", "thr", "wartakjil", "bukawarung"]
handler.tags = ["rpg"]
handler.description = "Fitur RPG Spesial Ramadhan"
handler.importSource = "rimuru"
handler.importConfig = {"name": "ramadhan", "alias": ["bukapuasa", "ngabuburit", "tadarusan", "teraweh", "belitakjil", "petasan", "mokel", "bangunin", "bukber", "kelilingsahur", "patrol", "sedekah", "thr", "wartakjil", "bukawarung"], "category": "rpg", "description": "Fitur RPG Spesial Ramadhan", "usage": ".sahur | .bukapuasa | .ngabuburit | ...", "example": ".sahur", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-ramadhan": "ramadhan", "rimuru-ramadhan": "ramadhan", "rimuru-bukapuasa": "bukapuasa", "rimuru-ngabuburit": "ngabuburit", "rimuru-tadarusan": "tadarusan", "rimuru-teraweh": "teraweh", "rimuru-belitakjil": "belitakjil", "rimuru-petasan": "petasan", "rimuru-mokel": "mokel", "rimuru-bangunin": "bangunin", "rimuru-bukber": "bukber", "rimuru-kelilingsahur": "kelilingsahur", "rimuru-patrol": "patrol", "rimuru-sedekah": "sedekah", "rimuru-thr": "thr", "rimuru-wartakjil": "wartakjil", "rimuru-bukawarung": "bukawarung", "ramadhan": "ramadhan", "bukapuasa": "bukapuasa", "ngabuburit": "ngabuburit", "tadarusan": "tadarusan", "teraweh": "teraweh", "belitakjil": "belitakjil", "petasan": "petasan", "mokel": "mokel", "bangunin": "bangunin", "bukber": "bukber", "kelilingsahur": "kelilingsahur", "patrol": "patrol", "sedekah": "sedekah", "thr": "thr", "wartakjil": "wartakjil", "bukawarung": "bukawarung"}
export default handler
