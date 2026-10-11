/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/search/npm.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "npm", "category": "search", "aliasMap": {"rimuru-search-npm": "npm", "rimuru-npm": "npm", "rimuru-npmsearch": "npmsearch", "rimuru-npmjs": "npmjs", "rimuru-npmfind": "npmfind", "npm": "npm", "npmsearch": "npmsearch", "npmjs": "npmjs", "npmfind": "npmfind"}, "description": "Search package di NPM registry", "usage": ".npm <query>", "example": ".npm axios", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/search/npm.js", metadata, m, extra)
handler.help = ["rimuru-search-npm <query>"]
handler.command = ["rimuru-search-npm", "rimuru-npm", "rimuru-npmsearch", "rimuru-npmjs", "rimuru-npmfind", "npm", "npmsearch", "npmjs", "npmfind"]
handler.tags = ["search"]
handler.description = "Search package di NPM registry"
handler.importSource = "rimuru"
handler.importConfig = {"name": "npm", "alias": ["npmsearch", "npmjs", "npmfind"], "category": "search", "description": "Search package di NPM registry", "usage": ".npm <query>", "example": ".npm axios", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-search-npm": "npm", "rimuru-npm": "npm", "rimuru-npmsearch": "npmsearch", "rimuru-npmjs": "npmjs", "rimuru-npmfind": "npmfind", "npm": "npm", "npmsearch": "npmsearch", "npmjs": "npmjs", "npmfind": "npmfind"}
export default handler
