// src/components/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleWatchStreamsClick = () => {
    navigate('/streams');
  };

  return (
    <div className="login-page">
      <h1>Welcome to Compass Voting by Yalla Vote</h1>
      <div className="button-container">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <button className="watch-streams-button" onClick={handleWatchStreamsClick}>Watch Streams</button>
      </div>
    </div>
  );
};

export default LoginPage;
