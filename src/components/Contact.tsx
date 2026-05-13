import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import RevealOnScroll from './RevealOnScroll';
import type { CSSProperties } from "react";

export default function Contact() {
  const contatos = [
    { nome: "LinkedIn", icon: <FaLinkedin />, link: "", color: "#0077b5" },
    { nome: "GitHub", icon: <FaGithub />, link: "", color: "#333" },
    { nome: "E-mail", icon: <FaEnvelope />, link: "mailto:", color: "#ea4335" },
    { nome: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/55849", color: "#25d366" }
  ];

  return (
    <section id="contato" className="full-page bg-dark">
      <div className="container contact-container">
        <RevealOnScroll>
          <h1>Vamos construir algo juntos?</h1>
          <p>Estou disponível para novos desafios em Backend e parcerias em projetos Open Source.</p>
        </RevealOnScroll>

        <div className="social-links">
          {contatos.map((item, index) => (
            <RevealOnScroll
              key={item.nome}
              className="contact-reveal"
              delay={index * 100}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                style={{"--brand-color": "#fff",} as CSSProperties
}
              >
                <span className="icon">{item.icon}</span>
                {item.nome}
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}