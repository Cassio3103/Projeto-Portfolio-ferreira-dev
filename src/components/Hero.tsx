import RevealOnScroll from "./RevealOnScroll";
import { useLanguage } from "./LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="full-page bg-dark">
      <div className="container grid-sobre">
        <RevealOnScroll className="texto-sobre">
          <h1>{t.about.title}</h1>

          <p>
            {t.about.paragraph1.start}
            <strong>{t.about.paragraph1.highlight1}</strong>
            {t.about.paragraph1.middle}
            <strong>{t.about.paragraph1.highlight2}</strong>
            {t.about.paragraph1.end}
          </p>

          <p>
            {t.about.paragraph2.start}
            <strong>{t.about.paragraph2.highlight1}</strong>
            {t.about.paragraph2.middle}
            <strong>{t.about.paragraph2.highlight2}</strong>
            {t.about.paragraph2.end}
            <strong>{t.about.paragraph2.highlight3}</strong>
            {t.about.paragraph2.finish}
          </p>

          <p>
            {t.about.paragraph3.start}
            <strong>{t.about.paragraph3.highlight1}</strong>
            {t.about.paragraph3.middle}
            <strong>{t.about.paragraph3.highlight2}</strong>
            {t.about.paragraph3.middle2}
            <strong>{t.about.paragraph3.highlight3}</strong>
            {t.about.paragraph3.end}
            <strong>{t.about.paragraph3.highlight4}</strong>
            {t.about.paragraph3.finish}
          </p>

        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Hero;