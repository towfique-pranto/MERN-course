import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate(-1)} style={{ marginLeft: "10px" }}>
          Go Back
        </button>
      </div>
    </div>
  );
}
