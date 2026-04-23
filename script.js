/* ── CURSOR GLOW ── */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
});

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── MOBILE NAV TOGGLE ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── FLAVOR DATA ── */
const flavors = {
  classics: [
    { emoji: '🍃', name: 'Two Apples', desc: 'The timeless Middle Eastern classic. Bold, rich, and endlessly satisfying.', tag: 'Bestseller' },
    { emoji: '🌿', name: 'Mint Rush', desc: 'Ice-cold spearmint that refreshes every exhale with crisp, clean coolness.', tag: 'Refreshing' },
    { emoji: '🍯', name: 'Honey Dew', desc: 'Sweet honeydew melon blended with a hint of tropical nectar.', tag: 'Sweet' },
    { emoji: '🌸', name: 'Rose Water', desc: 'Delicate floral rose with a subtle sweetness inspired by Persian gardens.', tag: 'Floral' },
    { emoji: '🍋', name: 'Lemon Mint', desc: 'Zesty citrus lemon paired with cool mint for the perfect balance.', tag: 'Citrus' },
    { emoji: '☕', name: 'Café Mocha', desc: 'Rich espresso notes with creamy chocolate undertones. A late-night favorite.', tag: 'Rich' },
  ],
  fruity: [
    { emoji: '🍓', name: 'Wild Strawberry', desc: 'Ripe strawberry bursting with natural sweetness and fruity depth.', tag: 'Fruity' },
    { emoji: '🥭', name: 'Mango Tango', desc: 'Tropical Alphonso mango with a hint of chili for an exotic kick.', tag: 'Tropical' },
    { emoji: '🍒', name: 'Black Cherry', desc: 'Dark, sweet cherries with a subtle tartness and lingering finish.', tag: 'Bold' },
    { emoji: '🫐', name: 'Blueberry Blast', desc: 'Fresh blueberry with notes of vanilla cream for a dessert-like session.', tag: 'Sweet' },
    { emoji: '🍑', name: 'Peach Paradise', desc: 'Sun-ripened peach with a light floral sweetness that lingers beautifully.', tag: 'Light' },
    { emoji: '🍍', name: 'Pineapple Breeze', desc: 'Bright pineapple with a coconut whisper — a beachside escape in a bowl.', tag: 'Tropical' },
  ],
  exotic: [
    { emoji: '🌺', name: 'Hibiscus Dream', desc: 'Tart hibiscus flower with berry undertones and a floral finish.', tag: 'Exotic' },
    { emoji: '🫚', name: 'Oud & Amber', desc: 'Inspired by Arabian incense — earthy, woody, and deeply luxurious.', tag: 'Premium' },
    { emoji: '🍵', name: 'Jasmine Green Tea', desc: 'Delicate green tea florals with a smooth, slightly grassy sweetness.', tag: 'Herbal' },
    { emoji: '🥥', name: 'Coconut Lychee', desc: 'Creamy coconut meets the floral sweetness of fresh lychee fruit.', tag: 'Tropical' },
    { emoji: '🌙', name: 'Midnight Pomegranate', desc: 'Deep pomegranate with hints of dark berry and a wine-like complexity.', tag: 'Bold' },
    { emoji: '🌶️', name: 'Dragon Spice', desc: 'Sweet mango base ignited with a ginger-chili edge for the adventurous.', tag: 'Spicy' },
  ],
  signature: [
    { emoji: '✦', name: 'Classic Gold', desc: 'Our house blend — a guarded recipe of citrus, honey, and cool mint. Pure perfection.', tag: 'House Blend' },
    { emoji: '👑', name: 'Royal Purple', desc: 'Grape, lavender, and blackcurrant layered with a chilled menthol finish.', tag: 'Exclusive' },
    { emoji: '🔥', name: 'Saint Peters Heat', desc: 'Tropical fruit medley with a slow-building cinnamon warmth. Our city, our blend.', tag: 'Local Favorite' },
    { emoji: '🌊', name: 'Blue Lagoon', desc: 'Blue raspberry, passion fruit, and cool menthol — refreshingly electric.', tag: 'Popular' },
    { emoji: '🍫', name: 'Dark Ritual', desc: 'Dark chocolate, espresso, and vanilla cream for a rich dessert experience.', tag: 'Dessert' },
    { emoji: '🌅', name: 'Sunrise Blend', desc: 'Orange, peach, and guava with a honey sweetness — perfect for evening sessions.', tag: 'Seasonal' },
  ]
};

/* ── RENDER FLAVORS ── */
let activeTab = 'classics';
const flavorGrid = document.getElementById('flavorGrid');

function renderFlavors(tab) {
  flavorGrid.innerHTML = '';
  flavors[tab].forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    card.style.animationDelay = `${i * 80}ms`;
    card.innerHTML = `
      <span class="flavor-emoji">${f.emoji}</span>
      <div class="flavor-name">${f.name}</div>
      <div class="flavor-desc">${f.desc}</div>
      <span class="flavor-tag">${f.tag}</span>
    `;
    flavorGrid.appendChild(card);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    renderFlavors(activeTab);
  });
});

renderFlavors('classics');

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.exp-card').forEach(el => revealObserver.observe(el));

/* ── RESERVATION FORM ── */
document.getElementById('reservationForm').addEventListener('submit', e => {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('visible');
  e.target.reset();
  setTimeout(() => success.classList.remove('visible'), 6000);
});

/* ── SMOKE CANVAS ── */
const canvas = document.getElementById('smokeCanvas');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() { this.reset(); }

  reset() {
    this.x    = Math.random() * canvas.width;
    this.y    = canvas.height + 50;
    this.size = Math.random() * 80 + 20;
    this.speedY = -(Math.random() * 0.4 + 0.1);
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.08 + 0.02;
    this.life = 0;
    this.maxLife = Math.random() * 300 + 200;
    this.hue  = Math.random() < 0.5 ? 45 : 280; // gold or purple
  }

  update() {
    this.x    += this.speedX;
    this.y    += this.speedY;
    this.size += 0.2;
    this.life++;
    if (this.life > this.maxLife) this.reset();
  }

  draw() {
    const progress = this.life / this.maxLife;
    const alpha = this.opacity * Math.sin(progress * Math.PI);
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    grad.addColorStop(0, `hsla(${this.hue}, 50%, 50%, ${alpha})`);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = Array.from({ length: 25 }, () => new Particle());

function animateSmoke() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateSmoke);
}

animateSmoke();

/* ── SMOOTH ANCHOR OFFSET ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});
