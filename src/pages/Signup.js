import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // Social icons
import '../styles/Signup.css';

function Signup() {
  const [userType, setUserType] = useState('student'); // State for user type selection

  return (
    <div className="signup-page">
      {/* Left Section: Signup Form */}
      <div className="signup-left">
        <div className="logo">EduMentor</div>
        <h1>Join Smart EduMentor!</h1>
        <p>Create a EduMentor account.</p>

        <div className="user-type-selection">
          <span className="user-type-icon">👥</span> Select your user type
          <div className="user-type-options">
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="mentor"
                checked={userType === 'mentor'}
                onChange={(e) => setUserType(e.target.value)}
              />
              Mentor
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="university"
                checked={userType === 'university'}
                onChange={(e) => setUserType(e.target.value)}
              />
              University
            </label>
          </div>
        </div>

        <form className="signup-form">
          <div className="input-group">
            <input type="text" id="fullName" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <input type="password" id="confirmPassword" placeholder="Re-enter your password" />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-signup">
          <p>Continue with</p>
          <div className="social-buttons">
            <button className="social-btn facebook"><FaFacebookF /></button>
            <button className="social-btn google"><FaGoogle /></button>
            <button className="social-btn linkedin"><FaLinkedinIn /></button>
          </div>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>

      {/* Right Section: Welcome Message */}
      <div className="signup-right">
        <h2>Welcome to <span>EduMentor Community</span></h2>
        <p>Enter Your Password and start your journey with Us</p>
        <Link to="/login">
          <button className="login-btn">Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;