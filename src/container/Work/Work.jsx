import React from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import works from "./WorkData";

function Work() {
  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app-flex" key={index}>

            {/* --- IMAGE ONLY (NO ICONS) --- */}
            <div className="app__work-img app-flex">
              <img src={work.imageUrl} alt={work.title} />
            </div>

            {/* --- PROJECT TEXT --- */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "projects",
  "work__primarybg"
);
