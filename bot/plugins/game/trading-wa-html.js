/* By AlzRiss - Usanagi Umi AI
 *
 * HTML game UMI TRADE untuk WhatsApp (rich message).
 *
 * Dibuat mandiri: tanpa aset eksternal, tanpa internet. Semua harga dihitung
 * di HP pengguna dan posisi disimpan di localStorage, jadi tetap jalan di dalam
 * tampilan rich message WhatsApp. Tidak ada sesi boost 02.00 — pasar bergerak
 * 24 jam murni dari derau harga.
 */

export const TRADING_WA_HTML = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>UMI TRADE</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;font-family:'Segoe UI',Roboto,Arial,sans-serif}
body{background:#070b14;color:#e8eefb;padding:10px 10px 18px;font-size:13px}
#app{max-width:430px;margin:0 auto}
.hdr{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
.logo{display:flex;align-items:center;gap:7px;font-weight:800;font-size:15px;letter-spacing:.3px}
.dot{width:26px;height:26px;border-radius:8px;background:linear-gradient(135deg,#22d3a6,#0e8f6f);display:flex;align-items:center;justify-content:center;font-size:13px}
.small{font-size:9px;color:#7c8aa5;font-weight:600;letter-spacing:1.4px}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:9px}
.card{background:#0e1524;border:1px solid #1b2740;border-radius:12px;padding:8px 10px}
.card i{display:block;font-style:normal;font-size:9px;letter-spacing:1px;color:#7c8aa5;font-weight:700;margin-bottom:3px}
.card b{font-size:16px;font-variant-numeric:tabular-nums}
.up{color:#26e0a5!important}.down{color:#ff6b81!important}
.tabs{display:flex;gap:6px;margin-bottom:9px}
.tab{flex:1;text-align:center;padding:7px 0;border-radius:10px;background:#0e1524;border:1px solid #1b2740;font-weight:700;font-size:11px;color:#8fa0bd;cursor:pointer}
.tab.on{background:linear-gradient(135deg,#123a5c,#0d2740);border-color:#2b6ea8;color:#8fd8ff}
.row{display:flex;align-items:center;gap:8px;padding:8px;background:#0e1524;border:1px solid #1b2740;border-radius:11px;margin-bottom:6px;cursor:pointer}
.row.sel{border-color:#2b6ea8;background:#102a44}
.row .q{flex:1;min-width:0}
.row .q b{font-size:12.5px;display:block}
.row .q span{font-size:9.5px;color:#7c8aa5;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row .p{text-align:right;font-variant-numeric:tabular-nums}
.row .p b{font-size:12.5px;display:block}
.row .p span{font-size:9.5px;font-weight:700}
.spark{width:56px;height:22px;flex:none}
.panel{background:#0e1524;border:1px solid #1b2740;border-radius:12px;padding:10px;margin-bottom:9px}
.panel h3{font-size:12px;margin-bottom:7px;color:#9fb4d6;letter-spacing:.4px}
.qtybar{display:flex;gap:6px;margin:7px 0}
.qtybar button{flex:1;padding:7px 0;border-radius:9px;border:1px solid #24344f;background:#122036;color:#cfe2ff;font-weight:800;font-size:11px;cursor:pointer}
.qtybar button:active{filter:brightness(1.4)}
input[type=number]{width:100%;padding:9px;border-radius:9px;border:1px solid #24344f;background:#0a1220;color:#e8eefb;font-size:15px;font-weight:800;text-align:center;font-variant-numeric:tabular-nums}
input[type=number]:focus{outline:none;border-color:#2b6ea8}
.acts{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:7px}
.acts button{padding:11px 0;border:none;border-radius:11px;font-weight:900;font-size:12.5px;letter-spacing:.4px;cursor:pointer;color:#04220f}
.buy{background:linear-gradient(#2ee6a7,#12a877)}
.sell{background:linear-gradient(#ff8a9a,#e04b63);color:#2a0410}
.acts button:active{transform:translateY(1px);filter:brightness(1.1)}
.hold{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px dashed #1b2740;font-size:11.5px}
.hold:last-child{border-bottom:none}
.hold .n{color:#9fb4d6}
.toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:#123a5c;border:1px solid #2b6ea8;color:#d8ecff;padding:8px 14px;border-radius:10px;font-size:11.5px;font-weight:700;opacity:0;transition:opacity .18s;pointer-events:none;max-width:92%}
.toast.show{opacity:1}
.foot{text-align:center;font-size:9px;color:#5d6b85;line-height:1.6;margin-top:6px}
.mini{display:flex;justify-content:space-between;font-size:10.5px;color:#8fa0bd;margin-top:6px}
#reset{background:none;border:1px solid #24344f;color:#8fa0bd;padding:6px 10px;border-radius:9px;font-size:10px;font-weight:700;cursor:pointer}
</style>
</head>
<body>
<div id="app">
  <div class="hdr">
    <div class="logo"><span class="dot">📈</span><div>UMI TRADE<small class="small">PASAR SAHAM · WA MODE</small></div></div>
    <button id="reset">RESET</button>
  </div>

  <div class="cards">
    <div class="card"><i>KAS</i><b id="cash">$AS 0</b></div>
    <div class="card"><i>TOTAL ASET</i><b id="equity">$AS 0</b></div>
  </div>

  <div class="tabs">
    <div class="tab on" data-tab="market">PASAR</div>
    <div class="tab" data-tab="pf">PORTOFOLIO</div>
  </div>

  <div id="viewMarket">
    <div id="stocks"></div>
  </div>

  <div id="viewPf" style="display:none">
    <div class="panel">
      <h3>KEPEMILIKAN SAHAM</h3>
      <div id="holds"><div class="hold"><span class="n">Belum ada saham.</span><span>-</span></div></div>
      <div class="mini"><span>P/L belum terealisasi</span><b id="pnl">$AS 0</b></div>
    </div>
  </div>

  <div class="panel">
    <h3 id="selName">PILIH SAHAM</h3>
    <div class="mini" style="margin:0 0 6px"><span id="selPrice">-</span><span id="selHold">dimiliki: 0 lot</span></div>
    <input id="qty" type="number" min="1" step="1" inputmode="numeric" value="1">
    <div class="qtybar">
      <button data-q="1">1</button>
      <button data-q="5">5</button>
      <button data-q="10">10</button>
      <button data-q="max">MAKS</button>
    </div>
    <div class="acts">
      <button class="buy" id="btnBuy">BELI</button>
      <button class="sell" id="btnSell">JUAL</button>
    </div>
    <div class="mini"><span>Total order</span><b id="total">$AS 0</b></div>
  </div>

  <div class="foot">Harga bergerak tiap 3 detik · tanpa sesi boost · data tersimpan di HP kamu<br>By AlzRiss - Usanagi Umi AI</div>
</div>
<div class="toast" id="toast"></div>
<script>
(function(){
"use strict";
/* ── pasar: 10 saham, derau deterministik (tanpa boost) ── */
var TICK=3000, TZ=8*3600000;
var SAHAM=[
 {sym:'UMI',name:'Usanagi Umi Corp',base:1.24},{sym:'JDB',name:'Jadibot Studio',base:2.05},
 {sym:'WAG',name:'WhatsApp Group Inc',base:0.86},{sym:'PNL',name:'Panel Hosting',base:1.62},
 {sym:'GME',name:'Umi Games',base:0.54},{sym:'DAN',name:'DANA Finance',base:3.10},
 {sym:'SRV',name:'Server VPS',base:0.94},{sym:'BOT',name:'Bot AI',base:1.78},
 {sym:'TRD',name:'Trader $AS',base:0.42},{sym:'HBG',name:'Bandwidth Hosting',base:1.10}
];
var BY={}; SAHAM.forEach(function(s){BY[s.sym]=s});
function frac(n){var v=Math.sin(n*12.9898)*43758.5453;return v-Math.floor(v)}
function noise(seed,x){var i=Math.floor(x),f=x-i,a=frac(i*1.7+seed),b=frac((i+1)*1.7+seed),u=f*f*(3-2*f);return a+(b-a)*u}
function fnv(t){var h=2166136261;for(var i=0;i<t.length;i++){h^=t.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0)%100000}
function r2(n){return Math.round(n*100)/100}
function tickNow(){return Math.floor(Date.now()/TICK)}
function priceAt(sym,tick){
  var it=BY[sym]; if(!it) return 1;
  if(tick===undefined) tick=tickNow();
  var s=fnv(sym);
  var trend=(noise(s,tick/4800)-0.5)*0.30;
  var swing=(noise(s+13,tick/240)-0.5)*0.13;
  var micro=(noise(s+41,tick/8)-0.5)*0.015;
  return Math.max(0.05,it.base*(1+trend+swing+micro));
}
function quote(sym,tick){
  tick=tick===undefined?tickNow():tick;
  var price=priceAt(sym,tick), prev=priceAt(sym,tick-28800);
  var hi=price,lo=price,spark=[];
  for(var i=60;i>=0;i--){var v=priceAt(sym,tick-i);if(v>hi)hi=v;if(v<lo)lo=v;if(i%3===0)spark.push(r2(v))}
  var ch=price-prev;
  return {sym:sym,name:BY[sym].name,price:r2(price),pct:r2(ch/prev*100),change:r2(ch),spark:spark};
}

/* ── penyimpanan ── */
var KEY='umi-wa-trade-v1';
var state=load();
function load(){
  try{var d=JSON.parse(localStorage.getItem(KEY));if(d&&typeof d.cash==='number'&&d.holds)return d}catch(e){}
  return {cash:1000,holds:{},trades:0,started:Date.now()};
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}

/* ── format & util ── */
function money(n){return (Math.round(n*100)/100).toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2})}
function sgn(n){return (n>=0?'+':'')+money(n)}
function $(id){return document.getElementById(id)}
var selected='UMI', lastTick=-1;
var toastTimer=null;
function toast(msg){var el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(function(){el.classList.remove('show')},1700)}

/* ── render ── */
function sparkSvg(vals,up){
  var min=Math.min.apply(null,vals),max=Math.max.apply(null,vals),span=(max-min)||1;
  var pts=vals.map(function(v,i){return ((i/(vals.length-1))*54+1).toFixed(1)+','+(20-((v-min)/span)*17).toFixed(1)}).join(' ');
  var color=up?'#26e0a5':'#ff6b81';
  return '<svg class="spark" viewBox="0 0 56 22"><polyline fill="none" stroke="'+color+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" points="'+pts+'"/></svg>';
}
function renderStocks(){
  var html='';
  SAHAM.forEach(function(s){
    var q=quote(s.sym);
    html+='<div class="row'+(s.sym===selected?' sel':'')+'" data-sym="'+s.sym+'">'+
      '<div class="q"><b>'+s.sym+'</b><span>'+s.name+'</span></div>'+
      sparkSvg(q.spark,q.pct>=0)+
      '<div class="p"><b>$AS '+money(q.price)+'</b><span class="'+(q.pct>=0?'up':'down')+'">'+sgn(q.pct)+'%</span></div>'+
    '</div>';
  });
  $('stocks').innerHTML=html;
  Array.prototype.forEach.call($('stocks').querySelectorAll('.row'),function(el){
    el.addEventListener('click',function(){selected=el.getAttribute('data-sym');renderStocks();renderPanel();});
  });
}
function portfolio(){
  var value=0,pnl=0;
  Object.keys(state.holds).forEach(function(sym){
    var h=state.holds[sym]; if(!h||!h.lot) return;
    var p=priceAt(sym);
    value+=p*h.lot;
    pnl+=(p-h.avg)*h.lot;
  });
  return {value:value,pnl:pnl};
}
function renderCards(){
  var pf=portfolio();
  $('cash').textContent='$AS '+money(state.cash);
  $('equity').textContent='$AS '+money(state.cash+pf.value);
  $('pnl').textContent=sgn(pf.pnl);
  $('pnl').className=pf.pnl>=0?'up':'down';
}
function renderPanel(){
  var q=quote(selected);
  var h=state.holds[selected]||{lot:0,avg:0};
  $('selName').textContent=selected+' · '+q.name;
  $('selPrice').innerHTML='$AS '+money(q.price)+' <span class="'+(q.pct>=0?'up':'down')+'">'+sgn(q.pct)+'%</span>';
  $('selHold').textContent='dimiliki: '+h.lot+' lot · avg $AS '+money(h.avg||0);
  updateTotal();
}
function renderHolds(){
  var rows='',any=false;
  Object.keys(state.holds).forEach(function(sym){
    var h=state.holds[sym]; if(!h||!h.lot) return;
    any=true;
    var p=priceAt(sym), val=p*h.lot, pl=(p-h.avg)*h.lot;
    rows+='<div class="hold"><span class="n">'+sym+' · '+h.lot+' lot</span><span>$AS '+money(val)+' <b class="'+(pl>=0?'up':'down')+'">'+sgn(pl)+'</b></span></div>';
  });
  $('holds').innerHTML=rows||'<div class="hold"><span class="n">Belum ada saham.</span><span>-</span></div>';
}
function qtyValue(){
  var v=parseInt($('qty').value,10);
  return isFinite(v)&&v>0?v:1;
}
function updateTotal(){
  $('total').textContent='$AS '+money(qtyValue()*priceAt(selected));
}

/* ── aksi ── */
function buy(){
  var qy=qtyValue(), price=priceAt(selected), cost=price*qy;
  if(cost>state.cash+1e-9){toast('Saldo kurang. Butuh $AS '+money(cost)+', kas $AS '+money(state.cash));return}
  var h=state.holds[selected]||{lot:0,avg:0};
  var total=h.lot+qy;
  h.avg=(h.avg*h.lot+price*qy)/total;
  h.lot=total;
  state.holds[selected]=h;
  state.cash=r2(state.cash-cost);
  state.trades++;
  save();refresh('✅ Beli '+qy+' '+selected+' @ $AS '+money(price));
}
function sell(){
  var qy=qtyValue(), price=priceAt(selected);
  var h=state.holds[selected]||{lot:0,avg:0};
  if(h.lot<qy){toast('Saham tidak cukup. Kamu punya '+h.lot+' lot.');return}
  h.lot-=qy;
  state.cash=r2(state.cash+price*qy);
  state.trades++;
  if(h.lot<=0) delete state.holds[selected]; else state.holds[selected]=h;
  save();refresh('✅ Jual '+qy+' '+selected+' @ $AS '+money(price));
}
function refresh(msg){
  renderCards();renderHolds();renderPanel();updateTotal();
  if(msg) toast(msg);
}

/* ── event ── */
$('btnBuy').addEventListener('click',buy);
$('btnSell').addEventListener('click',sell);
$('qty').addEventListener('input',updateTotal);
Array.prototype.forEach.call(document.querySelectorAll('.qtybar button'),function(b){
  b.addEventListener('click',function(){
    var q=b.getAttribute('data-q');
    if(q==='max'){
      var price=priceAt(selected);
      $('qty').value=Math.max(1,Math.floor(state.cash/price));
    } else $('qty').value=q;
    updateTotal();
  });
});
Array.prototype.forEach.call(document.querySelectorAll('.tab'),function(t){
  t.addEventListener('click',function(){
    Array.prototype.forEach.call(document.querySelectorAll('.tab'),function(x){x.classList.remove('on')});
    t.classList.add('on');
    var tab=t.getAttribute('data-tab');
    $('viewMarket').style.display=tab==='market'?'block':'none';
    $('viewPf').style.display=tab==='pf'?'block':'none';
    if(tab==='pf'){renderHolds();renderCards()}
  });
});
var resetArmed=false;
$('reset').addEventListener('click',function(){
  // confirm() tidak selalu tersedia di penampil rich WhatsApp → pakai ketuk dua kali.
  if(!resetArmed){resetArmed=true;toast('Ketuk RESET sekali lagi untuk menghapus akun.');setTimeout(function(){resetArmed=false},3000);return}
  resetArmed=false;
  state={cash:1000,holds:{},trades:0,started:Date.now()};
  save();refresh('Akun direset ke $AS 1.000.');
});

/* ── tick 3 detik ── */
renderStocks();refresh();
setInterval(function(){
  var t=tickNow();
  if(t!==lastTick){lastTick=t;renderStocks();renderCards();renderHolds();renderPanel()}
},TICK);
})();
</script>
</body>
</html>`

export default TRADING_WA_HTML
