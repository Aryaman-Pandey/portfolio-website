import React, {useState } from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaPhone} from "react-icons/fa"
import { HiMail } from "react-icons/hi";
import './Contact.css'
import emailjs from 'emailjs-com'


const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');


function sendEmail(e){
    e.preventDefault();
    let templateParams = {
        email: email,
        name: name,
        message: message,
    }
    emailjs.send('service_vh6qq1y', 'template_4cjl80u', templateParams , 'user_Y8HjLtIk0wtb41gJtZmXh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
      setMessage('');
}; 
  
  return (
    <div id='contact'>
        <div className='heading my-6'>
                    <h1>Get in Touch</h1>
                    </div>
        <div className='container'>
            <div className='row'>
            <div className='col-sm-12 col-md-6'>
                    <p className='prop-info'><FaPhone /> &nbsp; &nbsp; +91 6387517357 &nbsp;</p>
                    <p className='prop-info'><HiMail /> &nbsp; &nbsp; pandeyavi1808@gmail.com &nbsp;</p>
            </div>
            <div className='col-sm-12 col-md-6'>
            <div>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className='send_message'>
        <button type="button" onClick={sendEmail} className="btn btn-primary">Send Message</button>
        </div>
      </div>
            </div>
            </div>
        </div>
        <div className='bottom_bar'>
            <div className="p_element">
            <p>Developed by Aryaman Pandey</p>
            </div>
            <div className="ul__element">
              <ul className="header__ul">
                <li>
                  <a href="https://www.linkedin.com/in/aryamanpandey1808/" rel="noreferrer" target="_blank" ><FaLinkedinIn className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://www.github.com/Aryaman-Pandey" rel="noreferrer" target="_blank" ><FaGithub className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/thecinematicidiot/" rel="noreferrer" target="_blank" ><FaInstagram className="headerIcon" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/nobrakebicycle" rel="noreferrer" target="_blank" ><FaTwitter className="headerIcon" /></a>
                </li>
              </ul>
              </div>
        </div>
    </div>
  )
}

export default Contact