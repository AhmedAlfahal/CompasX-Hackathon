import React, { useState, useEffect } from 'react';
import "./VotersDetails.css";
const VoterDetailsPage = () => {
  const [voters, setVoters] = useState([]);
  const [view, setView] = useState('card');

  useEffect(() => {
    // Mock data for demonstration purposes
    const mockVoters = [
      { name: 'Ahmed', team: 'Team A', prize: 'NFT 1', date: '2024-06-09' },
      { name: 'Maha', team: 'Team B', prize: 'NFT 2', date: '2024-06-08' },
      { name: 'Charlie', team: 'Team A', prize: 'NFT 3', date: '2024-06-07' },
      { name: 'Ehsan', team: 'Team A', prize: 'NFT 3', date: '2024-06-07' },
      { name: 'Mustafa', team: 'Team b', prize: 'NFT 1', date: '2024-06-07' },
      { name: 'Hisham', team: 'Team A', prize: 'NFT 3', date: '2024-06-07' },
    ];
    setVoters(mockVoters);
  }, []);

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <div className="voter-details-page">
      <header className="voter-details-header">
        <h1>Voters Details</h1>
      </header>
      <div className="view-toggle-buttons">
        <button 
          onClick={() => handleViewChange('card')} 
          className={`view-toggle-button ${view === 'card' ? 'active' : ''}`}
        >
          Card View
        </button>
        <button 
          onClick={() => handleViewChange('table')} 
          className={`view-toggle-button ${view === 'table' ? 'active' : ''}`}
        >
          Table View
        </button>
      </div>
      <section className="voters-section">
        {view === 'card' ? (
          <div className="voters-cards-container">
            {voters.map((voter, index) => (
              <div key={index} className="voter-card">
                <div className="voter-field"><strong>Name:</strong> {voter.name}</div>
                <div className="voter-field"><strong>Team:</strong> {voter.team}</div>
                <div className="voter-field"><strong>Prize:</strong> {voter.prize}</div>
                <div className="voter-field"><strong>Date:</strong> {voter.date}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="voters-table-container">
            <table className="voters-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Team</th>
                  <th>Prize</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {voters.map((voter, index) => (
                  <tr key={index}>
                    <td>{voter.name}</td>
                    <td>{voter.team}</td>
                    <td>{voter.prize}</td>
                    <td>{voter.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default VoterDetailsPage;



