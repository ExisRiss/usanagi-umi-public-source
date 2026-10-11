/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/bank.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "bank", "category": "rpg", "aliasMap": {"rimuru-rpg-bank": "bank", "rimuru-bank": "bank", "rimuru-atm": "atm", "rimuru-nabung": "nabung", "rimuru-deposit": "deposit", "rimuru-tarik": "tarik", "rimuru-withdraw": "withdraw", "nabung": "nabung", "tarik": "tarik"}, "description": "Bank system untuk menyimpan uang aman dari rampok", "usage": ".bank <deposit/withdraw> <jumlah>", "example": ".bank deposit 10000", "cooldown": 5, "energi": 0}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/bank.js", metadata, m, extra)
handler.help = ["rimuru-rpg-bank <deposit/withdraw> <jumlah>"]
handler.command = ["rimuru-rpg-bank", "rimuru-bank", "rimuru-atm", "rimuru-nabung", "rimuru-deposit", "rimuru-tarik", "rimuru-withdraw", "nabung", "tarik"]
handler.tags = ["rpg"]
handler.description = "Bank system untuk menyimpan uang aman dari rampok"
handler.importSource = "rimuru"
handler.importConfig = {"name": "bank", "alias": ["atm", "nabung", "deposit", "tarik", "withdraw"], "category": "rpg", "description": "Bank system untuk menyimpan uang aman dari rampok", "usage": ".bank <deposit/withdraw> <jumlah>", "example": ".bank deposit 10000", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 0, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 0
handler.importAliasMap = {"rimuru-rpg-bank": "bank", "rimuru-bank": "bank", "rimuru-atm": "atm", "rimuru-nabung": "nabung", "rimuru-deposit": "deposit", "rimuru-tarik": "tarik", "rimuru-withdraw": "withdraw", "nabung": "nabung", "tarik": "tarik"}
export default handler
