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
              My name is Mizanur Rahaman, I am working as a front-end developer to  create dynamic and responsive interfaces using the latest technologies and best practices for web applications. As a front-end developer, my role is translating design concepts into interactive and user-friendly websites. I work with technologies like HTML, CSS, and JavaScript along with frameworks and libraries such as React, Tailwind CSS and Bootstrap. I can also add a front end project with the Firebase backend system to make a full stack Website. My goal is to ensure that every user experience is not only functional but also enjoyable and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
