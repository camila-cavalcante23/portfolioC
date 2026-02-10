import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { PiCertificate, PiMedal } from "react-icons/pi"; // Se der erro, use FaAward de 'react-icons/fa'
import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <span className="section-label">FORMAÇÃO</span>
        <h2>
          Educação & <span className="highlight">Certificações</span>
        </h2>

        <div className="education-grid">
          
          {/* Coluna 1: Formação Acadêmica */}
          <div className="education-column">
            <h3 className="column-title">
              <FaGraduationCap /> Formação Acadêmica
            </h3>

            <div className="edu-card">
              <div className="card-icon-box">
                <FaGraduationCap />
              </div>
              <div className="card-content">
                <div className="card-header-row">
                    <strong>Bacharelado em Sistemas de Informação</strong>
                    <span className="status in-progress">Em andamento</span>
                </div>
                <p className="institution">Universidade Federal do Ceará (UFC)</p>
                <span className="period">2021 – 2026</span>
              </div>
            </div>

            <div className="edu-card">
              <div className="card-icon-box">
                <FaBookOpen />
              </div>
              <div className="card-content">
                <div className="card-header-row">
                    <strong>Técnico em Administração</strong>
                    <span className="status done">Concluído</span>
                </div>
                <p className="institution">EEEP Isaias Gonçalves Damasceno</p>
                <span className="period">2018 – 2020</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Certificações */}
          <div className="education-column">
            <h3 className="column-title">
              <PiCertificate /> Certificações
            </h3>

            <div className="cert-card">
              <div className="cert-icon-box">
                <PiMedal />
              </div>
              <div className="cert-content">
                <strong>Build a Web API with Minimal API, ASP.NET Core and .NET</strong>
                <p className="issuer">Microsoft Learn</p>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-icon-box">
                <PiMedal />
              </div>
              <div className="cert-content">
                <strong>Registered Scrum Basics™</strong>
                <p className="issuer">Scrum Inc.</p>
              </div>
            </div>

            <div className="cert-card">
              <div className="cert-icon-box">
                <PiMedal />
              </div>
              <div className="cert-content">
                <strong>Fundamentals of Deep Learning</strong>
                <p className="issuer">NVIDIA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}