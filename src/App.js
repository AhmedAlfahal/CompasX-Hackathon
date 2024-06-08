// App.js
import React, { useState } from 'react';
import Livestream from './Livestream';
import CompetitionBar from './components/CompetitionBar';
import VotingButton from './components/VotingButton';
import './App.css';

function App() {
  const [votesTeamA, setVotesTeamA] = useState(0);
  const [votesTeamB, setVotesTeamB] = useState(0);

  const handleVote = (team) => {
    if (team === 'A') {
      setVotesTeamA(votesTeamA + 1);
    } else if (team === 'B') {
      setVotesTeamB(votesTeamB + 1);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Gaming Livestream</h1>
        <Livestream />
        <CompetitionBar player1Score={votesTeamA} player2Score={votesTeamB} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
          <VotingButton color="#E91E63" onClick={() => handleVote('A')}>Team A</VotingButton>
          <VotingButton color="#00BCD4" onClick={() => handleVote('B')}>Team B</VotingButton>
        </div>
      </div>
    </>
  );
}

export default App;
