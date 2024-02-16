import React from 'react'
import { FaGithub, FaLinkedin,FaExternalLinkAlt } from "react-icons/fa";
import avatar from '../assets/avatar.jpg'

function MainContainer() {
  return (
    <div className='maincontain'>
        
        <div>
            <img className='first-img' src={avatar} alt='avatar'></img>
        </div>
        <div className='info'>
        <div className='info-heading'>
        <h2>Kulender Annapureddy</h2>
        <h3>Front-End & FullStack Developer</h3>
        </div>
        <p className='desc'>I'm a MERN stack web developer , skilled in crafting dynamic interfaces with React.js, managing state using Redux and context API , and will be able to build strong server-side applications with Node.js and Express.js. I'm proficient in working with NoSQL MongoDB, blending creativity with technical skills to create cool and innovative websites.</p>
        </div>
        <div className='lists'>
        <ul className='list'>
        <li> <a href='#skilly'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li> <a href='#skills'>Work</a></li>
            <li> <a href='#contact'>Contact</a></li>
        </ul>
        </div>
        <div className='social-Links'>
            <div>
            <img className='last-img' src={avatar} alt=''></img>
            </div>
            <div className='social'>
                
                 <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a>
                <a href='https://www.linkedin.com/in/kulender-annapureddy-878b092a5/' target="_blank" rel="noopener noreferrer"><span>< FaLinkedin className='icon' /> LinkedIn</span>
                <FaExternalLinkAlt className='icon is'/></a>
            </div>
           
        </div>
    </div>
  )
}

export default MainContainer