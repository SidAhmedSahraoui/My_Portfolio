import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pic from "../../img/PSX_2021.jpg";
import Pis from "../../img/PXL_2021.jpg";
import Icsi from "../../img/icsi.png";
import Andr from "../../img/android.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEnvelope,
  faGraduationCap,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faInstagram,
  faJava,
  faJs,
  faLinkedin,
  faNode,
  faNpm,
  faPhp,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
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
            <div className="contact">
              <div className="ic">
                <a
                  href="mailto:s.sahraoui@esi-sba.dz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
                </a>{" "}
              </div>
              <div className="ic">
                <a
                  href="https://www.linkedin.com/in/sid-ahmed-sahraoui-89a164225/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  rel="noopener noreferrer"
                >
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
          <FontAwesomeIcon icon={faGraduationCap} size="sm" />{" "}
          <span>Certificates</span>
          <div className="line line2"></div>
        </h1>

        <Row className="row1">
          <Col className="col1 cert">
            <img className="pic" src={Icsi} alt="pic" />
          </Col>
          <Col className="col1 cert">
            <img className="pic" src={Andr} alt="pic" />
          </Col>
        </Row>
        <h1 className="skill-title">
          {" "}
          <FontAwesomeIcon icon={faTools} size="sm" /> <span>Tools</span>
          <div className="line line3"></div>
        </h1>
        <Row className="row1 last-row">
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faHtml5} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faCss3} size="lg" />
          </Col>

          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faJs} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faSass} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faBootstrap} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faNode} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faNpm} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faPhp} size="lg" />
          </Col>

          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faJava} size="lg" />
          </Col>

          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faReact} size="lg" />
          </Col>

          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faVuejs} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faDocker} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faGit} size="lg" />
          </Col>
          <Col className="col1 cert">
            <FontAwesomeIcon className="tool" icon={faGithub} size="lg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
