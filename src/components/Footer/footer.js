import React from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaBehance, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
