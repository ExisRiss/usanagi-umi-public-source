#!/usr/bin/env node
// Guarded, targeted deploy. Never uploads databases, sessions, tokens or old snapshots.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import {fileURLToPath} from 'node:url'
if(!process.argv.includes('--legacy-single-server'))throw Error('Single-server deploy retired. Use tools/deploy-split-realms.mjs for the current two-server topology.')
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const manifest=JSON.parse(fs.readFileSync(path.join(ROOT,'tools/realms-deploy-manifest.json'),'utf8'))
const evidence=process.env.REALMS_DEPLOY_EVIDENCE||'/home/user/deploy-check/task46/deployment'
fs.mkdirSync(evidence,{recursive:true})
const env=Object.fromEntries(fs.readFileSync(process.env.PTERO_ENV_FILE||'/home/user/.secrets/panel3-credentials.env','utf8').split(/\r?\n/).filter(l=>/^[A-Z0-9_]+=/.test(l)).map(l=>{const i=l.indexOf('=');return[l.slice(0,i),l.slice(i+1).trim().replace(/^(['"])(.*)\1$/,'$2')]}))
const server=env.PTERO_SERVER_ID||env.PTERO_SERVER
if(!server||!env.PTERO_PANEL_URL||!env.PTERO_CLIENT_API_KEY)throw Error('Panel credentials incomplete; existing keys must not be rotated.')
const base=env.PTERO_PANEL_URL.replace(/\/$/,'')+'/api/client/servers/'+server
const hash=b=>crypto.createHash('sha256').update(b).digest('hex')
async function api(route,method='GET',body,raw=false){
 const r=await fetch(base+route,{method,headers:{Authorization:'Bearer '+env.PTERO_CLIENT_API_KEY,Accept:'application/json',...(body?{'Content-Type':raw?'application/octet-stream':'application/json'}:{})},body:body?(raw?body:JSON.stringify(body)):undefined,signal:AbortSignal.timeout(30000)})
 const bytes=Buffer.from(await r.arrayBuffer());let data;try{data=JSON.parse(bytes.toString())}catch{}
 return {status:r.status,bytes,data}
}
async function read(remote){const r=await api('/files/contents?file='+encodeURIComponent(remote));if(r.status===200)return r.bytes;const d=await api('/files/download?file='+encodeURIComponent(remote));if(d.status!==200||!d.data?.attributes?.url)throw Error('Read failed '+remote+' HTTP '+r.status);const blob=await fetch(d.data.attributes.url,{signal:AbortSignal.timeout(30000)});if(!blob.ok)throw Error('Signed download failed '+remote);return Buffer.from(await blob.arrayBuffer())}
const dirs=new Map()
async function listing(dir){if(dirs.has(dir))return dirs.get(dir);const r=await api('/files/list?directory='+encodeURIComponent(dir));if(r.status!==200||!Array.isArray(r.data?.data))throw Error('Panel directory read HTTP '+r.status+' ('+dir+')');const names=r.data.data.map(x=>x.attributes.name);dirs.set(dir,names);return names}
async function exists(remote){if(remote==='/')return true;const parent=path.posix.dirname(remote);if(!await exists(parent))return false;return (await listing(parent)).includes(path.posix.basename(remote))}
async function mkdir(dir){if(await exists(dir))return;const parent=path.posix.dirname(dir);await mkdir(parent);const r=await api('/files/create-folder','POST',{root:parent,name:path.posix.basename(dir)});if(r.status>=300)throw Error('Create directory failed '+dir+' HTTP '+r.status);dirs.delete(parent);dirs.set(dir,[])}
const writes=[],plan=[],result={at:new Date().toISOString(),phase:'preflight',files:[]}
try{
 const resources=await api('/resources');if(resources.status!==200)throw Error('Panel resources HTTP '+resources.status+'; no production writes performed')
 for(const file of manifest.files){
  const bytes=fs.readFileSync(path.join(ROOT,file.source)),present=await exists(file.remote),before=present?await read(file.remote):null
  const actual=before?hash(before):null,newHash=hash(bytes)
  if(file.sourceSha256&&newHash!==file.sourceSha256)throw Error('Source differs from reviewed manifest: '+file.source)
  if(actual!==file.beforeSha256&&actual!==newHash)throw Error('Live drift; abort without writes: '+file.remote)
  if(before)fs.writeFileSync(path.join(evidence,file.remote.slice(1).replaceAll('/','__')+'.before'),before)
  plan.push({...file,bytes,before,sha256:newHash,unchanged:actual===newHash});console.log('Preflight OK',file.remote)
 }
 if(process.argv.includes('--check')){result.phase='checked';console.log('Read-only preflight passed.');}
 else{
  result.phase='upload'
  for(const file of plan){
   if(!file.unchanged){await mkdir(path.posix.dirname(file.remote));const r=await api('/files/write?file='+encodeURIComponent(file.remote),'POST',file.bytes,true);if(r.status!==204)throw Error('Upload failed '+file.remote+' HTTP '+r.status);writes.push(file)}
   if(hash(await read(file.remote))!==file.sha256)throw Error('Readback mismatch '+file.remote)
   result.files.push({path:file.remote,bytes:file.bytes.length,sha256:file.sha256});console.log('Verified',file.remote,file.bytes.length)
  }
  result.phase='restart';const restart=await api('/power','POST',{signal:'restart'});result.restart=restart.status
  if(restart.status!==204)throw Error('Files verified, but restart HTTP '+restart.status)
  result.phase='deployed';console.log('Restart accepted. Verify /realms/api/meta and bot startup separately before claiming live success.')
 }
}catch(error){
 result.error=error.message
 if(result.phase==='upload'){
  result.rollback=[]
  for(const file of writes.reverse()){try{const r=file.before?await api('/files/write?file='+encodeURIComponent(file.remote),'POST',file.before,true):await api('/files/delete','POST',{root:path.posix.dirname(file.remote),files:[path.posix.basename(file.remote)]});result.rollback.push({path:file.remote,status:r.status})}catch{result.rollback.push({path:file.remote,status:'failed'})}}
 }
 console.error(error.message);process.exitCode=1
}finally{fs.writeFileSync(path.join(evidence,'result.json'),JSON.stringify(result,null,2)+'\n')}
