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
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="resnav">
        <div>
          <TfiMenuAlt
            onClick={() => setShow(!show)}
            className="w-[50px] h-[50px] bg-[#0d2238] text-white rounded-[10px] p-[7px]"
          />
        </div>
        {show && (
          <div className="resmenu">
            <ul>
              <li>
                <Link to={"https://github.com/mizanur-rahaman-bd/"}>
                  <FaSquareGithub className="w-[30px] h-[45px] text-[#0d2238]" />
                </Link>
              </li>
              <li>
                <Link to={"https://www.facebook.com/mizanur.rahaman.aus/"}>
                  <FaSquareFacebook className="w-[30px] h-[45px] text-[#0d2238]" />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaLinkedin className="w-[30px] h-[45px] text-[#0d2238]" />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaSquareInstagram className="w-[30px] h-[45px] text-[#0d2238]" />
                </Link>
              </li>
              <li>
                <Link to={""}>
                  <FaYoutube className="w-[30px] h-[45px] text-[#0d2238]" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default ResNavbar;
