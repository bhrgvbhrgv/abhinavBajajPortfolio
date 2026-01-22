import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">Abhinav Bajaj</h3>
                        <p className="footer-tagline">
                            Building spaces that inspire through exceptional construction
                            and innovative interior design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <button onClick={() => scrollToSection('home')}>Home</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')}>About</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('projects')}>Projects</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')}>Services</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('contact')}>Contact</button>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li>Residential Construction</li>
                            <li>Commercial Projects</li>
                            <li>Interior Design</li>
                            <li>Renovation & Remodeling</li>
                            <li>Architectural Planning</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <ul>
                            <li>
                                <span className="contact-icon">📞</span>
                                +91 98765 43210
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                abhinav@construction.com
                            </li>
                            <li>
                                <span className="contact-icon">📍</span>
                                Mumbai, Maharashtra
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Abhinav Bajaj. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        Crafted with excellence and precision
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
