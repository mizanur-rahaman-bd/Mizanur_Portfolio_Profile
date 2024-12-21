import React, { useState } from "react";
import "./ResNavbar.css";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResNavbar = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <section className="resnav">
        <div>
          <TfiMenuAlt onClick={()=> setShow(!show)} />
        </div>
        {
          show&&
          <div className="resmenu">
          <ul>
            <li>
              <Link to={"https://github.com/mizanur-rahaman-bd/"}>
                <FaSquareGithub className="w-[65px] h-[50px]" />
              </Link>
            </li>
            <li>
              <Link to={"https://www.facebook.com/mizanur.rahaman.aus/"}>
                <FaSquareFacebook className="w-[65px] h-[50px]" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaLinkedin className="w-[65px] h-[50px]" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaSquareInstagram className="w-[65px] h-[50px]" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <FaYoutube className="w-[65px] h-[50px]" />
              </Link>
            </li>
          </ul>
        </div>
        }

        
      </section>
    </>
  );
};

export default ResNavbar;
