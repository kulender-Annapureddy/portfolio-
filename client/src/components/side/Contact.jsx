import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
// import axios from 'axios';

function Contact() {
  //   const [formData, setFormData] = useState({
  //     username:'',
  //     email:'',
  //     number:'',
  //     message:'',
  //   });
  //   const contactSubmit =async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await axios.post('http://localhost:4002/contact',formData);
      
  //     if(response.status === 200){
  //       alert("contact information submitted");
  //       setFormData({
  //         username:'',
  //         email:'',
  //         number:'',
  //         message:'',
  //       })
  //     }
  //     } catch (error) {
  //        console.log('contact failed', error); 
  //     }
      
       
  //    }
     
  //  const handleChange = (e) => {
  //     const { name, value} = e.target;
  //     setFormData((prevData) =>({
  //       ...prevData, [name] :value,
  //     }));
  //  }
  

  return (
    <div className="contact-cont" id='contact'>
        <div className='contact'>
            <h1>Get in touch</h1>
            <div className='cont-bin'>
                <p>kulenderannapureddy01@gmail.com</p>
               <p> +91-9640723564</p>
            </div>
            {/* <form onSubmit={contactSubmit}>
                
               <input 
               type='text' 
               placeholder='Name...' 
               name='username' 
               value={formData.username}
               onChange={handleChange} 
               required
                />
               <input 
               type='email' 
               placeholder='Email...'
               name='email'
               value={formData.email}
               onChange={handleChange}
               required
               />
            
               <input 
               type='Number'
               placeholder='Number'
               name='number'
               value={formData.number}
               onChange={handleChange}

               required

               />
               <div>
               <textarea 
               id="myTextarea" 
               placeholder='message' 
               name="message"
               rows="8" 
               cols="50"
               value={formData.message}
                onChange={handleChange}
                required
                ></textarea>
               
               </div>
               <button className='cnt-btn'>Send</button>
            </form> */}
            <div className='contact-icon'>
                <span><FaLinkedin className='ic' />  LinkedIn</span>
                <span>< FaGithub className='ic' /> Github</span>
                <span><FaInstagram className='ic' />  Instagram</span>
            </div>
        </div>
    </div>
  )
}

export default Contact