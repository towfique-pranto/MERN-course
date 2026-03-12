import { useEffect } from "react";

export default function LoadUser() {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>LoadUser</div>;
}
