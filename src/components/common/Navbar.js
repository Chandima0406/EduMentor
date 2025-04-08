// src/components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">EduMentor</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <Link to="/login"> {/* Changed from /Login to /login */}
        <button>Sign In</button>
      </Link>
    </nav>
  );
}

export default Navbar;