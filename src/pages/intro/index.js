import React from 'react'
import PictureFrame from '../../components/picture_frame'
import myImage from '../../images/IMG_5744.JPG'
import './index.css'
import Home from '../../images/Home.png'


const Intro = () => {
  return (
    <div className='container'>
      <div className='intro'>
      <div id="welcome">
          Welcome to My Software Engineer Portfolio
        </div>
        <div id="name">
          Brandon Smith / Software Engineer
        </div>
      
      </div>
        

      <main>
      <div id='profile_pic'>
        {/* <PictureFrame imageUrl={myImage} altText="profile_pic"/> */}
        <img src={Home} alt='Profile Pic' />
      </div>
      <i class="fa-thin fa-arrow-down-right"></i> <a id='contact' href="mailto:bsmith86.dev@gmail.com?subject=HTML link">Work with me today</a>  
      </main>  
      
      
    </div>  
  )
}

export default Intro
