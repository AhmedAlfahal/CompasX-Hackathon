// Livestream.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Livestream.css'; // Add this for custom styles

function Livestream() {
  const [stream, setStream] = useState(null);
  const videoId = 'SjRfMhLxwOY'; // Your specific video ID

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: videoId,
            key: 'AIzaSyAgHXdrHSO_hTrV_dPBonWO7UbX4oR3ktA' // Replace with your API key
          }
        });
        if (response.data.items.length > 0) {
          setStream(response.data.items[0]);
        }
      } catch (error) {
        console.error('Error fetching stream:', error);
      }
    };

    fetchStream();
  }, [videoId]);

  return (
    <div className="livestream-container">
      {stream ? (
        <div>
          <h2>{stream.snippet.title}</h2>
          {/* <p>{stream.snippet.description}</p> */}
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={stream.snippet.title}
          ></iframe>
        </div>
      ) : (
        <div>No live stream available</div>
      )}
    </div>
  );
}

export default Livestream;
