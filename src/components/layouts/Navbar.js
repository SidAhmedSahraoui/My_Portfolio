import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand></Navbar.Brand>
        </Link>

        <Nav className="ml-auto">
          <Link to="/contact">
            <Button className="start">Get started</Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
