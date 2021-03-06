import React from "react";
import { Modal, Button } from "react-materialize";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import WhatIDo from "./WhatIDo";
import ResumeBtn from "./ResumeBtn";
import ConnectModal from "./ConnectModal";
import M from "materialize-css";

const trigger = (
  <Button className="waves-effect waves-light blue-grey moreDetails">
    More Details
  </Button>
);

function BioModal() {
  return (
    <div className="center-modal">
      <Modal
        trigger={trigger}
        id="modal1"
        className="modal-fixed-footer z-depth-4"
      >
        <div className="row">
          <AboutMe />
          <div />

          <div className="row" />
          <Skills />
          <Education />
        </div>
        <WhatIDo />
        <div className="bioBtns">
          <ResumeBtn />
          <ConnectModal />
        </div>
      </Modal>
    </div>
  );
}

export default BioModal;
