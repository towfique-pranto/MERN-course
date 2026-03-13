import { useEffect, useState } from "react";
import User from "./User";
import Navbar from "./Navbar";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  console.log(users);
  return (
    <>
      <Navbar />
      <div className="flex gap-2 flex-wrap justify-center">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
