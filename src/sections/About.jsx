import React from 'react';
import { FaCode, FaCoffee } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5"; 
import { BiTargetLock } from "react-icons/bi"; 
import "./About.css";
import fotoPerfil from "../assets/perfil.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
 
        <div className="about-left">
          <span className="section-label">SOBRE MIM</span>

          <h2>
            <span className="highlight-underline">Olá!</span> Sou a <span>Camila</span>
          </h2>

          <div className="about-content">
            
          
            <div className="about-image">
    
               <img src={fotoPerfil} alt="Camila Paiva" className="profile-img" />
            </div>

         
            <div className="about-description">
              <p>
                Olá! Sou a Camila, técnica em Administração e graduanda em
                <strong> Sistemas de Informação</strong> pela UFC.
              </p>

              <p>   
                Atuo com desenvolvimento Web, com forte base em <strong>HTML, CSS, JavaScript, React e TypeScript.</strong>
                No Back-End, estou em constante evolução, construindo aplicações com<strong> C#, Node.js e APIs REST</strong>, integradas a bancos de dados como <strong>SQL Server e PostgreSQL.</strong> 
              </p>
              
              <p>
                Além da stack web, possuo conhecimentos sólidos em <strong>Java, C e Python</strong>. Utilizo <strong>Git e GitHub</strong> diariamente 
                para versionamento e colaboração.
              </p>

              <p>
                Na prática, atuei na prototipação e desenvolvimento do sistema <strong>Meu Salão</strong>, com foco em empreendedores locais
              . Atualmente, estou desenvolvendo uma plataforma de acessibilidade comunicacional trilíngue (Português, Inglês e Libras) voltada ao <strong>setor mineral.
              </strong>O projeto tem como objetivo promover inclusão e acessibilidade para pessoas
               surdas, e minha atuação envolve atividades de desenvolvimento Full Stack, modelagem de 
               banco de dados, integração de APIs, sincronização de dados e aplicação de diretrizes 
               de acessibilidade WCAG.
              </p>

              <p>
                Bom, para finalizar: nas horas vagas, adoro <strong>desenhar, pintar, fazer artesanato...</strong> Também não dispenso um <strong>bom filme</strong> (com muita 
                pipoca, claro!).
              </p>

              <blockquote>
                Busco oportunidades de estágio ou posições júnior em tecnologia,
                onde eu possa evoluir continuamente e contribuir para projetos
                com impacto real.
              </blockquote>
            </div>
          </div>
        </div>

      
        <div className="about-right">
          <div className="cards-grid">
            
            <div className="card">
              <div className="icon-box">
                <FaCode />
              </div>
              <div className="card-info">
                <h3>Front-End</h3>
                <p>React, TS & Tailwind</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <IoSparklesSharp />
              </div>
              <div className="card-info">
                <h3>UI / UX</h3>
                <p>Design no Figma</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <BiTargetLock />
              </div>
              <div className="card-info">
                <h3>Back-End & DB</h3>
                <p>C#, Node & SQL</p>
              </div>
            </div>

            <div className="card">
              <div className="icon-box">
                <FaCoffee />
              </div>
              <div className="card-info">
                <h3>Base Técnica</h3>
                <p>Java, C, Python & Git</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}