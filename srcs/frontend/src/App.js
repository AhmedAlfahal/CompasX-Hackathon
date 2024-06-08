import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Livestream from './Livestream';
import CompetitionBar from './components/CompetitionBar';
import VotingButton from './components/VotingButton';
import PredictorModal from './components/PredictorModal';
import Header from './components/Header';
import ProfilePage from './components/ProfilePage';
import './App.css';

async function getAccount() {
	const provider = new ethers.BrowserProvider(window.ethereum)
	const signer = await provider.getSigner();
	return (signer.address)
}

const App = () => {
	const [account, setAccount] = useState("");
  const navigate = useNavigate();
  const [votesTeamA, setVotesTeamA] = useState(0);
  const [votesTeamB, setVotesTeamB] = useState(0);
  const [voted, setVoted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const handleVote = (team) => {
    if (team === 'A') {
      setVotesTeamA(votesTeamA + 1);
    } else if (team === 'B') {
      setVotesTeamB(votesTeamB + 1);
    }
    setVoted(true);
    setModalData(`Prediction for Team ${team}`);
    setModalIsOpen(true);

    // Simulate team win condition
    if (team === 'A') {
      user.successVotes += 1;
      user.totalVotes += 1;
      user.winningStreak += 1;
      setUser({ ...user });
      navigate('/profile'); // Redirect to profile page if user wins
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
	setAccount(getAccount());
	console.log(account);
	const handleAccountsChanged = () => {
		setAccount(getAccount());
		console.log(account);
	};

	window.ethereum.on('accountsChanged', handleAccountsChanged);

	return () => {
	  window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
	};
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/profile" element={<ProfilePage user={user} account={account}/>} />
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
              <VotingButton color="#E91E63" onClick={() => handleVote('A')} disabled={voted}>
                Team A
              </VotingButton>
              <VotingButton color="#00BCD4" onClick={() => handleVote('B')} disabled={voted}>
                Team B
              </VotingButton>
            </div>
            <PredictorModal isOpen={modalIsOpen} onRequestClose={closeModal} data={modalData} />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;
