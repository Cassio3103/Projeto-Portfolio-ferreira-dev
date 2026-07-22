import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";
import type { CSSProperties } from "react";

export default function Contact() {
  const { t } = useLanguage();

  const contatos = [
    {
      nome: t.contact.links.linkedin,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/c%C3%A1ssio-ferreira-3003a5387/",
      color: "#0077b5",
    },
    {
      nome: t.contact.links.github,
      icon: <FaGithub />,
      link: "https://github.com/Cassio3103",
      color: "#333",
    },
    {
      nome: t.contact.links.email,
      icon: <FaEnvelope />,
      link: "mailto:cassiofelipepaiva@gmail.com",
      color: "#ea4335",
    },
    {
      nome: t.contact.links.whatsapp,
      icon: <FaWhatsapp />,
      link: "https://wa.me/5584999706521",
      color: "#25d366",
    },
  ];

  return (
    <section id="contato" className="full-page bg-dark">
      <div className="container contact-container">
        <RevealOnScroll>
          <h1>{t.contact.title}</h1>

          <p>{t.contact.subtitle}</p>
        </RevealOnScroll>

        <div className="social-links">
          {contatos.map((item, index) => (
            <RevealOnScroll
              key={item.link}
              className="contact-reveal"
              delay={index * 100}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                style={
                  {
                    "--brand-color": item.color,
                  } as CSSProperties
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