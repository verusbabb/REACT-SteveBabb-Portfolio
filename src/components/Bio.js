import React from "react";

function Bio() {
  return (
    <section className="row container">
      <div className="col s12 container bio z-depth-4 ">
        <img
          className="responsive-img"
          alt="picture of Steve"
          id="steve"
          src="../assets/steve.jpg"
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
        <div className="container modalBtn">
          <a
            className="btn waves-effect waves-light blue-grey modal-trigger container"
            href="#modal1"
          >
            More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Bio;
