import './Hero.css';

const Hero = () => {
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
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fadeInUp">
                        Building Spaces<br />That Inspire
                    </h1>

                    <p className="hero-subtitle animate-fadeInUp delay-100">
                        Transforming visions into reality through exceptional construction
                        and innovative interior design solutions
                    </p>

                    <div className="hero-cta animate-fadeInUp delay-200">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn btn-primary btn-lg"
                        >
                            View Projects
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-secondary btn-lg"
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
