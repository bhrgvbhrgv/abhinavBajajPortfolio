import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🏡',
            title: 'Residential Construction',
            description: 'Custom home building with premium materials and expert craftsmanship. From concept to completion, we create dream homes that stand the test of time.',
            features: ['Custom Design', 'Quality Materials', 'Timely Delivery']
        },
        {
            icon: '🏢',
            title: 'Commercial Projects',
            description: 'Professional construction services for offices, retail spaces, and commercial buildings. We deliver functional spaces that enhance business operations.',
            features: ['Space Planning', 'Modern Design', 'Budget Control']
        },
        {
            icon: '🎨',
            title: 'Interior Design',
            description: 'Transform your spaces with sophisticated interior design solutions. We blend aesthetics with functionality to create inspiring environments.',
            features: ['3D Visualization', 'Custom Furniture', 'Complete Styling']
        },
        // {
        //     icon: '🔨',
        //     title: 'Renovation & Remodeling',
        //     description: 'Breathe new life into existing spaces with our renovation expertise. We modernize and enhance while preserving structural integrity.',
        //     features: ['Space Optimization', 'Modern Updates', 'Value Addition']
        // },
        // {
        //     icon: '📐',
        //     title: 'Architectural Planning',
        //     description: 'Comprehensive architectural services from initial concepts to detailed blueprints. We ensure designs are both beautiful and buildable.',
        //     features: ['Technical Drawings', 'Permit Assistance', 'Code Compliance']
        // },
        // {
        //     icon: '🌿',
        //     title: 'Sustainable Design',
        //     description: 'Eco-friendly construction and design solutions that minimize environmental impact while maximizing efficiency and comfort.',
        //     features: ['Energy Efficient', 'Green Materials', 'LEED Certified']
        // }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header text-center">
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">
                        Comprehensive Solutions for Every Need
                    </h2>
                    <p className="services-subtitle">
                        From initial concept to final execution, we offer a full range of construction
                        and interior design services tailored to your unique requirements.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
