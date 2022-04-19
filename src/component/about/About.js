import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about-section my-5">
      <div className="d-flex flex-sm-column about-section-inside ">
        <h1 data-aos="fade-in" className="about-me-heading">About me</h1>
        <h3 data-aos="fade-out" className="about-me-sub"> who am i ? </h3>
        <div className="row justify-content-center  shadow-lg my-5">
          <div data-aos="slide-left" className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center  ">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_osrbi94c.json"
              background="transparent"
              speed="1"
              loop
              autoplay

            ></lottie-player>
          </div>
          <div data-aos="slide-right" className="col-lg-6 col-md-6 col-sm-12 d-flex py-5 flex-column align-items-center justify-content-center  ">
            <span className="text-about-me">
              Hey ,  iam khaled , Skilled full-stack developer "mern stack" 
          <br/>
              I am an experienced web developer <br/> self employed till now mainly building using react , with
              high experience of <b>(node.js ,express.js ,Reactjs , MongoDB ,
              mongoose , JS "vanilla" , CSS , bootstrap , material-UI ) </b>  <br/>I can
              create any website you desire .. fully <em> responsive</em> with required functionalities and amazing
              design..
            </span>
            <span className="highlights">
              
              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
