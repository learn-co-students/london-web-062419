import React from 'react'

import Search from './components/Search'
import PetsContainer from './components/PetsContainer'

const API_ENDPOINT = 'http://localhost:3003/pets'

class App extends React.Component {
  state = {
    pets: []
  }

  performSearch = (petType) => {
    console.log(petType)
    fetch(
      petType === 'all' ? API_ENDPOINT : `${API_ENDPOINT}?type=${petType}`
    )
      .then(res => res.json())
      .then(pets => this.setState({ pets }))
  }

  adoptPet = (petId) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === petId) {
          pet.isAdopted = true
        }
        return pet
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Search performSearch={this.performSearch} />
            </div>
            <div className="twelve wide column">
              <PetsContainer pets={this.state.pets} adoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
