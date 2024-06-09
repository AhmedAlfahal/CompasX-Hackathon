// src/components/StreamOnlyPage.jsx
import React from 'react';
import Livestream from '../Livestream';
import './StreamOnlyPage.css';

const StreamOnlyPage = () => {
  return (
    <div className="stream-only-page">
      <h1>Live Stream</h1>
      <div className="stream-and-chat">
        <div className="stream-container">
          <Livestream />
        </div>
        <div className="chatbox-container">
          {/* Chatbox component here */}
        </div>
      </div>
    </div>
  );
};

export default StreamOnlyPage;
