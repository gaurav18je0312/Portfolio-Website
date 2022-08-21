import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './headerSocial'
import Photo from '../../assets/photo.png'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gaurav Aggarwal</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <img src={Photo} className='id_image' />
      
        <CTA />
        <HeaderSocial />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header