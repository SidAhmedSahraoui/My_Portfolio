import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import useStyles from "../navbar/navbar-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const classes = useStyles();
  const userNav = (
    <>
      <div className="userNav">
        <Link to="/notifications">
          <FontAwesomeIcon className="not" icon={faBell} size="lg" />
        </Link>

        <Link to="/profile">
          <Button className="profile-btn">
            <FontAwesomeIcon icon={faUser} size="md" /> Profile
          </Button>
        </Link>
      </div>
    </>
  );

  return (
    <nav className={`${classes.root}`}>
      <Container>
        <Row className="brows">
          <Col>
            <div className="nav-links">
              <Link to="/">
                <Button className="link-prim">Claim.</Button>
              </Link>
            </div>
            <div className="nav-links">
              <ul className="links">
                <li className="nav-item">
                  <Link to="/add">
                    <Button className="button-link">Add Claim</Button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">
                    <Button className="button-link">Contact</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            {/*
              <div className="nav-links">
                <Link to="/login">
                  <Button className="button-prim ">Sign in</Button>
                </Link>
              </div>
            */}
            {userNav}
          </Col>
        </Row>
      </Container>
    </nav>
  );
};
export default Navbar;
