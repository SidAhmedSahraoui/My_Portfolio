import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useStyles from "./contact-jss";
const Contact = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <Container>
        <Row className="main-row">
          <Col className="left-part">
            <div className="contact">
              <div className="title-box">
                <h1 className="title">
                  Send Message Us
                  <span className="line" />
                </h1>
              </div>
              <Form className="form-container">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control con-area"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="button-primary mt-3"
                />
              </Form>
            </div>
          </Col>
          <Col className="right-part">
            <div className="social">
              <div className="title-box">
                <h1 className="title">
                  Get in Touch
                  <span className="line" />
                </h1>
              </div>
              <div className="social-media">
                <a
                  href="https://github.com/sidahmedsahraoui/Claim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a
                  href="https://instagram.com/sid_ahmed_sahraoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
                <a
                  href="https://facebook.com/ayQya.23/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                </a>
                <a
                  href="https://linkedin.com/sid_ahmed_sahraoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
                <a
                  href="https://wa.me/+123791262026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faWhatsapp} />
                </a>
                <a
                  href="mailto:s.sahraoui@esi-sba.dz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3"
                >
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>
              </div>
              <Row className="sec-row">
                <div className="message">
                  <h3>
                    Claim is a website for manage claims in local
                    administrations
                  </h3>
                </div>
                <div className="copyright">
                  <p>Copyright &copy; 2021 Claim</p>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
