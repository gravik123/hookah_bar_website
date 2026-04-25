// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE NAV ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── HERO IMAGE KEN BURNS ──
const heroBg = document.querySelector('.hero-bg-img');
if (heroBg) {
  const img = new Image();
  img.src = 'https://thumbs.dreamstime.com/b/luxurious-lounge-bar-2764530.jpg';
  img.onload = () => heroBg.classList.add('loaded');
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
    setTimeout(() => el.classList.add('visible'), delay);
    observer.unobserve(el);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card').forEach(el => observer.observe(el));

// ── FLAVOR DATA ──
const flavors = {
  classics: [
    { emoji: '🌿', name: 'Double Apple',     desc: 'A timeless blend of crisp green apple and rich red apple with a hint of anise.', tag: 'Bestseller' },
    { emoji: '🍑', name: 'Peach Dream',      desc: 'Sweet sun-ripened peach with a smooth, creamy finish.',                         tag: 'Crowd Favorite' },
    { emoji: '🍇', name: 'Grape Royale',     desc: 'Deep, dark grape flavor with a lush, slightly tart undertone.',                 tag: 'Classic' },
    { emoji: '🌹', name: 'Rose Garden',      desc: 'Delicate floral rose with a refreshing coolness that lingers.',                 tag: 'Elegant' },
  ],
  fruity: [
    { emoji: '🍓', name: 'Strawberry Bliss', desc: 'Fresh, juicy strawberry burst layered with a touch of cream.',                 tag: 'Sweet' },
    { emoji: '🥭', name: 'Mango Tango',      desc: 'Tropical mango with a zingy citrus kick and a smooth exhale.',                 tag: 'Tropical' },
    { emoji: '🍉', name: 'Watermelon Rush',  desc: 'Cool, refreshing watermelon with an icy finish perfect for summer.',           tag: 'Refreshing' },
    { emoji: '🍋', name: 'Lemon Mint',       desc: 'Bright lemon zest balanced with garden-fresh mint and a cool breeze.',         tag: 'Zesty' },
  ],
  exotic: [
    { emoji: '🌺', name: 'Jasmine Nights',   desc: 'Exotic jasmine tea infused with honey and a whisper of vanilla.',              tag: 'Exotic' },
    { emoji: '🫐', name: 'Blueberry Zen',    desc: 'Wild blueberry with a subtle earthiness and a clean, smooth finish.',          tag: 'Artisan' },
    { emoji: '🧁', name: 'Cardamom Dream',   desc: 'Warm Middle Eastern spice blend with cardamom, clove, and rose.',             tag: 'Spiced' },
    { emoji: '🍫', name: 'Cacao Noir',       desc: 'Rich dark chocolate with hints of coffee and a velvety smooth exhale.',       tag: 'Indulgent' },
  ],
  signature: [
    { emoji: '⭐', name: 'Classic Special',   desc: 'Our signature house blend — a secret recipe passed down and perfected.',      tag: 'House Blend' },
    { emoji: '🌙', name: 'Midnight Mirage',  desc: 'Berry, mint, and a touch of spice — complex, mysterious, unforgettable.',     tag: 'Signature' },
    { emoji: '✨', name: 'Golden Hour',       desc: 'Honey, saffron, and citrus — a golden blend for golden memories.',           tag: 'Premium' },
    { emoji: '🔥', name: 'Inferno Twist',    desc: 'Cinnamon fire, chili, and cooling mint — bold, daring, and addictive.',       tag: 'Bold' },
  ],
};

function renderFlavors(tab) {
  const grid = document.getElementById('flavorGrid');
  grid.innerHTML = '';
  flavors[tab].forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'flavor-card';
    card.style.animationDelay = `${i * 80}ms`;
    card.innerHTML = `
      <span class="flavor-emoji">${f.emoji}</span>
      <h3 class="flavor-name">${f.name}</h3>
      <p class="flavor-desc">${f.desc}</p>
      <span class="flavor-tag">${f.tag}</span>
    `;
    grid.appendChild(card);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFlavors(btn.dataset.tab);
  });
});

renderFlavors('classics');

// ── RESERVATION FORM ──
document.getElementById('reservationForm').addEventListener('submit', e => {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.classList.add('visible');
  setTimeout(() => success.classList.remove('visible'), 5000);
  e.target.reset();
});
