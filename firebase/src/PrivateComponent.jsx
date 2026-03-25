import React from "react";

function PrivateComponent({ children }) {
  const user = false;
  return <div>{user ? children : <div>Please login</div>}</div>;
}

export default PrivateComponent;
