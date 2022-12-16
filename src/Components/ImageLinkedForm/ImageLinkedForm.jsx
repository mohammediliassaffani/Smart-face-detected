import React from 'react';
import './ImageLinkedForm.css';

const ImageLinkedForm = () => {
  return (
    <div>
      <p className="f3">{' this is magic'}</p>
      <div className="center">
        <input className="f4 pa2 w-70 center" type="text" />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple ">detect</button>
      </div>
    </div>
  );
};

export default ImageLinkedForm;
