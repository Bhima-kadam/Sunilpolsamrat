class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer" aria-label="Site footer">
                <div class="global-footer-inner">
                    <div class="global-footer-grid">
                        <section class="global-footer-company" aria-labelledby="footer-company-heading">
                            <a class="global-footer-brand" href="index.html#home" aria-label="Saamrat SignX home">
                                <img src="images/logo_clear.jpg" alt="">
                                <span>
                                    <strong id="footer-company-heading">SAAMRAT SIGNX</strong>
                                    <small>PVT. LTD.</small>
                                </span>
                            </a>
                            <p>Designing, fabricating and installing custom signage that helps businesses stand out.</p>
                            <nav class="global-footer-social" aria-label="Social media">
                                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z"/></svg></a>
                                <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="global-footer-social-dot" cx="17.6" cy="6.8" r="1"/></svg></a>
                                <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.7a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3zM9 10h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20H9z"/></svg></a>
                            </nav>
                        </section>

                        <nav class="global-footer-links" aria-labelledby="footer-quick-links">
                            <h2 id="footer-quick-links">Quick Links</h2>
                            <ul>
                                <li><a href="index.html#home">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="services.html#letter-signages">Signages</a></li>
                                <li><a href="index.html#projects">Projects</a></li>
                                <li><a href="about.html#our-team">Our Team</a></li>
                                <li><a href="about.html#faqs">FAQs</a></li>
                                <li><a href="index.html#contact">Contact</a></li>
                            </ul>
                        </nav>

                        <nav class="global-footer-links" aria-labelledby="footer-our-services">
                            <h2 id="footer-our-services">Our Services</h2>
                            <ul>
                                <li><a href="services.html#letter-signages">Acrylic Letters</a></li>
                                <li><a href="services.html#letter-signages">Stainless Steel Letters</a></li>
                                <li><a href="services.html#illuminated-signages">LED Sign Boards</a></li>
                                <li><a href="services.html#illuminated-signages">Glow Sign Boards</a></li>
                                <li><a href="services.html#outdoor-signages">ACP Cladding</a></li>
                                <li><a href="services.html#outdoor-signages">Pylon Sign Boards</a></li>
                                <li><a href="services.html#branding-solutions">LED Display Walls</a></li>
                                <li><a href="services.html#branding-solutions">In-Shop Branding</a></li>
                            </ul>
                        </nav>

                        <section class="global-footer-contact" aria-labelledby="footer-contact-heading">
                            <h2 id="footer-contact-heading">Contact Information</h2>
                            <p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>1st Floor, No 37, 2nd Cross Rd, Mico Layout, 2nd Stage, Omkar Nagar, Arkere, Bengaluru, Karnataka 560076</span></p>
                            <p><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10 18.4a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.5 3.2 2 2 0 0 1 3.5 1h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7.4 9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.3 2.6Z"/></svg><span><a href="tel:+917019533446">+91 7019533446</a><br><a href="tel:+919148185515">+91 9148185515</a></span></p>
                            <p><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg><a href="mailto:saamratsignx@gmail.com">saamratsignx@gmail.com</a></p>
                            <p><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span><strong>Business Hours:</strong> Please contact us for current hours.</span></p>
                        </section>
                    </div>

                    <div class="global-footer-bottom">
                        <p>Copyright &copy; 2026 Saamrat SignX Pvt. Ltd. All Rights Reserved.</p>
                        <nav aria-label="Legal links">
                            <a href="mailto:saamratsignx@gmail.com?subject=Privacy%20Policy">Privacy Policy</a>
                            <a href="mailto:saamratsignx@gmail.com?subject=Terms%20%26%20Conditions">Terms &amp; Conditions</a>
                        </nav>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);
