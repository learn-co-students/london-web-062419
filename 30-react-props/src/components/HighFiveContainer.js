import React from "react";

import HighFive from "./HighFive";

function HighFiveContainer(props) {
  return (
    <div className="hi5-container">
      {props.highFivesData.map(highFiveObject => {
        return <HighFive {...highFiveObject} key={highFiveObject.title} />;
      })}
    </div>
  );
}

export default HighFiveContainer;
