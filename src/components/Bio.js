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
          I am a full-stack software engineer skilled in HTML5, CSS3, ES6+,
          Javascript, React, Node.js, Express, SQL and NoSQL databases, RESTful
          API’s, and Git. I am experienced and very comfortable working in both
          the front-end and back-end of web applications. I am a continuous
          learner and currently expanding my skills to include Python and AWS.{" "}
          <br></br>
          <br></br>I am a highly effective team player with excellent
          interpersonal skills and thrive working in fast-paced environments. I
          enjoy the challenge of solving problems both individually and in
          collaboration with my team. <br></br>
          <br></br>I have extensive background in uncovering end-user
          requirements and communicating those requirements to cross-functional
          team members to drive application development in a variety of
          industries. <br></br>
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
