import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// it will render in this order
const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />

    </>

  )
}

export default App
