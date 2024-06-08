import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './VoteConfirmationModal.css';

const VoteConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Vote Confirmation"
      className="modal"
      overlayClassName="overlay"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Confirm Vote</h2>
        <p>Are you sure you want to vote for this team?</p>
        <button onClick={onConfirm} className="confirm-button">Confirm</button>
        <button onClick={onRequestClose} className="cancel-button">Cancel</button>
      </motion.div>
    </Modal>
  );
};

export default VoteConfirmationModal;
