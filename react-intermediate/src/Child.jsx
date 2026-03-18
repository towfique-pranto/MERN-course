import React from "react";
import { DataContextAPI } from "./DataContext.jsx";

export default function Child() {
  const data = React.useContext(DataContextAPI);
  return <div className="p-3 border w-75 m-3 border-danger">Child {data}</div>;
}
