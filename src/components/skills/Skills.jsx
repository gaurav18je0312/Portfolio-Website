import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__programming">
          <h3>Programming</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>C++</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>DSA</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MATLAB</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div>
              <h4>OOP</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skills__webdevelopment">
        <div className="skills__programming">
          <h3>Web Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Javascript</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Jquery</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>React.js</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MySQL</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Node.js</h4>
              </div>
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skills