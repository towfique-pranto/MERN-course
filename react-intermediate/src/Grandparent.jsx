import React from "react";
import Parent from "./Parent";

export default function Grandparent() {
  return (
    <div className="p-3 border w-25 m-3 border-danger">
      Grandparent
      <Parent />
    </div>
  );
}
