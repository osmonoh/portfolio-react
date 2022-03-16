import React from "react";

import watchImg from "../images/watch-home.png";
import decentImg from "../images/decent-home.png";
import gameImg from "../images/bulls.png";
import pawfectImg from "../images/pawfect.png";

const Projects = () => {
  return (
    <div className="center-box">
      <div className="projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-content">
          {/* PROJECT 1  */}
          <article className="project">
            <div className="project-text">
              <h4 className="project-text-heading">Video platform</h4>
              <p className="project-text-proper">
                This is a frontend project where I created a simple video
                platform using a JavaScript library React to build the UI. The
                project is called watch and it displays a gallery of videos,
                allows to search for videos as well as play them. It also offers
                the option to toggle between light and dark mode. It makes use
                of a promise-based HTTP client Axios to interact with the
                YouTube Data API and is deployed on Netlify.
              </p>
              <p className="project-text-keywords">
                React, Context API, Axios, YouTube Data API, Semantic UI
              </p>
            </div>
            <div className="project-buttons">
              <a
                className="btn-project btn-code"
                href="https://github.com/osmonoh/react-video-platform"
                target="_blank"
                rel="noreferrer"
                title="See code on GitHub"
              >
                <p>code</p>
              </a>
            </div>
            <div className="project-image">
              <a
                href="https://watch-video-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Go to website"
              >
                <img src={watchImg} alt="video platform" />
              </a>
            </div>
          </article>
          {/* PROJECT 2  */}
          <article className="project">
            <div className="project-text">
              <h4 className="project-text-heading">Rest API</h4>
              <p className="project-text-proper">
                This is my backend project where I created a small REST API with
                frontend page introducing the API, offering some interactive
                examples of requests and responses, as well as documentation.
                Its name is decentAPI and it is deployed on Heroku. These are
                some of the technologies and approaches employed in the project:
              </p>
              <p className="project-text-keywords">
                MVC, Node.js, Express.js, EJS, DOM API, JavaScript
              </p>
            </div>
            <div className="project-buttons">
              <a
                className="btn-project btn-code"
                href="https://github.com/osmonoh/rest-api"
                target="_blank"
                rel="noreferrer"
                title="See code on GitHub"
              >
                <p>code</p>
              </a>
            </div>
            <div className="project-image">
              <a
                href="https://decentapi.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                title="Go to website"
              >
                <img src={decentImg} alt="rest api" />
              </a>
            </div>
          </article>
          {/* PROJECT 3  */}
          <article className="project">
            <div className="project-text">
              <h4 className="project-text-heading">Logic game</h4>
              <p className="project-text-proper">
                This is my take on a school project where the objective was to
                create a version of the Bulls and Cows game to be played in the
                terminal. Finishing the task in a very good time I decided to
                challenge myself further and took it to the browser making it my
                first ever DOM manipulation project. I went on this one
                completely vanilla.
              </p>
              <p className="project-text-keywords">
                HTML, CSS, JavaScript, DOM API
              </p>
            </div>
            <div className="project-buttons">
              <a
                className="btn-project btn-code"
                href="https://github.com/osmonoh/bulls-and-cows"
                target="_blank"
                rel="noreferrer"
                title="See code on GitHub"
              >
                <p>code</p>
              </a>
            </div>
            <div className="project-image">
              <a
                href="https://bulls-cows.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Go to website"
              >
                <img src={gameImg} alt="logic game" />
              </a>
            </div>
          </article>
          {/* TEAM PROJECTS   */}
          <h3 className="team-heading">Team project</h3>
          {/* PROJECT 4   */}
          <article className="project">
            <div className="project-text">
              <h4 className="project-text-heading">Pet adoption platform</h4>
              <div className="project-text-proper">
                <p>
                  This is a group full-stack project of five people. We created
                  a platform where a person offering a pet can connect with a
                  person who wants to adopt one smooth, easy and fast. Users can
                  chat in real-time. This is a full-stack project:
                </p>
                <p>
                  The UI is build with React, with Context API for state
                  management. For styling we used SCSS and Material UI,
                  Chat-Engine to create the chat. It is deployed on Netlify.
                </p>
                <p className="project-text-keywords">
                  React, Context API, SCSS, Chat Engine, Material UI
                </p>
                <p>
                  The server is built with Node.js, using the Express.js. We
                  used MongoDB and Mongoose for database, stored on MongoDB
                  Atlas. The server is deployed on Heroku.
                </p>
                <p className="project-text-keywords">
                  Node.js, Express.js, MongoDB, Mongoose, MongoDB Atlas
                </p>
              </div>
            </div>
            <div className="project-buttons">
              <a
                className="btn-project btn-code"
                href="https://github.com/osmonoh/pawfect-frontend"
                target="_blank"
                rel="noreferrer"
                title="See code on GitHub"
              >
                <p>code</p>
              </a>
            </div>
            <div className="project-image">
              <a
                href="https://pawfect.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Go to website"
              >
                <img src={pawfectImg} alt="pet adoption site" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
