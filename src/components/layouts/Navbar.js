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
          <a href="#footer">
            <Button variant="success" className="start">
              Get in touch
            </Button>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
