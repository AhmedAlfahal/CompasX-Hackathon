import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPage.css';

const AdminPage = () => {
  const handleStreamSubmit = (event) => {
    event.preventDefault();
    // Handle stream hosting logic here
    alert('Stream hosted successfully!');
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>

      <section className="host-stream-section">
        <h2>Host a Stream</h2>
        <form onSubmit={handleStreamSubmit}>
          <input type="text" placeholder="Stream Title" required />
          <input type="url" placeholder="Stream URL" required />
          <button type="submit" className="btn-primary">Host Stream</button>
        </form>
        <div className="link-container">
          <Link to="/voter-details" className="btn-secondary">View Voter Details</Link>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
