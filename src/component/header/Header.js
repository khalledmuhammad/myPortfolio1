import React, { useState } from "react";
import "./Header.css";
import khaled from "../assets/khaled.png";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";

function Header() {
  const menu = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Resume",
      path: "resume",
    },
    {
      title: "Quotes",
      path: "quotes",
    },
    {
      title: "Contact me",
      path: "Contact-me",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="Header-section py-5" id="home">
      <div className="menu-icon">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#00ff88" />
      </div>
      <nav className="d-flex flex-row justify-content-between align-items-center ">
        <span className="name-nav">KHALED</span>
        <div className="desk-nav d-flex flex-row mx-5">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500} >About</Link>
          <Link to="resume" spy={true} smooth={true} offset={50} duration={500} >Resume</Link>
          <Link to="quotes" spy={true} smooth={true} offset={50} duration={500} >Quotes</Link>
          <Link to="Contact-me" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link>

        
        </div>
      </nav>
      <div className=" home-section  ">
        <div className="text-section d-flex flex-column align-items-center">
          <h3 data-aos="slide-right">
            Hello , I'm <b>KHALED</b>
          </h3>
          <p data-aos="slide-left">
            Fullstack <b>Developer</b> , Student
          </p>
          <p data-aos="fade-in" className=" text-description text-center">
            I buid Fullstack application front to back <br /> <b>Reactjs</b> is
            my bread and butter
          </p>
          <div className="d-flex flex-row justify-content-center mt-2 mb-5 ">
            <Link  to="Contact-me" spy={true} smooth={true} offset={50} duration={500}  data-aos="ease-in" className=" btn-hire-me">
              Hire me
            </Link>
            <Link  to="resume" spy={true} smooth={true} offset={50} duration={600}  data-aos="ease-in" className=" btn-hire-me">
            Get resume

            </Link>
           
          </div>
        </div>

        <div className="flex-grow-1 d-flex justify-content-center px-5">
          <img
            data-aos="slide-left"
            className="img-fluid custom-img"
            alt="myImage"
            src={khaled}
          />
        </div>
      </div>

      <div>
        {isOpen && (
          <ul className="menu-item">
            {menu.map((item) => {
              return (
                <li>
                  <Link  to={item.path} spy={true} smooth={true} offset={50} duration={500} onClick={()=>setOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
