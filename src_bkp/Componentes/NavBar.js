import React from "react";
import "../css/Navbar.css";

  const Navbar = ({  }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#about">Sobre Mim</a>
        <a href="#experience">Experiência</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </div>
    </nav>
  );
}

export default Navbar;
