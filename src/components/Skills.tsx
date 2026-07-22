import type { CSSProperties, ReactElement } from "react";

import {
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaPython,
} from "react-icons/fa";

import {
  SiGooglecloud,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";

interface Tecnologia {
  nome: string;
  icon: ReactElement;
}

interface GrupoStack {
  categoria: string;
  descricao: string;
  tecnologias: Tecnologia[];
}

interface TechTrackStyle extends CSSProperties {
  "--items-count": number;
}

export default function Skills() {
  const { t } = useLanguage();

  const stack: GrupoStack[] = [
    {
      categoria: t.skills.categories.languages,
      descricao: t.skills.descriptions.languages,
      tecnologias: [
        { nome: "Python", icon: <FaPython color="#3776ab" /> },
        { nome: "Java", icon: <FaJava color="#007396" /> },
        { nome: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
        { nome: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { nome: "React", icon: <SiReact color="#61dafb" /> },
      ],
    },
    {
      categoria: t.skills.categories.databases,
      descricao: t.skills.descriptions.databases,
      tecnologias: [
        { nome: "MySQL", icon: <SiMysql color="#4479a1" /> },
        { nome: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      ],
    },
    {
      categoria: t.skills.categories.tools,
      descricao: t.skills.descriptions.tools,
      tecnologias: [
        { nome: "Docker", icon: <FaDocker color="#2496ed" /> },
        { nome: "GCP", icon: <SiGooglecloud color="#4285f4" /> },
        { nome: "Git/GitHub", icon: <FaGitAlt color="#f05032" /> },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="section-heading">
          <h1 className="dark-title">{t.skills.title}</h1>

          <p>{t.skills.subtitle}</p>
        </RevealOnScroll>

        <div className="skills-carousel-stack">
          {stack.map((grupo, grupoIndex) => {
            const loopTecnologias = [
              ...grupo.tecnologias,
              ...grupo.tecnologias,
              ...grupo.tecnologias,
            ];

            return (
              <RevealOnScroll
                key={grupo.categoria}
                className="skills-row"
                delay={grupoIndex * 120}
              >
                <div className="skills-row-header">
                  <h2>{grupo.categoria}</h2>
                  <p>{grupo.descricao}</p>
                </div>

                <div
                  className="tech-carousel"
                  aria-label={`${t.skills.carouselLabel} ${grupo.categoria}`}
                >
                  <div
                    className={`tech-track ${
                      grupoIndex % 2 === 1 ? "reverse" : ""
                    }`}
                    style={
                      {
                        "--items-count": grupo.tecnologias.length,
                      } as TechTrackStyle
                    }
                  >
                    {loopTecnologias.map((tech, index) => (
                      <div
                        key={`${tech.nome}-${index}`}
                        className="tech-badge"
                      >
                        <span className="tech-icon">{tech.icon}</span>
                        {tech.nome}
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}