import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // <div className="container">
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="heading">Hi, my name is</p>
          <h1 className="sub-heading">Dusan Chmelko</h1>

          {/* rewrite!!!!!!!!!!!! */}
          <h4 className="hero-paragraph">
            {/* I am a Berlin-based Web Developer graduating a one-year intensive
            training in MERN-focused Full-stack Web Development. I am interested
            in projects allowing me to strengthen my knowledge and skills as
            well as to learn new ones.  */}
            I build awesome things for the web.
          </h4>
          <p>
            I am a web developer based in Berlin and love creating cool stuff
            that lives on the internet. At the moment I am open to a new
            collaboration, so feel free to get in touch.
          </p>
        </div>
        {/* <div className="buttons-box">
          <Link className="btn-hero btn-resume" to="./pages/resume">
            Resume
          </Link>
          <Link className="btn-hero btn-projects" to="./pages/projects">
            Projects
          </Link>
          <Link className="btn-hero btn-contact" to="./pages/contact">
            Contact
          </Link>
        </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Home;
