/* ══════════════════════════════════════════════════════
   KOMAL RANI PORTFOLIO — script.js
   ✏️  EDIT PORTFOLIO_DATA and SERVICES_DATA below to
       update your site content instantly.
══════════════════════════════════════════════════════ */

/* ────────────────────────────────────────────────────
   📦  PORTFOLIO DATA  — edit this object freely
   ─────────────────────────────────────────────────────
   image: path to your image file  e.g. "images/project1.jpg"
          use "" or null to show a color placeholder with emoji
   emoji: placeholder icon shown when no image is set
────────────────────────────────────────────────────── */
const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "AI Summit Poster",
    category: "Social Media Design",
    description: "Futuristic event poster with AI-generated visual elements and bold typography.",
    image: "",
    emoji: "🤖",
    color: "linear-gradient(135deg, #1a0533, #3b0a6e, #7c3aed)"
  },
  {
    id: 2,
    title: "Tech Talks Thumbnail",
    category: "YouTube Thumbnail",
    description: "High-CTR YouTube thumbnail designed to maximize click-through rates.",
    image: "",
    emoji: "🎬",
    color: "linear-gradient(135deg, #0d0d0d, #1a1a2e, #16213e)"
  },
  {
    id: 3,
    title: "Sneakers Promo Banner",
    category: "Banner Design",
    description: "Premium product promotional banner with neon glow effects and bold layout.",
    image: "",
    emoji: "👟",
    color: "linear-gradient(135deg, #0a0a1a, #1e0550, #5b21b6)"
  },
  {
    id: 4,
    title: "Beauty Product Carousel",
    category: "Instagram Carousel",
    description: "Elegant Instagram carousel for a beauty brand with soft gradients and clean layout.",
    image: "",
    emoji: "💄",
    color: "linear-gradient(135deg, #1a0020, #4a0060, #ec4899)"
  },
  {
    id: 5,
    title: "Cyber Monday Sale Post",
    category: "Social Media Design",
    description: "High-impact sale post with cyberpunk aesthetic and eye-catching typography.",
    image: "",
    emoji: "💻",
    color: "linear-gradient(135deg, #001a0d, #004d2e, #06b6d4)"
  }
];

/* ────────────────────────────────────────────────────
   ⚙️  SERVICES DATA — edit this object freely
────────────────────────────────────────────────────── */
const SERVICES_DATA = [
  {
    id: 1,
    icon: "📱",
    title: "Social Media Design",
    description: "Engaging posts & ad creatives that build brand presence and drive engagement.",
    link: "#contact"
  },
  {
    id: 2,
    icon: "🎠",
    title: "Instagram Carousels",
    description: "Swipe-stopping carousels that inform, engage & convert your audience.",
    link: "#contact"
  },
  {
    id: 3,
    icon: "▶️",
    title: "YouTube Thumbnails",
    description: "High-converting thumbnails that increase CTR and grow your channel.",
    link: "#contact"
  },
  {
    id: 4,
    icon: "🖼️",
    title: "Banner Design",
    description: "Professional banners for web, ads & promotions that capture attention.",
    link: "#contact"
  },
  {
    id: 5,
    icon: "✨",
    title: "AI Image Generation",
    description: "Unique AI-generated images tailored to your brand's specific needs.",
    link: "#contact"
  }
];

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initParticles();
  initNavbar();
  initHamburger();
  renderServices();
  renderPortfolio();
  initPortfolioNav();
  initReveal();
  initStats();
  initModal();
  initBackToTop();
  initSmoothScroll();
});

/* ── PAGE LOADER ── */
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });
  // Fallback
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    setTimeout(() => {
      trail.style.left = mx + 'px';
      trail.style.top = my + 'px';
    }, 80);
  });
  document.querySelectorAll('a, button, .port-card, .service-card, .skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      cursor.style.background = 'var(--pink)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = 'var(--purple-lt)';
    });
  });
}

/* ── PARTICLES ── */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colors = ['rgba(124,58,237,0.6)', 'rgba(236,72,153,0.5)', 'rgba(168,85,247,0.5)', 'rgba(6,182,212,0.4)'];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > W) p.dx *= -1;
      if (p.y < 0 || p.y > H) p.dy *= -1;
    });
    // Draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── NAVBAR SCROLL ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Active link
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });
}

/* ── HAMBURGER MENU ── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    const open = links.classList.contains('open');
    btn.children[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    btn.children[1].style.opacity = open ? '0' : '1';
    btn.children[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      links.classList.remove('open');
      btn.children[0].style.transform = '';
      btn.children[1].style.opacity = '1';
      btn.children[2].style.transform = '';
    });
  });
}

/* ── RENDER SERVICES ── */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.map(s => `
    <div class="service-card reveal" data-service-id="${s.id}">
      <div class="service-card-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <div class="service-arrow">→</div>
    </div>
  `).join('');

  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.serviceId);
      openServiceEdit(id);
    });
  });
}

/* ── RENDER PORTFOLIO ── */
function renderPortfolio() {
  const track = document.getElementById('portfolioTrack');
  if (!track) return;
  const centerIdx = Math.floor(PORTFOLIO_DATA.length / 2);

  track.innerHTML = PORTFOLIO_DATA.map((p, i) => {
    const isCenter = i === centerIdx;
    const imgHtml = p.image
      ? `<img class="port-img" src="${p.image}" alt="${p.title}" loading="lazy" />`
      : `<div class="port-img-placeholder" style="background:${p.color}"><span style="font-size:3rem">${p.emoji || '🎨'}</span></div>`;

    return `
      <div class="port-card ${isCenter ? 'center-card' : ''} reveal" data-port-id="${p.id}">
        ${isCenter ? '<div class="scan-border"></div>' : ''}
        <button class="port-edit-btn" data-edit-port="${p.id}">✏️ Edit</button>
        ${imgHtml}
        <div class="port-body">
          <div class="port-cat">${p.category}</div>
          <div class="port-title">${p.title}</div>
          <div class="port-desc">${p.description}</div>
        </div>
      </div>
    `;
  }).join('');

  track.querySelectorAll('.port-edit-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.editPort);
      openPortfolioEdit(id);
    });
  });

  // Scroll to center
  setTimeout(() => {
    const centerCard = track.querySelector('.center-card');
    if (centerCard) {
      centerCard.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
    }
  }, 300);
}

/* ── PORTFOLIO NAVIGATION ── */
function initPortfolioNav() {
  const track = document.getElementById('portfolioTrack');
  const prev = document.getElementById('portPrev');
  const next = document.getElementById('portNext');
  if (!track || !prev || !next) return;

  const SCROLL_AMOUNT = 280;
  prev.addEventListener('click', () => track.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }));
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Observe re-renders
  const sectionObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  });
  sectionObserver.observe(document.body, { childList: true, subtree: true });
}

/* ── STATS COUNTER ── */
function initStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = target === 100 ? '%' : target === 2 ? '+' : '+';
  const duration = 1500;
  const step = duration / target;
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + 1, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, step);
}

/* ── MODAL ── */
let modalSaveCallback = null;

function initModal() {
  const overlay = document.getElementById('editModal');
  const closeBtn = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('modalCancel');
  const saveBtn = document.getElementById('modalSave');

  [closeBtn, cancelBtn].forEach(btn => {
    btn?.addEventListener('click', closeModal);
  });
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  saveBtn?.addEventListener('click', () => { modalSaveCallback?.(); });
}

function openModal(title, bodyHTML, onSave) {
  const overlay = document.getElementById('editModal');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHTML;
  modalSaveCallback = onSave;
  overlay.classList.add('active');
}
function closeModal() {
  document.getElementById('editModal').classList.remove('active');
  modalSaveCallback = null;
}

/* ── PORTFOLIO EDIT ── */
function openPortfolioEdit(id) {
  const item = PORTFOLIO_DATA.find(p => p.id === id);
  if (!item) return;

  const html = `
    <label>Project Title</label>
    <input id="editTitle" value="${item.title}" placeholder="Project Title" />

    <label>Category</label>
    <select id="editCat">
      ${['Social Media Design','YouTube Thumbnail','Banner Design','Instagram Carousel','AI Image Generation','Graphic Design'].map(c =>
        `<option value="${c}" ${c === item.category ? 'selected' : ''}>${c}</option>`
      ).join('')}
    </select>

    <label>Description</label>
    <textarea id="editDesc">${item.description}</textarea>

    <label>Image URL (paste URL or leave blank for placeholder)</label>
    <input id="editImg" value="${item.image}" placeholder="https://..." />

    <label>Placeholder Emoji (shown when no image)</label>
    <input id="editEmoji" value="${item.emoji}" placeholder="🎨" style="max-width:80px" />

    <p style="font-size:0.75rem;color:var(--grey);margin-top:0.5rem;">
      💡 Tip: Upload your image to any image host (Imgur, Cloudinary, etc.) and paste the URL above.
    </p>
  `;

  openModal('Edit Portfolio Item', html, () => {
    item.title = document.getElementById('editTitle').value.trim() || item.title;
    item.category = document.getElementById('editCat').value;
    item.description = document.getElementById('editDesc').value.trim() || item.description;
    item.image = document.getElementById('editImg').value.trim();
    item.emoji = document.getElementById('editEmoji').value.trim() || item.emoji;
    renderPortfolio();
    initReveal();
    closeModal();
  });
}

/* ── SERVICE EDIT ── */
function openServiceEdit(id) {
  const item = SERVICES_DATA.find(s => s.id === id);
  if (!item) return;

  const html = `
    <label>Service Name</label>
    <input id="editSTitle" value="${item.title}" />

    <label>Description</label>
    <textarea id="editSDesc">${item.description}</textarea>

    <label>Icon (emoji)</label>
    <input id="editSIcon" value="${item.icon}" style="max-width:80px" />
  `;

  openModal('Edit Service', html, () => {
    item.title = document.getElementById('editSTitle').value.trim() || item.title;
    item.description = document.getElementById('editSDesc').value.trim() || item.description;
    item.icon = document.getElementById('editSIcon').value.trim() || item.icon;
    renderServices();
    initReveal();
    closeModal();
  });
}

/* ── BACK TO TOP ── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── SMOOTH SCROLL ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   📌  HOW TO ADD / REMOVE PORTFOLIO ITEMS
   ──────────────────────────────────────────────────────
   ADD:    Copy one object inside PORTFOLIO_DATA and add it
           with a new unique id.

   REMOVE: Delete the object from PORTFOLIO_DATA array.

   CHANGE IMAGE: Set  image: "your-image-url.jpg"
                 or upload to Imgur and paste the direct link.

   The site re-renders automatically when you call
   renderPortfolio() — or just reload the page.
══════════════════════════════════════════════════════ */
