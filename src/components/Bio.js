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
          A full-stack developer built on a well-developed professional skills
          foundation that includes critical thinking, problem solving,
          curiosity, courage, outstanding written and oral communication skills,
          and a voracious appetite for continuous learning. Passionate about
          coding and building applications that lead to better human and
          business success.
=======
          Critical thinker, business developer, business strategist, problem
          solver, and full-stack developer who is driven by adding significant
          value to business innovation and growth.
          <br></br>
          <br></br>
          <span>Proficiencies include:</span> HTML, JavaScript, CSS, React,
          Node.js, Express, MongoDB, MySQL, Git.
>>>>>>> 87869d87599345ac2bcc28bdd695adf6eb563a91
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
