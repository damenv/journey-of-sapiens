(function(){
  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  var revealTargets = document.querySelectorAll('.reveal');
  var scenes = document.querySelectorAll('.scene');

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        e.target.classList.add('in');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealTargets.forEach(function(el){ io.observe(el); });

  var sceneIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.35 });
  scenes.forEach(function(s){ sceneIO.observe(s); });

  // Progress bar
  var bar = document.getElementById('progress-bar');
  function onScroll(){
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (scrolled / max) * 100 : 0;
    if (bar) bar.style.width = pct + '%';

    // Parallax on .bg.parallax
    document.querySelectorAll('.bg.parallax').forEach(function(el){
      var rect = el.parentElement.getBoundingClientRect();
      var vh = window.innerHeight;
      var offset = (rect.top + rect.height/2 - vh/2) * -0.08;
      el.style.transform = 'scale(1.08) translateY(' + offset + 'px)';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mouse-scrub video: mouse on the right = start, mouse on the left = end
  var video = document.getElementById('scrubVideo');
  if (video) {
    video.pause();
    var targetTime = 0;
    var currentTime = 0;
    var duration = 0;
    var rafId = null;

    function setDuration(){
      if (isFinite(video.duration) && video.duration > 0) {
        duration = video.duration;
      }
    }
    video.addEventListener('loadedmetadata', setDuration);
    video.addEventListener('durationchange', setDuration);

    function tick(){
      // ease toward target for smooth scrubbing
      currentTime += (targetTime - currentTime) * 0.15;
      if (Math.abs(targetTime - currentTime) < 0.001) {
        currentTime = targetTime;
      }
      try { video.currentTime = currentTime; } catch(e){}
      if (Math.abs(targetTime - currentTime) > 0.001) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    window.addEventListener('mousemove', function(e){
      if (!duration) return;
      var w = window.innerWidth || 1;
      // right edge -> 0 (start), left edge -> duration (end)
      var progress = 1 - (e.clientX / w);
      progress = Math.max(0, Math.min(1, progress));
      targetTime = progress * duration;
      if (rafId === null) rafId = requestAnimationFrame(tick);
    }, { passive: true });
  }
})();
