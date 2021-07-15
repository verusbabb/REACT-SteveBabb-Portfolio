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
          Former Senior Executive, Critical Thinker, who passionately pivoted to become a Full-Stack Developer in order to transition from influencing application development to actually building applications. {<br></br>} {<br></br>} A lifelong learner who thrives on new challenges and skills development, as well as an excellent communicator, detail oriented, quick to adapt, energenic, and collaborative team member.
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
