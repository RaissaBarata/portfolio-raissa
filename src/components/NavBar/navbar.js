import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contato.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Início</Link>
        <Link className="desktopMenuListItem">Projetos</Link>
        <Link className="desktopMenuListItem">Sobre Mim</Link>
      </div>
      <a href="/contact">
        <img src={contactImg} alt="" className="desktopMenuImg" />
      </a>
    </nav>
  );
};

export default Navbar;
