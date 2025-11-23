import React from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai";

function Header() {
  return (
    <div className="app__header app__flex">

      {/* LEFT SIDE TEXT */}
      <motion.div
        whileInView={{ x: [-80, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header-text-box"
      >

        {/* NAME */}
        
        <h1 className="head-text header-title-custom">
          Aravind Manikanda Raja P
        </h1>

        {/* TYPEWRITER TEXT */}
        <p className="typewriter-text">
          A passionate software developer
        </p>

        {/* QUOTE */}
        <p className="header-quote">
          "If you want to creak the system first you understand the system"
        </p>

        {/* ICONS */}
        <div className="header-icons">
          <a href="https://github.com/aravindamr21" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aravind-manikanda-raja-p-465282247/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>

          <a href="/resume.pdf" download>
            <AiOutlineDownload />
          </a>
        </div>

        {/* CONTACT BUTTON */}
        <a href="#contact" className="contact-btn">Contact Me</a>
      </motion.div>

      {/* PHOTO */}
      <motion.div
        whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
        transition={{ duration: 1.2, type: "spring" }}
        className="app__header-img"
      >
        <motion.img
          src={images.me}
          className="profile-photo"
          alt="profile"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

    </div>
  );
}

export default AppWrap(Header, "home");
