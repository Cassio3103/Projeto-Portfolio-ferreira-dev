import RevealOnScroll from './RevealOnScroll';

function Hero() {
  return (
    <section id="sobre" className="full-page bg-dark">
      <div className="container grid-sobre">
        <RevealOnScroll className="texto-sobre">
          <h1>Sobre Mim</h1>
          <p>
            Sou um desenvolvedor focado na construção de sistemas robustos e escaláveis. Atualmente, curso o Bacharelado em Tecnologia da Informação no <strong>Instituto Metrópole Digital - Universidade Federal do Rio Grande do Norte (IMD-UFRN)</strong>, onde aprofundo meus conhecimentos em arquitetura de software e algoritmos.
            Também possuo ensino de nível técnico pelo Instituto Federal do Rio Grande do Norte no curso de Mecatrônica, lugar onde tive meu primeiro contato prático com programação e onde desenvolvi uma base sólida nessa área.
          </p>

          <p>
            Atualmente atuo como <strong>Freelancer</strong>, desenvolvendo sistemas BackEnd usando linguagens de programação e frameworks que domino, como o Java e o Spring Boot.
          </p>

          <p>
            Além disso, estou expandindo meu stack para soluções de microsserviços com linguagem <strong>GoLang</strong>, além de explorar tecnologias de infraestrutura como <strong>Docker e Google Cloud Platform (GCP)</strong>. Meu objetivo é unir a agilidade do desenvolvimento web moderno com a segurança de arquiteturas backend consolidadas.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Hero;