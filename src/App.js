
import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Header />
      </div>
      <div className="main-content">
        <Experience />
      </div>
    </div>
  );
}

export default App;
