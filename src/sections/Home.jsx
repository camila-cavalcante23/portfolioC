import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <header className="home-header">
        <h3 className="logo">Camila<span>.</span></h3>

        <nav className="nav">
          <a href="#home" className="active">Home</a>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#skills">Habilidades</a>
          <a href="#experience">Experiência</a>
          <a href="#education">Formação</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <div className="home-content">
        <div className="badge-container">
            <span className="badge">
                <span className="badge-dot"></span> Disponível para oportunidades
            </span>
        </div>

        <h1>
          Camila <span>Paiva</span>
        </h1>

        <h2>
          Desenvolvedora Full Stack <span>(Foco em Front-End)</span>
        </h2>

        <p className="location">
             Crateús – Ceará – Brasil
        </p>

        <p className="description">
          Graduanda em Sistemas de Informação, apaixonada por tecnologia e
          Desenvolvimento de Software.
        </p>

        <div className="buttons">
          <a href="#projects" className="btn primary">Ver Projetos →</a>
          <a href="#contact" className="btn secondary">Entrar em Contato</a>
        </div>

        <div className="socials">
          <a 
            href="https://github.com/camila-cavalcante23" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/camila-paiva-992379301/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          
          <a 
            href="mailto:camilapaiva128@gmail.com" 
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </section>
  );
}