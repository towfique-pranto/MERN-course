import { useState } from "react";

export default function Counter() {
  let [myData, setMyData] = useState(0);
  const myStyle = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    backgroundColor: "green",
  };
  const changeData = () => {
    setMyData(myData + 1);
  };

  return (
    <div style={myStyle}>
      <h1>Counter {myData}</h1>
      <button onClick={changeData}>update</button>
    </div>
  );
}
