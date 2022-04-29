import React from "react";

const Resume = () => {
  return (
    <div className="center-box">
      <div className="resume">
        <div className="resume-top">
          <h2 className="resume-top-heading">Resume</h2>
          <a
            className="btn-download"
            href="../docs/CV_Dusan_Chmelko.pdf"
            download
            title="Download CV"
          >
            <i className="fa fa-download fa-lg" aria-hidden="true"></i>
          </a>
        </div>
        <div className="resume-content">
          {/* section my-name */}
          <section className="section my-name">
            <h4 className="section-heading">Name</h4>
            <div className="section-articles">
              <article className="article">
                <div className="timespan"></div>
                <div className="content">
                  <h4 className="content-heading">Dusan Chmelko</h4>
                </div>
              </article>
            </div>
          </section>

          {/* section education */}
          <section className="section education">
            <h4 className="section-heading">Education</h4>
            <div className="section-articles">
              <article className="article">
                <p className="timespan">October 2020 - September 2021</p>
                <div className="content">
                  <h5 className="content-heading">
                    Full-stack Web Development
                  </h5>
                  <p className="content-subheading">
                    Digital Career Institute, Berlin
                  </p>
                  <ul className="content-points">
                    <li>
                      Intensive, certified one-year project based education
                    </li>
                    <li>HTML, CSS, SASS, Bootstrap, Version control (Git)</li>
                    <li>JavaScript, DOM API, SPA, React, Redux</li>
                    <li>NodeJS, Express, REST API, MongoDB, Mongoose</li>
                    <li>German lessons as part of the course (Level B2)</li>
                  </ul>
                </div>
              </article>
              <article className="article">
                <p className="timespan">September 2003 - May 2009</p>
                <div className="content">
                  <h5 className="content-heading">
                    International Relations - Master's degree
                  </h5>
                  <p className="content-subheading">
                    University of Economics, Bratislava
                  </p>
                  <ul className="content-points">
                    <li>Faculty of International Relations</li>
                    <li>
                      Relations in world politics, international organisations,
                      institutions, law and security
                    </li>
                    <li>
                      International economic relations, development, finances,
                      trade, marketing and logistics
                    </li>
                    <li>
                      European political and economic integration studies,
                      institutions and law of European Union
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          {/* section experience */}
          <section className="section experience">
            <h4 className="section-heading">Work Experience</h4>
            <div className="section-articles">
              <article className="article">
                <p className="timespan">January 2022 - April 2022</p>
                <div className="content">
                  <h5 className="content-heading">Web Developer - Intern</h5>
                  <p className="content-subheading">TeckLink, Remote</p>
                  <ul className="content-points">
                    <li>
                      Developing front-end for web applications, developing and
                      implementing new features
                    </li>
                    <li>
                      Liaising with graphic designers, ensuring cross-platform
                      optimization and responsiveness of applications
                    </li>
                    <li>Translating Figma designs into code</li>
                  </ul>
                </div>
              </article>
              <article className="article">
                <p className="timespan">November 2020 - September 2021</p>
                <div className="content">
                  <h5 className="content-heading">Tutor - Web Development</h5>
                  <p className="content-subheading">
                    Digital Career Institute, Berlin
                  </p>
                  <ul className="content-points">
                    <li>
                      Part-time position during the one-year course at DCI
                    </li>
                    <li>Group and private Web Development tutoring sessions</li>
                    <li>
                      Sharing knowledge and transmitting it to fellow students
                      and supporting them during their course
                    </li>
                    <li>
                      Working with lecturers to improve learning experience
                    </li>
                  </ul>
                  <p className="experience-statement">
                    In the past I had worked in various customer service and
                    managing roles in the UK, Spain, Slovakia and Germany.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* section skills */}
          <section className="section skills">
            <h4 className="section-heading">Technical Skills</h4>
            <div className="section-articles">
              <article className="article">
                <p className="timespan"></p>
                <div className="content">
                  <ul className="content-points">
                    <li>HTML, CSS/SASS, JavaScript​</li>
                    <li>React, Context API, Redux</li>
                    <li>Node.js, Express.js, EJS</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Bootstrap, Semantic UI, Material UI</li>
                    <li>Webpack, Babel, PostCSS</li>
                    <li>Figma, Sketch, Trello</li>
                    <li>Git, GitHub, NPM</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
