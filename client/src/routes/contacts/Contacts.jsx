import "./contacts.css";
import { useState } from "react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdEmail, MdStar, MdStarBorder } from 'react-icons/md';
import { IoSendSharp } from "react-icons/io5";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here you can add your API call to backend
      console.log('Form submitted:', formData);
      setFormData(prev => ({ ...prev, message: '', subject: '' }));
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacts-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Let's Start a Conversation</h1>
        <p>We're here to help and answer any question you might have</p>
      </div>

      {/* Contact Information Cards */}
      <div className="contact-info-grid">
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Visit Us</h3>
          <p>123 AI Street, Tech Valley</p>
          <p>Silicon City, 12345</p>
        </div>
        <div className="info-card">
          <FaPhone className="info-icon" />
          <h3>Call Us</h3>
          <p>+1 (555) 123-4567</p>
          <p>Mon-Fri, 9:00-18:00</p>
        </div>
        <div className="info-card">
          <MdEmail className="info-icon" />
          <h3>Email Us</h3>
          <p>support@aiagent.com</p>
          <p>info@aiagent.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section">
        <div className="section-header">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What is your message about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          <button type="submit" className="send-button">
            <span>Send Message</span>
            <IoSendSharp className="send-icon" />
          </button>
        </form>
      </div>

      {/* Review Section */}
      <div className="review-section">
        <div className="section-header">
          <h2>Rate Your Experience</h2>
          <p>Your feedback helps us improve our service</p>
        </div>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              {star <= (hoverRating || rating) ? <MdStar /> : <MdStarBorder />}
            </span>
          ))}
        </div>
      </div>

      {/* Social Section */}
      <div className="social-section">
        <div className="section-header">
          <h2>Connect With Us</h2>
          <p>Follow us on social media for updates and news</p>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon instagram">
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a href="#" className="social-icon twitter">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a href="#" className="social-icon whatsapp">
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <a href="#" className="social-icon github">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="#" className="social-icon linkedin">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;