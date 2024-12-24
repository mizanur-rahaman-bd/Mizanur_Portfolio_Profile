import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="container">
            <div className="footer_logo">
                <img src="images/text_logo.png" alt="text_logo" />

            </div>
            {/* <div className="footer_nav_content">
                    <ul>
                        <li><Link to={''}><FaSquareGithub className='w-[30px] h-[25px] lg:w-[65px] lg:h-[50px]' /></Link></li>
                        <li><Link to={''}><FaSquareFacebook className='w-[30px] h-[25px] lg:w-[65px] lg:h-[50px]' /></Link></li>
                        <li><Link to={''}><FaLinkedin className='w-[30px] h-[25px] lg:w-[65px] lg:h-[50px]' /></Link></li>
                        <li><Link to={''}><FaSquareInstagram className='w-[30px] h-[25px] lg:w-[65px] lg:h-[50px]' /></Link></li>
                        <li><Link to={''}><FaYoutube className='w-[30px] h-[25px] lg:w-[65px] lg:h-[50px]' /></Link></li>
                       

                        

                    </ul>

                </div> */}
        </div>

    </footer>
    
    </>
  )
}

export default Footer