import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Claim from "../../img/claim.png";
import Noty from "../../img/noty.png";
import Soc from "../../img/soc.png";
import JS from "../../img/js.jpg";
import TS from "../../img/ts.svg";
import JAVA from "../../img/java.png";
import Express from "../../img/express.svg";
import Mongo from "../../img/mongodb.svg";
import ORCL from "../../img/oracle.png";
import ReactJS from "../../img/react.png";
import VueJS from "../../img/vue.png";
import spring from "../../img/spring.png";
import MySQL from "../../img/mysql.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faTools } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row className="row1 main-row">
          <Col className="col2 main-col">
            <h1 className="title">
              Hello,I'm <span> Ahmed </span>{" "}
            </h1>
            <p className="desc">
              I am full-stack web developer who prefers writing clean code UI/UX
              design , I enjoy crafting elegant experiences , building some open
              source projects on Github or learning new skills.
            </p>
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faTools} size="sm" /> <span>I Work With</span>
          <div className="line line-tools"></div>
        </h1>
        <div className="sec-row">
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={JS} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={TS} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={JAVA} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={ReactJS} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={VueJS} alt="" />
            </div>
            <div className="img-cont">
              <img className="image" src={Express} alt="" />
            </div>
            <div className="img-cont">
              <img className="image" src={spring} alt="" />
            </div>
            <div className="img-cont">
              <img className="image" src={Mongo} alt="" />
            </div>
            <div className="img-cont">
              <img className="image" src={MySQL} alt="" />
            </div>
            <div className="img-cont">
              <img className="image" src={ORCL} alt="" />
            </div>
          </div>
        </div>

        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faLaptopCode} size="sm" />{" "}
          <span>Showcase</span>
          <div className="line"></div>
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
              Noty is a web application for saving notes , tips and reminders{" "}
            </p>
          </div>
          <div className="col1">
            <img className="pic" src={Noty} alt="pic" />
          </div>
        </div>
        <div className="row2">
          <div className="col1">
            <img className="pic" src={Soc} alt="pic" />
          </div>
          <div className="col2">
            <h2 className="title"> Social Charities </h2>
            <p className="desc">
              {" "}
              Social Charities is an Academic project for the 3rd year computer
              science , the main objective is to automate the process of request
              a social service for the university staff{" "}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Home;
