const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const points = [];
  const count = 40;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    points.length = 0;
    for (let i = 0; i < count; i += 1) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.4
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(147, 197, 253, 0.6)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => {
    resize();
    init();
  });
}
