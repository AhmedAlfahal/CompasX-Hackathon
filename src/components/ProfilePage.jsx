import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './ProfilePage.css';
import nft1 from '../assets/0.jpg';

const ProfilePage = ({ user }) => {
  const [nftMinted, setNftMinted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMintSuccess, setIsMintSuccess] = useState(false);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isMintSuccess) {
      timer = setTimeout(() => {
        if (1) {
          setIsTagModalOpen(true);
          user.tags.push('Analyst'); // Add the new tag to user
        }
      }, 5000); // Show the modal after 5 seconds
    }
    return () => clearTimeout(timer); // Cleanup the timer
  }, [isMintSuccess, user]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeTagModal = () => {
    setIsTagModalOpen(false);
  };

  const handleMintNft = () => {
    // Logic to mint the NFT
    setIsModalOpen(false);
    setIsMintSuccess(true);
    setNftMinted(true);
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent("I've just become an Analyst by claiming 10 NFTs on YallaVote!");
    const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{user.name}'s Profile</h1>
        <p>Wallet Address: {user.walletAddress}</p>
      </div>
      <div className="tags">
        <h3>Tags</h3>
        <div className="tags-list">
          {user.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="profile-content">
        <div className="nft-collection">
          <h2>Your NFTs</h2>
          <div className="nft-grid">
            {user.nfts.map((nft, index) => (
              <div className="nft-card" key={index}>
                <img src={nft1} alt={nft.name} />
                <p>{nft.name}</p>
                {!nftMinted && (
                  <button onClick={openModal} className="mint-button">Mint NFT</button>
                )}
                {nftMinted && (
                  <p>NFT Minted!</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat-card">
            <p>Total Votes</p>
            <h3>{user.totalVotes}</h3>
          </div>
          <div className="stat-card">
            <p>Success Votes</p>
            <h3>{user.successVotes}</h3>
          </div>
          <div className="stat-card">
            <p>Failures</p>
            <h3>{user.failures}</h3>
          </div>
          <div className="stat-card">
            <p>Winning Streak</p>
            <h3>{user.winningStreak}</h3>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Mint NFT Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Confirm Mint NFT</h2>
          <p>Are you sure you want to mint this NFT?</p>
          <button onClick={handleMintNft} className="confirm-button">Confirm</button>
          <button onClick={closeModal} className="cancel-button">Cancel</button>
        </motion.div>
      </Modal>
      {isMintSuccess && (
        <motion.div
          className="success-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>Congratulations! NFT Minted Successfully!</p>
        </motion.div>
      )}
      <Modal
        isOpen={isTagModalOpen}
        onRequestClose={closeTagModal}
        contentLabel="New Tag Notification"
        className="modal"
        overlayClassName="overlay"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Congratulations!</h2>
          <p>You have claimed 10 NFTs and you have become an Analyst. Share it on social media platforms and notify the world!</p>
          <div className="social-share-buttons">
            <button onClick={shareOnLinkedIn} className="confirm-button">Share on LinkedIn</button>
            <button onClick={shareOnTwitter} className="confirm-button">Share on Twitter</button>
            <button onClick={shareOnFacebook} className="confirm-button">Share on Facebook</button>
          </div>
          <button onClick={closeTagModal} className="cancel-button">Close</button>
        </motion.div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
