import React from 'react';
import Tilt from 'react-tilt';
import brain from './assets/brain.png';
import './Logo.css';
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 25, speed: 300 }}>
        <div className="Tilt-inner ">
          <img className="Logo" src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
