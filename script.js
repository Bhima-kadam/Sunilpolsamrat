const productCatalog = {
  'ss-letters': {
    title: 'Stainless Steel Letters',
    hero: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    tag: 'Premium 3D lettering',
    summary: 'High-end stainless steel lettering crafted with precision finishing for retail storefronts, corporate offices, and premium brand identities.',
    features: ['Mirror finish options', 'Custom sizing and thickness', 'Outdoor-grade durable build', 'Precision fabrication'],
    bestFor: 'Luxury storefronts, corporate offices, showrooms',
    process: 'Designed in CAD, laser-cut, polished, and installed with precision mounting.'
  },
  'gold-letters': {
    title: 'Stainless Steel Gold Letters',
    hero: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    tag: 'Luxury gold finish',
    summary: 'Gold-tone stainless steel letters add premium look and strong visibility for flagship stores, hospitality spaces, and signature commercial branding.',
    features: ['Golden powder-coated finish', 'Strong metallic durability', 'Eye-catching visual depth', 'Low maintenance'],
    bestFor: 'Hotels, luxury retail, premium offices',
    process: 'Fabricated with polished stainless base and premium coloured finish for a premium look.'
  },
  'aluminum-letters': {
    title: 'Aluminium Letters',
    hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tag: 'Lightweight, versatile',
    summary: 'Aluminium letters provide a perfect mix of durability, weight efficiency, and strong branding appeal for both indoor and outdoor usage.',
    features: ['Rust-resistant material', 'Weather-ready performance', 'Easy custom dimensions', 'Strong branding impact'],
    bestFor: 'Office fronts, malls, commercial buildings',
    process: 'Cut, shaped, coated, and mounted with secure installation support.'
  },
  'acrylic-letters': {
    title: 'Acrylic Letters',
    hero: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    tag: 'Modern & vibrant',
    summary: 'Acrylic lettering creates sleek modern brand presentations with clean edges, color flexibility, and a polished premium appearance.',
    features: ['Multiple colour finishes', 'Gloss or matte surface', 'Suitable for reception signage', 'Professional detailing'],
    bestFor: 'Corporate lobbies, retail interiors, office signage',
    process: 'Cut to dimension, edge-finished, and backed with lamp or push-fit mounting.'
  },
  'neon-board': {
    title: 'Neon Sign Board',
    hero: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    tag: 'High visibility branding',
    summary: 'Bright, attention-grabbing neon signage offers excellent visibility in nightlife markets, cafes, salons, and retail frontages.',
    features: ['Energy-efficient LED neon', 'Custom font and color selection', 'Night visibility', 'Strong visual appeal'],
    bestFor: 'Food outlets, salons, cafes, nightlife brands',
    process: 'Custom-designed neon channel, wiring, and safe installation for long operational life.'
  },
  '3d-glow': {
    title: '3D Glow Sign Board',
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    tag: 'Standout storefront impact',
    summary: '3D glowing sign boards combine depth, animation-ready finishes, and strong branding visibility for elevated storefront presence.',
    features: ['3D dimensional depth', 'LED glow illumination', 'Works in all weather', 'Premium aesthetic finish'],
    bestFor: 'Showrooms, malls, offices, storefronts',
    process: 'Fabricated, LED-lit, assembled, and installed with secure structural mounting.'
  },
  'pylon-board': {
    title: 'Pylon Sign Board',
    hero: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    tag: 'Highway visibility',
    summary: 'Large-format pylon boards help businesses become visible from a distance and attract traffic from busy roads and highways.',
    features: ['Large-format visibility', 'Heavy-duty fabrication', 'Road-facing illumination', 'Custom branding layouts'],
    bestFor: 'Commercial complexes, malls, institutions, service centers',
    process: 'Structural design, steel frame fabrication, panel printing, and installation at site.'
  },
  'modular-signage': {
    title: 'Modular Signage',
    hero: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
    tag: 'Flexible branding system',
    summary: 'Modular signage solutions are ideal for businesses that require a professional and adaptable signage system across multiple locations.',
    features: ['Easy maintenance access', 'Scalable system design', 'Premium visual appearance', 'Fast installation'],
    bestFor: 'Franchise stores, offices, multi-location brands',
    process: 'System design, fabrication, finishing, and installation with a modular structure.'
  },
  'acp-cladding': {
    title: 'ACP Cladding',
    hero: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
    tag: 'Architectural finish',
    summary: 'ACP cladding enhances building aesthetics with weatherproof, modern facade coverage that improves both appearance and value.',
    features: ['Architectural aesthetics', 'Weather resistance', 'Low maintenance', 'Premium facade finish'],
    bestFor: 'Commercial facade upgrades, office exteriors',
    process: 'Design coordination, panel fabrication, fasteners, and facade installation.'
  }
};

function renderProductDetail() {
  const container = document.getElementById('product-detail-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'ss-letters';
  const product = productCatalog[type] || productCatalog['ss-letters'];

  const related = Object.entries(productCatalog)
    .filter(([key]) => key !== type)
    .slice(0, 3)
    .map(([key, item]) => `
      <a class="related-card" href="product-detail.html?type=${key}">
        <img src="${item.hero}" alt="${item.title}">
        <div>
          <span>${item.tag}</span>
          <h4>${item.title}</h4>
        </div>
      </a>
    `)
    .join('');

  container.innerHTML = `
    <section class="product-hero">
      <div class="container product-hero-grid">
        <div class="product-hero-copy">
          <span class="eyebrow">Saamrat SignX</span>
          <h1>${product.title}</h1>
          <p>${product.summary}</p>
          <div class="product-actions">
            <a href="index.html#contact" class="btn-primary">Request a Quote</a>
            <a href="index.html#services" class="btn-secondary">Back to Services</a>
          </div>
        </div>
        <div class="product-hero-image">
          <img src="${product.hero}" alt="${product.title}">
        </div>
      </div>
    </section>

    <section class="product-detail-section">
      <div class="container product-info-grid">
        <div class="info-panel">
          <h3>Product Highlights</h3>
          <ul>
            ${product.features.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="info-panel accent-panel">
          <h3>Best suited for</h3>
          <p>${product.bestFor}</p>
          <h3>Our process</h3>
          <p>${product.process}</p>
        </div>
      </div>
    </section>

    <section class="related-section">
      <div class="container">
        <div class="section-heading center">
          <span class="eyebrow">Explore more</span>
          <h2>Related Signage Solutions</h2>
        </div>
        <div class="related-grid">
          ${related}
        </div>
      </div>
    </section>
  `;
}

function bindFormFeedback() {
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thank you! Your inquiry has been noted. We will contact you soon.';
      }
      form.reset();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductDetail();
  bindFormFeedback();
  const yearTarget = document.getElementById('currentYear');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
});
