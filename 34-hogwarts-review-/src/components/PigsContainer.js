import React from "react";
import PigCard from "./PigCard";

class PigsContainer extends React.Component {
  state = {
    pigs: []
  };

  // getPigs = () => {
  //   return;
  // };

  componentDidMount() {
    // this.getPigs().then(pigs => this.setState({ pigs }));
    fetch("http://localhost:3000/hogs")
      .then(resp => resp.json())
      .then(pigs => this.setState({ pigs }));
  }

  filterGreased = () => {
    return this.props.toggle
      ? this.state.pigs.filter(pig => pig.greased === true)
      : this.state.pigs;
  };

  sortPigs = () => {
    switch (this.props.sortType) {
      case "name":
        return this.filterGreased().sort((a, b) =>
          a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
        );
      case "weight":
        return this.filterGreased().sort((a, b) => a.weight - b.weight);
      default:
        return this.filterGreased();
    }
  };

  render() {
    return (
      <div className="ui cards">
        {this.sortPigs().map(pig => {
          return <PigCard {...pig} />;
        })}
      </div>
    );
  }
}

export default PigsContainer;
