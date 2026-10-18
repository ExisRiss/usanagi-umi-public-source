#!/usr/bin/env node
// Guarded CODE-ONLY updates for the two-server layout. Never uploads player databases or auth.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import {fileURLToPath} from 'node:url'
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),manifest=JSON.parse(fs.readFileSync(path.join(root,'tools/split-realms-manifest.json')))
const envFile=process.env.PTERO_ENV_FILE||'/home/user/.secrets/current-panel.env'
const env=Object.fromEntries(fs.readFileSync(envFile,'utf8').split(/\r?\n/).filter(l=>/^[A-Z0-9_]+=/.test(l)).map(l=>{const i=l.indexOf('=');return[l.slice(0,i),l.slice(i+1).trim().replace(/^(['"])(.*)\1$/,'$2')]}))
const base=env.PTERO_PANEL_URL.replace(/\/$/,''),h={Authorization:'Bearer '+env.PTERO_CLIENT_API_KEY,Accept:'application/json'},hash=b=>crypto.createHash('sha256').update(b).digest('hex')
async function request(url,method='GET',body,raw=false){const r=await fetch(url,{method,headers:{...h,...(body?{'Content-Type':raw?'application/octet-stream':'application/json'}:{})},body:body?(raw?body:JSON.stringify(body)):undefined,signal:AbortSignal.timeout(45000)});const bytes=Buffer.from(await r.arrayBuffer());let data;try{data=JSON.parse(bytes)}catch{}return{status:r.status,bytes,data}}
const listed=await request(base+'/api/client');if(listed.status!==200)throw Error('Panel server listing '+listed.status)
const roles={};for(const [role,name]of Object.entries(manifest.roles)){const found=listed.data.data.filter(x=>x.attributes.name===name);if(found.length!==1)throw Error('Server role ambiguous: '+role);roles[role]=found[0].attributes.identifier}
const api=(role,route,method,body,raw)=>request(base+'/api/client/servers/'+roles[role]+route,method,body,raw)
const cache=new Map()
async function exists(role,p){if(p==='/')return true;const parent=path.posix.dirname(p);if(!await exists(role,parent))return false;const key=role+':'+parent;if(!cache.has(key)){const r=await api(role,'/files/list?directory='+encodeURIComponent(parent));if(r.status!==200)throw Error('Directory read '+r.status);cache.set(key,r.data.data.map(x=>x.attributes.name))}return cache.get(key).includes(path.posix.basename(p))}
async function read(role,p){const r=await api(role,'/files/download?file='+encodeURIComponent(p));if(r.status!==200)throw Error('Signed read '+p+' '+r.status);const d=await fetch(r.data.attributes.url,{signal:AbortSignal.timeout(45000)});if(!d.ok)throw Error('Source read '+p+' '+d.status);return Buffer.from(await d.arrayBuffer())}
async function mkdir(role,p){if(await exists(role,p))return;const parent=path.posix.dirname(p);await mkdir(role,parent);const r=await api(role,'/files/create-folder','POST',{root:parent,name:path.posix.basename(p)});if(r.status!==204)throw Error('Directory create '+r.status);cache.delete(role+':'+parent)}
const plan=[],written=[],changed=new Set(),backup=path.join(path.dirname(envFile),'split-code-backups',Date.now().toString());fs.mkdirSync(backup,{recursive:true,mode:0o700})
for(const f of manifest.files){if(!f.remote.startsWith('/')||f.remote.includes('..')||/(?:\.env|sessions|database\.json|\.sqlite|creds\.json)/.test(f.remote))throw Error('Not a code-only target');const bytes=fs.readFileSync(path.join(root,f.source));if(hash(bytes)!==f.sourceSha256)throw Error('Unreviewed local source '+f.source);const before=await exists(f.role,f.remote)?await read(f.role,f.remote):null;const actual=before?hash(before):null;if(actual!==f.beforeSha256&&actual!==f.sourceSha256)throw Error('Live drift; no writes: '+f.role+f.remote);if(before)fs.writeFileSync(path.join(backup,f.role+'__'+f.remote.slice(1).replaceAll('/','__')),before,{mode:0o600});plan.push({...f,bytes,before,unchanged:actual===f.sourceSha256});console.log('Preflight',f.role,f.remote,'OK')}
if(process.argv.includes('--check'))console.log('Read-only split-server preflight passed; no restart')
else{
 try{for(const f of plan){if(!f.unchanged){await mkdir(f.role,path.posix.dirname(f.remote));const r=await api(f.role,'/files/write?file='+encodeURIComponent(f.remote),'POST',f.bytes,true);if(r.status!==204)throw Error('Upload failed '+f.remote);written.push(f);changed.add(f.role)}if(hash(await read(f.role,f.remote))!==f.sourceSha256)throw Error('Readback failed '+f.remote)}}catch(e){for(const f of written.reverse()){if(f.before)await api(f.role,'/files/write?file='+encodeURIComponent(f.remote),'POST',f.before,true);else await api(f.role,'/files/delete','POST',{root:path.posix.dirname(f.remote),files:[path.posix.basename(f.remote)]})}throw e}
 for(const role of changed){const r=await api(role,'/power','POST',{signal:'restart'});if(r.status!==204)throw Error('Verified files, restart failed '+role);console.log(role,'restart accepted')}
 console.log(changed.size?'Verify public health and login before claiming success':'Source already current; no restart needed')
}
