import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Pers from "../../img/PSX_2021.jpg";
import Claim from "../../img/claim.png";
import Noty from "../../img/noty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row className="row1">
          <Col className="col1">
            <img className="pic" src={Pers} alt="pic" />
          </Col>
          <Col className="col2">
            <h1 className="title">
              Hello,I'm <span> Ahmed </span>{" "}
            </h1>
            <p className="desc">
              I am full-stack web developer and UI/UX designer who prefers
              writing clean code , enjoy crafting elegant experiences
            </p>
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faCode} size="md" /> <span>Showcase</span>
        </h1>
        <div className="row2">
          <div className="col1">
            <img className="pic" src={Claim} alt="pic" />
          </div>
          <div className="col2">
            <h2 className="title"> Claim </h2>
            <p className="desc">
              {" "}
              e-administration platform for manage claims and there processing
              in local administration , this project was developed in the period
              of summer intership ( 15 days ){" "}
            </p>
          </div>
        </div>
        <div className="row2 row3">
          <div className="col2">
            <h2 className="title"> Noty </h2>
            <p className="desc">
              {" "}
              Noty is a MERN application for saving notes , tips and reminders{" "}
            </p>
          </div>
          <div className="col1">
            <img className="pic" src={Noty} alt="pic" />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
