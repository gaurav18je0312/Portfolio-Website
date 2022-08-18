import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import About from './components/about/About'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
    </>
  )
}

export default App