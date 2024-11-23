import React from "react";
import "./Section.css";

function Section({ id, title, content }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {content}
    </section>
  );
}

export default Section;
