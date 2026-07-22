import RevealOnScroll from "./RevealOnScroll";
import "../styles/projeto2.css";

const projetos = [
  {
    titulo: "UseByLua",
    tecnologias: "Java • Spring • PostgreSQL",
    descricao:
      "Uma aplicação usando Java com Spring para uma loja virtual de acessórios. Utiliza PostgreSQL para persistência dos dados e conta com autenticação de usuários e gerenciamento de produtos.",
  },
  {
    titulo: "Clínica Veterinária",
    tecnologias: "Java • Spring • React • TypeScript",
    descricao:
      "Aplicação completa para gerenciamento de uma clínica veterinária, integrando Back-End em Java + Spring e Front-End em React. O sistema inclui consultas, farmácia, banho e tosa e loja de acessórios para pets.",
  },
  {
    titulo: "Lingumap",
    tecnologias: "React • TypeScript",
    descricao:
      "Aplicação Front-End desenvolvida em React e TypeScript que permite explorar um mapa interativo para descobrir curiosidades sobre os idiomas e culturas de diversos países.",
  },
  {
    titulo: "WiShak",
    tecnologias: "Go • ESP32",
    descricao:
      "Projeto envolvendo captura e análise de quadros Wi-Fi utilizando um ESP32 e uma aplicação desenvolvida em Go para estudo de redes de computadores e segurança.",
  },
];

export default function Projetos2() {
  return (
    <section id="projetos" className="full-page bg-light">
      <div className="container">
        <RevealOnScroll className="texto-projetos2">
          <RevealOnScroll className="section-heading align-left">
            <h1 className="dark-title">Projetos em Destaque</h1>
          </RevealOnScroll>

          <div className="projects-list">
            {projetos.map((projeto) => (
              <div className="project-card" key={projeto.titulo}>
                <h2>{projeto.titulo}</h2>

                <span className="project-stack">
                  {projeto.tecnologias}
                </span>

                <p>{projeto.descricao}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}