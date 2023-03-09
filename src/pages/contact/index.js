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
        
      </div>
    </div>
  )
}

export default Contact
