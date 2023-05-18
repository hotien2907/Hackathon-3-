import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardProducts(props) {
  const { img, title, text} = props;
  const [counts, setCounts] = useState(0);
  const handleApp = () => {
    setCounts(counts + 1);
  };
  const handleDow = () => {
    setCounts(counts - 1);
  };
  return (
    <div className="item">
      <Card
        style={{ width: "200px", backgroundColor: "black", color: "white" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <div className="button">
            <Button variant="primary">Chi tiết</Button>
            <Button>
              <ion-icon name="heart-outline"></ion-icon>
            </Button>
          </div>
          <div className="count">
            <button onClick={handleDow}>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <p>{counts}</p>
            <button onClick={handleApp}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProducts;
