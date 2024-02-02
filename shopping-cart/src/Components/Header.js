import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { FormControl, Dropdown, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
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
              <Badge>5</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <Link to="/cart"></Link>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        {/* <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
      </Container>
    </Navbar>
  );
};

export default Header;
