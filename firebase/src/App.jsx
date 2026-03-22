import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="flex flex-row m-4 gap-40 justify-center h-screen items-center">
      <Login />
      <Register />
    </div>
  );
}

export default App;
