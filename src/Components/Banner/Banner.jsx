import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner_row">
            <div className="banner_text_col">
              <h1>MIZANUR RAHAMAN</h1>
              <h2>Front End Developer</h2>
              <p>+8801918015238</p>
              <p>+8801918015238</p>
              <p>mizanur.rahaman.aus@gmail.com</p>
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
