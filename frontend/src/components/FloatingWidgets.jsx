import React from 'react';
import './FloatingWidgets.css';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingWidgets = () => {
    return (
        <div className="floating-widgets">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="widget-item whatsapp" aria-label="Chat on WhatsApp">
                <FaWhatsapp />
            </a>
            <a href="tel:+1234567890" className="widget-item phone" aria-label="Call Us">
                <FaPhone />
            </a>
        </div>
    );
};

export default FloatingWidgets;
