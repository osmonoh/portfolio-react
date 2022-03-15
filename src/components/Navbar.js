import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar center-nav">
      <div className="navbar-left">
        <Link to="/">
          <div className="logo logo-current">
            {/* <i className="fa fa-code fa-lg" aria-hidden="true"></i>  */}
            &lt;&#47;&gt;
          </div>
        </Link>
        <Link to="/">
          <div className="name">
            <h5 className="name-heading">Dusan Chmelko</h5>
            <p className="name-title">Web Developer</p>
          </div>
        </Link>
      </div>
      <div className="navbar-right">
        <Link className="navbar-right-link" to="./pages/resume">
          Resume
        </Link>
        <Link className="navbar-right-link" to="./pages/projects">
          Projects
        </Link>
        <Link className="navbar-right-link" to="./pages/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
