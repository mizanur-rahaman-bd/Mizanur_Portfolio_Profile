import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ResNavbar from '../ResNavBar/ResNavbar';
const NavBar = () => {
  return (
    <>
    <nav className='Navbar'>
        <div className="container">
            <div className="navbar_row">
                <div className="nav_img">
                    <img src="images/text_logo.png" alt="logo" />

                </div>
                <div className="nav_content">
                    <ul>
                        <li><Link to={''}><FaSquareGithub /></Link></li>
                        <li><Link to={''}><FaSquareFacebook /></Link></li>
                        <li><Link to={''}><FaLinkedin /></Link></li>
                        <li><Link to={''}><FaSquareInstagram /></Link></li>
                        <li><Link to={''}><FaYoutube /></Link></li>
                       

                        

                    </ul>

                </div>
                <ResNavbar />
            </div>

        </div>

    </nav>
    
    
    </>
  )
}

export default NavBar