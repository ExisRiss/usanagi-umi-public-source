/* By AlzRiss - Usanagi Umi AI
 *
 * HTML game ULAR TANGGA untuk WhatsApp (rich message).
 * Mandiri: tanpa aset eksternal, tanpa internet. Papan digambar dengan CSS grid,
 * ular & tangga bergaya cetakan vintage (SVG), pion kayu, dan progres disimpan di
 * localStorage. Bisa dimainkan lawan bot atau 2 pemain bergantian di satu HP.
 */

export const ULAR_TANGGA_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>ULAR TANGGA</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
:root{--ink:#3e392a;--paper:#f0e3c8;--red:#944932;--green:#31594d;--line:#b6a27b}
body{min-height:100vh;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),radial-gradient(ellipse at 50% 0%,#e9dec7,#c6b899);color:var(--ink);padding:18px 12px 24px;font:13px Georgia,'Times New Roman',serif}
#app{max-width:520px;margin:0 auto}
.hdr{text-align:center;position:relative;padding-bottom:14px}
.kicker{display:flex;align-items:center;gap:9px;justify-content:center;color:#736449;font:600 8px Arial,sans-serif;letter-spacing:2.4px}
.kicker:before,.kicker:after{content:'';width:24px;height:1px;background:#a78d61}
.tt{font-size:clamp(26px,7.8vw,39px);letter-spacing:1px;font-weight:900;color:#843e2c;margin:5px 0 4px;text-shadow:0 1px #fff8e9}
.tt small{display:block;font:italic 12px Georgia,serif;letter-spacing:.2px;color:#716145;margin-top:3px;font-weight:400}
.edition{display:flex;justify-content:center;align-items:center;gap:12px;margin-top:11px;font:9px Arial,sans-serif;letter-spacing:1.4px;color:#675c46}
.edition span:first-child,.edition span:last-child{color:#a1824e;font-size:10px}
.players{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 2px 12px}
.pl{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),#e4d6b9;border:1px solid #b4a07c;border-radius:3px;padding:9px 10px;position:relative;box-shadow:0 2px 3px #5b462b0b}
.pl.on{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),#faf0d7;border-color:#805c35;box-shadow:inset 0 0 0 2px #ead8af,0 3px 6px #5b462b15}
.pl.on:after{content:'GILIRAN';position:absolute;right:7px;top:8px;font:700 6px Arial,sans-serif;letter-spacing:.6px;color:#8c482f}
.pl i{display:flex;align-items:center;gap:5px;font:700 9px Arial,sans-serif;letter-spacing:.8px}
.pl i b{width:9px;height:9px;border-radius:50%;display:inline-block;box-shadow:inset 1px 1px 2px #ffffff66}
.pl.p1 i b{background:#a44431}.pl.p2 i b{background:#346d5b}
.pl .st{font:700 23px Georgia,serif;margin-top:4px;line-height:1}
.pl .st:before{content:'PETAK ';font:8px Arial,sans-serif;letter-spacing:1px;color:#897651}
.pl .sub{font:8px Arial,sans-serif;color:#827456;margin-top:5px}
.boardframe{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),linear-gradient(135deg,#745138,#9a7250 32%,#60422d);padding:8px;border:1px solid #4e3829;border-radius:4px;box-shadow:0 8px 0 -4px #634830,0 13px 23px #59432c40,inset 0 0 0 2px #c3a177;position:relative}
.boardcap{display:flex;justify-content:space-between;align-items:center;font:700 7px Arial,sans-serif;letter-spacing:1.2px;padding:5px 5px 7px;color:#f2e3bf}
.boardcap.bottom{padding:7px 5px 4px}
.boardcap .star{color:#d0af70}
.boardwrap{position:relative;border:2px solid #65543b;box-shadow:0 0 0 1px #e2c99e;background:#e9dbb9;isolation:isolate}
.board{display:grid;grid-template-columns:repeat(10,1fr);aspect-ratio:1/1;position:relative}
.board:after{content:'';position:absolute;inset:0;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg==");pointer-events:none;z-index:2;mix-blend-mode:multiply;opacity:.7}
.t{position:relative;border-right:1px solid #76644550;border-bottom:1px solid #76644550;background:#eee0bb}
.t.c1{background:#c9cfad}.t.c2{background:#ddb69b}.t.c3{background:#d7c17e}.t.c4{background:#b6c6bb}.t.c5{background:#e6d6b1}
.t .num{position:absolute;left:2px;top:1px;font:700 clamp(7px,2.4vw,12px) Georgia,serif;color:#51432e;line-height:1;background:#f4e9cb94;border-radius:1px;padding:1px 2px;z-index:3}
.t.finish{background:#d1b264;box-shadow:inset 0 0 0 2px #89703e}
.t.start{box-shadow:inset 0 0 0 1px #84704c}
.t .stamp{position:absolute;bottom:2px;right:2px;font:700 5px Arial,sans-serif;letter-spacing:.3px;color:#66502a;z-index:3}
.t .crown{position:absolute;inset:28% 22% 24%;width:56%;height:48%;opacity:.65}
.t.hit{animation:pop .4s ease}
@keyframes pop{0%,100%{filter:none}50%{filter:brightness(1.6)}}
svg.links{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:hidden}
.tok{position:absolute;width:4.7%;height:7%;z-index:5;transition:left .17s ease,top .17s ease;filter:drop-shadow(1px 2px 1px #34271980);color:#ffedc5;transform:translate(-50%,-85%)}
.tok:before{content:'';position:absolute;width:59%;height:38%;left:20%;top:1%;border-radius:50%;background:radial-gradient(circle at 32% 23%,#efb28e,var(--pawn) 56%,var(--shade));border:1px solid var(--shade);z-index:2}
.tok:after{content:'';position:absolute;left:3%;right:3%;top:30%;bottom:0;background:linear-gradient(90deg,var(--shade),var(--pawn) 30%,var(--light) 40%,var(--pawn) 62%,var(--shade));clip-path:polygon(35% 0,65% 0,68% 20%,80% 68%,100% 80%,100% 96%,75% 100%,25% 100%,0 96%,0 80%,20% 68%,32% 20%);border-radius:0 0 35% 35%}
.tok span{position:absolute;bottom:11%;left:0;right:0;text-align:center;font:700 clamp(5px,1.5vw,8px) Arial,sans-serif;z-index:3;line-height:1}
.t1{--pawn:#9a382c;--shade:#61291f;--light:#cc7752}.t2{--pawn:#326653;--shade:#203e32;--light:#73a184}
.t2:before{background:radial-gradient(circle at 32% 23%,#c1d0a1,var(--pawn) 56%,var(--shade))}
.tok.sliding{transition:none;z-index:6}
.tok.win{animation:winb .5s infinite alternate}
@keyframes winb{to{filter:drop-shadow(0 0 5px #f2ce60);margin-top:-3px}}
.legend{display:flex;justify-content:center;gap:18px;padding:12px 0 10px;font:italic 10px Georgia,serif;color:#67553c}
.legend b{font-style:normal;color:#315b48}.legend span:last-child b{color:#9b4b32}
.ctrl{display:grid;grid-template-columns:57px 1fr 77px;gap:9px;padding:12px;background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),#e3d3b3;border:1px solid #af9870;border-radius:4px;box-shadow:inset 0 1px #fff5de;align-items:center}
button{font-family:Arial,sans-serif;border:0;font-weight:700;cursor:pointer;touch-action:manipulation}
button:active{transform:translateY(2px)}
button:focus-visible{outline:2px solid #9c4f32;outline-offset:3px}
#roll{height:48px;color:#fff0cd;background:linear-gradient(#48715c,#2c5141);border:1px solid #233f32;border-radius:4px;box-shadow:0 3px 0 #20382d,inset 0 1px #9cae81;font-size:13px;letter-spacing:.3px}
#roll:disabled{opacity:.56;cursor:default;box-shadow:none}
.die{width:45px;height:45px;margin:auto;background:radial-gradient(ellipse at 30% 20%,#fffbeb,#eeddb4);border:1px solid #ac9060;border-radius:8px;box-shadow:3px 4px 0 #b4a07a,4px 6px 6px #46331e40,inset 1px 1px #fffaf0;position:relative;transform:rotate(-7deg);transition:transform .1s}
.die.spin{transform:rotate(12deg) translateY(-2px)}
.pip{position:absolute;width:7px;height:7px;border-radius:50%;background:#5d422d;box-shadow:inset 0 1px 2px #2d2019;display:none}
.p1a{left:8px;top:8px}.p2a{right:8px;top:8px}.p3a{left:8px;top:18px}.p4a{right:8px;top:18px}.p5a{left:8px;bottom:8px}.p6a{right:8px;bottom:8px}.p7a{left:18px;top:18px}
.die[data-face="1"] .p7a,.die[data-face="2"] .p1a,.die[data-face="2"] .p6a,.die[data-face="3"] .p1a,.die[data-face="3"] .p6a,.die[data-face="3"] .p7a,.die[data-face="4"] .p1a,.die[data-face="4"] .p2a,.die[data-face="4"] .p5a,.die[data-face="4"] .p6a,.die[data-face="5"] .p1a,.die[data-face="5"] .p2a,.die[data-face="5"] .p5a,.die[data-face="5"] .p6a,.die[data-face="5"] .p7a,.die[data-face="6"] .pip:not(.p7a){display:block}
#mode{height:48px;background:transparent;color:#685139;border-left:1px solid #b7a17c;font-size:9px;line-height:1.6;letter-spacing:.6px;padding-left:7px}
.utility{display:flex;align-items:center;justify-content:space-between;margin-top:12px;border-bottom:1px solid #b9a787;padding-bottom:7px}
.utility span{font:700 8px Arial,sans-serif;letter-spacing:1.5px;color:#826b47}
#reset,#mute{min-width:42px;min-height:32px;background:transparent;color:#705638;font-size:12px;border:1px solid #b9a787;border-radius:3px;padding:4px 7px}
.log{min-height:48px;padding:8px 2px 0}
.log div{font-size:10px;color:#837152;line-height:1.6}
.log div:last-child{color:#4d4532;font-style:italic}
.hint{font:9px/1.7 Arial,sans-serif;color:#847354;text-align:center;margin-top:12px}
.foot{font:8px Arial,sans-serif;letter-spacing:2px;text-align:center;color:#998364;margin-top:12px}
.modal{position:fixed;inset:0;background:#3a2b20bb;display:none;align-items:center;justify-content:center;z-index:20;padding:20px;backdrop-filter:blur(3px)}
.modal.on{display:flex}
.card{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjAiIGhlaWdodD0iMTYwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHBhdGggZmlsbD0iIzgwNjEzNyIgb3BhY2l0eT0iLjE4IiBmaWx0ZXI9InVybCgjbikiIGQ9Ik0wIDBoMTYwdjE2MEgweiIvPjwvc3ZnPg=="),#f1e3c4;border:5px double #9e8052;border-radius:4px;padding:26px 20px;text-align:center;max-width:320px;width:100%;box-shadow:0 20px 60px #241a1780}
.card h2{font-size:23px;color:#8b462f;margin-bottom:10px}.card p{font-size:13px;color:#756143;line-height:1.7;margin-bottom:18px}.card button{width:100%;height:44px;background:#365b48;color:#fff2cd;border-radius:3px}
.conf{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:19}.cf{position:absolute;width:7px;height:12px;border-radius:2px;animation:fall linear forwards}@keyframes fall{to{transform:translateY(110vh) rotate(620deg);opacity:.2}}
@media(max-width:350px){body{padding:12px 8px}.boardframe{padding:5px}.ctrl{padding:9px;grid-template-columns:49px 1fr 67px;gap:6px}.pl{padding:8px}.pl .sub{font-size:7px}.legend{gap:10px}.t .num{font-size:8px;left:1px;top:1px;padding:0 1px}}
@media(prefers-reduced-motion:reduce){.tok{transition:none}.tok.win,.t.hit,.cf{animation:none}}
</style>
</head>
<body>
<div id="app">
  <header class="hdr">
    <div class="kicker">KOLEKSI PERMAINAN KLASIK</div>
    <h1 class="tt">ULAR TANGGA<small>Sepetak langkah, seribu cerita.</small></h1>
    <div class="edition"><span>✦</span><span>EDISI NOSTALGIA</span><span>✦</span></div>
  </header>
  <div class="players">
    <div class="pl p1 on" id="pl1"><i><b></b>PEMAIN 1</i><div class="st" id="s1">1</div><div class="sub" id="b1">0 lempar · 0 ular</div></div>
    <div class="pl p2" id="pl2"><i><b></b><span id="n2">BOT</span></i><div class="st" id="s2">1</div><div class="sub" id="b2">0 lempar · 0 ular</div></div>
  </div>
  <div class="boardframe">
    <div class="boardcap"><span>100 · GARIS AKHIR</span><span class="star">✦ ✦ ✦</span><span>NAIK &amp; TURUN</span></div>
    <div class="boardwrap">
      <div class="board" id="board" role="img" aria-label="Papan ular tangga klasik 100 petak, urutan zigzag dari bawah kiri"></div>
      <svg class="links" id="links" viewBox="0 0 100 100" aria-hidden="true"></svg>
      <div class="tok t1" id="tok1"><span>1</span></div>
      <div class="tok t2" id="tok2"><span>2</span></div>
    </div>
    <div class="boardcap bottom"><span>MULAI DI SINI →</span><span>100 PETAK · 2 PION</span></div>
  </div>
  <div class="legend"><span><b>↗</b> Tangga membawa naik</span><span><b>↘</b> Ular membawa turun</span></div>
  <div class="ctrl">
    <div class="die" id="die" data-face="1" role="img" aria-label="Dadu: 1"><i class="pip p1a"></i><i class="pip p2a"></i><i class="pip p3a"></i><i class="pip p4a"></i><i class="pip p5a"></i><i class="pip p6a"></i><i class="pip p7a"></i></div>
    <button id="roll">Lempar dadu</button>
    <button id="mode" aria-label="Ganti mode permainan">MODE<br>VS BOT</button>
  </div>
  <div class="utility"><span id="badge">VS BOT</span><div><button id="mute" aria-label="Hidupkan atau matikan suara">🔊</button> <button id="reset" aria-label="Mulai ulang permainan">↺</button></div></div>
  <div class="log" id="log" aria-live="polite"></div>
  <p class="hint">Mendarat tepat di petak 100 untuk menang.<br>Dua pemain bergantian di satu HP, atau tantang bot.</p>
  <div class="foot">UMI · SELAMAT BERMAIN</div>
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
  for(var r=0;r<10;r++){
    for(var c=0;c<10;c++){
      var n=numAt(r,c),cell=document.createElement('div');
      cell.className='t c'+((r*3+c)%6);
      if(SNAKES[n])cell.className+=' snake';
      if(LADDERS[n])cell.className+=' ladder';
      if(n===100)cell.className+=' finish';
      if(n===1)cell.className+=' start';
      cell.setAttribute('data-cell',n);
      cell.title='Petak '+n+(SNAKES[n]?' — ular turun ke '+SNAKES[n]:LADDERS[n]?' — tangga naik ke '+LADDERS[n]:'');
      cell.innerHTML='<span class="num">'+n+'</span>'+(n===1?'<span class="stamp">MULAI</span>':n===100?'<svg class="crown" viewBox="0 0 40 30"><path d="M4 7l8 8 8-12 8 12 8-8-4 20H8Z" fill="#8b612f"/><path d="M8 23h24" stroke="#f2d792" stroke-width="2"/></svg>':'');
      cells[n]=cell;frag.appendChild(cell);
    }
  }
  board.appendChild(frag);drawLinks();
}
function center(n){var p=pos(n);return{x:p.col*10+5,y:p.row*10+5}}
function drawLinks(){
  var html='',k,a,b,i;
  // Printed wooden ladders: two rails, individual rungs, ink outline and grain.
  for(k in LADDERS){
    a=center(Number(k));b=center(LADDERS[k]);
    var dx=b.x-a.x,dy=b.y-a.y,len=Math.sqrt(dx*dx+dy*dy),angle=Math.atan2(dy,dx)*180/Math.PI-90;
    html+='<g class="ladder-art" data-from="'+k+'" data-to="'+LADDERS[k]+'" transform="translate('+a.x+' '+a.y+') rotate('+angle+')">';
    html+='<path d="M-1.35 0V'+len+' M1.35 0V'+len+'" stroke="#443624" stroke-width=".85" stroke-linecap="round"/>';
    html+='<path d="M-1.35 0V'+len+' M1.35 0V'+len+'" stroke="#c49b5f" stroke-width=".48" stroke-linecap="round"/>';
    for(i=1.5;i<len-.5;i+=2.35){html+='<path d="M-1.35 '+i+'H1.35" stroke="#5e4529" stroke-width=".7"/><path d="M-1.3 '+(i-.14)+'H1.3" stroke="#ecd39b" stroke-width=".28"/>';}
    html+='<path d="M-1.47 1V'+(len-1)+' M1.22 1V'+(len-1)+'" stroke="#f1d5a1" stroke-width=".13" opacity=".8"/></g>';
    html+='<path id="route-ladder-'+k+'" d="M'+a.x+' '+a.y+' L'+b.x+' '+b.y+'" fill="none" stroke="none"/>';
  }
  // Tapered sinuous bodies are filled silhouettes, not dashed connector lines.
  var palettes=[['#496c4f','#263f32','#d7d29b'],['#b36942','#683a27','#e9c890'],['#a14c3d','#5d3028','#e8b978'],['#7c8650','#424b30','#e4db9d']];
  var si=0;
  for(k in SNAKES){
    a=center(Number(k));b=center(SNAKES[k]);
    var vx=b.x-a.x,vy=b.y-a.y,L=Math.sqrt(vx*vx+vy*vy),ux=vx/L,uy=vy/L,nx=-uy,ny=ux;
    var amp=Math.min(2.1,L*.075),waves=L>42?3:L>22?2:1.25,pts=[],left=[],right=[];
    for(i=0;i<=100;i++){
      var t=i/100,offset=Math.sin(t*Math.PI*2*waves)*amp*Math.sin(Math.PI*t);
      pts.push({x:a.x+vx*t+nx*offset,y:a.y+vy*t+ny*offset});
    }
    for(i=0;i<pts.length;i++){
      var prev=pts[Math.max(0,i-1)],next=pts[Math.min(100,i+1)],tx=next.x-prev.x,ty=next.y-prev.y,tl=Math.sqrt(tx*tx+ty*ty)||1;
      var w=1.03*Math.pow(1-i/100,.63)+.04;
      left.push((pts[i].x-ty/tl*w).toFixed(2)+','+(pts[i].y+tx/tl*w).toFixed(2));
      right.push((pts[i].x+ty/tl*w).toFixed(2)+','+(pts[i].y-tx/tl*w).toFixed(2));
    }
    html+='<path id="route-snake-'+k+'" d="M'+pts.map(function(p){return p.x.toFixed(2)+','+p.y.toFixed(2)}).join(' L')+'" fill="none" stroke="none"/>';
    var pal=palettes[si++%palettes.length],d='M'+left.join(' L')+' L'+right.reverse().join(' L')+' Z';
    html+='<g class="snake-art" data-from="'+k+'" data-to="'+SNAKES[k]+'"><path d="'+d+'" fill="'+pal[0]+'" stroke="'+pal[1]+'" stroke-width=".24" stroke-linejoin="round"/>';
    for(i=5;i<94;i+=5){
      var p=pts[i],pp=pts[i-1],pn=pts[i+1],ax=pn.x-pp.x,ay=pn.y-pp.y,al=Math.sqrt(ax*ax+ay*ay)||1,ww=.62*Math.pow(1-i/100,.63);
      html+='<path d="M'+(p.x-ay/al*ww).toFixed(2)+' '+(p.y+ax/al*ww).toFixed(2)+' Q'+(p.x-ax/al*.38).toFixed(2)+' '+(p.y-ay/al*.38).toFixed(2)+' '+(p.x+ay/al*ww).toFixed(2)+' '+(p.y-ax/al*ww).toFixed(2)+'" fill="none" stroke="'+pal[2]+'" stroke-width=".28" opacity=".9"/>';
    }
    var rot=Math.atan2(pts[1].y-a.y,pts[1].x-a.x)*180/Math.PI;
    html+='<g transform="translate('+a.x+' '+a.y+') rotate('+rot+')"><path d="M-1.6 0H-2.7l-.65-.45 M-2.7 0l-.65 .45" fill="none" stroke="#813c2e" stroke-width=".18"/>';
    html+='<ellipse cx="-.2" cy="0" rx="1.8" ry="1.3" fill="'+pal[0]+'" stroke="'+pal[1]+'" stroke-width=".24"/>';
    html+='<path d="M-1.25 .3Q-.7 .7 .2 .6" fill="none" stroke="'+pal[1]+'" stroke-width=".13"/>';
    html+='<ellipse cx="-.7" cy="-.72" rx=".4" ry=".34" fill="#f9e8ad"/><ellipse cx="-.7" cy=".72" rx=".4" ry=".34" fill="#f9e8ad"/><circle cx="-.82" cy="-.72" r=".18" fill="#282a1d"/><circle cx="-.82" cy=".72" r=".18" fill="#282a1d"/>';
    html+='<path d="M.1-.55Q.8 0 .1 .55" fill="none" stroke="'+pal[2]+'" stroke-width=".25"/></g></g>';
  }
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
  var same=S.pos[0]===S.pos[1];
  tok1.style.left=(p1.col*10+(same?3.2:5))+'%';tok1.style.top=(p1.row*10+8)+'%';
  tok2.style.left=(p2.col*10+(same?7:5))+'%';tok2.style.top=(p2.row*10+8)+'%';
  tok1.setAttribute('aria-label','Pemain 1 di petak '+S.pos[0]);
  tok2.setAttribute('aria-label',(S.mode==='duo'?'Pemain 2':'Bot')+' di petak '+S.pos[1]);
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
function setDice(n,spin){var d=document.getElementById('die');d.setAttribute('data-face',n);d.setAttribute('aria-label','Dadu: '+n);d.classList.toggle('spin',Boolean(spin)&&n%2===0)}
function roll(){
  if(S.busy||S.over)return;
  if(S.mode==='bot'&&S.turn===1)return;
  S.busy=true;rollB.disabled=true;
  var who=S.turn;
  var dice=1+Math.floor(Math.random()*6);
  var faces=['','⚀','⚁','⚂','⚃','⚄','⚅'];
  var spin=0;
  var iv=setInterval(function(){
    setDice(1+Math.floor(Math.random()*6),true);rollB.textContent='Mengocok…';
    if(++spin>5){clearInterval(iv);startMove(who,dice)}
  },55);
  sRoll();
}
function startMove(who,dice){
  var from=S.pos[who],target=from+dice;
  S.stats[who].r++;
  log((who===0?'● Pemain 1':'● '+(S.mode==='duo'?'Pemain 2':'Bot'))+' dapat '+dice+' → '+(target>100?'butuh angka pas':'ke '+target));
  setDice(dice,false);rollB.textContent='Dadu · '+dice;
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
function animateLink(who,from,to,kind,done){
  var path=document.getElementById('route-'+kind+'-'+from),token=who===0?tok1:tok2;
  if(!path||!path.getTotalLength){S.pos[who]=to;placeTokens();done();return}
  var length=path.getTotalLength(),duration=Math.min(1800,Math.max(700,length*24)),start=null;
  token.classList.add('sliding');
  function frame(now){
    if(start===null)start=now;
    var t=Math.min(1,(now-start)/duration),ease=t*t*(3-2*t),p=path.getPointAtLength(length*ease);
    token.style.left=p.x+'%';token.style.top=(p.y+3)+'%';
    if(t<1)requestAnimationFrame(frame);
    else{S.pos[who]=to;token.classList.remove('sliding');placeTokens();done()}
  }
  requestAnimationFrame(frame);
}
function resolveTile(who,tile){
  if(SNAKES[tile]){
    var tail=SNAKES[tile];
    S.stats[who].s++;
    log('🐍 Kena ular di '+tile+'! Turun ke '+tail+'.');
    sSnake();
    cells[tile]&&cells[tile].classList.add('hit');
    setTimeout(function(){cells[tile]&&cells[tile].classList.remove('hit');animateLink(who,tile,tail,'snake',function(){finishTurn(who,tail)})},260);
    return;
  }
  if(LADDERS[tile]){
    var top=LADDERS[tile];
    S.stats[who].l++;
    log('🪜 Naik tangga dari '+tile+' ke '+top+'!');
    sLadder();
    cells[tile]&&cells[tile].classList.add('hit');
    setTimeout(function(){cells[tile]&&cells[tile].classList.remove('hit');animateLink(who,tile,top,'ladder',function(){finishTurn(who,top)})},260);
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
  rollB.textContent='Lempar dadu';
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
  var colors=['#b28d4c','#6d8760','#c4a86b','#a85b41','#e4d6b5'];
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
  modal.classList.remove('on');rollB.disabled=false;rollB.textContent='Lempar dadu';setDice(1,false);
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
