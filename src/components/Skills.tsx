import type { CSSProperties, ReactElement } from "react";

import {
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJs,
  FaPython,
  //FaTerminal,
} from "react-icons/fa";

import {
  //SiDjango,
  SiGooglecloud,
  //SiJira,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";

import RevealOnScroll from "./RevealOnScroll";

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
  const stack: GrupoStack[] = [
    {
      categoria: "Linguagens e Frameworks",
      descricao: "Base principal para backend, APIs e interfaces web.",
      tecnologias: [
        { nome: "Python", icon: <FaPython color="#3776ab" /> },
        //{ nome: "Django", icon: <SiDjango color="#092e20" /> },
        { nome: "Java", icon: <FaJava color="#007396" /> },
        { nome: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
        { nome: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { nome: "React", icon: <SiReact color="#61dafb" /> },
        //{ nome: "C/C++", icon: <FaTerminal color="#64748b" /> },
      ],
    },
    {
      categoria: "Bancos",
      descricao: "Persistência e modelagem para sistemas de gestão.",
      tecnologias: [
        { nome: "MySQL", icon: <SiMysql color="#4479a1" /> },
        { nome: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      ],
    },
    {
      categoria: "Ferramentas",
      descricao: "Fluxo de versionamento, cloud e organização de entregas.",
      tecnologias: [
        { nome: "Docker", icon: <FaDocker color="#2496ed" /> },
        { nome: "GCP", icon: <SiGooglecloud color="#4285f4" /> },
        { nome: "Git/GitHub", icon: <FaGitAlt color="#f05032" /> },
        //{ nome: "Jira", icon: <SiJira color="#0052cc" /> },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="section-heading">
          <h1 className="dark-title">Tecnologias</h1>
          <p>
            Stacks que uso para construir projetos web, APIs e soluções de
            backend.
          </p>
        </RevealOnScroll>

        <div className="skills-carousel-stack">
          {stack.map((grupo, grupoIndex) => {
            const loopTecnologias: Tecnologia[] = [
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
                  aria-label={`Carrossel de ${grupo.categoria}`}
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