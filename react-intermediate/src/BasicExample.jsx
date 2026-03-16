import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({ firstName, lastName, image, university }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Text>{university}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
