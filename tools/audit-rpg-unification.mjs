#!/usr/bin/env node
// Reads an offline private snapshot and rehearses ONLY on a newly created copy.
import fs from 'node:fs'
import path from 'node:path'
import {createRequire} from 'node:module'
import {planLegacyCurrency,rehearseLegacyCurrency,summarizeLegacyCurrency} from '../bot/lib/rpg/legacy-migration-plan.js'
const require=createRequire(new URL('../standalone/realms/package.json',import.meta.url)),Database=require('better-sqlite3')
const [database,legacy,output]=process.argv.slice(2)
if(!database||!legacy||!output)throw Error('Usage: audit-rpg-unification.mjs OFFLINE_SQLITE LEGACY_JSON NEW_PRIVATE_OUTPUT_DIR')
const out=path.resolve(output);if(!out.split(path.sep).includes('.secrets'))throw Error('Detailed reports must stay in .secrets')
if(fs.existsSync(out))throw Error('Refusing to overwrite existing audit/rehearsal')
fs.mkdirSync(out,{recursive:true,mode:0o700})
const original=new Database(database,{readonly:true,fileMustExist:true}),users=JSON.parse(fs.readFileSync(legacy,'utf8')).users
if(original.pragma('integrity_check',{simple:true})!=='ok')throw Error('Source SQLite integrity failed')
const plan=planLegacyCurrency(original,users),summary=summarizeLegacyCurrency(original,users)
fs.writeFileSync(path.join(out,'plan-private.json'),JSON.stringify(plan,null,2),{mode:0o600})
const staged=path.join(out,'rehearsal.sqlite');await original.backup(staged);original.close();fs.chmodSync(staged,0o600)
const db=new Database(staged),result=rehearseLegacyCurrency(db,plan,{stagingOnly:true}),again=rehearseLegacyCurrency(db,plan,{stagingOnly:true})
if(again.imported!==0||again.credited!==0)throw Error('Idempotency failed')
const integrity=db.pragma('integrity_check',{simple:true});db.close()
if(integrity!=='ok')throw Error('Staging integrity failed')
const report={...summary,rehearsal:result,replay:again,integrity,productionWrites:0,legacyFileModified:false}
fs.writeFileSync(path.join(out,'summary.json'),JSON.stringify(report,null,2),{mode:0o600});console.log(JSON.stringify(report,null,2))
