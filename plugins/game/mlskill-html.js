/* By AlzRiss - Usanagi Umi AI
 *
 * ML SKILL — Arena Kotak (game Fanny) — versi main langsung di WhatsApp.
 * HTML mandiri 100%: canvas + joystick + kabel, tanpa aset eksternal.
 * Ekspor apa adanya dari berkas unggahan (0 backtick, 0 ${).
 */

export const ML_SKILL_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Fanny - Arena Kotak</title>
<style>
:root{--bg:#0b1020;--fg:#f3f0e6;--gold:#d6b25e;--u:clamp(52px,min(11vw,17vh),92px);box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){--bg:#0b1020}}
:root[data-theme="dark"]{--bg:#0b1020}
html{background:transparent}
body{margin:0;background:transparent;color:var(--fg);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;overflow:hidden;touch-action:pan-y;-webkit-touch-callout:none;user-select:none;-webkit-user-select:none}
#wrap{position:relative;width:100%;height:clamp(240px,54vh,430px);overflow:hidden;border-radius:10px;background:var(--bg);touch-action:pan-y}
canvas#c{display:block;width:100%;height:100%;touch-action:none}
.hud{position:absolute}
#mm{left:calc(env(safe-area-inset-left,0px) + 8px);top:calc(env(safe-area-inset-top,0px) + 8px);width:calc(var(--u)*1.5);height:calc(var(--u)*1.5);border:3px solid var(--gold);border-radius:8px;background:#000}
#gear{left:calc(env(safe-area-inset-left,0px) + 8px);top:calc(env(safe-area-inset-top,0px) + var(--u)*1.5 + 18px);width:44px;height:44px;border-radius:50%;border:2px solid var(--gold);background:#000a;color:#fff;font-size:22px;display:grid;place-items:center}
#info{right:calc(env(safe-area-inset-right,0px) + 10px);top:calc(env(safe-area-inset-top,0px) + 8px);font-size:12px;font-weight:700;text-align:right;line-height:1.5;color:#ffe9a8}
#en{left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 10px);transform:translateX(-50%);width:clamp(120px,24vw,220px);height:12px;border-radius:6px;background:#000a;border:2px solid var(--gold);overflow:hidden}
#en i{display:block;height:100%;width:100%;background:linear-gradient(#ffe27a,#e0a92a)}
#joy{left:calc(env(safe-area-inset-left,0px) + 4vw);bottom:calc(env(safe-area-inset-bottom,0px) + 6vh);width:calc(var(--u)*2.3);height:calc(var(--u)*2.3);border-radius:50%;background:radial-gradient(#ffffff18,#ffffff08);border:3px solid #ffffff44}
#kn{position:absolute;left:50%;top:50%;width:calc(var(--u)*.95);height:calc(var(--u)*.95);border-radius:50%;background:radial-gradient(#ffffffcc,#9fb4e0aa);transform:translate(-50%,-50%)}
#hint{right:calc(env(safe-area-inset-right,0px) + 14px);bottom:calc(env(safe-area-inset-bottom,0px) + 26px);text-align:right;font-size:13px;font-weight:700;color:#ffe9a8;pointer-events:none;line-height:1.5}
#cbtn{display:none;right:calc(env(safe-area-inset-right,0px) + 5vw);bottom:calc(env(safe-area-inset-bottom,0px) + 9vh);width:calc(var(--u)*1.5);height:calc(var(--u)*1.5);border-radius:50%;border:3px solid var(--gold);background:radial-gradient(#2f5aa8,#14224a);place-items:center;font-size:calc(var(--u)*.6);box-shadow:0 2px 8px #0008}
#cbtn.on{transform:scale(.92);filter:brightness(1.3)}
#pn{display:none;left:50%;top:50%;transform:translate(-50%,-50%);background:#101830f2;border:2px solid var(--gold);border-radius:14px;padding:14px 16px;min-width:260px;font-size:14px;z-index:5}
.row{display:flex;justify-content:space-between;align-items:center;gap:14px;margin:9px 0}
.row button,#cl{background:#1e2c52;color:#fff;border:1px solid var(--gold);border-radius:10px;padding:8px 12px;font-size:13px;font-weight:700}
#cl{width:100%;margin-top:6px;background:var(--gold);color:#201800}
#rtb{left:calc(env(safe-area-inset-left,0px) + 60px);top:calc(env(safe-area-inset-top,0px) + var(--u)*1.5 + 18px);width:44px;height:44px;border-radius:50%;border:2px solid var(--gold);background:#000a;color:#fff;font-size:22px;display:grid;place-items:center}
#rtp{display:none;position:fixed;inset:0;z-index:20;background:#0b1020;overflow-y:auto;touch-action:pan-y;padding:calc(env(safe-area-inset-top,0px) + 10px) 14px calc(env(safe-area-inset-bottom,0px) + 14px);box-sizing:border-box;font-size:13px}
#rth{display:flex;justify-content:space-between;align-items:center;font-size:16px}
#rtp button,#rtp select{background:#1e2c52;color:#fff;border:1px solid var(--gold);border-radius:10px;padding:8px 10px;font-size:13px;font-weight:700}
#rtc{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px;margin:8px 0}
#rtc label{display:flex;flex-direction:column;gap:3px;font-size:12px;color:#ffe9a8}
#rtc input{width:100%}
#rti{margin:6px 0;color:#cfd8ee;line-height:1.5}
#hb{position:relative;height:38px;border:2px solid var(--gold);border-radius:8px;background:#222;overflow:hidden}
#hf{height:100%;width:100%;background:linear-gradient(#e05050,#a02020)}
#hs{position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 calc(var(--seg,10%) - 2px),#000a calc(var(--seg,10%) - 2px) var(--seg,10%))}
#hm{position:absolute;top:0;bottom:0;width:4px;margin-left:-2px;background:#ffd24a;box-shadow:0 0 8px #ffd24a}
#ht{position:absolute;inset:0;display:grid;place-items:center;font-weight:800;text-shadow:0 1px 3px #000}
#rts{margin:8px 0;min-height:18px;color:#ffe9a8}
#rtk{display:flex;gap:8px}#rtk button{flex:1}
#rtk button.off{opacity:.45}
#rta{display:flex;gap:8px;margin:10px 0}
#rtGo{flex:1}#rtri{flex:2;font-size:24px;padding:20px 10px;background:#d6b25e;color:#201800;border-radius:16px}
#rtr{margin:8px 0;padding:8px;border:1px solid #fff3;border-radius:10px;min-height:20px;line-height:1.5}
#rtl{color:#cfd8ee;line-height:1.6}
</style>
</head>
<body>
<div id="wrap">
<canvas id="c"></canvas>
<canvas id="mm" class="hud" width="128" height="128"></canvas>
<div id="gear" class="hud">⚙</div>
<div id="rtb" class="hud">🐢</div>
<div id="info" class="hud"></div>
<div id="en" class="hud"><i></i></div>
<div id="joy" class="hud"><div id="kn"></div></div>
<div id="hint" class="hud"></div>
<div id="cbtn" class="hud">🪝</div>
<div id="pn" class="hud"><b>Pengaturan</b><div id="rows"></div><button id="cl">Tutup</button></div>
</div><!-- /wrap -->
<div id="rtp"><div id="rth"><b>Tes Retribution: Turtle &amp; Lord</b><button id="rtx">✕</button></div>
<div id="rtc"></div><div id="rti"></div>
<div id="hb"><div id="hf"></div><div id="hs"></div><div id="hm"></div><span id="ht"></span></div>
<div id="rts">Atur dulu, lalu tekan Mulai.</div>
<div id="rtk"><button data-i="0" id="k0"></button><button data-i="1" id="k1"></button><button data-i="2" id="k2"></button></div>
<div id="rta"><button id="rtGo">Mulai</button><button id="rtri">RETRI</button></div>
<div id="rtr"></div><div id="rtl"></div></div>
<script>
const $=id=>document.getElementById(id),cv=$('c'),ctx=cv.getContext('2d'),mm=$('mm').getContext('2d');
const N=36,T=64,WS=N*T;let W,H,S=1;
const WRAP=document.getElementById("wrap");function rs(){const d=devicePixelRatio||1;W=(WRAP&&WRAP.clientWidth)||innerWidth;H=(WRAP&&WRAP.clientHeight)||innerHeight;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);S=Math.max(.7,Math.min(1.4,Math.min(W,H)/520))}
addEventListener("resize",rs);if(window.ResizeObserver){try{new ResizeObserver(rs).observe(WRAP)}catch(e){}}rs();

// ===== OPSI =====
const cfg={hero:0,mode:0,tg:1,rk:1,inf:0};
const opts={hero:['Fanny','Lancelot'],mode:['Geser layar','Tombol'],tg:['Tidak','Ya'],rk:['Tidak','Ya'],inf:['Normal','Tak terbatas']};
const labels=[['hero','Karakter'],['mode','Kontrol'],['tg','Target'],['rk','Batu'],['inf','Energi']];

// ===== ARENA KOTAK + BATU =====
const map=new Uint8Array(N*N),mini=document.createElement('canvas');mini.width=mini.height=N;const mc=mini.getContext('2d');
function buildMap(){let s=11;const rn=()=>{s=(s*16807)%2147483647;return s/2147483647};map.fill(0);
  for(let i=0;i<N;i++){map[i]=map[(N-1)*N+i]=map[i*N]=map[i*N+N-1]=1}
  if(cfg.rk)for(let k=0;k<38;k++){const w=1+Math.floor(rn()*3),h=1+Math.floor(rn()*3),i=2+Math.floor(rn()*(N-4-w)),j=2+Math.floor(rn()*(N-4-h));
    if(Math.abs(i+w/2-N/2)<4&&Math.abs(j+h/2-N/2)<4)continue;for(let a=0;a<h;a++)for(let b=0;b<w;b++)map[(j+a)*N+i+b]=1}
  mc.fillStyle='#2e5a2c';mc.fillRect(0,0,N,N);mc.fillStyle='#9aa0a8';for(let j=0;j<N;j++)for(let i=0;i<N;i++)if(map[j*N+i])mc.fillRect(i,j,1,1)}
const solid=(i,j)=>i<0||j<0||i>=N||j>=N||map[j*N+i]===1;

// ===== FANNY: Steel Cable (CD 0, biaya energi turun tiap kabel beruntun) =====
const P={x:WS/2,y:WS/2,r:22};
const RANGE=900,SPEED=2000;
let facing=-Math.PI/2,energy=100,dash=null,miss=null,aim=null,chain=0,lastC=-9,time=0,cx=0,cy=0,count=0,trail=[],keys={};
let TG=[],round=0,done=0,fl=[],clearT=0,flash=0,sw=null,cdP=0;
const nextCost=()=>Math.max(5,17-2*(time-lastC>2?0:chain));
function resolve(){const ci=Math.floor(P.x/T),cj=Math.floor(P.y/T);
  for(let j=cj-1;j<=cj+1;j++)for(let i=ci-1;i<=ci+1;i++){if(!solid(i,j))continue;const qx=Math.max(i*T,Math.min(P.x,i*T+T)),qy=Math.max(j*T,Math.min(P.y,j*T+T));let dx=P.x-qx,dy=P.y-qy,d=Math.hypot(dx,dy);
    if(d<P.r){if(d<.001){dx=0;dy=-1;d=1}P.x+=dx/d*(P.r-d);P.y+=dy/d*(P.r-d)}}}
function ray(a){const dx=Math.cos(a),dy=Math.sin(a);for(let t=10;t<=RANGE;t+=8){const x=P.x+dx*t,y=P.y+dy*t;if(solid(Math.floor(x/T),Math.floor(y/T)))return{x,y}}return null}
function cable(a){if(time-lastC<.08)return;a=a==null?facing:a;facing=a;if(cfg.hero){punct(a);return}if(time-lastC>2)chain=0;
  const c=nextCost();if(energy<c&&!cfg.inf)return;if(!cfg.inf)energy-=c;chain++;lastC=time;const h=ray(a);
  if(!h){miss={x:P.x+Math.cos(a)*RANGE,y:P.y+Math.sin(a)*RANGE,a:1};return}
  const tx=h.x-Math.cos(a)*(P.r+2),ty=h.y-Math.sin(a)*(P.r+2);if(Math.hypot(tx-P.x,ty-P.y)<8)return;
  dash={tx,ty,hx:h.x,hy:h.y,hit:new Set()};count++;fl.push({x1:P.x,y1:P.y,x2:h.x,y2:h.y,a:1})}

// Lancelot: Puncture = dash 380px menembus target; kena target (Sword Mark) = cooldown 4,5 dtk langsung reset
function punct(a){if(cdP>0&&!cfg.inf)return;const dx=Math.cos(a),dy=Math.sin(a);let L=380;for(let t=10;t<=380;t+=8){if(solid(Math.floor((P.x+dx*t)/T),Math.floor((P.y+dy*t)/T))){L=t-P.r-2;break}}
  if(L<8)return;cdP=4.5;lastC=time;count++;const tx=P.x+dx*L,ty=P.y+dy*L;dash={tx,ty,hx:tx,hy:ty,hit:new Set(),L:1}}
// ===== TARGET =====
function spawnT(){TG=[];if(!cfg.tg)return;let s=round*977+5,tries=0;const rn=()=>{s=(s*16807+11)%2147483647;return s/2147483647};
  while(TG.length<12&&tries++<900){const i=2+Math.floor(rn()*(N-4)),j=2+Math.floor(rn()*(N-4));let ok=true;
    for(let a=-1;a<=1&&ok;a++)for(let b=-1;b<=1;b++)if(solid(i+a,j+b)){ok=false;break}
    if(!ok)continue;const x=(i+.5)*T,y=(j+.5)*T;if(Math.hypot(x-P.x,y-P.y)<250||TG.some(t=>Math.hypot(t.x-x,t.y-y)<260))continue;
    const n=2+Math.floor(rn()*8);TG.push({x,y,r:30,n,mx:n})}}
function hitT(){for(const t of TG){if(t.n<=0||dash.hit.has(t)||Math.hypot(t.x-P.x,t.y-P.y)>P.r+t.r)continue;dash.hit.add(t);t.n--;t.f=.3;if(dash.L)cdP=0;if(t.n<=0){done++;fl.push({x2:t.x,y2:t.y,a:1,ring:1})}}
  if(TG.length&&TG.every(t=>t.n<=0)&&!clearT)clearT=1.5}

// ===== PANEL OPSI =====
function ref(){$('rows').innerHTML=labels.map(l=>'<div class="row"><span>'+l[1]+'</span><button data-k="'+l[0]+'">'+opts[l[0]][cfg[l[0]]]+'</button></div>').join('');
  $('cbtn').style.display=cfg.mode?'grid':'none';$('hint').innerHTML=cfg.mode?'':'Geser layar untuk '+(cfg.hero?'Puncture (dash)':'tembak kabel')+'<br>'+(cfg.hero?'':'Biaya: ')+'<b id="cc">17</b>'}
$('rows').addEventListener('click',e=>{const k=e.target.dataset.k;if(!k)return;cfg[k]=cfg[k]?0:1;
  if(k==='rk'){buildMap();const i=Math.floor(P.x/T),j=Math.floor(P.y/T);if(solid(i,j)){P.x=P.y=WS/2}spawnT()}
  if(k==='tg')spawnT();ref()});
$('gear').onclick=()=>$('pn').style.display='block';$('cl').onclick=()=>$('pn').style.display='none';
buildMap();spawnT();ref();

// ===== KONTROL =====
const joy=$('joy'),kn=$('kn');let jid=null,jx=0,jy=0;
function jm(e){const r=joy.getBoundingClientRect(),R=r.width/2;let dx=e.clientX-(r.left+R),dy=e.clientY-(r.top+R);const d=Math.hypot(dx,dy);if(d>R){dx*=R/d;dy*=R/d}jx=dx/R;jy=dy/R;kn.style.transform='translate(calc(-50% + '+dx+'px),calc(-50% + '+dy+'px))'}
joy.addEventListener('pointerdown',e=>{jid=e.pointerId;joy.setPointerCapture(jid);jm(e)});
joy.addEventListener('pointermove',e=>{if(e.pointerId===jid)jm(e)});
const je=e=>{if(e.pointerId===jid){jid=null;jx=jy=0;kn.style.transform='translate(-50%,-50%)'}};
joy.addEventListener('pointerup',je);joy.addEventListener('pointercancel',je);
function swipe(el,needMode,btn){let sx,sy,pid=null,drag=false;
  el.addEventListener('pointerdown',e=>{if(cfg.mode!==needMode||pid!==null)return;pid=e.pointerId;el.setPointerCapture(pid);sx=e.clientX;sy=e.clientY;drag=false;if(btn)el.classList.add('on')});
  el.addEventListener('pointermove',e=>{if(e.pointerId!==pid)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.hypot(dx,dy)>14){drag=true;aim=Math.atan2(dy,dx);if(!btn)sw={x1:sx,y1:sy,x2:e.clientX,y2:e.clientY}}});
  el.addEventListener('pointerup',e=>{if(e.pointerId!==pid)return;pid=null;sw=null;el.classList.remove('on');const a=drag?aim:null;aim=null;if(a!=null||btn)cable(a)});
  el.addEventListener('pointercancel',()=>{pid=null;aim=null;sw=null;el.classList.remove('on')})}
swipe(cv,0,false);swipe($('cbtn'),1,true);
addEventListener('keydown',e=>{const k=e.key.toLowerCase();keys[k]=true;if((k==='l'||k===' ')&&!e.repeat)cable()});
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);

function update(dt){
  time+=dt;energy=cfg.inf?100:Math.min(100,energy+7*dt);flash-=dt;cdP=Math.max(0,cdP-dt);fl.forEach(f=>f.a-=dt*.6);fl=fl.filter(f=>f.a>0);TG.forEach(t=>{if(t.f>0)t.f-=dt});
  if(clearT>0){clearT-=dt;if(clearT<=0){clearT=0;round++;spawnT();flash=1.5}}
  if(dash){for(let s=0;s<3&&dash;s++){const dx=dash.tx-P.x,dy=dash.ty-P.y,d=Math.hypot(dx,dy),m=SPEED*dt/3;facing=Math.atan2(dy,dx);
    if(d<=m){P.x=dash.tx;P.y=dash.ty;hitT();dash=null;resolve()}else{P.x+=dx/d*m;P.y+=dy/d*m;hitT()}}
    trail.push({x:P.x,y:P.y})}
  else{let ix=jx+(keys.d?1:0)-(keys.a?1:0),iy=jy+(keys.s?1:0)-(keys.w?1:0);const m=Math.hypot(ix,iy);
    if(m>.15){if(m>1){ix/=m;iy/=m}facing=Math.atan2(iy,ix);for(let s=0;s<3;s++){P.x+=ix*340*dt/3;P.y+=iy*340*dt/3;resolve()}}}
  if(trail.length&&(!dash||trail.length>18))trail.shift();
  const tx=Math.max(0,Math.min(WS-W/S,P.x-W/(2*S))),ty=Math.max(0,Math.min(WS-H/S,P.y-H/(2*S)));cx+=(tx-cx)*Math.min(1,dt*8);cy+=(ty-cy)*Math.min(1,dt*8);
}
function circ(x,y,r,f,s){ctx.fillStyle=f;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();if(s){ctx.strokeStyle=s;ctx.lineWidth=2;ctx.stroke()}}
function draw(){
  ctx.fillStyle='#1b2a1b';ctx.fillRect(0,0,W,H);ctx.save();ctx.scale(S,S);ctx.translate(-cx,-cy);
  const i0=Math.max(0,Math.floor(cx/T)),i1=Math.min(N-1,Math.floor((cx+W/S)/T)),j0=Math.max(0,Math.floor(cy/T)),j1=Math.min(N-1,Math.floor((cy+H/S)/T));
  for(let j=j0;j<=j1;j++)for(let i=i0;i<=i1;i++){const x=i*T,y=j*T;
    if(map[j*N+i]){ctx.fillStyle='#4b4f56';ctx.fillRect(x,y,T,T);ctx.fillStyle='#6b7078';ctx.beginPath();ctx.roundRect(x+3,y+3,T-6,T-6,16);ctx.fill();ctx.fillStyle='#8a9099';ctx.beginPath();ctx.roundRect(x+10,y+8,T*.5,T*.28,9);ctx.fill()}
    else{ctx.fillStyle=(i+j)&1?'#3f7a3a':'#3b7336';ctx.fillRect(x,y,T,T)}}
  for(const f of fl){if(f.ring){ctx.strokeStyle='rgba(255,90,90,'+f.a+')';ctx.lineWidth=3;ctx.beginPath();ctx.arc(f.x2,f.y2,24+(1-f.a)*90,0,7);ctx.stroke()}else{ctx.strokeStyle='rgba(255,255,255,'+f.a*.7+')';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(f.x1,f.y1);ctx.lineTo(f.x2,f.y2);ctx.stroke()}}
  for(const t of TG){if(t.n<=0)continue;circ(t.x,t.y,t.r*1.9,'rgba(255,40,40,.2)');ctx.beginPath();for(let k=0;k<8;k++){const a=Math.PI/8+k*Math.PI/4;ctx.lineTo(t.x+Math.cos(a)*t.r,t.y+Math.sin(a)*t.r)}ctx.closePath();ctx.fillStyle=t.f>0?'#ff6b6b':'#7a1020';ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=2.5;ctx.stroke();
    ctx.fillStyle='#fff';ctx.font='bold 24px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t.n,t.x,t.y+1)}
  if(aim!=null){const h=ray(aim);ctx.strokeStyle=h?'#ffe27acc':'#ffffff66';ctx.lineWidth=7;ctx.setLineDash([14,10]);ctx.beginPath();ctx.moveTo(P.x,P.y);ctx.lineTo(h?h.x:P.x+Math.cos(aim)*RANGE,h?h.y:P.y+Math.sin(aim)*RANGE);ctx.stroke();ctx.setLineDash([]);if(h)circ(h.x,h.y,8,'#ffe27a')}
  trail.forEach((p,i)=>circ(p.x,p.y,P.r*(i/trail.length),'rgba(255,255,255,'+(i/trail.length*.35)+')'));
  if(dash&&!dash.L){ctx.strokeStyle='#e8ecf7';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(P.x,P.y);ctx.lineTo(dash.hx,dash.hy);ctx.stroke();circ(dash.hx,dash.hy,7,'#ffd166')}
  if(miss&&miss.a>0){ctx.strokeStyle='rgba(255,140,140,'+miss.a+')';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(P.x,P.y);ctx.lineTo(miss.x,miss.y);ctx.stroke();miss.a-=.07}
  ctx.fillStyle='#0005';ctx.beginPath();ctx.ellipse(P.x,P.y+12,P.r,P.r*.5,0,0,7);ctx.fill();
  circ(P.x,P.y,P.r,cfg.hero?'#8a5cff':'#e0455a','#fff');circ(P.x+Math.cos(facing)*13,P.y+Math.sin(facing)*13,6,'#fff');
  ctx.restore();
  mm.imageSmoothingEnabled=false;mm.drawImage(mini,0,0,128,128);const k=128/WS;
  for(const t of TG)if(t.n>0){mm.fillStyle='#ff4d4d';mm.fillRect(t.x*k-2,t.y*k-2,4,4)}
  mm.strokeStyle='#fff8';mm.lineWidth=1;mm.strokeRect(cx*k,cy*k,W/S*k,H/S*k);mm.beginPath();mm.arc(P.x*k,P.y*k,4,0,7);mm.fillStyle='#e0455a';mm.fill();mm.strokeStyle='#fff';mm.lineWidth=2;mm.stroke();
  if(sw){ctx.strokeStyle='rgba(255,255,255,.5)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(sw.x1,sw.y1);ctx.lineTo(sw.x2,sw.y2);ctx.stroke();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(sw.x2,sw.y2,10,0,7);ctx.fill()}
  $('en').firstChild.style.width=(cfg.hero?100-cdP/4.5*100:energy)+'%';const cc=$('cc');if(cc)cc.textContent=cfg.hero?'CD '+cdP.toFixed(1):nextCost();
  $('info').innerHTML='Energi '+(cfg.inf?'∞':Math.floor(energy))+'<br>'+(cfg.tg?'Target: '+done+' hancur ('+TG.filter(t=>t.n>0).length+' sisa)<br>Ronde '+(round+1)+' | ':'')+'Kabel '+count+'<br>Beruntun: '+(time-lastC>2?0:chain)+'x'+(flash>0?'<br><b>Ronde baru!</b>':'');
}
let last=performance.now();
(function loop(n){const dt=Math.min(.033,(n-last)/1000);last=n;update(dt);draw();requestAnimationFrame(loop)})(last);
// ===== TES RETRIBUTION: Turtle & Lord =====
// Retri = 750 + 150 x level (true damage, CD 35 dtk). 1 ruas HP bar = 2.000 HP. HP Lord ~31.700 (8:00) -> ~43.000 (12:00) -> ~56.000 (18:00). HP Turtle & DPS hero/tim = perkiraan.
const RC={h:0,o:1,d:1,s:1,mk:1,nm:1,m:8,l:10};
const hpOf=(o,m)=>o?(m<=8?31700:m<=12?31700+(m-8)*2825:m<=18?43000+(m-12)*2167:56000):7000+600*Math.max(0,m-2);
const retri=l=>750+150*l,fm=n=>Math.round(n).toLocaleString('id-ID');
const SK={0:[['Tornado',l=>300+48*l,3.5],['Kabel',l=>100+12*l,0],['Cut Throat',l=>500+60*l,30]],1:[['Puncture',l=>200+35*l,4.5],['Thorned Rose',l=>350+55*l,9],['Phantom',l=>450+60*l,20]]};
let RS={run:0,done:1},rtLog=[],streak=0,best=0,rtRaf=0,rtLast=0;
const SEL=[['h','Karakter',['Fanny','Lancelot']],['o','Objektif',['Turtle','Lord']],['d','Lawan',['Mudah','Normal','Sulit']],['s','DPS tim',['Lambat','Normal','Cepat']],['mk','Penanda Retri',['Mati','Nyala']],['nm','Angka HP',['Mati','Nyala']]];
function rtBuild(){RC.h=cfg.hero;$('rtc').innerHTML=SEL.map(s=>'<label>'+s[1]+'<select data-k="'+s[0]+'">'+s[2].map((o,i)=>'<option value="'+i+'"'+(RC[s[0]]==i?' selected':'')+'>'+o+'</option>').join('')+'</select></label>').join('')+'<label>Waktu: <b id="vm">'+RC.m+'</b> mnt<input type="range" min="2" max="20" value="'+RC.m+'" data-k="m"></label><label>Level hero: <b id="vl">'+RC.l+'</b><input type="range" min="4" max="15" value="'+RC.l+'" data-k="l"></label>';rtInfo()}
function rtInfo(){$('rti').innerHTML='Retri: <b>'+fm(retri(RC.l))+'</b> true dmg (750 + 150 x lv), CD 35 dtk<br>HP '+(RC.o?'Lord':'Turtle')+': <b>'+fm(hpOf(RC.o,RC.m))+'</b> | 1 ruas = 2.000 HP';rtDraw()}
$('rtc').addEventListener('input',e=>{const k=e.target.dataset.k;if(!k||RS.run)return;RC[k]=+e.target.value;if(k==='h')cfg.hero=RC.h;$('vm').textContent=RC.m;$('vl').textContent=RC.l;rtInfo()});
function rtDraw(){const r=RS,mx=r.mx||hpOf(RC.o,RC.m),hp=r.hp??mx;$('hf').style.width=hp/mx*100+'%';$('hb').style.setProperty('--seg',2000/mx*100+'%');$('hm').style.left=retri(RC.l)/mx*100+'%';$('hm').style.display=RC.mk?'block':'none';$('ht').textContent=RC.nm?fm(hp)+' / '+fm(mx):'';
  const sk=SK[RC.h];for(let i=0;i<3;i++){const b=$('k'+i),c=r.cd?r.cd[i]:0;b.textContent=sk[i][0]+(c>0?' '+c.toFixed(1):'')+(RC.h===0&&i===1&&r.en!=null?' (E'+Math.floor(r.en)+')':'');b.classList.toggle('off',c>0)}}
function rtStart(){if(RS.run)return;const l=RC.l,mx=hpOf(RC.o,RC.m);
  RS={run:1,done:0,t:0,hp:mx,mx,thr:retri(l),cross:null,used:0,eT:null,eThr:retri(l+RC.d-1),cd:[0,0,0],sc:0,scT:0,en:100,ch:0,lc:-9,mk:0,aa:.5,bu:2+Math.random()*2};
  $('rtr').innerHTML='';$('rts').textContent='Bertarung! Tekan RETRI saat HP masuk garis emas.';rtDraw();cancelAnimationFrame(rtRaf);rtLast=performance.now();
  const f=n=>{const dt=Math.min(.05,(n-rtLast)/1000);rtLast=n;rtStep(dt);rtDraw();if(RS.run)rtRaf=requestAnimationFrame(f)};rtRaf=requestAnimationFrame(f)}
function deal(d,pl){RS.hp=Math.max(0,RS.hp-d*(pl&&RC.h?1+.075*RS.sc:1))}
function rtStep(dt){const r=RS,l=RC.l;if(!r.run)return;r.t+=dt;
  const base=[600,1000,1600][RC.s]*(.5+l/30)*(RC.o?1:.45);let d=base*(1+.15*Math.sin(r.t*2.3))*dt;r.bu-=dt;if(r.bu<=0){d+=base*(.4+Math.random()*.8);r.bu=2+Math.random()*2}deal(d,0);
  r.aa-=dt;if(r.aa<=0){r.aa=.75;deal(RC.h?180+30*l:160+26*l,1)}
  r.scT-=dt;if(r.scT<=0)r.sc=0;r.cd=r.cd.map(c=>Math.max(0,c-dt));r.en=Math.min(100,r.en+7*dt);
  if(r.cross===null&&r.hp<=r.thr)r.cross=r.t;
  if(r.eT===null&&r.hp<=r.eThr)r.eT=r.t+[.65,.4,.22][RC.d]*(.7+Math.random()*.6);
  if(r.eT!==null&&r.t>=r.eT){const m=Math.round((r.t-(r.cross??r.t))*1000);r.hp=0;rtEnd('Dicuri musuh! (musuh menekan '+m+' ms setelah garis, kamu belum menekan)',0,{steal:1})}
  else if(r.hp<=0)rtEnd('Objektif habis oleh tim tanpa Retri',0,{late:1})}
function rtSk(i){const r=RS;if(!r.run||r.done)return;const l=RC.l,s=SK[RC.h][i],dm=s[1](l);
  if(RC.h===0){if(i===1){if(r.t-r.lc>2)r.ch=0;const c=Math.max(5,17-2*r.ch);if(r.en<c)return;r.en-=c;r.ch++;r.lc=r.t;deal(dm,1);if(r.cd[0]<=0&&r.en>=25){r.en-=25;r.cd[0]=3.5;deal(SK[0][0][1](l),1)}}
    else{if(r.cd[i]>0)return;if(i===0){if(r.en<25)return;r.en-=25}r.cd[i]=s[2];deal(dm,1)}}
  else{if(r.cd[i]>0)return;if(i===0){if(!r.mk)r.mk=1;else r.cd[0]=4.5}else r.cd[i]=s[2];deal(dm,1);r.sc=Math.min(4,r.sc+1);r.scT=4}}
function rtPress(){const r=RS;if(!r.run||r.done||r.used)return;r.used=1;const hp=r.hp,pc=Math.max(0,100-Math.abs(hp-r.thr)/r.thr*100);
  if(hp<=r.thr){const rt=(r.t-r.cross)*1000;r.hp=0;rtEnd(rt<=120?'SEMPURNA! Secure':rt<=250?'Bagus! Secure':rt<=500?'Cukup, secure':'Secure, tapi lambat',1,{rt,pc})}
  else{r.hp-=r.thr;rtEnd('Terlalu cepat: HP masih '+fm(hp-r.thr)+' di atas garis, tidak secure',0,{pc,early:1})}}
function rtEnd(msg,ok,o){const r=RS;r.done=1;r.run=0;rtLog.push(Object.assign({ok},o));streak=ok?streak+1:0;best=Math.max(best,streak);
  $('rtr').innerHTML='<b>'+msg+'</b>'+(o.rt!=null?'<br>Reaksi: '+Math.round(o.rt)+' ms setelah garis | Presisi '+Math.round(o.pc)+'%':o.pc!=null?'<br>Presisi '+Math.round(o.pc)+'%':'');
  $('rts').textContent='Selesai. Tekan Mulai untuk ulang.';rtStat();rtDraw()}
function rtStat(){const n=rtLog.length,ok=rtLog.filter(x=>x.ok),av=a=>a.length?Math.round(a.reduce((s,x)=>s+x,0)/a.length):0;
  $('rtl').innerHTML=n?'Percobaan '+n+' | Secure '+Math.round(ok.length/n*100)+'% | Streak '+streak+' (terbaik '+best+')<br>Reaksi rata-rata '+av(ok.map(x=>x.rt))+' ms | tercepat '+(ok.length?Math.round(Math.min(...ok.map(x=>x.rt))):'-')+' ms | Presisi rata-rata '+av(rtLog.filter(x=>x.pc!=null).map(x=>x.pc))+'%<br>Dicuri '+rtLog.filter(x=>x.steal).length+' | Terlalu cepat '+rtLog.filter(x=>x.early).length+' | Habis tanpa Retri '+rtLog.filter(x=>x.late).length:'Belum ada percobaan'}
$('rtb').onclick=()=>{$('rtp').style.display='block';$('pn').style.display='none';rtBuild();rtStat()};
$('rtx').onclick=()=>{RS.run=0;$('rtp').style.display='none';ref()};
$('rtGo').onclick=rtStart;
$('rtri').addEventListener('pointerdown',e=>{e.preventDefault();rtPress()});
$('rtk').addEventListener('pointerdown',e=>{const i=e.target.dataset.i;if(i!=null){e.preventDefault();rtSk(+i)}});
addEventListener('keydown',e=>{if($('rtp').style.display==='block'){if(e.key===' '){e.preventDefault();rtPress()}else if('123'.includes(e.key))rtSk(+e.key-1)}});
</script>
<script>
/* ── Pelindung sentuh ──────────────────────────────────────────────
 * Tujuan: kartu rich message TIDAK bisa di-swipe-reply / long-press-reply
 * dan geseran layar tidak "dimakan" oleh WhatsApp, TAPI geser vertikal
 * halaman + geser internal (.rail/.cbody) tetap jalan.
 * ──────────────────────────────────────────────────────────────── */
(function(){
  /* area game (#wrap) & joystick memang butuh geser → jangan ditahan */
  var bolehGeser = function(el){ return !!(el && el.closest && el.closest('#wrap,#joy,#cbtn,#pn,#rtp,input,textarea,select')) };
  var sx = 0, sy = 0, kunci = '';
  document.addEventListener('touchstart', function(e){
    var t = e.touches && e.touches[0]; if(!t) return;
    sx = t.clientX; sy = t.clientY; kunci = '';
  }, {passive: true});
  document.addEventListener('touchmove', function(e){
    var t = e.touches && e.touches[0]; if(!t) return;
    var dx = t.clientX - sx, dy = t.clientY - sy;
    if(!kunci && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) kunci = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    /* geser ke samping di luar area geser → tahan (cegah swipe-reply) */
    if(kunci === 'x' && !bolehGeser(e.target)) e.preventDefault();
  }, {passive: false});
  /* tahan menu "Balas" saat long-press */
  document.addEventListener('contextmenu', function(e){ e.preventDefault() }, {passive: false});
  /* jangan biarkan teks terpilih otomatis (kecuali kolom isian) */
  document.addEventListener('selectstart', function(e){
    if(!e.target || !/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) e.preventDefault();
  }, {passive: false});
  /* dua jari / pinch tidak perlu */
  document.addEventListener('gesturestart', function(e){ e.preventDefault() }, {passive: false});
})();
</script>
</body>
</html>
`
