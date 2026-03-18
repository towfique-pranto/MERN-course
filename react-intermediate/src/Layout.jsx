import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <NavLink style={{ marginRight: "10px" }} to="/">
          Home
        </NavLink>
        <NavLink to="/user/1">User Details</NavLink>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
