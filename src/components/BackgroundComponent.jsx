import React, { useEffect } from 'react';
import './BackgroundComponent.css';

const BackgroundComponent = () => {
  useEffect(() => {
    const numStars = 3; // Number of shooting stars you want for each color
    const background = document.querySelector('.background');

    for (let i = 0; i < numStars; i++) {
      const whiteStarLeft = document.createElement('div');
      whiteStarLeft.classList.add('star', 'left');
      whiteStarLeft.style.top = `${Math.random() * 100}%`;
      whiteStarLeft.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`; // Add delay for staggered appearance
      background.appendChild(whiteStarLeft);

      const whiteStarRight = document.createElement('div');
      whiteStarRight.classList.add('star', 'right');
      whiteStarRight.style.top = `${Math.random() * 100}%`;
      whiteStarRight.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`; // Add delay for staggered appearance
      background.appendChild(whiteStarRight);

      const goldenStarLeft = document.createElement('div');
      goldenStarLeft.classList.add('star', 'golden', 'left');
      goldenStarLeft.style.top = `${Math.random() * 100}%`;
      goldenStarLeft.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`; // Add delay for staggered appearance
      background.appendChild(goldenStarLeft);

      const goldenStarRight = document.createElement('div');
      goldenStarRight.classList.add('star', 'golden', 'right');
      goldenStarRight.style.top = `${Math.random() * 100}%`;
      goldenStarRight.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`; // Add delay for staggered appearance
      background.appendChild(goldenStarRight);
    }
  }, []);

  return (
    <div className="background">
      {/* Shooting stars will be dynamically generated here */}
    </div>
  );
};

export default BackgroundComponent;
