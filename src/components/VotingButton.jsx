import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Button = styled(motion.button)`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 15px 40px; /* Increased padding for wider buttons */
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const Ripple = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
  pointer-events: none;
`;

const VotingButton = ({ color, children, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const newRipple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      key: new Date().getTime(),
    };
    setRipples([...ripples, newRipple]);
    setIsPressed(true);
    onClick(); // Call the passed onClick function
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Button
        color={color}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        {isPressed ? `Voted for ${children}` : `${children} Vote`}
      </Button>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <Ripple
            key={ripple.key}
            color={color}
            initial={{ opacity: 0.5, scale: 0, top: ripple.y, left: ripple.x }}
            animate={{ opacity: 0, scale: 10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ top: ripple.y, left: ripple.x }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default VotingButton;
