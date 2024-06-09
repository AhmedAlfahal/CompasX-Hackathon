import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Livestream from './Livestream';
import CompetitionBar from './components/CompetitionBar';
import VotingButton from './components/VotingButton';
import PredictorModal from './components/PredictorModal';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import VoteConfirmationModal from './components/VoteConfirmationModal';
import WinningNotificationModal from './components/WinningNotificationModal';
import LoginPage from './components/LoginPage';
import LoadingScreen from './components/LoadingScreen';
import StreamOnlyPage from './components/StreamOnlyPage';
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
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    totalVotes: 10,
    successVotes: 7,
    failures: 3,
    winningStreak: 5,
    nfts: [
      { image: 'path/to/nft1.png', name: 'NFT 1' }
    ],
    tags: ['Analyst', 'Strategist']
  });

  const [team, setTeam] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalIsOpen && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [modalIsOpen]);

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

    // Update user stats and award tags
    const updatedUser = { ...user };
    updatedUser.successVotes += 1;
    updatedUser.totalVotes += 1;
    updatedUser.winningStreak += 1;
    if (updatedUser.winningStreak >= 10 && !updatedUser.tags.includes('Analyst')) {
      updatedUser.tags.push('Analyst');
    }
    setUser(updatedUser);

    setTimeout(() => {
      setWinningNotificationIsOpen(true);
      updatedUser.nfts.push({ image: 'path/to/new-nft.png', name: 'New NFT' });
      setUser(updatedUser);
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
      <Routes>
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/streams" element={<StreamOnlyPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={
          <>
            <Header />
            <h2>Live Stream</h2>
            <div className="content">
              <div className="video-chat-container">
                <div className="video-container">
                  <Livestream />
                </div>
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
              </div>
              <div className="competition-bar-container">
                <h2 className="competition-bar-label">Result Prediction</h2>
                <CompetitionBar player1Score={votesTeamA} player2Score={votesTeamB} />
                <div className="voting-buttons-container">
                  <VotingButton color="#E91E63" onClick={() => handleVoteClick('A')} disabled={voted}>
                    Team A
                  </VotingButton>
                  <VotingButton color="#00BCD4" onClick={() => handleVoteClick('B')} disabled={voted}>
                    Team B
                  </VotingButton>
                </div>
              </div>
              <PredictorModal ref={modalRef} isOpen={modalIsOpen} onRequestClose={closeModal} data={modalData} />
              <VoteConfirmationModal
                isOpen={confirmationModalIsOpen}
                onRequestClose={() => setConfirmationModalIsOpen(false)}
                onConfirm={handleConfirmVote}
              />
              <WinningNotificationModal
                isOpen={winningNotificationIsOpen}
                onRequestClose={closeWinningNotification}
              />
            </div>
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
