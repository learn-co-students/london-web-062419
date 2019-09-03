import React, { Fragment } from "react";

const Sushi = props => {
  const { img_url, name, price, eaten } = props;
  return (
    <div className="sushi">
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */
        eaten ? null : (
          <img
            src={img_url}
            width="100%"
            onClick={() => props.handleSushiClick(props)}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
