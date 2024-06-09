import React from 'react';
import './Chatbox.css';

const Chatbox = () => {
  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="chat-messages">
        {/* Mock chat messages */}
        <p>User1: Hello!</p>
        <p>User2: Hi there!</p>
        {/* Add more chat messages here */}
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Type your message..." className="chat-input" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
