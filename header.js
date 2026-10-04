class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="global-site-header">
                <div class="global-header-inner">
                    <a class="global-header-brand" href="index.html#home" aria-label="Saamrat SignX home">
                        <img src="images/logo_clear.jpg" alt="">
                        <span class="global-header-brand-text">
                            <strong>SAAMRAT</strong>
                            <small>SIGNX PVT. LTD.</small>
                        </span>
                    </a>
                    <button class="global-header-toggle" type="button" aria-expanded="false" aria-controls="global-primary-nav" aria-label="Open navigation">
                        <span></span><span></span><span></span>
                    </button>
                    <nav class="global-primary-nav" id="global-primary-nav" aria-label="Main navigation">
                        <a href="index.html#home">Home</a>
                        <a href="about.html">About Us</a>
                        <a href="services.html">Services</a>
                        <a href="index.html#projects">Our Projects</a>
                        <a href="about.html#our-team">Our Team</a>
                        <a href="about.html#faqs">FAQs</a>
                        <a class="global-header-contact" href="index.html#contact">Contact Us</a>
                    </nav>
                </div>
            </header>
        `;

        const toggle = this.querySelector('.global-header-toggle');
        const navigation = this.querySelector('.global-primary-nav');

        const closeNavigation = () => {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open navigation');
            navigation.classList.remove('is-open');
        };

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(expanded));
            toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
            navigation.classList.toggle('is-open', expanded);
        });

        navigation.addEventListener('click', (event) => {
            if (event.target.closest('a')) closeNavigation();
        });

        this.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeNavigation();
        });

        const currentPage = location.pathname.split('/').pop() || 'index.html';
        navigation.querySelectorAll('a').forEach((link) => {
            const linkPage = link.getAttribute('href').split('#')[0];
            if (linkPage === currentPage) link.setAttribute('aria-current', 'page');
        });
    }
}

customElements.define('site-header', SiteHeader);
