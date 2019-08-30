import React from 'react'

import Pet from './Pet'

class PetsContainer extends React.Component {
  render() {
    return <div className="ui cards">
      {
        this.props.pets.map(pet => <Pet
          {...pet}
          adoptPet={() => this.props.adoptPet(pet.id)}
        />)
      }
    </div>
  }
}

export default PetsContainer
