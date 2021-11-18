import React from "react";
import { Container, Col } from "react-bootstrap";
import useStyles from "./note-jss";
const Note = (props) => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Col>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="core">
            <p>{props.core}</p>
          </div>
        </Col>
      </Container>
    </>
  );
};
export default Note;
