import React from "react";
import projects from "../projectData";
import Project from "./Project";

function Portfolio() {
  return (
    <div>
      <div className="divider container"></div>

      <section>
        <div className="row container portfolio">
          <h4 className="text-black">My Portfolio</h4>

          {/* Map over projectData to render all projects */}
          {projects.map((item, i) => (
            <Project key={i} project={item}></Project>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
