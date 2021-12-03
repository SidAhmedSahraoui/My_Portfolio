import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
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
import Pic from "../../img/PSX_2021.jpg";
import Pis from "../../img/PXL_2021.jpg";
import Icsi from "../../img/icsi.png";
import Andr from "../../img/android.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLaptopCode,
  faQuestionCircle,
  faTools,
  faBook,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
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
              I am full-stack web developer who prefers writing clean code , I
              enjoy crafting elegant experiences , building some open source
              projects on Github or learning new skills.
            </p>
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faQuestionCircle} size="sm" />{" "}
          <span>Who Am I ?</span>
          <div className="line line-tools"></div>
        </h1>
        <Row className="row-who">
          <Col className="col1">
            <div className="cont">
              <div className="img-cont">
                <img className="image" src={Pic} alt="pic" />
              </div>
            </div>
          </Col>
          <Col className="col2">
            <h1 className="title">
              <span>Sid Ahmed Sahraoui </span>{" "}
            </h1>
            <p className="desc">
              I am 21 years old algeria based full stack developer and computer
              science student
            </p>
            <Link to="/resume">
              <Button className="resume-link" variant="success">
                Resume
              </Button>
            </Link>
            <div className="contact">
              <div className="ic">
                <a
                  href="mailto:s.sahraoui@esi-sba.dz"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faEnvelope}
                    size="lg"
                  />
                </a>{" "}
              </div>
              <div className="ic">
                <a
                  href="https://github.com/sidahmedsahraoui"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
                </a>{" "}
              </div>
              <div className="ic">
                <a
                  href="https://www.linkedin.com/in/sid-ahmed-sahraoui-89a164225/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faLinkedin}
                    size="lg"
                  />
                </a>{" "}
              </div>
              <div className="ic">
                <a
                  href="https://instagram.com/sid_ahmed_sahraoui"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faInstagram}
                    size="lg"
                  />
                </a>{" "}
              </div>
            </div>
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
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={Express} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={spring} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={Mongo} alt="" />
            </div>
          </div>
          <div className="cont">
            <div className="img-cont">
              <img className="image" src={MySQL} alt="" />
            </div>
          </div>
          <div className="cont">
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
            <div className="cont">
              <div className="img-cont">
                <img className="image pic" src={Claim} alt="pic" />
              </div>
            </div>
          </div>

          <div className="col2">
            <h2 className="title"> Claim </h2>
            <p className="desc">
              {" "}
              e-administration platform for manage claims and there processing
              in local administration developed in the period of summer
              intership ( 15 days ){" "}
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
            <div className="cont">
              <div className="img-cont">
                <img className="image pic" src={Noty} alt="pic" />
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="col1">
            <div className="cont">
              <div className="img-cont">
                <img className="image pic" src={Soc} alt="pic" />
              </div>
            </div>
          </div>
          <div className="col2">
            <h2 className="title"> Social Charities </h2>
            <p className="desc">
              {" "}
              Social Charities is an Academic project for the 3rd year cs , the
              main objective is to automate the process of request social
              services for the university staff{" "}
            </p>
          </div>
        </div>
        <Container className="about">
          <h1 className="skill-title">
            {" "}
            <FontAwesomeIcon icon={faBook} size="sm" /> <span>Studies</span>
            <div className="line"></div>
          </h1>
          <Row className="row1">
            <Col className="col2">
              <p className="desc">
                - baccalaureat degree in 2018 with honor 16.73 as the first in
                my city
                <br />- 4th year computer science student at ESI (Ecole
                superieure d'informatique)
              </p>
            </Col>
            <div className="cont">
              <Col className="col1">
                <div className="cont">
                  <div className="img-cont">
                    <img className="image" src={Pis} alt="pis" />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
          <h1 className="skill-title">
            {" "}
            <FontAwesomeIcon icon={faGraduationCap} size="sm" />{" "}
            <span>Certificates</span>
            <div className="line line2"></div>
          </h1>

          <Row className="row1">
            <div className="cont">
              <Col className="col1 cert">
                <div className="cont">
                  <div className="img-cont">
                    <img className="image" src={Icsi} alt="pic" />
                  </div>
                </div>
              </Col>
            </div>
            <div className="cont">
              <Col className="col1 cert">
                <div className="cont">
                  <div className="img-cont">
                    <img className="image " src={Andr} alt="pic" />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default Home;
