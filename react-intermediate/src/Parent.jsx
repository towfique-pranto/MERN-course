import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div className="p-3 border w-75 m-3 border-danger">
      Parent
      <Child />
    </div>
  );
}
