import React from "react";

export default function WhatIDo() {
  return (
    <div>
      <div className="row">
        <div className="col l12">
          <div className="block-title">
            <h2>
              What <span>I Do</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-store"></span>
            </i>
            <h4>Front-end</h4>
            <p>Skilled in HTML5, CSS, React, and multiple CSS frameworks.</p>
          </div>
        </div>

        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-laptop-phone"></span>
            </i>
            <h4>Back-end</h4>
            <p>
              Skilled in Node.js, Express.js, Authentication, MongoDB, and MySQL
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-pencil"></span>
            </i>
            <h4>Project Management</h4>
            <p>Skilled in working in and managing Agile work environments.</p>
          </div>
        </div>

        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-flag"></span>
            </i>
            <h4>Freelance or Hire</h4>
            <p>
              Currently exploring options in freelance/contract development OR
              open to joining a dynamic and exciting company as a full-time team
              member.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
