import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";
import MoreMoney from "../components/MoreMoney";

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiArray.map(sushi => {
          const eaten = !!props.eatenSushis.find(
            sushi2 => sushi2.id === sushi.id
          );

          return (
            <Sushi
              {...sushi}
              eaten={eaten}
              handleSushiClick={props.handleSushiClick}
            />
          );
        })}
        <MoreButton handleClick={props.handleClick} />
        <MoreMoney onSubmit={props.topUpMoney} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
