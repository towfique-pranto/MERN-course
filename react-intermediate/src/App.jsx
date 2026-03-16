import BasicExample from "./BasicExample";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicExample />} />
      <Route path="/user" element={<h1>User Details</h1>} />
    </Routes>
  );
}

export default App;
