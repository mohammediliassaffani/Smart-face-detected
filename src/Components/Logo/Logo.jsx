import React from 'react';

import brain from './assets/brain.png';
import './Logo.css';
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <div className="Tilt-inner ">
        <img className="Logo" src={brain} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
