import React from "react";
import "./skill.css";
import UIDesign from "../../assets/uxlogo.svg";
import WebDesign from "../../assets/webdesignicon.png";
import FrontEnd from "../../assets/frontend.png";

const skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Sobre Mim</span>
      <span className="skillDesc">
        {" "}
        Olá! Me chamo Raíssa, sou estudante de Análise e Desenvolvimento de
        Sistemas especializada em desenvolvimento de websites e design de
        experiência do usuário (UX). Trabalho para criar interfaces web
        intuitivas e atraentes, garantindo que cada usuário tenha uma
        experiência digital memorável. Se você está em busca de um desenvolvedor
        web apaixonado por criar soluções digitais eficazes, adoraria trabalhar
        com você!
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBaring"></img>
          <div className="skillBarText">
            <h2>UX/UI Design</h2>
            <p>
              Experiência em criação de interfaces digitais intuitivas e
              visualmente atraentes. Eu me dedico a entender as necessidades e
              os comportamentos dos usuários para projetar produtos que atendam
              às suas expectativas e proporcionem uma experiência de alta
              qualidade.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBaring"></img>
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              Como web designer, minha principal responsabilidade é criar
              designs visuais atraentes e funcionais para websites e aplicativos
              da web. Isso inclui a criação de layouts, seleção de cores,
              tipografia e elementos visuais para garantir uma experiência de
              usuário envolvente.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={FrontEnd} alt="FrontEnd" className="skillBaring"></img>
          <div className="skillBarText">
            <h2>Desenvolvimento Front-end</h2>
            <p>
              Como desenvolvedora Front-end, sou especializada na implementação
              de interfaces web utilizando tecnologias como HTML, CSS e
              JavaScript. Minha experiência inclui a criação de layouts
              responsivos e a implementação de funcionalidades interativas
              utilizando frameworks como React.js.
            </p>
          </div>
        </div>
      </div>
      <a href="/curriculoraissa.pdf" download className="seeMoreButton">
        Baixe meu currículo aqui
      </a>
    </section>
  );
};

export default skill;
