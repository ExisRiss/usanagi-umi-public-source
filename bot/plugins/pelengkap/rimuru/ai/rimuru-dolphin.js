/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/ai/dolphin.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "dolphin", "category": "ai", "aliasMap": {"rimuru-ai-dolphin": "dolphin", "rimuru-dolphin": "dolphin", "rimuru-dolphinai": "dolphinai", "rimuru-dphn": "dphn", "dolphinai": "dolphinai", "dphn": "dphn"}, "description": "Chat dengan Dolphin AI (24B Model)", "usage": ".dolphin <pertanyaan> atau .dolphin --<template> <pertanyaan>", "example": ".dolphin jelaskan tentang AI", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/ai/dolphin.js", metadata, m, extra)
handler.help = ["rimuru-ai-dolphin <pertanyaan> atau .dolphin --<template> <pertanyaan>"]
handler.command = ["rimuru-ai-dolphin", "rimuru-dolphin", "rimuru-dolphinai", "rimuru-dphn", "dolphinai", "dphn"]
handler.tags = ["ai"]
handler.description = "Chat dengan Dolphin AI (24B Model)"
handler.importSource = "rimuru"
handler.importConfig = {"name": "dolphin", "alias": ["dolphinai", "dphn"], "category": "ai", "description": "Chat dengan Dolphin AI (24B Model)", "usage": ".dolphin <pertanyaan> atau .dolphin --<template> <pertanyaan>", "example": ".dolphin jelaskan tentang AI", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-ai-dolphin": "dolphin", "rimuru-dolphin": "dolphin", "rimuru-dolphinai": "dolphinai", "rimuru-dphn": "dphn", "dolphinai": "dolphinai", "dphn": "dphn"}
export default handler
