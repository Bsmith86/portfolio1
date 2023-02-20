import React from 'react';
import "./index.css";
const PictureFrame = ({ imageUrl, altText }) => {
  return (
    <div className="picture-frame">
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default PictureFrame;