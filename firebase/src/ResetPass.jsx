import { resetPassword } from "./firebase/firebase.config";
import { useState } from "react";

function ResetPass() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    await resetPassword(email);
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label className="label mb-4">Forgot password?</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-neutral mt-4">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPass;
