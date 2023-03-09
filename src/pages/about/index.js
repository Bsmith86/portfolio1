import React from 'react'
import './index.css'
import book from '../../images/About.png'

const About = () => {
  return (
    <div className='about'>
      <div id='about_head'>
        <span id='who'>Who is Brandon?</span>
        <span id='who_txt'>
            I'm a Software Engineer & Web Developer 
            looking to share my skills with the world, 
            and create apps that are intuitive and attractive. I'm 
            driven by learning new technologies and incorporating them in new projects. 
        </span>
      </div>
      <div id='about_img'> <img src={book} alt='about pic' /></div>  

    </div>
  )
}

export default About
