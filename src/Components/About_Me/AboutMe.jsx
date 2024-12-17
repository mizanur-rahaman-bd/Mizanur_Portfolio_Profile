import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <section className="about_me">
        <div className="container">
          <div className="about_me_row">
            <div className="about_me_img_col">
              <img src="images/about_me_photo.jpg" alt="about_Me" />
            </div>
            <div className="about_me_text_col">
              <p>
                My name is Mizanur Rahaman and I am a front-end developer with 3
                years of experience in creating dynamic and responsive
                interfaces using the latest technologies and best practices for
                web applications. As a front-end developer, my role revolves
                around translating design concepts into interactive and
                user-friendly websites and applications. I work with
                technologies like HTML, CSS, and JavaScript along with
                frameworks and libraries such as React to build the parts of a
                website that users interact with directly. My goal is to ensure
                that every user experience is not only functional but also
                enjoyable and accessible. TO BE UPDATED
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
