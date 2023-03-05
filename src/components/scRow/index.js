import React from 'react'
import movie from '../../images/Movie_APP.JPG'
import pcss from '../../images/PCSS.png'
import Screenshot from '../screenshots'
import './index.css'

const ScreenshotsRow = () => {
    return (
        <div className="screenshots-row">
          <Screenshot imageUrl={movie} alt="Screenshot 1" description="Movie App" />
          <Screenshot imageUrl={pcss} alt="Screenshot 2" description="PCSS" />
          <Screenshot imageUrl="screenshot3.jpg" alt="Screenshot 3" description="Description 3" />
        </div>
      );
    }

export default ScreenshotsRow
