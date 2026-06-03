import React from "react";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa6"; // Ícones atualizados
import "./Experience.css";

const experiences = [

  {
    title: "Projeto de Extensão",
    org: "Mineração Acessível - UFC",
    description:
      "Desenvolvimento de uma plataforma de acessibilidade comunicacional trilíngue (Português, Inglês e Libras) para promover inclusão de pessoas surdas no setor mineral, atuando em atividades de desenvolvimento Full Stack, banco de dados e acessibilidade digital.",
    side: "right",
    icon: <FaGraduationCap />, 
  },
  {
    title: "Bolsista de Iniciação Científica",
    org: "CNPq",
    description:
      "Participação em projeto de pesquisa científica, desenvolvendo habilidades de investigação e análise.",
    side: "left",
    icon: <FaAward />, 
  },
  {
    title: "Projeto de Extensão",
    org: "Garotas Tech dos Sertões - UFC",
    description:
      "Contribuição em projeto voltado para empoderamento feminino na tecnologia e inclusão digital.",
    side: "right",
    icon: <FaGraduationCap />, 
  },
  {
    title: "Projeto Germinar",
    org: "StartUFC",
    description:
      "Participação em programa de empreendedorismo e inovação da Universidade Federal do Ceará.",
    side: "left",
    icon: <FaBriefcase />, 
  },
  {
    title: "Customer Service Associate",
    org: "Amazon",
    description:
      "Atendimento ao cliente com foco em resolução de problemas, comunicação eficaz e trabalho em equipe.",
    side: "right",
    icon: <FaBriefcase />,
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <span className="section-label">EXPERIÊNCIA</span>
        
        <h2>
          Minha <span className="highlight">Trajetória</span>
        </h2>

        <div className="timeline">
          
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.side}`}>
              
             
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <div className="card-icon-box">
                  {exp.icon}
                </div>
                
                <div className="card-content">
                    <h3>{exp.title}</h3>
                    <span className="org-name">{exp.org}</span>
                    <p>{exp.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}