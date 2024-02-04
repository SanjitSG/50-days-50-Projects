import { Col, Image, ListGroup, ListGroupItem, Row, Form, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cart = [
    {
      id: "9882d49f-bfab-45a2-9e64-22f297df47cc",
      name: "Licensed Concrete Gloves",
      price: "365",
      image: "https://loremflickr.com/640/480?lock=773740273074176",
      inStock: 0,
      quickDelivery: false,
      ratings: 4,
    },
    {
      id: "ef84cb59-02dd-403c-94a6-982d672791ce",
      name: "Elegant Frozen Table",
      price: "330",
      image: "https://picsum.photos/seed/jpc2ydy/640/480",
      inStock: 5,
      quickDelivery: true,
      ratings: 3,
    },
    {
      id: "700c4245-20f3-4398-8b03-a3f48caed1bd",
      name: "Elegant Steel Salad",
      price: "980",
      image: "https://picsum.photos/seed/lMgqznWb/640/480",
      inStock: 6,
      quickDelivery: false,
      ratings: 3,
    },
  ];
  return (
    <div className="home">
      <div className="productsContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroupItem key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col>
                  <span>Rs. {prod.price}</span>
                </Col>
                <Col>
                  <span>{prod.ratings}</span>
                </Col>
                <Col>
                  <Form.Select value={prod.qty}>
                    {[...Array(prod.inStock).keys()].map((val) => (
                      <option key={val + 1}>{val + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col>
                  <Button type="button">
                    {" "}
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span>Subtotal: {cart.length} items</span>
        <span>Total: Rs. 1000</span>
        <Button type="button">Proceed to checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
