import test, { before, after } from 'node:test'
import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import { ULAR_TANGGA_HTML } from '../plugins/game/ular-tangga-wa-html.js'
let browser
before(async()=>{browser=await chromium.launch({args:['--no-sandbox']})})
after(async()=>{await browser?.close()})
async function game({width=390,state=null,dice=1}={}) {
  const c=await browser.newContext({viewport:{width,height:900}})
  const p=await c.newPage(),errors=[],external=[]
  p.on('pageerror',e=>errors.push(e.message))
  await p.route('**/*',route=>{if(route.request().url()==='https://umi.test/')return route.fulfill({status:200,contentType:'text/html',body:ULAR_TANGGA_HTML});external.push(route.request().url());return route.abort()})
  await p.addInitScript(({state,dice})=>{if(state&&!localStorage.getItem('umi_ular_v1'))localStorage.setItem('umi_ular_v1',JSON.stringify(state));localStorage.setItem('umi_ular_mute','1');Math.random=()=> (dice-.5)/6},{state,dice})
  await p.goto('https://umi.test/')
  return {p,c,errors,external}
}
const seed=(pos=[1,1],mode='duo',turn=0)=>({pos,mode,turn,stats:[{r:0,s:0,l:0},{r:0,s:0,l:0}],over:false})
const boardPos=n=>{const r=Math.floor((n-1)/10),c=(n-1)%10;return{x:(r%2?9-c:c)*10+5,y:(9-r)*10+5}}
for(const width of [320,390,430,768])test('vintage board fits '+width+'px with all artwork and readable numbers',async()=>{
 const {p,c,errors,external}=await game({width})
 assert.equal(await p.locator('.t').count(),100);assert.equal(await p.locator('.snake-art').count(),7);assert.equal(await p.locator('.ladder-art').count(),8)
 const values=await p.locator('.t .num').allTextContents();assert.deepEqual(values.slice(0,10),Array.from({length:10},(_,i)=>String(100-i)));assert.deepEqual(values.slice(-10),Array.from({length:10},(_,i)=>String(i+1)))
 assert.equal(new Set(values).size,100)
 assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))
 const cells=await p.locator('.num').evaluateAll(xs=>xs.every(e=>parseFloat(getComputedStyle(e).fontSize)>=7&&e.getBoundingClientRect().width>0));assert(cells)
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);await c.close()
})
test('every illustrated snake and ladder has correct travel endpoints',async()=>{
 const {p,c}=await game();const endpoints=await p.locator('.snake-art,.ladder-art').evaluateAll(groups=>groups.map(g=>{const kind=g.classList.contains('snake-art')?'snake':'ladder',from=+g.dataset.from,to=+g.dataset.to,path=document.getElementById('route-'+kind+'-'+from);const a=path.getPointAtLength(0),b=path.getPointAtLength(path.getTotalLength());return{from,to,a:{x:a.x,y:a.y},b:{x:b.x,y:b.y}}}))
 for(const e of endpoints){const a=boardPos(e.from),b=boardPos(e.to);assert(Math.abs(e.a.x-a.x)<.05&&Math.abs(e.a.y-a.y)<.05);assert(Math.abs(e.b.x-b.x)<.05&&Math.abs(e.b.y-b.y)<.05)}await c.close()
})
test('same-cell wooden pawns stay inside board',async()=>{const {p,c}=await game({state:seed([100,100])});const inside=await p.evaluate(()=>{const b=document.querySelector('.boardwrap').getBoundingClientRect();return ['tok1','tok2'].every(id=>{const r=document.getElementById(id).getBoundingClientRect();return r.left>=b.left&&r.top>=b.top&&r.right<=b.right&&r.bottom<=b.bottom})});assert(inside);await c.close()})
test('physical dice rolls and two-player turn switches',async()=>{const {p,c,errors}=await game({state:seed()});await p.click('#roll');await p.waitForFunction(()=>document.querySelector('#s1').textContent==='2'&&document.querySelector('#pl2').classList.contains('on'));assert.equal(await p.locator('#die').getAttribute('data-face'),'1');assert.equal(await p.locator('#roll').isDisabled(),false);assert.deepEqual(errors,[]);await c.close()})
test('ladder 4 to 14 animates along artwork and saves progress',async()=>{const {p,c,errors}=await game({state:seed([3,1])});await p.click('#roll');await p.waitForSelector('#tok1.sliding');await p.waitForFunction(()=>document.querySelector('#s1').textContent==='14');assert.match(await p.locator('#b1').textContent(),/1 tangga/);const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('umi_ular_v1')));assert.equal(saved.pos[0],14);await p.reload();assert.equal(await p.locator('#s1').textContent(),'14');assert.deepEqual(errors,[]);await c.close()})
test('snake 36 to 6 slides down its curved body',async()=>{const {p,c,errors}=await game({state:seed([35,1])});await p.click('#roll');await p.waitForSelector('#tok1.sliding');await p.waitForFunction(()=>document.querySelector('#s1').textContent==='6');assert.match(await p.locator('#b1').textContent(),/1 ular/);assert.deepEqual(errors,[]);await c.close()})
test('exact 100 wins; new game clears modal and positions',async()=>{const {p,c}=await game({state:seed([99,50])});await p.click('#roll');await p.waitForSelector('#modal.on');assert.match(await p.locator('#mt').textContent(),/PEMAIN 1/);await p.click('#again');assert.equal(await p.locator('#modal').getAttribute('class'),'modal');assert.equal(await p.locator('#s1').textContent(),'1');assert.equal(await p.locator('#s2').textContent(),'1');assert.equal(await p.locator('#roll').isDisabled(),false);await c.close()})
test('overshoot does not incorrectly win',async()=>{const {p,c}=await game({state:seed([99,30]),dice:3});await p.click('#roll');await p.waitForFunction(()=>document.querySelector('#pl2').classList.contains('on'));assert.equal(await p.locator('#s1').textContent(),'99');assert.equal(await p.locator('#modal').getAttribute('class'),'modal');await c.close()})
test('bot still takes its turn',async()=>{const {p,c,errors}=await game();await p.click('#roll');await p.waitForFunction(()=>document.querySelector('#s2').textContent==='2');assert.equal(await p.locator('#roll').isDisabled(),false);assert.deepEqual(errors,[]);await c.close()})
test('mode, sound and confirmed reset remain interactive',async()=>{const {p,c}=await game({state:seed([20,30])});await p.click('#mode');assert.equal(await p.locator('#badge').textContent(),'VS BOT');await p.click('#mode');assert.equal(await p.locator('#badge').textContent(),'2 PEMAIN');await p.click('#mute');assert.equal(await p.evaluate(()=>localStorage.getItem('umi_ular_mute')),'0');await p.click('#reset');assert.equal(await p.locator('#s1').textContent(),'20');await p.click('#reset');assert.equal(await p.locator('#s1').textContent(),'1');await c.close()})
test('sandbox without storage still renders and plays offline',async()=>{const c=await browser.newContext();const p=await c.newPage();await p.setContent('<iframe sandbox="allow-scripts"></iframe>');await p.locator('iframe').evaluate((f,html)=>{f.srcdoc=html},ULAR_TANGGA_HTML);const frame=p.frameLocator('iframe');await frame.locator('#roll').waitFor();assert.equal(await frame.locator('.t').count(),100);await frame.locator('#mode').click();assert.equal(await frame.locator('#badge').textContent(),'2 PEMAIN');await c.close()})
