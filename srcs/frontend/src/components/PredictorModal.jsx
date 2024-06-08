// PredictorModal.jsx
import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './PredictorModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
  },
};

const PredictorModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Predictor Modal"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Prediction Results</h2>
        <p>{data}</p>
        <button onClick={onRequestClose}>Close</button>
      </motion.div>
    </Modal>
  );
};

export default PredictorModal;
