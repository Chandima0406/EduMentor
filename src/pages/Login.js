import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'; // Social icons
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      {/* Left Section: Login Form */}
      <div className="login-left">
        <div className="logo">EduMentor</div>
        <h1>Welcome back!</h1>
        <h2>Please enter your credentials to continue.</h2>
        <p>Access your courses, mentorship programs, and university resources.</p>

        <form className="login-form">
          <div className="input-group">
            
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-btn">Log In</button>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>
        </form>

        <div className="divider">
          <span>Or</span>
        </div>

        <div className="social-login">
          <p>Continue with</p>
          <div className="social-buttons">
            <button className="social-btn facebook"><FaFacebookF /></button>
            <button className="social-btn google"><FaGoogle /></button>
            <button className="social-btn linkedin"><FaLinkedinIn /></button>
          </div>
        </div>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      {/* Right Section: Welcome Message */}
      <div className="login-right">
        <h2>Welcome to <span>Smart EduMentor!</span></h2>
        <p>Join our platform and start learning, mentoring, or managing courses.</p>
        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;