import React, { useState } from "react";
import "./Resume.css";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TagIcon from '@mui/icons-material/Tag';
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Social from "../Social/Social";
import Projects from "../projects/Projects";

function Resume() {
  const [education, setEducation] = useState(true);
  const [skills, setSkills] = useState(false);
  const [social , setSocial] = useState(false)
  const [projects , setProjects] = useState(false);
  const setAllfalse = () => {
    setEducation(false);
    setSkills(false);
    setSocial(false)
    setProjects(false)
  };
  const ChangeState = (function1, state1) => {
    setAllfalse();
    function1(state1);
  };

  return (
    <div id="resume" className="resume-section ">
      <div className="resume-inner d-flex flex-column">
        <h1 className="resume-heading" data-aos="fade-in">Resume</h1>
        <span className="resume-sub" data-aos="fade-out">my professional bio :</span>
        <div className=" rsume-new-section d-flex flex-row">
          <div className="  d-flex flex-row   resume-left-section bg-dark">
            <div className="d-flex flex-column  justify-content-around ">
              <SchoolIcon  className="left-side-icon"  onClick={() => {
                  ChangeState(setEducation , true);
                }} />
              <CodeIcon  className="left-side-icon" onClick={() => {
                    ChangeState(setSkills , true);
                  }} />
                   <FormatListBulletedIcon  className="left-side-icon" onClick={() => {
                    ChangeState(setProjects , true);
                  }} />
                    <TagIcon  className="left-side-icon" onClick={() => {
                    ChangeState(setSocial , true);
                  }} />

            </div>
            <div className="d-flex flex-column justify-content-around  text-dark bg-white w-100 left-section-options ">
              <h4
              className="mt-1"
                onClick={() => {
                  ChangeState(setEducation , true);
                }}
              >
                Education
              </h4>
              <h4
                  onClick={() => {
                    ChangeState(setSkills , true);
                  }}
              >
                Skills
              </h4>
              <h4
                  onClick={() => {
                    ChangeState(setProjects , true);
                  }}
              >
              Projects
              </h4>
              <h4
                  onClick={() => {
                    ChangeState(setSocial , true);
                  }}
              >
                Social
              </h4>
            </div>
          </div>
          <div className="resume-right-section">
            {education && <Education />}
            {skills && <Skills />}
            {social && <Social />}
            {projects && <Projects />}

          </div>
        </div>
      </div>
      <a href="../assets/khaled.pdf" download className="btn  my-5  cv-button " data-aos="fade-in" >Download my Cv</a> 
    </div>
  );
}

export default Resume;
