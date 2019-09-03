import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    sushiArrayIndex: 0,
    eatenSushis: [],
    money: 100
  };

  getSushis = () => {
    return fetch(API).then(resp => resp.json());
  };

  componentDidMount() {
    this.getSushis().then(sushis => this.setState({ sushis }));
  }

  displaySushis = () => {
    return this.state.sushis.slice(
      this.state.sushiArrayIndex,
      this.state.sushiArrayIndex + 4
    );
  };

  eatSushi = sushi => {
    const deductedMoney = this.state.money - sushi.price;

    if (deductedMoney >= 0) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi],
        money: deductedMoney
      });
    }
  };

  handleMoreShushi = () => {
    let moreSushisIndex = this.state.sushiArrayIndex + 4;

    if (moreSushisIndex === this.state.sushis.length) {
      moreSushisIndex = 0;
    }
    this.setState({ sushiArrayIndex: moreSushisIndex });
  };

  topUpMoney = amount => {
    const parsedAmount = parseInt(amount);
    this.setState({ money: this.state.money + parsedAmount });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          eatenSushis={this.state.eatenSushis}
          sushiArray={this.displaySushis()}
          handleClick={this.handleMoreShushi}
          handleSushiClick={this.eatSushi}
          topUpMoney={this.topUpMoney}
        />
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money} />
      </div>
    );
  }
}

export default App;
