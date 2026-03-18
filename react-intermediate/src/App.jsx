import BasicExample from "./BasicExample";
import { Routes, Route } from "react-router";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import User from "./User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BasicExample />} />
        <Route path="/user/:id" element={<User />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
