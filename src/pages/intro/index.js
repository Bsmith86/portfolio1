import React from 'react'
import PictureFrame from '../../components/picture_frame'
import myImage from '../../images/IMG_5744.JPG'
import './index.css'

const Intro = () => {
  return (
    <div className='container'>
        <div className='grid-column-spread2' id="welcome" style={{ fontFamily: 'Montaga'}}>
          Welcome to My Software Engineering Portfolio
    </div>
    <div id="name" style={{ fontFamily: 'Montaga'}}>
    Brandon Smith / Software Engineer
    </div>  
      <div id='profile_pic'>
      <PictureFrame imageUrl={myImage} altText="profile_pic"/>
      </div>
      <a id='contact' href="mailto:bsmith86.dev@gmail.com?subject=HTML link">Work with me today</a>
    </div>
  )
}

export default Intro
