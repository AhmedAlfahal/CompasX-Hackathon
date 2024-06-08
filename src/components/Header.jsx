import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to profile page
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Yalla</h1>
        <h2>Vote</h2>
      </div>
      <div className="header-right">
        <div className="profile-dropdown">
          <button className="profile-button">Profile</button>
          <div className="dropdown-content">
            <a onClick={handleProfileClick}>Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
