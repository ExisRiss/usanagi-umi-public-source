/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/rch.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "rch", "category": "tools", "aliasMap": {"rimuru-tools-rch": "rch", "rimuru-rch": "rch", "rimuru-frch": "frch", "rimuru-reactch": "reactch", "rimuru-fakereactch": "fakereactch", "rimuru-fakerch": "fakerch", "frch": "frch", "reactch": "reactch", "fakereactch": "fakereactch", "fakerch": "fakerch"}, "description": "Kirim react ke post channel WhatsApp", "usage": ".rch <link_post> <emoji>", "example": ".rch https://whatsapp.com/channel/RIMURU_CHANNEL 😂😍", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/rch.js", metadata, m, extra)
handler.help = ["rimuru-tools-rch <link_post> <emoji>"]
handler.command = ["rimuru-tools-rch", "rimuru-rch", "rimuru-frch", "rimuru-reactch", "rimuru-fakereactch", "rimuru-fakerch", "frch", "reactch", "fakereactch", "fakerch"]
handler.tags = ["tools"]
handler.description = "Kirim react ke post channel WhatsApp"
handler.importSource = "rimuru"
handler.importConfig = {"name": "rch", "alias": ["frch", "reactch", "fakereactch", "fakerch"], "category": "tools", "description": "Kirim react ke post channel WhatsApp", "usage": ".rch <link_post> <emoji>", "example": ".rch https://whatsapp.com/channel/RIMURU_CHANNEL 😂😍", "isOwner": false, "isPremium": true, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-rch": "rch", "rimuru-rch": "rch", "rimuru-frch": "frch", "rimuru-reactch": "reactch", "rimuru-fakereactch": "fakereactch", "rimuru-fakerch": "fakerch", "frch": "frch", "reactch": "reactch", "fakereactch": "fakereactch", "fakerch": "fakerch"}
export default handler
