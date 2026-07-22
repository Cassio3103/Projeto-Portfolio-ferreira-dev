import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p>{t.footer.copyright}</p>
    </footer>
  );
}