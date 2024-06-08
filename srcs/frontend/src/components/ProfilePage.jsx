import React, { useState } from 'react';

import { ethers } from 'ethers';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './ProfilePage.css';
import nft1 from '../assets/0.jpg';

import Yalla from "../YallaVote.json"
const YallaVote = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
async function mint(){
	try {
		if (typeof window.ethereum !== "undefined"){
			const provider = new ethers.BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();
			console.log(signer)
			const contract = new ethers.Contract(YallaVote, Yalla.abi, signer);
			const transaction = await contract.mint(signer.address, "", {
				value: ethers.parseEther("0")
			  });
			await transaction.wait();
		}
	}
	catch (error) {
		console.log(error.message)
	  }
}

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
    mint()
    setIsModalOpen(false);
    setIsMintSuccess(true);
    setNftMinted(true);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>{user.name}'s Profile</h1>
        <p>Wallet Address: {user.walletAddress}</p>
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
    </div>
  );
};

export default ProfilePage;
