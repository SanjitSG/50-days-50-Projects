import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { FormControl, Dropdown, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { CartState } from "../Context/Context";
const Header = () => {
  // const {
  //   state: { cart },
  //   dispatch,
  //   productDispatch,
  // } = CartState();
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
  console.log(CartState());
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} type="search" placeholder="Search a product" className="m-auto"></FormControl>
        </Navbar.Text>
        <Nav>
          <Dropdown drop="start">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.map((prod) => (
                <span key={prod.id} className="cartItem">
                  <img className="cartItemImg" src={prod.image} alt={prod.title} />
                  <div className="cartItemDetails">
                    <span>{prod.name}</span>
                    <span>Rs. {prod.price}</span>
                  </div>
                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    fontSize="20px"
                    // onClick={() => {
                    //   dispatch({
                    //     type: "REMOVE_FROM_CART",
                    //     payload: prod,
                    //   });
                    // }}
                    id="delete"
                  />
                </span>
              ))}
              <Link to="/cart">
                <Button style={{ width: "95%", margin: "0 10px" }}>Go to Cart</Button>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
