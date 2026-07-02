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
})();
