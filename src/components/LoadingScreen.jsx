// src/components/LoadingScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 3000); // 3-second loading screen
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingScreen;
