import React from "react";
import "./intro.css";
import bg from "../../assets/fotoperfil.png";
import { FaLinkedin, FaInstagram, FaBehance, FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <img src={bg} alt="profile" className="bg" />
        <span className="hello">Raíssa Barata</span> <br></br>
        <span className="introText">UX/UI Designer</span>
        <span className="introText">Desenvolvedora Front-end</span>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/raissabarata/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/raissabarata/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.behance.net/raissaebarata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
          <a
            href="https://github.com/RaissaBarata"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
