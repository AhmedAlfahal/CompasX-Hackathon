import React, { useState } from 'react';
import Livestream from './Livestream';
import CompetitionBar from './components/CompetitionBar';
import VotingButton from './components/VotingButton';
import PredictorModal from './components/PredictorModal';
import Header from './components/Header';
import './App.css';

function App() {
  const [votesTeamA, setVotesTeamA] = useState(0);
  const [votesTeamB, setVotesTeamB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  const handleVote = (team) => {
    if (team === 'A') {
      setVotesTeamA(votesTeamA + 1);
    } else if (team === 'B') {
      setVotesTeamB(votesTeamB + 1);
    }
    setVoted(true);
    setModalData(`Prediction for Team ${team}`);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="video-stream">
          <Livestream />
        </div>
        <div className="chat-box">
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
      </div>
      <div className="competition-bar-container">
        <CompetitionBar player1Score={votesTeamA} player2Score={votesTeamB} />
      </div>
      <div className="voting-buttons-container">
        <VotingButton color="#E91E63" onClick={() => handleVote('A')} disabled={voted}>
          Team A
        </VotingButton>
        <VotingButton color="#00BCD4" onClick={() => handleVote('B')} disabled={voted}>
          Team B
        </VotingButton>
      </div>
      <PredictorModal isOpen={modalIsOpen} onRequestClose={closeModal} data={modalData} />
    </div>
  );
}

export default App;
