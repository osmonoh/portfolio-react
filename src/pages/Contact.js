import React from "react";

const Contact = () => {
  return (
    <div className="contact center-box">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-lead">Looking forward to hearing from you.</p>
      <div className="contact-content">
        <div className="endpoint phone">
          <a href="tel:+4915124458501">
            <i className="fa fa-mobile fa-4x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="endpoint email">
          <a href="mailto:dusan.chmelko@yahoo.com">
            <i className="fa fa-envelope-o fa-4x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="endpoint ghub">
          <a href="https://github.com/osmonoh" target="_blank" rel="noreferrer">
            <i className="fa fa-github fa-4x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="endpoint linked">
          <a
            href="https://www.linkedin.com/in/dusan-chmelko/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin fa-4x linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
