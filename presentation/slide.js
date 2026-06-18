(function(){
  var stage = document.getElementById('stage');
  var body = document.body;

  // play this slide's single video
  var v = stage.querySelector('video');
  if(v){ var p = v.play(); if(p && p.catch) p.catch(function(){}); }

  // accent colour
  if(body.dataset.accent){ stage.style.setProperty('--accent', body.dataset.accent); }

  // position dots
  var dots = document.getElementById('dots');
  if(dots){
    var idx = parseInt(body.dataset.index || '0', 10);
    var total = parseInt(body.dataset.total || '8', 10);
    for(var k=0;k<total;k++){ var d=document.createElement('i'); if(k===idx) d.className='on'; dots.appendChild(d); }
  }

  // trigger entrance animation
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ body.classList.add('go'); }); });

  // optional self-advance to the next slide URL: add ?auto=10 (seconds)
  var params = new URLSearchParams(location.search);
  var auto = parseFloat(params.get('auto'));
  var next = body.dataset.next;
  var prev = body.dataset.prev;
  var bar = document.getElementById('progress');

  if(auto > 0 && next){
    if(bar){
      bar.classList.add('run');
      bar.style.transitionDuration = (auto*1000) + 'ms';
      requestAnimationFrame(function(){ bar.style.width = '100%'; });
    }
    setTimeout(function(){ location.href = '../' + next + '/?auto=' + auto; }, auto*1000);
  }

  // kiosk niceties
  function fs(){ try{ if(document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function(){}); }catch(e){} }
  stage.addEventListener('click', function(){
    try{
      if(!document.fullscreenElement){ fs(); }
      else if(document.exitFullscreen){ document.exitFullscreen(); }
    }catch(e){}
  });
  document.addEventListener('keydown', function(e){
    var a = auto>0 ? ('?auto='+auto) : '';
    if(e.key==='ArrowRight' && next){ location.href = '../'+next+'/'+a; }
    else if(e.key==='ArrowLeft' && prev){ location.href = '../'+prev+'/'+a; }
    else if(e.key.toLowerCase()==='f'){ fs(); }
  });

  // keep playing after visibility/cast changes
  document.addEventListener('visibilitychange', function(){
    if(!document.hidden && v){ var q=v.play(); if(q && q.catch) q.catch(function(){}); }
  });
})();
