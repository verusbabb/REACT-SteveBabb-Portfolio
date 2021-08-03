import React from "react";
import BioModal from "./BioModal";
import ConnectModal from "./ConnectModal";

function Bio() {
  return (
    <section id="bio" className="row container ">
      <div className="col s12 bio container z-depth-4">
        <img
          className="responsive-img"
          alt="Steve"
          id="steve"
          src={process.env.PUBLIC_URL + "/assets/steve.jpg"}
        ></img>
        <p className="flow-text">
          Critical thinker, business developer, business strategist, problem
          solver, and full-stack developer who is driven by adding significant
          value to business innovation and growth.
          <br></br>
          <br></br>
          <span>Proficiencies include:</span> HTML, JavaScript, CSS, React,
          Node.js, Express, MongoDB, MySQL, Git.
        </p>
        <div className="bioBtns">
          <BioModal />
          <ConnectModal />
        </div>
      </div>
    </section>
  );
}

export default Bio;
