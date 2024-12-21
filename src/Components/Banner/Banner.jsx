import React from "react";
import "./Banner.css";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_row">
            <div className="banner_text_col">
              <h1>MIZANUR RAHAMAN</h1>
              <h2>Front End Developer</h2>
              <p><PiPhoneCallFill className=" pr-[5px] inline-block" />+8801918015238</p>
              <p><FaWhatsappSquare className=" pr-[5px] inline-block" />+8801918015238</p>
              <p><MdAlternateEmail className=" pr-[5px] inline-block" />mizanur.rahaman.aus@gmail.com</p>
            </div>
            <div className="banner_img_col">
              <img src="images/photo.jpg" alt="mizanur" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
