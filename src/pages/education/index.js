import React from 'react'
import './index.css'

const Education = () => {
  return (
    <div className='education_con'>
        <header>My Background</header>
        <main>
          <ul className='background'>
              <li className='education'>
                  Experience
                  <ul className='bullets'>
                      <li>Software Engineering - Per Scholas, 11/22 - 03/23</li>
                      <li>Backend Developer - Krier & Blain, 02/19 - 07/22</li>
                      <li>IT Manager - Arthritis Care & Diagnostic Center, 01/11 - 03/22</li>
                  </ul>
              </li>

              <li className='education'>
                Skills

                <ul className='bullets'>
                      <li>Technical: <i class="fa-brands fa-square-js"></i>, <i class="fa-brands fa-react"></i>React, <i class="fa-brands fa-html5"></i>HTML, <i class="fa-brands fa-css3"></i>CSS, <i class="fa-brands fa-git"></i> GIT, <i class="fa-brands fa-python"></i>Python, <i class="fa-brands fa-linux"></i>Linux, <i class="fa-brands fa-node-js"></i>, MongoDB, SQL, AWS, Java, Drupal, Docker, PHP, Laravel  </li>
                      <li>Soft: Self motivated, Interpersonal Skills, Communication, Organization, Time Management, Teamwork, Detail oriented  </li>
                  </ul>
              </li>
          </ul>
        </main>

    </div>
  )
}

export default Education
