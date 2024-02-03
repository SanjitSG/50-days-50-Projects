import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
const SingleProduct = ({ prod }) => {
  return (
    <div className="products">
      <Card>
        <Card.Body>
          <Card.Img src={prod.image} alt={prod.name} />
          <Card.Title className="title">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>Rs. {prod.price}</span>
            <Rating />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button> {"  "}
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
