import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StreamsListPage.css';

const StreamsListPage = () => {
  const navigate = useNavigate();

  const streams = [
    { id: 1, title: 'Stream 1' },
    { id: 2, title: 'Stream 2' },
    { id: 3, title: 'Stream 3' }
  ];

  const handleWatchStream = (id) => {
    navigate(`/main`); // Navigate to the voting page for the selected stream
  };

  return (
    <div className="streams-list-page">
      <h1>Available Streams</h1>
      <ul>
        {streams.map((stream) => (
          <li key={stream.id} className="stream-item">
            <div className="stream-info">
              <span>{stream.title}</span>
            </div>
            <div className="stream-button">
              <button onClick={() => handleWatchStream(stream.id)} className="watch-button">
                Watch Stream
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamsListPage;
