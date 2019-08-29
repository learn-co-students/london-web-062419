import React from 'react';
import './App.css';
import rankings from './rankings'
import Title from './components/Title'
import CardContainer from './components/CardContainer'
import SearchOptions from './components/SearchOptions'

// name 
// picture
// ranking
// points
// country

class App extends React.Component {

  state = {
    searchTerm: '',
    top50FilterAndSort: false
  }

  submitForm = (searchTerm, top50Value) => {
    console.log(top50Value)
    this.setState({
      searchTerm,
      top50FilterAndSort: top50Value === 'Top 50'
    })
  }

  filterPlayers = () => rankings.filter(p => p.player_name.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))


  top50 = players => players.filter(player => player.current_rank <= 50)
    .sort((playerA, playerB) => playerA.current_rank - playerB.current_rank)

  render() {
    const filteredPlayers = this.filterPlayers()
    const sortedPlayers = this.state.top50FilterAndSort ? this.top50(filteredPlayers) : filteredPlayers

    return (
      <div className="App">
        <Title title={"anyone for tennis??"} />
        <SearchOptions submitForm={this.submitForm} />
        <CardContainer players={sortedPlayers} />
      </div>
    );
  }
}

export default App;