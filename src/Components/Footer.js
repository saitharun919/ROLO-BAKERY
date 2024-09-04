import React from 'react'
import logo from './Image/logo.jpg'
import './Footer.css'
import Home from './Home'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Askus from './Askus'
import Privacy from './Privacy'
import Feedback from '../Feedback'
const Footer = () => {
  return (
    <footer className='foot'>
    <div className='quick-links'>
      <ul className='links'>
        <li><a href='./Home' onClick={<Home/>}>Home</a></li>
        <li><a href= './Aboutus' onClick={<Aboutus />}>AboutUs</a></li>
        <li><a href= './Contactus' onClick={<Contactus />}>Contact Us</a></li>
        <li><a href= './Askus' onClick={<Askus />}>AskUs</a></li>
        <li><a href='./Privacy'onClick={<Privacy />}>Privacy Policy</a> </li>
        <li><a href='./Feedback' onClick={<Feedback />}>Feedback</a></li>
        </ul>
    </div>
    <div className='social-links'>
      <ul>
        <li><a href=''><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href=''><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href=''><i class="fa-brands fa-whatsapp"></i></a></li>
      </ul>
    </div>
    <div className='foot-terms'>
     <pre><span>Term of Use - Privacy Policy ©2024</span>  <span>copyright rolobakers.com</span></pre>
    </div>
    </footer>
  )
}

export default Footer