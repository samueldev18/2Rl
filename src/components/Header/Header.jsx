import { useEffect, useState } from "react";
import "./Header.css";
import logoImg from "../../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* ESQUERDA: Logo */}
        <div className="header-left">
          <img src={logoImg} alt="Logo da Empresa" className="logo" />
        </div>

        {/* DIREITA: Nav + Hambúrguer */}
        <div className="header-right">
          <nav className={`nav ${mobileMenu ? "active" : ""}`}>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#produtos">Produtos</a>
            <a href="#contato" className="nav-cta">
              Orçamento
            </a>
          </nav>

          <div
            className={`hamburger ${mobileMenu ? "active" : ""}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}