import React from "react";
import { Container } from "react-bootstrap";
import Note from "./note";

const AllNote = () => {
  return (
    <>
      <Container>
        <Note title="ok" core="bb" />
        <Note title="ok" core="bb" />
        <Note title="ok" core="bb" />
        <Note title="ok" core="bb" />
        <Note title="ok" core="bb" />
      </Container>
    </>
  );
};
export default AllNote;
