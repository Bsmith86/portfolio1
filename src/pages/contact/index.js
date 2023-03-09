import React from 'react'
import './index.css'
const Contact = () => {
  return (
    <div className='con_container'>
      <div id='con_head'>My Contact Info.</div>
      <div id='con_points'>
        <div className='contacts_label'>
            <div>Location</div>
            <span>Lantana, Tx 76226</span>
        </div>
        <div className='contacts_label'>
            <div>Email</div>
            <span>Bsmith86.dev@gmail.com</span>
        </div>
        <div className='contacts_label'>
            <div>Cell</div>
            <span>(605) 370-4226</span>
        </div>
        
        <div className="social">
            <a href="https://github.com/Bsmith86"><i className="fa fa-github" aria-hidden="true"></i>Git Hub </a>
            <></>
            <a href="https://www.linkedin.com/in/brandon-smith-403b5b225/"> <i className="fa fa-linkedin-square" aria-hidden="true">Linked-In</i></a>
        </div>

      </div>
    </div>
  )
}

export default Contact
