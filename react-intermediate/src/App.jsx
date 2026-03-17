import BasicExample from "./BasicExample";
import { Routes, Route } from "react-router";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BasicExample />} />
        <Route path="/user" element={<h1>User Details</h1>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
