import React from "react";
import { Document } from "react-pdf";
import CV from "../../img/CV_Sahraoui_Sid_Ahmed.pdf";

const Resume = () => {
  return (
    <div>
      <Document file={CV} />
      <p>Page 1 of 1</p>
    </div>
  );
};
export default Resume;
