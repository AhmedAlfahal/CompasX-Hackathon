import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './PredictorModal.css';

const PredictorModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Predictor Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Prediction Results</h2>
        <p>{data}</p>
        <button onClick={onRequestClose} className="cancel-button">Close</button>
      </motion.div>
    </Modal>
  );
};

export default PredictorModal;
