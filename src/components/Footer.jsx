import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
   
        <div className="footer-left">
          <h3 className="footer-logo">Camila<span>.</span></h3>
          <p className="copyright">
            © 2026 • Feito com <span className="heart">💜</span> por Camila Paiva
          </p>
        </div>


        <div className="footer-socials">
          <a 
            href="https://github.com/camila-cavalcante23" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/camila-paiva-992379301/" 
            target="_blank" 
            rel="noreferrer" 
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
    </footer>
  );
}