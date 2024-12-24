import React from "react";
import './MySkills.css'

const MySkills = () => {
  return (
    <>
      <section className="my_skills">
        <div className="container">
          <div className="heading">
            <h2>My Skills</h2>
          </div>
          <div className="my_skills_row">
            <div className="my_skills_tech_row">
              <h3>Hard Skills</h3>
              <ul>
                <li>
                  <p>HTML, CSS, and JavaScript</p>
                </li>
                <li>
                  <p>
                    Front End Frameworks and Libraries: React, Tailwind CSS,
                    Bootstrap
                  </p>
                </li>
                <li>
                  <p>Single Page App Development</p>
                </li>
                <li>
                  <p>Responsive design</p>
                </li>
                <li>
                  <p>Cross-Browser Compatibility</p>
                </li>
                <li>
                  <p>Dynamically modify page content</p>
                </li>
                <li>
                  <p>Handle events</p>
                </li>
                <li>
                  <p>Generate clean code</p>
                </li>
                <li>
                  <p>Create codes that are reusable in the future</p>
                </li>
                <li>
                  <p>
                    Create highly functional and engaging websites and
                    applications
                  </p>
                </li>
                <li>
                  <p>Problem-solving</p>
                </li>
              </ul>
            </div>
            <div className="my_skills_soft_row">
              <h3>Soft Skills</h3>
              <ul>
                <li>
                  <p>Creativity</p>
                </li>
                <li>
                  <p>Effective communication</p>
                </li>
                <li>
                  <p>Willingness to Continuous learning</p>
                </li>
                <li>
                  <p>Teamwork</p>
                </li>
                <li>
                  <p>Customer service</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MySkills;
