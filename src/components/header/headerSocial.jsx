import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const headerSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/gaurav-aggarwal-a605b5187" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/gaurav18je0312" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default headerSocial