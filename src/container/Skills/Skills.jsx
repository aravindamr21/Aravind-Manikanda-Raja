import { React } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

function Skills() {
  const skills = [
    { name: "Java", icon: images.java, bgColor: "#edf2f8" },
    { name: "Docker", icon: images.docker, bgColor: "#313bac" },
    { name: "Terraform", icon: images.terraform, bgColor: "#6b7688" },
    { name: "AWS", icon: images.aws, bgColor: "#f0f7ff" },
    { name: "MySQL", icon: images.mysql, bgColor: "#e7f0ff" },
    { name: "Oracle", icon: images.oracle, bgColor: "#ffeded" },
    { name: "Jenkins", icon: images.jenkins, bgColor: "#eeebe9" },
    { name: "HTML", icon: images.html, bgColor: "#edf2f8" },
    { name: "CSS", icon: images.css, bgColor: "#313bac" },
    { name: "Python", icon: images.python, bgColor: "#e8ffe8" },
    { name: "React", icon: images.react, bgColor: "#edf2f8" },
    { name: "MATLAB", icon: images.matlab, bgColor: "#ffe9cc" },
    { name: "PLC", icon: images.plc, bgColor: "#d8f1ff" },
  ];

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
