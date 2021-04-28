import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="divider container"></div>

      <section>
        <div className="row container portfolio">
          <h4 className="text-black">My Portfolio</h4>

          {/* Goal Tracker */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/goal_tracker.png"
                  alt="goal tracker app screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Full Stack App: Goal Tracker
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div id="reveal" className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Goal Tracker <i className="material-icons right">close</i>
                </span>
                <p>
                  Goal Tracker is an example of one of my most recent
                  development effort. This was a team project of talented
                  developer students working in collaboration via Git.
                </p>

                <p>
                  This project was developed using Node.js, Express, Handlebars,
                  Passport, MySql/Sequelize, Apex Charts NMP, JavaScript, and
                  Materialize's CSS framework.
                </p>

                <p>
                  It is currently deployed on Heroku and is in continuous
                  development to add new and advanced features and
                  functionality.
                </p>
                <div className="card-action revealBtn">
                  <a
                    href="https://github.com/verusbabb/verus-goal-tracker"
                    target="_blank"
                  >
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a
                  href="https://goal-tracker-kscc.herokuapp.com/"
                  target="_blank"
                >
                  <button className="btn waves-effect waves-light blue-grey">
                    See it live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Pair */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/pair_site.png"
                  alt="pair website screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Multi-API: Pair Recipes
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Pair<i className="material-icons right">close</i>
                </span>
                <p>
                  Pair is a dynamic and mobile-responsive web application that
                  lets a user search for food and cocktail recipes from separate
                  databases and curate the results in one place.
                </p>

                <p>
                  This project was a collaborative effort between the listed
                  contributors (see GitHub), using Agile software development
                  techniques and version control.
                </p>

                <p>
                  This project highlights the use of AJAX with multiple API
                  calls, Javascript, and beautification using Materialize's CSS
                  framework.
                </p>
                <div className="card-action revealBtn">
                  <a href="https://github.com/verusbabb/PAIR" target="_blank">
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a href="https://verusbabb.github.io/PAIR/">
                  <button
                    className="btn waves-effect waves-light blue-grey"
                    target="_blank"
                  >
                    See it live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Weather Dashboard */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/weather_dashboard.png"
                  alt="weather website screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  API Weather
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Weather Dashboard<i className="material-icons right">close</i>
                </span>
                <p>
                  OK, so maybe the world doesn't need another website to tell
                  you about the weather. But back when I developed this site, I
                  was learning about API calls, and so the world has another
                  weather app.
                </p>

                <p>
                  This project was my first app that linked my project code to
                  something outside of my project folders, specifically two of
                  Open Weather's APIs. Looking back on it, this was a great
                  learning experience.
                </p>

                <p>
                  You will also recognize my early work with JavaScript and
                  Materialize CSS to bring it all together.
                </p>
                <div className="card-action revealBtn">
                  <a
                    href="https://github.com/verusbabb/Weather_Dashboard"
                    target="_blank"
                  >
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a
                  href="https://verusbabb.github.io/Weather_Dashboard/"
                  target="_blank"
                >
                  <button className="btn waves-effect waves-light blue-grey">
                    See it live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row container">
          {/* Burger Cravings */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/burger_app.png"
                  alt="burger craving website screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  MySQL: Burger-Cravings Tracker
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Burger Cravings<i className="material-icons right">close</i>
                </span>
                <p>
                  This is plain silly. But a really effective way to track your
                  burger cravings. This was my first full stack app.
                </p>

                <p>
                  This app is built using the MVC architecture, with use of
                  JavaScript, Express, MySQL, and Handlebars. Rather than rely
                  on a CSS framework, I took a early crack at using all customer
                  CSS. I've come a long way since then, but it is good baseline
                  for showing how skills have evolved since these earlier
                  learning days.
                </p>

                <p>
                  It is currently deployed on Heroku (and I may add other
                  craving categories one day to make it even more useful).
                </p>
                <div className="card-action revealBtn">
                  <a href="https://github.com/verusbabb/burger" target="_blank">
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a href="https://verus-burger.herokuapp.com/" target="_blank">
                  <button className="btn waves-effect waves-light blue-grey">
                    See it live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Team Manager */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/team_manager.png"
                  alt="team manager app screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Node/Inquirer: Team Manager
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Team Manager<i className="material-icons right">close</i>
                </span>
                <p>
                  This app uses a command line interface to take input from a
                  team manager to add employees to a developer team and generate
                  a corresponding HTML file/page displaying team members.
                </p>

                <p>
                  The app is with Node.js, Inquirer (NPM package), JavaScript,
                  HTML, and CSS.
                </p>

                <p>
                  The primary emphasis of this project was to demonstrate
                  competency in dynamically generating HTML output based upon
                  CLI inputs.
                </p>
                <div className="card-action revealBtn">
                  <a
                    href="https://github.com/verusbabb/Team-Profile-Generator"
                    target="_blank"
                  >
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a
                  href="https://github.com/verusbabb/Team-Profile-Generator"
                  target="_blank"
                >
                  <button className="btn waves-effect waves-light blue-grey">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Employee Manager */}
          <div className="col s12 m4">
            <div className="card medium blue-grey lighten-4 z-depth-4">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src="assets/employee_tracker.png"
                  alt="employee tracker app screenshot"
                />
              </div>

              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Node/CLI: Employee Management
                  <i class="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  HR Employee Database
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  OK, so maybe the world doesn't need another website to tell
                  you about the weather. But back when I developed this site, I
                  was learning about API calls, and so the world has another
                  weather app.
                </p>

                <p>
                  This project was my first app that linked my project code to
                  something outside of my project folders, specifically two of
                  Open Weather's APIs. Looking back on it, this was a great
                  learning experience.
                </p>

                <p>
                  You will also recognize my early work with JavaScript and
                  Materialize CSS to bring it all together.
                </p>
                <div className="card-action revealBtn">
                  <a
                    href="https://github.com/verusbabb/employee_tracker"
                    target="_blank"
                  >
                    <button className="btn waves-effect waves-light blue-grey">
                      GitHub
                    </button>
                  </a>
                </div>
              </div>

              <div className="card-action cardBtn">
                <a
                  href="https://github.com/verusbabb/employee_tracker"
                  target="_blank"
                >
                  <button className="btn waves-effect waves-light blue-grey">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
