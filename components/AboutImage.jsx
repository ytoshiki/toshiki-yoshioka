import React from "react";

const AboutImage = (props) => {
  const { bg, className } = props;
  return (
    <div className={`c-about__image ${className && className}`}>
      <div
        className="is-bg"
        style={{
          backgroundImage: `url(/${bg})`,
        }}
      />
    </div>
  );
};

export default AboutImage;
