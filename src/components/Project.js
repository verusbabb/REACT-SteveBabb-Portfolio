import React from "react";
// import projects from "../projectData";

export default function ProjectRender({ project }) {
  return (
    <div className="col s12 m4">
      <div className="card medium blue-grey lighten-4 z-depth-4">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={process.env.PUBLIC_URL + project.image}
            alt={project.alt}
          />
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {project.longTitle}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>

        <div id="reveal" className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {project.shortTitle}
            <i className="material-icons right">close</i>
          </span>
          <p>{project.text}</p>
          <div className="card-action revealBtn">
            <a href={project.revealBtnLink} target="_blank" rel="noreferrer">
              <button className="btn waves-effect waves-light blue-grey">
                {project.revealBtnText}
              </button>
            </a>
          </div>
        </div>
        <div className="card-action cardBtn">
          <a href={project.cardBtnLink} target="_blank" rel="noreferrer">
            <button className="btn waves-effect waves-light blue-grey">
              {project.cardBtnText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
