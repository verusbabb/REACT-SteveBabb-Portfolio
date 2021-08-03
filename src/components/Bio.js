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
<<<<<<< HEAD
          Critical thinker, business developer, business strategist, problem
          solver, and full-stack developer who is driven by adding significant
          value to business innovation and growth.
          <br></br>
          <br></br>
          <span>Proficiencies include:</span> HTML, JavaScript, CSS, React,
          Node.js, Express, MongoDB, MySQL, Git.
=======
          Former Senior Executive, Critical Thinker, who passionately pivoted to
          become a Full-Stack Developer in order to transition from influencing
          application development to actually building applications. {<br></br>}{" "}
          {<br></br>} A lifelong learner who thrives on new challenges and
          skills development, as well as an excellent communicator, detail
          oriented, quick to adapt, energetic, and collaborative team member.
>>>>>>> e2ba7c4c763e61ac75e518e222877a446db9018e
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
