import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="section-label">About Me</span>
                        <h2 className="section-title">
                            Crafting Excellence in Every Detail
                        </h2>
                        <p className="about-description">
                            With over 15 years of experience in construction and interior design,
                            I specialize in creating spaces that seamlessly blend functionality with
                            aesthetic appeal. My approach combines innovative design thinking with
                            meticulous attention to detail, ensuring every project exceeds expectations.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🏗️</div>
                                <div className="highlight-content">
                                    <h4>Premium Construction</h4>
                                    <p>High-quality builds with attention to structural integrity and lasting value</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">✨</div>
                                <div className="highlight-content">
                                    <h4>Interior Excellence</h4>
                                    <p>Thoughtful design that transforms spaces into inspiring environments</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🎯</div>
                                <div className="highlight-content">
                                    <h4>Client-Focused</h4>
                                    <p>Dedicated to understanding and exceeding your unique requirements</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-wrapper">
                            <div className="image-decoration"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
