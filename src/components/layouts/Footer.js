import React from "react";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobile,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="contact">
          <div>
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
        </div>
        <div className="main">
          <Row>
            <h5>
              Built with{"   "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by
              {"  "}
              <a
                href="https://github.com/sidahmedsahraoui"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
              </a>
              {"  "}
              using
              {"  "}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={faReact} size="lg" />
              </a>
            </h5>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Footer;
