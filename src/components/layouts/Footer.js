import React from "react";
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row } from "react-bootstrap";
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="contact-container">
          <div className="contact">
            <div className="con-box">
              <FontAwesomeIcon className="ic" icon={faMobileAlt} size="lg" />
              <div className="hello">
                <h5> +213 07-91-26-20-26</h5>
              </div>
            </div>
            <div className="con-box">
              <FontAwesomeIcon className="ic" icon={faEnvelope} size="lg" />
              <div className="hello">
                <h5>s.sahraoui@esi-sba.dz</h5>
              </div>
            </div>
            <div className="con-box">
              <FontAwesomeIcon className="ic" icon={faMapMarkerAlt} size="lg" />
              <div className="hello">
                <h5> Oued El Abtal - Mascara ⇆ Sidi Bel Abbes</h5>
              </div>
            </div>
          </div>
          <div className="contact">
            <div className="con-box">
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="con-box">
              <textarea placeholder="Content"></textarea>
            </div>
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
