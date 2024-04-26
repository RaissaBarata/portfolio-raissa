import React from "react";
import "./intro.css";
import bg from "../../assets/fotoperfil.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"></div>
      <img src={bg} alt="profile" className="bg" />
      <span className="hello">Raíssa Barata</span> <br></br>
      <span className="introText">UX/UI Designer</span>
      <span className="introText">Desenvolvedora Front-end</span>
    </section>
  );
};

export default Intro;
