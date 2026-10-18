#!/usr/bin/env node
// Encrypted PRIVATE Blob recovery vault. Requires existing private env; never rotates a key.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import {put,get} from '../website/node_modules/@vercel/blob/dist/index.js'
const args=process.argv.slice(2),mode=args[0],input=args[1],name=args[2]
if(!['upload','restore'].includes(mode)||!input||!name)throw Error('Usage: upload PRIVATE_ARCHIVE BLOB_PATH | restore PRIVATE_OUTPUT BLOB_PATH')
const local=path.resolve(input);if(!local.split(path.sep).includes('.secrets'))throw Error('Local archive must remain in .secrets')
function env(file){return Object.fromEntries(fs.readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^[A-Z0-9_]+=/.test(l)).map(l=>{const i=l.indexOf('=');return[l.slice(0,i),l.slice(i+1).trim().replace(/^(['"])(.*)\1$/,'$2')]}))}
const secretsDir=process.env.UMI_PRIVATE_DIR||'/home/user/.secrets',shared=env(path.join(secretsDir,'shared-secrets.env')),token=env(path.join(secretsDir,'blob-token.env')).BLOB_READ_WRITE_TOKEN
const secret=shared.BOT_BACKUP_EXPORT_SECRET;if(!secret||secret.length<32)throw Error('Original backup secret unavailable; do not generate a replacement')
const magic=Buffer.from('UMI-PRIVATE-V1\0'),key=salt=>crypto.hkdfSync('sha256',Buffer.from(secret),salt,Buffer.from('umi-migration-recovery'),32)
function decrypt(b){if(!b.subarray(0,magic.length).equals(magic))throw Error('Unknown archive format');let n=magic.length;const salt=b.subarray(n,n+=16),iv=b.subarray(n,n+=12),tag=b.subarray(n,n+=16),d=crypto.createDecipheriv('aes-256-gcm',key(salt),iv);d.setAAD(magic);d.setAuthTag(tag);return Buffer.concat([d.update(b.subarray(n)),d.final()])}
async function download(){const r=await get(name,{access:'private',token});if(r?.statusCode!==200)throw Error('Private recovery archive unavailable');return Buffer.from(await new Response(r.stream).arrayBuffer())}
if(mode==='upload'){
 const original=fs.readFileSync(local),salt=crypto.randomBytes(16),iv=crypto.randomBytes(12),c=crypto.createCipheriv('aes-256-gcm',key(salt),iv);c.setAAD(magic);const content=Buffer.concat([c.update(original),c.final()]),blob=Buffer.concat([magic,salt,iv,c.getAuthTag(),content]);
 await put(name,blob,{access:'private',token,addRandomSuffix:false,allowOverwrite:false,contentType:'application/octet-stream'});
 const verified=decrypt(await download());if(!verified.equals(original))throw Error('Recovery roundtrip verification failed');console.log(JSON.stringify({private:true,encrypted:true,bytes:blob.length,roundtripVerified:true,credentialsRotated:false}))
}else{
 const content=decrypt(await download());fs.mkdirSync(path.dirname(local),{recursive:true,mode:0o700});fs.writeFileSync(local,content,{mode:0o600,flag:'wx'});console.log('Private archive restored without extraction or overwriting runtime')
}
