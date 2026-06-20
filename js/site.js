const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}
}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

const host=document.getElementById('ribbonHost');
const svg=document.getElementById('ribbonSvg');
const pPath=document.getElementById('paintPath');
const gPath=document.getElementById('ghostPath');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

function buildRibbon(){
  const H=document.documentElement.scrollHeight;
  const W=innerWidth;
  host.style.height=H+'px';
  svg.setAttribute('width',W);svg.setAttribute('height',H);
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const x=f=>W*f;
  // weave the paint line through these sections, in their actual vertical order
  // (sorted by offsetTop so the ribbon stays correct regardless of section order)
  const ids=['mission','story','bio','globe','safety','local','world','brands','proof','renew'];
  const pts=ids.map(id=>document.getElementById(id)).filter(Boolean).map(el=>el.offsetTop).sort((a,b)=>a-b);
  let d=`M ${x(.82)} ${innerHeight*.18}`;
  let prevY=innerHeight*.18;
  pts.forEach((yy,i)=>{
    const left=i%2===0;            // alternate sides: mission left, bio right, …
    const tx=x(left?.12:.88);
    const ty=yy+150;
    if(i===0){d+=` C ${x(1.02)} ${innerHeight*.7}, ${x(.25)} ${(prevY+ty)/2}, ${tx} ${ty}`}
    else{d+=` S ${x(left?.04:.96)} ${(prevY+ty)/2+120}, ${tx} ${ty}`}
    prevY=ty;
  });
  const elF=document.getElementById('contact');
  const yF=elF?elF.offsetTop:prevY;
  d+=` S ${x(.3)} ${(prevY+yF)/2+120}, ${x(.5)} ${yF+200}`;
  pPath.setAttribute('d',d);gPath.setAttribute('d',d);
  pPath.setAttribute('pathLength','1');
  pPath.style.strokeDasharray='1';
  drawRibbon();
}
function drawRibbon(){
  const prog=Math.min(1,(scrollY+innerHeight*.6)/document.documentElement.scrollHeight);
  pPath.style.strokeDashoffset=reduced?0:String(1-prog);
}
addEventListener('scroll',drawRibbon,{passive:true});
addEventListener('resize',()=>requestAnimationFrame(buildRibbon));
addEventListener('load',buildRibbon);
buildRibbon();

/* click-to-play film — loads the YouTube embed only on user click,
   which avoids YouTube's "confirm you're not a bot" gate on autoplay embeds */
(function(){
  const fp=document.getElementById('filmPlay');
  if(!fp) return;
  fp.addEventListener('click',function(){
    const id=fp.dataset.yt;
    const ifr=document.createElement('iframe');
    ifr.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    ifr.title='Baril — To sustain our future, rich in colour';
    ifr.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
    ifr.setAttribute('allowfullscreen','');
    ifr.referrerPolicy='strict-origin-when-cross-origin';
    const bleed=fp.closest('.film-bleed')||fp.parentNode;
    bleed.innerHTML='';
    bleed.appendChild(ifr);
  });
})();

/* collapsible history timeline */
(function(){
  const btn=document.getElementById('histBtn'),tl=document.getElementById('histTimeline');
  if(!btn||!tl)return;
  btn.addEventListener('click',()=>{
    const open=tl.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
})();
