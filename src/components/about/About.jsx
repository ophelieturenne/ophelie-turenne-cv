import React from 'react'
import './about.css'
import ME from '../../assets/imgVector1.png'
import {FaUniversity} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h4>A. Sc</h4>
              <h6>Compter Science Engineering</h6>
              <br/>
              <small>Supinfo International University</small>
            </article>

            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h4>B. Sc</h4>
              <h6>Compter Science 'System Engineering'</h6>
              <br/>
              <small>Middlesex Univeristy of Mauritius</small>
            </article>

            <article className='about__card'>
              <FaUniversity className='about__icon' />
              <h4>Bac(+3/+4)</h4>
              <h6>Web Development<br/>Fullstack development</h6>
              <br/>
              <small>Le Wagon</small>
            </article>

          </div>

          <p>I am B. Sc computer science system engineering holder and my specialties includes: Web development (Front-End) , UI/UX and Graphic Design.
          <br />I have always been passionate about Technology and Design.
          <br />It's so captivating to make these fields interact and create amazing outcomes.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
