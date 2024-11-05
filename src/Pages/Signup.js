import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


const Signup = () => {
  const navigate = useNavigate();

  // Handle the form submission for signing up
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign up successful!');  // Show a success message
    navigate('/login');  // Redirect to the login page after signup
  };

  // Handle the log in link click
  const handleLogIn = () => {
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="signup-container">
      <h1>Instagram</h1>
      <p>Sign up to see photos and videos from your friends.</p>

      <form className="signup-form" onSubmit={handleSignUp}>
        <input type="text" placeholder="Mobile Number or Email" required />
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />

        <p className="signup-terms">
          People who use our service may have uploaded your contact information to Instagram.
          <button className="link-button" onClick={() => alert('Learn more about this.')}> Learn More</button>
        </p>

        <p className="signup-terms">
          By signing up, you agree to our 
          <button className="link-button" onClick={() => alert('Terms and conditions')}> Terms</button>, 
          <button className="link-button" onClick={() => alert('Privacy policy')}>Privacy Policy</button>, and 
          <button className="link-button" onClick={() => alert('Cookies policy')}>Cookies Policy</button>.
        </p>

        <button type="submit" className="signup-button">Sign up</button>
      </form>

      <div className="login-link">
        <p>Have an account? <button onClick={handleLogIn} className="link-button">Log in</button></p>
      </div>
    </div>
  );
};

export default Signup;
