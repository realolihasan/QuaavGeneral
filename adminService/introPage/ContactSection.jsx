// ContactSection.jsx
// Purpose: Provide contact information and form
// Layout:
// 1. Contact form with glass effect
// 2. Address display
// 3. Company registration details
// 4. Embedded map
// Uses existing Style.css classes for glass effects and forms

import React, { useState } from 'react';
import { Mail, MapPin, Building } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="section">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="h2 mb-4">Contact Us</h2>
          <p className="subtitle max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="input"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="card p-8">
              <div className="flex items-start gap-4">
                <Building className="mt-1" />
                <div>
                  <h3 className="h3 mb-2">Company Details</h3>
                  <p className="text-white/80 mb-2">QUAAV SYSTEM LIMITED</p>
                  <p className="text-white/80 mb-2">Company number 15594857</p>
                  <p className="text-white/80">Nature of business (SIC):</p>
                  <p className="text-white/80">62020 - Information technology consultancy activities</p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1" />
                <div>
                  <h3 className="h3 mb-2">Address</h3>
                  <p className="text-white/80">
                    8 Fleetwood Court, Farnborough Common,<br />
                    Orpington, England, BR6 8NB
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-1" />
                <div>
                  <h3 className="h3 mb-2">Email</h3>
                  <a href="mailto:info@quaav.com" className="text-white/80 hover:text-white">
                    info@quaav.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 card overflow-hidden">
          <iframe
            title="QUAAV Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.7858437025424!2d0.0765297!3d51.3764688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aa91c0f76f2d%3A0x4b6f5a4c8a979c11!2sFarnborough%20Common%2C%20Orpington%20BR6%208NB%2C%20UK!5e0!3m2!1sen!2s!4v1624451234567!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;