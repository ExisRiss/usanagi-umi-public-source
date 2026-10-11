/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/stalker/robloxstalk.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "robloxstalk", "category": "stalker", "aliasMap": {"rimuru-stalker-robloxstalk": "robloxstalk", "rimuru-robloxstalk": "robloxstalk", "rimuru-rblxstalk": "rblxstalk", "rimuru-rbxstalk": "rbxstalk", "rimuru-stalkroblox": "stalkroblox", "rimuru-stalkrbx": "stalkrbx", "robloxstalk": "robloxstalk", "rblxstalk": "rblxstalk", "rbxstalk": "rbxstalk", "stalkroblox": "stalkroblox", "stalkrbx": "stalkrbx"}, "description": "Stalk akun Roblox berdasarkan username", "usage": ".robloxstalk <username>", "example": ".robloxstalk Linkmon99", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/stalker/robloxstalk.js", metadata, m, extra)
handler.help = ["rimuru-stalker-robloxstalk <username>"]
handler.command = ["rimuru-stalker-robloxstalk", "rimuru-robloxstalk", "rimuru-rblxstalk", "rimuru-rbxstalk", "rimuru-stalkroblox", "rimuru-stalkrbx", "robloxstalk", "rblxstalk", "rbxstalk", "stalkroblox", "stalkrbx"]
handler.tags = ["stalker"]
handler.description = "Stalk akun Roblox berdasarkan username"
handler.importSource = "rimuru"
handler.importConfig = {"name": "robloxstalk", "alias": ["rblxstalk", "rbxstalk", "stalkroblox", "stalkrbx"], "category": "stalker", "description": "Stalk akun Roblox berdasarkan username", "usage": ".robloxstalk <username>", "example": ".robloxstalk Linkmon99", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-stalker-robloxstalk": "robloxstalk", "rimuru-robloxstalk": "robloxstalk", "rimuru-rblxstalk": "rblxstalk", "rimuru-rbxstalk": "rbxstalk", "rimuru-stalkroblox": "stalkroblox", "rimuru-stalkrbx": "stalkrbx", "robloxstalk": "robloxstalk", "rblxstalk": "rblxstalk", "rbxstalk": "rbxstalk", "stalkroblox": "stalkroblox", "stalkrbx": "stalkrbx"}
export default handler
