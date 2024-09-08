import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import About from './components/About/about'
import Project from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project /> 
      <Contact />
      <Footer />
    </>
  )
}

export default App
