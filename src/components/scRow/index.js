import React from 'react'
import movie from '../../images/movie.jpg'
import pc from '../../images/pc.png'
import Screenshot from '../screenshots'
import './index.css'

const ScreenshotsRow = () => {
    return (
        <div className="screenshots-row">
          <a href='https://moviehunt.onrender.com'><Screenshot imageUrl={movie} alt="Screenshot 1" description="Movie Hunt: Using the IMDB api, this all allows users to sech the database and receive all pertinent information for the searched movie and add it to a favorites list for later.  " /></a>
          <a href='https://pc-super-store.onrender.com/'><Screenshot imageUrl={pc} alt="Screenshot 2" description="PC Super-Store: This app is a basic E-commerce site with computer parts.  Utilizing passport to create and verify users and keep track of users orders. " /></a>
          
        </div>
      );
    }

export default ScreenshotsRow
