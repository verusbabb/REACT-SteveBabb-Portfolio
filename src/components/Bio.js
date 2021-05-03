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
          Senior Executive, Critical Thinker, Full-Stack Developer who has
          learned to view strategy and product/application development through a
          market-informed filter to impact growth and influence critical
          go/no-go C-level decisions. As an influencer at the forefront of
          significant product/service/technology/brand launches, engages in
          agenda-free curiosity to stretch innovation and product value beyond
          previously accepted limits.
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
