import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaPaperPlane } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contato do Portfólio: ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail de contato: ${formData.email}\n\nMensagem:\n${formData.message}`
    );


    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=camilapaiva128@gmail.com&su=${subject}&body=${body}`;

    
    window.open(gmailUrl, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <span className="section-label">CONTATO</span>
        
        <h2>
          Vamos <span className="highlight">Conversar?</span>
        </h2>
        
        <p className="contact-subtitle">
          Estou sempre aberta a novas oportunidades e projetos interessantes.
          <br />Entre em contato!
        </p>

        <div className="contact-grid">
          
        
          <div className="contact-info">
            <h3 className="info-title">Informações de Contato</h3>
            
            <a href="mailto:camilapaiva128@gmail.com" className="info-card">
              <div className="icon-box">
                <HiOutlineMail />
              </div>
              <div className="info-text">
                <span className="label">E-mail</span>
                <span className="value">camilapaiva128@gmail.com</span>
              </div>
            </a>

            <a 
                href="https://www.linkedin.com/in/camila-paiva-992379301/" 
                target="_blank" 
                rel="noreferrer" 
                className="info-card"
            >
              <div className="icon-box">
                <FaLinkedinIn />
              </div>
              <div className="info-text">
                <span className="label">LinkedIn</span>
                <span className="value">Camila Paiva</span>
              </div>
            </a>

            <a 
                href="https://github.com/camila-cavalcante23" 
                target="_blank" 
                rel="noreferrer" 
                className="info-card"
            >
              <div className="icon-box">
                <FaGithub />
              </div>
              <div className="info-text">
                <span className="label">GitHub</span>
                <span className="value">/camila-cavalcante23</span>
              </div>
            </a>

            <div className="info-card">
              <div className="icon-box">
                <FiMapPin />
              </div>
              <div className="info-text">
                <span className="label">Localização</span>
                <span className="value">Crateús – CE, Brasil</span>
              </div>
            </div>
          </div>

     
          <div className="contact-form-wrapper">
            <h3>Envie uma Mensagem</h3>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Seu nome" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="seu@email.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    id="message" 
                    rows="4" 
                    placeholder="Escreva sua mensagem aqui..." 
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Enviar via Gmail <FaPaperPlane className="btn-icon"/>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}