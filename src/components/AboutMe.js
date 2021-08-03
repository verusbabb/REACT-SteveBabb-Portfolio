import React from "react";

export default function AboutMe() {
const firstParagraph = "I have launched companies, managed brands, led teams, and I am a full-stack developer.";

const secondParagraph = "I have designed and executed 1000+ projects that have led to successful product development initiatives and product launches in technology, healthcare, packaged goods, and professional services.  I have worked with 100’s of different teams in 20 different countries and thrive in diverse environments.  Facing daunting challenges and quickly finding effective and successful solutions is my professional foundation.";

const thirdParagraph = "My work has helped launch new operating systems, web browsers, search engines, loyalty programs, social networks, mental health services, and video games.";

const fourthParagraph = "My strong emotional intelligence and communication skills are what help me quickly connect and work well with teammates and clients.  I have maintained successful client relationships with some of the best known brands in the world for 20 years.  I mentored, led (and learned from) the exact same team of people and global partners for those same 20 years. When facing challenges, large and small, my first instinct is to understand the context of the challenge.  I ask good questions, absorb details fast, connect dots, and pour that understanding into my work.";

const fifthParagraph = "Becoming a full-stack developer was a natural evolution for me.  It is a combination of everything I love and excel at:  problem identification, problem solving, team work, communication, continuous learning and mentoring, fast-paced, and being agile at every turn.";

const sixthParagraph = "I have been a founding board member for two successful non-profit organizations: Healing Waters International brings sustainable fresh water to communities in developing nations, and Kitchen One-for-One, which gives away an outstanding quality meal to someone in need for every meal sold (i.e. one-for-one)."


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
<<<<<<< HEAD
          <p>
            Full-Stack Developer | Passion for Building Technology Solutions |
            Accomplished Leader | An influencer at the forefront of significant
            product, service, technology, and brand launches | Engages in
            agenda-free curiosity to stretch innovation and product value beyond
            previously accepted limits | Seeking Opportunity to bring Strong
            End-User Focus to Technology Development.
=======
          <p> 
            {firstParagraph} 
            <br></br>
            <br></br>
            {secondParagraph}
            <br></br>
            <br></br>
            {thirdParagraph}
            <br></br>
            <br></br>
            {fourthParagraph}
            <br></br>
            <br></br>
            {fifthParagraph}
            <br></br>
            <br></br>
            {sixthParagraph}
>>>>>>> e2ba7c4c763e61ac75e518e222877a446db9018e
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
