import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand></Navbar.Brand>
        </Link>

        <Nav className="ml-auto">
          <Link to="/about">
            <Button variant="success" className="start">
              Get in touch
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
