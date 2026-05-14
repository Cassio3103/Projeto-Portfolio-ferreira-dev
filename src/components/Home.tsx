import RevealOnScroll from './RevealOnScroll';

export default function Home() {
  return (
    <section id="home">
      <div className="container grid-home">
        <RevealOnScroll className="texto-home">
          <p>Olá, me chamo Cássio Ferreira</p>

          <h1>Desenvolvedor Full Stack</h1>

          <h2>Java • Spring • React • TypeScript</h2>

          <p>
            Desenvolvedor focado em criar aplicações modernas,
            performáticas e escaláveis.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="foto-perfil" delay={160}>
          <img src="/img/me.jpeg" alt="Cássio Ferreira" />
        </RevealOnScroll>
      </div>
    </section>
  );
}