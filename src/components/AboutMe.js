import React from "react";

export default function AboutMe() {
  return (
    <div>
      <div className="row">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      {/* Personal information */}
      <div className="col l6">
        <div className="info-block-w-icon">
          <i>
            <span className="lnr lnr-home"></span>
          </i>
          <h4>Bio Brief</h4>
          <p>
            Senior Executive, Critical Thinker, Full-Stack Developer who has
            learned to view strategy and product/application development through
            a market-informed filter to impact growth and influence critical
            go/no-go C-level decisions. As an influencer at the forefront of
            significant product/service/technology/brand launches, engages in
            agenda-free curiosity to stretch innovation and product value beyond
            previously accepted limits.
          </p>
          {/* <divider></divider> */}
        </div>
      </div>

      <div className="col l6">
        <div className="info-block-w-icon">
          <div>
            <i>
              <span className="lnr lnr-user"></span>
            </i>
            <h4>Personal Details</h4>
            <ul>
              <li>
                <span className="keyWords">Age: </span>
                <span className="value">56</span>
              </li>

              <li>
                <span className="keyWords">Residence: </span>
                <span className="value">USA</span>
              </li>

              <li>
                <span className="keyWords">Address: </span>
                <span className="KeyWords">
                  513 Country Club Terrace, Lawrence KS 66049
                </span>
              </li>

              <li>
                <span className="keyWords">email: </span>
                <span className="value">steve.babb@outlook.com</span>
              </li>

              <li>
                <span className="keyWords">Phone: </span>
                <span className="value">303-674-2950</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
