class FloatingContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="floating-contact-links" aria-label="Contact shortcuts" inert>
                <a href="https://wa.me/917019533446" target="_blank" rel="noreferrer" class="floating-contact-icon whatsapp" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20l.9-4.7a8.5 8.5 0 1 1 16.6-3.6Z"/><path d="M8.3 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.7c.1.3 0 .5-.1.7l-.5.6c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-1.9.6-1.2-.2-2.6-.9-3.9-2.1-1.1-1-2-2.3-2.2-3.4-.2-1 .1-1.8.8-2.4Z"/></svg>
                </a>
                <a href="mailto:saamratsignx@gmail.com" class="floating-contact-icon email" aria-label="Email">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>
                </a>
                <a href="index.html#contact" class="floating-contact-icon maps" aria-label="Location">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5 8 4l8 2 5-2.5v14L16 20l-8-2-5 2.5v-14Z"/><path d="M8 4v14m8-12v14"/><path d="M12 8a2.5 2.5 0 0 1 2.5 2.5c0 1.8-2.5 4-2.5 4s-2.5-2.2-2.5-4A2.5 2.5 0 0 1 12 8Z"/><circle cx="12" cy="10.5" r=".6"/></svg>
                </a>
                <a href="tel:+917019533446" class="floating-contact-icon phone" aria-label="Call us">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10 18.4a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.5 3.2 2 2 0 0 1 3.5 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.4 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.3 2.6Z"/></svg>
                </a>
            </nav>
            <button class="floating-contact-toggle" type="button" aria-expanded="false" aria-label="Show contact shortcuts">+</button>
        `;

        const toggle = this.querySelector('.floating-contact-toggle');
        const links = this.querySelector('.floating-contact-links');

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(expanded));
            toggle.setAttribute('aria-label', expanded ? 'Hide contact shortcuts' : 'Show contact shortcuts');
            toggle.textContent = expanded ? '\u2212' : '+';
            this.classList.toggle('is-open', expanded);
            links.inert = !expanded;
        });
    }
}

customElements.define('floating-contact', FloatingContact);
