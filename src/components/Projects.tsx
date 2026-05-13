import RevealOnScroll from "./RevealOnScroll";

interface Projeto {
  title: string;
  img: string;
  repo: string;
  demo: string | null;
}

export default function Projects() {
  const meusProjetos: Projeto[] = [
    {
      title: "",
      img: "",
      repo: "",
      demo: "",
    },
    {
      title: "",
      img: "",
      repo: "",
      demo: "",
    },
    {
      title: "exemplo",
      img: "",
      repo: "",
      demo: "https://projeto-cinema-coral.vercel.app/",
    },
    {
      title: "",
      img: "",
      repo: "",
      demo: "",
    },
    {
      title: "",
      img: "",
      repo: "",
      demo: null,
    },
  ];

  return (
    <section id="projetos" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="section-heading align-left">
          <h1 className="dark-title">Projetos em Destaque</h1>
        </RevealOnScroll>

        <div className="grid-projetos">
          {meusProjetos.map((proj, index) => (
            <RevealOnScroll
              className="card"
              key={proj.title}
              delay={index * 90}
            >
              <div className="projeto-thumb">
                <img src={proj.img} alt={proj.title} />
              </div>

              <div className="card-body">
                <h3>{proj.title}</h3>

                <div className="links">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      Ver Projeto
                    </a>
                  )}

                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn secondary"
                  >
                    Código
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}