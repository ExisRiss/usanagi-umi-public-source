/* By AlzRiss - Usanagi Umi AI
 *
 * HTML game ULAR TANGGA untuk WhatsApp (rich message).
 * Mandiri: tanpa aset eksternal, tanpa internet. Papan digambar dengan CSS grid,
 * ular & tangga sebagai garis SVG, pion beranimasi, dan progres disimpan di
 * localStorage. Bisa dimainkan lawan bot atau 2 pemain bergantian di satu HP.
 */

export const ULAR_TANGGA_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>ULAR TANGGA</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;font-family:'Segoe UI',Roboto,Arial,sans-serif;user-select:none;-webkit-user-select:none}
body{background:radial-gradient(120% 90% at 50% 0%,#122040 0%,#070c18 55%,#04070f 100%);color:#e8eefb;padding:10px 10px 16px;font-size:13px}
#app{max-width:430px;margin:0 auto}
.hdr{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
.tt{font-size:17px;font-weight:900;letter-spacing:.5px;color:#ffd75e;text-shadow:0 0 14px rgba(255,215,94,.35)}
.tt small{display:block;font-size:7.5px;letter-spacing:2px;color:#8093b5;font-weight:700;text-shadow:none}
.badge{font-size:8px;letter-spacing:1px;font-weight:800;color:#0a1220;background:linear-gradient(135deg,#7ce7c4,#22b98f);padding:5px 9px;border-radius:999px}
.players{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:8px}
.pl{background:#0d1526;border:1px solid #1d2a44;border-radius:12px;padding:7px 9px;position:relative;overflow:hidden}
.pl.on{border-color:#ffd75e;box-shadow:0 0 0 1px rgba(255,215,94,.25),0 6px 18px rgba(255,215,94,.08)}
.pl i{display:flex;align-items:center;gap:5px;font-style:normal;font-size:9px;letter-spacing:.6px;color:#8093b5;font-weight:700}
.pl i b{width:9px;height:9px;border-radius:50%;display:inline-block}
.pl.p1 i b{background:#ff6b81}.pl.p2 i b{background:#58c7ff}
.pl .st{font-size:15px;font-weight:800;font-variant-numeric:tabular-nums;margin-top:2px}
.pl .sub{font-size:8.5px;color:#6f819f}
.boardwrap{position:relative;border-radius:14px;border:2px solid #24314d;background:#0a1120;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.45)}
.board{display:grid;grid-template-columns:repeat(10,1fr);aspect-ratio:1/1}
.t{position:relative;border:1px solid rgba(255,255,255,.045);display:flex;align-items:center;justify-content:center;font-size:11px;color:#3f4f6b;overflow:hidden}
.t.alt{background:rgba(255,255,255,.018)}
.t.snake{background:linear-gradient(160deg,#2a1020,#3a1526);color:#7a3b4d}
.t.ladder{background:linear-gradient(160deg,#0f2a24,#123a2f);color:#2f6f5c}
.t.finish{background:linear-gradient(135deg,#ffd75e,#e09406);color:#3a2805;font-weight:900}
.t .num{position:absolute;left:3px;top:2px;font-size:7px;opacity:.75}
.t .ic{font-size:11px;opacity:.9}
.t.hit{animation:pop .35s ease}
@keyframes pop{0%{transform:scale(.85);filter:brightness(2)}100%{transform:scale(1);filter:none}}
svg.links{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.tok{position:absolute;width:6.4%;height:6.4%;border-radius:50%;transition:left .18s ease,top .18s ease;box-shadow:0 0 0 2px rgba(0,0,0,.45),0 0 10px rgba(255,255,255,.18);z-index:4;display:flex;align-items:center;justify-content:center;font-size:6.5px;color:#08101d;font-weight:900}
.t1{background:linear-gradient(140deg,#ff93a3,#e8455f)}
.t2{background:linear-gradient(140deg,#8fdcff,#2f9fe0)}
.tok.win{animation:winb .5s infinite alternate}
@keyframes winb{from{transform:scale(1)}to{transform:scale(1.28)}}
.ctrl{display:grid;grid-template-columns:1.5fr 1fr 44px 44px;gap:7px;margin-top:8px}
button{border:0;border-radius:12px;font-weight:900;cursor:pointer;touch-action:manipulation;font-size:12px}
button:active{transform:translateY(2px)}
#roll{height:50px;font-size:15px;color:#2a1c02;background:linear-gradient(#ffe07a,#ffbe1f 55%,#d98c00);box-shadow:0 5px 0 #7d5100,0 8px 22px rgba(255,190,31,.25);letter-spacing:.4px}
#roll:disabled{filter:grayscale(.55) brightness(.75);box-shadow:0 5px 0 #3a3a3a}
#mode,#reset,#mute{height:50px;background:#111d33;color:#cfe0ff;border:1px solid #233355;font-size:11px}
#mute{font-size:15px}
.log{margin-top:8px;background:#0a1120;border:1px solid #1a2740;border-radius:12px;padding:8px 10px;min-height:52px}
.log div{font-size:10.5px;color:#8ea3c4;line-height:1.55}
.log div:last-child{color:#e8eefb}
.hint{font-size:8.5px;color:#5f7396;text-align:center;margin-top:7px;line-height:1.6}
.modal{position:fixed;inset:0;background:rgba(3,7,15,.82);display:none;align-items:center;justify-content:center;z-index:20;padding:18px}
.modal.on{display:flex}
.card{background:linear-gradient(160deg,#131f36,#0a1120);border:1px solid #2b3d60;border-radius:18px;padding:20px;text-align:center;max-width:300px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.6)}
.card h2{font-size:19px;color:#ffd75e;margin-bottom:6px}
.card p{font-size:11px;color:#9fb2d1;line-height:1.6;margin-bottom:14px}
.card button{width:100%;height:42px;background:linear-gradient(#7ce7c4,#22b98f);color:#062018}
.conf{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:19}
.cf{position:absolute;width:7px;height:12px;border-radius:2px;animation:fall linear forwards}
@keyframes fall{to{transform:translateY(110vh) rotate(620deg);opacity:.2}}
</style>
</head>
<body>
<div id="app">
  <div class="hdr">
    <div class="tt">🐍 ULAR TANGGA<small>MAIN DI CHAT WHATSAPP</small></div>
    <div class="badge" id="badge">VS BOT</div>
  </div>
  <div class="players">
    <div class="pl p1 on" id="pl1"><i><b></b>PEMAIN 1</i><div class="st" id="s1">1</div><div class="sub" id="b1">0 lempar · 0 ular</div></div>
    <div class="pl p2" id="pl2"><i><b></b><span id="n2">BOT</span></i><div class="st" id="s2">1</div><div class="sub" id="b2">0 lempar · 0 ular</div></div>
  </div>
  <div class="boardwrap">
    <div class="board" id="board"></div>
    <svg class="links" id="links" viewBox="0 0 100 100" preserveAspectRatio="none"></svg>
    <div class="tok t1" id="tok1">1</div>
    <div class="tok t2" id="tok2">2</div>
  </div>
  <div class="ctrl">
    <button id="roll">🎲 LEMPAR</button>
    <button id="mode">MODE<br>VS BOT</button>
    <button id="reset">↺</button>
    <button id="mute">🔊</button>
  </div>
  <div class="log" id="log"></div>
  <div class="hint">Lempar dadu bergantian. 🪜 naik, 🐍 turun. Harus tepat mendarat di 100 untuk menang.</div>
</div>
<div class="modal" id="modal"><div class="card"><h2 id="mt">MENANG!</h2><p id="mp"></p><button id="again">MAIN LAGI</button></div></div>
<div class="conf" id="conf"></div>
<script>
window.onerror=function(m,s,l){var e=document.getElementById('log');if(e){e.innerHTML='<div style="color:#ff7a8a">⚠ '+m+' @'+l+'</div>'}};
(function(){
'use strict';
var SNAKES={98:78,95:75,92:62,88:24,64:41,48:26,36:6};
var LADDERS={1:38,4:14,9:31,21:42,28:84,51:67,71:91,80:99};
var KEY='umi_ular_v1';
var board=document.getElementById('board'),links=document.getElementById('links'),logEl=document.getElementById('log');
var tok1=document.getElementById('tok1'),tok2=document.getElementById('tok2');
var rollB=document.getElementById('roll'),modeB=document.getElementById('mode'),resetB=document.getElementById('reset'),muteB=document.getElementById('mute');
var modal=document.getElementById('modal'),mt=document.getElementById('mt'),mp=document.getElementById('mp'),again=document.getElementById('again');
var badge=document.getElementById('badge'),n2=document.getElementById('n2');
var pl1=document.getElementById('pl1'),pl2=document.getElementById('pl2');

var S={pos:[1,1],turn:0,stats:[{r:0,s:0,l:0},{r:0,s:0,l:0}],mode:'bot',over:false,busy:false,started:Date.now()};
var cells={},muted=false;
try{muted=localStorage.getItem('umi_ular_mute')==='1'}catch(e){}

/* ---------- util posisi ---------- */
function pos(n){var idx=Math.max(1,Math.min(100,n))-1;var r=Math.floor(idx/10);var c=idx%10;var row=9-r;if(r%2===1)c=9-c;return{row:row,col:c}}
function numAt(row,col){var r=9-row;var c=(r%2===1)?9-col:col;return r*10+c+1}

/* ---------- papan ---------- */
function buildBoard(){
  var frag=document.createDocumentFragment();
  var r,c,n,cell;
  for(r=0;r<10;r++){
    for(c=0;c<10;c++){
      n=numAt(r,c);
      cell=document.createElement('div');
      cell.className='t'+((Math.floor((n-1)/10)%2)?' alt':'');
      if(SNAKES[n]){cell.className+=' snake';cell.innerHTML='<span class="num">'+n+'</span><span class="ic">🐍</span>'}
      else if(LADDERS[n]){cell.className+=' ladder';cell.innerHTML='<span class="num">'+n+'</span><span class="ic">🪜</span>'}
      else if(n===100){cell.className+=' finish';cell.innerHTML='<span class="num">100</span><span class="ic">🏁</span>'}
      else cell.innerHTML='<span class="num">'+n+'</span>';
      cells[n]=cell;frag.appendChild(cell);
    }
  }
  board.appendChild(frag);
  drawLinks();
}
function center(n){var p=pos(n);return{x:p.col*10+5,y:p.row*10+5}}
function drawLinks(){
  var html='',k,a,b;
  for(k in SNAKES){a=center(Number(k));b=center(SNAKES[k]);html+='<line x1="'+a.x+'" y1="'+a.y+'" x2="'+b.x+'" y2="'+b.y+'" stroke="rgba(255,107,129,.55)" stroke-width="1.1" stroke-linecap="round" stroke-dasharray="2.4 1.6"/>'}
  for(k in LADDERS){a=center(Number(k));b=center(LADDERS[k]);html+='<line x1="'+a.x+'" y1="'+a.y+'" x2="'+b.x+'" y2="'+b.y+'" stroke="rgba(124,231,196,.5)" stroke-width="1.1" stroke-linecap="round"/>'}
  links.innerHTML=html;
}

/* ---------- suara ---------- */
var AC=null;
function ac(){if(!AC){try{AC=new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}if(AC&&AC.state==='suspended'){try{AC.resume()}catch(e){}}return AC}
function tone(f,d,type,vol,at,slide){
  var a=ac();if(!a||muted)return;
  try{var t0=a.currentTime+(at||0),o=a.createOscillator(),g=a.createGain();
    o.type=type||'square';o.frequency.setValueAtTime(f,t0);
    if(slide)o.frequency.exponentialRampToValueAtTime(Math.max(40,slide),t0+d);
    g.gain.setValueAtTime(vol||.08,t0);g.gain.exponentialRampToValueAtTime(.001,t0+d);
    o.connect(g);g.connect(a.destination);o.start(t0);o.stop(t0+d+.02);
  }catch(e){}
}
function sRoll(){tone(320,.06,'square',.06);tone(420,.06,'square',.05,.07);tone(520,.07,'square',.05,.14)}
function sStep(){tone(660,.045,'triangle',.05)}
function sSnake(){tone(500,.35,'sawtooth',.09,0,90);tone(240,.3,'sine',.06,.05,70)}
function sLadder(){[520,660,780,980].forEach(function(f,i){tone(f,.1,'sine',.06,i*.07)})}
function sWin(){[660,830,990,1320].forEach(function(f,i){tone(f,.22,'triangle',.09,i*.12)})}

/* ---------- render ---------- */
function placeTokens(){
  var p1=pos(S.pos[0]),p2=pos(S.pos[1]);
  tok1.style.left=(p1.col*10+2.2)+'%';tok1.style.top=(p1.row*10+2.2)+'%';
  tok2.style.left=(p2.col*10+6.2)+'%';tok2.style.top=(p2.row*10+6.2)+'%';
  tok1.textContent=S.pos[0];tok2.textContent=S.pos[1];
}
function renderStats(){
  document.getElementById('s1').textContent=S.pos[0];
  document.getElementById('s2').textContent=S.pos[1];
  document.getElementById('b1').textContent=S.stats[0].r+' lempar · '+S.stats[0].s+' ular · '+S.stats[0].l+' tangga';
  document.getElementById('b2').textContent=S.stats[1].r+' lempar · '+S.stats[1].s+' ular · '+S.stats[1].l+' tangga';
  pl1.className='pl p1'+(S.turn===0&&!S.over?' on':'');
  pl2.className='pl p2'+(S.turn===1&&!S.over?' on':'');
}
function log(text){
  var d=document.createElement('div');d.textContent=text;logEl.appendChild(d);
  while(logEl.children.length>4)logEl.removeChild(logEl.firstChild);
  logEl.scrollTop=logEl.scrollHeight;
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function load(){
  try{var raw=localStorage.getItem(KEY);if(!raw)return false;var j=JSON.parse(raw);
    if(!j||!j.pos||j.pos.length!==2)return false;
    S.pos=[Number(j.pos[0])||1,Number(j.pos[1])||1];
    S.turn=Number(j.turn)||0;S.mode=j.mode==='duo'?'duo':'bot';S.over=false;
    S.stats=j.stats&&j.stats.length===2?j.stats:[{r:0,s:0,l:0},{r:0,s:0,l:0}];
    return !(S.pos[0]===1&&S.pos[1]===1);
  }catch(e){return false}
}

/* ---------- giliran ---------- */
function setMode(mode){
  S.mode=mode==='duo'?'duo':'bot';
  modeB.innerHTML=S.mode==='duo'?'MODE<br>2 PEMAIN':'MODE<br>VS BOT';
  badge.textContent=S.mode==='duo'?'2 PEMAIN':'VS BOT';
  n2.textContent=S.mode==='duo'?'PEMAIN 2':'BOT';
  renderStats();save();
}
function roll(){
  if(S.busy||S.over)return;
  if(S.mode==='bot'&&S.turn===1)return;
  S.busy=true;rollB.disabled=true;
  var who=S.turn;
  var dice=1+Math.floor(Math.random()*6);
  var faces=['','⚀','⚁','⚂','⚃','⚄','⚅'];
  var spin=0;
  var iv=setInterval(function(){
    rollB.textContent=(faces[1+Math.floor(Math.random()*6)])+' ...';
    if(++spin>5){clearInterval(iv);startMove(who,dice)}
  },55);
  sRoll();
}
function startMove(who,dice){
  var from=S.pos[who],target=from+dice;
  S.stats[who].r++;
  log((who===0?'🔴 Pemain 1':'🔵 '+(S.mode==='duo'?'Pemain 2':'Bot'))+' dapat '+dice+' → '+(target>100?'butuh angka pas':'ke '+target));
  rollB.textContent='🎲 '+dice;
  if(target>100){
    setTimeout(function(){finishTurn(who,from)},420);return;
  }
  animate(who,from,target,function(){resolveTile(who,target)});
}
function animate(who,from,to,done){
  var cur=from;
  var step=to>=from?1:-1;
  var iv=setInterval(function(){
    cur+=step;S.pos[who]=cur;placeTokens();sStep();
    if(cur===to){clearInterval(iv);setTimeout(done,180)}
  },170);
}
function resolveTile(who,tile){
  if(SNAKES[tile]){
    var tail=SNAKES[tile];
    S.stats[who].s++;
    log('🐍 Kena ular di '+tile+'! Turun ke '+tail+'.');
    sSnake();
    cells[tile]&&cells[tile].classList.add('hit');
    setTimeout(function(){cells[tile]&&cells[tile].classList.remove('hit');animate(who,tile,tail,function(){finishTurn(who,tail)})},260);
    return;
  }
  if(LADDERS[tile]){
    var top=LADDERS[tile];
    S.stats[who].l++;
    log('🪜 Naik tangga dari '+tile+' ke '+top+'!');
    sLadder();
    cells[tile]&&cells[tile].classList.add('hit');
    setTimeout(function(){cells[tile]&&cells[tile].classList.remove('hit');animate(who,tile,top,function(){finishTurn(who,top)})},260);
    return;
  }
  finishTurn(who,tile);
}
function finishTurn(who,tile){
  if(tile>=100){
    S.over=true;S.pos[who]=100;placeTokens();renderStats();save();
    mt.textContent='🏆 '+(who===0?'PEMAIN 1':'PEMAIN 2')+' MENANG!';
    mp.textContent='Sampai di petak 100 setelah '+(S.stats[who].r)+' lemparan. '+(S.stats[who].s)+' kali kena ular, '+(S.stats[who].l)+' kali naik tangga.';
    modal.classList.add('on');sWin();confetti();rollB.disabled=false;S.busy=false;return;
  }
  S.turn=1-S.turn;renderStats();save();
  S.busy=false;rollB.disabled=(S.mode==='bot'&&S.turn===1);
  rollB.textContent='🎲 LEMPAR';
  if(S.mode==='bot'&&S.turn===1){
    setTimeout(function(){
      if(S.over)return;
      S.busy=true;rollB.disabled=true;
      var dice=1+Math.floor(Math.random()*6);
      startMove(1,dice);
    },820);
  }
}
function confetti(){
  var box=document.getElementById('conf');
  var colors=['#ffd75e','#7ce7c4','#58c7ff','#ff6b81','#c792ff'];
  for(var i=0;i<28;i++){
    var d=document.createElement('div');d.className='cf';
    d.style.left=(Math.random()*100)+'%';d.style.top='-20px';
    d.style.background=colors[i%colors.length];
    d.style.animationDuration=(1.6+Math.random()*1.4)+'s';
    d.style.animationDelay=(Math.random()*.5)+'s';
    box.appendChild(d);
  }
  setTimeout(function(){box.innerHTML=''},3600);
}

/* ---------- aksi ---------- */
rollB.addEventListener('click',roll);
modeB.addEventListener('click',function(){if(S.busy)return;setMode(S.mode==='bot'?'duo':'bot');log('Mode: '+(S.mode==='duo'?'2 pemain bergantian':'lawan bot'));});
resetB.addEventListener('click',function(){
  if(S.busy)return;
  if(!resetB.dataset.armed){resetB.dataset.armed='1';resetB.textContent='YAKIN?';setTimeout(function(){delete resetB.dataset.armed;resetB.textContent='↺'},2600);return}
  delete resetB.dataset.armed;resetB.textContent='↺';
  S={pos:[1,1],turn:0,stats:[{r:0,s:0,l:0},{r:0,s:0,l:0}],mode:S.mode,over:false,busy:false,started:Date.now()};
  logEl.innerHTML='';log('Papan baru. Lempar dadu untuk mulai!');placeTokens();renderStats();save();
  modal.classList.remove('on');rollB.disabled=false;
});
muteB.addEventListener('click',function(){muted=!muted;muteB.textContent=muted?'🔇':'🔊';try{localStorage.setItem('umi_ular_mute',muted?'1':'0')}catch(e){}});
again.addEventListener('click',function(){modal.classList.remove('on');resetB.click();resetB.click();});

/* ---------- boot ---------- */
buildBoard();
if(load()){log('Progres terakhir dimuat: P1 di '+S.pos[0]+', P2 di '+S.pos[1]+'.')}
else{log('Selamat main! Lempar dadu, naik tangga, hindari ular.')}
setMode(S.mode);placeTokens();renderStats();
muteB.textContent=muted?'🔇':'🔊';
rollB.disabled=(S.mode==='bot'&&S.turn===1);
})();
</script>
</body>
</html>`

export default ULAR_TANGGA_HTML
