import React from "react";
import PigDetail from "./PigDetail";

class PigCard extends React.Component {
  state = {
    clicked: false
  };

  getImage() {
    const name = this.props.name
      .split(" ")
      .join("_")
      .toLowerCase();
    return require(`../hog-imgs/${name}.jpg`);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const { name, specialty, weight, greased } = this.props;
    return (
      <div className="ui card">
        <div onClick={() => this.handleClick()} className="image">
          <img src={this.getImage()} />
        </div>
        <a className="header">{name}</a>
        {this.state.clicked ? <PigDetail {...this.props} /> : null}
      </div>
    );
  }
}

export default PigCard;
