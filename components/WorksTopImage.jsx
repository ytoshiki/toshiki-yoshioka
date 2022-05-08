import React from "react";

const WorksTopImage = ({ bg }) => {
  return (
    <div className="c-works__image is-page">
      <div className="c-works__image-inner">
        <div
          className="is-bg"
          style={{
            backgroundImage: `url(/${bg})`,
          }}
        />
      </div>
    </div>
  );
};

export default WorksTopImage;
