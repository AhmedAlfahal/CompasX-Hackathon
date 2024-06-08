import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './WinningNotificationModal.css';

const WinningNotificationModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Winning Notification"
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
        <p>Your team won. You can get the NFT from your profile page.</p>
        <button onClick={onRequestClose} className="confirm-button">Go to Profile</button>
      </motion.div>
    </Modal>
  );
};

export default WinningNotificationModal;
