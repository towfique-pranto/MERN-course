import { useEffect, useState } from "react";
import BasicExample from "./BasicExample";
import { Routes, Route } from "react-router";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="d-flex gap-3 flex-wrap justify-content-center">
            {users.map((user) => {
              return (
                <BasicExample
                  key={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  image={user.image}
                  university={user.university}
                />
              );
            })}
          </div>
        }
      />
      <Route path="/user" element={<h1>User Details</h1>} />
    </Routes>
  );
}

export default App;
