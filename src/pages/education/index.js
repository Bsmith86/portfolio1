import React from 'react'
import './index.css'

const Education = () => {
  return (
    <div className='education_con'>
        <header>My Background</header>
        <main>
          <ul className='background'>
              <li className='education'>
                  Education
                  <ul className='bullets'>
                      <li>Software Engineering - Per Scholas, 3/2023</li>
                      <li>Computer Programming - freeCodeCamp, 2022</li>
                      <li>Full Stack Web Development - Clarusway, 2022</li>
                  </ul>
              </li>

              <li className='education'>
                Skills

                <ul className='bullets'>
                      <li>Technical: <i class="fa-brands fa-square-js"></i>, <i class="fa-brands fa-react"></i>React, <i class="fa-brands fa-html5"></i>HTML, <i class="fa-brands fa-css3"></i>CSS, <i class="fa-brands fa-git"></i> GIT, <i class="fa-brands fa-python"></i>Python, <i class="fa-brands fa-linux"></i>Linux, <i class="fa-brands fa-node-js"></i>, MongoDB, SQL  </li>
                      <li>Soft: Self motivated, Interpersonal Skills, Communication, Organization, Time Management, Teamwork, Detail oriented  </li>
                  </ul>
              </li>
          </ul>
        </main>

    </div>
  )
}

export default Education



{/* <div className='education_con'>
<div id="education" style={{ fontFamily: 'Montaga'}}>
  Education
</div>
<main>
<ul className='education_list'>
<li className='school'>
  <h2 className="institute">Per Scholas - Dallas,Tx</h2>
  <h3 className="graduation">Graduation: 3/23</h3>
  <ul className="bullets">
    <li>Completed 450+ hours of hands on daily coding in HTML,JavaScript, CSS, Nodejs, React.js, and Git.</li>
    <li>Utilized Agile environment and successfully deployed various projects utilizing SDLC.</li>

    </ul>
</li>
<li className='school'>
  <h2 className="institute">Clarusway</h2>
  <h3 className="graduation">Graduation: 3/22</h3>
  <ul className="bullets">
    <li>Successfully completed 5 months of training in Python, Linux, SQL, HTML/CSS, and Git</li>
  </ul>  
</li>
<li>
  <h2 className='certs'>Certifications and Online Courses</h2>
  <ul className="bullets">
    <li>Responsive Web Design: freeCodeCamp  Issued: 7/22</li>
    <li>JavaScript Algorithms and Data Structures:  freeCodeCamp  Issued: 8/22</li>

    </ul>

</li>
</ul>
</main>



{/* <table > */}
  // <tr>
  //  <th><h2>Clarusway</h2></th>
   
  //  <th><h3>Graduation: 3/23</h3></th>
   
  // </tr>
  // <tr>
  //   <td className="span2">Completed 450+ hours on hands of daily coding in HTML, Java, JavaScript, CSS, Nodejs, SQL, React, and Git.</td>
   
  // </tr>

// </table> */}