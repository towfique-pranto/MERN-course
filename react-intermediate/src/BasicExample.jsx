import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <div className="d-flex gap-3 flex-wrap justify-content-center">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={user.image} />
              <Card.Body>
                <Card.Title>
                  {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Text>{user.university}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default BasicExample;
