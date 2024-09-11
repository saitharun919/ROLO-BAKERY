import React from 'react'
import { useState } from 'react';
import './contactus.css';  // Import the CSS file for styling

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        setStatus('success');
        alert('Thank you for contacting us! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      }, 1000);
    } catch (err) {
      setStatus('failed');
      setError(err.toString());
    }
  };

  return (
    <div className="container">
      {/* Title section */}
      <h2 className="title">Contact Us</h2>
      <div className="content-grid">
        {/* Information section */}
        <div className="info-box">
          <h3 className="subtitle">Get in Touch</h3>
          <p><strong>Address:</strong> Inspire Arena, 15, Narsingi - Puppalaguda Main Rd,</p>
          <p><strong></strong> Narsingi, Puppalguda, Hyderabad,</p>
          <p><strong></strong> Telangana 500089, India
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7614.57954391045!2d78.363953!3d17.397876!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95186c6b3ca3%3A0x83d8d7ef0187020b!2sInspire%20Arena%20-%20Commercial%20Building!5e0!3m2!1sen!2suk!4v1725616014359!5m2!1sen!2suk"
            width="100%"
            height="400"
            className="map"
            allowFullScreen=""
            loading="lazy"
            title="School Location"
          ></iframe>
        </div>
        {/* Contact form section */}
        <div className="form-box">
          <h3 className="subtitle">Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="submit-button"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
          {status === 'failed' && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;




