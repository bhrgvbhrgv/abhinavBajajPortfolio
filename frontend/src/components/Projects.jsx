import { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'Modern Luxury Villa',
            category: 'residential',
            description: 'Contemporary residential design with premium finishes and sustainable features',
            image: '/images/project-residential-1.jpg'
        },
        {
            id: 2,
            title: 'Corporate Office Space',
            category: 'commercial',
            description: 'Sleek commercial interior with modern amenities and efficient layout',
            image: '/images/project-commercial-1.jpg'
        },
        {
            id: 3,
            title: 'Elegant Bedroom Suite',
            category: 'interior',
            description: 'Luxurious interior design with warm tones and sophisticated styling',
            image: '/images/project-interior-1.jpg'
        },
        {
            id: 4,
            title: 'Contemporary Villa',
            category: 'residential',
            description: 'Stunning residential architecture with natural stone and modern elements',
            image: '/images/project-residential-2.jpg'
        },
        {
            id: 5,
            title: 'Restaurant Interior',
            category: 'commercial',
            description: 'Warm and inviting commercial space with elegant dining atmosphere',
            image: '/images/project-commercial-2.jpg'
        },
        {
            id: 6,
            title: 'Luxury Living Room',
            category: 'interior',
            description: 'Premium interior design with custom furniture and refined aesthetics',
            image: '/images/project-interior-1.jpg'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'residential', label: 'Residential' },
        { id: 'commercial', label: 'Commercial' },
        { id: 'interior', label: 'Interior Design' }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="projects-header text-center">
                    <span className="section-label">Our Work</span>
                    <h2 className="section-title">
                        Featured Projects
                    </h2>
                    <p className="projects-subtitle">
                        Explore our portfolio of exceptional construction and interior design projects
                        that showcase our commitment to quality and innovation.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="projects-filters">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <span className="project-category">
                                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                                        </span>
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
