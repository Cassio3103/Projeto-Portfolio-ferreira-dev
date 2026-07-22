import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";

import { useLanguage } from "./LanguageContext";

import "../styles/navBar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { t } = useLanguage();

  const sections = [
    {
      id: "home",
      label: t.navbar.home,
    },
    {
      id: "sobre",
      label: t.navbar.about,
    },
    {
      id: "tecnologias",
      label: t.navbar.technologies,
    },
    {
      id: "projetos",
      label: t.navbar.projects,
    },
    {
      id: "contato",
      label: t.navbar.contact,
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Destaca a seção atualmente visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Bloqueia o scroll quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

return (
  <nav className="navbar">
    <Logo />

    <div className="navbar-actions">

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={closeMenu}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      <LanguageToggle />

      <ThemeToggle />

      <button
        className="menu-button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

    </div>
  </nav>
);
}