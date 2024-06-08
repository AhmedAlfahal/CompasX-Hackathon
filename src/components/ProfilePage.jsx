import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './ProfilePage.css';

const ProfilePage = ({ user }) => {
  const [nftMinted, setNftMinted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMintSuccess, setIsMintSuccess] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMintNft = () => {
    // Logic to mint the NFT
    setIsModalOpen(false);
    setIsMintSuccess(true);
    setNftMinted(true);
  };

  return (
    <div className="profile-page">
      <h1>{user.name}'s Profile</h1>
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
      <div className="nft-section">
        <h2>Your NFTs</h2>
        {user.nft && (
          <div className="nft">
            <img src={user.nft.image} alt="NFT" />
            <p>{user.nft.name}</p>
            {!nftMinted ? (
              <button onClick={openModal} className="mint-button">Mint NFT</button>
            ) : (
              <p>NFT Minted!</p>
            )}
          </div>
        )}
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
    </div>
  );
};

export default ProfilePage;
