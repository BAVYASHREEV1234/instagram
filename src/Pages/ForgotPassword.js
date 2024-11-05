// src/pages/ForgotPassword.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendLink = (e) => {
    e.preventDefault();
    alert('Login link sent to your email!');
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const handleCreateNewAccount = () => {
    navigate('/signup');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-content">
        <div className="icon">
          <i className="fas fa-lock"></i>
        </div>
        <h2>Trouble logging in?</h2>
        <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
        <form onSubmit={handleSendLink}>
          <input type="text" placeholder="Email, Phone, or Username" required />
          <button type="submit" className="send-link-button">Send login link</button>
        </form>
        <p className="reset-password-link">Can't reset your password?</p>
        <div className="separator">
          <hr className="line" /> <span>OR</span> <hr className="line" />
        </div>
        <p className="create-account-link" onClick={handleCreateNewAccount}>
          Create new account
        </p>
        <button className="back-to-login" onClick={handleBackToLogin}>
          Back to login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

