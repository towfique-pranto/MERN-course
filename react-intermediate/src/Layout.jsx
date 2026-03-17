import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link style={{ marginRight: "10px" }} to="/">
          Home
        </Link>
        <Link to="/user">User Details</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
