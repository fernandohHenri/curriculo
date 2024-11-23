
import React from "react";
import logofoto from '../imagem/fernando.jpg';
import '../css/header.css'
import { FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <>
      <div className="header">
        <div className="divimage">
          <img
            src={logofoto}
            alt="Profile"
            className="profile-pic"
          />

        </div>

        <h1 className="name">Fernando Henrique</h1>
        <p className="summary">
          Analista de Dados com mais de 6 anos de experiencia.
        </p>
      </div>
      <div className="contact">
        <h2>Contato</h2>
        <p>Email: fernandohenriquesantos@hotmail.com</p>
        <p>Telefone: (65) 99902-3612</p>
        <a href='https://www.linkedin.com/in/fernando-henrique-12b0b011b/'  target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
      </div>
      <div className="skills">
      <h2>Habilidades</h2>
      <ul>
        <li>React</li>
        <li>CSS</li>
        <li>Airflow</li>
        <li>Python</li>
      </ul>
    </div>
    </>
  );
}

export default Header;
