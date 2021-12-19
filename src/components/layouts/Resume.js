import React from "react";
import CV from "../../img/Sid Ahmed's Resume.pdf";

const Resume = () => {
  return (
    <div>
      <object data={CV} type="application/pdf" width="100%" height="1200px">
        <p>
          Alternative text <a href={CV}>to PDF</a>
        </p>
      </object>
    </div>
  );
};
export default Resume;
