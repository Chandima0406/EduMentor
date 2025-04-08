import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { FaEnvelope, FaBook, FaUsers } from 'react-icons/fa'; // Icons for sections
import '../styles/Contact.css';

function Contact() {
  const faqs = [
    { question: 'How do I connect with a mentor?', expanded: false },
    { question: 'How can I earn rewards as a graduate mentor?', expanded: false },
    { question: 'How can I track my skill development progress?', expanded: false },
    { question: 'How do I refer peers to courses to earn rewards?', expanded: false },
  ];

  return (
    <div className="contact-page">
      <Navbar />

      {/* Main Section */}
      <section className="contact-main">
        <h1>How Can We Help You?</h1>
        <p>
          Contact with support team, find answer to common questions, or send us an inquiry about mentorship, course collaborations, or technical issues.
        </p>

        <div className="contact-grid">
          {/* Contact Support */}
          <div className="contact-card">
            <div className="card-header">
              <FaEnvelope className="card-icon" />
              <h2>Contact Support</h2>
            </div>
            <p>Need help with your learning journey or experiencing technical issues? Our support team is ready to assist.</p>
            <form className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <select>
                  <option>Technical Support</option>
                  <option>Mentorship Inquiry</option>
                  <option>Course Issue</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="input-group">
                <textarea placeholder="Message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Request</button>
            </form>
          </div>

          {/* Browse FAQs */}
          <div className="contact-card">
            <div className="card-header">
              <FaBook className="card-icon" />
              <h2>Browse FAQs</h2>
            </div>
            <p>Find quick answers to common questions about our platform, courses, and mentorship program.</p>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <p>{faq.question}</p>
                  <span>▼</span>
                </div>
              ))}
            </div>
            <Link to="/faqs">
              <button className="view-all-btn">View All FAQs</button>
            </Link>
          </div>

          {/* Partnership Inquiries */}
          <div className="contact-card">
            <div className="card-header">
              <FaUsers className="card-icon" />
              <h2>Partnership Inquiries</h2>
            </div>
            <p>Interested in becoming a course creator, educator, mentor, or institutional partner? Let’s discuss how we can collaborate.</p>
            <div className="partnership-options">
              <p>Become a Course Creator</p>
              <p>Join as a Mentor</p>
              <p>Institutional Partnerships</p>
              <p>Corporate Training Solutions</p>
            </div>
            <p>Contact our partnership team directly:</p>
            <p className="contact-info">
              <span>📧</span> partnerships@edumentor.com
            </p>
            <p className="contact-info">
              <span>📞</span> (011) 123 4567
            </p>
          </div>
        </div>
      </section>

      {/* Additional Support Resources */}
      <section className="additional-support">
        <h2>Additional Support Resources</h2>
        <div className="support-grid">
          <div className="support-card">
            <h3>Technical Support</h3>
            <p>Having trouble with our platform? Our technical team is ready to help.</p>
            <Link to="/help-center">
              <button className="support-btn">Visit Help Center</button>
            </Link>
          </div>
          <div className="support-card">
            <h3>Career Guidance</h3>
            <p>Schedule a session with a career counselor to discuss your professional path.</p>
            <Link to="/book-appointment">
              <button className="support-btn">Book Appointment</button>
            </Link>
          </div>
          <div className="support-card">
            <h3>Community Forums</h3>
            <p>Connect with peers, share insights, and solve problems together.</p>
            <Link to="/community">
              <button className="support-btn">Join Discussion</button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;