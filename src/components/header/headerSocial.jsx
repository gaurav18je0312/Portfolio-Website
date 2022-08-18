import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>
        <a href="http://github.com" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default headerSocial