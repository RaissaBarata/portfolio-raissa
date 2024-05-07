import React from "react";
import "./works.css";
import Portfolio01 from "../../assets/projeto01.png";
import Portfolio02 from "../../assets/projeto02.png";
import Portfolio03 from "../../assets/projeto03.png";
import Portfolio04 from "../../assets/projeto04.png";
import Portfolio05 from "../../assets/projeto05.png";
import Portfolio06 from "../../assets/projeto06.png";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Card = ({ title, transcription, link, image }) => {
  return (
    <ScrollAnimation animateIn="zoomIn">
      <div className="card">
        <a href={link}>
          <img src={image} alt={title} className="cardImg" />
        </a>
        <div className="cardInfo">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardTranscription">{transcription}</p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const Works = () => {
  const projects = [
    {
      title: "Unique Studio",
      transcription: "Site para salão de beleza Unique Studio",
      link: "https://unique-studio.netlify.app",
      image: Portfolio01,
    },
    {
      title: "Ser Mais",
      transcription: "Site para o ateliê popular de escuta psicanalítica.",
      link: "https://ser-mais.vercel.app",
      image: Portfolio02,
    },
    {
      title: "Agencia Sunnyside",
      transcription: "Site para Agência Sunnyside",
      link: "https://agenciasunnyside.netlify.app",
      image: Portfolio03,
    },
    {
      title: "Seaweed Cosmetics",
      transcription:
        "Site criado para a marca de produtos de beleza Seaweed Cosmetics (em construção).",
      link: "https://seaweed-cosmetics.netlify.app",
      image: Portfolio04,
    },
    {
      title: "Verdelic",
      transcription: "Projeto desenvolvido para a marca de produtos matcha.",
      link: "https://www.behance.net/gallery/190345593/Verdelic-UXUI-DESIGN",
      image: Portfolio05,
    },
    {
      title: "PSIU",
      transcription:
        "Projeto final para o curso de UX/UI Design da plataforma de ensino Coderhouse.",
      link: "https://www.behance.net/gallery/160457897/Projeto-Final-Coderhouse",
      image: Portfolio06,
    },
  ];

  return (
    <section id="works">
      <h2 className="worksTitle">Portfolio</h2>
      <div className="worksCards">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;
