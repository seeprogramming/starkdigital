import React from "react";

const Hero = (props) => {
  return (
    <div className="jumbotron mt-5">
      <h1 className="font-weight-bold">{props.title}</h1>
    </div>
  );
};

export default Hero;
