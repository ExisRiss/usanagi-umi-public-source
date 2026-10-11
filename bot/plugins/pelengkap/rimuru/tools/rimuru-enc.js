/* Ported from rimuru; original author credits remain in integrations/rimuru/plugins/tools/enc.js. */
import { runImportedFeature } from '../../../../lib/imported-compat.js'
const metadata = {"name": "encrypt", "category": "tools", "aliasMap": {"rimuru-tools-encrypt": "encrypt", "rimuru-encrypt": "encrypt", "rimuru-enc": "enc", "rimuru-obfuscate": "obfuscate", "rimuru-enccode": "enccode", "obfuscate": "obfuscate", "enccode": "enccode"}, "description": "Enkripsi / Obfuscate kode JavaScript", "usage": ".encrypt (reply file/code)", "example": ".encrypt", "cooldown": 10, "energi": 1}
const handler = (m, extra) => runImportedFeature("rimuru", "plugins/tools/enc.js", metadata, m, extra)
handler.help = ["rimuru-tools-encrypt (reply file/code)"]
handler.command = ["rimuru-tools-encrypt", "rimuru-encrypt", "rimuru-enc", "rimuru-obfuscate", "rimuru-enccode", "obfuscate", "enccode"]
handler.tags = ["tools"]
handler.description = "Enkripsi / Obfuscate kode JavaScript"
handler.importSource = "rimuru"
handler.importConfig = {"name": "encrypt", "alias": ["enc", "obfuscate", "enccode"], "category": "tools", "description": "Enkripsi / Obfuscate kode JavaScript", "usage": ".encrypt (reply file/code)", "example": ".encrypt", "isOwner": false, "isPremium": false, "isGroup": false, "isPrivate": false, "cooldown": 10, "energi": 1, "isEnabled": true}
handler.owner = false
handler.rowner = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.level = 0
handler.limit = 1
handler.importAliasMap = {"rimuru-tools-encrypt": "encrypt", "rimuru-encrypt": "encrypt", "rimuru-enc": "enc", "rimuru-obfuscate": "obfuscate", "rimuru-enccode": "enccode", "obfuscate": "obfuscate", "enccode": "enccode"}
export default handler
