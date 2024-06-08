import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to profile page
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src="path/to/logo.png" alt="Logo" className="logo" />
        <h1>COMPASS</h1>
        <h2>ROAD TO 2024</h2>
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
