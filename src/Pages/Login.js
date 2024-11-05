// src/pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    setIsLoggedIn(true); // Set the login state to true
    navigate('/'); // Redirect to homepage after login
  };

  // Handle login with Facebook
  const handleLoginWithFacebook = () => {
    alert('Logging in with Facebook...');
    setIsLoggedIn(true); // Set the login state to true
    navigate('/'); // Redirect to homepage after login
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    alert('Redirecting to password recovery page...');
    navigate('/forgot-password'); // Navigate to Forgot Password page
  };

  // Navigate to Signup page
  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>Instagram</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Phone number, username, or email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="login-button">Log in</button>
      </form>

      <div className="separator">
        <hr className="line" /><span>OR</span><hr className="line" />
      </div>

      <button className="facebook-login" onClick={handleLoginWithFacebook}>
        <i className="fab fa-facebook"></i> Log in with Facebook
      </button>

      <p className="forgot-password" onClick={handleForgotPassword}>
        Forgot password?
      </p>

      <div className="signup-link">
        <p>Don't have an account? <span onClick={handleSignUp}>Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;