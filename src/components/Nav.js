import React from "react";
// import M from "materialize-css";

function Nav() {
  // document.addEventListener("DOMContentLoaded", function () {
  //   var elems = document.querySelectorAll(".sidenav");
  //   var instances = M.Sidenav.init(elems);
  // });

  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            Steve Babb
          </a>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a
                href="https://docs.google.com/document/d/1qCPQ6AscKtrMSiXpAa96HzVsM0wBza4iu7CmPKX-gdA/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            href="https://docs.google.com/document/d/1qCPQ6AscKtrMSiXpAa96HzVsM0wBza4iu7CmPKX-gdA/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="#connect">Connect</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
