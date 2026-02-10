import React, { useState, useEffect } from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi"; 
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import projectsData from "../data/projects.json";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

 
  const filteredProjects =
    filter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.type === filter);

  
  const projectsToDisplay = showAll ? filteredProjects : filteredProjects.slice(0, 3);


  useEffect(() => {
    setShowAll(false);
  }, [filter]);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <span className="section-label">PROJETOS PRINCIPAIS</span>

        <h2>
          Meus <span>Trabalhos</span>
        </h2>
        
      
        <div className="filters">
          {["Todos", "Front-end", "Full Stack"].map((item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        
     
        <div className="projects-grid">
          {projectsToDisplay.map((project, index) => (
            <div className="project-card" key={index}>
              
              <div className="card-header">
                <div className="folder-icon">
                  <FiFolder />
                </div>
                
                <div className="header-right">
               
                    {project.status && (
                        <span className={`status ${project.status.replace(" ", "").toLowerCase()}`}>
                            {project.status === "Recente" ? "✨ Recente" : "⏳ Em Andamento"}
                        </span>
                    )}
                    
                
                    <a 
                        href={project.githubLink || project.repoLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="github-icon" 
                        title="Ver Código no GitHub"
                    >
                        <FiGithub />
                    </a>

                 
                    {project.demoLink && (
                        <a 
                            href={project.demoLink}
                            target="_blank" 
                            rel="noreferrer" 
                            className="demo-icon"
                            title="Ver Projeto Online"
                        >
                            <FiExternalLink />
                        </a>
                    )}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

         
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

   
        {filteredProjects.length > 3 && (
          <div className="see-more-container">
            <button 
                className="see-more-btn" 
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Ver menos projetos" : "Ver todos os projetos"}
                {showAll ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        )}

   
        <div className="projects-footer">
            <a
            href="https://github.com/camila-cavalcante23" 
            target="_blank"
            rel="noreferrer"
            className="github-btn"
            >
            <RiGitRepositoryLine size={18} style={{marginRight: '8px'}}/>
            Ver perfil completo no GitHub
            </a>
        </div>
      </div>
    </section>
  );
}