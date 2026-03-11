import React from "react";

export default function WorkSample({ work }) {
  const myStyle = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
  };
  return (
    <div style={myStyle}>
      <span>{work.year}</span>
      <h2>{work.exp}</h2>
      <p>{work.inst}</p>
    </div>
  );
}
