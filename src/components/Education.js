import React from "react";

export default function Education() {
  return (
    <div>
      <div>
        <div className="col l6">
          <div className="block-title">
            <i>
              <span className="lnr lnr-magic-wand"></span>
            </i>
            <h4>Education</h4>
          </div>

          <div className="timeline timeline-second-style clearfix">
            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">2021</h5>
                <span className="item-company">University of Kansas</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">Full Stack Development</h4>
                <p>
                  Certificate of Completion from intensive 6-month bootcamp.
                </p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">1989</h5>
                <span className="item-company">University of Illinois</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">MS Economics</h4>
                <p>
                  Specialized in International Economics with a minor in
                  Statistics based in Rio de Janeiro, Brazil.
                </p>
              </div>
            </div>

            <div className="timeline-item clearfix">
              <div className="left-part">
                <h5 className="item-period">1987</h5>
                <span className="item-company">University of Illinois</span>
              </div>
              <div className="divider"></div>
              <div className="right-part">
                <h4 className="item-title">BS Economics</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
