import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pic from "../../img/PSX_2021.jpg";
import Pis from "../../img/PXL_2021.jpg";
import Icsi from "../../img/icsi.png";
import Andr from "../../img/android.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCertificate } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <Container className="about">
        <Row className="row1">
          <Col className="col1">
            <img className="pic" src={Pic} alt="pic" />
          </Col>
          <Col className="col2">
            <h1 className="title">
              <span>Sid Ahmed Sahraoui </span>{" "}
            </h1>
            <p className="desc">
              I am 20 years Computer Science Student at Higher School of
              Computer Science wich is one of the best cs colleges in algeria ,
              I'm a full stack developer and UI/UX designer
            </p>
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faBook} size="sm" /> <span>Studies</span>
          <div className="line"></div>
        </h1>
        <Row className="row1">
          <Col className="col2">
            <p className="desc">
              - baccalaureat degree in 2018 with honor 16.73 as the first in my
              city
              <br />- 4th year computer science student at ESI (Ecole superieure
              d'informatique)
            </p>
          </Col>
          <Col className="col1">
            <img className="pic" src={Pis} alt="pis" />
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faCertificate} size="sm" />{" "}
          <span>Certificates</span>
          <div className="line line2"></div>
        </h1>

        <Row className="row1">
          <Col className="col1">
            <img className="pic" src={Icsi} alt="pic" />
          </Col>
          <Col className="col1">
            <img className="pic" src={Andr} alt="pic" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
