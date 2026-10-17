import crypto from 'node:crypto'
import { realmService } from '../../lib/realms/runtime.js'
import { withRealmGate } from '../../lib/realms/gate.js'
const WEB='https://game.gwenna.my.id/realms'
const handler=async(m,{args=[],usedPrefix='/'})=>withRealmGate(async()=>{
 try{
  const service=realmService(),sub=String(args[0]||'').toLowerCase()
  if(['login','link'].includes(sub)){
   if(m.isGroup)return m.reply(`Kode masuk bersifat pribadi. Kirim ${usedPrefix}realms login di chat pribadi bot ini.`)
   const {code}=service.issueCode(m.sender)
   return m.reply(`ECLIPSE REALMS\n\nWebsite: ${WEB}\nKode masuk sekali pakai: ${code}\nBerlaku 5 menit. Jangan bagikan kode ini. Kode ini bukan OTP WhatsApp.\n\nProgres memakai RPG Usanagi (SQLite): EXP, koin, inventory, quest, pet.\nKeluar dari semua sesi web: ${usedPrefix}realms putus`)
  }
  if(sub==='putus'){service.revoke(m.sender);return m.reply('Semua sesi website Realms dan kode login dicabut. Progres tetap tersimpan.')}
  const state=service.botState(m.sender)
  if(sub==='status'){
   if(!state)return m.reply(`Belum terhubung. Kirim ${usedPrefix}realms login di chat pribadi.`)
   return m.reply(`${state.name} · ${state.class||'belum memilih class'}\nLevel ${state.level} · EXP ${state.exp}\nKoin ${state.gold}\nHP ${state.hp}/${state.maxHp} · MP ${state.mp}/${state.maxMp}\nLokasi ${state.position.map} (${state.position.x}, ${state.position.y})\nQuest slime: ${state.quest.kills}/3${state.quest.claimed?' · hadiah diklaim':''}\nPotion: ${state.inventory.potion||0} · Pet: ${state.pet?.name||'belum ada'}\n\n${WEB}`)
  }
  const commands={move:'move',quest:'quest-accept',claim:'quest-claim',fight:'encounter',attack:'attack',skill:'skill',flee:'flee',heal:'heal',buy:'buy',sell:'sell',use:'use',equip:'equip',summon:'summon'}
  if(commands[sub]){
   if(!state)return m.reply(`Masuk melalui ${usedPrefix}realms login dahulu.`)
   const input={op:commands[sub],id:crypto.createHash('sha256').update(String(m.key?.id||m.raw?.key?.id||crypto.randomUUID())+':'+sub).digest('hex')}
   if(sub==='move')input.direction=args[1]
   if(sub==='fight')input.target=args[1]
   if(['attack','skill','flee'].includes(sub))input.target=state.encounter?.id
   if(['buy','sell','use','equip'].includes(sub)){input.item=args[1];input.quantity=args[2]===undefined?1:Number(args[2])}
   const result=service.botAction(m.sender,input)
   return m.reply(`${result.message||'Posisi diperbarui.'}\nHP ${result.state.hp}/${result.state.maxHp} · Koin ${result.state.gold} · EXP ${result.state.exp}\n${result.state.position.map} (${result.state.position.x}, ${result.state.position.y})`)
  }
  return m.reply(`ECLIPSE REALMS — Desa & Greenleaf\n${WEB}\n\n${usedPrefix}realms login — kode web (chat pribadi)\n${usedPrefix}realms status — progres yang sama\n${usedPrefix}realms move n|s|e|w\n${usedPrefix}realms quest / claim\n${usedPrefix}realms fight slime|wolf|goblin|sentinel\n${usedPrefix}realms attack / skill / flee\n${usedPrefix}realms buy potion 1\n${usedPrefix}realms use potion / heal\n${usedPrefix}realms summon\n${usedPrefix}realms putus — cabut sesi web\n\nNPC & monster harus didekati. Ini tahap awal dunia: guild/party/dungeon multiplayer lanjutan belum tersedia.`)
 }catch(e){return m.reply(e.status?e.message:'Layanan Realms belum siap. Coba lagi sebentar.')}
})
handler.help=['realms','realms login','realms status']
handler.tags=['rpg']
handler.command=/^(realms|eclipserealms)$/i
handler.register=true
handler.description='Dunia RPG website dan WhatsApp dengan progres SQLite bersama'
export default handler
