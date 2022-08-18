import React from 'react'
import './nav.css'
import {RiHome3Line} from 'react-icons/ri'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome3Line /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav