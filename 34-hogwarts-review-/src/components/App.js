import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigsContainer from "./PigsContainer";

class App extends Component {
  state = {
    toggleGreased: false,
    sortType: ""
  };

  handleToggleState = () => {
    this.setState({ toggleGreased: !this.state.toggleGreased });
  };

  handleSortState = eventValue => {
    this.setState({ sortType: eventValue });
  };

  render() {
    return (
      <div className="App">
        <Nav
          handleClick={this.handleToggleState}
          handleDropdown={this.handleSortState}
        />
        <PigsContainer
          toggle={this.state.toggleGreased}
          sortType={this.state.sortType}
        />
      </div>
    );
  }
}

export default App;
