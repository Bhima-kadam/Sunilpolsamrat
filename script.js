/* =========================================================
   PRODUCT CATALOG
========================================================= */

const productCatalog = {

  'ss-letters': {
    title: 'Stainless Steel Letters',
    hero: 'images/Stainless Steel.png',
    tag: 'Premium 3D lettering',
    summary: 'High-end stainless steel lettering crafted with precision finishing for retail storefronts, corporate offices, and premium brand identities.',
    features: [
      'Mirror finish options',
      'Custom sizing and thickness',
      'Outdoor-grade durable build',
      'Precision fabrication'
    ],
    bestFor: 'Luxury storefronts, corporate offices, showrooms',
    process: 'Designed in CAD, laser-cut, polished, and installed with precision mounting.'
  },

  'gold-letters': {
    title: 'Gold Stainless Steel Letters',
    hero: 'images/Stainless Steel Gold Letters.png',
    tag: 'Luxury gold finish',
    summary: 'Gold-tone stainless steel letters add premium look and strong visibility for flagship stores, hospitality spaces, and signature commercial branding.',
    features: [
      'Golden powder-coated finish',
      'Strong metallic durability',
      'Eye-catching visual depth',
      'Low maintenance'
    ],
    bestFor: 'Hotels, luxury retail, premium offices',
    process: 'Fabricated with polished stainless base and premium coloured finish for a premium look.'
  },

  'aluminum-letters': {
    title: 'Aluminium Letters',
    hero: 'images/Aluminium letters.png',
    tag: 'Lightweight, versatile',
    summary: 'Aluminium letters are lightweight, durable, and corrosion-resistant 3D fabricated letters designed to deliver a clean, modern look for indoor and outdoor signage. Their excellent strength-to-weight ratio, weather resistance, and low maintenance make them a popular choice for long-lasting business branding on commercial buildings, offices, and retail spaces.',
    features: [
      'Rust-resistant material',
      'Weather-ready performance',
      'Easy custom dimensions',
      'Strong branding impact'
    ],
    bestFor: 'Office fronts, malls, commercial buildings',
    process: 'Cut, shaped, coated, and mounted with secure installation support.'
  },

  'acrylic-letters': {
    title: 'Acrylic Letters',
    hero: 'images/Acrylic Letters.png',
    tag: 'Modern & vibrant',
    summary: 'Acrylic letters are premium 3D sign letters crafted from high-quality acrylic sheets, offering a sleek, glossy finish and excellent colour versatility. They provide a modern, professional appearance and can be manufactured in clear, coloured, frosted, or illuminated designs, making them ideal for creating eye-catching indoor and outdoor branding.',
    features: [
      'Multiple colour finishes',
      'Gloss or matte surface',
      'Suitable for reception signage',
      'Professional detailing'
    ],
    bestFor: 'Corporate lobbies, retail interiors, office signage',
    process: 'Cut to dimension, edge-finished, and backed with lamp or push-fit mounting.'
  },

  'neon-board': {
    title: 'Neon Sign Board',
    hero: 'images/neon-style.png',
    tag: 'High visibility branding',
    summary: 'Neon sign boards are illuminated signage solutions designed to create bright, vibrant, and eye-catching brand displays. Using energy-efficient LED neon technology or traditional neon-style lighting, they provide excellent visibility both day and night while adding a modern, stylish, and memorable appearance to storefronts and commercial spaces.',
    features: [
      'Energy-efficient LED neon',
      'Custom font and color selection',
      'Night visibility',
      'Strong visual appeal'
    ],
    bestFor: 'Food outlets, salons, cafes, nightlife brands',
    process: 'Custom-designed neon channel, wiring, and safe installation for long operational life.'
  },

  '3d-glow': {
    title: '3D Glow Sign Board',
    hero: 'images/3D glow sign.png',
    tag: 'Standout storefront impact',
    summary: '3D glow sign boards are illuminated dimensional signs that combine raised lettering with energy-efficient LED lighting to create a bright, premium, and highly visible display. Designed for both day and night visibility, they enhance brand recognition while offering excellent durability, weather resistance, and a modern appearance for commercial spaces.',
    features: [
      '3D dimensional depth',
      'LED glow illumination',
      'Works in all weather',
      'Premium aesthetic finish'
    ],
    bestFor: 'Showrooms, malls, offices, storefronts',
    process: 'Fabricated, LED-lit, assembled, and installed with secure structural mounting.'
  },

  'pylon-board': {
    title: 'Pylon Sign Board',
    hero: 'images/pylon sign.png',
    tag: 'Highway visibility',
    summary: 'Pylon sign boards are tall, freestanding structures designed to maximize business visibility from long distances. Built with durable materials and often illuminated with LED lighting, they help businesses attract customers, improve brand recognition, and provide clear directional guidance along highways, commercial complexes, and busy roads.',
    features: [
      'Large-format visibility',
      'Heavy-duty fabrication',
      'Road-facing illumination',
      'Custom branding layouts'
    ],
    bestFor: 'Commercial complexes, malls, institutions, service centers',
    process: 'Structural design, steel frame fabrication, panel printing, and installation at site.'
  },

  'modular-signage': {
    title: 'Modular Signage',
    hero: 'images/modular signage.png',
    tag: 'Flexible branding system',
    summary: 'Modular signage is a flexible signage system built with interchangeable panels and components, making it easy to update information, expand branding, or replace individual sections without replacing the entire sign. It offers a clean, modern appearance, excellent durability, and a cost-effective solution for businesses with changing signage requirements.',
    features: [
      'Easy maintenance access',
      'Scalable system design',
      'Premium visual appearance',
      'Fast installation'
    ],
    bestFor: 'Franchise stores, offices, multi-location brands',
    process: 'System design, fabrication, finishing, and installation with a modular structure.'
  },

  'acp-cladding': {
    title: 'ACP Cladding',
    hero: 'images/ACP Cladding.png',
    tag: 'Architectural finish',
    summary: 'ACP (Aluminium Composite Panel) cladding is a modern exterior finishing solution made from lightweight aluminium composite panels. It enhances the appearance of buildings while providing excellent weather resistance, durability, and low maintenance. ACP cladding is widely used to create sleek, professional facades that complement signage and strengthen a brand\'s visual identity.',
    features: [
      'Architectural aesthetics',
      'Weather resistance',
      'Low maintenance',
      'Premium facade finish'
    ],
    bestFor: 'Commercial facade upgrades, office exteriors',
    process: 'Design coordination, panel fabrication, fasteners, and facade installation.'
  }

};


/* =========================================================
   PRODUCT CONTENT
========================================================= */

const productContent = {

  'ss-letters': {
    introTitle: 'Premium stainless steel lettering for professional brand visibility.',
    intro: 'Stainless steel letters are a durable and refined choice for businesses that want clear, long-lasting identity signage. They work especially well on office fronts, retail stores, reception walls and commercial buildings.',
    introSecond: 'They can be produced in different sizes, finishes and depths to match the brand identity. Polished, brushed and illuminated options help create a professional appearance in both indoor and outdoor locations.',
    definitionTitle: 'What Are Stainless Steel Letters?',
    definition: 'Stainless steel letters are dimensional metal letters cut and finished from steel sheets. They can be polished, brushed, coloured or illuminated to match the brand identity and installation surface.',
    types: [
      'Mirror Finish Letters',
      'Brushed Steel Letters',
      'Hairline Finish Letters',
      'Backlit Steel Letters'
    ],
    applications: 'Corporate offices, premium retail, showrooms, hotels and reception signage.'
  },

  'gold-letters': {
    introTitle: 'Premium stainless steel gold letters in Bangalore.',
    intro: 'In modern signage, businesses are moving towards premium materials that reflect brand quality and professionalism. Stainless steel gold letters have become a top choice for high-end branding due to their elegant finish and strong visual appeal. They create a bold impression while maintaining a sophisticated look.',
    introSecond: 'Many businesses work with experienced manufacturers to create customized stainless steel gold letters in Bangalore for storefronts, offices, and commercial spaces. These letters not only enhance brand visibility but also add a touch of luxury and durability.',
    definitionTitle: 'What Are Gold Stainless Steel Letters?',
    definition: 'Gold stainless steel letters are premium 3D metal letters crafted from high-grade stainless steel and finished with a luxurious gold coating or mirror-polished surface. They combine exceptional durability with an elegant appearance, making them ideal for creating sophisticated and long-lasting brand signage for both indoor and outdoor spaces.',
    definitionSecond: 'These letters are widely used because of their durability and resistance to rust, corrosion, and weather conditions. Stainless steel signage is known for its long lifespan and ability to maintain its appearance over time.',
    definitionThird: 'One of the key advantages is their aesthetic appeal. The gold finish adds a luxurious look, making them ideal for premium brands, hotels, and corporate offices.',
    definitionFourth: 'Additionally, these letters can be customized in different sizes, fonts, and finishes, allowing businesses to create unique and impactful signage.',
    types: [
      'Mirror Finish Gold Letters',
      'Brushed Gold SS Letters',
      'Matte Gold Stainless Steel Letters',
      '3D Gold Stainless Steel Letters'
    ],
    typeDescriptions: [
      'These letters have a highly polished, reflective surface that creates a premium and eye-catching look.',
      'These letters have a brushed textured surface that reduces glare and fingerprints while maintaining a clean look.',
      'These letters have a soft matte surface that creates a non-reflective and elegant look while maintaining a premium finish.',
      'These letters are designed with added depth to create a raised and prominent visual effect on surfaces.'
    ],
    applications: 'Corporate offices, luxury retail stores, hotels, jewellery showrooms, restaurants, premium commercial buildings, reception areas, and high-end branding applications.'
  },

  'aluminum-letters': {
    introTitle: 'Lightweight aluminium letters for clean indoor and outdoor branding.',
    intro: 'Aluminium lettering gives businesses a strong visual identity without adding unnecessary weight to the structure. It is easy to customise and suitable for modern commercial signage.',
    introSecond: 'The material is resistant to rust and practical for long-term use. Different colours, coatings and mounting styles can be selected according to the building facade and branding requirement.',
    definitionTitle: 'What Are Aluminium Letters?',
    definition: 'Aluminium letters are precision-cut metal letters made from lightweight aluminium sheets. They can be painted, powder coated, brushed or illuminated for different architectural and branding requirements.',
    types: [
      'Brushed Aluminium Letters',
      'Powder Coated Letters',
      'Painted Aluminium Letters',
      'LED Aluminium Letters'
    ],
    applications: 'Office fronts, shopping malls, commercial buildings, educational institutions, hospitals, reception areas, business parks, and wayfinding signage.'
  },

  'acrylic-letters': {
    introTitle: 'Modern acrylic letters for vibrant and polished brand spaces.',
    intro: 'Acrylic letters create a clean, contemporary presentation for interiors, reception areas, retail walls and business fronts. Colour, thickness and finish can be tailored to the brand.',
    introSecond: 'They are available in clear, solid, translucent and coloured finishes. Acrylic can also be combined with metal backing or LED lighting to create depth and stronger visibility.',
    definitionTitle: 'What Are Acrylic Letters?',
    definition: 'Acrylic letters are premium 3D sign letters crafted from high-quality acrylic sheets, offering a sleek, glossy finish and excellent colour versatility. They provide a modern, professional appearance and can be manufactured in clear, coloured, frosted, or illuminated designs, making them ideal for creating eye-catching indoor and outdoor branding.',
    types: [
      'Flat Acrylic Letters',
      'Raised Acrylic Letters',
      'Acrylic with Stainless Steel Backing',
      'LED Backlit Acrylic Letters'
    ],
    applications: 'Corporate reception areas, retail stores, shopping malls, salons, cafes, restaurants, offices, hospitals, educational institutions, and premium interior branding.'
  },

  'neon-board': {
    introTitle: 'Bright neon sign boards designed to get noticed after dark.',
    intro: 'Neon-style signage brings colour, energy and high visibility to cafes, salons, restaurants, retail spaces and entertainment venues. Designs can follow a logo, message or custom lettering style.',
    introSecond: 'Modern LED neon is energy efficient and suitable for custom shapes, icons and lettering. It can be installed indoors or outdoors with the right backing, wiring and weather protection.',
    definitionTitle: 'What Is a Neon Sign Board?',
    definition: 'Neon sign boards are illuminated signage solutions designed to create bright, vibrant, and eye-catching brand displays. Using energy-efficient LED neon technology or traditional neon-style lighting, they provide excellent visibility both day and night while adding a modern, stylish, and memorable appearance to storefronts and commercial spaces.',
    types: [
      'Open Neon Lettering',
      'LED Flex Neon',
      'Neon Logo Boards',
      'Neon Acrylic Backing Boards'
    ],
    applications: 'Retail stores, cafes, restaurants, bars, salons, boutiques, shopping malls, entertainment venues, hotels, offices, showrooms, and high-visibility storefronts.'
  },

  '3d-glow': {
    introTitle: 'Dimensional glow signage for strong storefront impact.',
    intro: '3D glow sign boards combine raised lettering with controlled illumination to make a business visible during the day and at night. They are built for brand presence, readability and long-term outdoor use.',
    introSecond: 'The sign face, sides, depth and lighting colour can be customised to suit the brand. Proper fabrication and installation ensure even illumination and a clean finish on the storefront.',
    definitionTitle: 'What Is a 3D Glow Sign Board?',
    definition: '3D glow sign boards are illuminated dimensional signs that combine raised lettering with energy-efficient LED lighting to create a bright, premium, and highly visible display. Designed for both day and night visibility, they enhance brand recognition while offering excellent durability, weather resistance, and a modern appearance for commercial spaces.',
    types: [
      'Frontlit 3D Letters',
      'Backlit Halo Letters',
      'Front and Backlit Letters',
      '3D LED Box Sign Boards'
    ],
    applications: 'Showrooms, shopping malls, corporate offices, hospitals, clinics, restaurants, hotels, retail stores, commercial buildings, and high-visibility storefronts.'
  },

  'pylon-board': {
    introTitle: 'High-visibility pylon boards for roads, campuses and large properties.',
    intro: 'Pylon signage helps businesses communicate their presence from a distance. Its tall, structured format is suitable for sites where visibility from roads, parking areas or multiple approach points matters.',
    introSecond: 'Pylon boards can carry a single brand, several tenant names or directional information. The structure, panel size and lighting are planned according to the site and viewing distance.',
    definitionTitle: 'What Is a Pylon Sign Board?',
    definition: 'Pylon sign boards are tall, freestanding structures designed to maximize business visibility from long distances. Built with durable materials and often illuminated with LED lighting, they help businesses attract customers, improve brand recognition, and provide clear directional guidance along highways, commercial complexes, and busy roads.',
    types: [
      'Single-Sided Pylon Signs',
      'Double-Sided Pylon Signs',
      'Multi-Tenant Directory Pylons',
      'Illuminated Roadside Pylons'
    ],
    applications: 'Shopping malls, fuel stations, hotels, hospitals, commercial complexes, industrial parks, automobile dealerships, educational institutions, business parks, and highway-facing businesses.'
  },

  'modular-signage': {
    introTitle: 'Flexible modular signage systems for organised brand environments.',
    intro: 'Modular signage creates a consistent visual system across offices, campuses, stores and multiple locations. Components can be updated or expanded without replacing the entire system.',
    introSecond: 'A coordinated system improves navigation and keeps the brand presentation consistent. Panels, directories, room signs and directional markers can all follow the same design language.',
    definitionTitle: 'What Is Modular Signage?',
    definition: 'Modular signage is a flexible signage system built with interchangeable panels and components, making it easy to update information, expand branding, or replace individual sections without replacing the entire sign. It offers a clean, modern appearance, excellent durability, and a cost-effective solution for businesses with changing signage requirements.',
    types: [
      'Directional Signage',
      'Room and Door Signs',
      'Directory Boards',
      'Suspended and Wall-Mounted Signs'
    ],
    applications: 'Corporate offices, hospitals, educational campuses, shopping malls, business parks, industrial facilities, franchise stores, commercial complexes, hotels, and multi-location businesses.'
  },

  'acp-cladding': {
    introTitle: 'Modern ACP cladding for durable commercial facade presentation.',
    intro: 'ACP cladding gives building exteriors a clean, coordinated appearance while providing a practical surface for integrating signage, lighting and architectural branding.',
    introSecond: 'Panels are available in a wide range of colours and finishes, allowing the facade to match the business identity. The installation is planned around doors, windows, signage zones and existing architectural details.',
    definitionTitle: 'What Is ACP Cladding?',
    definition: 'ACP (Aluminium Composite Panel) cladding is a modern exterior finishing solution made from lightweight aluminium composite panels. It enhances the appearance of buildings while providing excellent weather resistance, durability, and low maintenance. ACP cladding is widely used to create sleek, professional facades that complement signage and strengthen a brand\'s visual identity.',
    types: [
      'Solid Colour ACP Cladding',
      'Metallic Finish Cladding',
      'Signage Fascia Cladding',
      'Feature Wall and Facade Cladding'
    ],
    applications: 'Commercial buildings, corporate offices, retail stores, shopping malls, hospitals, hotels, educational institutions, showrooms, industrial facilities, and modern architectural facades.'
  }

};


/* =========================================================
   PROJECT DATA
========================================================= */

const projectItems = [

  {
    title: 'LED Sign Board',
    category: 'LED',
    image: 'images/Led2.jpeg'
  },

  {
    title: 'LED Display Wall',
    category: 'LED',
    image: 'images/01a79afb-a259-4196-ae32-26e90ceb4fca_clear_2x.png'
  },

  {
    title: 'Outdoor LED Display',
    category: 'LED',
    image: 'images/led-display-1_clear.png'
  },

  {
    title: 'Outdoor LED Display',
    category: 'LED',
    image: 'images/led-display-2_clear.png'
  },

  {
    title: 'Outdoor LED Billboard',
    category: 'LED',
    image: 'images/led-billboard-1_clear.png'
  },

  {
    title: 'Glow Signage Board',
    category: 'LED',
    image: 'images/glow-signage-board_clear.jpg'
  },

  {
    title: 'LED Signage',
    category: 'LED',
    image: 'images/project-signage-3_clear.jpg'
  },

  {
    title: 'Illuminated Brand Concept',
    category: 'LED',
    image: 'images/ChatGPT Image Sep 23, 2026, 07_39_31 PM.png'
  },

  {
    title: 'Interior Wall Branding',
    category: 'Indoor',
    image: 'images/interior-branding-1_clear.png'
  },

  {
    title: 'Interior Wall Branding',
    category: 'Indoor',
    image: 'images/interior-branding-2_clear.png'
  },

  {
    title: 'Hoardings',
    category: 'Hoardings',
    image: 'images/IMG-20260924-WA0013_clear_2x.jpg'
  },

  {
    title: 'Outdoor Hoarding',
    category: 'Hoardings',
    image: 'images/IMG-20260924-WA0015_clear_2x.jpg'
  },

  {
    title: 'Roadside Hoarding',
    category: 'Hoardings',
    image: 'images/IMG-20260924-WA0012_clear_2x.jpg'
  },

  {
    title: 'Outdoor Hoarding',
    category: 'Hoardings',
    image: 'images/outdoor-hoarding.png'
  },

  {
    title: 'Outdoor Sign Board',
    category: 'Outdoor',
    image: 'images/outdoor-sign-board.png'
  },

  {
    title: 'LED Display',
    category: 'LED',
    image: 'images/led-signage.png'
  },

  {
    title: 'led-signage',
    category: 'LED',
    image: 'images/led-sign-board-2.png'
  },

  {
    title: 'Frontage Branding',
    category: 'Outdoor',
    image: 'images/project-signage-1_clear.jpg'
  },

  {
    title: '3D Letter Storefront',
    category: '3D Letters',
    image: 'images/project-signage-2_clear.jpg'
  },

  {
    title: 'Commercial Board',
    category: 'ACP',
    image: 'images/commercial-board_clear.jpg'
  },

  {
    title: 'Glow Sign Lighting',
    category: 'Neon',
    image: 'images/glow-sign-lighting_clear.jpg'
  },

  {
    title: 'Office Branding',
    category: 'Acrylic',
    image: 'images/office-branding_clear.jpg'
  },

  {
    title: 'Office Entrance Signage',
    category: 'Acrylic',
    image: 'images/office-entrance-signage_clear.jpg'
  },

  {
    title: 'Outdoor Advertising',
    category: 'Outdoor',
    image: 'images/outdoor-advertising_clear.jpg'
  },

  {
    title: 'Outdoor Branding Board',
    category: 'Outdoor',
    image: 'images/outdoor-branding-board_clear.jpg'
  },

  {
    title: 'Premium Facade',
    category: 'ACP',
    image: 'images/premium-facade_clear.jpg'
  },

  {
    title: 'Corporate Wayfinding',
    category: 'ACP',
    image: 'images/corporate-wayfinding-signs_clear.jpg'
  },

  {
    title: 'Fabrication Work',
    category: '3D Letters',
    image: 'images/fabrication-work_clear.jpg'
  },

  {
    title: 'Frontage Branding',
    category: 'Outdoor',
    image: 'images/frontage-branding_clear.jpg'
  },

  {
    title: 'Rashtrakuta Palace Signboard',
    category: 'Outdoor',
    image: 'images/4_rashtrakuta_palace_signboard.png'
  },

  {
    title: 'Princess Gold Signboard',
    category: '3D Letters',
    image: 'images/5_princess_gold_signboard.png'
  },

  {
    title: 'ARB Pylon Signboard',
    category: 'Outdoor',
    image: 'images/7_arb_pylon_signboard.png'
  },

  {
    title: 'Akshaya Directory Signboard',
    category: 'ACP',
    image: 'images/8_akshaya_directory_signboard.png'
  },

  {
    title: 'Commercial Board',
    category: 'ACP',
    image: 'images/ACP.png'
  },

  {
    title: 'Custom Signage Concept',
    category: '3D Letters',
    image: 'images/ChatGPT Image Sep 23, 2026, 07_35_20 PM.png'
  },

  {
    title: 'Outdoor Signage Concept',
    category: 'Neon',
    image: 'images/ChatGPT Image Sep 23, 2026, 07_42_14 PM.png'
  }

];


/* =========================================================
   PROJECT GALLERY SETTINGS
========================================================= */

/*
   EXACTLY 12 PROJECTS ARE SHOWN INITIALLY.
   LOAD MORE REVEALS THE REST.
*/

const PROJECTS_PER_PAGE = 12;

let currentProjectFilter = 'All';

let showingAllProjects = false;


/* =========================================================
   RENDER PROJECT GALLERY
========================================================= */

function renderProjectGallery(filter = currentProjectFilter) {

    const gallery =
        document.getElementById('project-gallery');

    const loadMoreBtn =
        document.getElementById('load-more-projects');

    if (!gallery) {
        return;
    }


    currentProjectFilter = filter;


    /*
       FILTER PROJECTS
    */

    const filteredProjects =
        filter === 'All'
            ? projectItems
            : projectItems.filter(
                project =>
                    project.category === filter
            );


    /*
       SHOW ONLY FIRST 12
       UNTIL LOAD MORE IS CLICKED
    */

    const visibleProjects =
        showingAllProjects
            ? filteredProjects
            : filteredProjects.slice(
                0,
                PROJECTS_PER_PAGE
            );


    /*
       BUILD PROJECT CARDS
    */

    gallery.innerHTML =
        visibleProjects.map(project => `

            <article class="project-item">

                <div class="project-image">

                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        loading="lazy"
                    >

                </div>

                <div class="project-meta">

                    <h3>
                        ${project.title}
                    </h3>

                </div>

            </article>

        `).join('');


    /*
       LOAD MORE BUTTON
    */

    if (loadMoreBtn) {

        const hasMoreProjects =
            filteredProjects.length >
            PROJECTS_PER_PAGE;

        if (
            hasMoreProjects &&
            !showingAllProjects
        ) {

            loadMoreBtn.style.display =
                'inline-flex';

        } else {

            loadMoreBtn.style.display =
                'none';

        }

    }

}


/* =========================================================
   PROJECT FILTERS
========================================================= */

function bindProjectFilters() {

    const filters =
        document.querySelectorAll(
            '.filter-btn'
        );


    filters.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                filters.forEach(item => {

                    item.classList.toggle(
                        'active',
                        item === button
                    );

                });


                currentProjectFilter =
                    button.dataset.filter ||
                    'All';


                /*
                   WHEN CATEGORY CHANGES,
                   GO BACK TO FIRST 12
                */

                showingAllProjects = false;


                renderProjectGallery(
                    currentProjectFilter
                );

            }
        );

    });

}


/* =========================================================
   LOAD MORE PROJECTS
========================================================= */

function bindLoadMoreProjects() {

    const loadMoreBtn =
        document.getElementById(
            'load-more-projects'
        );


    if (!loadMoreBtn) {
        return;
    }


    loadMoreBtn.addEventListener(
        'click',
        () => {

            showingAllProjects = true;


            renderProjectGallery(
                currentProjectFilter
            );


            setTimeout(() => {

                loadMoreBtn.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });

            }, 100);

        }
    );

}


/* =========================================================
   PRODUCT DETAIL PAGE
========================================================= */

function renderProductDetail() {

    const container =
        document.getElementById(
            'product-detail-content'
        );


    if (!container) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const type =
        params.get('type') ||
        'ss-letters';


    const product =
        productCatalog[type] ||
        productCatalog['ss-letters'];


    const content =
        productContent[type] ||
        productContent['ss-letters'];

    const applicationLabels = content.applications
      .split(/,|\sand\s/)
      .map(label => label.trim().replace(/\.$/, ''))
      .filter(Boolean)
      .slice(0, 5);

    const applicationIcons = [
      'fa-building',
      'fa-store',
      'fa-hotel',
      'fa-gem',
      'fa-utensils'
    ];


    /*
       PRODUCT PAGE HTML
    */

    container.innerHTML = `

        <section class="stainless-letters-hero ${type === 'gold-letters' ? 'gold-letters-hero' : ''}">
          <div class="stainless-letters-copy">
            <h1>${type === 'ss-letters' ? 'What Are Stainless Steel <span>Letters?</span>' : type === 'gold-letters' ? 'What Are Gold Stainless Steel <span>Letters?</span>' : content.definitionTitle}</h1>
            <p>${type === 'ss-letters' || type === 'gold-letters' ? content.definition : product.summary}</p>
            <p class="stainless-letters-best-for"><strong>Best suited for:</strong> ${content.applications}</p>
            <div class="stainless-letters-applications" aria-label="Common applications">
              ${applicationLabels.map((label, index) => `
                <div><i class="fa-solid ${applicationIcons[index]}" aria-hidden="true"></i><span>${label}</span></div>
              `).join('')}
            </div>
          </div>
          <div class="stainless-letters-photo">
            <img class="stainless-letters-main-image" src="${product.hero}" alt="${product.title} signage">
          </div>
        </section>

        <section class="product-types">

            <div class="container">

                <div class="section-heading left">

                    <span class="eyebrow">
                        Explore the options
                    </span>

                    <h2>
                        Types of ${product.title}
                    </h2>

                    <p>
                        Explore options designed for different
                        branding, finish and installation needs.
                    </p>

                </div>


                <div class="product-type-grid">

                    ${content.types.map(
                        (item, index) => `

                            <article
                                class="product-type-card"
                            >

                                <span>
                                    ${String(index + 1).padStart(2, '0')}
                                </span>

                                <h3>
                                    ${item}
                                </h3>

                                <p>
                                    ${
                                        content.typeDescriptions?.[index] ||
                                        `${product.features[index % product.features.length]}. Designed to suit the visual and practical requirements of your space.`
                                    }
                                </p>

                                <strong>
                                    ${
                                        content.applications
                                            .split(',')
                                            [
                                                index %
                                                content.applications.split(',').length
                                            ]
                                            .trim()
                                    }
                                </strong>

                            </article>

                        `
                    ).join('')}

                </div>

            </div>

        </section>


    `;

}


function renderSignageCatalog() {

  const container =
    document.getElementById(
      'signage-catalog-content'
    );

  const isHomePage =
    document.getElementById('home') !== null;

  const headingTag =
    isHomePage ? 'h2' : 'h1';

  if (!container) {
    return;
  }

  container.innerHTML = `

    <section id="services" class="signage-catalog-section">
      <div class="container">
        <div class="section-heading left">
          <span class="eyebrow">Our Signages</span>
          <${headingTag}>Signage Solutions</${headingTag}>
          <p>Explore our signage range and choose a solution for your space.</p>
        </div>

        <div class="signage-catalog-grid">
          ${Object.entries(productCatalog).map(([type, product]) => `
            <a class="signage-catalog-card" href="product-detail.html?type=${type}">
              <div class="signage-catalog-image">
                <img src="${product.hero}" alt="${product.title}" loading="lazy">
              </div>
              <div class="signage-catalog-copy">
                <span class="signage-catalog-tag">${product.tag}</span>
                <h2>${product.title}</h2>
                <p>${product.summary}</p>
                <span class="signage-catalog-link">View signage <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

  `;
}


/* =========================================================
   FORM FEEDBACK
========================================================= */

function bindFormFeedback() {

    const forms =
        document.querySelectorAll(
            '.contact-form'
        );


    forms.forEach(form => {

        form.addEventListener(
            'submit',
            event => {

                event.preventDefault();


                const status =
                    form.querySelector(
                        '.form-status'
                    );


                if (status) {

                    status.textContent =
                        'Thank you! Your inquiry has been noted. We will contact you soon.';

                }


                form.reset();

            }
        );

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function updateCurrentYear() {

    const yearTarget =
        document.getElementById(
            'currentYear'
        );


    if (yearTarget) {

        yearTarget.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        /*
           PRODUCT DETAIL
        */

        renderProductDetail();
        renderSignageCatalog();


        /*
           CONTACT FORMS
        */

        bindFormFeedback();


        /*
           PROJECT FILTERS
        */

        bindProjectFilters();


        /*
           LOAD MORE
        */

        bindLoadMoreProjects();


        /*
           INITIAL PROJECT DISPLAY
           FIRST 12 ONLY
        */

        renderProjectGallery('All');


        /*
           FOOTER YEAR
        */

        updateCurrentYear();

    }
);