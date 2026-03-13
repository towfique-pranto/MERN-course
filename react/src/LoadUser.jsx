import { useState, useEffect } from "react";

export default function LoadUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setData(data.users));
  }, []);

  return (
    <div className="text-rose-500 text-4xl">
      {data.map((user) => {
        return (
          <h1 key={user.id}>
            {user.firstName} {user.lastName}
          </h1>
        );
      })}
    </div>
  );
}
