import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section id="home">
      <div className="container grid-home">
        <RevealOnScroll className="texto-home">
          <p>{t.home.greeting}</p>

          <h1>{t.home.title}</h1>

          <h2>{t.home.subtitle}</h2>

          <p>{t.home.description}</p>
        </RevealOnScroll>

        <RevealOnScroll className="foto-perfil" delay={160}>
          <img src="img/me.jpg" alt={t.home.title} />
        </RevealOnScroll>
      </div>
    </section>
  );
}