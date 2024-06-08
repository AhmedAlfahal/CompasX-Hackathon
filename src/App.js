import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Livestream from './Livestream';
import CompetitionBar from './components/CompetitionBar';
import VotingButton from './components/VotingButton';
import PredictorModal from './components/PredictorModal';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import VoteConfirmationModal from './components/VoteConfirmationModal';
import WinningNotificationModal from './components/WinningNotificationModal';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const [votesTeamA, setVotesTeamA] = useState(0);
  const [votesTeamB, setVotesTeamB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false);
  const [winningNotificationIsOpen, setWinningNotificationIsOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  const [user, setUser] = useState({
    name: 'John Doe',
    totalVotes: 10,
    successVotes: 7,
    failures: 3,
    winningStreak: 5,
    nft: {
      image: 'path/to/nft.png',
      name: 'Champion NFT'
    }
  });
  const [team, setTeam] = useState(null);

  const handleVoteClick = (team) => {
    setTeam(team);
    setConfirmationModalIsOpen(true);
  };

  const handleConfirmVote = () => {
    setConfirmationModalIsOpen(false);
    setModalData(`Prediction for Team ${team}`);
    setModalIsOpen(true);

    if (team === 'A') {
      setVotesTeamA(votesTeamA + 1);
    } else if (team === 'B') {
      setVotesTeamB(votesTeamB + 1);
    }
    setVoted(true);

    setTimeout(() => {
      setWinningNotificationIsOpen(true);
      user.successVotes += 1;
      user.totalVotes += 1;
      user.winningStreak += 1;
      setUser({ ...user });
    }, 3000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const closeWinningNotification = () => {
    setWinningNotificationIsOpen(false);
    navigate('/profile');
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/" element={
          <>
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
              <VotingButton color="#E91E63" onClick={() => handleVoteClick('A')} disabled={voted}>
                Team A
              </VotingButton>
              <VotingButton color="#00BCD4" onClick={() => handleVoteClick('B')} disabled={voted}>
                Team B
              </VotingButton>
            </div>
            <PredictorModal isOpen={modalIsOpen} onRequestClose={closeModal} data={modalData} />
            <VoteConfirmationModal
              isOpen={confirmationModalIsOpen}
              onRequestClose={() => setConfirmationModalIsOpen(false)}
              onConfirm={handleConfirmVote}
            />
            <WinningNotificationModal
              isOpen={winningNotificationIsOpen}
              onRequestClose={closeWinningNotification}
            />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
