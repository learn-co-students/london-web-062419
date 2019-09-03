import React from "react";

const MoreMoney = props => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(e.target.amount.value);
      }}
    >
      <input type="number" name="amount" />
      <input type="submit" value="Top me up" />
    </form>
  );
};

export default MoreMoney;
