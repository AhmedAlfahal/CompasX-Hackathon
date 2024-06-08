import React, { useEffect, useState } from 'react';
import './CompetitionBar.css';

const CompetitionBar = ({ player1Score, player2Score }) => {
  const [player1Width, setPlayer1Width] = useState(0);
  const [player2Width, setPlayer2Width] = useState(0);

  useEffect(() => {
    const totalScore = player1Score + player2Score;
    const p1Width = (player1Score / totalScore) * 100;
    const p2Width = (player2Score / totalScore) * 100;

    setPlayer1Width(p1Width);
    setPlayer2Width(p2Width);
  }, [player1Score, player2Score]);

  return (
    <div className="competition-bar">
      <div className="player-segment player1" style={{ width: `${player1Width}%` }}>
        <span className="score-label">{player1Score}</span>
      </div>
      <div className="player-segment player2" style={{ width: `${player2Width}%` }}>
        <span className="score-label">{player2Score}</span>
      </div>
    </div>
  );
}

export default CompetitionBar;
