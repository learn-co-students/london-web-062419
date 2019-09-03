import React from "react";

function HighFive(props) {
  const { image, title } = props;
  return (
    <div className="high-five">
      <img alt="hi five" src={image} />
      <p>{title}</p>
    </div>
  );
}

export default HighFive;
