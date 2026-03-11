import React from "react";

export default function WorkSample({ year, exp, inst }) {
  return (
    <div>
      <span>{year}</span>
      <h2>{exp}</h2>
      <p>{inst}</p>
    </div>
  );
}
