import "./App.css";
import Login from "./Login";
import Register from "./Register";
import ResetPass from "./ResetPass";

function App() {
  return (
    <>
      <div className="flex flex-row justify-center m-8">
        <ResetPass />
      </div>

      <div className="flex flex-row m-4 gap-40 justify-center h-screen">
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
