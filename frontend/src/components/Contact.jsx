import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Initialize EmailJS
emailjs.init('I34Zvhhl5UHEoS5_R');

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            try {
                // Send email using EmailJS
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_email: '123bhargavdas@gmail.com'
                };

                await emailjs.send(
                    'default_service', // This will be auto-detected
                    'template_c92qjjs',
                    templateParams
                );

                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } catch (error) {
                console.error('EmailJS error:', error);
                setErrors({ submit: 'Failed to send message. Please try again.' });
            } finally {
                setLoading(false);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header text-center">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-title">
                        Let's Build Something Amazing Together
                    </h2>
                    <p className="contact-subtitle">
                        Ready to start your project? Contact us today for a consultation and let's
                        discuss how we can bring your vision to life.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            {submitted && (
                                <div className="success-message">
                                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            {errors.submit && (
                                <div className="error-message" style={{ marginBottom: '20px', color: '#e74c3c', fontSize: '14px' }}>
                                    {errors.submit}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                    placeholder="Abhinav Bajaj"
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    placeholder="abhinav@example.com"
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? 'error' : ''}
                                    placeholder="+91 9522529999"
                                />
                                {errors.phone && <span className="error-message">{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'error' : ''}
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary btn-lg"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <h4>Phone</h4>
                            <p>+91 9522529999</p>
                            <p className="info-subtext">Mon-Sat, 9AM-6PM</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">✉️</div>
                            <h4>Email</h4>
                            <p>abhinav@construction.com</p>
                            <p className="info-subtext">We'll respond within 24 hours</p>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <h4>Location</h4>
                            <p>Mumbai, Maharashtra</p>
                            <p className="info-subtext">Serving across India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
