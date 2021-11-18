import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useStyles from "./footer-jss";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={`${classes.root}`}>
        Built with{"   "}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="icon" icon={faReact} size="lg" />
        </a>{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        <a
          href="https://github.com/sidahmedsahraoui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} size="lg" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
