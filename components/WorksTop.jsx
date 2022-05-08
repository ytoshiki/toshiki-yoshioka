import React from "react";

const WorksTop = (props) => {
  const { title, text } = props;

  return (
    <div className="l-container">
      <div className="c-works-top">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WorksTop;
