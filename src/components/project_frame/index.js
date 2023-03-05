import React from 'react';
import './index.css';



function ImageFrame(props) {

    console.log(props);

  return (
    <div className="image-frame">
      <img src={props.src} alt={props.alt} className="image" />
      <div className="overlay">
        <a href={props.src} target="_blank" rel="noopener noreferrer" className="button">
          View Screenshot
        </a>
      </div>
    </div>
  );
}

export default ImageFrame;