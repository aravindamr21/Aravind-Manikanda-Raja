import React from "react";
import { AiOutlineDownload } from "react-icons/ai"; // ⭐ RESUME ICON
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <h2 className="head-text">Let's Connect!!</h2>

      <div className="app__footer-cards">

        {/* EMAIL */}
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:aravindamr23@gmail.com" className="p-text">
            aravindamr23@gmail.com
          </a>
        </div>

        {/* PHONE */}
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+918110999071" className="p-text">
            Phone Number
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="app__footer-card">
          <img src={images.linkedln} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/aravind-manikanda-raja-p-465282247/"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* GITHUB */}
        <div className="app__footer-card">
          <img src={images.github} alt="github" />
          <a
            href="https://github.com/aravindamr21"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* RESUME WITH ICON */}
        <div className="app__footer-card resume-card">
          <AiOutlineDownload className="resume-icon" />
          <a href="/resume.pdf" className="p-text" download>
            Download Resume
          </a>
        </div>

      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
