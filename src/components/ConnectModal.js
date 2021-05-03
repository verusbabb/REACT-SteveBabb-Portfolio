import React from "react";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";

const connect = (
  <Button className="connect waves-effect waves-light blue-grey center-align">
    Connect
  </Button>
);

function ConnectModal() {
  return (
    <div className="center-modal">
      <Modal
        trigger={connect}
        id="modal2"
        className="modal-fixed-footer z-depth-4"
      >
        <div>
          <div>
            <div className="row">
              <h4 className="container connectHeader" id="connect">
                Connect With Me:
              </h4>
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
                  <ul>
                    <li>
                      <a
                        href="https://github.com/verusbabb"
                        target="_blank"
                        rel="noreferrer"
                        className="black-text"
                      >
                        Steve Babb
                      </a>
                    </li>
                    <li>
                      <address>
                        <a href="mailto:steve@verusgroup.com">
                          steve@verusgroup.com
                        </a>
                      </address>
                    </li>
                    <li>
                      <a href="tel:303-674-2950">303-674-2950</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConnectModal;
