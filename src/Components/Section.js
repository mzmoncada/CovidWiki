import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
