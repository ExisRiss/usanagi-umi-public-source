/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/maker/fakenote.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "fakenote", "category": "maker", "aliasMap": {"rimuru-maker-fakenote": "fakenote", "rimuru-fakenote": "fakenote", "fakenote": "fakenote"}, "description": "Generate gambar Note speech bubble meme", "usage": ".fakenote name|pesan|avatar_url", "example": ".fakenote @kyynhz|jadilah manusia berkualitas, tidak menindas untuk menjadi teratas", "cooldown": 5, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/maker/fakenote.js", metadata, m, extra)
handler.help = ["rimuru-maker-fakenote name|pesan|avatar_url"]
handler.command = ["rimuru-maker-fakenote", "rimuru-fakenote", "fakenote"]
handler.tags = ["maker"]
handler.description = "Generate gambar Note speech bubble meme"
handler.importSource = "rimuru"
handler.importConfig = {"name": "fakenote", "alias": [], "category": "maker", "description": "Generate gambar Note speech bubble meme", "usage": ".fakenote name|pesan|avatar_url", "example": ".fakenote @kyynhz|jadilah manusia berkualitas, tidak menindas untuk menjadi teratas", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 5, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-maker-fakenote": "fakenote", "rimuru-fakenote": "fakenote", "fakenote": "fakenote"}
export default handler
