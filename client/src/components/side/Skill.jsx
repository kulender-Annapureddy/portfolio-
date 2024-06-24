import React from 'react'
import respo from '../assets/respo.png';
import { FaJsSquare, FaHtml5, FaCss3Alt,  FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si"; 
import apio from '../assets/api.png';
function Skill() {
  return (
    <div>
        <div className='skillbox glass1' id='skilly'>
        <h2>My Skills</h2>
        <div className='skillcontain'>
            <div className='conti'>
                <div className='imi'>
                <img src={respo} alt='' className='im' ></img>
                </div>
                
                <p>Will be able to create a Responsive design for device-to-device.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <FaJsSquare className='reac' />
                </div>
                
                <p>JavaScript is a programming language used to add interactivity, dynamic behaviour, and functionality to web pages.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <FaHtml5 className='reac' />
                </div>
                
                <p>HTML5 is a standard markup language for creating and  structuring web content.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <FaCss3Alt className='reac' />
                </div>
                
                <p>CSS is a powerful language i  used to control the presentation and styling of HTML elements on Web Pages.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <FaNodeJs className='reac' />
                </div>
                
                <p>Node.js is a  server-side JavaScript rutime enivornment that enanbles developers to build scalable and high- performance network applications.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <SiExpress className='reac' />
                </div>
                
                <p>Express.js is web application framework for Node.js and middleware tp streamline the developement of server-side and API's.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <TbBrandMongodb className='reac' />
                </div>
                
                <p>MongoDB is a NoSQL platform database management system that offers a schema-less approach to data storage.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <FaReact className='reac' />
                </div>
                
                <p>React is JavaScript library and used for building User Interfaceand and best for interactive and dynamic web applications.</p>
            </div>
            <div className='conti'>
                <div className='imi'>
                <img src={apio} alt='' className='im' ></img>
                </div>
                
                <p>Will be able to use API integration to connect different systmes or services to enable seamless communication and data exchange. </p>
            </div>
        </div>
        
        </div>
    </div>
    
  )
}

export default Skill