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
            <h4>Frontend</h4>
            <p>
              Steve is a skilled developer in creating responsive front-end
              designs that deliver first className user experiences.
            </p>
          </div>
        </div>

        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-laptop-phone"></span>
            </i>
            <h4>Backend</h4>
            <p>
              Steve is equally as strong in server side web application logic
              and integration.
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
            <p>
              Steve's has 30 years experience in managing projects that range
              from complex and global in nature to small and short-term.
            </p>
          </div>
        </div>

        <div className="col l6">
          <div className="info-block-w-icon">
            <i>
              <span className="lnr lnr-flag"></span>
            </i>
            <h4>Freelance or Hire</h4>
            <p>
              Steve is currently exploring options in freelance development
              working with a talented group of other developers he has assembled
              on his team OR open to joining a dynamic and exciting company as a
              full-time team member.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
