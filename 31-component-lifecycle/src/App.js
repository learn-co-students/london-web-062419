import React from 'react'
import './App.css'
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
    rankings: [],
    searchTerm: '',
    top50FilterAndSort: false
  }

  removePlayer = id => {
    const rankings = this.state.rankings.filter(player => player.id !== id)
    this.setState({ rankings })
  }

  getRankings = () => {
    fetch('http://localhost:3001/rankings')
      .then(resp => resp.json())
      .then(rankings => this.setState({ rankings }))
  }

  submitForm = (searchTerm, top50Value) => {
    console.log(top50Value)
    this.setState({
      searchTerm,
      top50FilterAndSort: top50Value === 'Top 50'
    })
  }

  updateSearchTerm = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterPlayers = () =>
    this.state.rankings.filter(p =>
      p.player_name
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    )

  top50 = players =>
    players
      .filter(player => player.current_rank <= 50)
      .sort((playerA, playerB) => playerA.current_rank - playerB.current_rank)

  componentDidMount () {
    console.log('App mounted!')
    this.getRankings()
  }

  componentDidUpdate () {
    console.log('App updated!')
  }

  render () {
    console.log(this.state)
    const filteredPlayers = this.filterPlayers()
    const sortedPlayers = this.state.top50FilterAndSort
      ? this.top50(filteredPlayers)
      : filteredPlayers

    return (
      <div className='App'>
        <Title title='anyone for tennis??' />
        <SearchOptions
          updateSearchTerm={this.updateSearchTerm}
          submitForm={this.submitForm}
          searchTerm={this.state.searchTerm}
        />
        <CardContainer
          players={sortedPlayers}
          removePlayer={this.removePlayer}
        />
      </div>
    )
  }
}

export default App
