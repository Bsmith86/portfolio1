import React from 'react'
import './index.css'

const Education = () => {
  return (
    <div className='education_con'>
        <div id="education" style={{ fontFamily: 'Montaga'}}>
          Education
    </div>
     <main>
      <ul className='education_list'>
        <li className='school'>
          <h3 className="institute">Per Scholas - Dallas,Tx</h3>
          <h3 className="graduation">Graduation: 3/23</h3>
          <ul className="bullets">
            <li>Completed 450+ hours on hands of daily coding in HTML, Java, JavaScript, CSS, Nodejs, SQL, React, and Git.</li>
            <li>Utilized Agile environment and successfully deployed various projects utilizing SDLC.</li>
            </ul>
        </li>
        <li className='school'>
          <h3 className="institute">Clarusway</h3>
          <h3 className="graduation">Graduation: 3/22</h3>
          <ul className="bullets">
            <li>Completed 450+ hours on hands of daily coding in HTML, Java, JavaScript, CSS, Nodejs, SQL, React, and Git.</li>
            <li>Utilized Agile environment and successfully deployed various projects utilizing SDLC.</li>

          </ul>  
        </li>
      </ul>
</main>
      
    

      {/* <table >
          <tr>
           <th><h2>Clarusway</h2></th>
           
           <th><h3>Graduation: 3/23</h3></th>
           
          </tr>
          <tr>
            <td className="span2">Completed 450+ hours on hands of daily coding in HTML, Java, JavaScript, CSS, Nodejs, SQL, React, and Git.</td>
           
          </tr>
        
        </table> */}
    </div>
  )
}

export default Education
