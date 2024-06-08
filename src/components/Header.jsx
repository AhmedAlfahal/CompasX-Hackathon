import React from 'react';
import './Header.css'; // Import the CSS for styling

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="../assets/logo.png" alt="Logo" className="logo" />
        <h1>COMPASS</h1>
        <h2>ROAD TO 2024</h2>
      </div>
      <div className="header-right">
        <div className="profile-dropdown">
          <button className="profile-button">Profile</button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
