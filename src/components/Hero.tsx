import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="full-page bg-dark">
      <div className="container grid-sobre">
        <RevealOnScroll className="texto-sobre">
          <h1>{t.about.title}</h1>

          <p>{t.about.paragraph1}</p>

          <p>{t.about.paragraph2}</p>

          <p>{t.about.paragraph3}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Hero;