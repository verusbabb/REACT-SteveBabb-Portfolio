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
          Steve Babb offers a unique blend of important skills: Know how to
          think like an end-user and develop software and applications that
          end-users need.
          <br></br>
          <br></br>Skills include business accuman, leadership, HTML, CSS,
          Bootstrap, Materialize, JavaScript,Node.js, Express, MySQL, and
          MongoDB.
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
