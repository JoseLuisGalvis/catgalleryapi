// components/Navbar.js
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap"; // Importa Dropdown desde react-bootstrap
import PropTypes from "prop-types";
import logo from "../assets/img/logo.jpg";

const translations = {
  es: {
    navbarTitle: "DonGato App",
    inicio: "Inicio",
    imagenes: "Carrusel",
    razas: "Galería",
    contacto: "Contacto",
    darkMode: "🌞 Modo Claro",
    lightMode: "🌙 Modo Oscuro",
    language: "Español",
    english: "Inglés",
  },
  en: {
    navbarTitle: "DonGato App",
    inicio: "Home",
    imagenes: "Carousel",
    razas: "Gallery",
    contacto: "Contact",
    darkMode: "🌞 Light Mode",
    lightMode: "🌙 Dark Mode",
    language: "Spanish",
    english: "English",
  },
};

function NavbarComponent({ language, toggleLanguage, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[language] || translations["es"];

  useEffect(() => {
    // Cargar el tema desde localStorage al montar
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme !== theme) {
      toggleTheme(); // Sincroniza con lo guardado
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, toggleTheme]);

  const handleNavClick = () => {
    if (window.innerWidth < 992) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (navbarToggler) navbarToggler.click(); // Cierra el menú
    }
  };

  const handleToggleTheme = () => {
    toggleTheme(); // Usa la función global
    localStorage.setItem("theme", theme === "light" ? "dark-mode" : "light"); // Guarda el nuevo estado
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img
            src={logo}
            width="50"
            height="50"
            className="me-2"
            alt="Cat Logo"
          />
          <span className="fw-bold">{t.navbarTitle}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero" onClick={handleNavClick}>
              {t.inicio}
            </Nav.Link>
            <Nav.Link href="#carousel" onClick={handleNavClick}>
              {t.imagenes}
            </Nav.Link>
            <Nav.Link href="#grid" onClick={handleNavClick}>
              {t.razas}
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleNavClick}>
              {t.contacto}
            </Nav.Link>
          </Nav>
          <Form className="d-flex gap-2 align-items-center">
            {/* Botón de cambio de tema */}
            <Button
              variant={theme === "dark" ? "light" : "dark"}
              onClick={handleToggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </Button>

            {/* Menú desplegable de idiomas */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-primary"
                id="languageDropdown"
                className="btn-outline-language"
              >
                {language === "es" ? "Español 🇪🇸" : "English 🇺🇸"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => toggleLanguage("es")}>
                  Español 🇪🇸
                </Dropdown.Item>
                <Dropdown.Item onClick={() => toggleLanguage("en")}>
                  English 🇺🇸
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavbarComponent.propTypes = {
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default NavbarComponent;
