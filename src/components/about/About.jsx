import React from 'react'
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            I am a Fullstack Developer and a Competitive Programmer, who loves to transform ideas into reality using code. I'm currently in my final year,pursuing
            Int. M.Tech in Applied Geology at IIT(ISM) Dhanbad. I like to learn about new technologies, getting indulged into some technology related discussions or simply play Chess in my free time.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About