// src/components/LoginPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/loading');
  };

  return (
    <div className="login-page">
      <header className="hero-section">
        <h1>Welcome to Compass Voting</h1>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleLoginClick}>
            Login With MetaMask
          </button>
          <Link to="/streams" className="btn-secondary">
            Watch Streams
          </Link>
        </div>
      </header>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
