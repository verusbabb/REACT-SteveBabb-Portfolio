import React from "react";

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="row">
          <div className="col s12 social">
            <div className="container social">
              <a
                href="https://www.linkedin.com/in/steve-babb"
                target="_blank"
                rel="noreferrer"
                className="fab fa-linkedin item-1"
              ></a>
              <a
                href="https://www.instagram.com/verusbabb/"
                target="_blank"
                rel="noreferrer"
                className="fab fa-instagram item-2"
              ></a>
              <a
                href="https://twitter.com/verusbabb"
                target="_blank"
                rel="noreferrer"
                className="fab fa-twitter item-3"
              ></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 contact">
            <div>
              <h5 id="connect" className="white-text">
                Connect with me
              </h5>
              <ul>
                <li>
                  <a
                    className="white-text"
                    href="https://github.com/verusbabb"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Steve Babb
                  </a>
                </li>
                <li>
                  <address>
                    <a
                      className="contactInfo"
                      href="mailto:steve.babb@outlook.com"
                    >
                      steve@verusgroup.com
                    </a>
                  </address>
                </li>
                <li>
                  <a className="contactInfo" href="tel:303-674-2950">
                    303-674-2950
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
