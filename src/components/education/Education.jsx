import React from 'react'
import './education.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Education = () => {
  return (
    <section id='education'>
      <h5>Education</h5>
      <h2>Courses Completed</h2>

      <div className="container education__container">
        <article className='education'>
          <div className="education__head">
            <h3>Year 3</h3>
          </div>

          <ul className='education__list'>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>BUSINESS INTELLIGENCE </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>NOVEL INTERACTION TECHNOLOGIES</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>ARTIFICIAL INTELLIGENCE </p>
            </li>
           
          </ul>
        </article>

        {/* ================= End of year 1 =================== */}

        <article className='education'>
          <div className="education__head">
            <h3>Year 2</h3>
          </div>

          <ul className='education__list'>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>AWS CLOUD PRACTITIONER </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>ALIBABA CLOUD </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>C and C++ DEVELOPER </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>DATA SCIENCE </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>DATA VISUALIZATION</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>JAVA PROGRAMMER</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p> LOGO DESIGN</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p> LPIC-1 AND COMPTIA LINUX+  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>WINDOWS SERVER ADMINISTRATOR  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>ONLINE MARKETING MANAGER  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>PHP DEVELOPER  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>SEO EXPERT </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>JAVA PROGRAMMER</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>USER EXPERIENCE DESIGN  </p>
            </li>
          </ul>
        </article>

        {/* ================= end of year 2 =================== */}

        <article className='education'>
          <div className="education__head">
            <h3>Year 1</h3>
          </div>

          <ul className='education__list'>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>ALGORITHMS IN PYTHON </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>ARITHMETIC AND CRYPTOGRAPHY </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>CCNA ROUTING AND SWITCHING</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>C LANGUAGE </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p> IT LAW : INTERNET LAW AND  INTELLECTUAL PROPERTY </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p> LINUX FOUNDATIONS   </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>MERISE MODELLING FOR DATABASES  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>WINDOWS SERVER INTRODUCTION</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>SQL FUNDAMENTALS</p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>OPERATING SYSTEMS FUNDAMENTALS </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>INFORMATION SYSTEM SECURITY  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>HTML AND JAVASCRIPT : USER INTERFACE  </p>
            </li>
            <li>
              <AiOutlineCheck className='education__list-icon'/>
              <p>COLLABORATING WITH GIT  </p>
            </li>
          </ul>
        </article>

        {/* ================= end of year 3 =================== */}

      </div>

    </section>
  )
}

export default Education