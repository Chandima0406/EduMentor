import React from 'react';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>EduMentor</h3>
        <p>Email: support@edumentor.com</p>
        <p>Phone: +94 77 427 4820</p>
      </div>
      <div className="footer-section">
        <h3>Quick Navigation Links</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Account & User Support</h3>
        <ul>
          <li>Login/Sign Up</li>
          <li>Help Center/FAQs</li>
          <li>Student Chat Dashboard</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal & Policies</h3>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Affiliate Program Terms</li>
        </ul>
      </div>
      <p className="copyright">© 2025 EduMentor. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;