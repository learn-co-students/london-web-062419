import React from "react";

const PigDetail = props => {
  return (
    <div>
      <div className="content">
        <div className="meta">
          <span className="date">weight: {props.weight}</span>
        </div>
        <div className="description">
          Specialty: {props.specialty}
          <br />
          Medal: {props["highest medal achieved"]}
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          {props.greased ? "greased" : "clean"}
        </a>
      </div>
    </div>
  );
};

export default PigDetail;
