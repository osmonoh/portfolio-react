import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="heading">Hi</h1>
            <h4 className="sub-heading">My name is Dusan Chmelko</h4>

            {/* rewrite!!!!!!!!!!!! */}
            <p className="hero-paragraph">
              I am a Berlin-based Web Developer graduating a one-year intensive
              training in MERN-focused Full-stack Web Development. I am
              interested in projects allowing me to strengthen my knowledge and
              skills as well as to learn new ones.
            </p>
          </div>
          <div className="buttons-box">
            <a className="btn-hero btn-resume" href="./pages/resume.html">
              Resume
            </a>
            <a className="btn-hero btn-projects" href="./pages/projects.html">
              Projects
            </a>
            <a className="btn-hero btn-contact" href="./pages/contact.html">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
