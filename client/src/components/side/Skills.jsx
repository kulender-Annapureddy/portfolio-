import React from 'react'
// import html from '../assets/html.png'
// import react from '../assets/reactjs.png'
// import express from '../assets/expressj.png'
// import node from '../assets/nodejs.jpg'
// import javasc from '../assets/js.png'
// import css from '../assets/css.png'
// import mongo from '../assets/mongodb.png'
// import boot from '../assets/boot.png'
// import redu from '../assets/redux.png'

function Skills() {
  return (
    <div className='skillscontain' id='skills'>
        <h1>Work</h1>
        <div className='skills'>
            <div>
            <h2>Front-End</h2>
            <p>React is used for building dynamic user interfaces and managing application state efficiently. HTML forms the content structure, while CSS styles enhance visual presentation. JavaScript controls the behavioral aspects, ensuring an interactive user experience. Axios, a third-party library, aids in seamless routing by handling network requests. This technology stack collectively produces responsive and visually appealing web applications.</p>
            <span className='spaning'>React, JavaScript, Context API, Redux, HTML, CSS, BootStrp</span>
            </div>
            <hr />
            <div>
            <h2>Full-Stack</h2>
            <p>By Leveraging the MERN stack — MongoDB, Express.js, Node.js, and React.js we craft dynamic web interfaces. MongoDB houses our data, Express.js handles server logic, and Node.js manages network requests. For security, we implement JWT for user authentication, while the cookie parser manages sessions. Multer facilitates smooth file uploads, CORS ensures secure data exchange, and Bcrypt bolsters password security. Dotenv adds configurational finesse. This synergy creates not just applications but secure, feature-rich user experiences.</p>
            <span className='spaning'>JavaScript, Express.Js, Node.Js, MongoDB, </span>
            </div>
        </div>
    </div>
  )
}

export default Skills