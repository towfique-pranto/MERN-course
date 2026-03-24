import { useState } from "react";
import { signInUser, signInWithGoogle } from "./firebase/firebase.config";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // function to handle input changes for both email and password
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log("Current user state:", user);
  };

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(user.email, user.password);
    toast.success("Login successful!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            value={user.email}
            onChange={handleChange}
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="btn btn-success mt-4"
          >
            Login with Google
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
