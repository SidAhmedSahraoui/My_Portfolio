import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { AwesomeButtonProgress } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="ml-auto">
          <a href="#footer">
            <AwesomeButtonProgress
              className="aws-btn"
              cssModule={AwesomeButtonStyles}
              type="primary"
              onPress={(next) => {
                // do a sync/async task then call `next()`
              }}>
              Get in touch
            </AwesomeButtonProgress>
          </a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
