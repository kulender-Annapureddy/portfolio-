import React from 'react'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function SideContainer() {
  return (
    <div className='sidecontain' id='projects'>
        <h1>Projects</h1>
       <div className='projects-contain glass'>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>E-commerce Website</h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
                
               <a href='https://github.com/kulender-Annapureddy/E-commerce' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a>
                {/* <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
            </div>
       </div>
       <div className='projects-contain glass'>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>Blog Website</h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
                
           <a href='https://github.com/kulender-Annapureddy/blog' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a>
                {/* <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
            </div>
       </div>
       <div className='projects-contain glass'>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>CRUD Application</h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
                
           <a href='https://github.com/kulender-Annapureddy/CRUD' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a>
                {/* <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
            </div>
       </div>
       <div className='projects-contain glass '>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>Portfolio</h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
            <p> ( This is the portfolio you are looking at :) </p>
           {/* <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a>
                <a href='https://github.com/kulender-Annapureddy' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
            </div>
       </div>
       <div className='projects-contain glass'>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>Zion Mission Foundation</h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
                
           {/* <a href='https://github.com/kulender-Annapureddy/CRUD' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
                <a href='https://zioncopy1-frontend.onrender.com/' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a>
            </div>
       </div>
       <div className='projects-contain glass'>
           <p>Javascript</p>
           <div className='project-desc'>
           <h2>Shalowm Covenant Churuch </h2>
           <p>MERN Stack, Context API, Jwt Authentication</p>
           </div>
           <div className='social siding'>
                
           {/* <a href='https://github.com/kulender-Annapureddy/CRUD' target="_blank" rel="noopener noreferrer"><span>< FaGithub className='icon' /> Github</span>
                <FaExternalLinkAlt className='icon is'/></a> */}
                <a href='https://shal.onrender.com/' target="_blank" rel="noopener noreferrer"><span>Livepreview</span>
                <FaExternalLinkAlt className='icon is'/></a>
            </div>
       </div>
       {/* <div className='liveweb glass '>
        
        <div className='livecontainer'>
          hello
        </div>
        <div className='livecontainer'>
            hello 2
        </div>
        
       </div> */}
       
    </div>
  )
}

export default SideContainer