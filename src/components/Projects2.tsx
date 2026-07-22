import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";

import "../styles/projeto2.css";

export default function Projetos2() {
  const { t } = useLanguage();

  return (
    <section id="projetos" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="texto-projetos2">
          <RevealOnScroll className="section-heading align-left">
            <h1 className="dark-title">{t.projects.title}</h1>
          </RevealOnScroll>

          <div className="projects-list">
            {t.projects.list.map((projeto) => (
              <div className="project-card" key={projeto.title}>
                <h2>{projeto.title}</h2>

                <span className="project-stack">
                  {projeto.stack}
                </span>

                <p>{projeto.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}