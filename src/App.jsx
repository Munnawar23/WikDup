import React from 'react'
import Navbar from './components/Navbar'
import About from './sections/About'
import Services from './sections/Services'
import ProjectShowcase from './sections/ProjectShowCase'

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <About />
      <Services />
      <ProjectShowcase />
    </div>
  )
}

export default App
