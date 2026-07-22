import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

import "../styles/navBar.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#sobre" onClick={closeMenu}>
              Sobre mim
            </a>
          </li>

          <li>
            <a href="#tecnologias" onClick={closeMenu}>
              Tecnologias
            </a>
          </li>

          <li>
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>

          <li>
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>


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