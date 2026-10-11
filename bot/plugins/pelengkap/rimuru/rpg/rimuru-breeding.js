/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/rpg/breeding.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "breeding", "category": "rpg", "aliasMap": {"rimuru-rpg-breeding": "breeding", "rimuru-breeding": "breeding", "rimuru-breed": "breed", "rimuru-kawin": "kawin", "rimuru-petbreed": "petbreed"}, "description": "Breeding pets untuk mendapat pet baru", "usage": ".breeding @user", "example": ".breeding @user", "cooldown": 3600, "energi": 3}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/rpg/breeding.js", metadata, m, extra)
handler.help = ["rimuru-rpg-breeding @user"]
handler.command = ["rimuru-rpg-breeding", "rimuru-breeding", "rimuru-breed", "rimuru-kawin", "rimuru-petbreed"]
handler.tags = ["rpg"]
handler.description = "Breeding pets untuk mendapat pet baru"
handler.importSource = "rimuru"
handler.importConfig = {"name": "breeding", "alias": ["breed", "kawin", "petbreed"], "category": "rpg", "description": "Breeding pets untuk mendapat pet baru", "usage": ".breeding @user", "example": ".breeding @user", "isOwner": false, "isPremium": false, "isGroup": true, "isPrivate": false, "cooldown": 3600, "energi": 3, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-rpg-breeding": "breeding", "rimuru-breeding": "breeding", "rimuru-breed": "breed", "rimuru-kawin": "kawin", "rimuru-petbreed": "petbreed"}
export default handler
