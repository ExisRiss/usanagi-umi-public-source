import { createVendorConfig, isImportedOwner, isImportedPremium } from '../../lib/imported-compat.js'
const config=createVendorConfig('rimuru')
const RIMURU_CORE_CONFIG=config
const RIMURU_DEVELOPER='By AlzRiss - Usanagi Umi AI'
export default config
export { config, RIMURU_CORE_CONFIG, RIMURU_DEVELOPER, isImportedOwner as isOwner, isImportedPremium as isPremium }
