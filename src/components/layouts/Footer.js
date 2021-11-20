import React from "react";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
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
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
              </a>
              {"  "}
              using
              {"  "}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
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
