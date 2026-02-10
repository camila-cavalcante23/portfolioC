import { useEffect, useState, useRef } from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "Front-End",
    description: "Interfaces modernas e responsivas",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Angular",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Figma (UI/UX)"
    ],
  },
  {
    title: "Back-End & DB",
    description: "Lógica de servidor e dados",
    items: [
      "C# .NET",
      "Node.js & Express",
      "API RESTful",
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "In-Memory DB"
    ],
  },
  {
    title: "Ferramentas & Outros",
    description: "DevOps e Metodologias",
    items: [
      "Git & GitHub",
      "Docker",
      "Scrum / Agile",
      "Postman",
      "Java / C / Python (Base)"
    ],
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <span className="section-label">HABILIDADES</span>

        <h2>
          Minhas <span className="highlight"> Qualificações</span>
        </h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div 
                className={`skill-card ${isVisible ? "animate-card" : ""}`} 
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }} 
            >
              <h3 className="category-title">{category.title}</h3>
              <p className="category-desc">{category.description}</p>

              <div className="tags-container">
                {category.items.map((item, i) => (
                  <span className="tech-tag" key={i}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}