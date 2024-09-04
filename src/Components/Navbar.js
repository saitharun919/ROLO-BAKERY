import React from 'react'
import { useRef } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Aboutus from './Aboutus';
import Home from './Home';
import Askus from './Askus';
import Contactus from './Contactus';
import './Navbar.css'
import logo from './Image/logo.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const navRef = useRef();
    
    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
    
  return (
    <header className='head'>
        <img src={logo}  />
        <nav ref={navRef}>
             <ul className='links'>
        <li><NavLink
  to="/"
  end
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Home
</NavLink></li>

        <li><NavLink
  to="./Aboutus"
  end
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  AboutUs
</NavLink></li>

        <li><NavLink
  to="./Contactus"
  end
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Contactus
</NavLink></li>

<li><NavLink
  to="./Askus"
  end
  className={({ isActive }) => (isActive ? 'active' : 'inactive')}
>
  Askus
</NavLink></li>
        </ul>
       
        <button className="nav-btn nav-close-btn"onClick={showNavbar}>
            <FaTimes />
        </button> 
</nav>
        <a className='cart'><i class="fa-solid fa-basket-shopping"></i></a>
       <button className='nav-btn' onClick={showNavbar}>
            <FaBars />
        </button> 
         
    </header>
    
  )
}

export default Navbar