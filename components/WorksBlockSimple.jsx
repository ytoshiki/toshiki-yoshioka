import React from "react";

const WorksBlockSimple = ({ title, text }) => {
  return (
    <div className="c-works-block-simple">
      <h2>{title}</h2>
      <div className="c-works-block-simple__block">{text}</div>
    </div>
  );
};

export default WorksBlockSimple;
