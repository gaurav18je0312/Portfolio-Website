import React from 'react'
import './portfolio.css'
import video1 from '../../assets/food-website.mp4'
import video2 from '../../assets/snake-game.mp4'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-video">
            <video src={video1} width="100%" muted autoPlay loop />
          </div>
          <h3>Online Food Ordering Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/gaurav18je0312/Online-Food-Ordering-Webapp-.git" className='btn' target="_blank" rel="noopener">Github</a>
          <a href="https://online-food-ordering-webapp.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-video">
            <video src={video2} width="100%" muted autoPlay loop/>
          </div>
          <h3>Snake Game</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/gaurav18je0312/Snake-Game.git" className='btn' target="_blank" rel="noopener">Github</a>
          <a href="https://gaurav-snake-game.netlify.app/" className='btn btn-primary' target="_blank" rel="noopener">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio