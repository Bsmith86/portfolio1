import React from 'react'
import './index.css'
const  Screenshot = ({imageUrl, altText, description}) => {
    return (
        <div className="screenshot">
          <img src={imageUrl} alt={altText} />
          <div className="description">{description}</div>
        </div>
      );
    }

export default  Screenshot
