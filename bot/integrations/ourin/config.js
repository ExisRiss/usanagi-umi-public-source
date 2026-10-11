import { createVendorConfig, isImportedOwner, isImportedPremium } from '../../lib/imported-compat.js'
const config=createVendorConfig('ourin')
const OURIN_CORE_CONFIG=config
const OURIN_DEVELOPER='By AlzRiss - Usanagi Umi AI'
export default config
export { config, OURIN_CORE_CONFIG, OURIN_DEVELOPER, isImportedOwner as isOwner, isImportedPremium as isPremium }
