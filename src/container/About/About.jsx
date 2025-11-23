import React from "react";
import "./About.scss";
import { AppWrap } from "../../wrapper";

function About() {
  return (
    <div className="about__container">

      {/* TITLE */}
      <h2 className="about-title">About <span>Me</span></h2>

      {/* ONE BIG BOX */}
      <div className="about__singlebox">

        <h3 className="section-heading">Who Am I?</h3>

        <p className="section-text">
          Hello! I'm Aravind Manikanda Raja P — a curious developer and an aspiring
          engineer driven by learning, building, and improving. Currently pursuing
          my B.E in Electrical and Electronics Engineering at Karpagam Institute
          of Technology, I bring a unique blend of hardware understanding and
          software expertise.
        </p>

        <p className="section-text">
          I enjoy creating meaningful digital experiences, solving problems with
          clean code, and learning new technologies that make me a better engineer
          each day.
        </p>

      </div>

    </div>
  );
}

export default AppWrap(About, "about");
