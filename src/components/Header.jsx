import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import userImage from '../assets/userImage.jpg'; // Add the path to the user's image

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
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
          <img src={userImage} alt="User" className="user-image" />
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
