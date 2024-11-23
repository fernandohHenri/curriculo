import React from "react";
import Header from "./Componentes/Header";
import Navbar from "./Componentes/NavBar";
import Section from "./Componentes/Section";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="container">
        <Section
          id="about"
          title="Sobre Mim"
          content={
            <p>
              Sou Fernando Henrique, Analista de Dados com experiência em análise
              preditiva e Business Intelligence. Atualmente, estou expandindo minhas
              habilidades para Data Science, com foco em Machine Learning e modelagem
              estatística.
            </p>
          }
        />
        <Section
          id="experience"
          title="Experiência Profissional"
          content={
            <ul>
              <li>
                <strong>Analista de Dados | Empresa XYZ (2019 - Presente)</strong>
                <p>- Desenvolvi dashboards no Qlik Sense para análise de vendas.</p>
                <p>- Automatizei tarefas usando Python e Apache Airflow.</p>
              </li>
            </ul>
          }
        />
        <Section
          id="projects"
          title="Projetos"
          content={
            <ul>
              <li>
                <strong>Modelo de Regressão para Previsão de Vendas</strong>
                <p>
                  Desenvolvido com Python e Scikit-Learn.{" "}
                  <a href="#">Veja no GitHub</a>
                </p>
              </li>
              <li>
                <strong>Análise de Desvios de Preço com Qlik Sense</strong>
                <p>Visualização de dados e insights interativos.</p>
              </li>
            </ul>
          }
        />
        <Section
          id="skills"
          title="Habilidades Técnicas"
          content={
            <ul>
              <li>
                <strong>Linguagens:</strong> Python, SQL, JavaScript
              </li>
              <li>
                <strong>Ferramentas:</strong> Qlik Sense, Apache Airflow, MongoDB
              </li>
              <li>
                <strong>Técnicas:</strong> Machine Learning, análise preditiva,
                visualização de dados
              </li>
            </ul>
          }
        />
        <Section
          id="contact"
          title="Contato"
          content={
            <p>
              <strong>E-mail:</strong> fernando.henrique@email.com <br />
              <strong>LinkedIn:</strong>{" "}
              <a href="#">linkedin.com/in/fernandohenrique</a> <br />
              <strong>GitHub:</strong> <a href="#">github.com/fernandohenrique</a>
            </p>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
