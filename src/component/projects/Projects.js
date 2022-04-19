import React from "react";
import "./Projects.css";
const projects = [ 
    {
        name : "Pizza order",
        technolgy : "Reactjs , Nodejs , Expressjs , Mongoose"
    },
    {
        name : "Chicken analysis",
        technolgy : "Reactjs , Nodejs , Expressjs , Mongoose"
    },
    {
        name : "Stoore landing",
        technolgy : "Reactjs "
    },

];

function Projects() {
  return (
    <div className="project-section">
      <div className="project-inner">
          {
              projects.map(proj=>{
                  return <>
                  <span data-aos="fade-in">
                      <h4>{proj.name}</h4>
                      <h6>{proj.technolgy}</h6>
                  </span>
                  </>
              })
          }
          <h5 style={{fontSize:"0.6rem"}} >and to be fair many more              <a rel="noreferrer" href="https://github.com/khalledmuhammad" target="_blank" > <img alt="socialmediaIcon" src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/>    </a>   
 </h5>
      </div>
    </div>
  );
}

export default Projects;
