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
          My resume paints a picture of a senior executive with a lot of
          professional history. All true. But life is long and I decided to work
          towards being great at something totally different. My new passion is
          software engineering with a desire to build great apps. My past is a
          great foundation to build upon, but I also know I need to earn new
          stripes via hard work and dedication to my trade. <br></br>
          <br></br>My professional history is in discovering and understanding
          the nuanced characteristics of target audiences and using those to
          drive product development, testing product concepts to validate and/or
          uncover required iterations, and leading the development of marketing
          and advertising strategies and execution. <br></br>
          <br></br>My prior work has helped launch new operating systems, web
          browsers, search engines, loyalty programs, social networks, mental
          health services, and video games. <br></br>
          <br></br>Making the change to becoming a full-stack developer was a
          natural evolution for me. It is a combination of everything I love and
          excel at: problem identification, problem solving, team work,
          communication, continuous learning and mentoring, fast-paced learning
          and doing, and being agile at every turn.
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
