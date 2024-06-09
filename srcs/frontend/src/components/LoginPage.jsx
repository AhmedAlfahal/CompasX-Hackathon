// src/components/LoginPage.jsx
import { useState, React} from 'react';
import {ethers} from 'ethers';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({ user }) => {
	const [error, setError] = useState("");
	async function conectWallet() {
		const provider = new ethers.BrowserProvider(window.ethereum)
		if (!provider) {
			console.log('Please install MetaMask!');
			return null;
		}
		const signer = await provider.getSigner();
		console.log('Connected to wallet:', await signer.getAddress());
		user.walletAddress = await signer.getAddress();
		navigate('/loading');
		return (user.walletAddress)
	}
  const navigate = useNavigate();

  async function handleLoginClick () {
	const wallet = await conectWallet();
	if (wallet)
    	navigate('/loading');
	else
		setError("Please use metamask")
  };

  return (
    <div className="login-page">
      <header className="hero-section">
        <h1>Welcome to Compass Voting</h1>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleLoginClick}>
            Login With MetaMask
          </button>
          <Link to="/streams" className="btn-secondary">
            Watch Streams
          </Link>
		  {error && <p> {error} </p>}
        </div>
      </header>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social-media">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
