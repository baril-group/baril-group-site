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
  // weave the paint line through every section
  const ids=['about','dualcure','thinlayer','bio','corrosion','markets','ranges','proof','data'];
  const pts=ids.map(id=>document.getElementById(id)).filter(Boolean).map(el=>el.offsetTop);
  let d=`M ${x(.82)} ${innerHeight*.18}`;
  let prevY=innerHeight*.18;
  pts.forEach((yy,i)=>{
    const left=i%2===0;            // alternate sides
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
window.buildRibbon=buildRibbon;
addEventListener('scroll',drawRibbon,{passive:true});
addEventListener('resize',()=>requestAnimationFrame(buildRibbon));
addEventListener('load',buildRibbon);
buildRibbon();
