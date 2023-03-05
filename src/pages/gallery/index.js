import React from 'react'
import ImageFrame from '../../components/project_frame'
import PictureFrame from '../../components/picture_frame'
import movie from '../../images/Movie_APP.JPG'
import pcss from '../../images/PCSS.png'
import './index.css'
import Screenshot from '../../components/screenshots'
const Gallery = () => {
  return (
    <div className="gallery">
      <header><h1>My Projects</h1></header>
    <main>
    <PictureFrame imageUrl={movie} altText="profile_pic"/>
    <PictureFrame imageUrl={pcss} altText="profile_pic"/>
    <Screenshot src='../../images/Movie_APP.JPG' alt="Screenshot 1" description="Movie App" />
    </main>  
    </div>
  )
}

export default Gallery
