import React from "react";

import { projects } from "../data/data";

const Projects = () => {
  return (
    <div className="center-box">
      <div className="projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-content">
          {projects.map((item, i) => {
            return (
              <article className="project" key={i}>
                <div className="project-text">
                  <h4 className="project-text-heading">{item.name}</h4>
                  {item.preText &&
                    item.preText.map((el, i) => (
                      <p className="project-text-proper" key={i}>
                        {el}
                      </p>
                    ))}
                  {item.text.map((el, i) => {
                    return (
                      <div key={i}>
                        <p className="project-text-proper">{el}</p>
                        <p className="project-text-keywords">
                          {item.keyWords[i].join(", ")}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="project-buttons">
                  <a
                    className="btn-project btn-code"
                    href={item.gitHubURL}
                    target="_blank"
                    rel="noreferrer"
                    title="See code on GitHub"
                  >
                    <p>code</p>
                  </a>
                </div>
                <div className="project-image">
                  <a
                    href={item.siteURL}
                    target="_blank"
                    rel="noreferrer"
                    title="Go to website"
                  >
                    <img src={item.img} alt="video platform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
