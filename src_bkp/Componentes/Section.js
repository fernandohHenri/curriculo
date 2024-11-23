import React from "react";
import "../css/Section.css";

const Section = ({ id,title,content }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {content}
    </section>
  );
}

export default Section;
