import React from "react";

export default function SKills() {
  return (
    <div className="col l6">
      <div className="info-block-w-icon">
        <div className="block-title">
          <i>
            <span className="lnr lnr-magic-wand"></span>
          </i>
          <h4>
            Coding <span>Skills</span>
          </h4>
        </div>

        <div className="skills-info skills-second-style">
          {/* Skill 1 */}
          <div className="skill clearfix">
            <h4>JavaScript</h4>
            <div className="skill-value">85%</div>
          </div>
          <div className="skill-container skill-1">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 2 */}
          <div className="skill clearfix">
            <h4>HTML</h4>
            <div className="skill-value">85%</div>
          </div>
          <div className="skill-container skill-2">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 3 */}
          <div className="skill clearfix">
            <h4>CSS</h4>
            <div className="skill-value">85%</div>
          </div>
          <div className="skill-container skill-3">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 4 */}
          <div className="skill clearfix">
            <h4>Node.js</h4>
            <div className="skill-value">85%</div>
          </div>
          <div className="skill-container skill-4">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 5 */}
          <div className="skill clearfix">
            <h4>MySQL</h4>
            <div className="skill-value">80%</div>
          </div>
          <div className="skill-container skill-5">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 6 */}
          <div className="skill clearfix">
            <h4>Mongo</h4>
            <div className="skill-value">80%</div>
          </div>
          <div className="skill-container skill-6">
            <div className="skill-percentage"></div>
          </div>

          {/* Skill 7 */}
          <div className="skill clearfix">
            <h4>React</h4>
            <div className="skill-value">65%</div>
          </div>
          <div className="skill-container skill-7">
            <div className="skill-percentage"></div>
          </div>
        </div>
      </div>
      {/* End of skills */}
    </div>
  );
}
