import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { FormControl, Dropdown, Badge, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { CartState } from "../Context/Context";
const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
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
          <FormControl style={{ width: 500 }} type="search" placeholder="Search a product" class="m-auto"></FormControl>
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
                    <span>{prod.price}</span>
                  </div>
                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    fontSize="20px"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                    }}
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
