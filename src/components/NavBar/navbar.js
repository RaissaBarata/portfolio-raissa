import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contato.svg";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showMenu, setShowMenu] = useState(false); // Adicionando useState aqui

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Início
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Sobre Mim
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Projetos
        </Link>
      </div>

      <div className="desktopMenuImg" onClick={scrollToContact}>
        <img src={contactImg} alt="" />
      </div>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Início
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={-50}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Sobre Mim
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Projetos
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(!showMenu)}
        >
          Contato
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
