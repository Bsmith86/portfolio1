import React from 'react'
import PictureFrame from '../../components/picture_frame'
import myImage from '../../images/IMG_5744.JPG'
import './index.css'

const Intro = () => {
  return (
    <div className='container'>
        <div id="welcome" style={{ fontFamily: 'Montaga'}}><h1 >Welcome to My Software Engineering Portfolio</h1>
    </div>
    <div id="name" style={{ fontFamily: 'Montaga'}}>
    <h3>Brandon Smith / Software Engineer</h3>
    </div>  
      <div id='profile_pic'>
      <PictureFrame imageUrl={myImage} altText="profile_pic"/>
      </div>
      
    </div>
  )
}

export default Intro
